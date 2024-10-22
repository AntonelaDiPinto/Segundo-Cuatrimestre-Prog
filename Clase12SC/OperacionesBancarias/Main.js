"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CuentaCorriente_1 = require("./CuentaCorriente");
var CuentaDeAhorros_1 = require("./CuentaDeAhorros");
//Instanciar Cuenta Corriente:
var CuentaCorrienteSalgado = new CuentaCorriente_1.CuentaCorriente("Salgado José Alfredo", "Santander Río", 0);
//Instanciar Cuenta de Ahorros:
var CuentaDeAhorrosPacheco = new CuentaDeAhorros_1.CuentaDeAhorros("Pacheco Verónica", "HSBC", 0);
console.log(CuentaCorrienteSalgado.getSaldo());
CuentaCorrienteSalgado.depositar(58000);
CuentaCorrienteSalgado.tipoDeCuenta();
console.log(CuentaCorrienteSalgado.getSaldo());
CuentaCorrienteSalgado.retirar(60000);
