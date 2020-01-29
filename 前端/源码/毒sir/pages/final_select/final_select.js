function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = require("../../dataModule/finalDataModule.js");

Page({
    heightList: [],
    tapIconCount: 0,
    data: {
        list: [],
        selectedList: [],
        currentSection: 0,
        isFold: !0,
        codeType: 1
    },
    onLoad: function(t) {
        var e = getApp().globalData, i = this;
        this.setData(e, function() {
            setTimeout(function() {
                i.getSectionHeight(), wx.showToast({
                    title: "请选择您已看过的电影",
                    icon: "none"
                });
            }, 200);
        });
    },
    onFormSubmit: function(t) {
        console.log(t), getApp().collectFormId(t.detail.formId);
    },
    getSectionHeight: function() {
        if (0 != this.data.list.length) {
            var t = this, e = wx.createSelectorQuery().in(this), i = !0, n = !1, a = void 0;
            try {
                for (var o, s = this.data.list[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                    var l = o.value;
                    e.select("#" + l.sectionId).boundingClientRect();
                }
            } catch (t) {
                n = !0, a = t;
            } finally {
                try {
                    !i && s.return && s.return();
                } finally {
                    if (n) throw a;
                }
            }
            e.exec(function(e) {
                if (console.log("getSectionHeight", e), e.length > 0 && e.length == t.data.list.length) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n && n.hasOwnProperty("top") && t.heightList.push(n.top);
                    }
                    console.log(t.heightList);
                } else setTimeout(function() {
                    t.getSectionHeight();
                }, 100);
            });
        }
    },
    onScroll: function(t) {
        if (this.heightList.length == this.data.list.length) for (var e = this.heightList.length - 1; e >= 0; e--) if (t.detail.scrollTop >= this.heightList[e]) {
            this.data.currentSection != e && this.setData({
                currentSection: e
            });
            break;
        }
    },
    onScrollToBottom: function(t) {
        this.aldScrollPageToBottom();
    },
    onTapEmptyBg: function() {
        this.fetchDataFromServer();
    },
    onSeletedMovie: function(e) {
        for (var i = e.currentTarget.dataset.sec, n = e.currentTarget.dataset.row, a = this.data.list[i].movieList[n], o = this.data.selectedList, s = void 0, l = 0; l < o.length; l++) if (o[l].movieName == a.movieName) {
            s = l;
            break;
        }
        void 0 != s ? (this.aldCancelMovie(), o.splice(s, 1)) : (this.aldSelectMovie(), 
        o.push(a));
        var r = "list[" + i + "].movieList[" + n + "].isSelected";
        this.setData(t({
            selectedList: o
        }, r, !a.isSelected));
    },
    onTapIcon: function() {
        if (++this.tapIconCount % 10 == 0) {
            var t = this.data.list, e = new Array(t.count(function(t) {
                return t.movieList.length;
            })), i = 0, n = !0, a = !1, o = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
                    var r = s.value, c = !0, d = !1, h = void 0;
                    try {
                        for (var u, f = r.movieList[Symbol.iterator](); !(c = (u = f.next()).done); c = !0) {
                            var p = u.value;
                            p.isSelected = !0, e[i++] = p;
                        }
                    } catch (t) {
                        d = !0, h = t;
                    } finally {
                        try {
                            !c && f.return && f.return();
                        } finally {
                            if (d) throw h;
                        }
                    }
                }
            } catch (t) {
                a = !0, o = t;
            } finally {
                try {
                    !n && l.return && l.return();
                } finally {
                    if (a) throw o;
                }
            }
            this.setData({
                list: t,
                selectedList: e
            });
        }
    },
    onTappedIndicatorItem: function(t) {
        var e = t.currentTarget.dataset.idx;
        this.aldTapIndicatorItem(this.data.list[e].title + "");
        var i = this.data.list[e].sectionId;
        this.setData({
            scrollIntoView: i
        });
    },
    onTappedFold: function() {
        var t = wx.createAnimation({
            duration: 250,
            timingFunction: "ease"
        }), e = wx.createAnimation({
            duration: 250,
            timingFunction: "ease"
        });
        this.data.isFold ? (this.aldSelectListOpen(), t.bottom("112rpx").step(), e.opacity(1).step(), 
        this.setData({
            isFold: !this.data.isFold
        }), setTimeout(function() {
            this.setData({
                foldAnimation: t.export(),
                opacityAnimation: e.export()
            });
        }.bind(this), 100)) : (this.aldSelectListClose(), t.bottom("-632rpx").step(), e.opacity(0).step(), 
        this.setData({
            foldAnimation: t.export(),
            opacityAnimation: e.export()
        }), setTimeout(function() {
            this.setData({
                isFold: !this.data.isFold
            });
        }.bind(this), 250));
    },
    onTappedClear: function(t) {
        this.aldSelectListClear();
        var e = this;
        wx.showModal({
            title: "提示",
            content: "确认清空",
            success: function(t) {
                if (t.confirm) {
                    var i = e.data.list, n = !0, a = !1, o = void 0;
                    try {
                        for (var s, l = i[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
                            var r = s.value, c = !0, d = !1, h = void 0;
                            try {
                                for (var u, f = r.movieList[Symbol.iterator](); !(c = (u = f.next()).done); c = !0) u.value.isSelected = !1;
                            } catch (t) {
                                d = !0, h = t;
                            } finally {
                                try {
                                    !c && f.return && f.return();
                                } finally {
                                    if (d) throw h;
                                }
                            }
                        }
                    } catch (t) {
                        a = !0, o = t;
                    } finally {
                        try {
                            !n && l.return && l.return();
                        } finally {
                            if (a) throw o;
                        }
                    }
                    e.setData({
                        list: i,
                        selectedList: []
                    }, function() {
                        e.onTappedFold();
                    });
                } else t.cancel;
            }
        });
    },
    onTappedDelete: function(e) {
        this.aldSelectListDelete();
        var i = e.currentTarget.dataset.idx, n = this.data.selectedList[i].movieName, a = this.data.selectedList;
        a.splice(i, 1);
        for (var o = 0, s = 0, l = 0; l < this.data.list.length; l++) for (var r = this.data.list[l], c = 0; c < r.movieList.length; c++) if (r.movieList[c].movieName == n) {
            o = l, s = c;
            break;
        }
        var d = "list[" + o + "].movieList[" + s + "].isSelected";
        this.setData(t({
            selectedList: a
        }, d, !1));
    },
    onGetWxUserInfo: function(t) {
        this.aldTapSubmit();
        var i = this;
        t.detail.hasOwnProperty("userInfo") && (wx.showLoading({
            title: "加载中",
            mask: !0
        }), getApp().checkLoginState({
            success: function() {
                0 != i.data.selectedList.length ? (e.submitData(i.data.selectedList), wx.setStorageSync("ds_final_movielist2019", i.data.selectedList), 
                wx.navigateTo({
                    url: "/pages/final_finish/final_finish?total=" + i.data.list.length
                })) : wx.showToast({
                    title: "请选择您看过的电影",
                    icon: "none"
                });
            },
            fail: function(t) {
                setTimeout(function() {
                    wx.showToast({
                        title: "登录失败",
                        icon: "none"
                    });
                }, 200);
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    },
    doNoThing: function() {},
    aldEventEnterPage: function() {
        getApp().sendEvent("活动勾选-进入浏览");
    },
    aldTapIndicatorItem: function(t) {
        getApp().sendEvent("活动勾选-点击左侧导航", {
            title: t
        });
    },
    aldSelectMovie: function() {
        getApp().sendEvent("活动勾选-点击勾选电影");
    },
    aldCancelMovie: function() {
        getApp().sendEvent("活动勾选-点击取消勾选电影");
    },
    aldScrollPage: function() {
        getApp().sendEvent("活动勾选-下滑列表");
    },
    aldScrollPageToBottom: function() {
        getApp().sendEvent("活动勾选-下滑列表到底");
    },
    aldSelectListOpen: function() {
        getApp().sendEvent("活动勾选-展示预览面板");
    },
    aldSelectListClose: function() {
        getApp().sendEvent("活动勾选-收起预览面板");
    },
    aldSelectListDelete: function() {
        getApp().sendEvent("活动勾选-预览面板删除");
    },
    aldSelectListClear: function() {
        getApp().sendEvent("活动勾选-预览面板清空");
    },
    aldTapSubmit: function() {
        getApp().sendEvent("活动勾选-点击提交按钮");
    }
});