var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")), a = getApp();

Page(e.default.Page({
    data: {
        error: {
            msg: "",
            api: "",
            code: ""
        }
    },
    onLoad: function(e) {
        this.setData({
            error: e
        }), a.doTracking("actPv", JSON.stringify({
            page_path: "/pages/error",
            channel: a.globalData.channel,
            scene: a.globalData.sceneId
        }), Math.floor(Date.now() / 1e3)), a.logger("showErrorPage", {
            level: 4,
            message: "显示错误提示页",
            response: e
        });
    },
    onHide: function() {
        a.doTracking("actHang", JSON.stringify({
            page_path: "/pages/error"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        a.doTracking("actShare", JSON.stringify({
            page_path: "/pages/error"
        }), Math.floor(Date.now() / 1e3));
    },
    back: function() {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    }
}));