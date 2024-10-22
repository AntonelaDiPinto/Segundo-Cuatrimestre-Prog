import { Figura2D } from "./Figura2D";

export class Circulo extends Figura2D{
    private radio: number;

    constructor(radio: number, nombre: string){
        super(nombre)
        this.radio = radio;   
    }

    public getRadio(): number {
        return this.radio;
    }

    public setRadio(radio: number): void {
        this.radio = radio;
    }

    public getArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    public getPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}