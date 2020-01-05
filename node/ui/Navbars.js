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
var NavbarPrimary_1 = require("./NavbarPrimary");
var NavbarMarkets_1 = require("./NavbarMarkets");
var UiNavbars = /** @class */ (function (_super) {
    __extends(UiNavbars, _super);
    function UiNavbars() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.positionRelative), hyp_1.then.append(new NavbarPrimary_1.UiNavbarPrimary, new NavbarMarkets_1.UiNavbarMarkets, new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.positionAbsolute, hyp_1.styles.shadow, {
            bottom: '0',
            left: '-4px',
            right: '-4px',
            height: '12px'
        }))));
        return _this;
    }
    return UiNavbars;
}(hyp_1.UiDiv));
exports.UiNavbars = UiNavbars;
