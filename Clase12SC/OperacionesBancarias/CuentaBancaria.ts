import { OperacionesBancarias } from "./OperacionesBancarias";

export abstract class CuentaBancaria implements OperacionesBancarias {
    protected titular: string;
    protected banco: string;
    private saldo: number = 0;

    constructor(titular: string, banco: string, saldo: number) {
        this.titular = titular;
        this.banco = banco;
        this.saldo = saldo; 
    }

    public getTitular(): string {
        return this.titular;
    }

    public getBanco(): string {
        return this.banco;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public setBanco(banco: string): void {
        this.banco = banco;
    }

    public depositar(cantidad: number): void {
        this.saldo += cantidad;
        console.log(`Se efectuó un depósito de $${cantidad} pesos. Nuevo saldo en la cuenta: $${this.saldo} pesos.`);
    }

    public retirar(cantidad: number): void {
        if (cantidad > this.saldo) {
            console.log('Saldo insuficiente en la cuenta.');
        } else {
            this.saldo -= cantidad;
            console.log(`Se retiró un total de $${cantidad} pesos. Nuevo saldo en la cuenta: ${this.saldo} pesos.`);
        }
    }

    public abstract tipoDeCuenta(): void;
}