Page({
    data: {
        InputBottom: 0
    },
    InputFocus: function(t) {
        this.setData({
            InputBottom: t.detail.height
        });
    },
    InputBlur: function(t) {
        this.setData({
            InputBottom: 0
        });
    }
});