import { Integrante } from "./Integrante";

export class Masajista extends Integrante {
    private titulo: string;
    private universidad: string;

    constructor(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string, titulo: string, universidad: string) {
        super(nombre, apellido, pasaporte, fechaNacimiento);
        this.titulo = titulo;
        this.universidad = universidad;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getUniversidad(): string {
        return this.universidad;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
   }

   public setUniversidad(universidad: string): void {
    this.universidad = universidad;
}
}