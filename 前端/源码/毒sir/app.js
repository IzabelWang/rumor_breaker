function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("./module/DSAccountManager.js")), n = t(require("./module/DSHttpRequestManager.js")), i = t(require("./module/DSDynamicHttpRequestManager.js")), a = t(require("./module/DSFormIdManager.js"));

require("./utils/ald-stat.js"), require("./utils/utils.js");

App({
    dynamicDomain: "https://slb.ajax.dushemovie.com",
    staticDomain: "https://html2.dushemovie.com",
    globalData: {},
    onLaunch: function(t) {
        console.log(t), this.sysInfo = wx.getSystemInfoSync(), console.log(this.sysInfo), 
        this.needShowAdBanner = 1014 == t.scene, wx.removeStorage({
            key: "ds_final_movielist"
        }), wx.removeStorage({
            key: "ds_final_setting"
        }), wx.removeStorage({
            key: "ds_final_setting_string"
        });
    },
    onShow: function() {
        a.default.singleton().enterFrontground();
    },
    onHide: function() {
        a.default.singleton().enterBackground();
    },
    getAppName: function() {
        return "ACTIVITY_SUMMARY".toLowerCase();
    },
    getVersion: function() {
        return "2.0.12";
    },
    sendEvent: function(t, e) {
        getApp().aldstat.sendEvent(t, e);
    },
    collectFormId: function(t, e) {
        a.default.singleton().appendFormId(t);
    },
    checkLoginState: function(t) {
        e.default.checkLoginState(t);
    },
    isLogin: function() {
        return e.default.isLogin();
    },
    userInfo: function() {
        return e.default.userInfo();
    },
    dynamicRequest: function(t, e) {
        this.dynamicHttpManager || (this.dynamicHttpManager = new i.default(this.dynamicDomain, "")), 
        this.dynamicHttpManager.request(t, e);
    },
    staticRequest: function(t, e) {
        this.staticHttpManager || (this.staticHttpManager = new n.default(this.staticDomain, "")), 
        this.staticHttpManager.request(t, e);
    }
});