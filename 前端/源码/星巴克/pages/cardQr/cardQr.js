var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../D23B39071C91398CB45D5100B1897AF5.js")), a = e(require("../../547BC8221C91398C321DA02558497AF5.js")), n = e(require("vs-logger")), o = getApp();

Page(n.default.Page({
    data: {
        info: null,
        isIpx: null,
        isIOS: !0,
        countDownTimeout: null,
        countDownTime: 30,
        cSize: 0,
        showFake: !1,
        brightnessValue: .5
    },
    onHide: function() {
        wx.setScreenBrightness({
            value: this.data.brightnessValue
        }), clearTimeout(this.data.countDownTimeout), o.doTracking("actHang", JSON.stringify({
            page_path: "/pages/cardQr"
        }), Math.floor(Date.now() / 1e3));
    },
    onShow: function() {
        var e = this;
        wx.getScreenBrightness({
            success: function(t) {
                e.setData({
                    brightnessValue: t.value
                });
            }
        }), wx.setScreenBrightness({
            value: 1
        });
    },
    generateQrcode: function(e, n, i) {
        var r = this, s = {
            type: e,
            encrypt_code: n,
            card_id: i
        }, c = o.getSignurature(s);
        wx.request({
            url: a.default.CARD_SHOW,
            header: {
                "content-type": "application/json"
            },
            method: "GET",
            data: Object.assign(s, {
                sign: c
            }),
            success: function(d) {
                if (200 == d.data.retcode) {
                    r.setData({
                        info: d.data.data
                    }), o.doTracking("actPv", JSON.stringify({
                        page_path: "/pages/cardQr",
                        channel: o.globalData.channel,
                        scene: o.globalData.sceneId
                    }), Math.floor(Date.now() / 1e3)), wx.setNavigationBarTitle({
                        title: d.data.data.card_name
                    });
                    var u = 0;
                    wx.getSystemInfoSync().system.indexOf("iOS") > -1 ? (r.setData({
                        isIOS: !0
                    }), u = o.globalData.isIpx ? 280 : 196, "iPhone 5" == wx.getSystemInfoSync().model && (u = 162)) : (r.setData({
                        isIOS: !1
                    }), u = 1 == r.data.info.type ? 206 : 142), r.setData({
                        cSize: u
                    }), (0, t.default)({
                        width: r.data.cSize,
                        height: r.data.cSize,
                        canvasId: "mycanvas",
                        text: r.data.info.qrcode
                    }), "2" == r.data.info.type && r.countDown();
                } else 10401 == d.data.retcode ? r.generateQrcode(e, n, i) : 2e4 == d.data.retcode ? r.setData({
                    showFake: !0
                }) : (o.logger(a.default.CARD_SHOW, {
                    level: 3,
                    message: d.data.msg || "获取核销码失败",
                    request: Object.assign(s, {
                        sign: c
                    }),
                    response: d
                }), wx.navigateTo({
                    url: "../error/error?api=cardShow&code=" + d.data.retcode
                }));
            }
        });
    },
    onLoad: function(e) {
        wx.hideShareMenu(), this.setData({
            isIpx: o.globalData.isIpx
        }), e.card_id && e.type && e.encrypt_code ? this.generateQrcode(e.type, e.encrypt_code, e.card_id) : wx.navigateTo({
            url: "../error/error?msg=paramWrongInCardQrPage"
        });
    },
    doCountDown: function() {
        var e = this;
        if (e.data.countDownTime--, e.setData({
            countDownTime: e.data.countDownTime--,
            countDownTimeout: setTimeout(e.doCountDown, 1e3)
        }), 0 == e.data.countDownTime) {
            clearTimeout(e.data.countDownTimeout);
            var n = {
                open_id: wx.getStorageSync("oid"),
                code: e.data.info.code
            }, i = o.getSignurature(n);
            wx.request({
                url: a.default.CARD_CODE,
                header: {
                    "content-type": "application/json"
                },
                method: "GET",
                data: Object.assign(n, {
                    sign: i
                }),
                success: function(r) {
                    200 == r.data.retcode ? ((0, t.default)({
                        width: e.data.cSize,
                        height: e.data.cSize,
                        canvasId: "mycanvas",
                        text: r.data.data
                    }), e.countDown()) : (o.logger(a.default.CARD_CODE, {
                        level: 3,
                        message: r.data.msg || "获取核销动态二维码失败",
                        request: Object.assign(n, {
                            sign: i
                        }),
                        response: r
                    }), wx.navigateTo({
                        url: "../error/error?api=cardShow&code=" + r.data.retcode
                    }));
                }
            });
        }
    },
    countDown: function() {
        this.setData({
            countDownTime: 30
        }), this.doCountDown();
    }
}));