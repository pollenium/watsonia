"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var styles;
(function (styles) {
    styles.container = {
        maxWidth: '800px',
        margin: '0px auto'
    };
    styles.fullHeight = {
        height: '100%'
    };
    styles.fullWidth = {
        width: '100%'
    };
    styles.full = __assign(__assign({}, styles.fullHeight), styles.fullWidth);
    styles.blur = {
        filter: 'blur(40px)'
    };
    styles.bgBlack = {
        backgroundColor: 'black'
    };
    styles.bgDark = {
        backgroundColor: 'rgba(0, 0, 0, .6)'
    };
    styles.bgMedium = {
        backgroundColor: 'rgba(0, 0, 0, .5)'
    };
    styles.bgGlass = {
        backdropFilter: 'blur(2px)'
    };
    styles.shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.8) 0px 4px 4px 0px'
    };
    styles.flexColumns = {
        display: 'flex',
        flexDirection: 'row'
    };
    styles.flexRows = {
        display: 'flex',
        flexDirection: 'column'
    };
    styles.flexGrow = {
        flexGrow: 1
    };
    styles.textCenter = {
        textAlign: 'center'
    };
    styles.textRight = {
        textAlign: 'right'
    };
    styles.textBright = {
        color: 'white'
    };
    styles.textMuted = {
        color: '#666'
    };
    styles.positionAbsolute = {
        position: 'absolute'
    };
    styles.positionRelative = {
        position: 'relative'
    };
    styles.overflowHidden = {
        overflow: 'hidden'
    };
    styles.pad = {
        padding: '18px'
    };
    styles.padLeft = {
        paddingLeft: '18px'
    };
    styles.borderTop = {
        borderTop: '1px solid rgba(255, 255, 255, .1)'
    };
    styles.padSmall = {
        padding: '8px'
    };
    styles.padSmallLeft = {
        paddingLeft: '8px'
    };
    styles.padSmallRight = {
        paddingRight: '8px'
    };
    styles.padSmallTop = {
        paddingTop: '8px'
    };
    styles.padSmallBottom = {
        paddingBottom: '8px'
    };
    styles.nowrap = {
        whiteSpace: 'nowrap'
    };
    styles.cursorPointer = {
        cursor: 'pointer'
    };
    styles.cursorDisabled = {
        cursor: 'not-allowed'
    };
    styles.transitionAll = {
        transition: 'all .5s ease-out'
    };
    styles.spin = {
        animationName: 'spin',
        animationDuration: '1000ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        display: 'inline-block'
    };
})(styles = exports.styles || (exports.styles = {}));
