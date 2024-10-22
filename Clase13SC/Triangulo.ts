import { Figura2D } from "./Figura2D";

export class Triangulo extends Figura2D {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number, nombre: string){
        super(nombre);
        this.base = base;
        this.altura = altura;
    
    }

    public getBase(): number {
        return this.base;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setBase(base: number) {
        this.base = base;
    }

    public setAltura(altura: number) {
        this.altura = altura;
    }

    public getArea(): number {
        return this.base * this.altura / 2;
    }

    public getPerimetro(): number {
        return 3 * this.base;
    }
}