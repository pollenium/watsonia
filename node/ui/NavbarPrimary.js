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
var UiNavbarPrimary = /** @class */ (function (_super) {
    __extends(UiNavbarPrimary, _super);
    function UiNavbarPrimary() {
        var _this = _super.call(this) || this;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.bgDark, {
            fontSize: '24px'
        }), hyp_1.then.append(new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.flexColumns, hyp_1.styles.pad, hyp_1.styles.container), hyp_1.then.append(new hyp_1.UiDiv().and(hyp_1.then.setStyles({
            width: '100px'
        })), new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.textCenter, {
            flexGrow: 1
        }), hyp_1.then.setText('Watsonia')), new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.textRight, {
            width: '100px'
        }), hyp_1.then.append(new LinearIcon_1.UiLinearIcon('cog'), new LinearIcon_1.UiLinearIcon('user')
            .and(hyp_1.then.setStyles(hyp_1.styles.padSmallLeft))))))));
        return _this;
    }
    return UiNavbarPrimary;
}(hyp_1.UiDiv));
exports.UiNavbarPrimary = UiNavbarPrimary;
