var a = getApp();

Page({
    data: {
        StatusBar: a.globalData.StatusBar,
        CustomBar: a.globalData.CustomBar,
        iconList: [ {
            icon: "cardboardfill",
            color: "red",
            badge: 120,
            name: "VR"
        }, {
            icon: "recordfill",
            color: "orange",
            badge: 1,
            name: "录像"
        }, {
            icon: "picfill",
            color: "yellow",
            badge: 0,
            name: "图像"
        }, {
            icon: "noticefill",
            color: "olive",
            badge: 22,
            name: "通知"
        }, {
            icon: "upstagefill",
            color: "cyan",
            badge: 0,
            name: "排行榜"
        }, {
            icon: "clothesfill",
            color: "blue",
            badge: 0,
            name: "皮肤"
        }, {
            icon: "discoverfill",
            color: "purple",
            badge: 0,
            name: "发现"
        }, {
            icon: "questionfill",
            color: "mauve",
            badge: 0,
            name: "帮助"
        }, {
            icon: "commandfill",
            color: "purple",
            badge: 0,
            name: "问答"
        }, {
            icon: "brandfill",
            color: "mauve",
            badge: 0,
            name: "版权"
        } ],
        gridCol: 3,
        skin: !1
    },
    showModal: function(a) {
        this.setData({
            modalName: a.currentTarget.dataset.target
        });
    },
    hideModal: function(a) {
        this.setData({
            modalName: null
        });
    },
    gridchange: function(a) {
        this.setData({
            gridCol: a.detail.value
        });
    },
    gridswitch: function(a) {
        this.setData({
            gridBorder: a.detail.value
        });
    },
    menuBorder: function(a) {
        this.setData({
            menuBorder: a.detail.value
        });
    },
    menuArrow: function(a) {
        this.setData({
            menuArrow: a.detail.value
        });
    },
    menuCard: function(a) {
        this.setData({
            menuCard: a.detail.value
        });
    },
    switchSex: function(a) {
        this.setData({
            skin: a.detail.value
        });
    },
    ListTouchStart: function(a) {
        this.setData({
            ListTouchStart: a.touches[0].pageX
        });
    },
    ListTouchMove: function(a) {
        this.setData({
            ListTouchDirection: a.touches[0].pageX - this.data.ListTouchStart > 0 ? "right" : "left"
        });
    },
    ListTouchEnd: function(a) {
        "left" == this.data.ListTouchDirection ? this.setData({
            modalName: a.currentTarget.dataset.target
        }) : this.setData({
            modalName: null
        }), this.setData({
            ListTouchDirection: null
        });
    }
});