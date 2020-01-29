function t(t) {
    var e = "", a = t.totalTicketCost + "";
    e = a.length >= 10 ? a.substring(0, a.length - 8) + "亿票房" : 9 == a.length ? a.substring(0, 1) + "." + a.substring(1, 3) + "亿票房" : a.length >= 5 ? a.substring(0, a.length - 4) + "万票房" : "0" == a ? "票房更新中" : a + "票房", 
    t.boxOfficeString = e, t.note && t.note.length > 0 && (console.log(t.note), t.boxOfficeString = t.note), 
    t.isSelected = !1, t.imageUrl += "-w175h250";
}

function e(t) {
    var e = t.split("以上");
    return e && 2 == e.length ? e[0] + "票房以上" || t : t;
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../module/DSHttpRequest"));

module.exports = {
    loadList: function(n) {
        getApp().staticRequest(new a.default("ActivitySummary2019/Get/" + getApp().getAppName() + "/" + getApp().getVersion(), {}, "GET"), function(a) {
            if (1 == a.code) {
                var i = new Map();
                for (var o in a.data.groups) {
                    var r = {
                        title: a.data.setting.GROUP_TITLE[o],
                        movieList: a.data.groups[o],
                        sectionId: o,
                        sectionTitle: e(a.data.setting.GROUP_TITLE[o])
                    }, s = !0, l = !1, u = void 0;
                    try {
                        for (var g, d = r.movieList[Symbol.iterator](); !(s = (g = d.next()).done); s = !0) {
                            var v = g.value;
                            v.sectionId = o, t(v);
                        }
                    } catch (t) {
                        l = !0, u = t;
                    } finally {
                        try {
                            !s && d.return && d.return();
                        } finally {
                            if (l) throw u;
                        }
                    }
                    i.set(o, r);
                }
                var f = a.data.setting.SEASON_MOVIE_NUM;
                !(getApp().sysInfo.model.indexOf("iPhone") >= 0) && a.data.setting.SEASON_MOVIE_NUM_AZ && (f = a.data.setting.SEASON_MOVIE_NUM_AZ);
                var m = {};
                m.listMap = i, m.settingInfo = {
                    startTexts: a.data.setting.TITLE,
                    qrcodes: a.data.setting.QRCODE,
                    seasonnum: f,
                    webUrl: a.data.setting.WEB_URL,
                    webTitle: a.data.setting.WEB_TITLE
                }, n && n({
                    data: m
                });
            } else n && n({
                errMsg: a.msg ? a.msg : "数据错误"
            });
        });
    },
    loadResult: function(t, e) {
        var n = {
            totalDuration: t.totalDuration,
            totalCost: t.totalCost
        };
        t.movieSeason && (n.movieSeason = t.movieSeason), t.movieNum && (n.movieNum = t.movieNum), 
        getApp().dynamicRequest(new a.default("ActivitySummary2019/Result", n), function(t) {
            1 == t.code ? e && e({
                data: t.data
            }) : e && e({
                errMsg: t.msg ? t.msg : "数据错误"
            });
        });
    },
    submitData: function(t) {
        var e = [], n = !0, i = !1, o = void 0;
        try {
            for (var r, s = t[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                var l = r.value;
                e.push(l.movieId);
            }
        } catch (t) {
            i = !0, o = t;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (i) throw o;
            }
        }
        var u = {
            event: "ACTIVITYSUMMARY_2019_MOVIES",
            value: getApp().userInfo().openId + ":" + e.join(",")
        };
        getApp().dynamicRequest(new a.default("Ser/Stat/Write/final2019", u));
    }
};