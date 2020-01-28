Page({
    data: {
        cardCur: 0,
        swiperList: [ {
            id: 0,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
        }, {
            id: 1,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg"
        }, {
            id: 2,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
        }, {
            id: 3,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
        }, {
            id: 4,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
        }, {
            id: 5,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"
        }, {
            id: 6,
            type: "image",
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
        } ]
    },
    onLoad: function() {
        this.towerSwiper("swiperList");
    },
    DotStyle: function(t) {
        this.setData({
            DotStyle: t.detail.value
        });
    },
    cardSwiper: function(t) {
        this.setData({
            cardCur: t.detail.current
        });
    },
    towerSwiper: function(t) {
        for (var e = this.data[t], i = 0; i < e.length; i++) e[i].zIndex = parseInt(e.length / 2) + 1 - Math.abs(i - parseInt(e.length / 2)), 
        e[i].mLeft = i - parseInt(e.length / 2);
        this.setData({
            swiperList: e
        });
    },
    towerStart: function(t) {
        this.setData({
            towerStart: t.touches[0].pageX
        });
    },
    towerMove: function(t) {
        this.setData({
            direction: t.touches[0].pageX - this.data.towerStart > 0 ? "right" : "left"
        });
    },
    towerEnd: function(t) {
        var e = this.data.direction, i = this.data.swiperList;
        if ("right" == e) {
            for (var s = i[0].mLeft, a = i[0].zIndex, g = 1; g < i.length; g++) i[g - 1].mLeft = i[g].mLeft, 
            i[g - 1].zIndex = i[g].zIndex;
            i[i.length - 1].mLeft = s, i[i.length - 1].zIndex = a, this.setData({
                swiperList: i
            });
        } else {
            for (var n = i[i.length - 1].mLeft, r = i[i.length - 1].zIndex, o = i.length - 1; o > 0; o--) i[o].mLeft = i[o - 1].mLeft, 
            i[o].zIndex = i[o - 1].zIndex;
            i[0].mLeft = n, i[0].zIndex = r, this.setData({
                swiperList: i
            });
        }
    }
});