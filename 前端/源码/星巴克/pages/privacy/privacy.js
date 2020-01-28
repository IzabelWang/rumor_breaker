var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")), a = getApp();

Page(e.default.Page({
    data: {},
    onLoad: function(e) {
        wx.hideShareMenu(), a.doTracking("actPv", JSON.stringify({
            page_path: "/pages/privacy",
            channel: a.globalData.channel,
            scene: a.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        a.doTracking("actHang", JSON.stringify({
            page_path: "/pages/privacy"
        }), Math.floor(Date.now() / 1e3));
    }
}));