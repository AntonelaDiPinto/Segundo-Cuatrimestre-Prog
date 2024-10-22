import { CuentaBancaria } from "./CuentaBancaria";

export class CuentaCorriente extends CuentaBancaria {

     constructor(titular: string, banco: string, saldo: number) {
        super(titular, banco, saldo);
     }

     public tipoDeCuenta(): void {
         console.log(`La cuenta de ${this.titular} del Banco ${this.banco} es una Cuenta Corriente.`);
     }
}