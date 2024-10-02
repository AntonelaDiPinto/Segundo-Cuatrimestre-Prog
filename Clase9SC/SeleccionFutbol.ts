
import { Futbolista } from "./Futbolista";
import { Masajista } from "./Masajista";
import { Entrenador } from "./Entrenador";

export class SeleccionFutbol {
    private nombre: string;
    private entrenador: Entrenador;
    private futbolistas: Futbolista[];
    private masajista: Masajista;

    constructor(entrenador: Entrenador, futbolistas: Futbolista[], masajista: Masajista){
        this.entrenador = entrenador;
        this.futbolistas = futbolistas;
        this.masajista = masajista;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEntrenador(): Entrenador {
        return this.entrenador;
    }

    public getFutbolista(): Futbolista[] {
        return this.futbolistas;
    }

    public getMasajista(): Masajista {
        return this.masajista;
    }

    public setEntrenador(entrenador: Entrenador): void {
        this.entrenador = entrenador;
    }

    public setMasajista(masajista: Masajista): void {
        this.masajista = masajista;
    }

    public incorporarFutbolista(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string, numeroCamiseta: number, posicion: string): void {
        let nuevoFutbolista: Futbolista = new Futbolista(nombre, apellido, pasaporte, fechaNacimiento, numeroCamiseta, posicion); 
            this.futbolistas.push(nuevoFutbolista);
    }

    public darBajaFutbolista(pasaporte: number) {
        this.futbolistas.splice(pasaporte);
    }
}



