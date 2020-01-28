var t = require("../../libs/request"), a = getApp();

Page({
    data: {
        rumor_count: 0,
        pv: 0,
        org_list: [],
        category: 0,
        categoryArray: [ "部分", "健康类", "社会事件类" ],
        initial: !0,
        fontMultiple: a.global.fontMultiple
    },
    onLoad: function(t) {
        this.getCategoryData(this.category);
    },
    onShareAppMessage: function() {
        return {
            title: "辟谣机构",
            path: "/pages/organization/organization"
        };
    },
    getCategoryData: function(a) {
        var o = this;
        t({
            url: "https://mp.weixin.qq.com/wxarumor/refute?action=list",
            data: {
                category: a
            },
            success: function(t) {
                console.log("https://mp.weixin.qq.com/wxarumor/refute?action=list返回数据："), console.log(t), 
                t.rumor_org && t.rumor_org ? o.setData({
                    org_list: t.rumor_org,
                    initial: !1
                }) : o.setData({
                    initial: !1
                }), t.rumor_stat ? o.setData({
                    rumor_count: t.rumor_stat.rumor_count || 0,
                    pv: t.rumor_stat.pv || 0,
                    initial: !1
                }) : o.setData({
                    initial: !1
                });
            }
        });
    },
    categoryPickerChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            category: t.detail.value
        }), this.getCategoryData(this.data.category);
    },
    showpartner: function(t) {
        console.log(t), wx.navigateTo({
            url: "../partner/partner?uin=" + t.currentTarget.dataset.uin
        });
    },
    howjoin: function(t) {
        wx.navigateTo({
            url: "../detailsimple/detailsimple?bizuin=2394001060&msgid=221870135&idx=1"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});