var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../module/DSHttpRequest.js"));

module.exports = {
    loginWX: function(t, a, u, d) {
        getApp().dynamicRequest(new e.default("WechatApp/QuickLogin", {
            code: t,
            encryptedData: a,
            iv: u,
            appName: getApp().getAppName()
        }), function(e) {
            var t = {
                code: e.code
            };
            1 == e.code ? t.data = e.data : t.errMsg = t.msg ? t.msg : "数据错误", d && d(t);
        });
    }
};