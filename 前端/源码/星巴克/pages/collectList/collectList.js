var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("../../547BC8221C91398C321DA02558497AF5.js")), i = (e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")), 
e(require("vs-logger"))), o = getApp();

Page(i.default.Page({
    data: {
        isIpx: null,
        btnClick: !1,
        collectList: [],
        noData: !1,
        tipsData: {
            show: "",
            text: "收藏成功",
            again: !1
        },
        maxTips: "",
        closeType: 2,
        videoSize: {
            width: 375,
            height: 667
        },
        videoShow: !1
    },
    themeId: "",
    newThemeId: "",
    getList: function(e) {
        var t = this;
        wx.showLoading({
            mask: !0
        });
        this.data.orders;
        var i = {
            open_id: e || wx.getStorageSync("oid")
        }, c = o.getSignurature(i);
        wx.request({
            url: a.default.GET_FAVORITE_LIST,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: Object.assign(i, {
                sign: c
            }),
            success: function(e) {
                if (200 != e.data.retcode) return o.logger(a.default.GET_FAVORITE_LIST, {
                    level: 3,
                    message: e.data.msg || "获取收藏卡面列表失败",
                    request: Object.assign(s, {
                        sign: c
                    }),
                    response: e
                }), void wx.reLaunch({
                    url: "../error/error?api=getFavoriteCoverInfo&code=" + e.data.retcode
                });
                var i = e.data.data, s = {
                    collectList: i.covers_info,
                    noData: !1
                };
                0 == i.covers_info.length && (s.noData = !0, !wx.getStorageSync("collectFirst") && setTimeout(function() {
                    t.showVideo();
                }, 1e3));
                t.setData(s), t.themeId = i.favorite_theme_id, t.newThemeId = i.recommended_theme_id;
            },
            fail: function() {
                wx.reLaunch({
                    url: "../error/error?msg=getFavoriteCoverInfo_timeout"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    videoEnd: function() {
        this.setData({
            videoShow: !1
        });
    },
    closeVideo: function() {
        this.setData({
            videoShow: !1
        });
    },
    showVideo: function() {
        var e = o.globalData.sysinfo, t = parseInt(.75 * e.windowWidth), a = parseInt(t / (this.data.videoSize.width / this.data.videoSize.height));
        this.setData({
            videoSize: {
                width: t % 2 == 1 ? t + 1 : t,
                height: a % 2 == 1 ? a + 1 : a
            },
            videoShow: !0
        }), this.videoContext = wx.createVideoContext("collectVideo"), this.videoContext.play(), 
        wx.setStorageSync("collectFirst", "1");
    },
    onLoad: function(e) {
        this.setData({
            isIpx: o.globalData.isIpx
        }), o.doTracking("actPv", JSON.stringify({
            page_path: "/pages/collectList",
            channel: o.globalData.channel,
            scene: o.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onShow: function() {
        this.getList();
    },
    onHide: function() {
        o.doTracking("actHang", JSON.stringify({
            page_path: "/pages/collectList"
        }), Math.floor(Date.now() / 1e3));
    },
    goDetail: function(e) {
        var t = e.currentTarget.dataset.item, a = e.currentTarget.dataset.index, i = [];
        this.data.collectList.forEach(function(e) {
            i.push(Object.assign({}, e));
        }), o.globalData.collectInfo = i, o.doTracking("actClickCard", JSON.stringify({
            cover_id: t.cover_id
        }), Math.floor(Date.now() / 1e3)), wx.navigateTo({
            url: "/pages/cardDetail/cardDetail?theme_id=".concat(this.themeId, "&collect_index=").concat(a, "&closeType=1")
        });
    },
    getNewCollect: function() {
        o.doTracking("actNewCollect", JSON.stringify({
            theme_id: this.newThemeId,
            status: 0 == this.data.collectList.length ? 0 : 1
        }), Math.floor(Date.now() / 1e3)), wx.navigateTo({
            url: "/pages/cardDetail/cardDetail?theme_id=".concat(this.newThemeId, "&scene=").concat(o.globalData.sceneId, "&closeType=1")
        });
    },
    collectTips: {
        timeout: null,
        againParams: {}
    },
    collectFail: function(e, t) {
        this.collectTips.againParams = e, this.setData({
            tipsData: Object.assign({
                show: 2,
                again: !0,
                collectType: e.collectType
            })
        }), o.doTracking(t, JSON.stringify({
            cover_id: e.query.cover_id,
            status: 0
        }), Math.floor(Date.now() / 1e3)), this.closeTips();
    },
    collectAgain: function() {
        this.collectUpdate(this.collectTips.againParams, !0);
    },
    closeTips: function() {
        var e = this;
        clearTimeout(this.collectTips.timeout), this.collectTips.timeout = setTimeout(function() {
            e.setData({
                "tipsData.show": 1
            });
        }, 2e3);
    },
    clickType: !1,
    clickTimeout: null,
    collectUpdate: function(e, i) {
        var c = this;
        if (!this.clickType) {
            this.clickType = !0, wx.showLoading({
                mask: !0
            });
            var s = e.query, n = e.collectType, l = e.index;
            this.collectTips.againParams = {};
            var r = o.getSignurature(s), d = i ? 2 == n ? "actCollectAgain" : "actCancellAgain" : 2 == n ? "actClickCollect" : "actClickCancell";
            wx.request({
                url: a.default.UPDATE_FAVORITE,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(s, {
                    sign: r
                }),
                success: function(e) {
                    var i;
                    if (21009 == e.data.retcode) return o.doTracking(d, JSON.stringify({
                        cover_id: s.cover_id,
                        status: 0
                    }), Math.floor(Date.now() / 1e3)), void c.setData({
                        maxTips: 2
                    });
                    if (200 != e.data.retcode) return o.logger(a.default.UPDATE_FAVORITE, {
                        level: 3,
                        message: e.data.msg || "更新收藏卡面失败",
                        request: Object.assign(params, {
                            sign: r
                        }),
                        response: e
                    }), void c.collectFail({
                        query: s,
                        collectType: n,
                        index: l
                    }, d);
                    var u = e.data.data;
                    c.setData((i = {}, (0, t.default)(i, "collectList[".concat(l, "].status"), u.status), 
                    (0, t.default)(i, "tipsData", Object.assign({
                        show: 2,
                        collectType: n,
                        again: !1
                    })), i)), o.doTracking(d, JSON.stringify({
                        cover_id: s.cover_id,
                        status: 1
                    }), Math.floor(Date.now() / 1e3)), c.closeTips();
                },
                fail: function(e) {
                    c.collectFail({
                        query: s,
                        collectType: n,
                        index: l
                    }, d);
                },
                complete: function() {
                    wx.hideLoading(), clearTimeout(c.clickTimeout), c.clickTimeout = setTimeout(function() {
                        c.clickType = !1;
                    }, 500);
                }
            });
        }
    },
    collectControl: function(e) {
        var t = e.currentTarget.dataset, a = t.index, i = {
            open_id: wx.getStorageSync("oid"),
            cover_id: t.item.cover_id,
            cover_path: t.item.cover_path,
            cover_theme_name: t.item.cover_theme_name,
            id: t.item.id,
            status: t.item.status ? 0 : 1,
            is_custom: t.item.is_custom
        }, o = t.item.status ? 1 : 2;
        this.collectUpdate({
            query: i,
            index: a,
            collectType: o
        });
    },
    closeMaxTips: function() {
        this.setData({
            maxTips: 1
        });
    }
}));