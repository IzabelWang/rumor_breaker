function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = function t(e, i, r) {
    null === e && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, i);
    if (void 0 === a) {
        var n = Object.getPrototypeOf(e);
        return null === n ? void 0 : t(n, i, r);
    }
    if ("value" in a) return a.value;
    var h = a.get;
    if (void 0 !== h) return h.call(r);
}, n = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e;
    };
}(), h = function() {
    function t(e) {
        i(this, t), this.rect = {}, this.scale = {}, this.transformAxis = {}, this.rect.x = e.x || 0, 
        this.rect.y = e.y || 0, this.rect.w = e.w || 0, this.rect.h = e.h || 0, this.degree = e.degree || 0, 
        this.clip = e.clip, this.alpha = e.alpha || 1, this.bgColor = e.bgColor, this.gradient = "gradient" in e ? e.gradient : null, 
        this.scale.x = e.scaleX || 1, this.scale.y = e.scaleY || 1, this.transformAxis.x = e.transformAxisX || 0, 
        this.transformAxis.y = e.transformAxisY || 0, this.radius = e.radius ? e.radius : 0, 
        this.visible = !("visible" in e) || e.visible, this.drawables = [];
    }
    return n(t, [ {
        key: "addDrawable",
        value: function(e) {
            return e && e instanceof t && !e.parent && (e.parent = this, this.drawables.push(e)), 
            this;
        }
    }, {
        key: "insertDrawableAt",
        value: function(e, i) {
            return i && i instanceof t && !i.parent && (i.parent = this, this.drawables.splice(e, 0, i)), 
            this;
        }
    }, {
        key: "getDrawableNum",
        value: function() {
            return this.drawables.length;
        }
    }, {
        key: "getDrawables",
        value: function() {
            return this.drawables;
        }
    }, {
        key: "drawableAtIndex",
        value: function(t) {
            return this.drawables[t];
        }
    }, {
        key: "indexOfDrawable",
        value: function(t) {
            return this.drawables.indexOf(t);
        }
    }, {
        key: "removeDrawableAt",
        value: function(t) {
            if (t >= 0 && t < this.drawables.length) {
                var e = this.drawables.splice(t, 1);
                return e.parent = null, e;
            }
            return null;
        }
    }, {
        key: "removeDrawable",
        value: function(t) {
            var e = this.drawables.indexOf(t);
            return this.removeDrawableAt(e);
        }
    }, {
        key: "removeAllDrawable",
        value: function() {
            var t = !0, e = !1, i = void 0;
            try {
                for (var r, a = this.drawables[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) r.value.parent = null;
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && a.return && a.return();
                } finally {
                    if (e) throw i;
                }
            }
            this.drawables = [];
        }
    }, {
        key: "setAnimation",
        value: function(t) {
            this.am = t, t.start();
        }
    }, {
        key: "globalPoint",
        value: function() {
            for (var t = this.rect.x, e = this.rect.y, i = this.parent; i; ) t += i.rect.x, 
            e += i.rect.y, i = i.parent;
            return {
                x: t,
                y: e
            };
        }
    }, {
        key: "globalScale",
        value: function() {
            for (var t = this.scale.x, e = this.scale.y, i = this.parent; i; ) t *= i.scale.x, 
            e *= i.scale.y, i = i.parent;
            return {
                x: t,
                y: e
            };
        }
    }, {
        key: "isRectContainPoint",
        value: function(t, e) {
            return t.x <= e.x && t.y <= e.y && t.x + t.w >= e.x && t.y + t.h >= e.y;
        }
    }, {
        key: "draw",
        value: function(e) {
            if (!this.visible) return console.log("drawable invisible", this), !1;
            var i = !1;
            if (this.am && this.am.started && !this.am.ended && (i = this.am.update(this)), 
            e.save(), e.translate(this.rect.x + this.transformAxis.x, this.rect.y + this.transformAxis.y), 
            e.rotate(.017453292522 * this.degree), e.scale(this.scale.x, this.scale.y), e.translate(-this.transformAxis.x, -this.transformAxis.y), 
            e.globalAlpha = this.alpha, this.clip && (e.beginPath(), e.rect(0, 0, this.rect.w, this.rect.h), 
            e.clip(), e.closePath()), this.radius > 0) {
                var r = this.radius, a = this.radius, n = this.rect.w - this.radius, h = this.radius, s = this.radius, o = this.rect.h - this.radius, l = this.rect.w - this.radius, c = this.rect.h - this.radius;
                e.beginPath(), e.arc(l, c, this.radius, 0, .5 * Math.PI), e.arc(s, o, this.radius, .5 * Math.PI, Math.PI), 
                e.arc(r, a, this.radius, Math.PI, 1.5 * Math.PI), e.arc(n, h, this.radius, 1.5 * Math.PI, 2 * Math.PI), 
                e.clip(), e.closePath(), e.fill();
            }
            if (this.gradient) {
                if (!this.grd) {
                    var u = this.gradient.direction ? this.gradient.direction : t.Gradient_Horizontal;
                    this.grd = e.createLinearGradient(0, 0, (u & t.Gradient_Horizontal) == t.Gradient_Horizontal ? this.rect.w : 0, (u & t.Gradient_Vertical) == t.Gradient_Vertical ? this.rect.h : 0);
                    var f = this.gradient.colors;
                    if (1 == f.length) this.grd.addColorStop(1, f[0]); else for (var d = 0; d < f.length; ++d) this.grd.addColorStop(d / (f.length - 1), f[d]);
                }
                e.fillStyle = this.grd, e.fillRect(0, 0, this.rect.w, this.rect.h);
            } else this.bgColor && (e.fillStyle = this.bgColor, e.fillRect(0, 0, this.rect.w, this.rect.h));
            this.onDraw(e);
            var m = this.dispatchDraw(e);
            return m && console.log(this), i |= m, e.restore(), i;
        }
    }, {
        key: "dispatchDraw",
        value: function(t) {
            var e = !1, i = !0, r = !1, a = void 0;
            try {
                for (var n, h = this.drawables[Symbol.iterator](); !(i = (n = h.next()).done); i = !0) e |= n.value.draw(t);
            } catch (t) {
                r = !0, a = t;
            } finally {
                try {
                    !i && h.return && h.return();
                } finally {
                    if (r) throw a;
                }
            }
            return e;
        }
    }, {
        key: "onDraw",
        value: function(t) {}
    } ]), t;
}();

