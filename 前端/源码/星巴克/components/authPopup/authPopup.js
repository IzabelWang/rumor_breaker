var t = getApp();

Component({
    properties: {
        show: Boolean,
        canClose: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        toggleAuthPopup: function(t) {
            this.setData({
                show: !this.data.show
            }), this.data.show ? this.triggerEvent("popupShow", {
                type: t.type
            }) : this.triggerEvent("popupClose", {
                type: t.type
            });
        },
        getUserInfo: function(e) {
            var o = this;
            this.setData({
                isSubmiting: !0
            }), t.getUserInfo(e, function(t) {
                o.triggerEvent("auth", t), o.toggleAuthPopup(e), o.setData({
                    isSubmiting: !1
                });
            }, function() {
                o.setData({
                    isSubmiting: !1
                });
            });
        }
    }
});