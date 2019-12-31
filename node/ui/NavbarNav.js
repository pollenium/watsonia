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
var NavbarNavItem_1 = require("./NavbarNavItem");
var Icon_1 = require("./Icon");
var InternalAnchor_1 = require("./InternalAnchor");
var UiNavbarNav = /** @class */ (function (_super) {
    __extends(UiNavbarNav, _super);
    function UiNavbarNav() {
        var _this = _super.call(this) || this;
        _this
            .and(hyp_1.then.addClasses('navbar-nav', 'flex-row', 'ml-md-auto', 'd-md-flex'))
            .and(hyp_1.then.append(new NavbarNavItem_1.UiNavbarNavItem()
            .and(hyp_1.then.append(new Icon_1.UiIcon()
            .and(hyp_1.then.addClasses('fas', 'fa-cog'))))))
            .and(hyp_1.then.append(new NavbarNavItem_1.UiNavbarNavItem()
            .and(hyp_1.then.append(new InternalAnchor_1.UiInternalAnchor(['auth'])
            .and(hyp_1.then.append(new Icon_1.UiIcon()
            .and(hyp_1.then.addClasses('fas', 'fa-user'))))))));
        return _this;
    }
    return UiNavbarNav;
}(hyp_1.UiUlist));
exports.UiNavbarNav = UiNavbarNav;
