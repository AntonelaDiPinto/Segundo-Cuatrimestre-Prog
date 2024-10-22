export abstract class Figura3D {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public abstract getVolumen(): number;
}