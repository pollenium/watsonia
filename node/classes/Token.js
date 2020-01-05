"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Emitter_1 = require("./Emitter");
var Price_1 = require("../classes/Price");
var pollenium_buttercup_1 = require("pollenium-buttercup");
var constants_1 = require("../constants");
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var bn_js_1 = __importDefault(require("bn.js"));
var simulatedDenom = pollenium_buttercup_1.Uint256.fromNumber(1);
var Token = /** @class */ (function () {
    function Token(address) {
        this.address = address;
        this.vwapEmitter = new Emitter_1.Emitter;
        /* TODO: remove */
        this.simulatedVwapBignumber = new bignumber_js_1["default"](Math.random() * .95);
        this.simulateVwaps();
    }
    /* TODO: remove */
    Token.prototype.simulateVwaps = function () {
        var _this = this;
        setInterval(function () {
            var halfSpread = Math.random() * 0.01;
            var buyyPriceNumerBn = new bn_js_1["default"](_this.simulatedVwapBignumber
                .minus(halfSpread)
                .times(constants_1.priceMultiplierBignumber)
                .decimalPlaces(0)
                .toString(10));
            var sellPriceNumerBn = new bn_js_1["default"](_this.simulatedVwapBignumber
                .plus(halfSpread)
                .times(constants_1.priceMultiplierBignumber)
                .decimalPlaces(0)
                .toString(10));
            var vwaps = {
                buyy: new Price_1.Price(pollenium_buttercup_1.Uint256.fromBn(buyyPriceNumerBn), simulatedDenom),
                sell: new Price_1.Price(pollenium_buttercup_1.Uint256.fromBn(sellPriceNumerBn), simulatedDenom)
            };
            _this.vwapEmitter.emit(vwaps);
            var step = (Math.random() - .5) * .05;
            var simulatedVwapBignumber = _this.simulatedVwapBignumber.plus(step);
            if (simulatedVwapBignumber.lt(.01)) {
                simulatedVwapBignumber = new bignumber_js_1["default"](.01);
            }
            if (simulatedVwapBignumber.gt(.99)) {
                simulatedVwapBignumber = new bignumber_js_1["default"](.99);
            }
            _this.simulatedVwapBignumber = simulatedVwapBignumber;
        }, 1000);
    };
    return Token;
}());
exports.Token = Token;
