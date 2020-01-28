var e = require("../../libs/request"), t = getApp();

console.log("app!!!:"), console.log(t), Page({
    data: {
        middle_data: {},
        initial: !0,
        fontMultiple: t.global.fontMultiple,
        webViewUrl: "",
        useWv: wx.canIUse("web-view")
    },
    onLoad: function(t) {
        console.log(t);
        var i = this, r = {
            action: "info",
            source: t.source
        };
        "undefined" != String(t.saferefuteurl) ? r.safe_refute_url = decodeURIComponent(t.saferefuteurl) : "undefined" != t.bizuin && "undefined" != t.msgid && "undefined" != t.idx && (r.rumor_uin = t.bizuin, 
        r.rumor_msgid = t.msgid, r.rumor_idx = t.idx), e({
            url: "https://mp.weixin.qq.com/wxarumor/mid",
            data: r,
            success: function(e) {
                console.log("https://mp.weixin.qq.com/wxarumor/mid返回数据："), console.log(e), e && e.rumor_digest && (e.rumor_digest = e.rumor_digest.replace(/\&nbsp\;/g, " ")), 
                i.setData({
                    middle_data: e,
                    initial: !1
                }), e && e.video_ckey && e.rumor_vid && wx.request({
                    raw: !0,
                    url: "https://h5vv.video.qq.com/getvinfo",
                    data: {
                        vid: e.rumor_vid,
                        dtype: 1,
                        otype: "json",
                        callback: "data",
                        appVer: 1,
                        encryptVer: 6.3,
                        platform: 61001,
                        cKey: e.video_ckey,
                        stdfrom: "v3060",
                        device: 60401
                    },
                    success: function(t) {
                        console.log("getVideo success");
                        var r = JSON.parse(t.data.slice(5, -1));
                        if (console.log(r), !r.em) {
                            var a = r.vl.vi[0], n = a.ul.ui[0].url + a.fn + "?vkey=" + a.fvkey + "&br=" + a.br + "&fmt=auto&level=" + a.level;
                            console.log(n), e.rumor_video = n, i.setData({
                                middle_data: e
                            });
                        }
                    }
                });
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    goindex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    gorumor: function(e) {
        e.currentTarget.dataset.bizuin && String(e.currentTarget.dataset.msgid) && String(e.currentTarget.dataset.idx) && (this.setData({
            webViewUrl: ""
        }), wx.navigateTo({
            url: "../detailsimple/detailsimple?bizuin=" + e.currentTarget.dataset.bizuin + "&msgid=" + e.currentTarget.dataset.msgid + "&idx=" + e.currentTarget.dataset.idx
        }));
    },
    gorefute: function(e) {
        this.setData({
            webViewUrl: ""
        }), wx.navigateTo({
            url: "../detailsimple/detailsimple?bizuin=" + e.currentTarget.dataset.bizuin + "&msgid=" + e.currentTarget.dataset.msgid + "&idx=" + e.currentTarget.dataset.idx
        });
    },
    goorganization: function(e) {
        wx.navigateTo({
            url: "../partner/partner?uin=" + e.currentTarget.dataset.uin
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});