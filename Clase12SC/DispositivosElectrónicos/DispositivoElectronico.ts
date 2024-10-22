export abstract class DispositivoElectronico {
    private nombre: string;
    private estado: boolean;

    constructor(nombre: string, estado: boolean) {
        this.nombre = nombre;
        this.estado = false; 
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEstado(): boolean {
        return this.estado;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    } 

    public encender(): void {
        this.estado = true;
        console.log(this.nombre + " está encendido.");
    }

    public apagar(): void {
        this.estado = false;
        console.log(this.nombre + " está apagado.");
    }

    // Método abstracto que debe ser implementado por las subclases hijas Televisión y Radio.

    public abstract funcionalidadEspecial(): void;
}

