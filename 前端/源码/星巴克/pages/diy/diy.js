var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../547BC8221C91398C321DA02558497AF5.js")), a = (e(require("../../4445B0631C91398C2223D86471997AF5.js")), 
e(require("vs-logger"))), i = getApp();

Page(a.default.Page({
    data: {
        firstCoupon: !1
    },
    onShow: function() {},
    showModal: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.showModal(Object.assign({
            content: "",
            showCancel: !1
        }, e));
    },
    onLoad: function(e) {
        var t = this;
        wx.checkSession({
            success: function() {
                wx.getStorageSync("oid") ? t.init(e) : i.doAuthor().then(function(a) {
                    t.init(e);
                });
            },
            fail: function() {
                i.doAuthor().then(function(a) {
                    t.init(e);
                });
            }
        });
    },
    init: function(e) {
        var a = this;
        if (e.theme_id && "undefined" !== e.theme_id) {
            i.globalData.channel = e.channel || "", i.globalData.theme_id = e.theme_id, i.globalData.sceneId = e.scene ? e.scene : "default", 
            i.doTracking("actPv", JSON.stringify({
                page_path: "/pages/diy",
                channel: i.globalData.channel,
                scene: i.globalData.sceneId
            }), Math.floor(Date.now() / 1e3)), wx.showLoading({
                title: "载入中",
                mask: !0
            });
            var n = this;
            this.setData({
                scr: i.globalData.sysinfo.whRatio >= 2 ? "ext" : "nml",
                isAndroid: i.globalData.sysinfo.system.indexOf("Android") > -1
            });
            var o = {
                theme_id: e.theme_id,
                open_id: wx.getStorageSync("oid"),
                scene: i.globalData.sceneId,
                channel: i.globalData.channel
            }, r = i.getSignurature(o);
            wx.request({
                url: t.default.THEME_SHOW,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(o, {
                    sign: r
                }),
                success: function(e) {
                    if (200 != e.data.retcode) return i.logger(t.default.THEME_SHOW, {
                        level: 3,
                        message: e.data.msg || "获取主题配置失败",
                        request: Object.assign(o, {
                            sign: r
                        }),
                        response: e
                    }), void wx.redirectTo({
                        url: "/pages/error/error?api=theme_show&code=" + e.data.retcode
                    });
                    var a = e.data.data, s = a.background_url || "https://static-cdn.verystar.net/front/starbucks/weapp-starbucks-wsg3.0/bg1.jpg";
                    i.globalData.diyInfo = {
                        cover_list: a.cover_list,
                        scene: a.scene,
                        tab_info: a.tab_info,
                        title: a.title,
                        share_image_url: a.share_image_url || "",
                        share_title: a.share_title || "",
                        background_url: s
                    }, wx.setNavigationBarTitle({
                        title: a.title
                    });
                    var c = a.cover_list[0];
                    c.index = 0, n.setData({
                        cover_list: a.cover_list,
                        cover_curr: c,
                        background_url: s
                    });
                },
                fail: function(t) {
                    a.showModal({
                        content: "网络超时，请重试",
                        success: function() {
                            a.init(e);
                        }
                    }), console.log("request fail", t);
                },
                complete: function(e) {
                    wx.hideLoading();
                }
            });
        } else wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    selectCard: function(e) {
        this.setData({
            cover_curr: e.currentTarget.dataset
        }), i.doTracking("actSpeSwitchCard", JSON.stringify({
            cover_id: e.currentTarget.dataset.id
        }), Math.floor(Date.now() / 1e3));
    },
    goStart: function(e) {
        var t = this.data.cover_curr;
        if (t) {
            i.globalData.cover_id = t.id;
            var a = "/pages/diy/edit/edit?cover_id=" + t.id + "&cover_index=" + t.index;
            wx.navigateTo({
                url: a
            }), i.doTracking("actSubmDiyButton", JSON.stringify({
                cover_id: t.id
            }), Math.floor(Date.now() / 1e3));
        }
    },
    onShareAppMessage: function() {
        return i.doTracking("actShare", JSON.stringify({
            page_path: "/pages/diy"
        }), Math.floor(Date.now() / 1e3)), {
            title: i.globalData.diyInfo.share_title,
            path: "/pages/diy/diy?theme_id=".concat(this.options.theme_id, "&scene=").concat(i.globalData.sceneId),
            imageUrl: i.globalData.diyInfo.share_image_url
        };
    },
    onHide: function() {
        i.doTracking("actHang", JSON.stringify({
            page_path: "/pages/diy"
        }), Math.floor(Date.now() / 1e3));
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
    }
}));