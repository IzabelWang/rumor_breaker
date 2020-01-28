var t = getApp();

Page({
    data: {
        ColorList: t.globalData.ColorList,
        color: "red"
    },
    onLoad: function() {
        var t = this;
        setTimeout(function() {
            t.setData({
                loading: !0
            });
        }, 500);
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
    SetColor: function(t) {
        this.setData({
            color: t.currentTarget.dataset.color,
            modalName: null
        });
    },
    SetActive: function(t) {
        this.setData({
            active: t.detail.value
        });
    }
});