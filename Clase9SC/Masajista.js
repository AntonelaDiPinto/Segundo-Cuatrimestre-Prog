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
exports.Masajista = void 0;
var Integrante_1 = require("./Integrante");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, pasaporte, fechaNacimiento, titulo, universidad) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaNacimiento) || this;
        _this.titulo = titulo;
        _this.universidad = universidad;
        return _this;
    }
    Masajista.prototype.getTitulo = function () {
        return this.titulo;
    };
    Masajista.prototype.getUniversidad = function () {
        return this.universidad;
    };
    Masajista.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Masajista.prototype.setUniversidad = function (universidad) {
        this.universidad = universidad;
    };
    return Masajista;
}(Integrante_1.Integrante));
exports.Masajista = Masajista;
