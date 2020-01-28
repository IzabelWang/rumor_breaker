var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../@babel/runtime/helpers/slicedToArray")), t = e(require("../../../@babel/runtime/helpers/defineProperty")), r = e(require("../../../@babel/runtime/helpers/typeof")), s = e(require("../../../547BC8221C91398C321DA02558497AF5.js")), o = e(require("vs-logger")), n = getApp();

Page(o.default.Page({
    data: {
        showRule: !1,
        selectedList: [],
        selectedListIsEmpty: !0,
        agree: !1,
        refundData: {},
        greaterThanHeight: !1,
        isChooseCase: !1,
        isOldOrder: !1,
        codeType: "self"
    },
    localData: {
        subscribeType: [],
        subscribeInfo: "",
        refundSubscribeList: "",
        refundId: "",
        codeList: "",
        codeType: ""
    },
    checkSelectedList: function() {
        return this.data.selectedList.every(function(e) {
            return void 0 === (0, r.default)(e);
        });
    },
    getSubscribeInfo: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.localData.subscribeInfo = e.filter(function(e) {
            return "refund" === e.type;
        }), console.log("subscribeInfo:", this.localData.subscribeInfo);
        var a = [];
        this.localData.subscribeInfo.forEach(function(e) {
            a.push(e.template_id);
        }), this.localData.refundSubscribeList = a;
    },
    onLoad: function(e) {
        console.log(e), wx.hideShareMenu(), n.globalData.subscribeList ? this.getSubscribeInfo(n.globalData.subscribeList) : n.getSubscribeList(this.getSubscribeInfo);
        var a = JSON.parse(decodeURIComponent(e.refundData));
        console.log(a), a.allUsed = a.own_code.length && 0 === a.own_code.filter(function(e) {
            return "7" !== e.status;
        }).length, a.own_code.sort(function(e) {
            return "7" === e.status ? 1 : -1;
        }), this.setData({
            refundData: a,
            isOldOrder: !n.commonRegex().checkAllNum(a.order_id)
        }), a.is_self && !a.is_choose && this.setData({
            isChooseCase: !0
        });
        var t = this, r = wx.createSelectorQuery();
        r.select("#application").boundingClientRect(), r.exec(function(e) {
            (console.log(e), e[0]) && (e[0].bottom > 724 ? t.setData({
                greaterThanHeight: !0
            }) : t.setData({
                greaterThanHeight: !1
            }));
        }), n.doTracking("actPv", JSON.stringify({
            page_path: "/pages/refund/refundApplication",
            channel: n.globalData.channel,
            scene: n.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    packageDetail: function() {
        wx.navigateTo({
            url: "../../../pages/refund/packageDetail/packageDetail?orderId=" + this.data.refundData.order_id
        });
    },
    onHide: function() {
        n.doTracking("actHang", JSON.stringify({
            page_path: "/pages/refund/refundApplication"
        }), Math.floor(Date.now() / 1e3));
    },
    showRuleTap: function() {
        this.setData({
            showRule: !0
        });
    },
    selectTap: function(e) {
        if (this.data.isChooseCase) return !1;
        var a = this.data.selectedList, t = e.currentTarget.dataset, r = t.ind, s = t.code;
        t.used || (a[r] ? delete a[r] : (a[r] = {}, a[r].selected = !0, a[r].code = s), 
        this.setData({
            selectedList: a,
            selectedListIsEmpty: this.checkSelectedList()
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
    },
    changeValue: function(e) {
        this.setData((0, t.default)({}, e.target.dataset.name, e.detail.value));
    },
    refundSubmit: function() {
        var e = this;
        e.data.refundData.own_code.length > 0 && 0 == e.data.refundData.friends_code.length ? this.localData.codeType = "self" : e.data.refundData.friends_code.length > 0 && e.data.refundData.own_code.length > 0 ? this.localData.codeType = "friends" : e.data.refundData.friends_code.length > 0 && 0 == e.data.refundData.own_code.length && (this.localData.codeType = "friends"), 
        console.log("codeType", this.localData.codeType), console.log("refundData:", e.data.refundData);
        var t = this.data;
        if (e.data.refundData.is_self && e.data.refundData.is_choose) {
            var r = !0, s = !1, o = void 0;
            try {
                for (var i, d = e.data.selectedList.entries()[Symbol.iterator](); !(r = (i = d.next()).done); r = !0) {
                    var c = (0, a.default)(i.value, 2), l = c[0], u = c[1];
                    u && (this.localData.codeList += l == e.data.selectedList.length - 1 ? u.code : u.code + "/");
                }
            } catch (e) {
                s = !0, o = e;
            } finally {
                try {
                    r || null == d.return || d.return();
                } finally {
                    if (s) throw o;
                }
            }
        }
        if (e.data.agree) if (!t.receiver_name || n.getByteLength(t.receiver_name) < 2 || n.getByteLength(t.receiver_name) > 20) e.showAlert("退款人姓名请输入2~20位字符"); else if (t.receiver_phone && n.commonRegex().checkMobile(t.receiver_phone)) {
            if (0 != e.data.refundData.friends_code.length || !e.data.refundData.is_choose || this.localData.codeList) return !0;
            e.showAlert("请选择退还的卡券");
        } else e.showAlert("请输入11位手机号码"); else e.showAlert("请阅读并同意退款规定");
    },
    addRefund: function() {
        var e = this, a = this.data, t = {
            open_id: wx.getStorageSync("oid"),
            order_id: e.data.refundData.order_id,
            receiver_name: encodeURIComponent(a.receiver_name),
            receiver_phone: a.receiver_phone,
            nickname: encodeURIComponent(wx.getStorageSync("userInfo").nickName),
            headimgurl: encodeURIComponent(wx.getStorageSync("userInfo").avatarUrl),
            code_list: this.localData.codeList,
            code_type: this.localData.codeType,
            subscribe_type: this.localData.subscribeType.join(",")
        };
        console.log("params"), console.log(t);
        var r = n.getSignurature(t);
        console.log("sign:", r), wx.showLoading({
            mask: !0
        }), n.doTracking("actRefund", JSON.stringify({
            order_id: e.data.refundData.order_id,
            refund_status: e.data.refundData.refund_status
        }), Math.floor(Date.now() / 1e3)), wx.request({
            url: s.default.REFUND_ADD,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(t, {
                sign: r
            }),
            success: function(a) {
                if (200 == a.data.retcode) {
                    var o = a.data.data;
                    e.localData.refundId = o.refund_id;
                    var i = e.data.refundData.is_share ? "&refundId=" + e.localData.refundId + "&orderId=" + e.data.refundData.order_id + "&shareTitle=" + e.data.refundData.share_title + "&shareImg=" + encodeURIComponent(e.data.refundData.share_img) : "", d = e.data.refundData.friends_code.length > 0 ? 1 : 2;
                    wx.redirectTo({
                        url: "../../refund/refundResult/refundResult?type=" + d + i
                    });
                } else 12009 == a.data.retcode ? e.showAlert("请勿重复申请") : 90003 == a.data.retcode ? e.doAuthor() : (n.logger(s.default.REFUND_ADD, {
                    level: 3,
                    message: a.data.msg || "申请退款失败",
                    request: Object.assign(t, {
                        sign: r
                    }),
                    response: a
                }), wx.redirectTo({
                    url: "../../error/error?api=refundAdd&code=" + a.data.retcode
                }));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    showAlert: function(e) {
        wx.showModal({
            content: e,
            showCancel: !1
        });
    },
    showSubscribe: function() {
        var e = this;
        this.refundSubmit() && ("function" == typeof wx.requestSubscribeMessage && this.localData.refundSubscribeList ? (console.log("基础库版本高于2.8.2"), 
        wx.requestSubscribeMessage({
            tmplIds: this.localData.refundSubscribeList,
            success: function(a) {
                console.log("requestSubscribeMessage success:", a), e.localData.subscribeInfo.forEach(function(t) {
                    "accept" === a[t.template_id] && e.localData.subscribeType.push(t.type_id);
                }), console.log("subscribeType:", e.localData.subscribeType), e.addRefund();
            },
            fail: function(a) {
                console.log("requestSubscribeMessage fail:", a), e.addRefund(), n.logger("showSubscribe", {
                    level: 3,
                    message: "拉起订阅弹框失败",
                    response: a
                });
            }
        })) : this.addRefund());
    }
}));