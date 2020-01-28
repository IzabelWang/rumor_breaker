var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("../../@babel/runtime/helpers/slicedToArray")), o = e(require("../../547BC8221C91398C321DA02558497AF5.js")), i = e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")), s = e(require("vs-logger")), r = getApp();

Page(s.default.Page({
    data: {
        isSpecil: !1,
        cardData: null,
        selectedCardNum: 0,
        showBottomPopup: !1,
        popupGood: null,
        isIpx: null,
        shopcartNum: 0,
        shopcartPrice: 0,
        buyClicked: !1,
        themeId: null,
        sceneId: null,
        isSelfGifting: !1,
        active: !0,
        for_self: null,
        tipsData: {
            show: "",
            text: "收藏成功",
            again: !1
        },
        maxTips: "",
        closeType: 0,
        scrollToView: ""
    },
    onHide: function() {
        r.doTracking("actHang", JSON.stringify({
            page_path: "/pages/cardDetail"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        var e;
        return this.data.customInfo ? (r.doTracking("actShare", JSON.stringify({
            page_path: "/pages/diy"
        }), Math.floor(Date.now() / 1e3)), e = {
            title: r.globalData.diyInfo.share_title || "",
            path: "/pages/diy/diy?theme_id=".concat(r.globalData.theme_id, "&scene=").concat(r.globalData.sceneId),
            imageUrl: r.globalData.diyInfo.share_image_url || ""
        }) : (r.doTracking("actShare", JSON.stringify({
            page_path: "/pages/cardDetail"
        }), Math.floor(Date.now() / 1e3)), e = {
            title: this.data.cardData.share_title || "",
            path: "pages/cardDetail/cardDetail?theme_id=".concat(this.data.themeId, "&scene=").concat(this.data.sceneId),
            imageUrl: this.data.cardData.share_image_url || ""
        }), e;
    },
    requestPaymentCount: 0,
    themeInit: function(e) {
        var t = this, a = {
            theme_id: t.data.themeId,
            scene: t.data.sceneId,
            open_id: e,
            channel: r.globalData.channel || ""
        }, i = r.getSignurature(a);
        wx.showLoading(), wx.request({
            url: o.default.THEME_SHOW,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: Object.assign(a, {
                sign: i
            }),
            method: "POST",
            success: function(e) {
                var s = e.data, n = s.data;
                if (200 == s.retcode) if (n.banner_image_url && t.setData({
                    isSpecil: !0
                }), "1" == n.for_self) {
                    t.setData({
                        isSelfGifting: !0,
                        for_self: "1"
                    }), console.log(t.data), r.globalData.sceneId = n.scene;
                    var l = !0, c = !1, d = void 0;
                    try {
                        for (var u, g = n.goods_list[Symbol.iterator](); !(l = (u = g.next()).done); l = !0) {
                            var f = u.value;
                            f.num = 0, f.price = f.price / 100;
                        }
                    } catch (e) {
                        c = !0, d = e;
                    } finally {
                        try {
                            l || null == g.return || g.return();
                        } finally {
                            if (c) throw d;
                        }
                    }
                    n.goods_list[0].num++, t.setData({
                        cardData: n
                    }), wx.setNavigationBarTitle({
                        title: n.title
                    }), t.countShopCart();
                } else {
                    t.setData({
                        isSelfGifting: !1,
                        for_self: "0"
                    }), r.globalData.sceneId = n.scene;
                    var h = !0, m = !1, p = void 0;
                    try {
                        for (var v, _ = n.goods_list[Symbol.iterator](); !(h = (v = _.next()).done); h = !0) {
                            var y = v.value;
                            y.num = 0, y.price = y.price / 100;
                        }
                    } catch (e) {
                        m = !0, p = e;
                    } finally {
                        try {
                            h || null == _.return || _.return();
                        } finally {
                            if (m) throw p;
                        }
                    }
                    t.setData({
                        cardData: n
                    }), wx.setNavigationBarTitle({
                        title: n.title
                    }), t.countShopCart();
                } else 99999 == s.retcode ? r.doAuthor() : (r.logger(o.default.THEME_SHOW, {
                    level: 10206 === s.retcode ? 4 : 3,
                    message: e.data.msg || "获取主题列表失败",
                    request: Object.assign(a, {
                        sign: i
                    }),
                    response: e
                }), wx.navigateTo({
                    url: "../error/error?api=themeShow&code=" + e.data.retcode
                }));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onLoad: function(e) {
        console.log(e);
        var t = this;
        if (e.theme_id) {
            console.log("app.globalData", r.globalData), this.setData({
                isIpx: r.globalData.isIpx
            }), r.globalData.channel = e.channel || r.globalData.channel || "", r.globalData.cover_url && (e.cover_url = r.globalData.cover_url, 
            r.globalData.cover_url = null);
            var a = {
                themeId: e.theme_id,
                sceneId: r.globalData.sceneId
            };
            if (e.closeType && (a.closeType = 1), e.collect_index) a.collectInfo = r.globalData.collectInfo, 
            a.scrollToView = "card_".concat(e.collect_index), a.selectedCardNum = e.collect_index, 
            r.globalData.collectInfo = null, wx.hideShareMenu(); else if (e.cover_url) {
                a.customInfo = {
                    cover_path: decodeURIComponent(e.cover_url),
                    cover_id: e.cover_id
                };
                var o = r.globalData.diyInfo.collect;
                o && o.cover_path == decodeURIComponent(e.cover_url) && o.cover_id == e.cover_id && (a.customInfo.favorite_id = o.favorite_id, 
                a.customInfo.is_favorite = 1), a.isCustomCover = "1";
            } else a.sceneId = e.scene ? e.scene : "default", a.isCustomCover = "0";
            r.doTracking("actPv", JSON.stringify({
                page_path: "/pages/cardDetail",
                channel: r.globalData.channel,
                scene: a.sceneId
            }), Math.floor(Date.now() / 1e3)), this.setData(a), wx.checkSession({
                success: function() {
                    wx.getStorageSync("oid") ? t.themeInit(wx.getStorageSync("oid")) : r.doAuthor().then(function(e) {
                        var a = e.oid;
                        t.themeInit(a), r.setVisitId();
                    });
                },
                fail: function() {
                    r.doAuthor().then(function(e) {
                        var a = e.oid;
                        t.themeInit(a), r.setVisitId();
                    });
                }
            });
        } else wx.navigateTo({
            url: "../error/error?msg=noCardIdInCardDetailPage"
        });
    },
    countShopCart: function() {
        var e = 0, t = 0, a = !0, o = !1, i = void 0;
        try {
            for (var s, r = this.data.cardData.goods_list[Symbol.iterator](); !(a = (s = r.next()).done); a = !0) {
                var n = s.value;
                e += n.num, t += n.num * n.price * 100;
            }
        } catch (e) {
            o = !0, i = e;
        } finally {
            try {
                a || null == r.return || r.return();
            } finally {
                if (o) throw i;
            }
        }
        this.setData({
            shopcartNum: e,
            shopcartPrice: (t / 100).toFixed(2)
        });
    },
    cardTimeout: null,
    changeCard: function(e) {
        var t = this;
        clearTimeout(this.cardTimeout);
        var a = "left" == e.currentTarget.dataset.type ? -1 : 1, o = parseInt(this.data.selectedCardNum) + a, i = this.data.collectInfo.length - 1;
        o = o < 0 ? i : o > i ? 0 : o, this.setData({
            selectedCardNum: o
        }), r.doTracking("actChange", JSON.stringify({
            cover_id: this.data.collectInfo[o].cover_id
        }), Math.floor(Date.now() / 1e3)), this.cardTimeout = setTimeout(function() {
            t.setData({
                scrollToView: "card_".concat(o)
            });
        }, 300);
    },
    selected: function(e) {
        var t = e.currentTarget.dataset;
        this.setData({
            selectedCardNum: t.key
        }), r.doTracking("3" == this.data.cardData.theme_type ? "actChange" : "actSwitchCard", JSON.stringify({
            cover_id: t.item.cover_id || t.item.id
        }), Math.floor(Date.now() / 1e3));
    },
    toggleBottomPopup: function(e) {
        var t = e.currentTarget.dataset;
        if (null != t.ind) {
            var a = this.data.cardData.goods_list[t.ind];
            r.doTracking("actDetail", JSON.stringify({
                item_id: a.id
            }), Math.floor(Date.now() / 1e3)), this.setData({
                popupGood: a
            });
        } else this.setData({
            popupGood: null
        });
        this.setData({
            showBottomPopup: !this.data.showBottomPopup
        });
    },
    changeGoodNum: function(e) {
        var t = e.currentTarget.dataset;
        if ("minus" === t.type) this.data.cardData.goods_list[t.ind].num--; else {
            if (this.data.shopcartNum > 98) return void wx.showModal({
                title: "",
                showCancel: !1,
                content: "购买数量超过上限99张券"
            });
            this.data.cardData.goods_list[t.ind].num++;
        }
        this.countShopCart(), this.setData({
            cardData: this.data.cardData
        });
    },
    changeGoodNumSelf: function(e) {
        var t = this.data.cardData.goods_list;
        for (var a in t) t[a].num = 0;
        console.log(t);
        var o = e.currentTarget.dataset;
        this.data.cardData.goods_list[o.ind].num++, this.countShopCart(), this.setData({
            cardData: this.data.cardData
        });
    },
    gotoPrivacy: function() {
        wx.navigateTo({
            url: "../privacy/privacy"
        });
    },
    gotoTerms: function() {
        wx.navigateTo({
            url: "../terms/terms"
        });
    },
    gotoStore: function() {
        wx.navigateTo({
            url: "../store/store"
        });
    },
    goodNumBlur: function(e) {
        var t = e.currentTarget.dataset.ind;
        if ("" === e.detail.value || 0 == e.detail.value || "00" == e.detail.value) this.data.cardData.goods_list[t].num = 0; else {
            var o = 0, i = !0, s = !1, r = void 0;
            try {
                for (var n, l = this.data.cardData.goods_list.entries()[Symbol.iterator](); !(i = (n = l.next()).done); i = !0) {
                    var c = (0, a.default)(n.value, 2), d = c[0], u = c[1];
                    o += d == t ? parseInt(e.detail.value) : u.num;
                }
            } catch (e) {
                s = !0, r = e;
            } finally {
                try {
                    i || null == l.return || l.return();
                } finally {
                    if (s) throw r;
                }
            }
            this.data.cardData.goods_list[t].num = o > 99 ? e.detail.value - (o - 99) : parseInt(e.detail.value);
        }
        this.countShopCart(), this.setData({
            cardData: this.data.cardData
        });
    },
    loginError: function() {
        wx.hideLoading(), this.setData({
            buyClicked: !1
        }), r.doAuthor(), wx.showModal({
            title: "提示",
            content: "您的操作超时，请点击购买重试",
            showCancel: !1
        });
    },
    buy: function(e) {
        var t = this, a = this;
        this.data.buyClicked || (r.sendFormId("mock formid", "pay", 1), r.logger("getUserInfo", {
            level: 4,
            message: "记录用户微信授权行为",
            response: e.detail
        }), e.detail.errMsg.match(/^getUserInfo:fail auth (?:deny|cancel)/) ? wx.showModal({
            title: "提示",
            content: "为了不影响您的购物体验，请允许授权",
            showCancel: !1
        }) : (wx.showLoading({
            mask: !0
        }), this.setData({
            buyClicked: !0
        }), r.globalData.userInfo = e.detail.userInfo, wx.setStorageSync("userInfo", e.detail.userInfo), 
        s.default.reinit({
            user: e.detail.userInfo
        }), wx.checkSession({
            success: function() {
                if (!wx.getStorageSync("unionId")) return wx.getStorageSync("ticket") ? void r.getUnionId(e.detail.encryptedData, e.detail.iv, wx.getStorageSync("ticket")).then(function(e) {
                    a.doBuy(e);
                }, function() {
                    wx.hideLoading(), t.setData({
                        buyClicked: !1
                    });
                }) : t.loginError();
                a.doBuy();
            },
            fail: function(e) {
                t.loginError(), r.logger("checkSession", {
                    level: 3,
                    message: "buy:session已过期",
                    response: e
                });
            }
        })));
    },
    doBuy: function(e) {
        var t = this;
        console.log("调用了doBuy方法");
        var a = [], i = [], s = this, n = !0, l = !1, c = void 0;
        try {
            for (var d, u = this.data.cardData.goods_list[Symbol.iterator](); !(n = (d = u.next()).done); n = !0) {
                var g = d.value;
                g.num > 0 && (a.push(g.id), i.push(g.num));
            }
        } catch (e) {
            l = !0, c = e;
        } finally {
            try {
                n || null == u.return || u.return();
            } finally {
                if (l) throw c;
            }
        }
        var f = wx.getStorageSync("unionId") || e;
        if (console.log(f), !f) return console.log("unionId 为空"), console.log(f), void r.logger("doBuy", {
            level: 3,
            message: "unionId 为空"
        });
        var h = "", m = {}, p = null;
        if (1 != s.data.cardData.theme_type) {
            var v = this.data.collectInfo ? this.data.collectInfo[this.data.selectedCardNum] : {};
            console.log(this.data.collectInfo, "collectInfo"), (h = s.data.customInfo ? s.data.customInfo.cover_id : v.cover_id) || (h = this.data.cardData.cover_list[this.data.selectedCardNum].id), 
            m = {
                unionid: wx.getStorageSync("unionId"),
                open_id: wx.getStorageSync("oid"),
                cover_id: h,
                goods_ids: a,
                quantities: i,
                scene: r.globalData.sceneId,
                for_self: s.data.for_self,
                is_custom_cover: s.data.isCustomCover || v.is_custom || 0,
                theme_id: s.data.themeId,
                cover_url: s.data.customInfo ? s.data.customInfo.cover_path : v.cover_path || "",
                channel: r.globalData.channel || ""
            }, console.log("line 692 do buy", m), p = r.getSignurature(m);
        } else h = this.data.cardData.cover_list[this.data.selectedCardNum].id, m = {
            unionid: wx.getStorageSync("unionId"),
            open_id: wx.getStorageSync("oid"),
            cover_id: h,
            goods_ids: a,
            quantities: i,
            scene: r.globalData.sceneId,
            for_self: s.data.for_self,
            is_custom_cover: s.data.isCustomCover,
            theme_id: s.data.themeId,
            channel: r.globalData.channel || ""
        }, console.log("line 709 do buy", m), p = r.getSignurature(m);
        wx.request({
            url: o.default.ORDER_PRECREATE,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(m, {
                sign: p
            }),
            success: function(e) {
                200 == e.data.retcode ? t.requestPayment(e) : 10001 == e.data.retcode ? (wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "操作频繁，请5分钟后重新下单"
                }), r.logger(o.default.ORDER_PRECREATE, {
                    level: 4,
                    message: "retcode:10001, 操作频繁，请5分钟后重新下单"
                })) : 10021 == e.data.retcode ? (wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "订单金额不能超过9999元"
                }), r.logger(o.default.ORDER_PRECREATE, {
                    level: 4,
                    message: "retcode:10021, 订单金额不能超过9999元"
                })) : 10002 == e.data.retcode ? (wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "礼品卡库存不足"
                }), r.logger(o.default.ORDER_PRECREATE, {
                    level: 4,
                    message: "retcode:10002, 礼品卡库存不足"
                })) : 99999 == e.data.retcode ? (r.logger(o.default.ORDER_PRECREATE, {
                    level: 4,
                    message: "retcode:99999, 需要登录"
                }), r.doAuthor().then(function() {
                    s.doBuy();
                })) : (r.logger(o.default.ORDER_PRECREATE, {
                    level: 3,
                    message: e.data.msg || "创建预支付订单失败",
                    request: Object.assign(m, {
                        sign: p
                    }),
                    response: e
                }), wx.navigateTo({
                    url: "../error/error?api=precreate&code=" + e.data.retcode
                }));
            },
            fail: function(e) {
                r.logger(o.default.ORDER_PRECREATE, {
                    level: 4,
                    message: "fail: 网络链接失败"
                });
            },
            complete: function() {
                wx.hideLoading(), s.setData({
                    buyClicked: !1
                });
            }
        });
    },
    requestPayment: function(e) {
        var t = this, a = e.data.data.package, i = e.data.data.order_id;
        wx.requestPayment({
            timeStamp: a.timeStamp,
            nonceStr: a.nonceStr,
            package: a.package,
            signType: "MD5",
            paySign: a.paySign,
            success: function(e) {
                if (console.log(e), 1 == t.data.isSelfGifting) {
                    var a = {
                        open_id: wx.getStorageSync("oid"),
                        order_id: i
                    }, s = r.getSignurature(a);
                    wx.request({
                        url: o.default.ORDER_GET_CODE,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: Object.assign(a, {
                            sign: s
                        }),
                        method: "POST",
                        success: function(e) {
                            if (e && e.data && 200 !== e.data.retcode && r.logger(o.default.ORDER_GET_CODE, {
                                level: 3,
                                message: e.data.msg || "获取卡密失败",
                                request: Object.assign(a, {
                                    sign: s
                                }),
                                response: e
                            }), e.statusCode && 200 !== e.statusCode) {
                                r.logger(o.default.ORDER_GET_CODE, {
                                    level: 3,
                                    message: "try again"
                                });
                                var n = {
                                    open_id: wx.getStorageSync("oid"),
                                    order_id: i
                                }, l = r.getSignurature(n);
                                wx.request({
                                    url: o.default.ORDER_GET_CODE,
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: Object.assign(n, {
                                        sign: l
                                    }),
                                    method: "POST",
                                    success: function(e) {
                                        console.log("------------ start Inner order_get_code --------------"), console.log(e), 
                                        t.requestPaymentFinish(e, i), console.log("------------ end Inner order_get_code --------------"), 
                                        e && e.data && 200 !== e.data.retcode && r.logger(o.default.ORDER_GET_CODE, {
                                            level: 3,
                                            message: e.data.msg || "重新获取卡密失败",
                                            request: Object.assign(n, {
                                                sign: l
                                            }),
                                            response: e
                                        });
                                    },
                                    fail: function(e) {
                                        e && (r.logger(o.default.ORDER_GET_CODE, {
                                            level: 3,
                                            message: "网络原因导致重新获取卡密失败",
                                            response: e
                                        }), r.goToOrders());
                                    }
                                });
                            } else t.requestPaymentFinish(e, i);
                        },
                        fail: function(e) {
                            e && (r.logger(o.default.ORDER_GET_CODE, {
                                level: 3,
                                message: "网络原因导致获取卡密失败",
                                response: e
                            }), r.goToOrders());
                        }
                    });
                } else r.showFriendsList(i);
            },
            fail: function(a) {
                /requestPayment:fail[ :]cancel/.test(a.errMsg) ? r.logger("wx.requestPayment", {
                    level: 4,
                    message: "用户取消支付",
                    response: a
                }) : (r.logger("wx.requestPayment", {
                    level: 3,
                    message: "网络原因导致支付失败",
                    response: a
                }), 0 === t.requestPaymentCount ? (t.requestPaymentCount = 1, t.requestPayment(e)) : wx.showToast("网络超时，请稍后重试"));
            },
            complete: function(e) {}
        });
    },
    requestPaymentFinish: function(e, t) {
        var a = JSON.stringify(e.data.data), s = o.default.CRYPTO_SECRET, n = i.default.CryptoJS.AES.decrypt(a, s, {
            format: i.default.CryptoJSAesJson
        }).toString(i.default.CryptoJS.enc.Utf8), l = JSON.parse(n)[0].cardId, c = JSON.parse(n)[0].cardExt, d = wx.getStorageSync("oid"), u = c.indexOf("}");
        JSON.parse(n)[0].code;
        c = c.splice(u + 1, ',"openId":""}'), console.log(c), console.log("wx addCard: \t "), 
        wx.addCard({
            cardList: [ {
                cardId: l,
                cardExt: c
            } ],
            success: function(e) {
                console.log("res: \t"), console.log(e);
                var a = [ {
                    cardId: e.cardList[0].cardId,
                    cardExt: e.cardList[0].code,
                    isSuccess: e.cardList[0].isSuccess
                } ], o = i.default.CryptoJS.AES.encrypt(JSON.stringify(a), s, {
                    format: i.default.CryptoJSAesJson
                }).toString();
                console.log(encodeURIComponent(o)), o = encodeURIComponent(o), r.logAddCard(t, "ok", o), 
                r.gotoUserRegH5(l, d, e.cardList[0].code);
            },
            fail: function(e) {
                r.logAddCard(t, "fail", JSON.stringify(e));
            },
            complete: function(e) {}
        });
    },
    collectTips: {
        timeout: null,
        againParams: {}
    },
    collectFail: function(e, t) {
        this.collectTips.againParams = e, this.setData({
            tipsData: Object.assign({
                show: 2,
                again: !0,
                collectType: e.collectType
            })
        }), r.doTracking(t, JSON.stringify({
            cover_id: e.query.cover_id,
            status: 0
        }), Math.floor(Date.now() / 1e3)), this.closeTips();
    },
    collectAgain: function() {
        this.collectUpdate(this.collectTips.againParams, !0);
    },
    closeTips: function() {
        var e = this;
        clearTimeout(this.collectTips.timeout), this.collectTips.timeout = setTimeout(function() {
            e.setData({
                "tipsData.show": 1
            });
        }, 2e3);
    },
    clickType: !1,
    clickTimeout: null,
    collectUpdate: function(e, a) {
        var i = this;
        if (!this.clickType) {
            this.clickType = !0, wx.showLoading({
                mask: !0
            });
            var s = e.query, n = e.collectType, l = e.index;
            this.collectTips.againParams = {};
            var c = r.getSignurature(s), d = a ? 1 == n ? "actCancellAgain" : "actCollectAgain" : 1 == n ? "actCancellCollect" : "actCollect", u = o.default[0 == n ? "ADD_FAVORITE" : "UPDATE_FAVORITE"];
            wx.request({
                url: u,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(s, {
                    sign: c
                }),
                success: function(e) {
                    if (21009 == e.data.retcode) return r.doTracking(d, JSON.stringify({
                        cover_id: s.cover_id,
                        status: 0
                    }), Math.floor(Date.now() / 1e3)), i.setData({
                        maxTips: 2
                    }), void r.logger(u, {
                        level: 4,
                        message: "retcode: 21009, 收藏卡面达到上限"
                    });
                    if (200 != e.data.retcode) return i.collectFail({
                        query: s,
                        collectType: n,
                        index: l
                    }, d), void r.logger(u, {
                        level: 3,
                        message: e.data.msg || "收藏/更新收藏卡面失败",
                        request: Object.assign(params, {
                            sign: c
                        }),
                        response: e
                    });
                    var a = e.data.data, o = {
                        tipsData: Object.assign({
                            show: 2,
                            collectType: n,
                            again: !1
                        })
                    };
                    if (i.data.collectInfo) o = Object.assign((0, t.default)({}, "collectInfo[".concat(l, "].status"), a.status), o); else if (i.data.customInfo) {
                        var g;
                        o = Object.assign((g = {}, (0, t.default)(g, "customInfo.favorite_id", a.id), (0, 
                        t.default)(g, "customInfo.is_favorite", a.status), g), o), r.globalData.diyInfo.collect = a.status ? {
                            cover_path: i.data.customInfo.cover_path,
                            cover_id: i.data.customInfo.cover_id,
                            favorite_id: a.id
                        } : null;
                    } else {
                        var f;
                        o = Object.assign((f = {}, (0, t.default)(f, "cardData.cover_list[".concat(l, "].favorite_id"), a.id), 
                        (0, t.default)(f, "cardData.cover_list[".concat(l, "].is_favorite"), a.status), 
                        f), o);
                    }
                    r.doTracking(d, JSON.stringify({
                        cover_id: s.cover_id,
                        status: 1
                    }), Math.floor(Date.now() / 1e3)), i.setData(o), i.closeTips();
                },
                fail: function(e) {
                    i.collectFail({
                        query: s,
                        collectType: n,
                        index: l
                    }, d);
                },
                complete: function() {
                    wx.hideLoading(), clearTimeout(i.clickTimeout), i.clickTimeout = setTimeout(function() {
                        i.clickType = !1;
                    }, 500);
                }
            });
        }
    },
    collectControl: function(e) {
        var t = e.currentTarget.dataset;
        if (this.data.isSpecil || "cover" != t.type) {
            var a = "cover" == t.type ? t.index : this.data.selectedCardNum, o = {
                open_id: wx.getStorageSync("oid"),
                cover_id: t.item.cover_id || t.item.id,
                cover_path: t.item.cover_path || t.item.image,
                cover_theme_name: this.data.collectInfo ? t.item.cover_theme_name : this.data.cardData.title,
                is_custom: this.data.collectInfo ? t.item.is_custom : this.data.isCustomCover
            }, i = 0;
            (t.item.favorite_id || this.data.collectInfo) && (o.id = t.item.favorite_id || t.item.id, 
            o.status = t.item.is_favorite || t.item.status ? 0 : 1, i = t.item.is_favorite || t.item.status ? 1 : 2), 
            this.collectUpdate({
                query: o,
                index: a,
                collectType: i
            });
        }
    },
    closeMaxTips: function() {
        this.setData({
            maxTips: 1
        });
    }
}));