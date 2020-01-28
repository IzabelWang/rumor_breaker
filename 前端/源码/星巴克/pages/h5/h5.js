var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("vs-logger")), t = require("../../48B317D01C91398C2ED57FD7D3797AF5.js"), s = e(require("../../547BC8221C91398C321DA02558497AF5.js")), r = getApp();

Page(a.default.Page({
    data: {
        currentSrc: "",
        customise: {},
        shareUrl: "pages/index/index",
        shareImg: "https://static.egifting.starbucks.com.cn/giftcard/img/refund_default_share.jpg",
        shareTitle: "星巴克用星说",
        shareInfo: null
    },
    onLoad: function(e) {
        console.log(e), e.url ? ("special" == e.type && (e.url = decodeURIComponent(e.url)), 
        "invoice" == e.destination && wx.hideShareMenu(), this.setData({
            currentSrc: e.url
        }), r.doTracking("actPv", JSON.stringify({
            page_path: "/pages/h5",
            channel: r.globalData.channel,
            scene: r.globalData.sceneId
        }), Math.floor(Date.now() / 1e3))) : wx.navigateTo({
            url: "../error/error?msg=noUrlInH5Page"
        }), this.getShareImg();
    },
    getShareImg: function() {
        var e = this, a = {
            token: (0, t.sha256)(this.data.currentSrc)
        }, i = r.getSignurature(a);
        wx.request({
            url: s.default.GET_SHARE_IMAGE,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(a, {
                sign: i
            }),
            success: function(t) {
                200 == t.data.retcode ? e.setData({
                    shareInfo: t.data.data
                }) : r.logger(s.default.GET_SHARE_IMAGE, {
                    level: 4,
                    message: t.data.msg || "获取分享图片失败",
                    request: Object.assign(a, {
                        sign: i
                    }),
                    response: t
                });
            }
        });
    },
    onHide: function() {
        r.doTracking("actHang", JSON.stringify({
            page_path: "/pages/h5"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        var e = this.data.customise.isCustomise ? "pages/h5/h5?type=special&url=" + encodeURIComponent(this.data.customise.shareUrl) : this.data.shareUrl, a = this.data.shareInfo;
        return r.doTracking("actShare", JSON.stringify({
            page_path: "/pages/h5"
        }), Math.floor(Date.now() / 1e3)), {
            title: a ? a.title : this.data.shareTitle,
            path: e,
            imageUrl: a ? a.img_url : this.data.shareImg
        };
    },
    bindGetMsg: function(e) {
        if ("customise" == e.detail.data[0].page && !this.data.shareInfo) {
            var a = e.detail.data[0].url ? e.detail.data[0].url : "pages/index/index", t = e.detail.data[0].shareImg ? e.detail.data[0].shareImg : "https://static.egifting.starbucks.com.cn/giftcard/img/refund_default_share.jpg", s = e.detail.data[0].shareTitle ? e.detail.data[0].shareTitle : "星巴克用星说";
            this.setData({
                customise: {
                    isCustomise: !0,
                    shareUrl: a
                }
            }), this.setData({
                shareImg: t
            }), this.setData({
                shareTitle: s
            });
        }
    }
}));