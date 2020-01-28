var a = getApp();

Page({
    data: {
        StatusBar: a.globalData.StatusBar,
        CustomBar: a.globalData.CustomBar,
        index: null,
        picker: [ "喵喵喵", "汪汪汪", "哼唧哼唧" ],
        multiArray: [ [ "无脊柱动物", "脊柱动物" ], [ "扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物" ], [ "猪肉绦虫", "吸血虫" ] ],
        objectMultiArray: [ [ {
            id: 0,
            name: "无脊柱动物"
        }, {
            id: 1,
            name: "脊柱动物"
        } ], [ {
            id: 0,
            name: "扁性动物"
        }, {
            id: 1,
            name: "线形动物"
        }, {
            id: 2,
            name: "环节动物"
        }, {
            id: 3,
            name: "软体动物"
        }, {
            id: 3,
            name: "节肢动物"
        } ], [ {
            id: 0,
            name: "猪肉绦虫"
        }, {
            id: 1,
            name: "吸血虫"
        } ] ],
        multiIndex: [ 0, 0, 0 ],
        time: "12:01",
        date: "2018-12-25",
        region: [ "广东省", "广州市", "海珠区" ],
        imgList: [],
        modalName: null,
        textareaAValue: "",
        textareaBValue: ""
    },
    PickerChange: function(a) {
        console.log(a), this.setData({
            index: a.detail.value
        });
    },
    MultiChange: function(a) {
        this.setData({
            multiIndex: a.detail.value
        });
    },
    MultiColumnChange: function(a) {
        var t = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        switch (t.multiIndex[a.detail.column] = a.detail.value, a.detail.column) {
          case 0:
            switch (t.multiIndex[0]) {
              case 0:
                t.multiArray[1] = [ "扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物" ], t.multiArray[2] = [ "猪肉绦虫", "吸血虫" ];
                break;

              case 1:
                t.multiArray[1] = [ "鱼", "两栖动物", "爬行动物" ], t.multiArray[2] = [ "鲫鱼", "带鱼" ];
            }
            t.multiIndex[1] = 0, t.multiIndex[2] = 0;
            break;

          case 1:
            switch (t.multiIndex[0]) {
              case 0:
                switch (t.multiIndex[1]) {
                  case 0:
                    t.multiArray[2] = [ "猪肉绦虫", "吸血虫" ];
                    break;

                  case 1:
                    t.multiArray[2] = [ "蛔虫" ];
                    break;

                  case 2:
                    t.multiArray[2] = [ "蚂蚁", "蚂蟥" ];
                    break;

                  case 3:
                    t.multiArray[2] = [ "河蚌", "蜗牛", "蛞蝓" ];
                    break;

                  case 4:
                    t.multiArray[2] = [ "昆虫", "甲壳动物", "蛛形动物", "多足动物" ];
                }
                break;

              case 1:
                switch (t.multiIndex[1]) {
                  case 0:
                    t.multiArray[2] = [ "鲫鱼", "带鱼" ];
                    break;

                  case 1:
                    t.multiArray[2] = [ "青蛙", "娃娃鱼" ];
                    break;

                  case 2:
                    t.multiArray[2] = [ "蜥蜴", "龟", "壁虎" ];
                }
            }
            t.multiIndex[2] = 0;
        }
        this.setData(t);
    },
    TimeChange: function(a) {
        this.setData({
            time: a.detail.value
        });
    },
    DateChange: function(a) {
        this.setData({
            date: a.detail.value
        });
    },
    RegionChange: function(a) {
        this.setData({
            region: a.detail.value
        });
    },
    ChooseImage: function() {
        var a = this;
        wx.chooseImage({
            count: 4,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(t) {
                0 != a.data.imgList.length ? a.setData({
                    imgList: a.data.imgList.concat(t.tempFilePaths)
                }) : a.setData({
                    imgList: t.tempFilePaths
                });
            }
        });
    },
    ViewImage: function(a) {
        wx.previewImage({
            urls: this.data.imgList,
            current: a.currentTarget.dataset.url
        });
    },
    DelImg: function(a) {
        var t = this;
        wx.showModal({
            title: "召唤师",
            content: "确定要删除这段回忆吗？",
            cancelText: "再看看",
            confirmText: "再见",
            success: function(e) {
                e.confirm && (t.data.imgList.splice(a.currentTarget.dataset.index, 1), t.setData({
                    imgList: t.data.imgList
                }));
            }
        });
    },
    textareaAInput: function(a) {
        this.setData({
            textareaAValue: a.detail.value
        });
    },
    textareaBInput: function(a) {
        this.setData({
            textareaBValue: a.detail.value
        });
    }
});