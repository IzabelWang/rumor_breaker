var t = getApp();

Component({
    properties: {
        isIpx: {
            type: Boolean,
            value: !1
        },
        tipsData: {
            type: Object,
            value: {
                show: "",
                collectType: 0,
                again: !1
            }
        },
        maxTips: {
            type: String,
            value: ""
        },
        closeType: {
            type: Number,
            value: 0
        }
    },
    methods: {
        again: function() {
            this.triggerEvent("again");
        },
        toCollectList: function() {
            this.triggerEvent("closeMaxTips"), t.doTracking("actSubListButton", JSON.stringify({}), Math.floor(Date.now() / 1e3)), 
            0 == this.data.closeType ? wx.navigateTo({
                url: "/pages/collectList/collectList"
            }) : 1 == this.data.closeType && wx.navigateBack({
                delta: 1
            });
        },
        closeMaxTips: function() {
            this.triggerEvent("closeMaxTips"), t.doTracking("actSubOkButton", JSON.stringify({}), Math.floor(Date.now() / 1e3));
        }
    }
});