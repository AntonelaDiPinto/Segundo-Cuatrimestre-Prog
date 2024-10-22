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
exports.Circulo = void 0;
var Figura_1 = require("./Figura");
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio, nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.getArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    Circulo.prototype.getPerimetro = function () {
        return 2 * Math.PI * this.radio;
    };
    return Circulo;
}(Figura_1.Figura));
exports.Circulo = Circulo;
