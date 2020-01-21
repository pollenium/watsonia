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
var Auth_1 = require("./Auth");
var Divider_1 = require("./Divider");
var Section;
(function (Section) {
    Section["PRICES"] = "prices";
    Section["MARKET"] = "market";
    Section["TRADE"] = "trade";
})(Section || (Section = {}));
var UiMarket = /** @class */ (function (_super) {
    __extends(UiMarket, _super);
    function UiMarket(market) {
        var _this = _super.call(this) || this;
        _this.uiSectionWrapper = new hyp_1.UiDiv();
        _this.and(hyp_1.then.setStyles(hyp_1.styles.container, hyp_1.styles.bgMedium, {
            minHeight: '100%'
        }), hyp_1.then.append(new hyp_1.UiDiv()
            .and(hyp_1.then.append(new hyp_1.UiImg()
            .and(hyp_1.then.setStyles(hyp_1.styles.fullWidth))
            .and(hyp_1.then.setAttribute('src', market.getImageUrl()))))), hyp_1.then.append(new NavbarOptionGroup_1.UiNavbarOptionGroup().and(function (uiOptionGroup) {
            uiOptionGroup.addOptions({
                id: Section.PRICES,
                text: 'Prices',
                onSelect: function () {
                    _this.setUiSection(new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.container, hyp_1.styles.pad), hyp_1.then.setText('Prices')));
                },
                isSelected: true
            }, {
                id: Section.MARKET,
                text: 'Market',
                onSelect: function () {
                    _this.setUiSection(new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.container, hyp_1.styles.pad), hyp_1.then.setText('Market')));
                }
            }, {
                id: Section.TRADE,
                text: 'Trade',
                onSelect: function () {
                    _this.setUiSection(new hyp_1.UiDiv().and(hyp_1.then.append(new Auth_1.UiAuth)));
                }
            });
        }), new Divider_1.UiDivider(), _this.uiSectionWrapper));
        return _this;
    }
    UiMarket.prototype.setUiSection = function (uiSection) {
        this.uiSectionWrapper.and(hyp_1.then.empty, hyp_1.then.append(uiSection));
    };
    return UiMarket;
}(hyp_1.UiDiv));
exports.UiMarket = UiMarket;
