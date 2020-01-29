function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), n = e(require("./DSHttpRequest.js")), r = e(require("./DSHttpRequestManager.js")), s = void 0, i = function() {
    function e() {
        if (t(this, e), s) return s;
        this.formIds = [], s = this;
    }
    return o(e, [ {
        key: "appendFormId",
        value: function(e) {
            if (getApp().isLogin()) this.formIds.push({
                time: new Date().getTime() / 1e3,
                id: e
            }), this.formIds.length >= 200 && this.submitFormIds(); else {
                var t;
                wx.getStorage({
                    key: "ds_formIds_cache",
                    success: function(e) {
                        t = e.data;
                    },
                    fail: function(e) {
                        t = [];
                    },
                    complete: function() {
                        t.push({
                            time: new Date().getTime() / 1e3,
                            id: e
                        }), wx.setStorage({
                            key: "ds_formIds_cache",
                            data: t,
                            success: function(t) {
                                console.log("cache formId success:" + e);
                            },
                            fail: function(e) {
                                console.log("cache formId fail:" + e);
                            }
                        });
                    }
                });
            }
        }
    }, {
        key: "enterFrontground",
        value: function() {
            console.log("enterFrontground"), this.handle = setTimeout(function() {
                this.submitFormIds();
            }.bind(this), 6e4);
        }
    }, {
        key: "enterBackground",
        value: function() {
            console.log("enterBackground"), this.submitFormIds(), this.handle && (clearTimeout(this.handle), 
            this.handle = null);
        }
    }, {
        key: "submitFormIds",
        value: function() {
            if (getApp().isLogin()) {
                var e = this.formIds;
                wx.getStorage({
                    key: "ds_formIds_cache",
                    success: function(t) {
                        e = e.concat(t.data);
                    }.bind(this),
                    complete: function() {
                        var t = this;
                        console.log("formIds:", e);
                        var o = new Date().getTime() / 1e3, s = [], i = !0, a = !1, u = void 0;
                        try {
                            for (var c, d = e[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) {
                                var f = c.value;
                                f.hasOwnProperty("time") && o - f.time < 604800 && (s.push(f.id), console.log("interval", o - f.time));
                            }
                        } catch (e) {
                            a = !0, u = e;
                        } finally {
                            try {
                                !i && d.return && d.return();
                            } finally {
                                if (a) throw u;
                            }
                        }
                        if (s.length > 0) {
                            if (getApp().sendEvent("上报用户收集formId", {
                                count: s.length + "",
                                openId: getApp().userInfo().openId + ""
                            }), "devtools" == getApp().sysInfo.platform) return this.formIds = [], void wx.removeStorage({
                                key: "ds_formIds_cache"
                            });
                            new r.default(getApp().dynamicDomain).request(new n.default("WechatApp/QuickCollectKey", {
                                appName: getApp().getAppName(),
                                key: getApp().userInfo().openId,
                                formIds: s
                            }), function(e) {
                                1 == e.code && (t.formIds = [], wx.removeStorage({
                                    key: "ds_formIds_cache"
                                }));
                            });
                        } else wx.removeStorage({
                            key: "ds_formIds_cache"
                        });
                    }.bind(this)
                });
            } else console.log("用户未登录");
        }
    } ], [ {
        key: "singleton",
        value: function() {
            return new e();
        }
    } ]), e;
}();

exports.default = i;