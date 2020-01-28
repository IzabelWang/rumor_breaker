var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("vs-logger")), t = e(require("../../547BC8221C91398C321DA02558497AF5.js")), r = getApp();

Page(a.default.Page({
    data: {
        stores: null
    },
    openMap: function(e) {
        var a = e.currentTarget.dataset.store;
        wx.openLocation({
            latitude: Number(a.latitude),
            longitude: Number(a.longitude),
            name: a.branch_name,
            address: a.address,
            scale: 28
        });
    },
    onLoad: function(e) {
        var a = this;
        wx.getLocation({
            type: "wgs84",
            success: function(e) {
                var n = {
                    longitude: e.longitude,
                    latitude: e.latitude,
                    open_id: wx.getStorageSync("oid")
                }, o = r.getSignurature(n);
                wx.request({
                    url: t.default.NEARBY_LIST,
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: Object.assign(n, {
                        sign: o
                    }),
                    method: "POST",
                    success: function(e) {
                        var s = e.data;
                        200 == s.retcode ? a.setData({
                            stores: s.data
                        }) : (r.logger(t.default.NEARBY_LIST, {
                            level: 10502 === s.retcode ? 4 : 3,
                            message: e.data.msg || "获取附近门店失败",
                            request: Object.assign(n, {
                                sign: o
                            }),
                            response: e
                        }), wx.navigateTo({
                            url: "../error/error?api=nearbylist&code=" + e.data.retcode
                        }));
                    }
                });
            }
        }), r.doTracking("actPv", JSON.stringify({
            page_path: "/pages/store",
            channel: r.globalData.channel,
            scene: r.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        r.doTracking("actHang", JSON.stringify({
            page_path: "/pages/store"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        r.doTracking("actShare", JSON.stringify({
            page_path: "/pages/store"
        }), Math.floor(Date.now() / 1e3));
    }
}));