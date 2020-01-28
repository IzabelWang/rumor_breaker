var t = getApp();

Page({
    data: {
        CustomBar: t.globalData.CustomBar,
        TabCur: 0,
        tabNav: [ "Flex布局", "Grid布局", "辅助布局" ]
    },
    tabSelect: function(t) {
        console.log(t), this.setData({
            TabCur: t.currentTarget.dataset.id,
            scrollLeft: 60 * (t.currentTarget.dataset.id - 1)
        });
    }
});