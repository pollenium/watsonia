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
var UiNavbarOptionGroup = /** @class */ (function (_super) {
    __extends(UiNavbarOptionGroup, _super);
    function UiNavbarOptionGroup() {
        var _this = _super.call(this) || this;
        _this.uiOptions = [];
        _this.and(hyp_1.then.setStyles(hyp_1.styles.positionRelative), hyp_1.then.append(_this.uiItemsWrapper = new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.nowrap, hyp_1.styles.pad, hyp_1.styles.container, {
            overflowX: 'auto',
            overflowY: 'hidden'
        }))));
        return _this;
    }
    UiNavbarOptionGroup.prototype.addOption = function (uiOptionStruct) {
        var uiOption = new UiOption(this, uiOptionStruct)
            .andIf(this.uiItemsWrapper.element.childElementCount > 0, hyp_1.then.setStyles(hyp_1.styles.padLeft))
            .and(hyp_1.then.appendTo(this.uiItemsWrapper));
        this.uiOptions.push(uiOption);
    };
    UiNavbarOptionGroup.prototype.addOptions = function () {
        var _this = this;
        var uiOptionStructs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uiOptionStructs[_i] = arguments[_i];
        }
        uiOptionStructs.forEach(function (uiOptionStruct) {
            _this.addOption(uiOptionStruct);
        });
    };
    UiNavbarOptionGroup.prototype.addLabel = function (label) {
        this.uiItemsWrapper.and(hyp_1.then.append(new hyp_1.UiSpan().and(hyp_1.then.setText(label))));
    };
    UiNavbarOptionGroup.prototype.selectOptionById = function (id) {
        if (this.uiOptionSelected && this.uiOptionSelected.id !== id) {
            this.uiOptionSelected.setIsSelected(false);
        }
        var uiOptionSelected = this.findUiOptionById(id);
        if (!uiOptionSelected) {
            return;
        }
        uiOptionSelected.setIsSelected(true);
    };
    UiNavbarOptionGroup.prototype.findUiOptionById = function (id) {
        var uiOption = this.uiOptions.find(function (uiOption) {
            return uiOption.id === id;
        });
        if (!uiOption) {
            throw new Error("No UiOption with id \"" + id + "\"");
        }
        return uiOption;
    };
    return UiNavbarOptionGroup;
}(hyp_1.UiDiv));
exports.UiNavbarOptionGroup = UiNavbarOptionGroup;
var UiOption = /** @class */ (function (_super) {
    __extends(UiOption, _super);
    function UiOption(uiOptionGroup, struct) {
        var _this = _super.call(this) || this;
        _this.uiOptionGroup = uiOptionGroup;
        _this.struct = struct;
        if (struct.id) {
            _this.id = struct.id;
        }
        _this.and(hyp_1.then.setStyles(hyp_1.styles.nowrap, hyp_1.styles.cursorPointer), hyp_1.then.setText(struct.text), hyp_1.then.onClick(function () {
            _this.setIsSelected(true);
        }));
        if (struct.isSelected) {
            _this.setIsSelected(true);
        }
        return _this;
    }
    UiOption.prototype.setIsSelected = function (isSelected) {
        if (!isSelected) {
            this.and(hyp_1.then.removeStyles.apply(hyp_1.then, Object.keys(hyp_1.styles.textBright)));
            return;
        }
        this.and(hyp_1.then.setStyles(hyp_1.styles.textBright));
        var uiOptionSelected = this.uiOptionGroup.uiOptionSelected;
        if (uiOptionSelected && uiOptionSelected !== this) {
            uiOptionSelected.setIsSelected(false);
        }
        this.uiOptionGroup.uiOptionSelected = this;
        if (this.struct.onSelect) {
            this.struct.onSelect();
        }
    };
    return UiOption;
}(hyp_1.UiSpan));
