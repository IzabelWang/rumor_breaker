var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")), a = getApp();

Page(e.default.Page({
    data: {
        message: ""
    },
    onLoad: function(e) {
        wx.hideShareMenu(), e.message && this.setData({
            message: e.message
        }), a.doTracking("actPv", JSON.stringify({
            page_path: "/pages/refund/refundError",
            channel: a.globalData.channel,
            scene: a.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        a.doTracking("actHang", JSON.stringify({
            page_path: "/pages/refund/refundFriend"
        }), Math.floor(Date.now() / 1e3));
    }
}));