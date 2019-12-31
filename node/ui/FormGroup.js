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
var UiFormGroup = /** @class */ (function (_super) {
    __extends(UiFormGroup, _super);
    function UiFormGroup(struct) {
        var _this = _super.call(this) || this;
        if (struct.labelText) {
            _this.and(hyp_1.then.append(new hyp_1.UiLabel().and(hyp_1.then.setText(struct.labelText))));
        }
        _this.and(hyp_1.then.append(struct.ui));
        if (struct.helperText) {
            _this.and(hyp_1.then.append(new hyp_1.UiDiv()
                .and(hyp_1.then.addClasses('form-text', 'text-muted'))
                .and(hyp_1.then.setText(struct.helperText))));
        }
        return _this;
    }
    return UiFormGroup;
}(hyp_1.UiDiv));
exports.UiFormGroup = UiFormGroup;
