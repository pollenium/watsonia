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
var NavbarOptionGroup_1 = require("./NavbarOptionGroup");
var markets_1 = require("../markets");
var UiNavbarMarkets = /** @class */ (function (_super) {
    __extends(UiNavbarMarkets, _super);
    function UiNavbarMarkets() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.bgMedium));
        markets_1.markets.forEach(function (market) {
            _this.addOption({
                text: market.name,
                isSelected: market.id === 0
            });
        });
        return _this;
    }
    return UiNavbarMarkets;
}(NavbarOptionGroup_1.UiNavbarOptionGroup));
exports.UiNavbarMarkets = UiNavbarMarkets;
