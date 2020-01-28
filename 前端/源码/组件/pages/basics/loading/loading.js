var a = getApp();

Page({
    data: {
        CustomBar: a.globalData.CustomBar,
        loadProgress: 0
    },
    isLoading: function(a) {
        this.setData({
            isLoad: a.detail.value
        });
    },
    loadModal: function() {
        var a = this;
        this.setData({
            loadModal: !0
        }), setTimeout(function() {
            a.setData({
                loadModal: !1
            });
        }, 2e3);
    },
    loadProgress: function() {
        var a = this;
        this.setData({
            loadProgress: this.data.loadProgress + 3
        }), this.data.loadProgress < 100 ? setTimeout(function() {
            a.loadProgress();
        }, 100) : this.setData({
            loadProgress: 0
        });
    }
});