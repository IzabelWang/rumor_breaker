var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../../../@babel/runtime/helpers/slicedToArray")), t = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("../../../547BC8221C91398C321DA02558497AF5.js")), o = e(require("vs-logger")), n = getApp();

Page(o.default.Page({
    data: {
        showRule: !1,
        selectedList: [],
        agree: !1,
        refundFriendData: null,
        infoShow: !1,
        isOldOrder: !1,
        code_no: null
    },
    init: function(e, r) {
        var t = this, o = this;
        console.log("oid=", r);
        var d = {
            open_id: r,
            order_id: e.orderId,
            refund_id: e.refundId
        }, i = n.getSignurature(d);
        wx.request({
            url: a.default.REFUND_FRIEND,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(d, {
                sign: i
            }),
            success: function(r) {
                if (console.log(r), 200 == r.data.retcode) {
                    var s = r.data.data;
                    s.code_info && s.code_info.length && (s.allUsed = !s.code_info.find(function(e) {
                        return "7" !== e.status;
                    }), s.code_info.sort(function(e) {
                        return "7" === e.status ? 1 : -1;
                    })), o.setData({
                        refundFriendData: s,
                        isOldOrder: !n.commonRegex().checkAllNum(e.orderId)
                    }), wx.setNavigationBarTitle({
                        title: "确认退款"
                    });
                } else if (13e3 == r.data.retcode) {
                    var u = {
                        open_id: wx.getStorageSync("oid"),
                        order_id: e.orderId
                    }, l = n.getSignurature(u);
                    wx.request({
                        url: a.default.REFUND_APPLY,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        data: Object.assign(u, {
                            sign: l
                        }),
                        success: function(r) {
                            if (200 === r.data.retcode) {
                                var t = r.data.data;
                                if (4 === t.refund_status) wx.redirectTo({
                                    url: "../../refund/refundApplication/refundApplication?refundData=" + encodeURIComponent(JSON.stringify(t))
                                }); else {
                                    var o = t.is_share ? "&refundId=" + e.refundId + "&orderId=" + e.orderId + "&shareTitle=" + t.share_title + "&shareImg=" + encodeURIComponent(t.share_img) : "";
                                    wx.redirectTo({
                                        url: "../../refund/refundResult/refundResult?type=" + t.refund_status + o
                                    });
                                }
                            } else n.logger(a.default.REFUND_APPLY, {
                                level: 3,
                                message: r.data.msg || "申请退款失败",
                                request: Object.assign(u, {
                                    sign: l
                                }),
                                response: r
                            }), wx.redirectTo({
                                url: "../../error/error?api=refundApply&code=" + r.data.retcode
                            });
                        }
                    });
                } else 99999 === r.data.retcode ? t.showAuthPopup() : 13007 === r.data.retcode ? wx.redirectTo({
                    url: "../../refund/refundError/refundError"
                }) : 13009 === r.data.retcode ? wx.redirectTo({
                    url: "/pages/refund/refundResult/refundResult?type=3"
                }) : 13010 === r.data.retcode ? wx.redirectTo({
                    url: "/pages/refund/refundError/refundError?message=".concat(r.data.msg)
                }) : (n.logger(a.default.REFUND_FRIEND, {
                    level: 3,
                    message: r.data.msg || "获取好友需退款code失败",
                    request: Object.assign(d, {
                        sign: i
                    }),
                    response: r
                }), wx.redirectTo({
                    url: "/pages/error/error?api=refundFriend&code=" + r.data.retcode + "&msg=" + r.data.msg
                }));
            }
        });
    },
    showAuthPopup: function() {
        this.setData({
            showAuthPopup: !0
        });
    },
    handleAuth: function() {
        this.init(this.options, wx.getStorageSync("oid"));
    },
    popupClose: function() {
        wx.getStorageSync("unionId") || wx.redirectTo({
            url: "/pages/refund/errorAuthorize/errorAuthorize?opts=" + JSON.stringify(this.options)
        });
    },
    onLoad: function(e) {
        console.log(e);
        var r = this;
        e.refundId && e.orderId ? (wx.checkSession({
            success: function() {
                wx.getStorageSync("oid") ? r.init(e, wx.getStorageSync("oid")) : n.doAuthor().then(function(t) {
                    r.init(e, t.oid);
                });
            },
            fail: function(t) {
                n.doAuthor().then(function(t) {
                    r.init(e, t.oid);
                }), n.logger("checkSession", {
                    level: 3,
                    message: "session过期",
                    response: t
                });
            }
        }), n.doTracking("actPv", JSON.stringify({
            page_path: "/pages/refund/refundFriend",
            channel: n.globalData.channel,
            scene: n.globalData.sceneId
        }), Math.floor(Date.now() / 1e3))) : wx.redirectTo({
            url: "../../error/error?msg=noRefundIdOrOrderIdInRefundFriendPage"
        });
    },
    refundSubmit: function(e) {
        var o = this, d = (e.detail.value, ""), i = !0, s = !1, u = void 0;
        try {
            for (var l, c = o.data.selectedList.entries()[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                var f = (0, r.default)(l.value, 2), g = f[0], h = f[1];
                h && (d += g == o.data.selectedList.length - 1 ? h.code : h.code + "/");
            }
        } catch (e) {
            s = !0, u = e;
        } finally {
            try {
                i || null == c.return || c.return();
            } finally {
                if (s) throw u;
            }
        }
        if (o.data.agree) if (d) {
            var p = {
                open_id: wx.getStorageSync("oid"),
                order_id: o.data.refundFriendData.order_id,
                refund_id: o.data.refundFriendData.refund_id,
                form_id: e.detail.formId,
                code_list: d
            }, w = n.getSignurature(p);
            wx.showLoading({
                mask: !0
            }), wx.request({
                url: a.default.REFUND_CONFIRM,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(p, {
                    sign: w
                }),
                success: function(e) {
                    if (200 == e.data.retcode) {
                        var r;
                        e.data.data;
                        o.setData((r = {}, (0, t.default)(r, "refundFriendData.refund_status", 1), (0, t.default)(r, "infoShow", !0), 
                        r));
                    } else n.logger(a.default.REFUND_CONFIRM, {
                        level: 3,
                        message: e.data.msg || "好友确认退款失败",
                        request: Object.assign(p, {
                            sign: w
                        }),
                        response: e
                    }), wx.redirectTo({
                        url: "../../error/error?api=refundConfirm&code=" + e.data.retcode
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            });
        } else o.showAlert("请选择退还的卡券"); else o.showAlert("请阅读并同意退款规定");
    },
    showAlert: function(e) {
        wx.showModal({
            content: e,
            showCancel: !1
        });
    },
    onHide: function() {
        n.doTracking("actHang", JSON.stringify({
            page_path: "/pages/refund/refundFriend"
        }), Math.floor(Date.now() / 1e3));
    },
    showRuleTap: function() {
        this.setData({
            showRule: !0
        });
    },
    selectTap: function(e) {
        var r = this.data.selectedList, t = e.currentTarget.dataset, a = t.ind, o = t.code, n = t.goods_name;
        t.used || (console.log(o), r[a] ? delete r[a] : (r[a] = {}, r[a].selected = !0, 
        r[a].code = o, r[a].goods_name = n), this.setData({
            selectedList: r
        }));
    },
    cancelTap: function() {
        this.setData({
            showRule: !1,
            agree: !1
        });
    },
    agreeTap: function() {
        this.setData({
            showRule: !1,
            agree: !0
        });
    },
    tipAgreeTap: function() {
        this.setData({
            agree: !this.data.agree
        });
    }
}));