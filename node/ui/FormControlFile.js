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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var hyp_1 = require("../hyp");
var FormControl_1 = require("./FormControl");
var Emitter_1 = require("../classes/Emitter");
var UiFormControlFile = /** @class */ (function (_super) {
    __extends(UiFormControlFile, _super);
    function UiFormControlFile() {
        var _this = _super.call(this) || this;
        _this.fileEmitter = new Emitter_1.Emitter();
        var uiFileInput = new hyp_1.UiInput().and(hyp_1.then.setAttribute('type', 'file'), hyp_1.then.setStyles({
            opacity: 0
        }), hyp_1.then.onDom('input', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!event.target.files || event.target.files.length == 0) {
                    return [2 /*return*/];
                }
                this.fileEmitter.emit(event.target.files[0]);
                return [2 /*return*/];
            });
        }); }));
        var uiView = new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.positionRelative), hyp_1.then.append(_this.uiTextWrapper = new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.fullWidth, hyp_1.styles.cursorPointer, hyp_1.styles.positionAbsolute, hyp_1.styles.nowrap, hyp_1.styles.overflowHidden, {
            textOverflow: 'ellipsis',
            padding: '8px 0'
        }), hyp_1.then.onClick(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                uiFileInput.element.click();
                return [2 /*return*/];
            });
        }); })), uiFileInput));
        _this.setUiView(uiView);
        _this.setText('no file selected');
        return _this;
    }
    UiFormControlFile.prototype.setText = function (text) {
        this.uiTextWrapper.and(hyp_1.then.setText(text));
    };
    return UiFormControlFile;
}(FormControl_1.UiFormControl));
exports.UiFormControlFile = UiFormControlFile;
