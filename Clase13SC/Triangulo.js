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
exports.Triangulo = void 0;
var Figura_1 = require("./Figura");
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura, nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.getBase = function () {
        return this.base;
    };
    Triangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Triangulo.prototype.setBase = function (base) {
        this.base = base;
    };
    Triangulo.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Triangulo.prototype.getArea = function () {
        return this.base * this.altura / 2;
    };
    Triangulo.prototype.getPerimetro = function () {
        return 3 * this.base;
    };
    return Triangulo;
}(Figura_1.Figura));
exports.Triangulo = Triangulo;
