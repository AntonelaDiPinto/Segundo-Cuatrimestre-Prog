"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figura = void 0;
var Figura = /** @class */ (function () {
    function Figura(nombre) {
        this.nombre = nombre;
    }
    Figura.prototype.getNombre = function () {
        return this.nombre;
    };
    Figura.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Figura;
}());
exports.Figura = Figura;
