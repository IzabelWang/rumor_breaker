var t = require("../../libs/request"), e = getApp();

Page({
    data: {
        nick_name: "",
        head_img: "",
        signature: "",
        refute_count: 0,
        rumor_list: [],
        initial: !0,
        fontMultiple: e.global.fontMultiple
    },
    onLoad: function(e) {
        var r = this;
        t({
            url: "https://mp.weixin.qq.com/wxarumor/refute?action=detail",
            data: {
                bizuin: e.uin
            },
            success: function(t) {
                if (console.log(t), t && t.rumor_info && t.rumor_info.rumor_list && t.rumor_info.rumor_list.item) {
                    for (var e = 0; e < t.rumor_info.rumor_list.item.length; e++) {
                        var i = new Date(1e3 * t.rumor_info.rumor_list.item[e].refute_time);
                        t.rumor_info.rumor_list.item[e].refute_time = i.getFullYear() + "年" + (i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1) + "月" + (i.getDate() < 10 ? "0" + i.getDate() : i.getDate()) + "日";
                    }
                    r.setData({
                        rumor_list: t.rumor_info.rumor_list.item,
                        initial: !1
                    });
                }
                t && t.rumor_info && r.setData({
                    nick_name: t.rumor_info.nick_name || "",
                    head_img: t.rumor_info.head_img || "/images/rumor-default-headimg.jpg",
                    signature: t.rumor_info.signature || "",
                    refute_count: t.rumor_info.refute_count || 0,
                    initial: !1
                });
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    openrumor: function(t) {
        wx.navigateTo({
            url: "../middle/middle?bizuin=" + t.currentTarget.dataset.bizuin + "&msgid=" + t.currentTarget.dataset.msgid + "&idx=" + t.currentTarget.dataset.idx + "&saferefuteurl=" + t.currentTarget.dataset.saferefuteurl
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});