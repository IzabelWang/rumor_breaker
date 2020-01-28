var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")), a = getApp();

Page(t.default.Page({
    data: {
        links: [ "https://www.starbucks.com.cn/cn/help/terms/giftcard", "https://www.starbucks.com.cn/cn/help/faq/starbucks-gift-card/my-starbucks-giftcard", "https://www.starbucks.com.cn/cn/help/terms/msr", "https://www.starbucks.com.cn/cn/help/special-provisions-for-starbucks-social-gifting-platform", "https://www.starbucks.com.cn/cn/help/faq/starbucks-gift-card" ]
    },
    goH5: function(t) {
        wx.navigateTo({
            url: "../h5/h5?url=" + this.data.links[t.currentTarget.dataset.linkid]
        });
    },
    onLoad: function(t) {
        wx.hideShareMenu(), a.doTracking("actPv", JSON.stringify({
            page_path: "/pages/terms",
            channel: a.globalData.channel,
            scene: a.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        a.doTracking("actHang", JSON.stringify({
            page_path: "/pages/terms"
        }), Math.floor(Date.now() / 1e3));
    }
}));