App({
    global: {
        friendsread_url: "https://mp.weixin.qq.com/wxarumor/msg?action=info",
        fontMultiple: 1,
        isGivenPerm: 0
    },
    onLaunch: function() {
        var l = this;
        console.log("font!!!!!"), console.log(l), console.log(l.fontMultiple), wx.getSystemInfo({
            success: function(o) {
                if (o && o.fontSizeSetting) switch (o.fontSizeSetting) {
                  case 17:
                    l.global.fontMultiple = 1.06;
                    break;

                  case 19:
                    l.global.fontMultiple = 1.1;
                    break;

                  case 23:
                    l.global.fontMultiple = 1.4;
                    break;

                  case 26:
                    l.global.fontMultiple = 1.6;
                    break;

                  default:
                    l.global.fontMultiple = 1;
                }
            }
        });
    }
});