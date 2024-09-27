import {Libro} from "./libro";

export class GestorLibros {
    private nombre : string;
    private listaLibros : Libro[];

    constructor (nombre: string) {
        this.nombre = nombre;
        this.listaLibros = [];

    }

    public getNombre(): string {
        return this.nombre;
    }

    public getlistaLibros(): Libro[] {
        const copiaLibros: Libro[] = this.listaLibros.map(ejemplar =>({...ejemplar}) as Libro);
        return this.listaLibros;
    }

    public setNombre(nombre: string): void {
       this.nombre = nombre;
    }

    public setlistaLibros(listaLibros: Libro[]): void {
        this.listaLibros = listaLibros;
     }

    /*public eliminarLibro(libroEliminado: Libro): void {
        if(libroEliminado != undefined && this.listaLibros.includes(libroEliminado)) { // El error parece estar en el includes
            const posicionLibro: number = this.listaLibros.indexOf(libroEliminado);
            this.listaLibros.splice(posicionLibro, 1); // Corregir el error
        }
    }*/

    public eliminarLibro(libroEliminado: Libro): void {
        if(libroEliminado != undefined) {
        const posicionLibro: number = this.listaLibros.indexOf(libroEliminado);
        this.listaLibros.splice(posicionLibro, 1);
      }
    }

    public agregarLibro(titulo: string, autor: string, editorial: string): void {
        let nuevoLibro: Libro = new Libro(titulo, autor, editorial); // Controlar Indefinidos.

        if(!this.listaLibros.some(ejemplar => 
            ejemplar.getTitulo() == titulo &&
            ejemplar.getAutor() == autor &&
            ejemplar.getEditorial() == editorial))

            this.listaLibros.push(nuevoLibro);
    }

}