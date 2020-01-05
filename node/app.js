"use strict";
exports.__esModule = true;
var hyp_1 = require("./hyp");
var BackgroundGroup_1 = require("./ui/BackgroundGroup");
var Navbars_1 = require("./ui/Navbars");
var Main_1 = require("./ui/Main");
exports.app = new hyp_1.UiDiv()
    .and(hyp_1.then.append(new BackgroundGroup_1.UiBackgroundGroup(), new hyp_1.UiDiv().and(hyp_1.then.setStyles(hyp_1.styles.flexRows, hyp_1.styles.full), hyp_1.then.append(new Navbars_1.UiNavbars(), new Main_1.UiMain()))));
document.body.appendChild(exports.app.element);
