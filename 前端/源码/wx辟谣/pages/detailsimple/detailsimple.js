var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../common.js"), i = (require("../report.js"), require("../../libs/request")), a = getApp(), s = a.global.debug;

Page({
    data: {
        windowHeight: a.global.windowHeight,
        scrollTop: 0,
        getRelateArticleTime: 0,
        msg: {},
        biz_info: {},
        getJsonSucc: !0,
        renderJsonSucc: !1,
        debug: "",
        listData: [],
        del_flag: 0,
        enum: {
            MAIN_BODY: 0,
            PHOTO: 1,
            VIDEO: 2,
            AUDIO: 3
        },
        r_detail_source_degree: 0,
        mode: 1,
        fontMultiple: a.global.fontMultiple
    },
    report: {
        url: "",
        title: "",
        start: 0,
        end: 0,
        screenHeight: 0,
        screenWidth: 0,
        imgCnt: 0,
        videoCnt: 0,
        publishTime: 0,
        friends_read_ticket: "",
        friends_read_openid: "",
        frompage: ""
    },
    audioCtx: {},
    videoCtx: {},
    onShareAppMessage: function() {
        var t = "/pages/detailsimple/detailsimple?bizuin=" + this.bizuin + "&msgid=" + this.msgid + "&idx=" + this.idx;
        return console.log("分享文章", t), {
            title: this.data.msg.title,
            desc: "分享文章",
            path: t
        };
    },
    article_encoded_url: "",
    isCollect: !1,
    onLoad: function(t) {
        this.bizuin = t.bizuin, this.msgid = t.msgid, this.idx = t.idx, console.log("onload parameters", t), 
        s && console.time("onLoad");
        var i = getApp(), a = this;
        if (this.report.frompage = t.frompage, console.log("frompage", t.frompage), t.frompage && "recommend" === t.frompage && (this.report.extend = decodeURIComponent(t.extend), 
        this.report.sessionid = t.sessionid, this.report.seq = t.seq), t.frompage && t.pageidx && t.articleidx && "collection" == t.frompage) {
            var o = {};
            o.aidx = parseInt(t.articleidx), o.pidx = parseInt(t.pageidx), o.cancel = !1, a.setData({
                collection_info: o
            });
        }
        var n = e.getModeFromStorage();
        a.setData({
            mode: n
        }), console.log("mode", n);
        this.setData({
            loginSucc: !0
        }), this.getJson(i.global.friendsread_url), console.log("detail?url=" + this.url), 
        console.timeEnd("onLoad");
    },
    onShow: function(t) {
        this.setData({
            ratio: e.getFontSizeRatio()
        });
    },
    onReady: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.data.windowHeight = e.windowHeight, t.data.windowWidth = e.windowWidth, console.log("windowHeight:" + t.data.windowHeight), 
                t.setData({
                    windowHeight: t.data.windowHeight
                });
            }
        });
        var i = Date.now();
        console.log("onReady called: " + i), console.log("Loading time: " + (i - this.report.start) + "ms"), 
        this.data.request = this.gotJson - this.report.start, this.data.render = i - this.gotJson, 
        console.log("request=" + this.data.request + ";render=" + this.data.render);
        var a = this.report.url.match(/__biz=([^&]+)/);
        a && (console.log("set bizcode", a[1]), this.setData({
            __biz: encodeURIComponent(a[1])
        }));
        var s = e.urlToUniqueStr(this.report.url);
        s || console.log("err: urlToUniqueStr fail. url: ", this.report.url), wx.getStorage({
            key: "read_status_detailsimple",
            success: function(e) {
                console.log("read_status_detailsimple", e.data[s] || 0), console.log("read_status_detailsimple", e.data.expired), 
                e.data.expired >= i && t.setData({
                    scrollTop: e.data[s] || 0
                });
            }
        });
    },
    onUnload: function() {},
    getJson: function(e) {
        s && console.time("getJson"), console.log("getJson called " + e);
        var a = this;
        wx.showNavigationBarLoading(), i({
            url: e,
            data: {
                bizuin: this.bizuin,
                msgid: this.msgid,
                idx: this.idx
            },
            success: function(i) {
                console.log("getJson success"), i.detail && i.detail.title ? (a.msg = i.detail, 
                a.setData({
                    del_flag: i.del_flag || "0"
                }), wx.setNavigationBarTitle({
                    title: 1 == i.is_rumor ? "谣言文章" : i.detail.source_name,
                    success: function() {
                        console.log("set navigationbar title succeed");
                    },
                    fail: function() {
                        console.log("set navigationbar title failed");
                    }
                }), "object" !== t(a.msg.list) && (a.msg.list = JSON.parse(a.msg.list)), console.log(a.msg.list), 
                a.procMsg()) : a.setData({
                    del_flag: i.del_flag || "0",
                    msg: i.detail,
                    url: e,
                    getJsonSucc: !1
                });
            },
            fail: function() {
                console.log("getJson failed"), a.setData({
                    getJsonSucc: !1
                });
            },
            complete: function() {
                console.log("getJson completed " + Date.now()), a.gotJson = Date.now(), wx.hideNavigationBarLoading(), 
                console.timeEnd("getJson");
            }
        });
    },
    timeToString: function(t) {
        var e = new Date(1e3 * t);
        return new Date().getFullYear() != e.getFullYear() ? e.getFullYear() + "年" + (e.getMonth() + 1) + "月" + e.getDate() + "日" : e.getMonth() + 1 + "月" + e.getDate() + "日";
    },
    procMsg: function() {
        s && console.time("procMsg"), console.log("procMsg called"), this.msgProcessed = !1, 
        this.videoNum = 0, this.videoProcessed = 0, this.procMeta(this.msg), s && console.time("traverse"), 
        this.traverse(this.msg.list, null), console.log("!!!!!", this.msg.list), s && console.timeEnd("traverse"), 
        this.handleInline(this.data.listData), console.log("after handleInline", this.data.listData), 
        this.msgProcessed = !0, s && console.timeEnd("procMsg"), this.showMsg();
    },
    handleInline: function(t) {
        for (var e = new Array(), i = 0; i < t.length; i++) if (t[i].type == this.data.enum.MAIN_BODY) {
            for (var a = {
                type: this.data.enum.MAIN_BODY,
                list: []
            }, s = i; s < t.length && 1 == t[s].is_inline && t[s].type == this.data.enum.MAIN_BODY; ) {
                a.list.push(t[s]);
                for (var o in t[s]) {
                    n = t[s][o];
                    o in a ? "string" == typeof a[o] ? (a[o] += a[o].length > 0 ? " " : "", a[o] += n) : a[o] = n : "content" == o || "type" == o || "href" == o || "encode_href" == o || "data_ue_src" == o || (a[o] = n);
                }
                s++;
            }
            if (t[s] && 0 == t[s].is_inline && t[s].type == this.data.enum.MAIN_BODY) {
                a.list.push(t[s]);
                for (var o in t[s]) {
                    var n = t[s][o];
                    o in a ? "string" == typeof a[o] ? (a[o] += a[o].length > 0 ? " " : "", a[o] += n) : a[o] = n : "content" == o || "type" == o || "href" == o || "encode_href" == o || "data_ue_src" == o || (a[o] = n);
                }
                s++;
            }
            if (i = s - 1, 0 === a.list.length) continue;
            if (1 === a.list.length && 1 === a.list[0].content.length) {
                var r = a.list[0].content[0];
                if ("" == r.content.trim() || 0 == r.content.trim().length) continue;
                if (" " == r.content) continue;
                if (0 == this.ltrim(r.content).length) continue;
            }
            e.push(a);
        } else e.push(t[i]);
        delete this.data.listData, this.data.listData = e;
        for (i = 0; i < this.data.listData.length; i++) this.data.listData[i].type == this.data.enum.VIDEO ? this.handleVideo(this.data.listData[i], i) : this.data.listData[i].type == this.data.enum.AUDIO && (this.data.listData[i].audioid = "audio-" + i, 
        this.data.listData[i].currentTime = this.timestampToStr(parseInt(this.data.listData[i].play_length) / 1e3), 
        this.data.listData[i].isPlay = !1, this.audioCtx[this.data.listData[i].audioid] = {
            ctx: {},
            ext: {
                index: i,
                currentTime: this.timestampToStr(parseInt(this.data.listData[i].play_length) / 1e3),
                isPlay: !1
            }
        });
    },
    showMsg: function() {
        console.log("showMsg!"), s && console.time("showMsg");
        var t = 0;
        0 == this.report.videoCnt && (t = 1), this.msgProcessed ? (this.setData({
            msg: this.msg,
            getJsonSucc: !0,
            debug: "debug"
        }), this.setData({
            listData: this.data.listData,
            useScrollView: t
        }), this.setData({
            renderJsonSucc: !0
        })) : console.log("showMsg error.", this.msgProcessed, this.videoNum, this.videoProcessed), 
        this.handleAudioCtx(), s && console.timeEnd("showMsg");
    },
    procMeta: function(t) {
        if (t.create_time) {
            var e = new Date(1e3 * t.create_time);
            t.pubtime = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate(), t.time = " · " + this.timeToString(t.create_time);
        }
        if (t.audit_stat) switch (t.audit_stat) {
          case 11:
          case 100:
            t.copyright = "原创";
            break;

          case 12:
          case 101:
          case 201:
            t.copyright = "转载";
        }
    },
    handleAudioCtx: function() {
        console.log("handleAudioCtx", this.audioCtx);
        for (var t in this.audioCtx) try {
            this.audioCtx[t].ctx = wx.createAudioContext(t);
        } catch (t) {
            console.log("handleAudioCtx", t);
        }
    },
    ctrlSound: function(t) {
        console.log(t);
        var i = t.currentTarget.dataset.id;
        i in this.audioCtx || (console.log("err: id not in this.audioCtx.", i, this.audioCtx), 
        this.audioCtx[i] = wx.createAudioContext(i));
        var a = this.audioCtx[i], s = a.ctx;
        a.ext.isPlay ? s.pause() : s.play(), a.ext.isPlay = !a.ext.isPlay;
        var o = e.genArrayKey("listData", a.ext.index), n = {};
        n[o += ".isPlay"] = a.ext.isPlay, this.setData(n);
    },
    updateAudio: function(t) {
        var i = t.currentTarget.dataset.id;
        i in this.audioCtx || (console.log("err: id not in this.audioCtx.", i, this.audioCtx), 
        this.audioCtx[i] = wx.createAudioContext(i));
        var a = this.audioCtx[i];
        a.ext.currentTime = this.timestampToStr(parseInt(t.detail.currentTime));
        var s = {}, o = e.genArrayKey("listData", a.ext.index);
        s[o += ".currentTime"] = a.ext.currentTime, this.setData(s);
    },
    timestampToStr: function(t) {
        var e = parseInt(t), i = parseInt(e / 3600);
        e %= 3600;
        var a = parseInt(e / 60), s = parseInt(e % 60);
        return (i > 0 ? i + ":" : "") + a + ":" + (s < 10 ? "0" : "") + s;
    },
    isInline: function(t) {
        var e = -1 !== [ "b", "big", "i", "small", "tt", "abbr", "acronym", "cite", "code", "dfn", "em", "kbd", "strong", "samp", "var", "a", "bdo", "img", "map", "object", "q", "script", "span", "sub", "sup", "button", "input", "label", "select", "textarea", "text" ].indexOf(t.tag);
        return "display" in t.attr.style && (e = e || -1 !== t.attr.style.display.indexOf("inline")), 
        e;
    },
    decodeHTMLEntity: function(t) {
        var e = "";
        return t && t.length && (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = t.replace(/&nbsp;/g, " ")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&quot;/g, '"')).replace(/&apos;/g, "'")).replace(/&#39;/g, "'")).replace(/&amp;/g, "&")).replace(/\\n/g, "\n")).replace(/\\t/g, "\t")).replace(/\\r/g, "\r")), 
        e;
    },
    decodeValue: function(t) {
        t.value && (t.value = this.decodeHTMLEntity(t.value));
    },
    ltrim: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " 　";
        for (var i in t) if (-1 === e.indexOf(t[i])) return t.substr(i);
        return t;
    },
    traverse: function(t, i) {
        var a = t.length;
        console.log("in traverse", this.msg);
        for (var s in t) {
            var o = t[s];
            if (void 0 != o.href && (o.href = this.decodeHTMLEntity(o.href), e.isMpUrl && !e.isMpUrl(o.href) ? o.href = void 0 : o.encode_href = encodeURIComponent(o.href)), 
            o.type == this.data.enum.PHOTO) {
                parseFloat(o.width);
                o.width = "80%", o.height = "inherit", this.data.listData.push(o);
            } else if (o.type == this.data.enum.MAIN_BODY) o.content = this.decodeHTMLEntity(o.content), 
            this.data.listData.length > 0 && (t[s - 1].type != this.data.enum.PHOTO && t[s - 1].type != this.data.enum.AUDIO && t[s - 1].type != this.data.enum.VIDEO || (o.marginMore = "main-body_pt")), 
            s == a - 1 && (o.marginMore ? o.marginBottom += " main-body_last" : o.marginBottom = "main-body_last"), 
            o.content = e.splitSentenceToVec(o.content), this.data.listData.push(o); else if (o.type == this.data.enum.AUDIO) {
                o.music_name ? (o.name = o.music_name, o.author = o.singer, o.poster = "https://imgcache.qq.com/music/photo/mid_album_68" + o.albumurl, 
                o.src = o.audiourl, o.isVoice = !1) : (o.poster = "data:image/png;base64,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", 
                o.src = "http://res.wx.qq.com/voice/getvoice?mediaid=" + o.voice_encode_fileid, 
                o.author = "来自" + this.msg.source_name, o.isVoice = !0), o.name = this.decodeHTMLEntity(decodeURIComponent(o.name)), 
                o.author = this.decodeHTMLEntity(decodeURIComponent(o.author));
                this.data.listData.length;
                s == a - 1 && (o.marginMore ? o.marginMore += " fake-audio_last" : o.marginMore = "fake-audio_last"), 
                this.data.listData.push(o);
            } else if (o.type == this.data.enum.VIDEO) {
                if (o["data-src"] && o["data-src"].match(/appmsgvote/)) return;
                this.videoNum++, this.report.videoCnt++;
                this.data.listData.length;
                s == a - 1 && (o.marginMore ? o.marginMore += " video_last" : o.marginMore = "video_last"), 
                this.data.listData.push(o);
            } else this.data.listData.push(o);
        }
    },
    handleVideo: function(t, e) {
        if (t.class && t.class.match(/video_small_iframe/)) t.src = t["video-src"]; else if (t.class && t.class.match(/video_iframe/) || t["data-src"] && t["data-src"].match(/v\.qq\.com/) || t.src && t.src.match(/v\.qq\.com/)) {
            var i = t["data-src"] ? t["data-src"] : t.src;
            if (i) {
                var a = this, s = "", o = i.match(/vid=([0-9a-zA-Z]*)/);
                o && (s = o[1]);
                var n = t.CKey;
                console.log("vid=" + s), console.log("ckey=" + n), wx.request({
                    raw: !0,
                    url: "https://h5vv.video.qq.com/getvinfo",
                    data: {
                        vid: s,
                        dtype: 1,
                        otype: "json",
                        callback: "data",
                        appVer: 1,
                        encryptVer: 6.3,
                        platform: 61001,
                        cKey: n,
                        stdfrom: "v3060",
                        device: 60401
                    },
                    success: function(i) {
                        console.log("getVideo success");
                        var s = JSON.parse(i.data.slice(5, -1));
                        console.log(s);
                        var o = {}, n = "listData[" + e + "]";
                        if (!s.em) {
                            var r = s.vl.vi[0], l = r.ul.ui[0].url + r.fn + "?vkey=" + r.fvkey + "&br=" + r.br + "&fmt=auto&level=" + r.level;
                            console.log(l), t.src = l, o[n] = t, a.setData(o);
                        }
                    }
                });
            }
        }
    },
    upper: function(t) {},
    lower: function(t) {},
    scroll: function(t) {
        var i = e.urlToUniqueStr(this.report.url);
        if (i) {
            var a = {};
            a[i] = t.detail.scrollTop, a.expired = Date.now() + 3e5, wx.setStorage({
                key: "read_status_detailsimple",
                data: a
            });
        } else console.log("err: urlToUniqueStr fail. url: ", this.report.url);
    }
});