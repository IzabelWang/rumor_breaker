var e = require("@babel/runtime/helpers/interopRequireDefault.js")(require("2A9BA8A51C91398C4CFDC0A241697AF5.js")), r = e.default.CryptoJS.AES.decrypt('{"ct":"GHO6apOwGuigcdGJPYbP1B5AhRfBjxOPm9snP6lten5DyMAzwIGbySl5w8AQSsIFDakjkLnPxbg5XC1UfGq3E0jrj+/LHjren/OojToldxOrRXx4Wq557Mzx+vHkkUrMBdWO2Ft6BTp2mKBaLPzRD1dcPqHLXrwTiRnElMsjEG031IRbxSc6s2U2EpD2Y2WExaxF+jT0I+T9AZt2d37SYmekysYwyCVrje4LoAU8bHa62lSRlvPO0jhLUZJV1/7dQzoeAAENDpihm3eggWOAMXt0b7+rE4oJ8CFmH8u5s1yzTfU0UJh/8GJJSE3WhqS2ilfUQ/6XuiF98i6bJwVPEFm9Ga9Z+fb2vL2U/+v25e0=","iv":"954ae0d65426f8d1bf9c91b4c59430da","s":"3affdbad7bbd5a15"}', "97b529d4e46362def5251939aa7fb352", {
    format: e.default.CryptoJSAesJson
}).toString(e.default.CryptoJS.enc.Utf8);

console.log(JSON.parse(JSON.parse(r))[0], 312);