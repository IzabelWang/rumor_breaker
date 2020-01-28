var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/objectSpread")), a = require("../../48B317D01C91398C2ED57FD7D3797AF5.js"), n = t(require("../../547BC8221C91398C321DA02558497AF5.js")), o = (t(require("../../4445B0631C91398C2223D86471997AF5.js")), 
t(require("vs-logger"))), s = getApp(), r = {
    crsmx: {
        development: "https://teststar.sandload.cn",
        production: "https://starbucksxmas.sandload.cn"
    },
    cny: {
        development: "https://starbuckscampaignstest.sandload.cn/2019_cny/",
        production: "https://starbuckscampaigns.sandload.cn/2019_cny/"
    },
    earth: {
        development: "https://front-test.verystar.net/starbucks/earthday/",
        production: "https://front.verystar.net/starbucks/earthday/"
    },
    520: {
        development: "https://front-test.verystar.net/starbucks/520/",
        production: "https://front.verystar.net/starbucks/520/"
    },
    october: {
        development: "https://active.starbucks.com.cn/wechatcouponengine/StarbucksOctober/",
        production: "https://activity.starbucks.com.cn/wechatcouponengine/starbucksoctober/"
    },
    "2019xmas": {
        development: "https://static.egifting.starbucks.com.cn/xmasactivity-test/",
        production: "https://static.egifting.starbucks.com.cn/xmasactivity/"
    }
}, i = {
    crsmx: "cardsharing",
    cny: "sbuxshare",
    earth: "earthshare",
    520: "520fenxiang",
    october: "octobershare",
    "2019xmas": "sbuxwx2"
}, c = {
    crsmx: {
        title: "只想把你，写进我的圣诞祝福里！",
        imageUrl: "../../image/share.jpg"
    },
    cny: {
        title: "拨打拜年热线，解锁红包券",
        imageUrl: "../../image/cny_share.jpg"
    },
    earth: {
        title: "环保星人邀请你参与环保打卡，领取福利",
        imageUrl: "../../image/earth_share.jpg"
    },
    520: {
        title: "有星人邀请你一起用星说爱，领取福利",
        imageUrl: "../../image/520_share.jpg"
    },
    october: {
        title: "",
        path: "",
        imageUrl: ""
    },
    "2019xmas": {
        title: "星友分享了开“星”时刻，回顾美好，收获一份心意礼",
        imageUrl: "../../image/xmas_share.jpg"
    }
};

