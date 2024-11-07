import { Contenido} from "./Interface";

// Clase Carpeta clase compuesta, puede contener archivos y otras carpetas)
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
    mostrarContenido(): void {
        console.log(`Carpeta: ${this.nombre}`);
        this.contenidos.forEach(contenido => contenido.mostrarContenido());
    }
}