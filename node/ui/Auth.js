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
var NavbarOptionGroup_1 = require("./NavbarOptionGroup");
var Divider_1 = require("./Divider");
var AuthCreate_1 = require("./AuthCreate");
var AuthLogin_1 = require("./AuthLogin");
var pollenium_snowdrop_1 = require("pollenium-snowdrop");
var AuthState;
(function (AuthState) {
    AuthState["NULL"] = "null";
    AuthState["LOGIN"] = "login";
    AuthState["CREATE"] = "create";
})(AuthState = exports.AuthState || (exports.AuthState = {}));
var UiAuth = /** @class */ (function (_super) {
    __extends(UiAuth, _super);
    function UiAuth() {
        var _this = _super.call(this) || this;
        _this.loginSnowdrop = new pollenium_snowdrop_1.Snowdrop();
        _this.and(hyp_1.then.append(_this.uiNavbarOptionGroup = new NavbarOptionGroup_1.UiNavbarOptionGroup()
            .and(function (uiOptionGroup) {
            uiOptionGroup.addLabel('Do you have an Account?');
            uiOptionGroup.addOptions({
                id: AuthState.LOGIN,
                text: 'Yes',
                onSelect: function () {
                    _this.setDisplay(AuthState.LOGIN);
                }
            }, {
                id: AuthState.CREATE,
                text: 'No',
                onSelect: function () {
                    _this.setDisplay(AuthState.CREATE);
                }
            });
        }), _this.uiDisplay = new hyp_1.UiDiv()));
        _this.setAuthState(AuthState.LOGIN);
        return _this;
    }
    UiAuth.prototype.setAuthState = function (authState) {
        this.uiNavbarOptionGroup.selectOptionById(authState);
    };
    UiAuth.prototype.setDisplay = function (authState) {
        this.uiDisplay.and(hyp_1.then.empty);
        if (authState === AuthState.CREATE) {
            this.uiDisplay.and(hyp_1.then.append(new Divider_1.UiDivider(), new AuthCreate_1.UiAuthCreate(this)));
        }
        else if (authState === AuthState.LOGIN) {
            this.uiDisplay.and(hyp_1.then.append(new Divider_1.UiDivider(), new AuthLogin_1.UiAuthLogin(this)));
        }
    };
    return UiAuth;
}(hyp_1.UiDiv));
exports.UiAuth = UiAuth;
