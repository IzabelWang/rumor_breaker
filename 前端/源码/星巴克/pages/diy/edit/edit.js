var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/objectSpread")), a = t(require("../../../@babel/runtime/helpers/defineProperty")), i = t(require("../../../547BC8221C91398C321DA02558497AF5.js")), s = (t(require("../../../4445B0631C91398C2223D86471997AF5.js")), 
t(require("vs-logger"))), o = getApp();

Page(s.default.Page({
    data: {
        selectedId: -1,
        kindType: 0,
        iconNum: 0,
        textNum: 0,
        rotate: 0,
        cardImage: "",
        diyInfo: null,
        tabList: [],
        userList: [],
        isInit: 0,
        imgUrl: {},
        hiddenInput: !0,
        wishesList: [],
        wishesSel: 0,
        wishesInfo: {
            value: "",
            focus: !1
        },
        maxLength: {
            icon: 10,
            text: 5
        },
        tipsShow: 0
    },
    localData: {
        nodeId: 0,
        coverInfo: {
            id: "",
            index: 0
        },
        boxInfo: {
            height: 0,
            width: 0
        },
        coverUrl: {},
        ctx: null,
        zIndex: 0,
        userList: [],
        canvasScale: 1,
        uploadType: !1,
        wishesId: 1
    },
    showModal: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.showModal(Object.assign({
            content: "",
            showCancel: !1
        }, t));
    },
    closeTips: function() {
        this.setData({
            tipsShow: !1
        });
    },
    onLoad: function(t) {
        var e = this, a = o.globalData.diyInfo;
        o.globalData.theme_id && "undefined" !== o.globalData.theme_id ? a && t.cover_id ? (wx.getStorageSync("firstInDiy") || (setTimeout(function() {
            e.setData({
                tipsShow: !0
            });
        }, 1e3), wx.setStorage({
            key: "firstInDiy",
            data: "1"
        })), this.setData({
            scr: o.globalData.sysinfo.whRatio >= 2 ? "ext" : "nml",
            isAndroid: o.globalData.sysinfo.system.indexOf("Android") > -1,
            background_url: o.globalData.diyInfo.background_url
        }), this.localData.coverInfo = {
            id: t.cover_id,
            index: t.cover_index
        }, o.doTracking("actPv", JSON.stringify({
            page_path: "/pages/diy/edit",
            channel: o.globalData.channel,
            scene: o.globalData.sceneId
        }), Math.floor(Date.now() / 1e3)), this.init(a)) : wx.redirectTo({
            url: "/pages/diy/diy?theme_id=".concat(o.globalData.theme_id)
        }) : wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    getImageData: function(t) {
        var e = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var a = {
            theme_id: o.globalData.theme_id
        }, s = o.getSignurature(a);
        wx.request({
            url: i.default.GET_IMAGE,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(a, {
                sign: s
            }),
            success: function(t) {
                if (200 != t.data.retcode) return o.logger(i.default.GET_IMAGE, {
                    level: 3,
                    message: t.data.msg || "获取主题内图片失败",
                    request: Object.assign(a, {
                        sign: s
                    }),
                    response: t
                }), e.setData({
                    isInit: 1
                }), void wx.navigateTo({
                    url: "/pages/error/error?api=cover_getimage&code=" + t.data.retcode
                });
                o.globalData.diyInfo.imageData = t.data.data, e.init(o.globalData.diyInfo), o.logger(i.default.GET_IMAGE, {
                    level: 4,
                    message: "获取主题内图片成功",
                    request: a,
                    response: t
                });
            },
            fail: function(n) {
                e.showModal({
                    content: "网络超时，请重试",
                    success: function() {
                        e.getImageData(t);
                    }
                }), wx.hideLoading(), o.logger(i.default.GET_IMAGE, {
                    level: 4,
                    message: n.errMsg || "获取超时",
                    request: Object.assign(a, {
                        sign: s
                    }),
                    response: n
                });
            }
        });
    },
    init: function(t) {
        var e = this;
        this.loadImage({
            nodeId: this.localData.coverInfo.id + "_" + this.localData.coverInfo.index,
            iconUrl: t.cover_list[this.localData.coverInfo.index].image
        }, function(a) {
            e.setData({
                tabList: t.tab_info,
                diyInfo: t,
                cardImage: a,
                isInit: 2
            }), wx.setNavigationBarTitle({
                title: t.title
            }), e.getCanvasProp(), e.localData.ctx = wx.createCanvasContext("myCanvas"), wx.hideLoading();
        }, function() {
            e.init(t);
        });
    },
    resetSize: function(t) {
        var e = this;
        setTimeout(function() {
            wx.createSelectorQuery().select("#movable_".concat(t.id)).boundingClientRect(function(i) {
                var s, o = "1" == t.type ? 0 : 32, n = i.width / t.scale + o, l = i.height / t.scale + o / 2, c = Math.sqrt(Math.pow(n, 2) + Math.pow(l, 2));
                e.localData.userList[t.id].width = n, e.localData.userList[t.id].height = l, e.localData.userList[t.id].z = c, 
                e.setData((s = {}, (0, a.default)(s, "userList[".concat(t.id, "].width"), n), (0, 
                a.default)(s, "userList[".concat(t.id, "].height"), l), (0, a.default)(s, "userList[".concat(t.id, "].z"), c), 
                (0, a.default)(s, "userList[".concat(t.id, "].rotate"), t.oRotate), (0, a.default)(s, "selectedId", t.id), 
                (0, a.default)(s, "rotate", t.rotate), s));
            }).exec();
        }, 16.67);
    },
    resetUserList: function() {
        var t = this;
        this.localData.userList.forEach(function(e, i) {
            var s;
            e && t.setData((s = {}, (0, a.default)(s, "userList[".concat(i, "].ox"), e.ox), 
            (0, a.default)(s, "userList[".concat(i, "].oy"), e.oy), (0, a.default)(s, "userList[".concat(i, "].sx"), e.sx), 
            (0, a.default)(s, "userList[".concat(i, "].sy"), e.sy), s));
        });
    },
    getRandomPosition: function() {
        var t = this.localData.boxInfo.width / 640 * 200, e = t / 2, a = this.localData.boxInfo.width - t / 2, i = this.localData.boxInfo.height / 384 * 200, s = i / 2, o = this.localData.boxInfo.height - i / 2;
        return {
            x: parseInt(Math.random() * (a - e + 1) + e, 10),
            y: parseInt(Math.random() * (o - s + 1) + s, 10)
        };
    },
    getBlackColor: function(t) {
        for (var e = 0; e < t.length; e++) if (t[e].content && "#000000" == t[e].content) return {
            colorSel: e,
            color: t[e].content,
            colorId: t[e].id
        };
    },
    addIcon: function(t) {
        var e = this;
        this.resetUserList();
        var i = t.currentTarget.dataset, s = this.data.kindType, n = this.data.tabList[s], l = n.content.image_content ? n.content.image_content[i.id] : {}, c = (n.content.color_content && n.content.color_content[0], 
        this.getRandomPosition());
        if (!("1" == n.type && this.data.iconNum >= this.data.maxLength.icon)) {
            var d, r = this.data.selectedId;
            if ("2" != n.type || -1 == r || "2" != this.data.userList[r].type) {
                if (!("2" == n.type && this.data.textNum >= this.data.maxLength.text)) {
                    d = {
                        id: this.localData.nodeId++,
                        scale: 1,
                        width: 0,
                        height: 0,
                        rotate: 0,
                        oRotate: 0,
                        ox: c.x,
                        oy: c.y,
                        sx: c.x,
                        sy: c.y,
                        type: n.type,
                        disable: !1,
                        zIndex: this.localData.zIndex++,
                        tabId: s
                    };
                    var h = {};
                    "1" == n.type ? (d.iconUrl = l.content, d.nodeId = l.id) : ((d = Object.assign(d, this.getBlackColor(n.content.color_content))).content = i.content, 
                    d.nodeId = i.id, d.imgHeight = 70), this.loadImage(d, function() {
                        if ("1" == n.type) h.iconNum = e.data.iconNum + 1; else {
                            h.textNum = e.data.textNum + 1;
                            var t = e.data.wishesList;
                            t.push({
                                nodeIndex: d.id,
                                nodeId: i.id,
                                content: i.content
                            }), h.wishesList = t, h.wishesSel = e.getWishesIndex(i.id);
                        }
                        h.userList = e.data.userList, h.userList[d.id] = d, e.localData.userList[d.id] = Object.assign({}, d), 
                        e.setData(h), e.resetSize(d), e.hideInput(), o.doTracking("actChooseIcon", JSON.stringify({
                            cover_id: e.localData.coverInfo.id,
                            icon_id: "1" == n.type ? d.nodeId : "0"
                        }), Math.floor(Date.now() / 1e3));
                    });
                }
            } else this.loadImage(Object.assign(this.data.userList[r], {
                nodeId: i.id,
                content: i.content
            }), function() {
                var t, s = e.data.userList[r].rotate;
                e.setData((t = {}, (0, a.default)(t, "userList[".concat(r, "].width"), 0), (0, a.default)(t, "userList[".concat(r, "].height"), 0), 
                (0, a.default)(t, "userList[".concat(r, "].content"), i.content), (0, a.default)(t, "userList[".concat(r, "].nodeId"), i.id), 
                (0, a.default)(t, "userList[".concat(r, "].rotate"), 0), (0, a.default)(t, "userList[".concat(r, "].oRotate"), s), 
                (0, a.default)(t, "wishesList[".concat(e.getWishesIndex(i.id), "].content"), i.content), 
                t)), e.localData.userList[r].content = i.content, e.localData.userList[r].nodeId = i.id, 
                e.localData.userList[r].imgHeight = 70, e.resetSize(e.data.userList[r]), e.hideInput(), 
                o.doTracking("actChooseIcon", JSON.stringify({
                    cover_id: e.localData.coverInfo.id,
                    icon_id: "0"
                }), Math.floor(Date.now() / 1e3));
            });
        }
    },
    getWishesIndex: function(t) {
        for (var e = 0, a = 0; a < this.data.wishesList.length; a++) if (this.data.wishesList[a].nodeId == t) {
            e = a;
            break;
        }
        return e;
    },
    changeImgUrl: function(t, e) {
        var a = this.data.imgUrl;
        a[t] = e, this.setData({
            imgUrl: a
        });
    },
    loadImage: function(t, a) {
        var i = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
        if ("2" == t.type) return a();
        var n = t.colorId ? "".concat(t.nodeId, "_").concat(t.colorId) : t.nodeId, l = this.data.imgUrl[n];
        if (l) {
            if ("pending" == l) return;
            a(l);
        } else {
            wx.showLoading({
                title: "加载中...",
                mask: !0
            }), this.changeImgUrl(n, "pending");
            var c = {
                src: t.iconUrl ? t.iconUrl : this.data.imageData[t.nodeId + "_" + t.colorId].img_url
            };
            wx.getImageInfo((0, e.default)({}, c, {
                success: function(t) {
                    o.logger("wx.getImageInfo", {
                        level: 4,
                        message: "获取图片信息",
                        request: c,
                        response: t
                    }), i.changeImgUrl(n, t.path), wx.hideLoading(), a(i.data.imgUrl[n]);
                },
                fail: function(t) {
                    wx.hideLoading(), o.logger("wx.getImageInfo", {
                        level: 3,
                        message: "获取图片信息出错",
                        request: c,
                        response: t
                    }), i.showModal({
                        content: "出现错误，请重试！",
                        success: function() {
                            s();
                        }
                    });
                }
            }));
        }
    },
    getTextWidth: function(t) {
        return t.length * (/^[a-zA-Z]*$/.test(t[0]) ? 22.5 : 50);
    },
    getCanvasProp: function() {
        var t = this;
        wx.createSelectorQuery().select(".movable-area").boundingClientRect(function(e) {
            t.localData.boxInfo = {
                height: e.height,
                width: e.width
            };
        }).exec();
    },
    onChange: function(t) {
        var e = t.currentTarget.dataset.id;
        this.localData.userList[e].ox = t.detail.x, this.localData.userList[e].oy = t.detail.y;
    },
    startScale: function(t) {
        var e = t.changedTouches[0], a = this.data.selectedId;
        this.localData.userList[a].sx = e.clientX, this.localData.userList[a].sy = e.clientY, 
        o.logger("startScale", {
            level: 4,
            message: "开始缩放",
            request: t
        });
    },
    onScale: function(t) {
        var e = this.data.selectedId, i = this.localData.userList[e], s = t.changedTouches[0], o = s.clientX - i.sx, n = s.clientY - i.sy, l = Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2));
        l = o * Math.abs(o) + n * Math.abs(n) > 0 ? l : -l;
        var c = (l = i.scale + (i.rotate > 90 || i.rotate < -90 ? -l : l) / i.z) < .5 ? .5 : l;
        this.localData.userList[e].sx = s.clientX, this.localData.userList[e].sy = s.clientY, 
        this.localData.userList[e].scale = c, this.setData((0, a.default)({}, "userList[".concat(e, "].scale"), c));
    },
    clearSelected: function(t) {
        -1 != this.data.selectedId && (this.hideInput(), this.setData({
            selectedId: -1
        }));
    },
    rotating: function(t) {
        var e = t.detail.value, i = this.data.selectedId;
        this.localData.userList[i].rotate = e, this.setData((0, a.default)({}, "userList[".concat(i, "].rotate"), e));
    },
    rotated: function(t) {
        var e = this.localData.userList[this.data.selectedId];
        o.doTracking("actRotIcon", JSON.stringify({
            cover_id: this.localData.coverInfo.id,
            icon_id: e && "1" == e.type ? e.nodeId : "0"
        }), Math.floor(Date.now() / 1e3));
    },
    tstart: function(t) {
        var e = t.currentTarget.dataset.id;
        if (this.data.selectedId != e) {
            var a = this.localData.userList[e];
            this.data.kindType;
            this.localData.userList[e].zIndex = this.localData.zIndex++;
            var i = {
                selectedId: e,
                userList: JSON.parse(JSON.stringify(this.localData.userList)),
                rotate: this.localData.userList[e].rotate,
                kindType: this.localData.userList[e].tabId
            };
            "2" == a.type && (i.wishesSel = this.getWishesIndex(a.nodeId)), this.setData(i), 
            this.hideInput();
        }
    },
    getColor: function(t) {
        var e = this, i = this.data.selectedId;
        if (-1 != i && "1" != this.localData.userList[i].type) {
            var s = t.currentTarget.dataset, n = this.data.tabList[this.data.kindType].content.color_content[s.id];
            this.loadImage(Object.assign(this.localData.userList[i], {
                colorId: n.id
            }), function() {
                var t;
                e.localData.userList[i].color = n.content, e.localData.userList[i].colorSel = s.id, 
                e.localData.userList[i].colorId = n.id, e.setData((t = {}, (0, a.default)(t, "userList[".concat(i, "].color"), n.content), 
                (0, a.default)(t, "userList[".concat(i, "].colorSel"), s.id), (0, a.default)(t, "userList[".concat(i, "].colorId"), n.id), 
                t));
            }), o.doTracking("actColor", JSON.stringify({
                cover_id: this.localData.coverInfo.id,
                icon_id: "0",
                color_value: n.content
            }), Math.floor(Date.now() / 1e3));
        }
    },
    getKind: function(t) {
        var e = t.currentTarget.dataset, a = "2" == e.type && 0 == this.data.wishesList.length;
        this.setData({
            kindType: e.index,
            hiddenInput: !a,
            "wishesInfo.focus": a
        }), "2" == e.type && this.selectWishesModel();
    },
    wishesInput: function(t) {
        this.setData({
            "wishesInfo.value": t.detail.value
        });
    },
    clearWishes: function() {
        this.setData({
            "wishesInfo.value": "",
            "wishesInfo.focus": !0
        });
    },
    hideInput: function() {
        this.setData({
            hiddenInput: !0,
            "wishesInfo.focus": !1,
            "wishesInfo.value": ""
        });
    },
    checkText: function(t, e) {
        var a = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var s = {
            text: t
        }, n = o.getSignurature(s);
        wx.request({
            url: i.default.CHECK_TEXT,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(s, {
                sign: n
            }),
            success: function(t) {
                if (200 == t.data.retcode) return e();
                o.logger(i.default.CHECK_TEXT, {
                    level: 4,
                    message: t.data.msg || "检测出敏感词",
                    request: Object.assign(s, {
                        sign: n
                    }),
                    response: t
                }), a.showModal({
                    content: t.data.msg
                });
            },
            fail: function(t) {
                a.showModal({
                    content: "检查失败或网络超时，请重试"
                });
            },
            complete: function() {
                o.logger(i.default.CHECK_TEXT, {
                    level: 4,
                    message: "检测敏感词",
                    request: s
                }), wx.hideLoading();
            }
        });
    },
    wishesConfirm: function(t) {
        var e = this, a = this.data.wishesInfo.value.trim(), i = this.data.wishesList[this.data.wishesSel];
        if (a) this.checkText(a, function() {
            e.addIcon({
                currentTarget: {
                    dataset: {
                        id: i ? i.nodeId : "text_".concat(e.localData.wishesId++),
                        tab: t.currentTarget.dataset.tab,
                        content: a
                    }
                }
            }), o.doTracking(i ? "actEdit" : "actInput", JSON.stringify({
                cover_id: e.localData.coverInfo.id
            }), Math.floor(Date.now() / 1e3));
        }); else {
            if (this.hideInput(), this.data.wishesList.length > 0) return this.selectWishesModel();
            for (var s = 0; s < this.data.tabList.length; s++) if ("1" == this.data.tabList[s].type) {
                this.setData({
                    kindType: s
                });
                break;
            }
        }
    },
    wishesEdit: function(t) {
        this.setData({
            hiddenInput: !1,
            "wishesInfo.focus": !0,
            "wishesInfo.value": t.currentTarget.dataset.content
        });
    },
    addNewWishes: function() {
        this.data.selectedId;
        this.setData({
            selectedId: -1,
            hiddenInput: !1,
            "wishesInfo.focus": !0,
            "wishesInfo.value": ""
        });
    },
    goGenerate: function(t) {
        var e, a = this;
        o.doTracking("actSubmGeneButton", JSON.stringify({
            cover_id: this.localData.coverInfo.id,
            icon_id: (e = [], a.localData.userList.forEach(function(t, a) {
                e.push(t && "1" == t.type ? t.nodeId : "0");
            }), e)
        }), Math.floor(Date.now() / 1e3)), wx.getStorageSync("userInfo") ? this.drawCard() : this.showAuthPopup();
    },
    showAuthPopup: function() {
        this.setData({
            showAuthPopup: !0
        });
    },
    handleAuth: function() {
        this.localData.uploadType = !0, wx.showLoading({
            title: "加载中...",
            mask: !0
        }), this.drawCard();
    },
    resetOrder: function() {
        var t = this.localData.userList;
        this.data.userList = JSON.parse(JSON.stringify(t)), t.forEach(function(e, a) {
            for (var i = 0; i < t.length - 1 - a; i++) if (t[i] && t[i + 1] && t[i].zIndex > t[i + 1].zIndex) {
                var s = t[i + 1];
                t[i + 1] = t[i], t[i] = s;
            }
        });
    },
    drawCard: function() {
        var t = this;
        this.resetOrder();
        var e = this.localData.boxInfo.width, a = this.localData.boxInfo.height;
        this.localData.ctx.drawImage(this.data.cardImage, 0, 0, e * this.localData.canvasScale, a * this.localData.canvasScale), 
        this.localData.userList.forEach(function(e, a) {
            if (e && !e.disable) {
                t.localData.ctx.save();
                var i = e.ox - e.width * e.scale / 2, s = e.oy - e.height * e.scale / 2;
                if (t.localData.ctx.translate(i * t.localData.canvasScale, s * t.localData.canvasScale), 
                t.localData.ctx.scale(e.scale * t.localData.canvasScale, e.scale * t.localData.canvasScale), 
                t.localData.ctx.translate(e.width / 2, e.height / 2), t.localData.ctx.rotate(e.rotate * Math.PI / 180), 
                "1" == e.type) return t.localData.ctx.drawImage(t.data.imgUrl[e.nodeId], -e.width / 2 + 1, -e.height / 2 + 1, e.width, e.height), 
                t.localData.ctx.restore(), !0;
                e.width, e.height;
                t.localData.ctx.font = "normal bold 15px sans-serif", t.localData.ctx.fillStyle = e.color, 
                t.localData.ctx.setTextAlign("left"), t.localData.ctx.setTextBaseline("top"), t.localData.ctx.fillText(e.content, -e.width / 2 + 17, -e.height / 2 + 9), 
                t.localData.ctx.restore();
            }
        }), this.localData.ctx.draw(!0, function() {
            t.uploadImage();
        }), this.localData.userList = JSON.parse(JSON.stringify(this.data.userList));
    },
    uploadImage: function() {
        var t = this;
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: this.localData.boxInfo.width * this.localData.canvasScale,
            height: this.localData.boxInfo.height * this.localData.canvasScale,
            canvasId: "myCanvas",
            fileType: "jpg",
            quality: .8,
            success: function(e) {
                var a = e.tempFilePath, s = {
                    nonce_str: "".concat(wx.getStorageSync("oid")).concat(new Date().getTime()).concat(Math.round(100 * Math.random()))
                };
                s = o.getLogSign(s), o.logger("wx.canvasToTempFilePath", {
                    level: 4,
                    message: "canvasToTempFilePath success",
                    request: s,
                    response: e
                }), wx.uploadFile({
                    url: i.default.COVER_SAVE,
                    filePath: a,
                    name: "file",
                    formData: s,
                    success: function(e) {
                        if (200 != (e = JSON.parse(e.data)).retcode) return t.uploadFail("上传失败，请重试"), void o.logger("wx.uploadFile", {
                            level: 3,
                            message: e.msg || "上传失败",
                            request: s,
                            response: e
                        });
                        wx.hideLoading(), o.globalData.card_image = e.data.url, o.globalData.coverImage = a, 
                        setTimeout(function() {
                            wx.navigateTo({
                                url: "/pages/diy/result/result"
                            });
                        }, 0);
                    },
                    fail: function(e) {
                        t.uploadFail("网络超时，请重试"), o.logger("wx.uploadFile", {
                            level: 3,
                            message: "文件上传失败",
                            request: s,
                            response: e
                        });
                    }
                });
            },
            fail: function(e) {
                console.log(e), t.uploadFail("生成出错，请重试"), o.logger("wx.canvasToTempFilePath", {
                    level: 3,
                    message: "生成出错",
                    response: e
                });
            }
        });
    },
    uploadFail: function(t) {
        this.localData.uploadType = !1, wx.hideLoading(), this.showModal({
            content: t
        });
    },
    deleteItem: function(t) {
        var e = this.data.selectedId, a = {
            selectedId: -1
        };
        if (this.localData.userList[e].disable = !0, a.userList = JSON.parse(JSON.stringify(this.localData.userList)), 
        "1" == this.localData.userList[e].type) a.iconNum = this.data.iconNum - 1; else {
            a.textNum = this.data.textNum - 1;
            var i = this.data.wishesList;
            i.splice(this.getWishesIndex(this.localData.userList[e].nodeId), 1), a.wishesList = i, 
            a.wishesSel = 0, this.hideInput();
        }
        this.setData(a);
    },
    onShareAppMessage: function() {
        return o.doTracking("actShare", JSON.stringify({
            page_path: "/pages/diy"
        }), Math.floor(Date.now() / 1e3)), {
            title: o.globalData.diyInfo.share_title,
            path: "/pages/diy/diy?theme_id=".concat(o.globalData.theme_id, "&scene=").concat(o.globalData.sceneId),
            imageUrl: o.globalData.diyInfo.share_image_url
        };
    },
    selectWishesModel: function() {
        var t = this.data.wishesSel, e = {
            selectedId: -1
        };
        if (t < this.data.wishesList.length && this.data.wishesList[t]) {
            var i, s = this.data.wishesList[t].nodeIndex;
            this.localData.userList[s].zIndex = this.localData.zIndex++, i = {}, (0, a.default)(i, "userList[".concat(s, "].zIndex"), this.localData.zIndex), 
            (0, a.default)(i, "rotate", this.localData.userList[s].rotate), (0, a.default)(i, "selectedId", s), 
            e = i, this.hideInput();
        }
        this.setData(e);
    },
    bindChange: function(t) {
        this.setData({
            wishesSel: t.detail.value[0]
        }), this.selectWishesModel();
    },
    onHide: function() {
        o.doTracking("actHang", JSON.stringify({
            page_path: "/pages/diy/edit"
        }), Math.floor(Date.now() / 1e3));
    }
}));