"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var constants_1 = require("../constants");
var Price = /** @class */ (function () {
    function Price(priceNumer, priceDenom) {
        this.priceNumer = priceNumer;
        this.priceDenom = priceDenom;
    }
    Price.prototype.getPriceBignumber = function () {
        var priceNumerBignumber = new bignumber_js_1["default"](this.priceNumer.getBn().toString(10));
        var priceDenomBignumber = new bignumber_js_1["default"](this.priceDenom.getBn().toString(10));
        this.priceBignumber = priceNumerBignumber.div(priceDenomBignumber);
        return this.priceBignumber;
    };
    Price.prototype.getPretty = function () {
        var priceBignumber = this.getPriceBignumber();
        return priceBignumber.div(constants_1.priceMultiplierBignumber).times(100).toFixed(2);
    };
    return Price;
}());
exports.Price = Price;
