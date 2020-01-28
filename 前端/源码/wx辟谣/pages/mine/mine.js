var t = require("../../libs/request"), e = getApp();

Page({
    data: {
        nick_name: "",
        head_img: "/images/rumor-default-headimg.jpg",
        my_rumor: [],
        my_total: 0,
        initial: !0,
        unsubscribe: 0,
        fontMultiple: e.global.fontMultiple,
        isGivenPerm: 0,
        links: [ {
            name: "div",
            attrs: {
                style: "color: #4183c4;"
            },
            children: [ {
                type: "text",
                text: "可点击允许"
            } ]
        } ]
    },
    onLoad: function(e) {
        var o = this, r = {
            per_page: 100,
            page: 1
        };
        e && e.source && (r.source = e.source);
        var i = wx.getStorageSync("isGivenPerm");
        console.log("isGivenPerm", i), 2 != parseInt(i) && (i = 1), o.setData({
            isGivenPerm: parseInt(i)
        }), 2 == parseInt(i) && t({
            url: "https://mp.weixin.qq.com/wxarumor/rumor",
            data: r,
            success: function(t) {
                if (console.log("https://mp.weixin.qq.com/wxarumor/rumor返回数据："), console.log(t), 
                t.rumor_list && t.rumor_list.rumor_info_list) {
                    for (var e = 0; e < t.rumor_list.rumor_info_list.length; e++) {
                        var r = new Date(1e3 * t.rumor_list.rumor_info_list[e].refute_time);
                        t.rumor_list.rumor_info_list[e].refute_time = r.getFullYear() + "-" + (r.getMonth() + 1 < 10 ? "0" + (r.getMonth() + 1) : r.getMonth() + 1) + "-" + (r.getDate() < 10 ? "0" + r.getDate() : r.getDate());
                    }
                    console.log("total:"), console.log(t.rumor_list.total), o.setData({
                        nick_name: t.nick_name,
                        head_img: t.head_img || "/images/rumor-default-headimg.jpg",
                        my_rumor: t.rumor_list.rumor_info_list,
                        my_total: t.rumor_list.total || 0,
                        unsubscribe: t.rumor_list.unsubscribe || 0,
                        initial: !1
                    });
                } else o.setData({
                    initial: !1
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "我看过的谣言",
            path: "/pages/mine/mine"
        };
    },
    showPerm: function() {
        function e(e, o) {
            t({
                url: "https://mp.weixin.qq.com/wxarumor/rumor?action=report_auth&allow=" + (e = e ? 1 : 0),
                method: "post",
                data: {
                    action: "report_auth",
                    allow: e
                },
                success: function(t) {
                    console.log("Auth 返回数据："), console.log(t), o();
                }
            });
        }
        var o = this;
        wx.showModal({
            title: "提示",
            content: "“微信辟谣助手”里“与我相关”页面会读取你阅读过的文章，有辟谣时会进行提醒，是否允许？",
            confirmText: "允许",
            cancelText: "不允许",
            success: function(t) {
                function r() {
                    wx.setStorage({
                        key: "isGivenPerm",
                        data: i,
                        success: function() {
                            2 == i && o.onLoad(), console.log("数据缓存成功");
                        }
                    });
                }
                var i = 0;
                t.confirm ? (i = 2, e(!0, r)) : t.cancel && (i = 1, e(!1, r)), console.log("after report");
            }
        });
    },
    openrumor: function(t) {
        wx.navigateTo({
            url: "../middle/middle?bizuin=" + t.currentTarget.dataset.bizuin + "&msgid=" + t.currentTarget.dataset.msgid + "&idx=" + t.currentTarget.dataset.idx + "&saferefuteurl=" + t.currentTarget.dataset.saferefuteurl
        });
    },
    goindex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    setsub: function(e) {
        var o = this, r = e.currentTarget.dataset.flag;
        t({
            url: "https://mp.weixin.qq.com/wxarumor/rumor?action=update_unsubscribe&flag=" + r,
            method: "POST",
            success: function(t) {
                o.setData({
                    unsubscribe: -r
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});