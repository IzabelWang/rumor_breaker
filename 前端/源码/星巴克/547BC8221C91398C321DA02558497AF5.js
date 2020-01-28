Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t, c, a, o = "wx7c4b1a9654cc4e72" == (wx.getAccountInfoSync ? wx.getAccountInfoSync().miniProgram.appId : "wx7c4b1a9654cc4e72") ? "prod" : "dev";

"prod" == o ? (e = "https://api.egifting.starbucks.com.cn", t = "https://egifting.starbucks.com.cn", 
c = "https://upload.e.verystar.net", a = "https://egifting.starbucks.com.cn") : (e = "https://stg.api.egifting.starbucks.com.cn", 
t = "https://stg.egifting.starbucks.com.cn", c = "https://upload.e.verystar.net", 
a = "https://stg.egifting.starbucks.com.cn");

var r = {
    CRYPTO_SECRET: "97b529d4e46362def5251939aa7fb352",
    H5_REG_URL: "prod" == o ? "https://wx.starbucks.com.cn/svc-onramp?" : "https://onramp-staging-sbux.wiredcraft.cn/svc-onramp?",
    PROMOTION_H5: "prod" == o ? "https://www.starbucks.com.cn/cmsh5/coupon/" : "https://www.starbucks.com.cn/cmsh5-stg/coupon/",
    GET_USER_TICKET: e + "/Wechat/member/getuserticket",
    DECRYPT_USER_DATA: e + "/Wechat/member/decryptUserData",
    FORM_ADD: e + "/v1/form/add",
    FORM_LOG: e + "/v1/form/log",
    CREATE_GIFT_ORDER: e + "/wechat/order/creategiftorder",
    INDEX: e + "/Wechat/index/index",
    CARD_SHOW: e + "/Wechat/card/show",
    CARD_CODE: e + "/Wechat/card/code",
    THEME_SHOW: e + "/Wechat/theme/show",
    ORDER_PRECREATE: e + "/Wechat/order/precreate",
    ORDER_LIST: e + "/Wechat/order/list",
    ORDER_DETAIL: e + "/Wechat/order/orderdetail",
    NEARBY_LIST: e + "/Wechat/poi/nearbylist",
    NEW_INVOICE: e + "/Wechat/invoice/newinvoice",
    INVOICE_INFO: e + "/Wechat/invoice/invoiceinfo",
    ORDER_GET_CODE: e + "/Wechat/order/getcode",
    LOG_ADD_CARD: e + "/Wechat/order/logaddcard",
    CASH_VOUCHER: t + "/Coupon/miniShow",
    ADD_NEW_INVOICE: e + "/Wechat/invoice/addnewinvoice",
    REFUND_APPLY: e + "/Wechat/Refund/refundApply",
    REFUND_ADD: e + "/Wechat/Refund/refundAdd",
    REFUND_FRIEND: e + "/Wechat/Refund/refundFriend",
    REFUND_CONFIRM: e + "/Wechat/Refund/refundConfirm",
    REFUND_CODELIST: e + "/Wechat/Refund/codeList",
    OLD_COUPON_TEXT: t + "/Wechat/coupon/text",
    COUPON_TEXT: t + "/Coupon201807/text",
    OLD_MARKETINGCOUPON_MINI_SHOW: t + "/Coupon/miniShow",
    MARKETINGCOUPON_MINI_SHOW: t + "/Coupon201807/miniShow",
    COVER_SAVE: c + "/v1/wechat/uploadimg",
    SEND_COUPON: t + "/Coupon201808/send",
    GET_IMAGE: e + "/Wechat/cover/getimage",
    GET_SHARE_IMAGE: e + "/wechat/share/getshareimage",
    LAST_UNGIFTING: e + "/wechat/order/lastungiftingorder",
    GET_FAVORITE_LIST: e + "/wechat/cover/getFavoriteCoverInfo",
    ADD_FAVORITE: e + "/wechat/cover/addFavoriteCover",
    UPDATE_FAVORITE: e + "/wechat/cover/updateFavoriteCover",
    GET_USER_DATA: e + "/wechat/member/getuserdata",
    CHECK_TEXT: e + "/wechat/check/checktext",
    GET_SUBSCRIBE_TEMPLATE_LIST: e + "/wechat/subscribe/getSubscribeTemplateList",
    SEND_VS_COUPON: e + "/wechat/activity/sendcoupon",
    SEND_THOUSAND_COUPON: e + "/wechat/activity/sendthousandcoupon",
    TEMPLATE_ACTIVITY_CONFIG: e + "/wechat/activity/getTemplateActivityConfig",
    GET_SHARER_INFO: a + "/activity/christmas/getSharerInfo"
};

exports.default = r;