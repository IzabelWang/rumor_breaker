var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

String.prototype.splice = function(e, n) {
    return this.slice(0, e) + n + this.slice(e);
};

module.exports = {
    formatTime: function(n) {
        var t = n.getFullYear(), r = n.getMonth() + 1, o = n.getDate(), i = n.getHours(), c = n.getMinutes(), u = n.getSeconds();
        return [ t, r, o ].map(e).join("/") + " " + [ i, c, u ].map(e).join(":");
    },
    sha1: function(e) {
        var n, t, r = new Uint8Array(function(e) {
            var n, t, r, o = [];
            for (n = 0; n < e.length; n++) (t = e.charCodeAt(n)) < 128 ? o.push(t) : t < 2048 ? o.push(192 + (t >> 6 & 31), 128 + (63 & t)) : ((r = 55296 ^ t) >> 10 == 0 ? (t = (r << 10) + (56320 ^ e.charCodeAt(++n)) + 65536, 
            o.push(240 + (t >> 18 & 7), 128 + (t >> 12 & 63))) : o.push(224 + (t >> 12 & 15)), 
            o.push(128 + (t >> 6 & 63), 128 + (63 & t)));
            return o;
        }(e)), o = 16 + (r.length + 8 >>> 6 << 4);
        for ((e = new Uint8Array(o << 2)).set(new Uint8Array(r.buffer)), e = new Uint32Array(e.buffer), 
        t = new DataView(e.buffer), f = 0; f < o; f++) e[f] = t.getUint32(f << 2);
        e[r.length >> 2] |= 128 << 24 - 8 * (3 & r.length), e[o - 1] = r.length << 3;
        var i = [], c = [ function() {
            return s[1] & s[2] | ~s[1] & s[3];
        }, function() {
            return s[1] ^ s[2] ^ s[3];
        }, function() {
            return s[1] & s[2] | s[1] & s[3] | s[2] & s[3];
        }, function() {
            return s[1] ^ s[2] ^ s[3];
        } ], u = function(e, n) {
            return e << n | e >>> 32 - n;
        }, a = [ 1518500249, 1859775393, -1894007588, -899497514 ], s = [ 1732584193, -271733879, null, null, -1009589776 ];
        for (s[2] = ~s[0], s[3] = ~s[1], f = 0; f < e.length; f += 16) {
            var l = s.slice(0);
            for (n = 0; n < 80; n++) i[n] = n < 16 ? e[f + n] : u(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1), 
            t = u(s[0], 5) + c[n / 20 | 0]() + s[4] + i[n] + a[n / 20 | 0] | 0, s[1] = u(s[1], 30), 
            s.pop(), s.unshift(t);
            for (n = 0; n < 5; n++) s[n] = s[n] + l[n] | 0;
        }
        t = new DataView(new Uint32Array(s).buffer);
        for (var f = 0; f < 5; f++) s[f] = t.getUint32(f << 2);
        return Array.prototype.map.call(new Uint8Array(new Uint32Array(s).buffer), function(e) {
            return (e < 16 ? "0" : "") + e.toString(16);
        }).join("");
    },
    convertHtmlToText: function(e) {
        var n = "" + e;
        return n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(/<\/div>/gi, "\r\n")).replace(/<\/li>/gi, "\r\n")).replace(/<li>/gi, "  *  ")).replace(/<\/ul>/gi, "\r\n")).replace(/<br\s*[\/]?>/gi, "\r\n")).replace(/<p.*?>/gi, "\r\n")).replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)")).replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "")).replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "")).replace(/<(?:.|\s)*?>/g, "")).replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\r\n\r\n")).replace(/ +(?= )/g, "")).replace(/&nbsp;/gi, " ")).replace(/&amp;/gi, "&")).replace(/&quot;/gi, '"')).replace(/&lt;/gi, "<")).replace(/&gt;/gi, ">");
    },
    savePicToAlbum: function(e) {
        wx.getSetting({
            success: function(n) {
                n.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                    filePath: e,
                    success: function(e) {
                        wx.showToast({
                            title: "保存成功",
                            success: function(e) {
                                return wx.setStorageSync("photoSaved", !0), !0;
                            }
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.saveImageToPhotosAlbum({
                            filePath: e,
                            success: function(e) {
                                wx.showToast({
                                    title: "保存成功",
                                    success: function(e) {
                                        wx.setStorageSync("photoSaved", !0);
                                    }
                                });
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    fail: function() {}
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    initSavePicToAlbum: function(e) {
        wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function() {
                return !0;
            },
            fail: function() {
                return !1;
            }
        });
    },
    return2Br: function(e) {
        return e.replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
    _base64ToArrayBuffer: function(e) {
        for (var n = window.atob(e), t = n.length, r = new Uint8Array(t), o = 0; o < t; o++) r[o] = n.charCodeAt(o);
        return r;
    },
    toQueryString: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).map(function(n) {
            var t = e[n];
            return "" === t || "undefined" === t ? "" : "".concat(n, "=").concat(t);
        }).join("&");
    }
};