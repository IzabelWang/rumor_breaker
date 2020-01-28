var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../547BC8221C91398C321DA02558497AF5.js")), a = e(require("vs-logger")), n = getApp();

Page(a.default.Page({
    data: {
        number: "400-820-6998",
        status: [ {
            type: "End",
            title: "开票完成",
            content: "订单发票已发至预留邮箱，如有疑问请拨打星巴克顾客服务电话400-820-6998，由专人协助您解决问题。"
        }, {
            type: "Ing",
            title: "开票处理中",
            content: "客服会在1个工作日内确认完成，如有疑问请拨打星巴克顾客服务电话400-820-6998，由专人协助您解决问题。请关注“星巴克中国”公众号，获取开票申请成功进度通知。"
        }, {
            type: "NoWay",
            title: "开票被驳回",
            content: "很抱歉，您的开票已被驳回。"
        }, {
            type: "ERROR",
            title: "错误",
            content: "很抱歉，您的退款入口错误。"
        }, {
            type: "RefundEnd",
            title: "订单退款成功",
            content: "很抱歉，您的订单已退款成功，不能申请发票。"
        }, {
            type: "RefundIng",
            title: "订单退款中",
            content: "您订单正在申请退款，不能申请发票。如想取消退款申请或有疑问，请拨打星巴克顾客服务电话400-820-6998，由专人协助您解决问题。"
        } ],
        showDetail: !1,
        currentStatus: {},
        invoiceData: null,
        orderId: "",
        isOldOrder: !1
    },
    onLoad: function(e) {
        wx.hideShareMenu();
        var t = e.type;
        "Ing" == t && this.setData({
            orderId: e.orderId
        });
        var a = this.data.status.find(function(e) {
            return e.type == t;
        });
        this.setData({
            currentStatus: a
        }), n.doTracking("actPv", JSON.stringify({
            page_path: "/pages/invoice/status",
            channel: n.globalData.channel,
            scene: n.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        n.doTracking("actHang", JSON.stringify({
            page_path: "/pages/invoice/status"
        }), Math.floor(Date.now() / 1e3));
    },
    makeCallTap: function(e) {
        wx.makePhoneCall({
            phoneNumber: this.data.number
        });
    },
    showDetailTap: function() {
        var e = this;
        if (e.data.invoiceData) e.setData({
            showDetail: !0
        }); else {
            var a = {
                union_id: wx.getStorageSync("unionId"),
                order_id: e.data.orderId
            }, i = n.getSignurature(a);
            wx.request({
                url: t.default.INVOICE_INFO,
                header: {
                    "content-type": "application/json"
                },
                method: "GET",
                data: Object.assign(a, {
                    sign: i
                }),
                success: function(r) {
                    200 == r.data.retcode ? e.setData({
                        invoiceData: r.data.data,
                        showDetail: !0,
                        isOldOrder: !n.commonRegex().checkAllNum(r.data.data.order_id)
                    }) : (n.logger(t.default.INVOICE_INFO, {
                        level: 3,
                        message: r.data.msg || "获取发票信息失败",
                        request: Object.assign(a, {
                            sign: i
                        }),
                        response: r
                    }), wx.redirectTo({
                        url: "../../error/error?api=invoiceinfo&code=" + r.data.retcode
                    }));
                }
            });
        }
    },
    closeTap: function() {
        this.setData({
            showDetail: !1
        });
    }
}));