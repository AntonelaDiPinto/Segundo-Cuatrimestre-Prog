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
exports.CuentaCorriente = void 0;
var CuentaBancaria_1 = require("./CuentaBancaria");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(titular, banco, saldo) {
        return _super.call(this, titular, banco, saldo) || this;
    }
    CuentaCorriente.prototype.tipoDeCuenta = function () {
        console.log("La cuenta de ".concat(this.titular, " del Banco ").concat(this.banco, " es una Cuenta Corriente."));
    };
    return CuentaCorriente;
}(CuentaBancaria_1.CuentaBancaria));
exports.CuentaCorriente = CuentaCorriente;
