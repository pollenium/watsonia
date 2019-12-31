"use strict";
exports.__esModule = true;
var Emitter_1 = require("./classes/Emitter");
var PageUnknown_1 = require("./ui/PageUnknown");
var PageAuthCreate_1 = require("./ui/PageAuthCreate");
var PAGE;
(function (PAGE) {
    PAGE["UNKNOWN"] = "UNKNOWN";
    PAGE["AUTH"] = "AUTH";
    PAGE["AUTH_LOGIN"] = "AUTH_CREATE";
    PAGE["AUTH_CREATE"] = "AUTH_LOGIN";
    PAGE["MARKETS"] = "MARKETS";
    PAGE["MARKET"] = "MARKET";
})(PAGE = exports.PAGE || (exports.PAGE = {}));
var Navigation = /** @class */ (function () {
    function Navigation() {
        var _this = this;
        this.pageEmitter = new Emitter_1.Emitter();
        window.onhashchange = function () {
            _this.handleHashChange();
        };
    }
    Navigation.prototype.handleHashChange = function () {
        var hash = window.location.hash;
        var urlParts = hash.split('#').join('').split('/').filter(function (urlPart) {
            return urlPart.length > 0;
        });
        this.handleUrlParts(urlParts);
    };
    Navigation.prototype.init = function () {
        this.handleHashChange();
    };
    Navigation.prototype.setPage = function (page, data) {
        switch (page) {
            // case PAGE.AUTH:
            //   this.pageEmitter.emit(this.get())
            //   break;
            case PAGE.AUTH_CREATE:
                this.pageEmitter.emit(this.getUiPageAuthCreate());
                break;
            // case PAGE.MARKETS:
            //   this.pageEmitter.emit(this.getHypMarkets())
            //   break;
            default:
                this.pageEmitter.emit(this.getUiPageUnknown());
                break;
        }
    };
    Navigation.prototype.getUiPageUnknown = function () {
        if (this.uiPageUnknown) {
            return this.uiPageUnknown;
        }
        this.uiPageUnknown = new PageUnknown_1.UiPageUnknown;
        return this.uiPageUnknown;
    };
    // getHypAuth() {
    //   if (this.uiPageAuth) {
    //     return this.uiPageAuth
    //   }
    //   this.uiPageAuth = new UiAuth
    //   return this.uiPageAuth
    // }
    Navigation.prototype.getUiPageAuthCreate = function () {
        if (this.uiPageAuthCreate) {
            return this.uiPageAuthCreate;
        }
        this.uiPageAuthCreate = new PageAuthCreate_1.UiPageAuthCreate;
        return this.uiPageAuthCreate;
    };
    // getHypMarkets() {
    //   if (this.uiPageMarkets) {
    //     return this.uiPageMarkets
    //   }
    //   this.uiPageMarkets = new HypMarketSummaries
    //   return this.uiPageMarkets
    // }
    Navigation.prototype.parseUrlParts = function (urlParts) {
        if (urlParts.length === 0) {
            return { page: PAGE.MARKETS };
        }
        switch (urlParts[0]) {
            case 'auth':
                if (!urlParts[1]) {
                    return { page: PAGE.AUTH };
                }
                switch (urlParts[1]) {
                    case 'login':
                        return { page: PAGE.AUTH_LOGIN };
                    case 'create':
                        return { page: PAGE.AUTH_CREATE };
                    default:
                        return { page: PAGE.UNKNOWN };
                }
            case 'markets':
                if (urlParts.length === 1) {
                    return { page: PAGE.MARKETS };
                }
                var marketId = parseInt(urlParts[1]);
                return {
                    page: PAGE.MARKET,
                    data: marketId
                };
            default:
                return { page: PAGE.UNKNOWN };
        }
    };
    Navigation.prototype.handleUrlParts = function (urlParts) {
        var parsedUrlParts = this.parseUrlParts(urlParts);
        this.setPage(parsedUrlParts.page, parsedUrlParts.data);
    };
    return Navigation;
}());
exports.navigation = new Navigation;
