function e(e, t) {
    return e.slice(0, t.length) === t;
}

function t() {
    var e = wx.getStorageSync("fontsize");
    return console.log("getFontSizeFromStorage", e), "" === e ? 1 : parseInt(e);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = {
    "（": "squeeze",
    "［": "squeeze",
    "〔": "squeeze",
    "【": "squeeze",
    "《": "squeeze",
    "〈": "squeeze",
    "「": "squeeze",
    "『": "squeeze"
};

module.exports = {
    genArrayKey: function(e, t) {
        return e + "[" + t + "]";
    },
    simpleJson2EncodedStr: function(e) {
        var t = "";
        for (var n in e) t = t + n + "=" + encodeURIComponent(e[n]) + "&";
        return t.substring(0, t.length - 1);
    },
    toRoman: function(e) {
        if (isNaN(e)) return e;
        for (var t = [ [ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ], [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XCC" ], [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ] ], n = "", o = 0, r = 0, i = 1e3; r < 3; r++, 
        i /= 10) o = Math.floor(e % i / (i / 10)), n += t[2 - r][o];
        return n;
    },
    objectIntToString: function(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            if (n + 1 < e.length && ":" == e[n] && '"' == e[n + 1]) {
                for (var o = n + 2; o < e.length && ('"' != e[o] || "\\" == e[o - 1]); ) o++;
                t += e.substr(n, o - n + 1), n = o + 1;
            }
            n > 0 && ":" == e[n - 1] && !isNaN(e[n]) && (t += '"'), n > 0 && ("," == e[n] || "}" == e[n]) && !isNaN(e[n - 1]) && (t += '"'), 
            t += e[n];
        }
        return t;
    },
    modalNotice: function(e) {
        wx.showModal({
            title: "提示",
            content: e,
            showCancel: !1
        });
    },
    toastSuccessNotice: function(e) {
        wx.showToast({
            title: e,
            icon: "success",
            duration: 1500
        });
    },
    endsWith: function(e, t) {
        return e.substr(-t.length) === t;
    },
    isTodayFirstLogin: function() {
        var e = wx.getStorageSync("login_date");
        return console.log(void 0 === e ? "undefined" : n(e)), e ? new Date().toDateString() !== e.toDateString() && (wx.setStorageSync("login_date", new Date()), 
        !0) : (wx.setStorageSync("login_date", new Date()), !0);
    },
    splitSentenceToVec: function(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) e[r] in o && (t.push({
            content: e.substr(n, r - n),
            class: ""
        }), t.push({
            content: e[r],
            class: o[e[r]]
        }), n = r + 1);
        return n < e.length && t.push({
            content: e.substr(n),
            class: ""
        }), t;
    },
    urlToUniqueStr: function(e) {
        var t = e.match(/__biz=([^&]+)/), n = e.match(/mid=([^&]+)/), o = e.match(/idx=([^&]+)/);
        return t && n && o ? !(t.length < 2 || n.length < 2 || o.length < 2) && t[1] + "_" + n[1] + "_" + o[1] : null;
    },
    decodeUrlIfNotDecoded: function(e) {
        for (;-1 === e.search(":"); ) e = decodeURIComponent(e);
        return e;
    },
    encodeUrlIfNotEncoded: function(e) {
        for (;-1 !== e.search(":"); ) e = encodeURIComponent(e);
        return e;
    },
    isMpUrl: function(t) {
        if (console.log("inside mpurl:" + t), !e(t, "https://mp.weixin.qq.com/s?__biz") && !e(t, "http://mp.weixin.qq.com/s?__biz")) return !1;
        var n = t.match(/__biz=([^&]+)/), o = t.match(/mid=([^&]+)/), r = t.match(/idx=([^&]+)/);
        return !!(n && o && r) && !(n.length < 2 || o.length < 2 || r.length < 2);
    },
    changeTime: function(e) {
        return e <= 600 ? "刚刚" : e > 600 && e < 3600 ? Math.floor(e / 60) + "分钟前" : e >= 3600 && e < 86400 ? Math.floor(e / 3600) + "小时前" : e >= 86400 && e < 31536e3 ? Math.floor(e / 86400) + "天前" : e >= 31536e3 ? Math.floor(e / 31536e3) + "年前" : "";
    },
    deepCopy: function e(t) {
        if (void 0 !== t && null !== t || console.log("in deepCopy! source is", void 0 === t ? "undefined" : n(t)), 
        "object" !== (void 0 === t ? "undefined" : n(t))) return t;
        var o = new Object();
        for (var r in t) o[r] = "object" === n(t[r]) ? e(t[r]) : t[r];
        return o;
    },
    decodeHTMLEntity: function(e) {
        var t = "";
        return e && e.length && (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = e.replace(/&nbsp;/g, " ")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&quot;/g, '"')).replace(/&apos;/g, "'")).replace(/&#39;/g, "'")).replace(/&amp;/g, "&")).replace(/\\n/g, "\n")).replace(/\\t/g, "\t")).replace(/\\r/g, "\r")), 
        t;
    },
    changeTimeToDay: function(e) {
        var t = new Date();
        parseInt(t.valueOf());
        t.setHours(0), t.setMinutes(0), t.setSeconds(0);
        var n = parseInt(t.valueOf()) / 1e3, o = 0;
        return o = e >= n ? 0 : (n - e + 86400 - 1) / 86400, 0 === (o = parseInt(o)) ? "今天" : 1 === o ? "昨天" : o + "天前";
    },
    getModeFromStorage: function() {
        var e = wx.getStorageSync("mode");
        return console.log("getModeFromStorage", e), "" === e ? 1 : parseInt(e);
    },
    getFontSizeFromStorage: t,
    getFontStyle: function(e, t, n) {
        var o = .75 + .25 * e;
        return "font-size: " + (t = t || 32.60869565) * o + "rpx;line-height: " + (n = n || 1.5 * t) * o + "rpx;";
    },
    getFontSizeRatio: function() {
        return .75 + .25 * t();
    }
};