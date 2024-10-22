import { Figura } from "./Figura";

export class Rectangulo extends Figura {
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
        return this.base * this.altura;
    }

    public getPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}