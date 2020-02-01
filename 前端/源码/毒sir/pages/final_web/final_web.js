Page({
    data: {},
    onLoad: function(t) {
        t.url && this.setData({
            url: decodeURIComponent(t.url)
        }), t.title && (this.title = t.title);
    },
    onReady: function() {
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.title && wx.setNavigationBarTitle({
            title: this.title
        });
    },
    onWebLoadSuccess: function() {
        wx.hideLoading();
    },
    onWebLoadFail: function() {
        wx.hideLoading(), setTimeout(function() {
            wx.showToast({
                title: "加载失败",
                icon: "none"
            });
        });
    }
});