var e = require("@babel/runtime/helpers/interopRequireDefault");

require("@babel/runtime/helpers/Arrayincludes");

var t = e(require("@babel/runtime/helpers/objectSpread")), a = e(require("4445B0631C91398C2223D86471997AF5.js")), n = e(require("547BC8221C91398C321DA02558497AF5.js")), r = require("48B317D01C91398C2ED57FD7D3797AF5.js"), o = e(require("vs-logger")), s = "wx7c4b1a9654cc4e72" === (wx.getAccountInfoSync ? wx.getAccountInfoSync().miniProgram.appId : "wx7c4b1a9654cc4e72") ? "production" : "development", i = "星巴克用星说_".concat(s), c = {
    development: "11632163762b8860191eee5b6c527f29",
    production: "882d0cbdd6e9fe6ee713582a602d5bdc"
}[s], l = {
    development: "01cbae681b53617cc25801a601a7d51f",
    production: "caff547eaaa56e64f04a6a3947ffacd9"
}[s];

o.default.init({
    env: s,
    appName: i,
    appKey: c,
    appCode: l,
    sha256: r.sha256,
    user: (0, t.default)({
        oid: wx.getStorageSync("oid"),
        unionId: wx.getStorageSync("unionId")
    }, wx.getStorageSync("userInfo") || {})
});

var d = [ {
    scene: 1007,
    channel: "blanks-singleShare"
}, {
    scene: 1008,
    channel: "blanks-groupShare"
}, {
    scene: 1044,
    channel: "blanks-defaultShare"
}, {
    scene: 1096,
    channel: "blanks-defaultShare"
}, {
    scene: 1005,
    channel: "blanks-WXsearch"
}, {
    scene: 1006,
    channel: "blanks-WXsearch"
}, {
    scene: 1027,
    channel: "blanks-WXsearch"
}, {
    scene: 1042,
    channel: "blanks-WXsearch"
}, {
    scene: 1053,
    channel: "blanks-WXsearch"
}, {
    scene: 1001,
    channel: "blanks-recordList"
}, {
    scene: 1090,
    channel: "blanks-recordList"
}, {
    scene: 1089,
    channel: "blanks-drop-downList"
} ];

