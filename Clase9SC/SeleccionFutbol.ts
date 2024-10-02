
import { Futbolista } from "./Futbolistas";
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

    public setFutbolista(futbolista: Futbolista[]): void {
        this.futbolistas = futbolista;
    }

    public incorporarFutbolista(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string, numeroCamiseta: number, posicion: string): void {
        let nuevoFutbolista: Futbolista = new Futbolista(nombre, apellido, pasaporte, fechaNacimiento, numeroCamiseta, posicion); 
            this.futbolistas.push(nuevoFutbolista);
    }

    public darBajaFutbolista(pasaporte: number) {
        this.futbolistas.splice(pasaporte);
    }
}

// Crear Futbolistas

let futbolista1 = new Futbolista("Genaro", "Arouxet", 36745322, "1996-06-19", 8, "Delantero");
let futbolista2 = new Futbolista("Valentino", "Emiliozzi", 35125896, "1995-02-08", 10, "Central");

// Crear Seleccion de Futbol


