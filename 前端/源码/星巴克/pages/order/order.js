var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("vs-logger")), r = e(require("../../547BC8221C91398C321DA02558497AF5.js")), o = e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")), s = getApp();

Page(a.default.Page({
    data: {
        orders: [],
        isIpx: null,
        noOrders: !1,
        isHideLoadMore: 0,
        btnClick: !1,
        showTipImg: null,
        reset: !1
    },
    getOrders: function(e) {
        wx.showLoading();
        var t = this, a = t.data.orders;
        s.logger("getOrders", {
            level: 4,
            message: "currentOrders value",
            response: a
        });
        var o = 0 == a.length ? 0 : a[a.length - 1].id, d = {
            open_id: e || wx.getStorageSync("oid"),
            last_id: o
        }, n = s.getSignurature(d), i = 0;
        wx.request({
            url: r.default.ORDER_LIST,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(d, {
                sign: n
            }),
            success: function(e) {
                if (console.log(e, "ccccc"), 200 == e.data.retcode) {
                    var a = e.data.data.order_list;
                    if (e.data.data.showTipImg && t.setData({
                        showTipImg: e.data.data.showTipImg
                    }), a.length > 0) {
                        var o = !0, c = !1, l = void 0;
                        try {
                            for (var g, u = a[Symbol.iterator](); !(o = (g = u.next()).done); o = !0) {
                                var f = g.value;
                                f.total_price = (f.total_price / 100).toFixed(2);
                            }
                        } catch (e) {
                            c = !0, l = e;
                        } finally {
                            try {
                                o || null == u.return || u.return();
                            } finally {
                                if (c) throw l;
                            }
                        }
                    } else i = 2;
                    t.setData({
                        orders: t.data.orders.concat(a)
                    }), 0 == t.data.orders.length && t.setData({
                        noOrders: !0
                    });
                } else 99999 == e.data.retcode ? s.doAuthor().then(function(e) {
                    t.getOrders(e.oid);
                }) : (s.logger(r.default.ORDER_LIST, {
                    level: 3,
                    message: e.data.msg || "获取订单列表失败",
                    request: Object.assign(d, {
                        sign: n
                    }),
                    response: e
                }), wx.navigateTo({
                    url: "../error/error?api=orderList&code=" + e.data.retcode
                }));
            },
            complete: function() {
                wx.hideLoading(), t.setData({
                    isHideLoadMore: i
                });
            }
        });
    },
    onLoad: function(e) {
        wx.hideShareMenu(), this.setData({
            isIpx: s.globalData.isIpx
        }), this.getOrders(), s.doTracking("actPv", JSON.stringify({
            page_path: "/pages/order",
            channel: s.globalData.channel,
            scene: s.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onShow: function() {
        this.data.reset && (this.setData({
            orders: [],
            reset: !1
        }), this.getOrders());
    },
    onHide: function() {
        s.doTracking("actHang", JSON.stringify({
            page_path: "/pages/order"
        }), Math.floor(Date.now() / 1e3));
    },
    goDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../orderDetail/orderDetail?orderId=" + t
        });
    },
    onReachBottom: function() {
        0 == this.data.isHideLoadMore && (this.setData({
            isHideLoadMore: 1
        }), this.getOrders());
    },
    goGifting: function(e) {
        var t = this;
        0 == t.data.btnClick && t.setData({
            btnClick: !0
        }), this.setData({
            reset: !0
        }), s.showFriendsList(e.currentTarget.dataset.id), t.setData({
            btnClick: !1
        });
    },
    goSelfGifting: function(e) {
        var a = this;
        0 == a.data.btnClick && a.setData({
            btnClick: !0
        });
        var d = e.currentTarget.dataset.id, n = e.currentTarget.dataset.index, i = {
            open_id: wx.getStorageSync("oid"),
            order_id: d
        }, c = s.getSignurature(i);
        wx.showLoading(), wx.request({
            url: r.default.ORDER_GET_CODE,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: Object.assign(i, {
                sign: c
            }),
            method: "POST",
            success: function(e) {
                if (200 != e.data.retcode) wx.hideLoading(), wx.showModal({
                    showCancel: !1,
                    content: "领取失败，请重试！"
                }), s.logger(r.default.ORDER_GET_CODE, {
                    level: 3,
                    message: e.data.msg || "获取卡密失败",
                    request: Object.assign(i, {
                        sign: c
                    }),
                    response: e
                }); else {
                    var l = JSON.stringify(e.data.data), g = r.default.CRYPTO_SECRET, u = o.default.CryptoJS.AES.decrypt(l, g, {
                        format: o.default.CryptoJSAesJson
                    }).toString(o.default.CryptoJS.enc.Utf8), f = JSON.parse(u)[0].cardId, h = JSON.parse(u)[0].cardExt;
                    console.log("cardId"), console.log(f), console.log("cardExt"), console.log(h);
                    var p = wx.getStorageSync("oid"), w = h.indexOf("}");
                    h = h.splice(w + 1, ',"openId":""}'), console.log(h), console.log("wx addCard: \t "), 
                    wx.hideLoading(), wx.addCard({
                        cardList: [ {
                            cardId: f,
                            cardExt: h
                        } ],
                        success: function(e) {
                            console.log("res: \t"), console.log(e);
                            var r = [ {
                                cardId: e.cardList[0].cardId,
                                cardExt: e.cardList[0].code,
                                isSuccess: e.cardList[0].isSuccess
                            } ], i = o.default.CryptoJS.AES.encrypt(JSON.stringify(r), g, {
                                format: o.default.CryptoJSAesJson
                            }).toString();
                            console.log(encodeURIComponent(i)), i = encodeURIComponent(i), s.logAddCard(d, "ok", i), 
                            a.setData((0, t.default)({}, "orders[".concat(n, "].status"), 2)), s.gotoUserRegH5(f, p, e.cardList[0].code);
                        },
                        fail: function(e) {
                            s.logAddCard(d, "fail", JSON.stringify(e));
                        },
                        complete: function(e) {
                            a.setData({
                                btnClick: !1
                            });
                        }
                    });
                }
            },
            fail: function(e) {
                wx.hideLoading(), wx.showModal({
                    showCancel: !1,
                    content: "网络超时，请重试！"
                }), s.logger(r.default.ORDER_GET_CODE, {
                    level: 3,
                    message: "网络超时",
                    response: e
                });
            }
        });
    }
}));