Page(o.default.Page({
    data: {
        currentSrc: "",
        customise: {},
        needAuth: null
    },
    path: "",
    type: "",
    channel: "",
    logPath: "",
    onLoad: function(t) {
        var e = this;
        console.log(t, "crsmx_load"), "true" === t.authorize ? (wx.showLoading(), wx.checkSession({
            success: function() {
                wx.getStorageSync("oid") ? e.showAuthPopup() : s.doAuthor().then(function() {
                    e.showAuthPopup(), s.setVisitId();
                });
            },
            fail: function() {
                s.doAuthor().then(function() {
                    e.showAuthPopup(), s.setVisitId();
                }), wx.hideLoading();
            }
        })) : this.init(t);
    },
    init: function(t) {
        var e = this;
        wx.showLoading(), this.channel = t.channel || s.globalData.channel || "";
        var a = {};
        if (t.scene) decodeURIComponent(t.scene).split("&").forEach(function(t) {
            var e = t.split("=");
            a[e[0]] = e[1];
        }), r[a.type] && (this.path = r[a.type][s.globalData.env]) && (this.type = a.type), 
        console.log(a, this.path), "520" !== a.type || this.channel || (this.channel = "520scan"), 
        "2019xmas" !== a.type || this.channel || (this.channel = "sbuxwx1"); else if (t.path) this.path = decodeURIComponent(t.path); else {
            if (!t.type) return void wx.showModal({
                title: "",
                content: "没有找到此页面",
                showCancel: !1,
                success: function() {
                    wx.redirectTo({
                        url: "/pages/index/index"
                    });
                }
            });
            r[t.type] && (this.path = r[t.type][s.globalData.env]) && (this.type = t.type);
        }
        var n = t.wid || a.wid;
        n && (n = n.indexOf("xmas_181217_") > -1 ? n : "crsmx" == this.type ? "xmas_181217_".concat(n) : n), 
        console.log(this.path, n), this.logPath = this.type ? "type=".concat(this.type) : "path=".concat(this.path), 
        s.doTracking("actPv", JSON.stringify({
            page_path: "/pages/crsmx/".concat(this.logPath),
            channel: this.channel,
            scene: s.globalData.sceneId
        }), Math.floor(Date.now() / 1e3)), this.getInfo(function(o, s) {
            var r = {
                openid: o,
                nickname: s.nickName ? encodeURIComponent(s.nickName) : "",
                channel: e.channel
            };
            [ "cny", "october" ].indexOf(e.type) > -1 ? r.avatarUrl = s.avatarUrl ? encodeURIComponent(s.avatarUrl) : "" : "2019xmas" === e.type && (r.unionid = wx.getStorageSync("unionId"));
            var i = t.workid || a.workid;
            if (i && (r.workid = i), n && (r.wid = n), [ "520", "2019xmas" ].indexOf(a.type) > -1 && a.qr_no && (r.qr_no = a.qr_no), 
            [ "520", "2019xmas" ].indexOf(e.type) > -1 && t.qr_no && (r.qr_no = t.qr_no), r.qr_no) e.setSharedSrc(r); else {
                var c = e.getPathQuery(r);
                console.log("".concat(e.path, "?").concat(c), c, "path and pathQuery"), e.setData({
                    needAuth: !1,
                    currentSrc: "".concat(e.path, "?").concat(c)
                }), wx.hideLoading();
            }
        });
    },
    showAuthPopup: function() {
        wx.hideLoading(), this.setData({
            needAuth: !0
        }), this.setData({
            showAuthPopup: !0
        });
    },
    handleAuth: function() {
        this.setData({
            needAuth: !1
        }), this.init(this.options);
    },
    popupClose: function(t) {
        "tap" === t.detail.type && wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    getPathQuery: function(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        console.log(t, "dddwe");
        var n = Object.keys(t), o = "25f9e794323b453885f5181f1b624d0b", r = {}, i = "", c = "";
        for (var h in n = n.sort(), "2019xmas" === this.type && (o = "development" === s.globalData.env ? "c79f770a2938fa6b331c9b44d16f39ba" : "338b2772792bfc1e7bdc244220d05216"), 
        n.forEach(function(e) {
            r[e.toLowerCase()] = t[e];
        }), r) i += "&" + h + "=" + r[h], "" !== r[h] && (c += "&" + h + "=" + r[h]);
        return "crsmx" == this.type ? i.substr(1) : (c = (0, a.sha256)(c.substr(1) + o), 
        e ? "".concat(i.substr(1), "&sign=").concat(c) : c);
    },
    getUserData: function(t) {
        var e = this;
        return new Promise(function(a, r) {
            var i = wx.getStorageSync("userInfo");
            if (i) return a(i);
            var c = {
                open_id: t
            }, h = s.getSignurature(c);
            wx.request({
                url: n.default.GET_USER_DATA,
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: Object.assign(c, {
                    sign: h
                }),
                success: function(t) {
                    if (10461 !== t.data.retcode) {
                        if (200 != t.data.retcode) return s.logger(n.default.GET_USER_DATA, {
                            level: 3,
                            message: t.data.msg || "获取用户信息失败",
                            request: Object.assign(c, {
                                sign: h
                            }),
                            response: t
                        }), void a({});
                        o.default.reinit({
                            user: t.data.data
                        }), a(t.data.data);
                    } else e.showAuthPopup();
                },
                fail: function() {
                    a({});
                },
                complete: function() {}
            });
        });
    },
    getInfo: function(t) {
        var e = this, a = wx.getStorageSync("oid");
        a ? this.getUserData(a).then(function(e) {
            t(a, e);
        }) : s.doAuthor().then(function(t) {
            t.oid;
            e.showAuthPopup(), s.setVisitId();
        });
    },
    setSharedSrc: function(t) {
        var e = this, a = {
            open_id: t.openid,
            qr_code_no: t.qr_no
        };
        wx.request({
            url: n.default.GET_SHARER_INFO,
            header: {
                "content-type": "application/json"
            },
            method: "POST",
            data: Object.assign(a, {
                sign: this.getPathQuery(a, !1)
            }),
            success: function(o) {
                if (200 === o.data.retcode) {
                    var r = o.data.data;
                    t.sharer_unionid = r.sharer_unionid, t.sharer_openid = r.sharer_openid, t.sharer_china_openid = r.sharer_china_openid;
                    var i = e.getPathQuery(t);
                    console.log("".concat(e.path, "?").concat(i), i, "path and pathQuery"), e.setData({
                        needAuth: !1,
                        currentSrc: "".concat(e.path, "?").concat(i)
                    });
                } else s.logger(n.default.GET_SHARER_INFO, {
                    level: 3,
                    message: o.data.msg || "获取分享者信息失败",
                    request: a,
                    response: o
                }), wx.reLaunch({
                    url: "../error/error?api=getShareInfo&code=" + o.data.retcode
                });
            },
            fail: function(t) {
                console.error(t), s.logger(n.default.GET_SHARER_INFO, {
                    level: 3,
                    message: t.errMsg || "获取分享者信息失败",
                    request: a,
                    response: t
                }), wx.reLaunch({
                    url: "../error/error?api=getShareInfo"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onHide: function() {
        s.doTracking("actHang", JSON.stringify({
            page_path: "/pages/crsmx/".concat(this.logPath)
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        s.doTracking("actShare", JSON.stringify({
            page_path: "/pages/crsmx/".concat(this.logPath)
        }), Math.floor(Date.now() / 1e3));
        var t = (0, e.default)({
            title: "",
            imageUrl: "",
            path: ""
        }, c[this.type]);
        return console.log(t), t;
    },
    bindGetMsg: function(t) {
        var e = t.detail;
        console.log("dddd", e);
        var a = (e = e.data[e.data.length - 1]).wid ? "crsmx" == this.type ? "xmas_181217_".concat(e.wid) : e.wid : "", n = "/pages/crsmx/crsmx?".concat(this.type ? "type=".concat(this.type) : "path=".concat(encodeURIComponent(this.path)), "&channel=").concat(i[this.type] || "").concat(a ? "&wid=".concat(a) : "").concat(e.code ? "&qr_no=".concat(e.code) : "");
        c[this.type] = {
            title: e.title || e.text || c[this.type].title,
            imageUrl: e.img || e.url || c[this.type].imageUrl,
            path: e.path || n || c[this.type].path
        };
    }
}));