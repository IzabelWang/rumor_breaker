var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/objectSpread")), n = e(require("../../@babel/runtime/helpers/typeof")), o = {};

function r(e) {
    var t = o[e];
    return t.exports ? t.exports : (t.exports = {}, t.factory(t, t.exports), delete t.factory, 
    t.exports);
}

function i(e, t) {
    o[e] = {
        factory: t
    };
}

i(0, function(e, t) {
    e.exports = r(1);
}), i(1, function(e, t) {
    var n = r(2), o = n.Level, i = 15e3, a = {
        app: {
            launch: o.info,
            show: o.info,
            hide: o.info,
            error: o.error
        },
        page: {
            load: o.info,
            show: o.info,
            ready: o.info,
            hide: o.info,
            unload: o.info,
            tabItemTap: o.info
        }
    };
    var c = [];
    function s(e) {
        return c.push(e), t();
        function t() {
            c.isRunning || (c.isRunning = !0, setTimeout(n, 16));
        }
        function n() {
            if (c.length) {
                var e = c[0];
                wx.request({
                    url: e.url,
                    method: e.method,
                    header: e.header,
                    data: e.data,
                    success: function(t) {
                        try {
                            e.callback && e.callback(void 0, t);
                        } catch (e) {}
                        c.shift(), n();
                    },
                    fail: function(e) {
                        console.log("VSLogger => 上传失败，" + i + "ms 后重试。"), setTimeout(t, i);
                    }
                });
            } else c.isRunning = !1;
        }
    }
    function l(e) {
        c.method = c.Method = s;
        var t = e.lifeEvents, r = e.config, i = e.defaultOptions, a = "function" == typeof i.v2 ? i.v2 : function() {
            return i.v2;
        };
        return c;
        function c(e) {
            e = Object.setPrototypeOf({}, e || {});
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                null != r[o.slice(2).toLowerCase()] && (e[o] = s(o, {
                    level: r[o.slice(2).toLowerCase()],
                    v2: i.v2
                })(e[o]));
            }
            return e;
        }
        function s(e, t) {
            t = t || {};
            var r = (t = Object.assign({}, t.defaultOptions, t || {})).level || o.info, i = "function" == typeof t.v2 ? t.v2 : function() {
                return t.v2 || a.call(this);
            }, c = t.name || e;
            return function(t) {
                return function(o) {
                    var a = {
                        level: r,
                        v2: i.call(this),
                        v3: e,
                        message: c,
                        data: o
                    };
                    try {
                        n.report(a);
                    } catch (e) {
                        console.error(e);
                    }
                    t && t.call(this, o);
                };
            };
        }
    }
    c.isRunning = !1, t.init = function(e) {
        i = e.resendDelay || i, e = e || {};
        var t = {};
        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        t.sendRequest = s, t.platform = function() {
            try {
                return wx.getSystemInfoSync();
            } catch (e) {
                return {
                    platform: "winxin mini program"
                };
            }
        }(), t.deviceId = function() {
            try {
                var e = "VS_LOGGER_DEVICE_ID_KEY", t = wx.getStorageSync(e);
                return t || (t = "DI-" + Math.random().toString(16).slice(2), wx.setStorageSync(e, t)), 
                t;
            } catch (e) {
                return "DI-" + Math.random().toString(16).slice(2);
            }
        }(), n.init(t);
    }, t.reinit = n.reinit, t.Level = n.Level, t.report = n.report, t.Console = n.Console, 
    t.App = l({
        config: a.app || {},
        lifeEvents: [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound" ],
        defaultOptions: {
            v2: "app/app"
        }
    }), t.Page = l({
        config: a.page || {},
        lifeEvents: [ "onLoad", "onShow", "onReady", "onHide", "onUnload", "onTabItemTap" ],
        defaultOptions: {
            v2: function() {
                return this.route;
            }
        }
    });
}), i(2, function(e, o) {
    var r = "https://statistics.e.verystar.net/v1/logs/put", i = "", a = "", c = "", s = void 0, l = void 0, f = "", u = 1e3, p = 20, d = 128, g = {}, v = "VS-" + +new Date() + Math.random().toString(16).slice(2), h = v, y = "production", m = {
        fatal: 1,
        error: 2,
        exception: 3,
        info: 4
    }, S = [], w = 0, I = {
        getItem: function(e, t) {
            t();
        },
        removeItem: function(e, t) {
            t();
        },
        setItem: function(e, t, n) {
            n();
        }
    }, O = "VS_LOGGER_3fbde7e1ea64780308f3366808fe61d1_" + y;
    var x = function() {
        console.error("VSLogger: not initialized, please call init first.");
    };
    function R(e) {
        var t = [ "v2", "v3", "message" ];
        for (var o in t) "string" == typeof e[o = t[o]] && e[o].length || console.error("Invalid " + o + ", expect String with length > 0, ");
        var r = e.level || m.info, a = e.v1 || i, c = e.v2 || "", s = e.v3 || "", l = e.message || "", d = e.extra || "";
        "object" === (0, n.default)(d) && (d = JSON.stringify(d));
        var I, O = {
            traceId: v,
            deviceId: h,
            platform: g,
            env: y,
            user: f,
            time: (I = new Date(), [ I.getFullYear(), "-", I.getMonth() + 1, "-", I.getDate(), " ", I.getHours(), ":", I.getMinutes(), ":", I.getSeconds(), ".", I.getMilliseconds() ].join("")),
            data: e.data
        }, x = {
            level: r,
            v1: a,
            v2: c,
            v3: s,
            message: l,
            request: JSON.stringify(O),
            response: d
        };
        if ("development" == y) return console.log("VSLogger=> ", JSON.parse(JSON.stringify(e)));
        !function(e) {
            if (S.push(e), S.length >= p) clearTimeout(w), t(); else if (S.length > 1) return;
            function t() {
                var e = S;
                S = [], e.length && E(e);
            }
            w = setTimeout(function() {
                t();
            }, u);
        }(x);
    }
    function E(e) {
        var t, n = Math.random().toString(36).slice(2) + new Date().getTime().toString(36), o = {
            app_key: a,
            nonce_str: n
        };
        o.sign = (t = [ [ "app_key", a ].join("=") ].join("&") + c, s(t)), o.logs = e;
        try {
            l({
                url: r,
                method: "POST",
                header: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                data: JSON.stringify(o),
                callback: i
            });
        } catch (e) {
            i(e);
        }
        function i(t) {
            !function(e) {
                var t = null, n = function() {
                    try {
                        e(t || []);
                    } catch (e) {
                        console.log("VS_LOGGER_LOAD_ERROR", e);
                    }
                };
                try {
                    I.getItem(O, function(e) {
                        try {
                            I.removeItem(O, function() {
                                try {
                                    t = JSON.parse(e), n();
                                } catch (e) {
                                    n();
                                }
                            });
                        } catch (e) {
                            n();
                        }
                    });
                } catch (e) {
                    n();
                }
            }(function(n) {
                if (n.length) if (t) {
                    var o = Array.prototype.slice.call(n);
                    Array.prototype.push.apply(o, e), function(e, t) {
                        var n = function() {
                            try {
                                t && t();
                            } catch (e) {
                                console.log("VS_LOGGER_SAVE_ERROR", e);
                            }
                        };
                        try {
                            var o = JSON.stringify(e.slice(-d));
                            I.setItem(O, o, function() {
                                try {
                                    n();
                                } catch (e) {}
                            });
                        } catch (e) {
                            try {
                                n();
                            } catch (e) {}
                        }
                    }(o);
                } else E(n);
            }), t && console.log("VS_LOGGER_SEND_FAIL", t);
        }
    }
    function b() {}
    function L(e) {
        if (!(this instanceof L)) return new L(e);
        this.name = e;
    }
    function _(e) {
        return function(t, n) {
            var o = [].slice.call(arguments, 2), r = {
                level: e,
                v1: i,
                v2: "module/" + this.name,
                v3: t,
                message: n,
                data: o
            };
            try {
                x(r);
            } catch (e) {}
        };
    }
    if (b.prototype = console, L.prototype = new b(), L.prototype.fatal = _(m.fatal), 
    L.prototype.error = _(m.error), L.prototype.exception = _(m.exception), L.prototype.info = _(m.info), 
    void 0 === o) o = {};
    o.storage = I, o.Level = m, o.init = function(e) {
        if (e.config && "object" == (0, n.default)(e.config) && e.config, !e.appName || "string" != typeof e.appName || !e.appName.length) throw new Error("Invalid appName, expect String with length > 0");
        if (i = e.appName, !e.appKey || "string" != typeof e.appKey || !e.appKey.length) throw new Error("Invalid appKey, expect String with length > 0");
        if (a = e.appKey, !e.appCode || "string" != typeof e.appCode || !e.appCode.length) throw new Error("Invalid appCode, expect String with length > 0");
        if (c = e.appCode, !e.sha256 || "function" != typeof e.sha256) throw new Error("Invalid sha256, expect function");
        if (s = e.sha256, !e.sendRequest || "function" != typeof e.sendRequest) throw new Error("Invalid sendRequest, expect function");
        return l = e.sendRequest, f = e.user || "", g = e.platform || {}, h = e.deviceId || h, 
        "development" === (y = e.env || "production") && (E = function(e) {
            console.log("VSLogger => ", e);
        }), x = R, this;
    }, o.reinit = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.user && (f = "object" === (0, n.default)(e.user) && f && "object" === (0, 
        n.default)(f) ? (0, t.default)({}, f, e.user) : e.user), this;
    }, o.report = function(e) {
        try {
            x(e);
        } catch (e) {}
    }, o.Console = L;
});

var a = r(0);

"object" === ("undefined" == typeof module ? "undefined" : (0, n.default)(module)) && module && (module.exports = a);