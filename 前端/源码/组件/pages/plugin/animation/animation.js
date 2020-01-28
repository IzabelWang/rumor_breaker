var a = getApp();

Page({
    data: {
        StatusBar: a.globalData.StatusBar,
        CustomBar: a.globalData.CustomBar,
        list: [ {
            name: "fade",
            color: "red"
        }, {
            name: "scale-up",
            color: "orange"
        }, {
            name: "scale-down",
            color: "olive"
        }, {
            name: "slide-top",
            color: "green"
        }, {
            name: "slide-bottom",
            color: "cyan"
        }, {
            name: "slide-left",
            color: "blue"
        }, {
            name: "slide-right",
            color: "purple"
        }, {
            name: "shake",
            color: "mauve"
        } ],
        toggleDelay: !1
    },
    toggle: function(a) {
        console.log(a);
        var e = a.currentTarget.dataset.class, t = this;
        t.setData({
            animation: e
        }), setTimeout(function() {
            t.setData({
                animation: ""
            });
        }, 1e3);
    },
    toggleDelay: function() {
        var a = this;
        a.setData({
            toggleDelay: !0
        }), setTimeout(function() {
            a.setData({
                toggleDelay: !1
            });
        }, 1e3);
    }
});