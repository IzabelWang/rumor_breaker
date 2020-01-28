var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("vs-logger")), i = e(require("../../547BC8221C91398C321DA02558497AF5.js")), o = getApp();

Page(t.default.Page({
    onLoad: function(e) {
        console.log(e);
        var t = this;
        wx.hideShareMenu(), wx.checkSession({
            success: function() {
                wx.getStorageSync("oid") ? t.setSrc(e) : o.doAuthor().then(function() {
                    t.setSrc(e), o.setVisitId();
                });
            },
            fail: function() {
                o.doAuthor().then(function() {
                    t.setSrc(e), o.setVisitId();
                });
            }
        });
    },
    setSrc: function(e) {
        var t = i.default.PROMOTION_H5 + e.uuid + "?openid=" + wx.getStorageSync("oid");
        console.log(t), this.setData({
            src: t
        });
    }
}));