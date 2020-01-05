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
var FormControl_1 = require("./FormControl");
var UiFormControlText = /** @class */ (function (_super) {
    __extends(UiFormControlText, _super);
    function UiFormControlText() {
        var _this = _super.call(this) || this;
        _this.isVisible = false;
        var uiInput = new hyp_1.UiInput().and(hyp_1.then.setAttribute('type', 'text'));
        _this.setUiView(uiInput);
        _this.setUiInput(uiInput);
        return _this;
    }
    return UiFormControlText;
}(FormControl_1.UiFormControl));
exports.UiFormControlText = UiFormControlText;
