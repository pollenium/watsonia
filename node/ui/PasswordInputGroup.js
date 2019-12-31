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
var Icon_1 = require("./Icon");
var FormControl_1 = require("./FormControl");
var UiPasswordInputGroup = /** @class */ (function (_super) {
    __extends(UiPasswordInputGroup, _super);
    function UiPasswordInputGroup() {
        var _this = _super.call(this) || this;
        _this.isPasswordVisible = false;
        _this.and(hyp_1.then.addClasses('input-group'));
        _this.and(hyp_1.then.append(_this.uiFormControl = new FormControl_1.UiFormControl().and(hyp_1.then.setAttribute('type', 'password'))));
        _this.and(hyp_1.then.append(new hyp_1.UiDiv()
            .and(hyp_1.then.addClasses('input-group-append'))
            .and(hyp_1.then.setStyle('cursor', 'pointer'))
            .and(hyp_1.then.append(new hyp_1.UiSpan()
            .and(hyp_1.then.addClasses('input-group-text'))
            .and(hyp_1.then.append(_this.uiIcon = new Icon_1.UiIcon().and(hyp_1.then.addClasses('fas', 'fa-eye'))))
            .and(function (uiSpan) {
            uiSpan.element.addEventListener('click', _this.toggleIsPasswordVisible.bind(_this));
        })))));
        return _this;
    }
    UiPasswordInputGroup.prototype.toggleIsPasswordVisible = function () {
        this.isPasswordVisible = !this.isPasswordVisible;
        if (this.isPasswordVisible) {
            this.uiIcon
                .and(hyp_1.then.removeClasses('fa-eye'))
                .and(hyp_1.then.addClasses('fa-eye-slash'));
            this.uiFormControl.and(hyp_1.then.setAttribute('type', 'text'));
        }
        else {
            this.uiIcon
                .and(hyp_1.then.removeClasses('fa-eye-slash'))
                .and(hyp_1.then.addClasses('fa-eye'));
            this.uiFormControl.and(hyp_1.then.setAttribute('type', 'password'));
        }
    };
    return UiPasswordInputGroup;
}(hyp_1.UiDiv));
exports.UiPasswordInputGroup = UiPasswordInputGroup;
