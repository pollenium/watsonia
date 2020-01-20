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
var pollenium_snowdrop_1 = require("pollenium-snowdrop");
var colorDefault = '#666';
var colorFocus = 'white';
var UiFormControl = /** @class */ (function (_super) {
    __extends(UiFormControl, _super);
    function UiFormControl() {
        var _this = _super.call(this) || this;
        _this.valueSnowdrop = new pollenium_snowdrop_1.Snowdrop();
        _this.and(hyp_1.then.setStyles(hyp_1.styles.fullWidth, hyp_1.styles.transitionAll, hyp_1.styles.flexColumns, {
            borderBottom: "1px solid " + colorDefault
        }), hyp_1.then.append(_this.uiPrependWrapper = new hyp_1.UiDiv().and(hyp_1.then.setIsHidden(true), hyp_1.then.setStyles({
            padding: '8px 8px 8px 0'
        })), _this.uiViewWrapper = new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.flexGrow)), _this.uiAppendWrapper = new hyp_1.UiDiv().and(hyp_1.then.setIsHidden(true), hyp_1.then.setStyles({
            padding: '8px 8px 8px 0'
        }))));
        return _this;
    }
    UiFormControl.prototype.setValue = function (value) {
        this.uiInput.element.value = value;
        this.valueSnowdrop.emit(value);
    };
    UiFormControl.prototype.setUiInput = function (uiInput) {
        var _this = this;
        this.uiInput = uiInput;
        uiInput.and(hyp_1.then.onDom('input', function () {
            _this.valueSnowdrop.emit(uiInput.element.value);
        }), hyp_1.then.setStyles(hyp_1.styles.transitionAll, {
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: 'inherit',
            outline: 'none',
            fontFamily: 'alphanum20',
            padding: '8px 0',
            borderRadius: '0',
            width: '100%',
            color: colorDefault,
            borderColor: colorDefault
        }), hyp_1.then.onDom('focus', function () {
            _this.and(hyp_1.then.setStyles({
                color: colorFocus,
                borderColor: colorFocus
            }));
            uiInput.and(hyp_1.then.setStyles({ color: colorFocus }));
        }), hyp_1.then.onDom('focusout', function () {
            _this.and(hyp_1.then.setStyles({
                color: colorDefault,
                borderColor: colorDefault
            }));
            uiInput.and(hyp_1.then.setStyles({ color: colorDefault }));
        }));
    };
    UiFormControl.prototype.setUiView = function (uiView) {
        this.uiViewWrapper.and(hyp_1.then.empty, hyp_1.then.append(uiView));
    };
    UiFormControl.prototype.setUiPrepend = function (uiPrepend) {
        this.uiPrependWrapper.and(hyp_1.then.empty, hyp_1.then.append(uiPrepend), hyp_1.then.setIsHidden(false));
    };
    UiFormControl.prototype.setUiAppend = function (uiAppend) {
        this.uiAppendWrapper.and(hyp_1.then.empty, hyp_1.then.append(uiAppend), hyp_1.then.setIsHidden(false));
    };
    return UiFormControl;
}(hyp_1.UiDiv));
exports.UiFormControl = UiFormControl;
