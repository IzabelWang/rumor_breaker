function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../utils/DSDownloadUtils.js"), a = require("../../dsCanvas/dsDrawable"), n = require("../../dsCanvas/dsCanvas2D"), r = require("../../dataModule/finalDataModule.js");

Page({
    data: {
        canvasW: 1,
        canvasH: 1,
        progress: 10
    },
    onLoad: function(e) {
        this.aldEventEnterPage(), this.scale = 1, this.style = 0, this.totalMovieNum = e.total, 
        this.settingInfo = getApp().globalData.settingInfo;
    },
    onUnload: function() {
        this.canvas && this.canvas.destroy();
    },
    onReady: function() {
        this.refreshData();
    },
    onTapRetryBtn: function(e) {
        this.aldTapRetryBtn(), this.refreshData();
    },
    onFormSubmit: function(e) {
        console.log(e), getApp().collectFormId(e.detail.formId);
    },
    onTapSaveToImageBtn: function() {
        this.aldTapSaveBtn(), wx.showLoading({
            title: "正在保存图片",
            mask: !0
        });
        var e = getApp().sysInfo.model.indexOf("iPhone") >= 0 ? 10 : 100, t = Math.min(8e3, this.selectInfo.totalMovieNum * e), a = this;
        this.drawScene({
            duration: t,
            showQrCode: this.settingInfo.qrcodes.length > 0,
            success: function(e) {
                wx.saveImageToPhotosAlbum({
                    filePath: e.catchPath,
                    success: function() {
                        setTimeout(function() {
                            wx.showToast({
                                title: "保存成功，请前往相册分享",
                                icon: "none",
                                duration: 5e3
                            });
                        }, 200), setTimeout(function() {
                            if (a.settingInfo.webUrl) {
                                var e = a.settingInfo.webTitle ? a.settingInfo.webTitle : "";
                                wx.navigateTo({
                                    url: "/pages/final_web/final_web?url=" + encodeURIComponent(a.settingInfo.webUrl) + "&title=" + e
                                });
                            }
                        }, 800), a.aldSaveSuccess();
                    },
                    fail: function(e) {
                        console.log(e), e.errMsg.indexOf("auth") >= 0 ? (setTimeout(function() {
                            wx.showToast({
                                title: "保存失败，请重试",
                                icon: "none"
                            });
                        }, 200), a.setData({
                            needAuth: !0
                        })) : setTimeout(function() {
                            wx.showToast({
                                title: e.errMsg,
                                icon: "none"
                            });
                        }, 200);
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "保存失败",
                    icon: "none"
                }), wx.hideLoading();
            }
        });
    },
    onOpenSetting: function(e) {
        console.log(e), e.detail.authSetting["scope.writePhotosAlbum"] && (this.setData({
            needAuth: !1
        }), setTimeout(function() {
            this.onTapSaveToImageBtn();
        }.bind(this), 300));
    },
    refreshData: function() {
        var t = this;
        this.setData({
            showRetryBtn: !1,
            generateText: "稍等哦\n毒Sir正在玩命加载中..."
        }), new Promise(function(a, n) {
            t.userInfo = getApp().userInfo(), wx.getStorage({
                key: "ds_final_movielist2019",
                success: function(t) {
                    if (t.data) {
                        for (var n = t.data.sort(function(e, t) {
                            return t.totalTicketCost - e.totalTicketCost;
                        }), r = [ "1-3月", "4-6月", "7-9月", "10-12月" ], o = 0, l = 0, i = 0, s = new Map(), d = [], f = 0; f < 4; ++f) d.push({
                            cardList: [ {
                                id: f + 1,
                                title: r[f],
                                imageUrl: "/images/result/rsult_quarter_" + f + ".png"
                            } ],
                            textList: []
                        });
                        var c = [], g = !0, h = !1, u = void 0;
                        try {
                            for (var w, x = n[Symbol.iterator](); !(g = (w = x.next()).done); g = !0) {
                                var b = w.value;
                                o += parseInt(b.totalTicketCost), l += parseInt(b.ticketCost), i += parseInt(b.duration);
                                var m = !0, v = !1, y = void 0;
                                try {
                                    for (var D, p = b.category[Symbol.iterator](); !(m = (D = p.next()).done); m = !0) {
                                        var S = D.value;
                                        s.has(S) ? s.set(S, s.get(S) + 1) : s.set(S, 1);
                                    }
                                } catch (e) {
                                    v = !0, y = e;
                                } finally {
                                    try {
                                        !m && p.return && p.return();
                                    } finally {
                                        if (v) throw y;
                                    }
                                }
                                var I = Math.floor(new Date(b.date).getMonth() / 3);
                                d[I].cardList.length < this.settingInfo.seasonnum + 1 ? d[I].cardList.push(b) : c.push(b);
                            }
                        } catch (e) {
                            h = !0, u = e;
                        } finally {
                            try {
                                !g && x.return && x.return();
                            } finally {
                                if (h) throw u;
                            }
                        }
                        d = d.filter(function(e) {
                            return e.cardList.length > 1;
                        });
                        for (var F = 4 * this.settingInfo.seasonnum - d.count(function(e) {
                            return e.cardList.length - 1;
                        }), C = 0; C < F && c.length > 0; ++C) {
                            var T = c.shift();
                            d[Math.floor(new Date(T.date).getMonth() / 3) - (4 - d.length)].cardList.push(T);
                        }
                        var L = 5 - d.count(function(e) {
                            return e.cardList.length;
                        }) % 5;
                        if (L > 0 && L < 5) {
                            var P = c.splice(0, Math.min(L, c.length)), M = !0, A = !1, E = void 0;
                            try {
                                for (var R, B = P[Symbol.iterator](); !(M = (R = B.next()).done); M = !0) {
                                    var N = R.value;
                                    d[Math.floor(new Date(N.date).getMonth() / 3) - (4 - d.length)].cardList.push(N);
                                }
                            } catch (e) {
                                A = !0, E = e;
                            } finally {
                                try {
                                    !M && B.return && B.return();
                                } finally {
                                    if (A) throw E;
                                }
                            }
                        }
                        var _ = !0, O = !1, H = void 0;
                        try {
                            for (var U, k = c[Symbol.iterator](); !(_ = (U = k.next()).done); _ = !0) {
                                var q = U.value;
                                d[Math.floor(new Date(q.date).getMonth() / 3) - (4 - d.length)].textList.push(q);
                            }
                        } catch (e) {
                            O = !0, H = e;
                        } finally {
                            try {
                                !_ && k.return && k.return();
                            } finally {
                                if (O) throw H;
                            }
                        }
                        this.selectInfo = {
                            totalMovieNum: n.length,
                            totalPrice: o,
                            totalPay: l,
                            totalTime: i,
                            categoryList: [].concat(e(s)).sort(function(e, t) {
                                return t[1] - e[1];
                            }),
                            seasonSections: d
                        }, a(this.selectInfo);
                    }
                }.bind(t),
                fail: function(e) {
                    n(new Error(e.errMsg));
                }
            });
        }).then(function(e) {
            t.resultInfo ? t.generateResult() : r.loadResult({
                totalDuration: e.totalTime,
                totalCost: e.totalPay,
                movieNum: e.totalMovieNum
            }, function(a) {
                if (a.data) {
                    t.resultInfo = {
                        betterValue: a.data.betterValue
                    };
                    var n = e.seasonSections.max(function(e) {
                        return e.cardList.length + e.textList.length;
                    });
                    if (t.resultInfo.desLabelNodes = [], 1 == n.length) {
                        var r = (n[0].textList.length + n[0].cardList.length - 1) / e.totalMovieNum;
                        if (r > .3 && e.seasonSections.count(function(e) {
                            return e.cardList.length - 1;
                        }) > 10) t.resultInfo.desLabelNodes = [ {
                            text: "观看",
                            color: "#fff"
                        }, {
                            text: n[0].cardList[0].title,
                            color: "#F5CB1E"
                        }, {
                            text: "上映的影片数量最多，占比超过",
                            color: "#fff"
                        }, {
                            text: parseFloat(100 * r).toFixed(2) + "%",
                            color: "#F5CB1E"
                        } ]; else {
                            var o = !0, l = !1, i = void 0;
                            try {
                                for (var s, d = a.data.movieNumLabel[Symbol.iterator](); !(o = (s = d.next()).done); o = !0) {
                                    var f = s.value;
                                    t.resultInfo.desLabelNodes.push({
                                        text: f.text,
                                        color: "highlight" == f.type ? "#F5CB1E" : "#fff"
                                    });
                                }
                            } catch (e) {
                                l = !0, i = e;
                            } finally {
                                try {
                                    !o && d.return && d.return();
                                } finally {
                                    if (l) throw i;
                                }
                            }
                        }
                    } else {
                        var c = !0, g = !1, h = void 0;
                        try {
                            for (var u, w = a.data.movieNumLabel[Symbol.iterator](); !(c = (u = w.next()).done); c = !0) {
                                var x = u.value;
                                t.resultInfo.desLabelNodes.push({
                                    text: x.text,
                                    color: "highlight" == x.type ? "#F5CB1E" : "#fff"
                                });
                            }
                        } catch (e) {
                            g = !0, h = e;
                        } finally {
                            try {
                                !c && w.return && w.return();
                            } finally {
                                if (g) throw h;
                            }
                        }
                    }
                    t.resultInfo.costNodes = [];
                    var b = !0, m = !1, v = void 0;
                    try {
                        for (var y, D = a.data.costLabel[Symbol.iterator](); !(b = (y = D.next()).done); b = !0) {
                            var p = y.value;
                            t.resultInfo.costNodes.push({
                                text: p.text,
                                baseline: "middle",
                                color: "highlight" == p.type ? "#FF9300" : "#F4D87D",
                                font: "highlight" == p.type ? "normal bold 24px PingFangSC-Semibold" : "normal normal 24px PingFangSC-Regular"
                            });
                        }
                    } catch (e) {
                        m = !0, v = e;
                    } finally {
                        try {
                            !b && D.return && D.return();
                        } finally {
                            if (m) throw v;
                        }
                    }
                    t.resultInfo.durationNodes = [];
                    var S = !0, I = !1, F = void 0;
                    try {
                        for (var C, T = a.data.durationLabel[Symbol.iterator](); !(S = (C = T.next()).done); S = !0) {
                            var L = C.value;
                            t.resultInfo.durationNodes.push({
                                text: L.text,
                                baseline: "middle",
                                color: "highlight" == L.type ? "#FF9300" : "#F4D87D",
                                font: "highlight" == L.type ? "normal bold 24px PingFangSC-Semibold" : "normal normal 24px PingFangSC-Regular"
                            });
                        }
                    } catch (e) {
                        I = !0, F = e;
                    } finally {
                        try {
                            !S && T.return && T.return();
                        } finally {
                            if (I) throw F;
                        }
                    }
                    t.generateResult();
                } else t.setData({
                    showRetryBtn: !0,
                    generateText: "请重试..."
                }), wx.showToast({
                    title: a.errMsg,
                    icon: "none"
                });
            });
        }).catch(function(e) {
            t.setData({
                showRetryBtn: !0,
                generateText: "请重试..."
            }), wx.showToast({
                title: e.message,
                icon: "none"
            });
        });
    },
    generateResult: function() {
        var e = [ this.userInfo.avatarUrl ], a = this.selectInfo.seasonSections, n = !0, r = !1, o = void 0;
        try {
            for (var l, i = a[Symbol.iterator](); !(n = (l = i.next()).done); n = !0) l.value.cardList.forEach(function(t) {
                t.imageUrl && e.push(t.imageUrl);
            });
        } catch (e) {
            r = !0, o = e;
        } finally {
            try {
                !n && i.return && i.return();
            } finally {
                if (r) throw o;
            }
        }
        var s = this;
        new t.DSDownloadUtils().downloadImages({
            imgUrls: e,
            progress: function(e) {
                s.data.showRetryBtn || s.setData({
                    generateText: "稍等哦\n毒Sir正在玩命加载中... " + Math.floor(90 * e) + "%"
                });
            },
            withFailReplace: function(e) {
                return e.indexOf("-w175h250") >= 0 ? "/images/default_poster.png" : e.indexOf("wx.qlogo.cn") >= 0 ? "/images/default_avatar.png" : "/images/default_qrcode.jpeg";
            },
            success: function(e) {
                var t = 0;
                s.userInfo.drawableAvatarInfo = e[t++];
                var n = !0, r = !1, o = void 0;
                try {
                    for (var l, i = a[Symbol.iterator](); !(n = (l = i.next()).done); n = !0) l.value.cardList.forEach(function(a) {
                        a.drawableImageInfo = e[t++];
                    });
                } catch (e) {
                    r = !0, o = e;
                } finally {
                    try {
                        !n && i.return && i.return();
                    } finally {
                        if (r) throw o;
                    }
                }
                var d = f ? 10 : 100, f = getApp().sysInfo.model.indexOf("iPhone") >= 0, c = Math.min(8e3, s.selectInfo.totalMovieNum * d);
                s.drawScene({
                    showQrCode: !1,
                    duration: c,
                    success: function(e) {
                        s.setData({
                            pageImage: e.catchPath
                        });
                    },
                    fail: function(e) {
                        console.log(e), wx.showToast({
                            title: "生成结果失败",
                            icon: "none"
                        }), s.setData({
                            showRetryBtn: !0,
                            generateText: "请重试..."
                        });
                    }
                });
                var g = .9;
                s.intervalHandel = setInterval(function() {
                    (g += .1 / (c / d)) > 1 && (clearInterval(s.intervalHandel), g = 1), s.setData({
                        generateText: "稍等哦\n毒Sir正在玩命加载中... " + Math.floor(100 * g) + "%"
                    });
                }, d);
            }.bind(this),
            fail: function(e) {
                console.log(e), this.setData({
                    showRetryBtn: !0,
                    generateText: "请重试..."
                }), wx.showToast({
                    title: "图片加载失败",
                    icon: "none"
                });
            }.bind(this)
        });
    },
    drawScene: function(e) {
        var t = this.canvas;
        if (!t) {
            t = this.canvas = new n.DSCanvas2D({
                x: 0,
                y: 0,
                w: 750,
                h: 0,
                canvasId: "scene-canvas",
                bgColor: "#100D0C"
            });
            var a = 0, r = 0, o = [ this.createTopArea(), this.createMoviesArea() ], l = !0, i = !1, s = void 0;
            try {
                for (var d, f = o[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                    var c = d.value, g = c.rect;
                    a += c.rect.h, g.y = r, t.addDrawable(c), r = a;
                }
            } catch (e) {
                i = !0, s = e;
            } finally {
                try {
                    !l && f.return && f.return();
                } finally {
                    if (i) throw s;
                }
            }
            for (var h = getApp().sysInfo.model.indexOf("iPhone") >= 0, u = [ 0, 30, 60, 80, 95, 105, 110, 1e4 ], w = h ? 1.2 : 1, x = 0; x < u.length - 1; ++x) this.selectInfo.totalMovieNum > u[x] && this.selectInfo.totalMovieNum <= u[x + 1] && (w -= h ? .01 : .02);
            console.log("scale：" + w), t.root.scale = {
                x: w,
                y: w
            }, t.root.rect.h = a, this.setData({
                canvasW: 750 * w,
                canvasH: (a + 306) * w
            });
        }
        if (e.showQrCode) {
            var b = this.createQrCodeArea();
            b.rect.y = t.root.rect.h, t.root.rect.h += b.rect.h, t.addDrawable(b);
        }
        t.drawAndCacheToTempFilePath({
            delay: e.duration,
            fileType: "jpg",
            success: e.success,
            fail: e.fail
        });
    },
    createTopArea: function() {
        var t = new a.Drawable({
            x: 0,
            y: 0,
            w: 750,
            h: 0
        }), n = new a.ImageDrawable({
            x: 0,
            y: 0,
            w: 750,
            h: 396,
            imgSource: "/images/result/result_pho.png"
        });
        t.addDrawable(n);
        var r = new a.Drawable({
            x: 315,
            y: 292,
            w: 120,
            h: 120,
            radius: 16,
            bgColor: "#FFEBBB"
        });
        r.addDrawable(new a.ImageDrawable({
            x: 4,
            y: 4,
            w: 112,
            h: 112,
            radius: 12,
            imgSource: this.userInfo.drawableAvatarInfo
        })), t.addDrawable(r), t.addDrawable(new a.TextDrawable({
            x: 200,
            y: r.rect.y + r.rect.h + 12,
            w: 350,
            h: 40,
            nodes: [ {
                text: this.userInfo.nickName,
                color: "#fff",
                font: "normal 500 28px PingFangSC-Medium",
                textAlign: "center"
            } ]
        })), t.addDrawable(new a.ImageDrawable({
            x: 604,
            y: 374,
            w: 146,
            h: 86,
            imgSource: "/images/result/result_icon_poing.png"
        })), t.addDrawable(new a.ImageDrawable({
            x: 32,
            y: 452,
            w: 40,
            h: 30,
            imgSource: "/images/result/result_icon_brackets_l.png"
        }));
        var o = 28;
        t.addDrawable(new a.TextDrawable({
            x: o,
            y: 500,
            w: 446,
            h: 40,
            nodes: [ {
                text: "2019年",
                font: "normal 600 36px PingFangSC-Semibold",
                color: "#F5CB1E"
            } ]
        })), t.addDrawable(new a.TextDrawable({
            x: o,
            y: 552,
            w: 446,
            h: 130,
            numberOfLine: 3,
            lineHeight: 38,
            font: "normal 400 28px PingFangSC-Regular",
            nodes: [ {
                text: "共计观影",
                color: "#fff"
            }, {
                text: this.selectInfo.totalMovieNum + "部",
                color: "#F5CB1E"
            }, {
                text: "，超过",
                color: "#fff"
            }, {
                text: this.resultInfo.betterValue + "%",
                color: "#F5CB1E"
            }, {
                text: "的用户，",
                color: "#fff"
            } ].concat(e(this.resultInfo.desLabelNodes))
        }));
        var l = Math.round(this.selectInfo.totalPrice / 1e4);
        console.log(l);
        var i = "";
        l < 1e3 ? i = "万" : l >= 1e3 && l < 1e4 ? (l = (l / 1e3).toFixed(1), i = "千万") : (l = (l / 1e4).toFixed(1), 
        i = "亿"), 1 == (l += "").length ? l += ".0" : l.length > 3 && (l = parseInt(l) + ""), 
        o = 524, t.addDrawable(new a.TextDrawable({
            x: o,
            y: 532,
            w: 168,
            h: 34,
            nodes: [ {
                text: "观影总票房：",
                color: "#F5CB1E",
                font: "normal 400 24px PingFangSC-Regular",
                letterSpacing: 3
            } ]
        }));
        for (var s = o, d = 0; d < l.length; ++d) {
            var f = void 0;
            if ("." == l[d]) {
                f = new a.Drawable({
                    x: s + 6,
                    y: 638,
                    w: 12,
                    h: 12,
                    bgColor: "#F5CB1E"
                }), s += 24;
            } else f = new a.ImageDrawable({
                x: s,
                y: 570,
                w: 48,
                h: 84,
                imgSource: "/images/result/" + l[d] + ".png",
                mode: "aspectFit"
            }), s += 48;
            t.addDrawable(f);
        }
        t.addDrawable(new a.TextDrawable({
            x: s,
            y: 620,
            w: 60,
            h: 40,
            nodes: [ {
                text: i,
                color: "#F5CB1E",
                font: "normal 600 28px PingFangSC-Semibold"
            } ]
        })), t.addDrawable(new a.ImageDrawable({
            x: 678,
            y: 672,
            w: 40,
            h: 30,
            imgSource: "/images/result/result_ic_brackets_r.png"
        }));
        var c = 718;
        if (this.selectInfo.totalMovieNum > 1) {
            t.addDrawable(new a.TextDrawable({
                x: 32,
                y: c,
                w: 600,
                h: 50,
                nodes: [ {
                    text: "已看影片的类型分布",
                    font: "normal 400 32px PingFangSC-Regular",
                    color: "#fff",
                    baseline: "bottom"
                } ]
            })), c += 50, t.addDrawable(new a.TextDrawable({
                x: 32,
                y: c,
                w: 600,
                h: 34,
                nodes: [ {
                    text: "*每部影片可能包含多种类型",
                    font: "normal 400 24px PingFangSC-Regular",
                    color: "#797979",
                    baseline: "bottom"
                } ]
            })), c += 58;
            var g = this.selectInfo.categoryList, h = g[0][1], u = g[g.length - 1][1] < 10 ? 70 : 90, w = 0;
            for (w = 0; w < g.length && Math.floor(w / 2) < 5; ++w) {
                var x = g[w], b = u + (234 - u) * (x[1] / h) - 20, m = new a.Drawable({
                    x: w % 2 == 0 ? 32 : 386,
                    y: c + 48 * Math.floor(w / 2),
                    w: 98 + b,
                    h: 40
                });
                m.addDrawable(new a.TextDrawable({
                    x: 0,
                    y: 0,
                    w: 90,
                    h: 40,
                    radius: 4,
                    bgColor: "#F4D87D",
                    nodes: [ {
                        text: x[0],
                        color: "#100D0C",
                        font: "normal 600 24px PingFangSC-Semibold",
                        textAlign: "center",
                        baseline: "middle"
                    } ]
                })), m.addDrawable(new a.Drawable({
                    x: 98 + b - 20,
                    y: 0,
                    w: 40,
                    h: 40,
                    radius: 20,
                    bgColor: "#2F2914"
                })), m.addDrawable(new a.TextDrawable({
                    x: 98,
                    y: 0,
                    w: b,
                    h: 40,
                    bgColor: "#2F2914",
                    nodes: [ {
                        text: "  " + x[1] + "部",
                        color: "#F4D87D",
                        font: "normal 600 24px PingFangSC-Semibold",
                        baseline: "middle"
                    } ]
                })), t.addDrawable(m);
            }
            c += 48 * (Math.floor(w / 2) + (w % 2 == 0 ? 0 : 1)) + 48;
        }
        for (var v = this.selectInfo.totalTime + "", y = new a.ImageDrawable({
            x: 32,
            y: c,
            w: 686,
            h: 240,
            imgSource: "/images/result/result_movie_duration_bg.png"
        }), D = 0; D < v.length; ++D) {
            var p = new a.ImageDrawable({
                x: 28 + 40 * D,
                y: 50,
                w: 40,
                h: 64,
                imgSource: "/images/result/" + v[D] + ".png",
                mode: "aspectFit"
            });
            y.addDrawable(p);
        }
        y.addDrawable(new a.TextDrawable({
            x: 28 + 40 * v.length + 4,
            y: 52,
            w: 60,
            h: 40,
            nodes: [ {
                text: "分钟",
                color: "#F5CB1E",
                font: "normal 400 28px PingFangSC-Regular"
            } ]
        })), y.addDrawable(new a.TextDrawable({
            x: 28 + 40 * v.length + 4,
            y: 86,
            w: 120,
            h: 40,
            nodes: [ {
                text: "观影时长",
                color: "#F5CB1E",
                font: "normal 400 28px PingFangSC-Regular"
            } ]
        })), y.addDrawable(new a.TextDrawable({
            x: 24,
            y: 158,
            w: 638,
            h: 70,
            lineHeight: 28,
            numberOfLine: 2,
            nodes: this.resultInfo.durationNodes
        })), t.addDrawable(y), c += 288;
        var S = this.selectInfo.totalPay + "";
        y = new a.ImageDrawable({
            x: 32,
            y: c,
            w: 686,
            h: 240,
            imgSource: "/images/result/result_movie_money_bg.png"
        });
        for (var I = 0; I < S.length; ++I) {
            var F = new a.ImageDrawable({
                x: 28 + 40 * I,
                y: 50,
                w: 40,
                h: 64,
                imgSource: "/images/result/" + S[I] + ".png",
                mode: "aspectFit"
            });
            y.addDrawable(F);
        }
        return y.addDrawable(new a.TextDrawable({
            x: 28 + 40 * S.length + 4,
            y: 52,
            w: 60,
            h: 40,
            nodes: [ {
                text: "元",
                color: "#F5CB1E",
                font: "normal 400 28px PingFangSC-Regular"
            } ]
        })), y.addDrawable(new a.TextDrawable({
            x: 28 + 40 * S.length + 4,
            y: 86,
            w: 120,
            h: 40,
            nodes: [ {
                text: "观影花费",
                color: "#F5CB1E",
                font: "normal 400 28px PingFangSC-Regular"
            } ]
        })), y.addDrawable(new a.TextDrawable({
            x: 24,
            y: 158,
            w: 638,
            h: 70,
            lineHeight: 28,
            numberOfLine: 2,
            nodes: this.resultInfo.costNodes
        })), t.addDrawable(y), c += 296, t.rect.h = c, t;
    },
    createMoviesArea: function() {
        var e = new a.Drawable({
            x: 0,
            y: 0,
            w: 750,
            h: 0,
            bgColor: "#100D0C"
        });
        e.addDrawable(new a.Drawable({
            x: 0,
            y: 0,
            w: 750,
            h: 320
        })), e.addDrawable(new a.TextDrawable({
            x: 32,
            y: 0,
            w: 300,
            h: 56,
            nodes: [ {
                text: "观影时间线",
                color: "#fff",
                font: "normal 400 40px PingFangSC-Regular"
            } ]
        })), e.addDrawable(new a.TextDrawable({
            x: 32,
            y: 52,
            w: 500,
            h: 40,
            nodes: [ {
                text: "M",
                color: "#FFE670",
                font: "normal 400 28px PingFangSC-Semibold",
                letterSpacing: 8
            }, {
                text: "OVIE",
                color: "#fff",
                font: "normal 400 28px PingFangSC-Semibold",
                letterSpacing: 8
            }, {
                text: " T",
                color: "#FFE670",
                font: "normal 400 28px PingFangSC-Semibold",
                letterSpacing: 8
            }, {
                text: "IMELINE",
                color: "#fff",
                font: "normal 400 28px PingFangSC-Semibold",
                letterSpacing: 8
            } ]
        })), e.addDrawable(new a.TextDrawable({
            x: 32,
            y: 90,
            w: 688,
            h: 56,
            lineHeight: 26,
            lineSpace: 0,
            nodes: [ {
                text: "影片按照季度排列，每个季度内由票房数据由高到低排列，票房较低的影片将以文字形式展示",
                color: "#797979",
                font: "normal 400 20px PingFangSC-Regular"
            } ]
        }));
        var t = 178, n = 32, r = t, o = 128, l = 188, i = this.selectInfo.seasonSections, s = 0, d = !0, f = !1, c = void 0;
        try {
            for (var g, h = i[Symbol.iterator](); !(d = (g = h.next()).done); d = !0) {
                var u = g.value, w = !0, x = !1, b = void 0;
                try {
                    for (var m, v = u.cardList[Symbol.iterator](); !(w = (m = v.next()).done); w = !0) {
                        var y = m.value;
                        if ("movieId" in y) {
                            var D = y.drawableImageInfo.path.indexOf("default_poster") < 0, p = new a.ImageDrawable({
                                x: n,
                                y: r,
                                w: o,
                                h: l,
                                radius: 4,
                                imgSource: y.drawableImageInfo
                            });
                            p.addDrawable(new a.Drawable({
                                x: 0,
                                y: 0,
                                w: o,
                                h: 40,
                                gradient: D ? {
                                    direction: a.Drawable.Gradient_Vertical,
                                    colors: [ "#000", "transparent" ]
                                } : null
                            }).addDrawable(new a.TextDrawable({
                                x: 4,
                                y: 4,
                                w: 118,
                                h: 24,
                                nodes: [ {
                                    text: y.boxOfficeString,
                                    color: "#FBE0A8",
                                    font: "normal 400 18px PingFangSC-Regular",
                                    baseline: "middle"
                                } ]
                            }))), p.addDrawable(new a.Drawable({
                                x: 0,
                                y: 156,
                                w: o,
                                h: 32,
                                bgColor: D ? "#000" : "transparent",
                                alpha: .7
                            }).addDrawable(new a.TextDrawable({
                                x: 0,
                                y: 0,
                                w: o,
                                h: 32,
                                numberOfLine: 1,
                                lineHeight: 32,
                                nodes: [ {
                                    text: y.movieName,
                                    color: "#fff",
                                    font: "normal 400 20px PingFangSC-Regular",
                                    baseline: "middle",
                                    textAlign: "center"
                                } ]
                            }))), e.addDrawable(p);
                        } else e.addDrawable(new a.ImageDrawable({
                            x: n,
                            y: r,
                            w: o,
                            h: l,
                            radius: 4,
                            imgSource: y.drawableImageInfo
                        }).addDrawable(new a.TextDrawable({
                            x: 0,
                            y: 95,
                            w: o,
                            h: 30,
                            nodes: [ {
                                text: u.cardList.length + u.textList.length - 1 + "部",
                                color: "#FF9900",
                                font: "normal 400 28px PingFangSC-Regular",
                                textAlign: "center"
                            } ]
                        })));
                        ++s % 5 == 0 ? (n = 32, r += 200) : n += 140;
                    }
                } catch (e) {
                    x = !0, b = e;
                } finally {
                    try {
                        !w && v.return && v.return();
                    } finally {
                        if (x) throw b;
                    }
                }
            }
        } catch (e) {
            f = !0, c = e;
        } finally {
            try {
                !d && h.return && h.return();
            } finally {
                if (f) throw c;
            }
        }
        t = r + (s % 5 == 0 ? 0 : 200) + 20;
        var S = 0, I = !0, F = !1, C = void 0;
        try {
            for (var T, L = i[Symbol.iterator](); !(I = (T = L.next()).done); I = !0) S += T.value.textList.length;
        } catch (e) {
            F = !0, C = e;
        } finally {
            try {
                !I && L.return && L.return();
            } finally {
                if (F) throw C;
            }
        }
        if (S > 0) {
            var P = "normal 400 20px PingFangSC-Regular";
            e.addDrawable(new a.TextDrawable({
                x: 32,
                y: t,
                w: 686,
                h: 28,
                nodes: [ {
                    text: "- 以下电影将以文字形式展示 -",
                    color: "#797979",
                    font: P,
                    textAlign: "center"
                } ]
            })), t += 38;
            var M = [], A = !0, E = !1, R = void 0;
            try {
                for (var B, N = i[Symbol.iterator](); !(A = (B = N.next()).done); A = !0) {
                    var _ = B.value;
                    _.textList.length > 0 && (M.push({
                        text: "（" + _.cardList[0].title + "）",
                        color: "#FF9900",
                        font: P
                    }), M.push({
                        text: _.textList.map(function(e) {
                            return "《" + e.movieName + "》";
                        }).join(" "),
                        color: "#fff",
                        font: P
                    }));
                }
            } catch (e) {
                E = !0, R = e;
            } finally {
                try {
                    !A && N.return && N.return();
                } finally {
                    if (E) throw R;
                }
            }
            var O = M.map(function(e) {
                return e.text;
            }).join(" "), H = a.TextDrawable.measureTextHeight({
                ctx: this.canvas.ctx,
                font: P,
                width: 686,
                lineHeight: 24,
                lineSpace: 4,
                text: O
            });
            e.addDrawable(new a.TextDrawable({
                x: 32,
                y: t,
                w: 686,
                h: H,
                lineHeight: 24,
                lineSpace: 4,
                nodes: M
            })), t += H + 10;
        }
        return e.rect.h = t, e;
    },
    createQrCodeArea: function() {
        var e = new a.Drawable({
            x: 0,
            y: 0,
            w: 750,
            h: 306,
            bgColor: "#100D0C"
        });
        e.addDrawable(new a.Drawable({
            x: 32,
            y: 20,
            w: 686,
            h: 1,
            bgColor: "#fff",
            alpha: .2
        }));
        var t = this.settingInfo.qrcodes, n = t[parseInt(100 * Math.random()) % t.length];
        return n.IMAGE && e.addDrawable(new a.Drawable({
            x: 281,
            y: 50,
            w: 178,
            h: 178,
            radius: 6,
            bgColor: "#fff"
        }).addDrawable(new a.ImageDrawable({
            x: 4,
            y: 4,
            w: 170,
            h: 170,
            imgSource: n.IMAGE
        }))), e.addDrawable(new a.TextDrawable({
            x: 0,
            y: 250,
            w: 750,
            h: 40,
            nodes: [ {
                text: n.RESULT_LABEL.join(" "),
                color: "#fff",
                font: "normal 400 24px PingFangSC-Regular",
                textAlign: "center"
            } ]
        })), e;
    },
    aldEventEnterPage: function() {
        getApp().sendEvent("活动结果-进入浏览");
    },
    aldTapRetryBtn: function() {
        getApp().sendEvent("活动结果-点击重试");
    },
    aldTapSaveBtn: function() {
        getApp().sendEvent("活动结果-点击保存");
    },
    aldSaveSuccess: function() {
        getApp().sendEvent("活动结果-保存成功");
    }
});