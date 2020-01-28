Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        starCount: 0,
        forksCount: 0,
        visitTotal: 0
    },
    attached: function() {
        var t = this;
        wx.showLoading({
            title: "数据加载中",
            mask: !0
        }), wx.cloud.callFunction({
            name: "github",
            success: function(o) {
                function a() {
                    n < 20 ? setTimeout(function() {
                        t.setData({
                            starCount: n,
                            forksCount: n
                        }), n++, a();
                    }, 20) : t.setData({
                        starCount: t.coutNum(o.result.stargazers_count),
                        forksCount: t.coutNum(o.result.forks_count)
                    });
                }
                var n = 0;
                a();
            },
            fail: function(t) {
                console.error(t);
            }
        }), wx.cloud.callFunction({
            name: "view",
            success: function(o) {
                function a() {
                    n < 20 ? setTimeout(function() {
                        t.setData({
                            visitTotal: n
                        }), n++, a();
                    }, 20) : t.setData({
                        visitTotal: t.coutNum(o.result.list[0].visit_total)
                    });
                }
                var n = 0;
                a(), wx.hideLoading();
            },
            fail: function(t) {
                console.error(t), wx.hideLoading();
            }
        });
    },
    methods: {
        coutNum: function(t) {
            return t > 1e3 && t < 1e4 && (t = (t / 1e3).toFixed(1) + "k"), t > 1e4 && (t = (t / 1e4).toFixed(1) + "W"), 
            t;
        },
        CopyLink: function(t) {
            wx.setClipboardData({
                data: t.currentTarget.dataset.link,
                success: function(t) {
                    wx.showToast({
                        title: "已复制",
                        duration: 1e3
                    });
                }
            });
        },
        showModal: function(t) {
            this.setData({
                modalName: t.currentTarget.dataset.target
            });
        },
        hideModal: function(t) {
            this.setData({
                modalName: null
            });
        },
        showQrcode: function() {
            wx.previewImage({
                urls: [ "https://image.weilanwl.com/color2.0/zanCode.jpg" ],
                current: "https://image.weilanwl.com/color2.0/zanCode.jpg"
            });
        }
    }
});