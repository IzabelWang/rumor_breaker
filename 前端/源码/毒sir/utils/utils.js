Array.prototype.min = function(t) {
    for (var e = void 0, i = [], s = 0; s < this.length; ++s) {
        var r = "function" == typeof t ? t(this[s], s, this) : this[s];
        void 0 == r && (r = this[s]), void 0 == e && (e = r), r == e ? i.push(this[s]) : r < e && (e = r, 
        i = [ this[s] ]);
    }
    return i;
}, Array.prototype.max = function(t) {
    for (var e = void 0, i = [], s = 0; s < this.length; ++s) {
        var r = "function" == typeof t ? t(this[s], s, this) : this[s];
        void 0 == r && (r = this[s]), void 0 == e && (e = r), r == e ? i.push(this[s]) : r > e && (e = r, 
        i = [ this[s] ]);
    }
    return i;
}, Array.prototype.count = function(t) {
    for (var e = 0, i = 0; i < this.length; ++i) e += "function" == typeof t ? t(this[i], i, this) : 0;
    return e;
}, Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var i in e) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[i] : ("00" + e[i]).substr(("" + e[i]).length)));
    return t;
};