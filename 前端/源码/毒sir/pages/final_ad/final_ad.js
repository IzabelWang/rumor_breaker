var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../module/DSHttpRequest"));

Page({
    data: {},
    onLoad: function(t) {
        this.aldEventEnterPage();
    },
    onReady: function() {
        var a = this;
        getApp().staticRequest(new t.default("ActivitySummary2019/Ad", {}, "GET"), function(t) {
            1 == t.code && a.setData({
                showAdBanner: !0,
                adList: t.data.list
            });
        });
    },
    onTapAditem: function(t) {
        var a = t.currentTarget.dataset.item;
        a.appid && (this.aldTapAdItem(a.appid), wx.navigateToMiniProgram({
            appId: a.appid,
            path: a.path,
            extraData: a.extraData
        }));
    },
    aldEventEnterPage: function() {
        getApp().sendEvent("广告页-进入浏览", {});
    },
    aldTapAdItem: function(t) {
        getApp().sendEvent("广告页-点击广告项", {
            appid: t
        });
    }
});