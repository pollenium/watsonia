"use strict";
exports.__esModule = true;
var then;
(function (then) {
    function empty(ui) {
        while (ui.element.childElementCount > 0) {
            ui.element.removeChild(ui.element.children[0]);
        }
    }
    then.empty = empty;
    function setText(text) {
        return function (ui) {
            ui.element.textContent = text;
        };
    }
    then.setText = setText;
    function setStyle(key, value) {
        return function (ui) {
            ui.element.style[key] = value;
        };
    }
    then.setStyle = setStyle;
    function removeStyles() {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return function (ui) {
            keys.forEach(function (key) {
                ui.element.style.removeProperty(key);
            });
        };
    }
    then.removeStyles = removeStyles;
    function addClasses() {
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        return function (ui) {
            var _a;
            (_a = ui.element.classList).add.apply(_a, classes);
        };
    }
    then.addClasses = addClasses;
    function removeClasses() {
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        return function (ui) {
            var _a;
            (_a = ui.element.classList).remove.apply(_a, classes);
        };
    }
    then.removeClasses = removeClasses;
    function append() {
        var childUis = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            childUis[_i] = arguments[_i];
        }
        return function (ui) {
            childUis.forEach(function (childUi) {
                ui.element.appendChild(childUi.element);
            });
        };
    }
    then.append = append;
    function setAttribute(key, value) {
        return function (ui) {
            ui.element.setAttribute(key, value);
        };
    }
    then.setAttribute = setAttribute;
    function removeAttributes() {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return function (ui) {
            keys.forEach(function (key) {
                ui.element.removeAttribute(key);
            });
        };
    }
    then.removeAttributes = removeAttributes;
    function setIsHidden(isHidden) {
        return function (ui) {
            if (isHidden) {
                ui.and(setStyle('display', 'none'));
            }
            else {
                ui.and(removeStyles('display'));
            }
        };
    }
    then.setIsHidden = setIsHidden;
})(then = exports.then || (exports.then = {}));
