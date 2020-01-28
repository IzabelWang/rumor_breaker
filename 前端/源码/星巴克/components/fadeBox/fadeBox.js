getApp();

Component({
    data: {
        modelType: 0
    },
    properties: {
        showType: {
            type: Boolean,
            value: !1,
            observer: function(t) {
                t ? this.showStart() : this.hideStart();
            }
        }
    },
    hideTimeout: null,
    methods: {
        showStart: function() {
            var t = this;
            clearTimeout(this.hideTimeout), this.setData({
                modelType: 1
            }), wx.nextTick(function() {
                t.setData({
                    modelType: 2
                });
            });
        },
        hideStart: function() {
            var t = this;
            this.setData({
                modelType: 3
            }), this.hideTimeout = setTimeout(function() {
                t.setData({
                    modelType: 0
                });
            }, 400);
        }
    }
});