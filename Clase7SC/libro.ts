export class Libro {
    private titulo : string;
    private autor : string;
    private editorial : string;

    constructor (titulo: string, autor: string, editorial: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;

    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }
}