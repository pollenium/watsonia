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
var UiBackgroundGroup = /** @class */ (function (_super) {
    __extends(UiBackgroundGroup, _super);
    function UiBackgroundGroup() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.full, hyp_1.styles.positionAbsolute, {
            zIndex: -1
        })).and(hyp_1.then.append(_this.uiBackgroundLayer0 = new UiBackgroundLayer, _this.uiBackgroundLayer1 = new UiBackgroundLayer));
        _this.setImageUrl('./media/market-images/trump-shocked.jpg');
        return _this;
    }
    UiBackgroundGroup.prototype.setImageUrl = function (imageUrl) {
        this.uiBackgroundLayer1.setImageUrl(imageUrl);
    };
    return UiBackgroundGroup;
}(hyp_1.UiDiv));
exports.UiBackgroundGroup = UiBackgroundGroup;
var UiBackgroundLayer = /** @class */ (function (_super) {
    __extends(UiBackgroundLayer, _super);
    function UiBackgroundLayer() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.full, hyp_1.styles.positionAbsolute, hyp_1.styles.bgBlack))
            .and(hyp_1.then.append(new hyp_1.UiDiv()
            .and(hyp_1.then.setStyles(hyp_1.styles.full, hyp_1.styles.overflowHidden, hyp_1.styles.blur, {
            width: 'calc(100% + 80px)',
            marginLeft: '-40px'
        }))
            .and(hyp_1.then.append(_this.uiImg = new hyp_1.UiImg()
            .and(hyp_1.then.setStyles(hyp_1.styles.fullWidth))))));
        return _this;
    }
    UiBackgroundLayer.prototype.setImageUrl = function (imageUrl) {
        this.uiImg.and(hyp_1.then.setAttribute('src', imageUrl));
    };
    return UiBackgroundLayer;
}(hyp_1.UiDiv));
