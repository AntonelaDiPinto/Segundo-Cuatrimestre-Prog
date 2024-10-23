import { DispositivoElectronico } from "./DispositivoElectronico";

export class Radio extends DispositivoElectronico {
    private frecuencia: string;
    private emisora: number;

    constructor(nombre: string, estado: boolean, frecuencia: string, emisora:number) {
        super(nombre, estado);
        this.frecuencia = frecuencia;
        this.emisora = emisora;
    }

    public getFrecuecia(): string {
        return this.frecuencia;
    }

    public getEmisora(): number {
        return this.emisora;
    }

    public setFrecuencia(frecuencia: string): void {
        this.frecuencia = frecuencia;
    }

    public setEmisora(emisora: number): void {
        this.emisora = emisora;
    }

    public funcionalidadEspecial(): void {
        if(this.estado) { 
        console.log(`La radio en la que se estaba escuchando radio ${this.getNombre()} ${this.frecuencia} ${this.emisora} está cambiando de emisora.`)
        } else {
            console.log("No se puede cambiar de emisora, la radio está apagada.");
        }
    }
}