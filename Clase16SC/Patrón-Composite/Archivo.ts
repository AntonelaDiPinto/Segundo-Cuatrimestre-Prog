//Clase Archivo (clase simple, hoja en la estructura)
// Crear la clase Archivo (Hoja)
// El Archivo es una clase que implementa la interfaz Información, pero no permite agregar ni eliminar componentes, ya que es una hoja en el patrón Composite.

import { Contenido } from "./Interfaz";

export class Archivo implements Contenido {
    private nombre: string;
    private tamanio: number;

    constructor(nombre: string, tamanio: number) {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }

    mostrarEstructura(): void {
        console.log(`Archivo: ${this.nombre} | Tamaño: ${this.tamanio} KB`);
    }
}



