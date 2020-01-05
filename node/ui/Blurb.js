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
var UiBlurb = /** @class */ (function (_super) {
    __extends(UiBlurb, _super);
    function UiBlurb(struct) {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.flexColumns), hyp_1.then.append(new hyp_1.UiDiv()
            .and(hyp_1.then.append(new LinearIcon_1.UiLinearIcon(struct.linearIconClassName))), new hyp_1.UiDiv()
            .and(hyp_1.then.setText(struct.text), hyp_1.then.setStyles({
            paddingLeft: '8px'
        }))));
        return _this;
    }
    return UiBlurb;
}(hyp_1.UiDiv));
exports.UiBlurb = UiBlurb;
