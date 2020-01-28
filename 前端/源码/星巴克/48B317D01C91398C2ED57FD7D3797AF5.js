var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js"), _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof.js"));

!function() {
    function t(t, i) {
        i ? (d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, 
        this.blocks = d) : this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
        t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, 
        this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, 
        this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, 
        this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, 
        this.finalized = this.hashed = !1, this.first = !0, this.is224 = t;
    }
    function i(i, e, r) {
        var s, u = (0, _typeof2.default)(i);
        if ("string" === u) {
            var n, a = [], o = i.length, d = 0;
            for (s = 0; s < o; ++s) (n = i.charCodeAt(s)) < 128 ? a[d++] = n : n < 2048 ? (a[d++] = 192 | n >> 6, 
            a[d++] = 128 | 63 & n) : n < 55296 || n >= 57344 ? (a[d++] = 224 | n >> 12, a[d++] = 128 | n >> 6 & 63, 
            a[d++] = 128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & i.charCodeAt(++s)), 
            a[d++] = 240 | n >> 18, a[d++] = 128 | n >> 12 & 63, a[d++] = 128 | n >> 6 & 63, 
            a[d++] = 128 | 63 & n);
            i = a;
        } else {
            if ("object" !== u) throw new Error(h);
            if (null === i) throw new Error(h);
            if (f && i.constructor === ArrayBuffer) i = new Uint8Array(i); else if (!(Array.isArray(i) || f && ArrayBuffer.isView(i))) throw new Error(h);
        }
        i.length > 64 && (i = new t(e, !0).update(i).array());
        var y = [], c = [];
        for (s = 0; s < 64; ++s) {
            var l = i[s] || 0;
            y[s] = 92 ^ l, c[s] = 54 ^ l;
        }
        t.call(this, e, r), this.update(c), this.oKeyPad = y, this.inner = !0, this.sharedMemory = r;
    }
    var h = "input is invalid type", r = "object" == ("undefined" == typeof window ? "undefined" : (0, 
    _typeof2.default)(window)), s = r ? window : {};
    s.JS_SHA256_NO_WINDOW && (r = !1);
    var e = !r && "object" == ("undefined" == typeof self ? "undefined" : (0, _typeof2.default)(self)), n = !s.JS_SHA256_NO_NODE_JS && "object" == ("undefined" == typeof process ? "undefined" : (0, 
    _typeof2.default)(process)) && process.versions && process.versions.node;
    n ? s = global : e && (s = self);
    var o = !s.JS_SHA256_NO_COMMON_JS && "object" == ("undefined" == typeof module ? "undefined" : (0, 
    _typeof2.default)(module)) && module.exports, a = "function" == typeof define && define.amd, f = !s.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, u = "0123456789abcdef".split(""), c = [ -2147483648, 8388608, 32768, 128 ], y = [ 24, 16, 8, 0 ], p = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], l = [ "hex", "array", "digest", "arrayBuffer" ], d = [];
    !s.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }), !f || !s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
        return "object" == (0, _typeof2.default)(t) && t.buffer && t.buffer.constructor === ArrayBuffer;
    });
    var A = function(i, e) {
        return function(r) {
            return new t(e, !0).update(r)[i]();
        };
    }, w = function(i) {
        var e = A("hex", i);
        n && (e = b(e, i)), e.create = function() {
            return new t(i);
        }, e.update = function(t) {
            return e.create().update(t);
        };
        for (var r = 0; r < l.length; ++r) {
            var h = l[r];
            e[h] = A(h, i);
        }
        return e;
    }, b = function b(t, i) {
        var r = eval("require('crypto')"), s = eval("require('buffer').Buffer"), e = i ? "sha224" : "sha256", n = function(i) {
            if ("string" == typeof i) return r.createHash(e).update(i, "utf8").digest("hex");
            if (null == i) throw new Error(h);
            return i.constructor === ArrayBuffer && (i = new Uint8Array(i)), Array.isArray(i) || ArrayBuffer.isView(i) || i.constructor === s ? r.createHash(e).update(new s(i)).digest("hex") : t(i);
        };
        return n;
    }, v = function(t, e) {
        return function(r, h) {
            return new i(r, e, !0).update(h)[t]();
        };
    }, _ = function(t) {
        var e = v("hex", t);
        e.create = function(e) {
            return new i(e, t);
        }, e.update = function(t, i) {
            return e.create(t).update(i);
        };
        for (var r = 0; r < l.length; ++r) {
            var h = l[r];
            e[h] = v(h, t);
        }
        return e;
    };
    t.prototype.update = function(t) {
        if (!this.finalized) {
            var i, e = (0, _typeof2.default)(t);
            if ("string" !== e) {
                if ("object" !== e) throw new Error(h);
                if (null === t) throw new Error(h);
                if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(h);
                i = !0;
            }
            for (var r, s, u = 0, n = t.length, a = this.blocks; u < n; ) {
                if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), 
                i) for (s = this.start; u < n && s < 64; ++u) a[s >> 2] |= t[u] << y[3 & s++]; else for (s = this.start; u < n && s < 64; ++u) (r = t.charCodeAt(u)) < 128 ? a[s >> 2] |= r << y[3 & s++] : r < 2048 ? (a[s >> 2] |= (192 | r >> 6) << y[3 & s++], 
                a[s >> 2] |= (128 | 63 & r) << y[3 & s++]) : r < 55296 || r >= 57344 ? (a[s >> 2] |= (224 | r >> 12) << y[3 & s++], 
                a[s >> 2] |= (128 | r >> 6 & 63) << y[3 & s++], a[s >> 2] |= (128 | 63 & r) << y[3 & s++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++u)), 
                a[s >> 2] |= (240 | r >> 18) << y[3 & s++], a[s >> 2] |= (128 | r >> 12 & 63) << y[3 & s++], 
                a[s >> 2] |= (128 | r >> 6 & 63) << y[3 & s++], a[s >> 2] |= (128 | 63 & r) << y[3 & s++]);
                this.lastByteIndex = s, this.bytes += s - this.start, s >= 64 ? (this.block = a[16], 
                this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
            this.bytes = this.bytes % 4294967296), this;
        }
    }, t.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks, i = this.lastByteIndex;
            t[16] = this.block, t[i >> 2] |= c[3 & i], this.block = t[16], i >= 56 && (this.hashed || this.hash(), 
            t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), 
            t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash();
        }
    }, t.prototype.hash = function() {
        var t, i, e, r, h, s, u, n, a, o = this.h0, f = this.h1, d = this.h2, y = this.h3, c = this.h4, l = this.h5, A = this.h6, w = this.h7, b = this.blocks;
        for (t = 16; t < 64; ++t) i = ((h = b[t - 15]) >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3, 
        e = ((h = b[t - 2]) >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10, b[t] = b[t - 16] + i + b[t - 7] + e << 0;
        for (a = f & d, t = 0; t < 64; t += 4) this.first ? (this.is224 ? (s = 300032, w = (h = b[0] - 1413257819) - 150054599 << 0, 
        y = h + 24177077 << 0) : (s = 704751109, w = (h = b[0] - 210244248) - 1521486534 << 0, 
        y = h + 143694565 << 0), this.first = !1) : (i = (o >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10), 
        r = (s = o & f) ^ o & d ^ a, w = y + (h = w + (e = (c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & l ^ ~c & A) + p[t] + b[t]) << 0, 
        y = h + (i + r) << 0), i = (y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10), 
        r = (u = y & o) ^ y & f ^ s, A = d + (h = A + (e = (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7)) + (w & c ^ ~w & l) + p[t + 1] + b[t + 1]) << 0, 
        i = ((d = h + (i + r) << 0) >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), 
        r = (n = d & y) ^ d & o ^ u, l = f + (h = l + (e = (A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & w ^ ~A & c) + p[t + 2] + b[t + 2]) << 0, 
        i = ((f = h + (i + r) << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), 
        r = (a = f & d) ^ f & y ^ n, c = o + (h = c + (e = (l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & A ^ ~l & w) + p[t + 3] + b[t + 3]) << 0, 
        o = h + (i + r) << 0;
        this.h0 = this.h0 + o << 0, this.h1 = this.h1 + f << 0, this.h2 = this.h2 + d << 0, 
        this.h3 = this.h3 + y << 0, this.h4 = this.h4 + c << 0, this.h5 = this.h5 + l << 0, 
        this.h6 = this.h6 + A << 0, this.h7 = this.h7 + w << 0;
    }, t.prototype.hex = function() {
        this.finalize();
        var t = this.h0, i = this.h1, e = this.h2, r = this.h3, h = this.h4, s = this.h5, n = this.h6, a = this.h7, o = u[t >> 28 & 15] + u[t >> 24 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 4 & 15] + u[15 & t] + u[i >> 28 & 15] + u[i >> 24 & 15] + u[i >> 20 & 15] + u[i >> 16 & 15] + u[i >> 12 & 15] + u[i >> 8 & 15] + u[i >> 4 & 15] + u[15 & i] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 4 & 15] + u[15 & e] + u[r >> 28 & 15] + u[r >> 24 & 15] + u[r >> 20 & 15] + u[r >> 16 & 15] + u[r >> 12 & 15] + u[r >> 8 & 15] + u[r >> 4 & 15] + u[15 & r] + u[h >> 28 & 15] + u[h >> 24 & 15] + u[h >> 20 & 15] + u[h >> 16 & 15] + u[h >> 12 & 15] + u[h >> 8 & 15] + u[h >> 4 & 15] + u[15 & h] + u[s >> 28 & 15] + u[s >> 24 & 15] + u[s >> 20 & 15] + u[s >> 16 & 15] + u[s >> 12 & 15] + u[s >> 8 & 15] + u[s >> 4 & 15] + u[15 & s] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 4 & 15] + u[15 & n];
        return this.is224 || (o += u[a >> 28 & 15] + u[a >> 24 & 15] + u[a >> 20 & 15] + u[a >> 16 & 15] + u[a >> 12 & 15] + u[a >> 8 & 15] + u[a >> 4 & 15] + u[15 & a]), 
        o;
    }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function() {
        this.finalize();
        var t = this.h0, i = this.h1, e = this.h2, r = this.h3, h = this.h4, s = this.h5, u = this.h6, n = this.h7, a = [ t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u ];
        return this.is224 || a.push(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n), 
        a;
    }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(this.is224 ? 28 : 32), i = new DataView(t);
        return i.setUint32(0, this.h0), i.setUint32(4, this.h1), i.setUint32(8, this.h2), 
        i.setUint32(12, this.h3), i.setUint32(16, this.h4), i.setUint32(20, this.h5), i.setUint32(24, this.h6), 
        this.is224 || i.setUint32(28, this.h7), t;
    }, i.prototype = new t(), i.prototype.finalize = function() {
        if (t.prototype.finalize.call(this), this.inner) {
            this.inner = !1;
            var i = this.array();
            t.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(i), 
            t.prototype.finalize.call(this);
        }
    };
    var B = w();
    B.sha256 = B, B.sha224 = w(!0), B.sha256.hmac = _(), B.sha224.hmac = _(!0), o ? module.exports = B : (s.sha256 = B.sha256, 
    s.sha224 = B.sha224, a && define(function() {
        return B;
    }));
}();