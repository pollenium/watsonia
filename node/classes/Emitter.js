"use strict";
exports.__esModule = true;
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.callbacks = [];
    }
    Emitter.prototype.on = function (callback) {
        this.callbacks.push(callback);
    };
    Emitter.prototype.once = function (callback) {
        var _this = this;
        this.on(function (data) {
            _this.callbacks.splice(_this.callbacks.indexOf(callback), 1);
            callback(data);
        });
    };
    Emitter.prototype.emit = function (data) {
        var _this = this;
        if (this.callbacks.length === 0) {
            throw new Error('No Callbacks');
        }
        setTimeout(function () {
            _this.callbacks.forEach(function (callback) {
                callback(data);
            });
        }, 1);
    };
    Emitter.prototype.emitIfCallbacks = function (data) {
        if (this.callbacks.length > 0) {
            this.emit(data);
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;
