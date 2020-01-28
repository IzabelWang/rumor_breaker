var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../547BC8221C91398C321DA02558497AF5.js")), a = e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")), o = e(require("vs-logger")), r = getApp();

Page(o.default.Page({
    data: {
        isIpx: null,
        order: null,
        isIOS: !0,
        center: !1,
        btnClick: !1,
        showAll: !1
    },
    localData: {
        SDKVersion: ""
    },
    getInvoice: function(e) {
        var t = wx.getStorageSync("unionId");
        if (t) {
            if (!this.compareSDKVersion()) return;
            this.gotoInvoice(t);
        } else this.showAuthPopup();
    },
    getRefund: function(e) {
        this.compareSDKVersion() && this.gotoRefund();
    },
    showAuthPopup: function() {
        this.setData({
            showAuthPopup: !0
        });
    },
    handleAuth: function(e) {
        this.gotoInvoice(e.detail);
    },
    gotoInvoice: function(e) {
        var a = {
            union_id: e,
            order_id: this.data.order.order_detail.order_id
        }, o = r.getSignurature(a);
        wx.request({
            url: t.default.NEW_INVOICE,
            header: {
                "content-type": "application/json"
            },
            method: "GET",
            data: Object.assign(a, {
                sign: o
            }),
            success: function(e) {
                var n = e.data.retcode;
                if (200 === n) {
                    var i = e.data.data;
                    "OK" == i.type ? wx.navigateTo({
                        url: "../invoice/apply/apply?invoiceData=" + encodeURIComponent(JSON.stringify(i))
                    }) : wx.navigateTo({
                        url: "../invoice/status/status?type=" + i.type + "&orderId=" + i.order_id
                    });
                } else 3010 === n ? wx.showModal({
                    title: "提醒",
                    content: e.data.msg,
                    showCancel: !1
                }) : (r.logger(t.default.NEW_INVOICE, {
                    level: 3,
                    message: e.data.msg || "申请发票失败",
                    request: Object.assign(a, {
                        sign: o
                    }),
                    response: e
                }), wx.navigateTo({
                    url: "/pages/error/error?api=newInvoice&code=".concat(n, "&msg=").concat(e.data.msg)
                }));
            }
        });
    },
    gotoRefund: function() {
        var e = this, a = this.data.order.order_detail.order_id, o = {
            open_id: wx.getStorageSync("oid"),
            order_id: a
        }, n = r.getSignurature(o);
        wx.request({
            url: t.default.REFUND_APPLY,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(o, {
                sign: n
            }),
            success: function(i) {
                if (200 === i.data.retcode) {
                    var s = i.data.data;
                    if (4 === s.refund_status) wx.navigateTo({
                        url: "../refund/refundApplication/refundApplication?refundData=" + encodeURIComponent(JSON.stringify(s))
                    }); else {
                        var d = s.is_share ? "&refundId=" + s.refund_id + "&orderId=" + a + "&shareTitle=" + s.share_title + "&shareImg=" + encodeURIComponent(s.share_img) : "";
                        wx.navigateTo({
                            url: "../refund/refundResult/refundResult?type=" + s.refund_status + d
                        });
                    }
                } else 99999 === i.data.retcode ? r.doAuthor().then(function() {
                    e.gotoRefund();
                }) : (r.logger(t.default.REFUND_APPLY, {
                    level: 3,
                    message: i.data.msg || "退款申请失败",
                    request: Object.assign(o, {
                        sign: n
                    }),
                    response: i
                }), wx.navigateTo({
                    url: "../error/error?api=refundApply&code=" + i.data.retcode
                }));
            }
        });
    },
    toggleCodes: function() {
        this.setData({
            showAll: !this.data.showAll
        });
    },
    goGifting: function(e) {
        var t = this;
        0 == t.data.btnClick && t.setData({
            btnClick: !0
        }), r.showFriendsList(e.currentTarget.dataset.id), t.setData({
            btnClick: !1
        });
    },
    goSelfGifting: function(e) {
        var o = this;
        0 == o.data.btnClick && o.setData({
            btnClick: !0
        });
        var n = e.currentTarget.dataset.id, i = {
            open_id: wx.getStorageSync("oid"),
            order_id: n
        }, s = r.getSignurature(i);
        wx.request({
            url: t.default.ORDER_GET_CODE,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: Object.assign(i, {
                sign: s
            }),
            method: "POST",
            success: function(e) {
                if (200 !== e.data.retcode && r.logger(t.default.ORDER_GET_CODE, {
                    level: 3,
                    message: e.data.msg || "获取卡密失败",
                    request: Object.assign(i, {
                        sign: s
                    }),
                    response: e
                }), "" == e) {
                    var d = {
                        open_id: wx.getStorageSync("oid"),
                        order_id: n
                    }, c = r.getSignurature(d);
                    wx.request({
                        url: t.default.ORDER_GET_CODE,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: Object.assign(d, {
                            sign: c
                        }),
                        method: "POST",
                        success: function(e) {
                            200 !== e.data.retcode && r.logger(t.default.ORDER_GET_CODE, {
                                level: 3,
                                message: e.data.msg || "重新获取卡密失败",
                                request: Object.assign(d, {
                                    sign: c
                                }),
                                response: e
                            });
                        },
                        fail: function(e) {
                            e && r.goToOrders();
                        }
                    });
                } else {
                    var l = JSON.stringify(e.data.data), g = t.default.CRYPTO_SECRET, u = a.default.CryptoJS.AES.decrypt(l, g, {
                        format: a.default.CryptoJSAesJson
                    }).toString(a.default.CryptoJS.enc.Utf8), f = JSON.parse(u)[0].cardId, p = JSON.parse(u)[0].cardExt, h = wx.getStorageSync("oid"), S = p.indexOf("}");
                    p = p.splice(S + 1, ',"openId":""}'), console.log(p), console.log("wx addCard: \t "), 
                    wx.addCard({
                        cardList: [ {
                            cardId: f,
                            cardExt: p
                        } ],
                        success: function(e) {
                            console.log("res: \t"), console.log(e);
                            var t = [ {
                                cardId: e.cardList[0].cardId,
                                cardExt: e.cardList[0].code,
                                isSuccess: e.cardList[0].isSuccess
                            } ], o = a.default.CryptoJS.AES.encrypt(JSON.stringify(t), g, {
                                format: a.default.CryptoJSAesJson
                            }).toString();
                            console.log(encodeURIComponent(o)), o = encodeURIComponent(o), r.logAddCard(n, "ok", o), 
                            r.gotoUserRegH5(f, h, e.cardList[0].code);
                        },
                        fail: function(e) {
                            r.logAddCard(n, "fail", JSON.stringify(e)), r.goToOrders();
                        },
                        complete: function(e) {
                            console.log("from complete: \t"), console.log(e), o.setData({
                                btnClick: !1
                            });
                        }
                    });
                }
            }
        });
    },
    onLoad: function(e) {
        var a = this;
        wx.showLoading(), this.localData.SDKVersion = r.globalData.sysinfo.SDKVersion, this.setData({
            isIpx: r.globalData.isIpx
        }), this.getOpenid(function(o) {
            a.setData({
                isIOS: wx.getSystemInfoSync().system.indexOf("iOS") > -1
            });
            var n = e.orderId, i = a, s = {
                open_id: o,
                order_id: n
            }, d = r.getSignurature(s);
            wx.request({
                url: t.default.ORDER_DETAIL,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(s, {
                    sign: d
                }),
                success: function(e) {
                    console.log(e.data);
                    var a = e.data.data;
                    if (200 == e.data.retcode) {
                        var o = a.order_detail.for_self, n = a.order_detail.status;
                        a.code_list[0].accepter_openid;
                        "1" == o && "1" == n ? i.setData({
                            center: !0
                        }) : i.setData({
                            center: !1
                        }), a.order_detail.total_price = (a.order_detail.total_price / 100).toFixed(2);
                        var c = !0, l = !1, g = void 0;
                        try {
                            for (var u, f = a.code_list[Symbol.iterator](); !(c = (u = f.next()).done); c = !0) {
                                var p = u.value;
                                p.price = (p.price / 100).toFixed(2);
                            }
                        } catch (e) {
                            l = !0, g = e;
                        } finally {
                            try {
                                c || null == f.return || f.return();
                            } finally {
                                if (l) throw g;
                            }
                        }
                        a.order_detail.for_self, i.setData({
                            order: a
                        }), r.doTracking("actPv", JSON.stringify({
                            page_path: "/pages/orderDetail",
                            channel: r.globalData.channel,
                            scene: r.globalData.sceneId
                        }), Math.floor(Date.now() / 1e3));
                    } else r.logger(t.default.ORDER_DETAIL, {
                        level: 3,
                        message: e.data.msg || "获取订单详情失败",
                        request: Object.assign(s, {
                            sign: d
                        }),
                        response: e
                    }), wx.navigateTo({
                        url: "../error/error?api=orderdetail&code=" + e.data.retcode
                    });
                    wx.hideLoading();
                },
                fail: function(e) {
                    r.logger(t.default.ORDER_DETAIL, {
                        level: 3,
                        message: e.errMsg || "获取订单详情失败",
                        request: Object.assign(s, {
                            sign: d
                        }),
                        response: e
                    }), wx.navigateTo({
                        url: "../error/error?api=orderdetail&message=" + e.errMsg
                    }), wx.hideLoading();
                }
            });
        });
    },
    getOpenid: function(e) {
        var t = wx.getStorageSync("oid");
        if (t) return e(t);
        r.doAuthor().then(function(t) {
            var a = t.oid;
            e(a);
        });
    },
    onHide: function() {
        r.doTracking("actHang", JSON.stringify({
            page_path: "/pages/orderDetail"
        }), Math.floor(Date.now() / 1e3));
    },
    compareSDKVersion: function() {
        return !(!wx.getStorageSync("showVersion") && r.compareVersions(this.localData.SDKVersion, "<", "2.8.2")) || (wx.showModal({
            content: "由于微信功能更新，请将您的微信客户端升级至最新版本，避免影响您接收退款及开票进度通知。",
            confirmText: "知道了",
            showCancel: !1
        }), wx.setStorageSync("showVersion", !0), !1);
    }
}));