var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")), a = getApp();

Page(e.default.Page({
    data: {
        currentStatus: 1,
        shareImg: "",
        shareTitle: "",
        refundId: "",
        orderId: ""
    },
    onLoad: function(e) {
        e.type && this.setData({
            currentStatus: e.type
        }), 1 != this.data.currentStatus ? wx.hideShareMenu() : wx.showShareMenu(), 1 == this.data.currentStatus && e.shareTitle && e.shareImg && e.refundId && e.orderId && this.setData({
            shareTitle: e.shareTitle,
            shareImg: decodeURIComponent(e.shareImg),
            refundId: e.refundId,
            orderId: e.orderId
        }), a.doTracking("actPv", JSON.stringify({
            page_path: "/pages/refund/refundResult",
            channel: a.globalData.channel,
            scene: a.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        a.doTracking("actHang", JSON.stringify({
            page_path: "/pages/refund/refundResult"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        return a.doTracking("actShare", JSON.stringify({
            page_path: "/pages/refund/refundResult"
        }), Math.floor(Date.now() / 1e3)), {
            title: this.data.shareTitle,
            path: "pages/refund/refundFriend/refundFriend?refundId=" + this.data.refundId + "&orderId=" + this.data.orderId,
            imageUrl: this.data.shareImg
        };
    }
}));