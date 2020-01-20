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
var SpacerSmall_1 = require("./SpacerSmall");
var Blurb_1 = require("./Blurb");
var UiFormGroup = /** @class */ (function (_super) {
    __extends(UiFormGroup, _super);
    function UiFormGroup(struct) {
        var _this = _super.call(this) || this;
        _this.struct = struct;
        _this.isTouched = false;
        if (struct.labelText) {
            _this.and(hyp_1.then.append(new hyp_1.UiLabel().and(hyp_1.then.setText(struct.labelText))));
        }
        _this.and(hyp_1.then.append(_this.uiFormControlWrapper = new hyp_1.UiDiv(), _this.uiErrorsWrapper = new hyp_1.UiDiv()));
        if (struct.uiFormControl) {
            _this.setUiFormControl(struct.uiFormControl);
        }
        if (struct.helperText) {
            _this.and(hyp_1.then.append(new SpacerSmall_1.UiSpacerSmall, new Blurb_1.UiBlurb({
                linearIconClassName: 'bubble',
                text: struct.helperText
            }).and(hyp_1.then.setStyles(hyp_1.styles.textMuted))));
        }
        return _this;
    }
    UiFormGroup.prototype.setUiFormControl = function (uiFormControl) {
        var _this = this;
        this.uiFormControlWrapper.and(hyp_1.then.empty, hyp_1.then.append(uiFormControl));
        uiFormControl.valueSnowdrop.addHandle(function (value) {
            _this.isTouched = true;
        });
    };
    UiFormGroup.prototype.setErrorMessages = function (isBypassTouchRequirement, errorMessages) {
        var _this = this;
        this.uiErrorsWrapper.and(hyp_1.then.empty);
        if (errorMessages.length === 0) {
            return;
        }
        if (!isBypassTouchRequirement && !this.isTouched) {
            return;
        }
        errorMessages.forEach(function (errorMessage, index) {
            _this.uiErrorsWrapper.and(hyp_1.then.append(new SpacerSmall_1.UiSpacerSmall, new Blurb_1.UiBlurb({
                text: errorMessage,
                linearIconClassName: 'warning'
            }).and(hyp_1.then.setStyles({
                color: '#cc0000'
            }))));
        });
    };
    UiFormGroup.prototype.clearErrorMessages = function () {
        this.uiErrorsWrapper.and(hyp_1.then.empty);
    };
    return UiFormGroup;
}(hyp_1.UiDiv));
exports.UiFormGroup = UiFormGroup;
