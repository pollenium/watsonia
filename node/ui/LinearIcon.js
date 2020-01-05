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
var UiLinearIcon = /** @class */ (function (_super) {
    __extends(UiLinearIcon, _super);
    function UiLinearIcon(className) {
        var _this = _super.call(this, 'span') || this;
        _this.and(hyp_1.then.addClasses('lnr'));
        _this.setClassName(className);
        return _this;
    }
    UiLinearIcon.prototype.setClassName = function (className) {
        if (this.className) {
            this.and(hyp_1.then.removeClasses("lnr-" + this.className));
        }
        this.className = className;
        this.and(hyp_1.then.addClasses("lnr-" + className));
    };
    return UiLinearIcon;
}(hyp_1.Ui));
exports.UiLinearIcon = UiLinearIcon;
