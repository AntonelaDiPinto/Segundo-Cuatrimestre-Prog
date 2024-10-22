import { CuentaCorriente } from "./CuentaCorriente";
import { CuentaDeAhorros } from "./CuentaDeAhorros";

//Instanciar Cuenta Corriente:

let CuentaCorrienteSalgado: CuentaCorriente = new CuentaCorriente("Salgado José Alfredo", "Santander Río", 0);

//Instanciar Cuenta de Ahorros:

let CuentaDeAhorrosPacheco: CuentaDeAhorros = new CuentaDeAhorros("Pacheco Verónica", "HSBC", 0);

console.log(CuentaCorrienteSalgado.getSaldo());
CuentaCorrienteSalgado.depositar(58000);
CuentaCorrienteSalgado.tipoDeCuenta();
console.log(CuentaCorrienteSalgado.getSaldo());
CuentaCorrienteSalgado.retirar(60000);

