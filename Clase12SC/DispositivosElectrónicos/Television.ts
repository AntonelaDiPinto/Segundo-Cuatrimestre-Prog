import { DispositivoElectronico } from "./DispositivoElectronico";

export class Televesion extends DispositivoElectronico  {
    private canal: number;

    constructor(nombre: string, estado: boolean, canal: number) {
        super(nombre, estado);
        this.canal = canal;
    }

    public getCanal(): number {
        return this.canal;
    }

    public setCanal(canal: number): void {
        this.canal = canal;
    }

    public funcionalidadEspecial(): void {
        if(this.estado) { 
            console.log(`El ${this.getNombre()} que estaba en el canal ${this.canal} está cambiando de canal.`);
        } else {
            console.log("No se puede cambiar de canal, el televisor está apagado.");
        }
    }
}