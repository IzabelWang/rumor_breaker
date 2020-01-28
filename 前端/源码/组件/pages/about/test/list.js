Page({
    data: {
        scrollLeft: 0,
        TabCur: 0
    },
    tabSelect: function(t) {
        console.log(t), this.setData({
            TabCur: t.currentTarget.dataset.id,
            scrollLeft: 60 * (t.currentTarget.dataset.id - 1)
        });
    }
});