var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("vs-logger")), i = e(require("../../../547BC8221C91398C321DA02558497AF5.js")), o = getApp();

Page(a.default.Page({
    data: {
        iptPlaceholder: {
            title: {
                1: "姓名",
                2: "单位名称"
            },
            dutyNum: {
                1: "-1",
                2: "15位或18位"
            },
            phone: {
                1: "个人手机号码",
                2: "手机号码"
            },
            name: {
                1: "姓名",
                2: "姓名"
            },
            email: {
                1: "个人联系邮箱",
                2: "邮箱"
            }
        },
        applyType: "2",
        selected: {},
        firstTimeChooseInvoiceTitle: !0,
        showRule: !1,
        agree: !1,
        invoiceData: {},
        isOldOrder: !1
    },
    localData: {
        subscribeType: "",
        subscribeInfo: ""
    },
    getSubscribeInfo: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.localData.subscribeInfo = e.filter(function(e) {
            return "invoice" === e.type;
        })[0], console.log("subscribeInfo:", this.localData.subscribeInfo);
    },
    onLoad: function(e) {
        wx.hideShareMenu(), o.globalData.subscribeList ? this.getSubscribeInfo(o.globalData.subscribeList) : o.getSubscribeList(this.getSubscribeInfo), 
        o.doTracking("actPv", JSON.stringify({
            page_path: "/pages/invoice/apply",
            channel: o.globalData.channel,
            scene: o.globalData.sceneId
        }), Math.floor(Date.now() / 1e3)), e.invoiceData && this.setData({
            invoiceData: JSON.parse(decodeURIComponent(e.invoiceData))
        }), this.setData({
            isOldOrder: !o.commonRegex().checkAllNum(this.data.invoiceData.order_id)
        });
    },
    onHide: function() {
        o.doTracking("actHang", JSON.stringify({
            page_path: "/pages/invoice/apply"
        }), Math.floor(Date.now() / 1e3));
    },
    invoiceTitle: function() {
        var e = this;
        wx.chooseInvoiceTitle({
            success: function(t) {
                1 == t.type ? e.setData({
                    applyType: "1",
                    invoice_title: t.title
                }) : e.setData({
                    applyType: "2",
                    invoice_title: t.title,
                    tax_no: t.taxNumber
                });
            },
            fail: function(t) {
                "fail auth deny" != t.errMsg.split(":")[1].trim() || e.data.firstTimeChooseInvoiceTitle || wx.showModal({
                    content: "进入设置同意选择抬头",
                    success: function(e) {
                        e.confirm && wx.openSetting();
                    }
                }), e.setData({
                    firstTimeChooseInvoiceTitle: !1
                });
            }
        });
    },
    selectApplyTap: function(e) {
        this.setData({
            applyType: e.target.dataset.type
        });
    },
    select: function() {
        this.setData({
            selected: !this.data.selected
        });
    },
    showRuleTap: function() {
        this.setData({
            showRule: !0
        });
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
    toggleAgree: function() {
        this.setData({
            agree: !this.data.agree
        });
    },
    showAlert: function(e) {
        wx.showModal({
            content: e,
            showCancel: !1
        });
    },
    changeValue: function(e) {
        this.setData((0, t.default)({}, e.target.dataset.name, e.detail.value));
    },
    invoiceSubmit: function() {
        var e = this, t = this.data;
        if (e.data.agree) if (!t.invoice_title || o.getByteLength(t.invoice_title) < 2 || o.getByteLength(t.invoice_title) > 80) e.showAlert("发票抬头请输入2-80位字符"); else if ("2" !== e.data.applyType || t.tax_no && o.commonRegex().checkTax(t.tax_no)) if (t.receiver_phone && o.commonRegex().checkMobile(t.receiver_phone)) if (!t.receiver_name || o.getByteLength(t.receiver_name) < 2 || o.getByteLength(t.receiver_name) > 20) e.showAlert("收件人姓名请输入2-20位字符"); else {
            if (t.receiver_email && o.commonRegex().checkEmail(t.receiver_email)) return console.log("subscribeType:", this.localData.subscribeType), 
            !0;
            e.showAlert("请输入正确的电子邮箱地址");
        } else e.showAlert("请输入11位手机号码"); else e.showAlert("请输入正确的税号"); else e.showAlert("请阅读并同意发票规定");
    },
    addInvoice: function() {
        var e = this, t = this.data, a = {
            union_id: wx.getStorageSync("unionId"),
            order_id: e.data.invoiceData.order_id,
            receiver_name: t.receiver_name,
            receiver_email: t.receiver_email,
            receiver_phone: t.receiver_phone,
            invoice_token: e.data.invoiceData.invoice_token,
            invoice_title: t.invoice_title,
            invoice_type: e.data.applyType,
            tax_no: t.tax_no,
            subscribe_type: this.localData.subscribeType
        };
        console.log("params:", a);
        var s = o.getSignurature(a);
        wx.showLoading({
            mask: !0
        }), o.doTracking("actFapiao", JSON.stringify({
            order_id: e.data.invoiceData.order_id,
            invoice_status: e.data.invoiceData.type,
            total_price: e.data.invoiceData.invoice_money
        }), Math.floor(Date.now() / 1e3)), wx.request({
            url: i.default.ADD_NEW_INVOICE,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(a, {
                sign: s
            }),
            success: function(t) {
                if (200 == t.data.retcode) {
                    var n = t.data.data;
                    wx.navigateToMiniProgram({
                        appId: n.appid,
                        path: n.auth_url,
                        success: function(t) {
                            wx.redirectTo({
                                url: "../../invoice/status/status?type=Ing&orderId=" + e.data.invoiceData.order_id
                            });
                        },
                        fail: function(e) {}
                    });
                } else 20003 == t.data.retcode ? e.showAlert("请勿重复开票") : (o.logger(i.default.ADD_NEW_INVOICE, {
                    level: 3,
                    message: t.data.msg || "开票失败",
                    request: Object.assign(a, {
                        sign: s
                    }),
                    response: t
                }), wx.redirectTo({
                    url: "../../error/error?api=addnewinvoice&code=" + t.data.retcode
                }));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    showSubscribe: function() {
        var e = this;
        this.invoiceSubmit() && ("function" == typeof wx.requestSubscribeMessage && this.localData.subscribeInfo ? (console.log("基础库版本高于2.8.2"), 
        wx.requestSubscribeMessage({
            tmplIds: [ this.localData.subscribeInfo.template_id ],
            success: function(t) {
                console.log("requestSubscribeMessage success:", t), "accept" === t[e.localData.subscribeInfo.template_id] && (e.localData.subscribeType = e.localData.subscribeInfo.type_id), 
                console.log("subscribeType:", e.localData.subscribeType), e.addInvoice();
            },
            fail: function(t) {
                console.log("requestSubscribeMessage fail:", t), e.addInvoice(), o.logger("showSubscribe", {
                    level: 3,
                    message: "拉起订阅弹框失败",
                    response: t
                });
            }
        })) : this.addInvoice());
    }
}));