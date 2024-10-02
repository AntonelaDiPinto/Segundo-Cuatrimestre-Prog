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
exports.Futbolista = void 0;
var Integrante_1 = require("./Integrante");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, pasaporte, fechaNacimiento, numeroCamiseta, posicion) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaNacimiento) || this;
        _this.numeroCamiseta = numeroCamiseta;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.getNumeroCamiseta = function () {
        return this.numeroCamiseta;
    };
    Futbolista.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.setNumeroCamiseta = function (numeroCamiseta) {
        this.numeroCamiseta = numeroCamiseta;
    };
    Futbolista.prototype.setPosicion = function (posicion) {
        this.posicion = posicion;
    };
    return Futbolista;
}(Integrante_1.Integrante));
exports.Futbolista = Futbolista;
