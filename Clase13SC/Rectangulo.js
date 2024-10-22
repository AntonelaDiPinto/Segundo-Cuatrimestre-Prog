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
exports.Rectangulo = void 0;
var Figura_1 = require("./Figura");
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(base, altura, nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.setBase = function (base) {
        this.base = base;
    };
    Rectangulo.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Rectangulo.prototype.getArea = function () {
        return this.base * this.altura;
    };
    Rectangulo.prototype.getPerimetro = function () {
        return 2 * (this.base + this.altura);
    };
    return Rectangulo;
}(Figura_1.Figura));
exports.Rectangulo = Rectangulo;