App(o.default.App({
    doAuthor: function() {
        var e = this;
        return new Promise(function(t, a) {
            wx.login({
                success: function(a) {
                    console.log("doAuthor:"), console.log(a);
                    var r = {
                        js_code: a.code
                    }, s = e.getSignurature(r);
                    wx.request({
                        url: n.default.GET_USER_TICKET,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        data: Object.assign(r, {
                            sign: s
                        }),
                        success: function(a) {
                            if (200 == a.data.retcode) {
                                var i = a.data.data.ticket;
                                wx.setStorageSync("oid", a.data.data.xcx_openid), wx.setStorageSync("unionId", a.data.data.unionid), 
                                o.default.reinit({
                                    user: a.data.data
                                }), wx.setStorage({
                                    key: "ticket",
                                    data: i
                                }), t({
                                    oid: a.data.data.xcx_openid,
                                    uid: a.data.data.unionid,
                                    ticket: i
                                });
                            } else e.logger(n.default.GET_USER_TICKET, {
                                level: 3,
                                message: a.data.msg || "获取ticket失败",
                                request: Object.assign(r, {
                                    sign: s
                                }),
                                response: a
                            }), wx.navigateTo({
                                url: "../error/error?api=getuserticket&code=" + a.data.retcode
                            }), wx.hideLoading();
                        },
                        fail: function(t) {
                            wx.navigateTo({
                                url: "../error/error?msg=getuserticket_timeout"
                            }), wx.hideLoading(), e.logger(n.default.GET_USER_TICKET, {
                                level: 3,
                                message: t.errMsg || "获取ticket失败",
                                request: Object.assign(r, {
                                    sign: s
                                }),
                                response: t
                            });
                        }
                    });
                },
                fail: function(t) {
                    wx.navigateTo({
                        url: "../error/error?msg=wxLoginError"
                    }), wx.hideLoading(), e.logger("wx.login", {
                        level: 3,
                        message: t.errMsg || "微信登录失败",
                        response: t
                    });
                }
            });
        });
    },
    getUnionId: function(e, t, a) {
        var r = this;
        return new Promise(function(s, i) {
            var c = {
                encrypted_data: e,
                iv: t,
                ticket: a
            }, l = r.getSignurature(c);
            r.logger(n.default.DECRYPT_USER_DATA, {
                level: 4,
                message: "发起请求：用户信息解密",
                response: c
            }), wx.request({
                url: n.default.DECRYPT_USER_DATA,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(c, {
                    sign: l
                }),
                success: function(e) {
                    if (200 == e.data.retcode) {
                        var t = e.data.data.unionId;
                        wx.setStorageSync("unionId", t), o.default.reinit({
                            user: e.data.data
                        }), s(t);
                    } else 99999 == e.data.retcode || 10455 == e.data.retcode ? (r.doAuthor(), i()) : (r.logger(n.default.DECRYPT_USER_DATA, {
                        level: 3,
                        message: e.data.msg || "获取用户信息失败",
                        request: Object.assign(c, {
                            sign: l
                        }),
                        response: e
                    }), wx.navigateTo({
                        url: "../error/error?api=decryptUserData&code=" + e.data.retcode
                    }));
                },
                fail: function(e) {
                    wx.showModal({
                        title: "提示",
                        content: "您的操作超时，请再试一次",
                        showCancel: !1
                    }), e && r.logger(n.default.DECRYPT_USER_DATA, {
                        level: 3,
                        message: e.errMsg || "用户信息解密失败",
                        response: e
                    });
                }
            });
        });
    },
    setVisitId: function(e) {
        this.globalData.visitId || (this.globalData.visitId = a.default.sha1(Math.floor(Date.now() / 1e3) + e));
    },
    loginError: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.doAuthor(), wx.showModal({
            title: "提示",
            content: "您的操作超时，请再次重试",
            showCancel: !1
        }), this.logger("checkSession", {
            level: 3,
            message: e.errMsg,
            response: e
        }), wx.hideLoading();
    },
    getUserInfo: function(e) {
        var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
        if (e.detail.errMsg.match(/^getUserInfo:fail auth (?:deny|cancel)/)) return wx.showModal({
            title: "提示",
            content: "为避免影响小程序的正常使用，请允许授权",
            showCancel: !1
        }), void n(e.detail);
        this.globalData.userInfo = e.detail.userInfo, wx.setStorageSync("userInfo", e.detail.userInfo), 
        o.default.reinit({
            user: e.detail.userInfo
        }), wx.showLoading({
            mask: !0
        }), wx.checkSession({
            success: function() {
                var n = wx.getStorageSync("unionId"), r = wx.getStorageSync("ticket");
                return n ? (wx.hideLoading(), a(n)) : r ? void t.getUnionId(e.detail.encryptedData, e.detail.iv, r).then(function(e) {
                    wx.hideLoading(), a(e);
                }) : t.loginError({
                    errMsg: "ticket参数缺失"
                });
            },
            fail: function(e) {
                console.log(e), t.loginError(e), n(e);
            }
        });
    },
    onLaunch: function(e) {
        if (e.query && e.query.channel) this.globalData.channel = e.query.channel; else {
            var t = d.filter(function(t) {
                return t.scene === e.scene;
            });
            t.length > 0 && (this.globalData.channel = t[0].channel);
        }
        this.checkUpdate(), console.log(e, "appLaunch");
        var a = wx.getStorageSync("userInfo");
        a && o.default.reinit({
            user: a
        });
        var n = wx.getStorageSync("oid");
        n && (o.default.reinit({
            user: {
                xcx_openid: n
            }
        }), this.setVisitId(n), this.getSubscribeList());
        var r = wx.getSystemInfoSync(), i = r.model.substring(0, r.model.lastIndexOf("X")) + "X";
        this.globalData.isIpx = "iPhone X" === i, r.whRatio = Math.floor(r.screenHeight / r.screenWidth * 10) / 10, 
        this.globalData.sysinfo = r, this.globalData.env = s;
    },
    onShow: function(e) {
        e.referrerInfo && [ "wxaa11144803c4ec3f" ].indexOf(e.referrerInfo.appId) > -1 && (this.globalData.cover_url = e.referrerInfo.extraData ? e.referrerInfo.extraData.cover_url : "");
    },
    onError: function(e) {
        this.logger("appOnError", {
            level: e.match(/^webviewSDKScriptError|webviewScriptError Framework|jsEnginScriptError|appServiceSDKScriptError/) ? 4 : 3,
            message: "全局捕获错误",
            response: e
        });
    },
    doTracking: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") || Math.floor(Date.now() / 1e3), r = {
            uuid: wx.getStorageSync("oid"),
            visit_id: this.globalData.visitId,
            prj: "wsg3.0",
            event: e,
            event_val: t,
            tsp: a
        }, o = this.getSignurature(r);
        wx.request({
            url: n.default.FORM_LOG,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(r, {
                sign: o
            })
        });
    },
    sendFormId: function(e, t, a) {
        var r = this, o = {
            openid: wx.getStorageSync("oid"),
            formid: e,
            type: t,
            type_id: a,
            business: "egifting",
            channel: "wechat"
        }, s = r.getSignurature(o);
        wx.request({
            url: n.default.FORM_ADD,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(o, {
                sign: s
            }),
            success: function(e) {
                200 !== e.data.retcode && r.logger(n.default.FORM_ADD, {
                    level: 3,
                    message: e.data.msg || "保存小程序formid失败",
                    request: Object.assign(o, {
                        sign: s
                    }),
                    response: e
                });
            }
        });
    },
    goToOrders: function() {
        wx.navigateTo({
            url: "../order/order"
        });
    },
    gotoUserRegH5: function(e, t, a) {
        var r = this;
        console.log("----------- code star -----------"), console.log(e), console.log("card_id=" + e), 
        console.log(t), console.log("openid=" + t), console.log(a), console.log("encrypt_code=" + a), 
        console.log("----------- code end -----------");
        var o = {
            openid: t,
            card_id: e,
            encrypt_code: a
        }, s = r.getSignurature(o);
        console.log("----------- sign star -----------"), console.log(s), console.log("----------- sign end -----------");
        var i = n.default.H5_REG_URL + "&card_id=" + e + "&openid=" + t + "&encrypt_code=" + encodeURIComponent(a) + "&sign=" + s;
        console.log(i), i = encodeURIComponent(i), r.doTracking("actPv", JSON.stringify({
            page_path: "/h5/h5/for_self/url/user_binding",
            scene: r.globalData.sceneId
        }), Math.floor(Date.now() / 1e3)), wx.navigateTo({
            url: "../h5/h5?url=" + i + "&type=special"
        });
    },
    addWXCard: function() {
        wx.addCard({
            cardList: [ {
                cardId: "",
                cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
            }, {
                cardId: "",
                cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
            } ],
            success: function(e) {
                console.log(e.cardList);
            }
        });
    },
    logAddCard: function(e, t, a) {
        var r = this, o = {
            order_id: e,
            open_id: wx.getStorageSync("oid"),
            result: t,
            detail: a
        }, s = r.getSignurature(o);
        wx.request({
            url: n.default.LOG_ADD_CARD,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(o, {
                sign: s
            }),
            success: function(e) {
                console.log(e), e && e.data && 200 !== e.data.retcode && r.logger(n.default.LOG_ADD_CARD, {
                    level: 3,
                    message: e.data.msg || "投递塞卡结果失败",
                    request: Object.assign(o, {
                        sign: s
                    }),
                    response: e
                });
            },
            fail: function(e) {
                r.logger(n.default.LOG_ADD_CARD, {
                    level: 3,
                    message: "logAddCard fail",
                    response: e
                });
            }
        });
    },
    showFriendsList: function(e) {
        var t = this;
        console.log("orderid"), console.log(e), wx.getStorageSync("oid") || t.doAuthor().then(function(e) {
            var t = e.oid;
            console.log(t);
        });
        var a = {
            order_id: e,
            open_id: wx.getStorageSync("oid")
        }, r = t.getSignurature(a);
        wx.request({
            url: n.default.CREATE_GIFT_ORDER,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(a, {
                sign: r
            }),
            success: function(o) {
                var s = o.data.data;
                200 == o.data.retcode ? wx.navigateToMiniProgram({
                    appId: "wx8638fbedaf138a87",
                    path: "pages/send/send?order_id=" + e + "@wxgiftcard&page_id=" + s.page_id,
                    envVersion: "release",
                    success: function(e) {
                        console.log("拉起success", e);
                    },
                    fail: function(e) {
                        t.logger("navigateToMiniProgram", {
                            level: 4,
                            message: "appId:wx8638fbedaf138a87, fail",
                            response: e
                        });
                    }
                }) : 10706 == o.data.retcode ? wx.showModal({
                    title: "",
                    showCancel: !1,
                    content: "系统超时，请稍后重试。",
                    success: function() {}
                }) : (t.logger(n.default.CREATE_GIFT_ORDER, {
                    level: 3,
                    message: o.data.msg || "创建赠送订单失败",
                    request: Object.assign(a, {
                        sign: r
                    }),
                    response: o
                }), wx.redirectTo({
                    url: "../error/error?api=creategiftorder&code=" + o.data.retcode
                }));
            }
        });
    },
    getSignurature: function(e) {
        var t = Object.keys(e);
        t = t.sort();
        var a = {};
        t.forEach(function(t) {
            "" !== e[t] && (a[t.toLowerCase()] = e[t]);
        });
        var n = "";
        for (var o in a) n += "&" + o + "=" + a[o];
        return n = n.substr(1) + "6aa258a1656551250ff22331cfe0b6ba", (0, r.sha256)(n);
    },
    getLogSign: function(e) {
        e.app_key = c;
        var t = Object.keys(e);
        t = t.sort();
        var a = {};
        t.forEach(function(t) {
            "" !== e[t] && (a[t.toLowerCase()] = e[t]);
        });
        var n = "";
        for (var o in a) n += "&" + o + "=" + a[o];
        return n = n.substr(1) + l, e.sign = (0, r.sha256)(n), e;
    },
    commonRegex: function() {
        return {
            checkMobile: function(e) {
                return /^1[3456789]\d{9}$/.test(e);
            },
            checkEmail: function(e) {
                return /^[0-9A-Za-z\-_.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e);
            },
            checkTax: function(e) {
                return /^[A-Z0-9]{15}$|^[A-Z0-9]{18}$/.test(e);
            },
            checkAllNum: function(e) {
                return /^[0-9]*$/.test(e);
            }
        };
    },
    getByteLength: function(e) {
        return e.replace(/[^\u0000-\u00ff]/g, "aa").length;
    },
    checkUpdate: function() {
        var e = this, t = wx.getUpdateManager();
        t.onCheckForUpdate(function(e) {
            console.log("update: ", e.hasUpdate);
        }), t.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "当前小程序有版本更新，请点击“确定”重启小程序体验最新功能",
                success: function(a) {
                    a.confirm ? t.applyUpdate() : e.logger("onUpdateReady", {
                        level: 3,
                        message: "用户取消版本更新"
                    });
                }
            });
        }), t.onUpdateFailed(function() {
            e.logger("onUpdateFailed", {
                level: 3,
                message: "版本更新失败"
            });
        });
    },
    logger: function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = getCurrentPages();
        n.length || (n = [ {
            route: "pages/index/index"
        } ]);
        var r = n[n.length - 1];
        o.default.report({
            v1: i,
            v2: r.route,
            v3: e,
            level: a.level || 4,
            message: a.message || "",
            data: (0, t.default)({
                ticket: wx.getStorageSync("ticket"),
                open_id: wx.getStorageSync("oid")
            }, a.request),
            extra: a.response
        });
    },
    getSubscribeList: function(e) {
        var t = this, a = {
            open_id: wx.getStorageSync("oid")
        };
        a.sign = this.getSignurature(a), wx.request({
            url: n.default.GET_SUBSCRIBE_TEMPLATE_LIST,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: a,
            success: function(r) {
                r.data && 200 === r.data.retcode ? (t.globalData.subscribeList = r.data.data, console.log("getSubscribeList success:", t.globalData.subscribeList), 
                e && e(r.data.data), t.logger(n.default.GET_SUBSCRIBE_TEMPLATE_LIST, {
                    level: 4,
                    message: r.data.msg || "获取订阅消息列表成功",
                    request: a,
                    response: r
                })) : t.logger(n.default.GET_SUBSCRIBE_TEMPLATE_LIST, {
                    level: 3,
                    message: r.data.msg || "获取订阅消息列表失败",
                    request: a,
                    response: r
                });
            },
            fail: function(e) {
                t.logger(n.default.GET_SUBSCRIBE_TEMPLATE_LIST, {
                    level: 3,
                    message: e.errMsg || "获取订阅消息列表失败",
                    request: a,
                    response: e
                });
            }
        });
    },
    compareVersions: function() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        if (![ 1, 3 ].includes(t.length)) throw new Error("Invalid argument length: ".concat(t));
        var n = t.join("").match(/^v?(\d+)(?:\.(\d+))?(?:\.(\d+))? *([<>=]) *v?(\d+)(?:\.(\d+))?(?:\.(\d+))?$/i);
        if (!n) throw new Error("Invalid argument not valid expression (".concat(t, " received)"));
        for (var r = n[4], o = n.slice(1, 4), s = n.slice(5, 8), i = 0; i < o.length; i++) {
            var c = Number(o[i]) || 0, l = Number(s[i]) || 0;
            if (c > l) return ">" === r;
            if (c < l) return "<" === r;
        }
        return "=" === r;
    },
    globalData: {
        userInfo: null,
        isIpx: null,
        sysinfo: {},
        visitId: "",
        sceneId: "",
        page_id: "",
        icon_id: "",
        cover_id: "",
        diyInfo: {},
        env: "development",
        collectInfo: null,
        channel: "",
        subscribeList: null
    },
    checkBeforePath: null,
    com: {},
    $: {
        arrayBuffer: null,
        canvasWidth: null,
        canvasHeight: null,
        cardImage: null,
        image: ""
    }
}));