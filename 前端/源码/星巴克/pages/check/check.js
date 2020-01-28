var e = require("../../@babel/runtime/helpers/interopRequireDefault"), o = (require("../../48B317D01C91398C2ED57FD7D3797AF5.js"), 
e(require("../../547BC8221C91398C321DA02558497AF5.js")), e(require("vs-logger"))), t = getApp();

Page(o.default.Page({
    data: {
        currentSrc: ""
    },
    onLoad: function(e) {
        console.log(e), wx.hideLoading();
        var o = wx.getUpdateManager();
        setTimeout(function() {
            wx.showLoading();
        }, 2e3), o.onCheckForUpdate(function(e) {
            console.log(e.hasUpdate), e.hasUpdate || console.log(t.checkBeforePath);
        }), o.onUpdateReady(function() {
            console.log("qweqwe"), wx.showModal({
                title: "更新提示",
                content: "当前小程序有版本更新，请点击“确定”重启小程序体验最新功能",
                success: function(e) {
                    e.confirm ? o.applyUpdate() : t.logger("onUpdateReady", {
                        level: 3,
                        message: "用户取消版本更新"
                    });
                }
            });
        }), o.onUpdateFailed(function() {
            wx.showModal({
                title: "更新提示",
                content: "当前小程序版本更新失败，请点击“确定”重启小程序",
                success: function(e) {
                    e.confirm && o.applyUpdate();
                }
            }), t.logger("onUpdateFailed", {
                level: 3,
                message: "版本更新失败"
            });
        });
    }
}));