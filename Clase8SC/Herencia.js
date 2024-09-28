"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor(volumenActual, canalActual) {
        this.estaPrendido = true;
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    return Televisor;
}());
exports.Televisor = Televisor;
