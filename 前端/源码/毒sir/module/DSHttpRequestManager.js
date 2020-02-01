function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), n = function() {
    function n(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        e(this, n), this.domain = t, this.apiKey = r, this.reqQueue = [];
    }
    return t(n, [ {
        key: "request",
        value: function(e, t) {
            this.requestNow(e, t);
        }
    }, {
        key: "requestNow",
        value: function(e, t) {
            var n = function(e, n) {
                n.result || n.hasOwnProperty("code") ? t && t(n) : n.errMsg && n.errMsg.indexOf("timeout") >= 0 && --e.retryTimes >= 0 ? setTimeout(function() {
                    console.log("request retry"), this.requestNow(e, t);
                }.bind(this), 500) : "string" == typeof n ? t && t({
                    code: -1,
                    msg: n
                }) : (n.hasOwnProperty("code") || (n.code = -1), t && t(n));
            }.bind(this);
            e.doRequest(this.domain + "/" + this.apiKey, n);
        }
    }, {
        key: "parallelRequest",
        value: function(e, t) {
            var n = this, r = e.map(function(e) {
                return new Promise(function(t, r) {
                    n.request(e, t);
                });
            });
            Promise.all(r).then(function(e) {
                t && t(e);
            });
        }
    } ]), n;
}();

exports.default = n;