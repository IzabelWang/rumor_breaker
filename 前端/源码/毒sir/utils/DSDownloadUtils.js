function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function n(e) {
    var n = 0;
    if (0 == (e += "").length) return n;
    for (var o = 0; o < e.length; o++) n = (n << 5) - n + e.charCodeAt(o), n &= n;
    return n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(n, o, i) {
        return o && e(n.prototype, o), i && e(n, i), n;
    };
}(), i = void 0;

exports.DSDownloadUtils = function() {
    function t() {
        if (e(this, t), i) return i;
        this.downloadFiles = new Map(), i = this;
    }
    return o(t, [ {
        key: "downloadFile",
        value: function(e, o, i) {
            if (e) {
                console.log("download url:" + e);
                var t = n(e) + "", l = function() {
                    wx.downloadFile({
                        url: e,
                        header: {
                            "Content-type": o || "image/jpg"
                        },
                        success: function(e) {
                            console.log("download file success:", e), this.downloadFiles.set(t, e.tempFilePath), 
                            i && i(e);
                        }.bind(this),
                        fail: function(e) {
                            console.log("download file fail:", e), i && i({
                                errMsg: "文件加载失败"
                            });
                        }
                    }).onProgressUpdate(function(e) {
                        console.log("progress:", e);
                    });
                }.bind(this), s = this.downloadFiles.get(t);
                s ? wx.getFileInfo({
                    filePath: s,
                    success: function(e) {
                        e.filePath = s, i && i(e), console.log("get file success:", e);
                    },
                    fail: function(e) {
                        this.downloadFiles.delete(t), l();
                    }.bind(this)
                }) : l();
            } else i({
                errMsg: "无效的文件路径"
            });
        }
    }, {
        key: "downloadImage",
        value: function(e, n) {
            if (e) {
                ({
                    originUrl: e,
                    callback: n,
                    retryTimes: 3,
                    downAction: function() {
                        var e = this.originUrl.replace(new RegExp("image[0-9]?.dushemovie.com", "gi"), "html2.dushemovie.com/scdn");
                        -1 == e.indexOf("https") && (e = e.replace("http", "https")), console.log("download url:" + e), 
                        wx.getImageInfo({
                            src: e,
                            success: function(e) {
                                console.log("download image success:", e), this.callback && this.callback(e);
                            }.bind(this),
                            fail: function(n) {
                                var o = this;
                                console.log("download image fail:", n), --this.retryTimes > 0 ? setTimeout(function() {
                                    o.downAction();
                                }, 200) : this.callback && this.callback({
                                    errMsg: "图片加载失败：" + e
                                });
                            }.bind(this)
                        });
                    }
                }).downAction();
            } else n({
                errMsg: "无效的图片路径"
            });
        }
    }, {
        key: "downloadImages",
        value: function(e) {
            var n = this;
            if ("imgUrls" in e && e.imgUrls instanceof Array) if (0 != e.imgUrls.length) {
                var o = e.imgUrls.length, i = 0, t = e.imgUrls.map(function(t) {
                    return new Promise(function(l, s) {
                        var r = function(n) {
                            "path" in n ? ("function" == typeof e.progress && e.progress(++i / o), l(n)) : "function" == typeof e.withFailReplace && "" != (this.replaceUrl = e.withFailReplace(t)) ? this.downloadImage(this.replaceUrl, r) : s(new Error(n.errMsg));
                        }.bind(n);
                        n.downloadImage(t, r);
                    });
                });
                Promise.all(t).then(function(n) {
                    "function" == typeof e.success && e.success(n), "function" == typeof e.complete && e.complete();
                }).catch(function(n) {
                    "function" == typeof e.fail && e.fail({
                        errMsg: n.message
                    }), "function" == e.complete && e.complete();
                });
            } else e.fail && e.fail({
                errMsg: "empty urls"
            }); else e.fail && e.fail({
                errMsg: "invalide urls"
            });
        }
    } ]), t;
}();