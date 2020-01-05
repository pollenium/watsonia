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
var LinearIcon_1 = require("./LinearIcon");
var UiBtn = /** @class */ (function (_super) {
    __extends(UiBtn, _super);
    function UiBtn(struct) {
        var _this = _super.call(this) || this;
        _this.isHovered = false;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.transitionAll, {
            fontFamily: 'inherit',
            fontSize: 'inherit',
            padding: '8px',
            outline: 'none'
        }));
        if (struct.linearIconClassName) {
            _this.and(hyp_1.then.append(new LinearIcon_1.UiLinearIcon(struct.linearIconClassName).and(hyp_1.then.setStyles(hyp_1.styles.padSmallRight))));
        }
        _this.and(hyp_1.then.append(new hyp_1.UiSpan().and(hyp_1.then.setText(struct.text))));
        _this.setIsDisabled(struct.isDisabled || false);
        _this.and(hyp_1.then.onDom('mouseover', function () {
            _this.isHovered = true;
            _this.updateStyles();
        }));
        _this.and(hyp_1.then.onDom('mouseout', function () {
            _this.isHovered = false;
            _this.updateStyles();
        }));
        return _this;
    }
    UiBtn.prototype.setIsDisabled = function (isDisabled) {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.and(hyp_1.then.setAttribute('disabled', 'true'));
        }
        else {
            this.and(hyp_1.then.removeAttributes('disabled'));
        }
        this.updateStyles();
    };
    UiBtn.prototype.updateStyles = function () {
        this.and(hyp_1.then.setStyles.apply(hyp_1.then, this.getStyleStructs()));
    };
    UiBtn.prototype.getStyleStructs = function () {
        if (this.isDisabled) {
            return [
                hyp_1.styles.cursorDisabled,
                {
                    borderColor: '#333',
                    color: '#333',
                    background: '#111'
                }
            ];
        }
        if (this.isHovered) {
            return [
                hyp_1.styles.cursorPointer,
                {
                    borderColor: '#fff',
                    color: '#fff',
                    background: 'none'
                }
            ];
        }
        return [
            hyp_1.styles.cursorPointer,
            {
                borderColor: '#aaa',
                color: '#aaa',
                background: 'none'
            }
        ];
    };
    return UiBtn;
}(hyp_1.UiButton));
exports.UiBtn = UiBtn;
