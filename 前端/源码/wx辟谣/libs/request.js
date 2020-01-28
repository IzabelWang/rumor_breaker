function e(e, t, i) {
    return e + (e.indexOf("?") > -1 ? "&" : "?") + t + "=" + i;
}

function t(e) {
    for (var t = void 0; t = e.shift(); ) o(t);
}

function i(e) {
    f = {
        expire: e._sid_expire,
        sidTicket: e._sid_ticket,
        dataTicket: e._data_ticket
    }, wx.setStorageSync("app_session", f);
}

function o(o, s) {
    if (console.log(l), l >= 5) y.push(o); else {
        var n = getApp(), c = o.success, r = o.fail, p = o.complete, _ = o.url;
        /^http/.test(_) || (_ = n.hostname + _), _ = e(_ = e(_, "_sid_ticket", f.sidTicket || ""), "_data_ticket", f.dataTicket || ""), 
        l++, wx.request({
            url: _,
            data: o.data || {},
            header: o.header || {},
            method: (o.method || "GET").toUpperCase(),
            dataType: o.dataType || "json",
            success: function(e) {
                if (200 === e.statusCode) {
                    var t = e.data;
                    if (t.base && t.base.ret === u) i(t.base.session), "function" == typeof s && s(); else if (t.base && t.base.ret === d && (i({
                        _sid_expire: 0
                    }), o.retry >= 0)) return void a(o);
                    "function" == typeof c && c(t);
                } else "function" == typeof r && r();
                console.log("statusCode"), console.log(e.statusCode);
            },
            fail: function() {
                "function" == typeof r && r();
            },
            complete: function() {
                "function" == typeof p && p(), l = Math.max(l - 1, 0), t(y);
            }
        });
    }
}

function s() {
    c = !0, r--, wx.login({
        success: function(i) {
            c = !1;
            var s = p.shift();
            s.url = e(s.url, "_code", i.code), o(s, function() {
                t(p);
            });
        },
        fail: function() {
            if (c = !1, r) s(); else for (var e = void 0; e = p.shift(); ) "function" == typeof e.fail && e.fail();
        }
    });
}

function n() {
    return !!(f.sidTicket && f.dataTicket && f.expire && f.expire > Date.now()) || (c || s(), 
    !1);
}

function a(e) {
    void 0 === e.retry && (e.retry = 1), e.retry < 0 || (e.retry--, n() ? o(e) : p.push(e));
}

var c = !1, r = 2, f = wx.getStorageSync("app_session") || {
    expire: 0,
    sidTicket: "",
    dataTicket: ""
}, u = 0, d = 200003, p = [], l = 0, y = [];

module.exports = a;