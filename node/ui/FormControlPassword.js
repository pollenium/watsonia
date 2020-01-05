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
var LinearIcon_1 = require("./LinearIcon");
var UiFormControlPassword = /** @class */ (function (_super) {
    __extends(UiFormControlPassword, _super);
    function UiFormControlPassword() {
        var _this = _super.call(this) || this;
        _this.isVisible = false;
        var uiInput = new hyp_1.UiInput().and(hyp_1.then.setAttribute('type', 'password'));
        _this.setUiView(uiInput);
        _this.setUiInput(uiInput);
        _this.setUiPrepend(new LinearIcon_1.UiLinearIcon('lock'));
        _this.setUiAppend(new LinearIcon_1.UiLinearIcon(_this.getLinearIconClassName()).and(hyp_1.then.setStyles(hyp_1.styles.cursorPointer), function (uiLinearIcon) {
            uiLinearIcon.and(hyp_1.then.onClick(function () {
                _this.isVisible = !_this.isVisible;
                uiLinearIcon.setClassName(_this.getLinearIconClassName());
                uiInput.and(hyp_1.then.setAttribute('type', _this.isVisible ? 'text' : 'password'));
            }));
        }));
        return _this;
    }
    UiFormControlPassword.prototype.getLinearIconClassName = function () {
        return this.isVisible ? 'eye' : 'eye-crossed';
    };
    return UiFormControlPassword;
}(FormControl_1.UiFormControl));
exports.UiFormControlPassword = UiFormControlPassword;
