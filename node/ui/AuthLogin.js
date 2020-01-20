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
var FormGroupLoginFile_1 = require("./FormGroupLoginFile");
var FormControlPassword_1 = require("./FormControlPassword");
var FormGroup_1 = require("./FormGroup");
var Btn_1 = require("./Btn");
var BlurbSpinner_1 = require("./BlurbSpinner");
var SpacerLarge_1 = require("./SpacerLarge");
var SpacerHuge_1 = require("./SpacerHuge");
var Blurb_1 = require("./Blurb");
var utils_1 = require("../utils");
var UiAuthLogin = /** @class */ (function (_super) {
    __extends(UiAuthLogin, _super);
    function UiAuthLogin(uiAuth) {
        var _this = _super.call(this) || this;
        _this.uiAuth = uiAuth;
        _this.password = '';
        _this.isSubmittable = false;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.container, hyp_1.styles.pad));
        _this.and(hyp_1.then.append(_this.uiForm = new hyp_1.UiForm().and(hyp_1.then.onDom('submit', function (event) {
            event.preventDefault();
            _this.onSubmit();
        }), hyp_1.then.append(_this.uiFormGroupLoginFile = new FormGroupLoginFile_1.UiFormGroupLoginFile().and(function (uiFormControlLoginFile) {
            uiFormControlLoginFile.keystoreSnowdrop.addHandle(function (keystore) {
                _this.keystore = keystore;
                _this.uiFormGroupLoginFile.clearErrorMessages();
                _this.handleFormUpdate();
            });
        }), new SpacerLarge_1.UiSpacerLarge, _this.uiFormGroupPassword = new FormGroup_1.UiFormGroup({
            labelText: 'Password:',
            uiFormControl: new FormControlPassword_1.UiFormControlPassword().and(function (uiFormControlPassword) {
                uiFormControlPassword.valueSnowdrop.addHandle(function (password) {
                    _this.password = password;
                    _this.handleFormUpdate();
                });
            })
        }), new SpacerHuge_1.UiSpacerHuge, _this.uiBtn = new Btn_1.UiBtn({
            isDisabled: true,
            linearIconClassName: 'user',
            text: 'Login'
        })))));
        _this.and(hyp_1.then.append(_this.uiDecrypting = new hyp_1.UiDiv().and(hyp_1.then.setIsHidden(true), hyp_1.then.append(new BlurbSpinner_1.UiBlurbSpinner('Logging in. This may take a few seconds')))));
        _this.and(hyp_1.then.append(_this.uiComplete = new hyp_1.UiDiv()
            .and(hyp_1.then.setIsHidden(true))
            .and(hyp_1.then.append(new Blurb_1.UiBlurb({
            linearIconClassName: 'user',
            text: 'Login Successful!'
        })))));
        return _this;
    }
    UiAuthLogin.prototype.setIsSubmittable = function (isSubmittable) {
        this.isSubmittable = isSubmittable;
        this.uiBtn.setIsDisabled(!isSubmittable);
    };
    UiAuthLogin.prototype.handleFormUpdate = function (isSubmit) {
        if (isSubmit === void 0) { isSubmit = false; }
        this.setIsSubmittable(true);
        if (!this.keystore) {
            this.uiFormGroupLoginFile.setErrorMessages(isSubmit, [
                'Login File Required'
            ]);
            this.setIsSubmittable(false);
        }
        if (this.password.length === 0) {
            this.uiFormGroupPassword.setErrorMessages(isSubmit, [
                'Password Required'
            ]);
            this.setIsSubmittable(false);
        }
        else {
            this.uiFormGroupPassword.clearErrorMessages();
        }
    };
    UiAuthLogin.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startedAt, keypair;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.handleFormUpdate();
                        if (!this.isSubmittable) {
                            return [2 /*return*/];
                        }
                        this.uiForm.and(hyp_1.then.setIsHidden(true));
                        this.uiDecrypting.and(hyp_1.then.setIsHidden(false));
                        startedAt = utils_1.getTime();
                        return [4 /*yield*/, this.keystore.fetchKeypair(this.password)
                                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, utils_1.waitUntil(startedAt + 3000)];
                                        case 1:
                                            _a.sent();
                                            this.uiDecrypting.and(hyp_1.then.setIsHidden(true));
                                            this.uiComplete.and(hyp_1.then.setIsHidden(false));
                                            return [2 /*return*/];
                                    }
                                });
                            }); })["catch"](function (error) {
                                _this.uiFormGroupPassword.setErrorMessages(true, [
                                    'Login failed. Are you sure the password is correct?'
                                ]);
                                _this.uiForm.and(hyp_1.then.setIsHidden(false));
                                _this.uiDecrypting.and(hyp_1.then.setIsHidden(true));
                            })];
                    case 1:
                        keypair = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UiAuthLogin;
}(hyp_1.UiDiv));
exports.UiAuthLogin = UiAuthLogin;
