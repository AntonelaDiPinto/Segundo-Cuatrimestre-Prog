export abstract class Figura2D {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public abstract getArea(): number;

    public abstract getPerimetro(): number;
}