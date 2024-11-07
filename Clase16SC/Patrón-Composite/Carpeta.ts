// Clase Carpeta clase compuesta, puede contener archivos y otras carpetas)
// Crear la clase Carpeta (Componente Compuesto)
// La Carpeta es un contenedor que puede contener tanto archivos como otras carpetas. Implementa los métodos agregar y eliminar para gestionar su contenido además del método de la interfaz mostrar Información.

import { Contenido } from "./Interfaz";

export class Carpeta implements Contenido {
    private nombre: string;
    private contenidos: Contenido[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // Método para agregar un archivo o carpeta
    public agregar(contenido: Contenido): void {
        this.contenidos.push(contenido);
    }

    // Método para eliminar un archivo o carpeta
    public eliminar(contenido: Contenido): void {
        const index = this.contenidos.indexOf(contenido);
        if (index > -1) {
            this.contenidos.splice(index, 1);
        }
    }

    // Mostrar detalles de los contenidos de la carpeta
    mostrarEstructura(): void {
        console.log(`Carpeta: ${this.nombre}`);
        this.contenidos.forEach(contenido => contenido.mostrarEstructura());
    }
}