function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DSCanvas2D = void 0;

var t = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), r = require("./dsDrawable.js");

exports.DSCanvas2D = function() {
    function a(t) {
        e(this, a);
        var n = this;
        n.root = new r.Drawable(t);
        var i = wx.getSystemInfoSync();
        if (this.useHtmlCanvas = i.SDKVersion >= "2.8.0", this.useHtmlCanvas) wx.createSelectorQuery().select("#" + t.canvasId).fields({
            node: !0,
            size: !0,
            rect: !0
        }).exec(function(e) {
            try {
                n.rect = {
                    x: e[0].left,
                    y: e[0].top,
                    w: e[0].width,
                    h: e[0].height
                };
            } catch (e) {
                console.log(e);
            }
            var r = i.pixelRatio, a = e[0].node;
            a.width = t.w * r, a.height = t.h * r, a.imgCache = new Map(), a.ctx = a.getContext("2d"), 
            a.ctx.isHtmlCanvas = !0, a.ctx.getImage = function(e) {
                var t = this.imgCache.get(e);
                if (!t) {
                    var r = e.replace(new RegExp("image[0-9]?.dushemovie.com", "gi"), "html2.dushemovie.com/scdn");
                    (t = this.createImage()).src = r, t.onload = function() {
                        console.log("img loaded！"), t.isLoaded = !0;
                    }, t.onerror = function(e) {
                        t.e = e, console.log("img load fail：", e);
                    }, this.imgCache.set(e, t);
                }
                return t;
            }.bind(a), n.canvas = a, n.ctx = a.ctx, n.root.scale.x *= r, n.root.scale.y *= r, 
            n.rect = {
                x: e[0].left,
                y: e[0].top,
                w: e[0].width,
                h: e[0].height
            }, (n.requestRender = !0) && (n.requestRender = !1, n.draw(n.requestRenderCB));
        }); else {
            var o = wx.createCanvasContext(t.canvasId);
            o.imgCache = new Map(), o.getImage = function(e) {
                var t = this.imgCache.get(e);
                if (!t) {
                    t = {};
                    var r = e.replace(new RegExp("image[0-9]?.dushemovie.com", "gi"), "html2.dushemovie.com/scdn");
                    -1 == r.indexOf("https") && (r = r.replace("http", "https")), wx.getImageInfo({
                        src: r,
                        success: function(e) {
                            console.log("img loaded！", r), t.data = e;
                        },
                        fail: function(e) {
                            t.e = e, console.log("img load fail：", e, r);
                        }.bind(this)
                    }), this.imgCache.set(e, t);
                }
                return t;
            }.bind(o), this.ctx = o;
        }
    }
    return t(a, [ {
        key: "destroy",
        value: function() {
            this.renderTimer && (clearInterval(this.renderTimer), this.renderTimer = null), 
            this.ctx.imgCache && (this.ctx.imgCache.clear(), this.ctx.imgCache = null);
        }
    }, {
        key: "addDrawable",
        value: function(e) {
            return this.root.addDrawable(e);
        }
    }, {
        key: "insertDrawableAt",
        value: function(e, t) {
            return this.root.insertDrawableAt(e, t);
        }
    }, {
        key: "getDrawableNum",
        value: function() {
            return this.root.getDrawableNum();
        }
    }, {
        key: "getDrawables",
        value: function() {
            return this.root.getDrawables();
        }
    }, {
        key: "drawableAtIndex",
        value: function(e) {
            return this.root.drawableAtIndex(e);
        }
    }, {
        key: "indexOfDrawable",
        value: function(e) {
            return this.root.indexOfDrawable(e);
        }
    }, {
        key: "removeDrawableAt",
        value: function(e) {
            return this.root.removeDrawableAt(e);
        }
    }, {
        key: "removeDrawable",
        value: function(e) {
            return this.root.removeDrawable(e);
        }
    }, {
        key: "removeAllDrawable",
        value: function() {
            this.root.removeAllDrawable();
        }
    }, {
        key: "draw",
        value: function(e) {
            if (!this.ctx) return this.requestRender = !0, void (this.requestRenderCB = e);
            this.renderTimer || (this.renderTimer = setInterval(function() {
                var t = this.ctx, r = this.root;
                t.clearRect(r.rect.x, r.rect.y, r.rect.w, r.rect.h), this.useHtmlCanvas ? r.draw(t) ? console.log("rendering") : (console.log("rendering end and wait callback"), 
                clearInterval(this.renderTimer), this.renderTimer = void 0, setTimeout(function() {
                    e && e();
                }, 200)) : r.draw(t) ? console.log("rendering") : (t.draw(!1, e), console.log("rendering end and wait callback"), 
                clearInterval(this.renderTimer), this.renderTimer = void 0);
            }.bind(this), 500));
        }
    }, {
        key: "drawAndCacheToTempFilePath",
        value: function(e) {
            var t = this;
            this.draw(function() {
                console.log("rendering end and wait cache"), setTimeout(function() {
                    var r = t.ctx.isHtmlCanvas ? t.canvas : t.ctx.canvasId, a = t.root.globalPoint(), n = t.root.globalScale();
                    wx.canvasToTempFilePath({
                        x: a.x * n.x,
                        y: a.y * n.y,
                        width: t.root.rect.w * n.x,
                        height: t.root.rect.h * n.y,
                        destWidth: t.root.rect.w * n.x,
                        destHeight: t.root.rect.h * n.y,
                        canvas: r,
                        fileType: "fileType" in e ? e.fileType : "jpg",
                        success: function(t) {
                            console.log("drawAndCache success ", t), "function" == typeof e.success && e.success({
                                catchPath: t.tempFilePath
                            });
                        },
                        fail: function(t) {
                            console.log("drawAndCache fail ", t), "function" == typeof e.fail && e.fail(t);
                        },
                        complete: function() {
                            "function" == typeof e.complete && e.complete();
                        }
                    });
                }, "delay" in e ? e.delay : 0);
            });
        }
    } ]), a;
}();