h.Gradient_Horizontal = 1, h.Gradient_Vertical = 16;

var s = function(s) {
    function o(e) {
        i(this, o);
        var r = t(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
        return r.mode = e.mode ? e.mode : "scaleToFill", "imgSource" in e && (r.imgSource = e.imgSource), 
        r;
    }
    return e(o, h), n(o, [ {
        key: "draw",
        value: function(t) {
            if (!this.renderImg && this.imgSource) {
                var e = function(t) {
                    var e = t.path;
                    e.indexOf("tmp") >= 0 || e.indexOf("store") >= 0 ? this.renderImg = e : this.renderImg = "/" + e, 
                    t.width && t.height && (this.imgSrcRect = {
                        x: 0,
                        y: 0,
                        w: t.width,
                        h: t.height
                    });
                }.bind(this);
                if ("object" == r(this.imgSource)) if (t.isHtmlCanvas) {
                    var i = this.imgSource.path;
                    i.indexOf("tmp") < 0 && i.indexOf("store") < 0 && (i = "/" + i);
                    var n = t.getImage(i);
                    if (!n.isLoaded) return n.e && console.log("draw image fail ", n.e), a(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "draw", this).call(this, t) | !n.e;
                    this.renderImg = n, n.width && n.height && (this.imgSrcRect = {
                        x: 0,
                        y: 0,
                        w: n.width,
                        h: n.height
                    });
                } else e(this.imgSource); else if ("string" == typeof this.imgSource) {
                    var h = t.getImage(this.imgSource);
                    if (h.data) e(h.data); else {
                        if (!h.isLoaded) return h.e && console.log("draw image fail ", h.e), a(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "draw", this).call(this, t) | !h.e;
                        this.renderImg = h, h.width && h.height && (this.imgSrcRect = {
                            x: 0,
                            y: 0,
                            w: h.width,
                            h: h.height
                        });
                    }
                }
            }
            return a(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "draw", this).call(this, t);
        }
    }, {
        key: "onDraw",
        value: function(t) {
            if (this.renderImg && this.rect.w > 0 && this.rect.h > 0) if ("scaleToFill" == this.mode) t.drawImage(this.renderImg, 0, 0, this.rect.w, this.rect.h); else {
                if (!this.imgSrcRect || 0 == this.imgSrcRect.w || 0 == this.imgSrcRect.h) return void console.log("invalid image size");
                var e = this.imgSrcRect, i = this.rect, r = 0, a = 0, n = 0, h = 0, s = 0, o = 0, l = 0, c = 0;
                if ("aspectFit" == this.mode) {
                    r = a = 0, n = e.w, h = e.h;
                    var u = e.w / e.h;
                    e.w <= e.h ? c = (l = Math.min(i.h * u, i.w)) / u : l = (c = Math.min(i.w / u, i.h)) * u, 
                    s = (i.w - l) / 2, o = (i.h - c) / 2;
                } else if ("aspectFill" == this.mode) {
                    var f = i.w / i.h, d = e.w / e.h;
                    e.w, e.h, f > d ? (n = e.w, h = Math.min(n / f, e.h)) : (h = e.h, n = Math.min(h * f, e.w)), 
                    r = (e.w - n) / 2, a = (e.h - h) / 2, s = 0, o = 0, l = i.w, c = i.h;
                } else "top" == this.mode ? (r = Math.max(0, e.w - i.w) / 2, s = Math.max(0, i.w - e.w) / 2, 
                a = o = 0, n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h)) : "bottom" == this.mode ? (r = Math.max(0, e.w - i.w) / 2, 
                s = Math.max(0, i.w - e.w) / 2, a = Math.max(0, e.h - i.h), o = Math.max(0, i.h - e.h), 
                n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h)) : "center" == this.mode ? (r = Math.max(0, e.w - i.w) / 2, 
                a = Math.max(0, e.h - i.h) / 2, n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h), 
                s = Math.max(0, i.w - e.w) / 2, o = Math.max(0, i.h - e.h) / 2) : "left" == this.mode ? (r = s = 0, 
                a = Math.max(0, e.h - i.h) / 2, o = Math.max(0, i.h - e.h) / 2, n = l = Math.min(e.w, i.w), 
                h = c = Math.min(e.h, i.h)) : "right" == this.mode ? (r = Math.max(0, e.w - i.w), 
                a = Math.max(0, e.h - i.h) / 2, s = Math.max(0, i.w - e.w), o = Math.max(0, i.h - e.h) / 2, 
                n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h)) : "top left" == this.mode ? (r = s = 0, 
                a = o = 0, n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h)) : "top right" == this.mode ? (r = Math.max(0, e.w - i.w), 
                s = Math.max(0, i.w - e.w), a = o = 0, n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h)) : "bottom left" == this.mode ? (r = s = 0, 
                a = Math.max(0, e.h - i.h), o = Math.max(0, i.h - e.h), n = l = Math.min(e.w, i.w), 
                h = c = Math.min(e.h, i.h)) : "bottom right" == this.mode ? (r = Math.max(0, e.w - i.w), 
                s = Math.max(0, i.w - e.w), a = Math.max(0, e.h - i.h), o = Math.max(0, i.h - e.h), 
                n = l = Math.min(e.w, i.w), h = c = Math.min(e.h, i.h)) : (console.log("not support mode"), 
                r = e.x, a = e.y, n = e.w, h = e.h, s = i.x, o = i.y, l = i.w, c = i.h);
                t.drawImage(this.renderImg, r, a, n, h, s, o, l, c);
            }
        }
    } ]), o;
}(), o = function(r) {
    function a(e) {
        i(this, a);
        var r = t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
        r.lineCount = 1, r.numberOfLine = e.numberOfLine ? e.numberOfLine : 16777215, r.lineHeight = e.lineHeight ? e.lineHeight : r.rect.h, 
        r.lineSpace = e.lineSpace ? e.lineSpace : 2, r.font = e.font ? e.font : a.sLastFont;
        var n = "nodes" in e ? e.nodes : [];
        r.nodes = [];
        var h = !0, s = !1, o = void 0;
        try {
            for (var l, c = n[Symbol.iterator](); !(h = (l = c.next()).done); h = !0) {
                var u = l.value, f = {};
                f.text = "string" == typeof u.text || "number" == typeof u.text ? u.text : "非String类型", 
                f.color = u.color ? u.color : "#fff", f.font = u.font ? u.font : r.font, f.textAlign = u.textAlign ? u.textAlign : "left", 
                f.baseline = u.baseline ? u.baseline : "top", f.letterSpacing = u.letterSpacing ? u.letterSpacing : 0, 
                r.nodes.push(f);
            }
        } catch (t) {
            s = !0, o = t;
        } finally {
            try {
                !h && c.return && c.return();
            } finally {
                if (s) throw o;
            }
        }
        return r;
    }
    return e(a, h), n(a, [ {
        key: "onDraw",
        value: function(t) {
            var e = this.numberOfLine, i = this.lineHeight, r = this.lineSpace;
            if (!this.drawNodes) {
                this.drawNodes = [];
                var n = 1, h = 0, s = !0, o = !1, l = void 0;
                try {
                    for (var c, u = this.nodes[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) {
                        var f = c.value;
                        t.save(), "font" in f ? (t.font = f.font, a.sLastFont = t.font) : t.font = a.sLastFont;
                        for (var d = this.rect.w, m = t.measureText("毒").width, w = f.text, y = w.length, g = 0; g < y && n <= e; ) {
                            var p = d - h + f.letterSpacing, v = Math.floor(p / m), x = y - g, b = (x > v ? v : x) - 1, M = w.substr(g, b), S = t.measureText(M).width + M.length * f.letterSpacing;
                            do {
                                var _ = w[g + b++] + "";
                                if (!((S += t.measureText(_).width + f.letterSpacing) <= p)) break;
                                M += _;
                            } while (g + b < y);
                            g += M.length, n == e && g <= y - 1 && (M = M.substr(0, M.length - 1) + "..."), 
                            this.drawNodes.push({
                                x: h,
                                y: (n - 1) * (i + r),
                                text: M,
                                style: f
                            }), h = S >= p ? 0 : h + S, n += S >= p ? 1 : 0;
                        }
                        t.restore();
                    }
                } catch (t) {
                    o = !0, l = t;
                } finally {
                    try {
                        !s && u.return && u.return();
                    } finally {
                        if (o) throw l;
                    }
                }
                this.lineCount = n;
            }
            var O = !0, P = !1, A = void 0;
            try {
                for (var k, I = this.drawNodes[Symbol.iterator](); !(O = (k = I.next()).done); O = !0) {
                    var D = k.value;
                    t.save();
                    var j = D.style;
                    if ("font" in j ? (t.font = j.font, a.sLastFont = j.font) : t.font = a.sLastFont, 
                    t.fillStyle = j.color, t.textAlign = j.textAlign, "center" == j.textAlign ? t.translate(this.rect.w / 2, 0) : "right" == j.textAlign && t.translate(this.rect.w, 0), 
                    t.textBaseline = j.baseline, "middle" == j.baseline) {
                        var C = Math.max(0, .5 * (this.rect.h - this.lineCount * (i + r)));
                        t.translate(0, C + i / 2);
                    } else "bottom" == j.baseline && t.translate(0, i);
                    if (D.style.letterSpacing > 0) {
                        var L = 0, T = !0, F = !1, R = void 0;
                        try {
                            for (var H, G = D.text[Symbol.iterator](); !(T = (H = G.next()).done); T = !0) {
                                var z = H.value;
                                t.fillText(z, D.x + L, D.y), L += D.style.letterSpacing + t.measureText(z).width;
                            }
                        } catch (t) {
                            F = !0, R = t;
                        } finally {
                            try {
                                !T && G.return && G.return();
                            } finally {
                                if (F) throw R;
                            }
                        }
                    } else t.fillText(D.text, D.x, D.y);
                    t.restore();
                }
            } catch (t) {
                P = !0, A = t;
            } finally {
                try {
                    !O && I.return && I.return();
                } finally {
                    if (P) throw A;
                }
            }
        }
    } ], [ {
        key: "measureTextHeight",
        value: function(t) {
            var e = t.ctx;
            if (e) {
                var i = "number" == typeof t.lineSpace ? t.lineSpace : 2;
                e.save(), e.font = t.font;
                for (var r = t.text.length, a = 0, n = 0; a < r; ) {
                    var h = 0, s = "", o = !1;
                    do {
                        s = t.text.substr(a, ++h), o = a + h >= r;
                    } while (!o && e.measureText(s + (o ? "" : t.text[a + h])).width <= t.width);
                    a += s.length, n++;
                }
                return e.restore(), n * (t.lineHeight + i);
            }
        }
    } ]), a;
}();

o.sLastFont = "normal 400 24px PingFangSC-Regular", exports.Drawable = h, exports.ImageDrawable = s, 
exports.TextDrawable = o;