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
var boot_1 = require("../boot");
var UiSpinner = /** @class */ (function (_super) {
    __extends(UiSpinner, _super);
    function UiSpinner() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.addClasses('spinner-border', "spinner-border-" + boot_1.BootSize.SM));
        return _this;
    }
    return UiSpinner;
}(hyp_1.UiSpan));
exports.UiSpinner = UiSpinner;
