var a = getApp();

Page({
    data: {
        StatusBar: a.globalData.StatusBar,
        CustomBar: a.globalData.CustomBar
    },
    isCard: function(a) {
        this.setData({
            isCard: a.detail.value
        });
    }
});