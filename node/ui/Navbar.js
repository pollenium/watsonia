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
var NavbarNav_1 = require("./NavbarNav");
var InternalAnchor_1 = require("./InternalAnchor");
var styles_1 = require("../styles");
var UiNavbar = /** @class */ (function (_super) {
    __extends(UiNavbar, _super);
    function UiNavbar() {
        var _this = _super.call(this) || this;
        _this
            .and(hyp_1.then.addStyles(styles_1.styles.glass, styles_1.styles.dark))
            .and(hyp_1.then.append(new InternalAnchor_1.UiInternalAnchor([])
            .and(hyp_1.then.addClasses('navbar-brand'))
            .and(hyp_1.then.setText('Watsonia'))))
            .and(hyp_1.then.append(new NavbarNav_1.UiNavbarNav()));
        return _this;
    }
    return UiNavbar;
}(hyp_1.UiDiv));
exports.UiNavbar = UiNavbar;
