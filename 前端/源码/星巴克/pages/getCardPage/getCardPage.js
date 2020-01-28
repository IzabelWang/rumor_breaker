var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../547BC8221C91398C321DA02558497AF5.js")), a = e(require("vs-logger")), o = getApp();

Page(a.default.Page({
    data: {
        title: "",
        image: "",
        activity_status: null,
        activity_type: "",
        activity_id: "",
        activity_time: "",
        activity_words: "",
        icon_words: "",
        redirect_words: "",
        redirect_path: ""
    },
    onLoad: function(e) {
        var t = this;
        this.openId = wx.getStorageSync("oid"), this.unionId = wx.getStorageSync("unionId"), 
        wx.checkSession({
            success: function() {
                t.openId ? t.getConfig(t.openId) : o.doAuthor().then(function(e) {
                    var a = e.oid, i = e.uid;
                    t.openId = a, t.unionId = i, t.getConfig(a), o.setVisitId();
                });
            },
            fail: function() {
                o.doAuthor().then(function(e) {
                    var a = e.oid, i = e.uid;
                    t.openId = a, t.unionId = i, t.getConfig(a), o.setVisitId();
                });
            }
        }), o.doTracking("actPv", JSON.stringify({
            page_path: "/pages/getCardPage/getCardPage",
            channel: o.globalData.channel,
            scene: o.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        o.doTracking("actHang", JSON.stringify({
            page_path: "/pages/getCardPage/getCardPage"
        }), Math.floor(Date.now() / 1e3));
    },
    getConfig: function(e) {
        var a = this;
        wx.showLoading({
            mask: !0
        });
        var i = {
            open_id: e
        };
        i.sign = o.getSignurature(i), o.logger(t.default.TEMPLATE_ACTIVITY_CONFIG, {
            level: 4,
            message: "请求模板消息发券页面配置",
            request: i
        }), wx.request({
            url: t.default.TEMPLATE_ACTIVITY_CONFIG,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: i,
            success: function(e) {
                console.log(e), 200 == e.data.retcode ? a.setData(e.data.data) : (a.setData({
                    activity_status: 0
                }), o.logger(t.default.TEMPLATE_ACTIVITY_CONFIG, {
                    level: 3,
                    message: e.data.msg || "获取代金券页配置失败",
                    request: i,
                    response: e
                })), wx.hideLoading();
            },
            fail: function(e) {
                wx.redirectTo({
                    url: "/pages/error/error?api=TEMPLATE_ACTIVITY_CONFIG&msg=网络异常，请稍后重试"
                }), wx.hideLoading(), o.logger(t.default.TEMPLATE_ACTIVITY_CONFIG, {
                    level: 3,
                    message: e.errMsg || "获取代金券页配置失败",
                    request: i,
                    response: e
                });
            }
        });
    },
    sendVsCoupon: function() {
        wx.showLoading({
            mask: !0
        });
        var e = {
            open_id: this.openId,
            activity_id: this.data.activity_id,
            batch_no: this.data.batch_no
        };
        e.sign = o.getSignurature(e), o.logger(t.default.SEND_VS_COUPON, {
            level: 4,
            message: "请求发送VS活动券",
            request: e
        }), wx.request({
            url: t.default.SEND_VS_COUPON,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: e,
            success: function(a) {
                console.log(a), wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: a.data.msg
                }), 200 !== a.data.retcode && o.logger(t.default.SEND_VS_COUPON, {
                    level: 3,
                    message: a.data.msg || "发送VS活动券失败",
                    request: e,
                    response: a
                }), wx.hideLoading();
            },
            fail: function(a) {
                wx.redirectTo({
                    url: "/pages/error/error?api=SEND_VS_COUPON&code=400&msg=网络异常，请稍后重试"
                }), wx.hideLoading(), o.logger(t.default.SEND_VS_COUPON, {
                    level: 3,
                    message: a.errMsg || "发送VS活动券失败",
                    request: e,
                    response: a
                });
            }
        });
    },
    sendThousandCoupon: function(e) {
        wx.showLoading({
            mask: !0
        });
        var a = {
            open_id: this.openId,
            union_id: e,
            thousand_activity_id: this.data.activity_id
        };
        a.sign = o.getSignurature(a), o.logger(t.default.SEND_THOUSAND_COUPON, {
            level: 4,
            message: "请求发送千人千券",
            request: a
        }), wx.request({
            url: t.default.SEND_THOUSAND_COUPON,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: a,
            success: function(e) {
                console.log(e), wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: e.data.data.message
                }), 200 !== e.data.retcode && o.logger(t.default.SEND_THOUSAND_COUPON, {
                    level: 3,
                    message: e.data.data.message || "发送千人千券失败",
                    request: a,
                    response: e
                }), wx.hideLoading();
            },
            fail: function(e) {
                wx.redirectTo({
                    url: "/pages/error/error?api=SEND_VS_COUPON&msg=网络异常，请稍后重试"
                }), o.logger(t.default.SEND_VS_COUPON, {
                    level: 3,
                    message: e.errMsg || "发送千人千券失败",
                    request: a,
                    response: e
                }), wx.hideLoading();
            }
        });
    },
    getCoupon: function() {
        "1" === this.data.activity_type ? this.sendVsCoupon() : "2" === this.data.activity_type ? this.unionId ? this.sendThousandCoupon(this.unionId || "") : this.showAuthPopup() : (wx.showModal({
            title: "",
            content: "您的操作已超时，请重试",
            showCancel: !1
        }), o.logger("getCoupon", {
            level: 3,
            message: "没有拿到正确的activity_type",
            response: this.data
        })), o.doTracking("actClickCoupon", JSON.stringify({
            activity_id: this.data.activity_id
        }));
    },
    showAuthPopup: function() {
        this.setData({
            showAuthPopup: !0
        });
    },
    handleAuth: function(e) {
        this.unionId = e.detail, this.sendThousandCoupon(this.unionId);
    },
    goPurchase: function(e) {
        wx.navigateTo({
            url: this.data.redirect_path
        }), o.doTracking("actCouponPurchase", JSON.stringify({
            page_path: this.data.redirect_path
        }));
    },
    goWsg: function(e) {
        wx.navigateTo({
            url: "/pages/index/index"
        }), o.doTracking("actCouponBack");
    },
    toggleActivityPopup: function() {
        this.setData({
            showPopup: !this.data.showPopup
        });
    },
    prevent: function() {
        return !1;
    }
}));