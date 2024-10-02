import { Integrante } from "./Integrante";

export class Futbolista extends Integrante {
    private numeroCamiseta: number;
    private posicion: string;

    constructor(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string, numeroCamiseta: number, posicion: string) {
        super(nombre, apellido, pasaporte, fechaNacimiento);
        this.numeroCamiseta = numeroCamiseta;
        this.posicion = posicion;
    }

    public getNumeroCamiseta(): number {
        return this.numeroCamiseta;
    }

    public getPosicion(): string {
        return this.posicion;
    }

    public setNumeroCamiseta(numeroCamiseta: number): void {
         this.numeroCamiseta = numeroCamiseta;
    }

    public setPosicion(posicion: string): void {
        this.posicion = posicion;
   }

}