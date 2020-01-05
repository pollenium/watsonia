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
var hyp_then_1 = require("./hyp.then");
exports.then = hyp_then_1.then;
var styles_1 = require("./styles");
exports.styles = styles_1.styles;
var Ui = /** @class */ (function () {
    function Ui(tag) {
        this.element = document.createElement(tag);
        this.element.innerHTML = "<!--" + this.constructor.name + "-->";
    }
    Ui.prototype.and = function () {
        var _this = this;
        var andFuncs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            andFuncs[_i] = arguments[_i];
        }
        andFuncs.forEach(function (andFunc) {
            andFunc(_this);
        });
        return this;
    };
    Ui.prototype.andIf = function (isTrue) {
        var andFuncs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            andFuncs[_i - 1] = arguments[_i];
        }
        if (!!isTrue !== true) {
            return this;
        }
        return this.and.apply(this, andFuncs);
    };
    return Ui;
}());
exports.Ui = Ui;
var UiDiv = /** @class */ (function (_super) {
    __extends(UiDiv, _super);
    function UiDiv(tag) {
        if (tag === void 0) { tag = 'div'; }
        return _super.call(this, tag) || this;
    }
    return UiDiv;
}(Ui));
exports.UiDiv = UiDiv;
var UiUlist = /** @class */ (function (_super) {
    __extends(UiUlist, _super);
    function UiUlist(tag) {
        if (tag === void 0) { tag = 'ul'; }
        return _super.call(this, tag) || this;
    }
    return UiUlist;
}(Ui));
exports.UiUlist = UiUlist;
var UiLI = /** @class */ (function (_super) {
    __extends(UiLI, _super);
    function UiLI(tag) {
        if (tag === void 0) { tag = 'li'; }
        return _super.call(this, tag) || this;
    }
    return UiLI;
}(Ui));
exports.UiLI = UiLI;
var UiAnchor = /** @class */ (function (_super) {
    __extends(UiAnchor, _super);
    function UiAnchor(tag) {
        if (tag === void 0) { tag = 'a'; }
        return _super.call(this, tag) || this;
    }
    return UiAnchor;
}(Ui));
exports.UiAnchor = UiAnchor;
var UiHeading = /** @class */ (function (_super) {
    __extends(UiHeading, _super);
    function UiHeading(tag) {
        return _super.call(this, tag) || this;
    }
    return UiHeading;
}(Ui));
exports.UiHeading = UiHeading;
var UiInput = /** @class */ (function (_super) {
    __extends(UiInput, _super);
    function UiInput(tag) {
        if (tag === void 0) { tag = 'input'; }
        return _super.call(this, tag) || this;
    }
    return UiInput;
}(Ui));
exports.UiInput = UiInput;
var UiSpan = /** @class */ (function (_super) {
    __extends(UiSpan, _super);
    function UiSpan(tag) {
        if (tag === void 0) { tag = 'span'; }
        return _super.call(this, tag) || this;
    }
    return UiSpan;
}(Ui));
exports.UiSpan = UiSpan;
var UiButton = /** @class */ (function (_super) {
    __extends(UiButton, _super);
    function UiButton(tag) {
        if (tag === void 0) { tag = 'button'; }
        return _super.call(this, tag) || this;
    }
    return UiButton;
}(Ui));
exports.UiButton = UiButton;
var UiLabel = /** @class */ (function (_super) {
    __extends(UiLabel, _super);
    function UiLabel(tag) {
        if (tag === void 0) { tag = 'label'; }
        return _super.call(this, tag) || this;
    }
    return UiLabel;
}(Ui));
exports.UiLabel = UiLabel;
var UiForm = /** @class */ (function (_super) {
    __extends(UiForm, _super);
    function UiForm(tag) {
        if (tag === void 0) { tag = 'form'; }
        return _super.call(this, tag) || this;
    }
    return UiForm;
}(Ui));
exports.UiForm = UiForm;
var UiImg = /** @class */ (function (_super) {
    __extends(UiImg, _super);
    function UiImg(tag) {
        if (tag === void 0) { tag = 'img'; }
        return _super.call(this, tag) || this;
    }
    return UiImg;
}(Ui));
exports.UiImg = UiImg;
