"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var hyp_1 = require("../hyp");
var Market_1 = require("./Market");
var markets_1 = require("../markets");
var UiMain = /** @class */ (function (_super) {
    __extends(UiMain, _super);
    function UiMain() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyle('overflow-y', 'auto'), hyp_1.then.append(new Market_1.UiMarket(markets_1.markets[0])));
        return _this;
    }
    return UiMain;
}(hyp_1.UiDiv));
exports.UiMain = UiMain;
