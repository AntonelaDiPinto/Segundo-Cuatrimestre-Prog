import { Integrante } from "./Integrante";

export class Entrenador extends Integrante {
    private edad: number;

    constructor(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string, edad: number) {
        super(nombre, apellido, pasaporte, fechaNacimiento);
        this.edad = edad;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }
}