var a = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = a(require("../../../547BC8221C91398C321DA02558497AF5.js")), e = (a(require("../../../4445B0631C91398C2223D86471997AF5.js")), 
a(require("vs-logger"))), i = getApp();

Page(e.default.Page({
    data: {
        showModal: !1,
        saved: !1,
        image: "",
        getCoupon: !1,
        couponMessage: "",
        openSettinged: !1,
        iphoneX: !1,
        imageUrl: "",
        tipsShow: 0
    },
    localData: {
        nickname: "",
        textList: "",
        ctx: null
    },
    showTips: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.showModal(Object.assign({
            content: "",
            showCancel: !1
        }, a));
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfoSync().model.indexOf("iPhone X") > -1 ? t.setData({
            iphoneX: !0
        }) : t.setData({
            iphoneX: !1
        });
        var e = wx.getStorageSync("userInfo");
        this.localData.nickname = e.nickName || "", wx.setNavigationBarTitle({
            title: i.globalData.diyInfo.title
        });
        var o = i.globalData.coverImage;
        i.globalData.theme_id ? o ? (i.doTracking("actPv", JSON.stringify({
            page_path: "/pages/diy/result",
            channel: i.globalData.channel,
            scene: i.globalData.sceneId
        }), Math.floor(Date.now() / 1e3)), t.setData({
            image: o,
            background_url: i.globalData.diyInfo.background_url
        }), this.resetText(), t.getCardImage(), this.localData.ctx = wx.createCanvasContext("myCanvas2"), 
        this.setData({
            scr: i.globalData.sysinfo.whRatio >= 2 ? "ext" : "nml",
            isAndroid: i.globalData.sysinfo.system.indexOf("Android") > -1
        })) : wx.redirectTo({
            url: "/pages/diy/diy?theme_id=".concat(i.globalData.theme_id)
        }) : wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    tipsControl: function() {
        this.setData({
            tipsShow: !this.data.tipsShow
        });
    },
    sendCoupon: function() {
        var a = this, e = {
            open_id: wx.getStorageSync("oid"),
            type: "save"
        }, o = i.getSignurature(e);
        wx.request({
            url: t.default.SEND_COUPON,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(e, {
                sign: o
            }),
            success: function(s) {
                200 == s.data.retcode ? a.setData({
                    getCoupon: !0,
                    couponMessage: s.data.data
                }) : i.logger(t.default.SEND_COUPON, {
                    level: 3,
                    message: s.data.msg || "发送优惠券失败",
                    request: Object.assign(e, {
                        sign: o
                    }),
                    response: s
                });
            }
        });
    },
    resetText: function() {
        var a = this.localData.nickname, t = [];
        a.length > 5 ? (t.push("这是".concat(a.substring(0, 14))), t.push("".concat(a.length > 14 ? a.substring(14, a.length) : "", "设计的用星说星意卡"))) : a.length <= 5 && t.push("这是".concat(a, "设计的用星说星意卡")), 
        this.localData.textList = t;
    },
    getCardImage: function() {
        var a = this;
        wx.createSelectorQuery().select(".card-show-image").boundingClientRect(function(t) {
            t && (console.log(t), a.setData({
                ciw: t.width,
                cih: t.height
            }));
        }).exec();
    },
    saveCardTracking: function(a) {
        i.logger("saveCardTracking", {
            level: 4,
            message: "params: type",
            response: a
        }), i.doTracking("actSubmSaveButton", JSON.stringify({
            cover_id: i.globalData.cover_id,
            save_status: a
        }), Math.floor(Date.now() / 1e3));
    },
    roundRect1: function(a, t, e, i, o) {
        this.localData.ctx.beginPath(), this.localData.ctx.arc(a + o, t + o, o, Math.PI, 1.5 * Math.PI), 
        this.localData.ctx.moveTo(a + o, t), this.localData.ctx.lineTo(a + e - o, t), this.localData.ctx.lineTo(a + e, t + o), 
        this.localData.ctx.arc(a + e - o, t + o, o, 1.5 * Math.PI, 2 * Math.PI), this.localData.ctx.lineTo(a + e, t + i - o), 
        this.localData.ctx.lineTo(a + e - o, t + i), this.localData.ctx.arc(a + e - o, t + i - o, o, 0, .5 * Math.PI), 
        this.localData.ctx.lineTo(a + o, t + i), this.localData.ctx.lineTo(a, t + i - o), 
        this.localData.ctx.arc(a + o, t + i - o, o, .5 * Math.PI, Math.PI), this.localData.ctx.lineTo(a, t + o), 
        this.localData.ctx.lineTo(a + o, t), this.localData.ctx.closePath(), this.localData.ctx.clip();
    },
    drawCard: function() {
        var a = this;
        this.localData.ctx.drawImage("../../../image/WechatIMG193.jpeg", 0, 0, 544, 730), 
        this.localData.ctx.save(), this.roundRect1(34, 56, 477, 286, 15), this.localData.ctx.drawImage(this.data.image, 34, 56, 477, 286), 
        this.localData.ctx.restore(), this.localData.ctx.drawImage("../../../image/starbucks-wxcode.png", 78, 536, 148, 150), 
        this.localData.ctx.setTextAlign("center"), this.localData.ctx.font = "normal 26px PingFangSC", 
        this.localData.textList.forEach(function(t, e) {
            a.localData.ctx.fillText(t, 272, 380 + 40 * e);
        }), this.localData.ctx.fillText("你也快来定制你的吧", 272, 380 + 40 * this.localData.textList.length), 
        this.localData.ctx.setTextAlign("left"), this.localData.ctx.font = "normal 20px PingFangSC", 
        this.localData.ctx.fillText("长按扫码小程序", 252, 600), this.localData.ctx.fillText("定制你的专属星意卡", 252, 630), 
        this.localData.ctx.draw(!0, function() {
            i.logger("drawCard", {
                level: 4,
                message: "draw success"
            }), wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: 544,
                height: 730,
                fileType: "png",
                quality: 1,
                canvasId: "myCanvas2",
                success: function(t) {
                    a.setData({
                        imageUrl: t.tempFilePath
                    }), wx.saveImageToPhotosAlbum({
                        filePath: t.tempFilePath,
                        success: function(t) {
                            wx.hideLoading(), a.setData({
                                showModal: !0,
                                saved: !0
                            }), wx.showToast({
                                title: "保存成功",
                                success: function(a) {}
                            }), i.logger("drawCard", {
                                level: 4,
                                message: "保存成功"
                            }), a.saveCardTracking(1);
                        },
                        fail: function(t) {
                            wx.hideLoading(), a.showTips({
                                content: "保存失败，请重试！"
                            }), i.logger("drawCard", {
                                level: 4,
                                message: "saveImageToPhotosAlbum 网络异常"
                            }), a.saveCardTracking(0);
                        }
                    });
                },
                fail: function(t) {
                    wx.hideLoading(), a.showTips({
                        content: "保存失败，请重试！"
                    }), i.logger("drawCard", {
                        level: 3,
                        message: "canvasToTempFilePath 异常"
                    }), a.saveCardTracking(0);
                }
            });
        });
    },
    savePic: function(a) {
        var t = this;
        if (wx.showLoading({
            title: "载入中",
            mask: !0
        }), a.detail.authSetting) return a.detail.authSetting["scope.writePhotosAlbum"] ? (this.setData({
            openSettinged: !1
        }), void this.drawCard()) : (wx.hideLoading(), this.showTips({
            content: "请同意授权！"
        }), this.saveCardTracking(0), void i.logger("savePic", {
            level: 4,
            message: "scope.writePhotosAlbum 未授权"
        }));
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.writePhotosAlbum"] ? t.drawCard() : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        t.drawCard();
                    },
                    fail: function() {
                        wx.hideLoading(), t.setData({
                            openSettinged: !0
                        }), t.showTips({
                            content: "获取授权失败，请重试！"
                        }), t.saveCardTracking(0);
                    }
                });
            },
            fail: function() {
                wx.hideLoading(), t.showTips({
                    content: "出现错误，请重试！"
                }), i.logger("savePic", {
                    level: 4,
                    message: "网络异常"
                });
            }
        });
    },
    changeModal: function() {
        this.setData({
            showModal: !this.data.showModal
        });
    },
    onShareAppMessage: function() {
        return i.doTracking("actShare", JSON.stringify({
            page_path: "/pages/diy"
        }), Math.floor(Date.now() / 1e3)), {
            title: i.globalData.diyInfo.share_title,
            path: "/pages/diy/diy?theme_id=".concat(i.globalData.theme_id, "&scene=").concat(i.globalData.sceneId),
            imageUrl: i.globalData.diyInfo.share_image_url
        };
    },
    doShareFriend: function() {
        i.doTracking("actSubmSendButton", JSON.stringify({
            cover_id: i.globalData.cover_id
        }), Math.floor(Date.now() / 1e3)), wx.navigateTo({
            url: "/pages/cardDetail/cardDetail?cover_id=".concat(i.globalData.cover_id, "&theme_id=").concat(i.globalData.theme_id, "&cover_url=").concat(i.globalData.card_image)
        });
    },
    goToRule: function() {
        wx.navigateTo({
            url: "/pages/diy/rule/rule"
        });
    },
    onHide: function() {
        i.doTracking("actHang", JSON.stringify({
            page_path: "/pages/diy/result"
        }), Math.floor(Date.now() / 1e3));
    },
    catchModal: function() {}
}));