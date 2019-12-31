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
var Container_1 = require("./Container");
var navigation_1 = require("../navigation");
var UiMain = /** @class */ (function (_super) {
    __extends(UiMain, _super);
    function UiMain() {
        var _this = _super.call(this) || this;
        navigation_1.navigation.pageEmitter.on(function (page) {
            _this.and(hyp_1.then.empty);
            _this.and(hyp_1.then.append(page));
        });
        return _this;
    }
    return UiMain;
}(Container_1.UiContainer));
exports.UiMain = UiMain;
