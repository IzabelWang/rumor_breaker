var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../547BC8221C91398C321DA02558497AF5.js")), r = e(require("vs-logger")), t = getApp();

Page(r.default.Page({
    data: {
        packageData: {},
        isOldOrder: !1
    },
    onLoad: function(e) {
        wx.hideShareMenu();
        var r = e.orderId, n = this;
        if (r) {
            var o = {
                open_id: wx.getStorageSync("oid"),
                order_id: r
            }, i = t.getSignurature(o);
            wx.request({
                url: a.default.REFUND_CODELIST,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(o, {
                    sign: i
                }),
                success: function(e) {
                    200 === e.data.retcode ? n.setData({
                        packageData: e.data.data,
                        isOldOrder: !t.commonRegex().checkAllNum(r)
                    }) : (t.logger(a.default.REFUND_CODELIST, {
                        level: 3,
                        message: e.data.msg || "获取卡券状态失败",
                        request: Object.assign(o, {
                            sign: i
                        }),
                        response: e
                    }), wx.redirectTo({
                        url: "../../error/error?api=refundCodeList&code=" + e.data.retcode
                    }));
                }
            });
        } else wx.redirectTo({
            url: "../../error/error?msg=noOrderIdInpackageDetailPage"
        });
        t.doTracking("actPv", JSON.stringify({
            page_path: "/pages/refund/packageDetail",
            channel: t.globalData.channel,
            scene: t.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        t.doTracking("actHang", JSON.stringify({
            page_path: "/pages/refund/packageDetail"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {},
    refundDetail: function() {
        wx.showModal({
            content: "您的退款申请被受理后，零钱支付退款将及时退回零钱账户。银行卡支付，退款将在5~7个工作日退回原卡。实际到账时间依各银行政策有所不同。实际到账以微信支付为准。",
            showCancel: !1
        });
    }
}));