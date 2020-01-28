var e = getApp();

Page({
    data: {
        CustomBar: e.globalData.CustomBar,
        checkbox: [ {
            value: 0,
            name: "10元",
            checked: !1,
            hot: !1
        }, {
            value: 1,
            name: "20元",
            checked: !0,
            hot: !1
        }, {
            value: 2,
            name: "30元",
            checked: !0,
            hot: !0
        }, {
            value: 3,
            name: "60元",
            checked: !1,
            hot: !0
        }, {
            value: 4,
            name: "80元",
            checked: !1,
            hot: !1
        }, {
            value: 5,
            name: "100元",
            checked: !1,
            hot: !1
        } ]
    },
    showModal: function(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        });
    },
    hideModal: function(e) {
        this.setData({
            modalName: null
        });
    },
    ChooseCheckbox: function(e) {
        for (var a = this.data.checkbox, t = e.currentTarget.dataset.value, c = 0, h = a.length; c < h; ++c) if (a[c].value == t) {
            a[c].checked = !a[c].checked;
            break;
        }
        this.setData({
            checkbox: a
        });
    }
});