Page({
    data: {
        PageCur: "basics"
    },
    onLoad: function() {},
    NavChange: function(a) {
        this.setData({
            PageCur: a.currentTarget.dataset.cur
        });
        var e = null;
        wx.createInterstitialAd && (e = wx.createInterstitialAd({
            adUnitId: "adunit-53f251ff1944e719"
        })), e && e.show().catch(function(a) {
            console.error(a);
        });
    },
    onShareAppMessage: function() {
        return {
            title: "ColorUI-高颜值的小程序UI组件库",
            imageUrl: "/images/share.jpg",
            path: "/pages/index/index"
        };
    }
});