function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
        return e;
    }
    return Array.from(t);
}

var a = require("../../dataModule/finalDataModule.js");

Page({
    data: {},
    onLoad: function(t) {
        console.log(t), this.aldEventEnterPage(t.from ? t.from : "none"), this.fetchDataFromServer();
    },
    onUnload: function() {
        this.amhandle1 && (clearInterval(this.amhandle1), this.amhandle1 = null), this.amhandle2 && (clearInterval(this.amhandle2), 
        this.amhandle2 = null);
    },
    onReady: function() {
        getApp().checkLoginState(), setTimeout(function() {
            this.bgAnimation(), this.floatAnimation(), this.starAnimation();
        }.bind(this), 1e3);
    },
    onShareAppMessage: function() {
        return {
            title: "2019你看了多少电影，花了多少钱？",
            path: "/pages/final_start/final_start?channel=98",
            imageUrl: "/images/start/share.png"
        };
    },
    onFormSubmit: function(t) {
        console.log(t), getApp().collectFormId(t.detail.formId);
    },
    fetchDataFromServer: function() {
        wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var e = this;
        a.loadList(function(a) {
            if (wx.hideLoading(), a.data) {
                var n = a.data.listMap;
                getApp().globalData.originMovieList = n, getApp().globalData.settingInfo = a.data.settingInfo;
                for (var i = 0, o = wx.getStorageSync("ds_final_movielist2019") || []; i < o.length; ) !function() {
                    var t = o[i], a = n.get(t.sectionId);
                    if (a) {
                        var e = a.movieList.find(function(a) {
                            return a.movieId == t.movieId;
                        });
                        e ? (e.isSelected = !0, i += 1) : o.shift();
                    } else o.shift();
                }();
                a.data.titleTexts ? e.setData({
                    titleTexts: a.data.titleTexts
                }) : e.setData({
                    titleTexts: [ "电影如人生", "值得期待的是未知的剧情", "人生如电影", "值得回味的是私藏的记忆", "2019年，你看过哪些电影呢" ]
                }), e.dataLoaded = !0, getApp().globalData.list = [].concat(t(n.values())), getApp().globalData.selectedList = o;
            } else e.setData({
                titleTexts: [ "电影如人生", "值得期待的是未知的剧情", "人生如电影", "值得回味的是私藏的记忆", "2019年，你看过哪些电影呢" ]
            }), a.errMsg && setTimeout(function() {
                wx.showToast({
                    title: a.errMsg,
                    icon: "none"
                });
            }, 200);
        });
    },
    bgAnimation: function() {
        for (var t = [], a = 0; a < 5; ++a) {
            var e = wx.createAnimation({
                duration: 6e5,
                timingFunction: "linear"
            });
            e.translateY((a % 2 == 0 ? -5e3 : 5e3) + "px").step(), t.push(e);
        }
        this.setData({
            bgAms: t
        });
    },
    floatAnimation: function() {
        for (var t = [], a = 0; a < 5; ++a) {
            var e = wx.createAnimation({
                duration: 2450,
                timingFunction: "ease"
            });
            t.push(e);
        }
        var n = function(a) {
            for (var e = [], n = 0; n < 5; ++n) {
                var i = t[n];
                a ? i.translateY((n % 2 == 0 ? 10 : -10) + "px").step() : i.translateY((n % 2 == 0 ? -10 : 10) + "px").step(), 
                e.push(i.export());
            }
            this.setData({
                floatAms: e
            });
        }.bind(this), i = !1;
        n(i), this.amhandle2 = setInterval(function() {
            n(i = !i);
        }, 2500);
    },
    starAnimation: function() {
        for (var t = [], a = 0; a < 10; ++a) {
            var e = wx.createAnimation({
                duration: 2e3,
                timingFunction: "ease"
            });
            t.push(e);
        }
        var n = function(a) {
            for (var e = [], n = 0; n < 10; ++n) {
                var i = t[n];
                a ? i.opacity(n % 2 == 0 ? 0 : 1).rotate(Math.random() > .5 ? 90 : 0).step() : i.opacity(n % 2 == 0 ? 1 : 0).rotate(Math.random() > .5 ? 180 : 0).step(), 
                e.push(i.export());
            }
            this.setData({
                starAms: e
            });
        }.bind(this), i = !1;
        n(i), this.amhandle2 = setInterval(function() {
            n(i = !i);
        }, 2500);
    },
    onTappedStart: function(t) {
        this.aldTapStartBtn(), this.dataLoaded ? wx.navigateTo({
            url: "/pages/final_select/final_select"
        }) : this.fetchDataFromServer();
    },
    aldEventEnterPage: function(t) {
        getApp().sendEvent("首页-进入浏览", {
            from: t
        });
    },
    aldTapStartBtn: function() {
        getApp().sendEvent("首页-点击开始按钮");
    }
});