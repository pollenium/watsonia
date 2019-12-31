"use strict";
exports.__esModule = true;
var hyp_1 = require("./hyp");
var Navbar_1 = require("./ui/Navbar");
var Main_1 = require("./ui/Main");
var navigation_1 = require("./navigation");
exports.app = new hyp_1.UiDiv()
    .and(hyp_1.then.append(new Navbar_1.UiNavbar(), new Main_1.UiMain()))
    .element;
navigation_1.navigation.init();
