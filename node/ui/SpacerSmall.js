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
var UiSpacerSmall = /** @class */ (function (_super) {
    __extends(UiSpacerSmall, _super);
    function UiSpacerSmall() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles({
            width: '8px',
            height: '8px'
        }));
        return _this;
    }
    return UiSpacerSmall;
}(hyp_1.UiDiv));
exports.UiSpacerSmall = UiSpacerSmall;
