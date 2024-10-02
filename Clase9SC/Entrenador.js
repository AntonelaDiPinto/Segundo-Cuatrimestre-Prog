"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrenador = void 0;
var Integrante_1 = require("./Integrante");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, pasaporte, fechaNacimiento, edad) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaNacimiento) || this;
        _this.edad = edad;
        return _this;
    }
    Entrenador.prototype.getEdad = function () {
        return this.edad;
    };
    Entrenador.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Entrenador;
}(Integrante_1.Integrante));
exports.Entrenador = Entrenador;
