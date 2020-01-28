var t = getApp();

Page({
    data: {
        StatusBar: t.globalData.StatusBar,
        CustomBar: t.globalData.CustomBar,
        hidden: !0
    },
    onLoad: function() {
        for (var t = [], a = 0; a < 26; a++) t[a] = String.fromCharCode(65 + a);
        this.setData({
            list: t,
            listCur: t[0]
        });
    },
    onReady: function() {
        var t = this;
        wx.createSelectorQuery().select(".indexBar-box").boundingClientRect(function(a) {
            t.setData({
                boxTop: a.top
            });
        }).exec(), wx.createSelectorQuery().select(".indexes").boundingClientRect(function(a) {
            t.setData({
                barTop: a.top
            });
        }).exec();
    },
    getCur: function(t) {
        this.setData({
            hidden: !1,
            listCur: this.data.list[t.target.id]
        });
    },
    setCur: function(t) {
        this.setData({
            hidden: !0,
            listCur: this.data.listCur
        });
    },
    tMove: function(t) {
        var a = t.touches[0].clientY, e = this.data.boxTop, i = this;
        if (a > e) {
            var s = parseInt((a - e) / 20);
            this.setData({
                listCur: i.data.list[s]
            });
        }
    },
    tStart: function() {
        this.setData({
            hidden: !1
        });
    },
    tEnd: function() {
        this.setData({
            hidden: !0,
            listCurID: this.data.listCur
        });
    },
    indexSelect: function(t) {
        for (var a = this, e = this.data.barHeight, i = this.data.list, s = Math.ceil(i.length * t.detail.y / e), n = 0; n < i.length; n++) if (s < n + 1) return a.setData({
            listCur: i[n],
            movableY: 20 * n
        }), !1;
    }
});