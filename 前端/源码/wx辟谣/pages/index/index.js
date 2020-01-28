var t = require("../../libs/request"), e = getApp();

Page({
    data: {
        search_category: 0,
        new_rumor: [],
        searing: !1,
        search_val: "",
        search_rumor_list: [],
        search_rumor_total: 0,
        searched: !1,
        startsearchAnimatData: {},
        showsearchAnimatData: {},
        initial: !0,
        startsearch: !1,
        fontMultiple: e.global.fontMultiple,
        monitorSrc: e.global.fontMultiple > 1 ? "https://mp.weixin.qq.com/mp/jsmonitor?idkey=67324_126_1&t=" + Math.random() : "https://mp.weixin.qq.com/mp/jsmonitor?idkey=67324_125_1&t=" + Math.random()
    },
    onLoad: function() {
        this.loaddata();
    },
    loaddata: function() {
        function e(e) {
            t({
                url: "https://mp.weixin.qq.com/wxarumor/rumor?action=report_auth&allow=" + (e = e ? 1 : 0),
                method: "post",
                data: {
                    action: "report_auth",
                    allow: e
                },
                success: function(t) {
                    console.log("Auth 返回数据："), console.log(t);
                }
            });
        }
        var a = this, r = void 0;
        a.setData({
            new_rumor: [],
            initial: !0
        }), r = wx.getStorageSync("isGivenPerm"), console.log(r), 1 != parseInt(r) && 2 != parseInt(r) && wx.showModal({
            title: "提示",
            content: "“微信辟谣助手”里“与我相关”页面会读取你阅读过的文章，有辟谣时会进行提醒，是否允许？",
            confirmText: "允许",
            cancelText: "不允许",
            success: function(t) {
                var a = 0;
                t.confirm ? (a = 2, e(!0), console.log("test1")) : t.cancel && (a = 1, e(!1), console.log("test2")), 
                wx.setStorage({
                    key: "isGivenPerm",
                    data: a,
                    success: function() {
                        console.log("数据缓存成功");
                    }
                });
            }
        }), t({
            url: "https://mp.weixin.qq.com/wxarumor/home?category=" + a.data.search_category,
            success: function(t) {
                if (console.log("https://mp.weixin.qq.com/wxarumor/home返回数据："), console.log(t), 
                t.latest_rumor && t.latest_rumor.item) {
                    for (var e = 0; e < t.latest_rumor.item.length; e++) {
                        var r = new Date(1e3 * t.latest_rumor.item[e].refute_time);
                        t.latest_rumor.item[e].refute_time = r.getFullYear() + "-" + (r.getMonth() + 1 < 10 ? "0" + (r.getMonth() + 1) : r.getMonth() + 1) + "-" + (r.getDate() < 10 ? "0" + r.getDate() : r.getDate()), 
                        console.log("res.latest_rumor.item[i]:"), console.log(t.latest_rumor.item[e]);
                    }
                    a.setData({
                        new_rumor: t.latest_rumor.item,
                        initial: !1
                    });
                } else a.setData({
                    initial: !1
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    checkcategory: function(t) {
        this.setData({
            search_category: t.currentTarget.dataset.value
        }), this.loaddata();
    },
    onShareAppMessage: function() {
        return {
            title: "谣言识别",
            path: "/pages/index/index"
        };
    },
    showmiddle: function(t) {
        console.log(t), wx.navigateTo({
            url: "../middle/middle?bizuin=" + t.currentTarget.dataset.bizuin + "&msgid=" + t.currentTarget.dataset.msgid + "&idx=" + t.currentTarget.dataset.idx + "&saferefuteurl=" + t.currentTarget.dataset.saferefuteurl
        });
    },
    startsearch: function(t) {
        if (!this.data.searing) {
            var e = wx.createAnimation({
                duration: 200,
                timingFunction: "ease"
            });
            this.animation = e, e.translateY(-200).opacity(0).step(), this.setData({
                startsearchAnimatData: e.export()
            }), setTimeout(function() {
                e.translate(30).step(), this.setData({
                    startsearchAnimatData: e.export(),
                    searing: !0
                });
                var t = wx.createAnimation({
                    duration: 200,
                    timingFunction: "ease"
                });
                this.animation2 = t, t.opacity(1).step(), this.setData({
                    showsearchAnimatData: t.export()
                }), setTimeout(function() {
                    this.setData({
                        showsearchAnimatData: t.export(),
                        searing: !0
                    });
                }.bind(this), 200);
            }.bind(this), 150);
        }
    },
    cancelsearch: function(t) {
        if (this.data.searing) {
            var e = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            }), a = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            });
            this.animation = e, this.animation2 = a, e.translateY(0).opacity(1).step(), a.opacity(0).step(), 
            this.setData({
                startsearchAnimatData: e.export(),
                showsearchAnimatData: a.export()
            }), this.setData({
                searing: !1,
                searched: !1,
                search_rumor_list: [],
                search_val: ""
            });
        }
    },
    searchseg: function(t) {
        this.setData({
            search_val: t.detail.value
        }), "" == t.detail.value && this.setData({
            search_rumor_list: []
        });
    },
    searchlist: function(e) {
        var a = this.data.search_val.replace(/(^\s*)|(\s*$)/g, "");
        if (a) {
            var r = this;
            r.setData({
                startsearch: !0
            }), t({
                url: "https://mp.weixin.qq.com/wxarumor/search",
                data: {
                    action: "search",
                    query: a,
                    page: 1,
                    num: 100
                },
                success: function(t) {
                    if (console.log("https://mp.weixin.qq.com/wxarumor/search返回数据："), console.log(t), 
                    t && t.rumor_list) {
                        for (var e = 0; e < t.rumor_list.length; e++) {
                            var a = new Date(1e3 * t.rumor_list[e].refute_time);
                            t.rumor_list[e].refute_time = a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-" + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate());
                        }
                        r.setData({
                            search_rumor_list: t.rumor_list,
                            search_rumor_total: t.total_count > 100 ? 100 : t.total_count,
                            searched: !0
                        }), r.setData({
                            startsearch: !1
                        });
                    }
                }
            });
        }
    },
    openrumor: function(t) {
        t.currentTarget.dataset.saferefuteurl ? wx.navigateTo({
            url: "../middle/middle?saferefuteurl=" + encodeURIComponent(t.currentTarget.dataset.saferefuteurl)
        }) : wx.navigateTo({
            url: "../middle/middle?bizuin=" + t.currentTarget.dataset.bizuin + "&msgid=" + t.currentTarget.dataset.msgid + "&idx=" + t.currentTarget.dataset.idx
        });
    },
    deleteword: function() {
        this.data.searing && this.setData({
            searched: !1,
            searing: !0,
            search_rumor_list: [],
            search_val: ""
        });
    }
});