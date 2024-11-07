import { Contenido } from "./Interface";

//Clase Archivo (clase simple, hoja en la estructura)
export class Archivo implements Contenido {
    private nombre: string;
    private tamanio: number;

    constructor(nombre: string, tamanio: number) {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }

    mostrarContenido(): void {
        console.log(`Archivo: ${this.nombre} | Tamaño: ${this.tamanio} KB`);
    }
}



