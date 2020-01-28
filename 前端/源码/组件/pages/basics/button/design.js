var t = getApp();

Page({
    data: {
        ColorList: t.globalData.ColorList,
        color: "red"
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
    SetRound: function(t) {
        this.setData({
            round: t.detail.value
        });
    },
    SetSize: function(t) {
        this.setData({
            size: t.detail.value
        });
    },
    SetColor: function(t) {
        this.setData({
            color: t.currentTarget.dataset.color,
            modalName: null
        });
    },
    SetShadow: function(t) {
        this.setData({
            shadow: t.detail.value
        });
    },
    SetBorder: function(t) {
        this.setData({
            border: t.detail.value
        }), t.detail.value || this.setData({
            bordersize: !1
        });
    },
    SetBorderSize: function(t) {
        this.setData({
            bordersize: t.detail.value
        });
    },
    SetBlock: function(t) {
        this.setData({
            block: t.detail.value
        });
    }
});