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

    // Getters y Setters

    public getNombre(): string {
        return this.nombre;
    }

    public getTamanio(): number {
        return this.tamanio;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public setTamanio(tamanio: number) {
        this.tamanio = tamanio;
    }

    // Mostrar detalles de los archivos
    
    public mostrarEstructura(): void {
        console.log(`Archivo: ${this.nombre} | Tamaño: ${this.tamanio} KB`);
    }
}



