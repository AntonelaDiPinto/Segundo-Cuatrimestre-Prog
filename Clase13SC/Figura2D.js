"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figura2D = void 0;
var Figura2D = /** @class */ (function () {
    function Figura2D(nombre) {
        this.nombre = nombre;
    }
    Figura2D.prototype.getNombre = function () {
        return this.nombre;
    };
    Figura2D.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Figura2D;
}());
exports.Figura2D = Figura2D;
