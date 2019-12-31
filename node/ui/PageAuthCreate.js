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
var PasswordInputGroup_1 = require("./PasswordInputGroup");
var FormGroup_1 = require("./FormGroup");
var Btn_1 = require("./Btn");
var Alert_1 = require("./Alert");
var Spinner_1 = require("./Spinner");
var InternalAnchor_1 = require("./InternalAnchor");
var keythereum_1 = __importDefault(require("keythereum"));
var file_saver_1 = __importDefault(require("file-saver"));
var boot_1 = require("../boot");
var UiPageAuthCreate = /** @class */ (function (_super) {
    __extends(UiPageAuthCreate, _super);
    function UiPageAuthCreate() {
        var _this = _super.call(this) || this;
        _this.password0 = '';
        _this.password1 = '';
        _this.isSubmittable = false;
        _this.and(hyp_1.then.append(new hyp_1.UiHeading('h3')
            .and(hyp_1.then.setText('Create a New Account'))));
        _this.and(hyp_1.then.append(_this.uiForm = new hyp_1.UiForm()
            .and(hyp_1.then.append(new FormGroup_1.UiFormGroup({
            labelText: 'Password',
            helperText: 'Don\'t forget your password. There is no way to reset it.',
            ui: new PasswordInputGroup_1.UiPasswordInputGroup().and(function (passwordInputGroup) {
                passwordInputGroup.uiFormControl.element.addEventListener('input', function () {
                    _this.password0 = passwordInputGroup.uiFormControl.element.value;
                    _this.onPasswordInput();
                });
            })
        })))
            .and(hyp_1.then.append(new FormGroup_1.UiFormGroup({
            labelText: 'Repeat Password',
            ui: new PasswordInputGroup_1.UiPasswordInputGroup().and(function (passwordInputGroup) {
                passwordInputGroup.uiFormControl.element.addEventListener('input', function () {
                    _this.password1 = passwordInputGroup.uiFormControl.element.value;
                    _this.onPasswordInput();
                });
            })
        })))
            .and(hyp_1.then.append(_this.uiBtn = new Btn_1.UiBtn(boot_1.BootColor.PRIMARY, boot_1.BootSize.MD)
            .and(hyp_1.then.setText('Create Account'))
            .and(hyp_1.then.setAttribute('disabled', 'true'))))
            .and(function (uiForm) {
            uiForm.element.addEventListener('submit', function (event) {
                event.preventDefault();
                _this.onSubmit();
            });
        })));
        _this.and(hyp_1.then.append(_this.uiCreating = new hyp_1.UiDiv()
            .and(hyp_1.then.setIsHidden(true))
            .and(hyp_1.then.append(new Alert_1.UiAlert(boot_1.BootColor.INFO)
            .and(hyp_1.then.append(new Spinner_1.UiSpinner(), new hyp_1.UiSpan().and(hyp_1.then.setText('Creating your account. This may take a few seconds.'))))))));
        _this.and(hyp_1.then.append(_this.uiCreating = new hyp_1.UiDiv()
            .and(hyp_1.then.setIsHidden(true))
            .and(hyp_1.then.append(new Alert_1.UiAlert(boot_1.BootColor.SUCCESS)
            .and(hyp_1.then.append(new hyp_1.UiHeading('h6').and(hyp_1.then.setText('Account Created!')), new hyp_1.UiSpan().and(hyp_1.then.setText('A download should have been started. If not, please download your login file before continuing to the login page.'))))))
            .and(hyp_1.then.append(new hyp_1.UiDiv()
            .and(hyp_1.then.setStyle('text-align', 'center'))
            .and(hyp_1.then.append(new Btn_1.UiBtn(boot_1.BootColor.LIGHT, boot_1.BootSize.MD)
            .and(hyp_1.then.setText('Download Login File'))
            .and(hyp_1.then.setStyle('margin-right', '5px'))
            .and(function (uiBtn) {
            uiBtn.element.addEventListener('click', function () {
                _this.download();
            });
        })))
            .and(hyp_1.then.append(new InternalAnchor_1.UiInternalAnchor(['auth', 'login'])
            .and(hyp_1.then.setText('Proceed to Login'))
            .and(hyp_1.then.addClasses('btn', "btn-" + boot_1.BootColor.PRIMARY, "btn-" + boot_1.BootSize.MD))))))));
        return _this;
    }
    UiPageAuthCreate.prototype.setIsSubmittable = function (isSubmittable) {
        this.isSubmittable = isSubmittable;
        this.uiBtn.setIsDisabled(!isSubmittable);
    };
    UiPageAuthCreate.prototype.updateIsSubmittable = function () {
        if (this.password0.length === 0) {
            this.setIsSubmittable(false);
            return;
        }
        if (this.password0 !== this.password1) {
            this.setIsSubmittable(false);
            return;
        }
        this.setIsSubmittable(true);
    };
    UiPageAuthCreate.prototype.onPasswordInput = function () {
        this.updateIsSubmittable();
    };
    UiPageAuthCreate.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dk, keystorePojo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateIsSubmittable();
                        if (!this.isSubmittable) {
                            return [2 /*return*/];
                        }
                        this.uiForm.and(hyp_1.then.setIsHidden(true));
                        this.uiCreating.and(hyp_1.then.setIsHidden(false));
                        return [4 /*yield*/, keythereum_1["default"].create()];
                    case 1:
                        dk = _a.sent();
                        return [4 /*yield*/, keythereum_1["default"].dump('password', dk.privateKey, dk.salt, dk.iv)];
                    case 2:
                        keystorePojo = _a.sent();
                        this.keystoreBlob = new Blob([JSON.stringify(keystorePojo, null, 2)], { type: "text/plain;charset=utf-8" });
                        this.download();
                        this.uiCreating.and(hyp_1.then.setIsHidden(false));
                        this.uiCreated.and(hyp_1.then.setIsHidden(true));
                        return [2 /*return*/];
                }
            });
        });
    };
    UiPageAuthCreate.prototype.download = function () {
        file_saver_1["default"].saveAs(this.keystoreBlob, "watsonia-login.txt");
    };
    return UiPageAuthCreate;
}(hyp_1.UiDiv));
exports.UiPageAuthCreate = UiPageAuthCreate;
