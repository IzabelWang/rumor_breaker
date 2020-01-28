var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = (e(require("../../../547BC8221C91398C321DA02558497AF5.js")), 
e(require("../../../4445B0631C91398C2223D86471997AF5.js")), e(require("vs-logger"))), t = getApp();

Page(a.default.Page({
    data: {},
    onLoad: function(e) {
        console.log(e);
        t.doTracking("actPv", JSON.stringify({
            page_path: "/pages/diy/rule",
            channel: t.globalData.channel,
            scene: t.globalData.sceneId
        }), Math.floor(Date.now() / 1e3));
    },
    onHide: function() {
        t.doTracking("actHang", JSON.stringify({
            page_path: "/pages/diy/rule"
        }), Math.floor(Date.now() / 1e3));
    },
    onShareAppMessage: function() {
        return t.doTracking("actShare", JSON.stringify({
            page_path: "/pages/diy"
        }), Math.floor(Date.now() / 1e3)), {
            title: "定制星意卡，收获七夕惊喜",
            path: "/pages/diy/diy?theme_id=".concat(t.globalData.theme_id, "&scene=").concat(t.globalData.sceneId),
            imageUrl: "https://static-cdn.verystar.net/front/starbucks/weapp-starbucks-wsg3.0/share.jpeg"
        };
    }
}));