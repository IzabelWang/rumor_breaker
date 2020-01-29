function e(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function e(e, o) {
        for (var s = 0; s < o.length; s++) {
            var n = o[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(o, s, n) {
        return s && e(o.prototype, s), n && e(o, n), o;
    };
}(), s = require("../dataModule/userModule.js"), n = void 0, t = function() {
    function t() {
        if (e(this, t), n) return n;
        this.isLogin = !1, this.reqeusts = [], n = this;
    }
    return o(t, [ {
        key: "loginWithWX",
        value: function(e) {
            var o = this;
            return this.isLogin ? (e && e.hasOwnProperty("success") && e.success(this.userInfo), 
            void (e && e.hasOwnProperty("complete") && e.complete())) : this.isLoginProgress ? (console.log("登录操作正在进行中，请稍后"), 
            void this.reqeusts.push(e)) : (this.isLoginProgress = !0, this.userInfo = wx.getStorageSync("ds_user_info"), 
            void (this.userInfo && this.userInfo.openId ? (this.isLogin = !0, e && e.hasOwnProperty("success") && e.success(this.userInfo), 
            e && e.hasOwnProperty("complete") && e.complete(), this.isLoginProgress = !1, this.reqeusts.length > 0 && this.loginWithWX(this.reqeusts.shift())) : new Promise(function(e, o) {
                wx.login({
                    timeout: 15e3,
                    success: function(o) {
                        console.log(o), e(o.code);
                    },
                    fail: function(e) {
                        o(e);
                    }
                });
            }).then(function(e) {
                return new Promise(function(s, n) {
                    wx.getUserInfo({
                        withCredentials: !0,
                        success: function(o) {
                            this.userInfo = o.userInfo, s({
                                code: e,
                                encryptedData: o.encryptedData,
                                iv: o.iv
                            });
                        }.bind(o),
                        fail: function(e) {
                            n(e);
                        }
                    });
                });
            }).then(function(n) {
                s.loginWX(n.code, n.encryptedData, n.iv, function(s) {
                    s.data ? (console.log("登录成功", s.data), o.userInfo.openId = s.data.key, wx.setStorageSync("ds_user_info", o.userInfo), 
                    o.isLogin = !0, e && e.hasOwnProperty("success") && e.success(o.userInfo)) : (console.log("登录失败", s.errMsg), 
                    o.isLogin = !1, e && e.hasOwnProperty("fail") && e.fail(s)), e && e.hasOwnProperty("complete") && e.complete(), 
                    o.isLoginProgress = !1, o.reqeusts.length > 0 && o.loginWithWX(o.reqeusts.shift());
                });
            }).catch(function(s) {
                o.isLogin = !1, console.log(s), e && e.hasOwnProperty("fail") && e.fail(s), e && e.hasOwnProperty("complete") && e.complete(), 
                o.isLoginProgress = !1, o.reqeusts.length > 0 && o.loginWithWX(o.reqeusts.shift());
            })));
        }
    }, {
        key: "logout",
        value: function() {
            wx.removeStorageSync("ds_user_info"), this.isLogin = !1, this.isLoginProgress = !1;
        }
    } ], [ {
        key: "logout",
        value: function() {
            n || (n = new t()), n.logout();
        }
    }, {
        key: "isLogin",
        value: function() {
            return n || (n = new t()), n.isLogin;
        }
    }, {
        key: "userInfo",
        value: function() {
            return n || (n = new t()), n.userInfo || wx.getStorageSync("ds_user_info");
        }
    }, {
        key: "checkLoginState",
        value: function(e) {
            n || (n = new t()), n.isLogin ? (e && e.hasOwnProperty("success") && e.success(n.userInfo), 
            e && e.hasOwnProperty("complete") && e.complete()) : wx.getSetting({
                success: function(o) {
                    o.authSetting["scope.userInfo"] ? n.loginWithWX(e) : (console.log("authorize:fail scope unauthorized"), 
                    n.logout(), e && e.hasOwnProperty("fail") && e.fail({
                        code: -11,
                        errMsg: "authorize:fail scope unauthorized"
                    }), e && e.hasOwnProperty("complete") && e.complete());
                }.bind(this),
                fail: function() {
                    wx.showToast({
                        title: "授权失败，请重试",
                        icon: "none"
                    });
                }
            });
        }
    } ]), t;
}();

exports.default = t;