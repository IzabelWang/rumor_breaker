var t = getApp();

Page({
    data: {
        ColorList: t.globalData.ColorList
    },
    SetShadow: function(t) {
        this.setData({
            shadow: t.detail.value
        });
    },
    SetBorderSize: function(t) {
        this.setData({
            bordersize: t.detail.value
        });
    }
});