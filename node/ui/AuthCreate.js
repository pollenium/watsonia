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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var hyp_1 = require("../hyp");
var FormControlPassword_1 = require("./FormControlPassword");
var FormControlText_1 = require("./FormControlText");
var FormGroup_1 = require("./FormGroup");
var Btn_1 = require("./Btn");
var BlurbSpinner_1 = require("./BlurbSpinner");
var SpacerSmall_1 = require("./SpacerSmall");
var SpacerLarge_1 = require("./SpacerLarge");
var SpacerHuge_1 = require("./SpacerHuge");
var Blurb_1 = require("./Blurb");
var Auth_1 = require("./Auth");
var LinearIcon_1 = require("./LinearIcon");
var utils_1 = require("../utils");
var delay_1 = __importDefault(require("delay"));
var Keystore_1 = require("../classes/Keystore");
var UiAuthCreate = /** @class */ (function (_super) {
    __extends(UiAuthCreate, _super);
    function UiAuthCreate(uiAuth) {
        var _this = _super.call(this) || this;
        _this.uiAuth = uiAuth;
        _this.password0 = '';
        _this.password1 = '';
        _this.nickname = '';
        _this.isSubmittable = false;
        _this.and(hyp_1.then.setStyles(hyp_1.styles.container, hyp_1.styles.pad));
        _this.and(hyp_1.then.append(_this.uiForm = new hyp_1.UiForm().and(hyp_1.then.append(_this.uiFormGroupPassword0 = new FormGroup_1.UiFormGroup({
            labelText: 'Password:',
            helperText: 'Don\'t forget your password. There is no way to reset it.',
            uiFormControl: new FormControlPassword_1.UiFormControlPassword().and(function (uiFormControlPassword) {
                uiFormControlPassword.valueEmitter.on(function (password) {
                    _this.password0 = password;
                    _this.handleFormUpdate(false);
                });
            })
        }), new SpacerLarge_1.UiSpacerLarge, _this.uiFormGroupPassword1 = new FormGroup_1.UiFormGroup({
            labelText: 'Repeat Password:',
            uiFormControl: new FormControlPassword_1.UiFormControlPassword().and(function (uiFormControlPassword) {
                uiFormControlPassword.valueEmitter.on(function (password) {
                    _this.password1 = password;
                    _this.handleFormUpdate(false);
                });
            })
        }), new SpacerLarge_1.UiSpacerLarge, new FormGroup_1.UiFormGroup({
            labelText: 'Account Nickname (Optional):',
            uiFormControl: new FormControlText_1.UiFormControlText().and(function (uiFormControlText) {
                uiFormControlText.setUiPrepend(new LinearIcon_1.UiLinearIcon('label'));
                uiFormControlText.valueEmitter.on(function (nickname) {
                    _this.nickname = nickname;
                }),
                    uiFormControlText.setValue('First Account');
            }),
            helperText: 'This is only used to differentaite your logins when you have multiple accounts'
        }), new SpacerHuge_1.UiSpacerHuge, _this.uiBtn = new Btn_1.UiBtn({
            isDisabled: true,
            linearIconClassName: 'user',
            text: 'Create Account'
        })), hyp_1.then.onDom('submit', function (event) {
            event.preventDefault();
            _this.onSubmit();
        }))));
        _this.and(hyp_1.then.append(_this.uiCreating = new hyp_1.UiDiv().and(hyp_1.then.setIsHidden(true), hyp_1.then.append(new BlurbSpinner_1.UiBlurbSpinner('Creating your account. This may take a few seconds.')))));
        _this.and(hyp_1.then.append(_this.uiCreated = new hyp_1.UiDiv().and(hyp_1.then.setIsHidden(true), hyp_1.then.append(new Blurb_1.UiBlurb({
            linearIconClassName: 'user',
            text: 'Account Created!\r\n'
        }), new SpacerSmall_1.UiSpacerSmall(), new Blurb_1.UiBlurb({
            linearIconClassName: 'download',
            text: 'A download should have been started. If not, please download your login file before continuing to the login page.'
        }), new SpacerLarge_1.UiSpacerLarge(), new hyp_1.UiDiv().and(hyp_1.then.setStyle('text-align', 'center'), hyp_1.then.append(new Btn_1.UiBtn({
            linearIconClassName: 'file-lock',
            text: 'Download Login File'
        }).and(hyp_1.then.setStyle('margin-right', '8px'), hyp_1.then.onClick(function (uiBtn) {
            _this.keystore.download();
        })), new Btn_1.UiBtn({
            linearIconClassName: 'lock',
            text: 'Proceed to Login'
        }).and(hyp_1.then.onClick(function (uiBtn) {
            _this.uiAuth.setAuthState(Auth_1.AuthState.LOGIN);
        }))))))));
        return _this;
    }
    UiAuthCreate.prototype.setIsSubmittable = function (isSubmittable) {
        this.isSubmittable = isSubmittable;
        this.uiBtn.setIsDisabled(!isSubmittable);
    };
    UiAuthCreate.prototype.handleFormUpdate = function (isSubmit) {
        if (isSubmit === void 0) { isSubmit = false; }
        this.setIsSubmittable(true);
        if (this.password0.length === 0) {
            this.uiFormGroupPassword0.setErrorMessages(isSubmit, [
                'Password required'
            ]);
            this.setIsSubmittable(false);
        }
        else {
            this.uiFormGroupPassword0.clearErrorMessages();
        }
        if (this.password1.length === 0) {
            this.uiFormGroupPassword1.setErrorMessages(isSubmit, [
                'Password repeat required'
            ]);
            this.setIsSubmittable(false);
        }
        else {
            if (this.password0 !== this.password1) {
                this.uiFormGroupPassword1.setErrorMessages(isSubmit, [
                    'Passwords do not match'
                ]);
                this.setIsSubmittable(false);
            }
            else {
                this.uiFormGroupPassword1.clearErrorMessages();
            }
        }
    };
    UiAuthCreate.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startedAt, _a, ellapsed;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.handleFormUpdate(true);
                        if (!this.isSubmittable) {
                            return [2 /*return*/];
                        }
                        this.uiForm.and(hyp_1.then.setIsHidden(true));
                        this.uiCreating.and(hyp_1.then.setIsHidden(false));
                        startedAt = utils_1.getTime();
                        _a = this;
                        return [4 /*yield*/, Keystore_1.Keystore.generate({
                                nickname: this.nickname,
                                password: this.password0
                            })];
                    case 1:
                        _a.keystore = _b.sent();
                        ellapsed = utils_1.getTime();
                        if (!(ellapsed < 3000)) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay_1["default"](3000 - ellapsed)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.uiCreating.and(hyp_1.then.setIsHidden(true));
                        this.uiCreated.and(hyp_1.then.setIsHidden(false));
                        this.keystore.download();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UiAuthCreate;
}(hyp_1.UiDiv));
exports.UiAuthCreate = UiAuthCreate;
