var e = require("common.js"), r = getApp(), t = {
    DEFAULT: 0,
    INDEX_DATA_INVALID: 1,
    VIDEO_DATA_INVALID: 2,
    VIDEO_DATA_FAIL: 3
};

module.exports = {
    error_type: t,
    reportMMData: function(t, o) {
        var n = {};
        n.friends_read_ticket = wx.getStorageSync("friends_read_ticket"), n.friends_read_openid = wx.getStorageSync("friends_read_openid"), 
        n.errtype = t, n.errmsg = o, wx.request({
            url: r.global.friendsread_url + "?action=report_mmdata",
            data: e.simpleJson2EncodedStr(n),
            method: "POST",
            success: function(e) {},
            fail: function() {
                console.log("report fail");
            },
            complete: function() {}
        });
    }
};