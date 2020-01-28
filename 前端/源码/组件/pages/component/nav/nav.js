Page({
    data: {
        TabCur: 0,
        scrollLeft: 0
    },
    tabSelect: function(t) {
        this.setData({
            TabCur: t.currentTarget.dataset.id,
            scrollLeft: 60 * (t.currentTarget.dataset.id - 1)
        });
    }
});