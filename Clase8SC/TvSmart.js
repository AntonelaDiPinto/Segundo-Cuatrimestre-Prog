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
var Herencia_1 = require("./Herencia");
var smartTv = /** @class */ (function (_super) {
    __extends(smartTv, _super);
    function smartTv(volumenActual, canalActual, sistemaOperativo) {
        var _this = _super.call(this, volumenActual, canalActual) || this;
        _this.sistemaOperativo = sistemaOperativo;
        return _this;
    }
    smartTv.prototype.setSistemaOperativo = function (nuevoSistemaOperativo) {
        this.sistemaOperativo = nuevoSistemaOperativo;
    };
    smartTv.prototype.getCanal = function () {
        return this.canalActual;
    };
    return smartTv;
}(Herencia_1.Televisor));
var tvSmart = new smartTv(10, 25, "Android");
console.log(tvSmart);
tvSmart.prenderApagar();
console.log(tvSmart);
tvSmart.setSistemaOperativo("Google TV");
console.log(tvSmart);
console.log(tvSmart.getCanal());
