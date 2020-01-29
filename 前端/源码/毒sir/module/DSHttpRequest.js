function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), i = function() {
    function i(e, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "POST", s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
        if (t(this, i), this.uri = e, this.requestData = n, this.method = r, this.retryTimes = s, 
        "GET" == this.method) {
            var o = "";
            for (var a in this.requestData) o += "/" + this.requestData[a];
            this.uri += o;
        }
    }
    return e(i, [ {
        key: "doRequest",
        value: function(t, e) {
            var i = t + "/" + this.uri;
            console.log(this.method, i, this.requestData), wx.request({
                url: i,
                data: this.requestData,
                header: {
                    "Content-Type": "application/json"
                },
                method: this.method,
                success: function(t) {
                    console.log("response：" + this.uri + "\n", t.data), e && e(this, t.data);
                }.bind(this),
                fail: function(t) {
                    console.log("response：" + this.uri + " fail \n", t), e && e(this, t);
                }.bind(this)
            });
        }
    } ]), i;
}();

exports.default = i;