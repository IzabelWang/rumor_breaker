var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), r = (e(require("../../../547BC8221C91398C321DA02558497AF5.js")), 
e(require("vs-logger"))), o = getApp();

Page(r.default.Page({
    data: {
        errorMsg: "",
        errorApi: "",
        errorCode: "",
        showErrorMsg: !1
    },
    onLoad: function(e) {
        this.opts = JSON.parse(e.opts), o.doTracking("actPv", JSON.stringify({
            page_path: "/pages/error",
            channel: o.globalData.channel,
            scene: o.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        o.doTracking("actHang", JSON.stringify({
            page_path: "/pages/error"
        }), Math.floor(Date.now() / 1e3));
    },
    showError: function() {
        this.setData({
            showErrorMsg: !0
        });
    },
    back: function() {
        wx.redirectTo({
            url: "../index/index"
        });
    },
    bindGetUserInfo: function(e) {
        var r = this;
        o.getUserInfo(e, function() {
            var e = wx.getStorageSync("oid"), o = r.opts, n = o.refundId, a = o.orderId;
            wx.redirectTo({
                url: "/pages/refund/refundFriend/refundFriend?refundId=".concat(n, "&orderId=").concat(a, "&openId=").concat(e)
            });
        });
    }
}));