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
exports.Cilindro = void 0;
var Figura3D_1 = require("./Figura3D");
var Cilindro = /** @class */ (function (_super) {
    __extends(Cilindro, _super);
    function Cilindro(nombre, base, altura) {
        var _this = _super.call(this, nombre) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Cilindro.prototype.getVolumen = function () {
        return this.base.getArea() * this.altura;
    };
    return Cilindro;
}(Figura3D_1.Figura3D));
exports.Cilindro = Cilindro;
