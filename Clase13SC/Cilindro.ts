import { Figura3D } from "./Figura3D";
import { Circulo } from "./Circulo";

export class Cilindro extends Figura3D {
    private base: Circulo;
    private altura: number;

    constructor(nombre: string, base: Circulo, altura: number) {
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
    
    public getVolumen(): number {
        return this.base.getArea() * this.altura;
    }
}