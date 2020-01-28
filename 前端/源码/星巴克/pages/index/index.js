var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/objectSpread")), a = e(require("vs-logger")), n = e(require("../../547BC8221C91398C321DA02558497AF5.js")), i = (e(require("../../4445B0631C91398C2223D86471997AF5.js")), 
getApp());

Page(a.default.Page({
    data: {
        indexData: {},
        indicatorDots: !0,
        autoplay: !0,
        duration: 500,
        showPopup: !1,
        interval: 4e3,
        hasSimpleBubble: !1,
        hasUnGiftingType: null,
        hasUnGifting: !1,
        favorite: {
            old_image: "/image/card_icon.png",
            title: "收藏",
            title_color: "#00A862"
        },
        orderHistory: {
            old_image: "/image/coffee.png",
            title: "购买历史",
            title_color: "#00A862"
        },
        backgroundInfo: {
            color: "#F9F9F9",
            type: "bottom"
        }
    },
    hasUnionid: !1,
    pageInit: !1,
    showAuthPopup: function() {
        this.setData({
            showAuthPopup: !0
        });
    },
    togglePopup: function() {
        this.setData({
            showPopup: !this.data.showPopup
        });
    },
    resetTipIcon: function(e, t) {
        var a = JSON.parse(JSON.stringify(this.data[t]));
        for (var n in e) e[n] && (a[n] = e[n]);
        return a;
    },
    pageJump: function(e) {
        var t = e.currentTarget.dataset.obj;
        if (!t || !t.type) return i.logger("pageJump", {
            level: 3,
            message: "缺失obj.type参数",
            response: t
        }), void wx.showModal({
            title: "提示",
            content: "您的操作超时，请稍后重试。",
            showCancel: !1
        });
        var a = e.currentTarget.dataset.type, n = {
            banner: t.banner_id,
            theme: t.path
        };
        i.sendFormId("mock formid", a, n[a] || 1), "h5" == t.type ? wx.navigateTo({
            url: "../h5/h5?url=" + t.path
        }) : "miniprogram" == t.type ? wx.navigateToMiniProgram({
            appId: t.app_id,
            path: t.path,
            envVersion: "trial",
            success: function(e) {}
        }) : "theme" == t.type ? wx.navigateTo({
            url: "/pages/cardDetail/cardDetail?theme_id=".concat(t.path, "&scene=").concat(i.globalData.sceneId)
        }) : "diy" == t.type ? wx.navigateTo({
            url: "/pages/diy/diy?theme_id=".concat(t.path, "&channel=").concat(i.globalData.channel, "&scene=").concat(i.globalData.sceneId)
        }) : "internal" == t.type ? (this.hasUnionid && wx.getStorageSync("userInfo") || (t.path += "&authorize=true"), 
        wx.navigateTo({
            url: t.path
        })) : "coupon" == t.type ? this.sendCoupon(t) : "thousand_coupon" == t.type && this.sendThousandCoupon(t);
    },
    sendCoupon: function(e) {
        wx.showLoading({
            mask: !0
        });
        var a = {
            open_id: wx.getStorageSync("oid"),
            batch_no: e.batch_no,
            activity_id: e.activity_id
        }, o = i.getSignurature(a);
        wx.request({
            url: n.default.SEND_VS_COUPON,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(a, {
                sign: o
            }),
            success: function(e) {
                wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: e.data.msg
                }), 200 !== e.data.retcode && i.logger(n.default.SEND_VS_COUPON, {
                    level: 3,
                    message: e.data.msg || "发送活动券失败",
                    request: Object.assign(a, {
                        sign: o
                    }),
                    response: e
                }), wx.hideLoading();
            },
            fail: function(e) {
                wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "您的操作超时，请稍后重试"
                }), i.logger(n.default.SEND_VS_COUPON, {
                    level: 3,
                    message: e.errMsg || "发送活动券失败",
                    request: (0, t.default)({}, a, {
                        sign: o
                    }),
                    response: e
                }), wx.hideLoading();
            }
        });
    },
    sendThousandCoupon: function(e) {
        this.hasUnionid ? this.requestThousandCoupon(e) : (this.thousandCouponOptions = e, 
        this.authType = e.type, this.showAuthPopup());
    },
    handleAuth: function(e) {
        this.hasUnionid = e.detail, "thousand_coupon" === this.authType && this.requestThousandCoupon(this.thousandCouponOptions);
    },
    requestThousandCoupon: function(e) {
        wx.showLoading({
            mask: !0
        });
        var a = {
            open_id: wx.getStorageSync("oid"),
            union_id: wx.getStorageSync("unionId"),
            thousand_activity_id: e.path
        }, o = i.getSignurature(a);
        wx.request({
            url: n.default.SEND_THOUSAND_COUPON,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: (0, t.default)({}, a, {
                sign: o
            }),
            success: function(e) {
                wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: e.data.data.message
                }), 200 !== e.data.retcode && i.logger(n.default.SEND_THOUSAND_COUPON, {
                    level: 3,
                    message: e.data.data.message || "发送千人千券活动券失败",
                    request: (0, t.default)({}, a, {
                        sign: o
                    }),
                    response: e
                }), wx.hideLoading();
            },
            fail: function(e) {
                wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "您的操作超时，请稍后重试"
                }), i.logger(n.default.SEND_THOUSAND_COUPON, {
                    level: 3,
                    message: e.errMsg || "发送千人千券活动券失败",
                    request: (0, t.default)({}, a, {
                        sign: o
                    }),
                    response: e
                }), wx.hideLoading();
            }
        });
    },
    goToOrders: function() {
        wx.navigateTo({
            url: "../order/order"
        });
    },
    goToH5H5: function() {
        var e = "https://onramp-staging-sbux.wiredcraft.cn/svc-onramp?card_id=pcv_Uw8-hcCLDai63zJMvSvGLo0Y&openid=ox4Jr5TXDybkWT4kRXuJRK-yOla9Q&encrypt_code=aoVaVRvgj06MASPqMQEFRMjxRZUUSJbQtZHGjbAsZ2qqofL9HHEGS1IEgYoAlmYu";
        e = encodeURIComponent(e), wx.navigateTo({
            url: "../h5/h5?url=" + e + "&type=special"
        });
    },
    doInit: function(e, t) {
        var a = this;
        this.pageInit = !0, this.hasUnionid = wx.getStorageSync("unionId");
        var o = this, s = {
            scene: e.scene ? e.scene : "default",
            channel: i.globalData.channel,
            open_id: t
        }, r = i.getSignurature(s);
        i.logger(n.default.INDEX, {
            level: 4,
            message: "开始请求首页数据",
            request: s
        }), wx.request({
            url: n.default.INDEX,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(s, {
                sign: r
            }),
            success: function(e) {
                if (console.log("首页数据拉取:", e.data), 200 == e.data.retcode || 99999 == e.data.retcode) {
                    var t = e.data.data, d = {
                        indexData: t
                    };
                    t.favorite && (d.favorite = a.resetTipIcon(t.favorite, "favorite")), t.order_history && (d.orderHistory = a.resetTipIcon(t.order_history, "orderHistory")), 
                    d.backgroundInfo = a.resetTipIcon({
                        image: t.background_image,
                        color: t.background_color,
                        type: t.background_type
                    }, "backgroundInfo"), i.globalData.sceneId = t.scene, a.setData(d), i.doTracking("actPv", JSON.stringify({
                        page_path: "/pages/index",
                        channel: i.globalData.channel,
                        scene: i.globalData.sceneId
                    }), Math.floor(Date.now() / 1e3)), 1 == t.landing && t.landing_config.id !== wx.getStorageSync("landingId") && (o.setData({
                        showPopup: !0
                    }), wx.setStorage({
                        key: "landingId",
                        data: t.landing_config.id
                    })), o.checkShowGift(t), t.banner && 1 === t.banner.length && o.setData({
                        indicatorDots: !1
                    });
                } else i.logger(n.default.INDEX, {
                    level: 3,
                    message: e.data.msg || "获取首页数据失败",
                    request: Object.assign(s, {
                        sign: r
                    }),
                    response: e
                }), wx.reLaunch({
                    url: "../error/error?api=index&code=" + e.data.retcode
                });
                wx.hideLoading();
            },
            fail: function(e) {
                console.error("index data error:", e), wx.reLaunch({
                    url: "../error/error?msg=API_index_WXRequestFail"
                }), i.logger(n.default.INDEX, {
                    level: 3,
                    message: e.errMsg || "获取首页数据失败",
                    request: Object.assign(s, {
                        sign: r
                    }),
                    response: e
                }), wx.hideLoading();
            }
        });
    },
    onLoad: function(e) {
        var t = this;
        wx.showLoading({
            mask: !0
        }), i.globalData.channel = e.channel || i.globalData.channel || "", wx.checkSession({
            success: function() {
                var a = wx.getStorageSync("oid");
                a ? t.doInit(e, a) : i.doAuthor().then(function(a) {
                    t.doInit(e, a.oid), i.setVisitId();
                });
            },
            fail: function(a) {
                i.doAuthor().then(function(a) {
                    t.doInit(e, a.oid), i.setVisitId();
                }), i.logger("checkSession", {
                    level: 4,
                    message: "session过期",
                    response: a
                });
            }
        });
    },
    onShow: function() {
        this.pageInit && this.getLastUngifting();
    },
    getLastUngifting: function() {
        var e = this, t = {
            open_id: wx.getStorageSync("oid")
        }, a = i.getSignurature(t);
        wx.request({
            url: n.default.LAST_UNGIFTING,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(t, {
                sign: a
            }),
            success: function(o) {
                if (200 == o.data.retcode) {
                    var s = o.data.data;
                    e.setData({
                        "indexData.un_gifting_id": s.un_gifting_id,
                        "indexData.un_gifting_type": s.un_gifting_type
                    });
                } else 9999 === o.data.retcode ? i.doAuthor().then(function(t) {
                    e.getLastUngifting(), i.setVisitId();
                }) : i.logger(n.default.LAST_UNGIFTING, {
                    level: 3,
                    message: o.data.msg || "获取未送礼品券失败",
                    request: Object.assign(t, {
                        sign: a
                    }),
                    response: o
                });
                e.checkShowGift(e.data.indexData);
            },
            fail: function(o) {
                e.checkShowGift(e.data.indexData), i.logger(n.default.LAST_UNGIFTING, {
                    level: 3,
                    message: o.errMsg || "获取未送礼品券失败",
                    request: Object.assign(t, {
                        sign: a
                    }),
                    response: o
                });
            }
        });
    },
    checkShowGift: function(e) {
        console.log("show gift pop"), 0 !== e.un_gifting_id && e.un_gifting_id !== wx.getStorageSync("unGiftingId") && e.un_gifting_id > wx.getStorageSync("unGiftingId") ? (this.setData({
            hasUnGiftingType: e.un_gifting_type,
            hasUnGifting: !0,
            hasSimpleBubble: !1
        }), wx.setStorage({
            key: "unGiftingId",
            data: e.un_gifting_id
        })) : "{}" != JSON.stringify(e.tip) ? this.setData({
            hasSimpleBubble: !0,
            hasUnGifting: !1
        }) : this.setData({
            hasSimpleBubble: !1,
            hasUnGifting: !1
        });
    },
    onHide: function() {
        i.doTracking("actHang", JSON.stringify({
            page_path: "/pages/index"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        return i.doTracking("actShare", JSON.stringify({
            page_path: "/pages/index"
        }), Math.floor(Date.now() / 1e3)), {
            path: "pages/index/index?scene=" + this.data.indexData.scene
        };
    },
    timeList: [ 4e3, 3e3, 2e3 ],
    bannerChange: function(e) {
        var t = e.detail.current, a = t > 1 ? this.timeList[2] : this.timeList[t];
        this.setData({
            interval: a
        });
    },
    toCollect: function() {
        i.doTracking("actClickFavButton", JSON.stringify({}), Math.floor(Date.now() / 1e3)), 
        wx.navigateTo({
            url: "/pages/collectList/collectList"
        });
    }
}));