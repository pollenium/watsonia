"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
exports.priceMultiplierBignumber = (new bignumber_js_1["default"](10)).pow(18);
