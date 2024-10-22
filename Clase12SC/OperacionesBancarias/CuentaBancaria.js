"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(titular, banco, saldo) {
        this.saldo = 0;
        this.titular = titular;
        this.banco = banco;
        this.saldo = saldo;
    }
    CuentaBancaria.prototype.getTitular = function () {
        return this.titular;
    };
    CuentaBancaria.prototype.getBanco = function () {
        return this.banco;
    };
    CuentaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    CuentaBancaria.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    CuentaBancaria.prototype.setBanco = function (banco) {
        this.banco = banco;
    };
    CuentaBancaria.prototype.depositar = function (cantidad) {
        this.saldo += cantidad;
        console.log("Se efectu\u00F3 un dep\u00F3sito de $".concat(cantidad, " pesos. Nuevo saldo en la cuenta: $").concat(this.saldo, " pesos."));
    };
    CuentaBancaria.prototype.retirar = function (cantidad) {
        if (cantidad > this.saldo) {
            console.log('Saldo insuficiente en la cuenta.');
        }
        else {
            this.saldo -= cantidad;
            console.log("Se retir\u00F3 un total de $".concat(cantidad, " pesos. Nuevo saldo en la cuenta: ").concat(this.saldo, " pesos."));
        }
    };
    return CuentaBancaria;
}());
exports.CuentaBancaria = CuentaBancaria;
