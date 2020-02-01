function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function r(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), u = function e(t, r, o) {
    null === t && (t = Function.prototype);
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (void 0 === n) {
        var u = Object.getPrototypeOf(t);
        return null === u ? void 0 : e(u, r, o);
    }
    if ("value" in n) return n.value;
    var i = n.get;
    if (void 0 !== i) return i.call(o);
}, i = e(require("./DSHttpRequestManager.js")), s = e(require("./DSAccountManager.js")), a = function(e) {
    function a() {
        return t(this, a), r(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
    }
    return o(a, i.default), n(a, [ {
        key: "reLoginBeforeRequest",
        value: function(e, t) {
            s.default.needReLogin(), s.default.checkLoginState({
                success: function(r) {
                    e.requestData.userCode = r.userCode, e.requestData.s = r.sessionId, this.request(e, t);
                }.bind(this),
                fail: function(e) {
                    console.log("自动重登录失败", e), t && t(e);
                }
            });
        }
    }, {
        key: "request",
        value: function(e, t) {
            var r = this;
            e.requestData.hasOwnProperty("userCode") && !s.default.userInfo().userCode ? this.reLoginBeforeRequest(e, t) : u(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "request", this).call(this, e, function(o) {
                -201 == o.code && -1 == e.uri.indexOf("CheckSession") && -1 == e.uri.indexOf("WechatAppLogin") ? r.reLoginBeforeRequest(e, t) : t && t(o);
            });
        }
    } ]), a;
}();

exports.default = a;