getApp();

Page({
    SetSize: function(e) {
        this.setData({
            size: e.detail.value
        });
    }
});