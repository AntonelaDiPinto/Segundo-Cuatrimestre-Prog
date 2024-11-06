export class Servicio {
    private nombre: string;
    private precio: number;
    private incluido: boolean;

    constructor (nombre: string, precio: number, incluido: boolean) {
        this.nombre = nombre;
        this.precio = precio;
        this.incluido = incluido;        
    }

    public getMostrarPrecio () :number {
        return this.precio;
    } 

    public getMostrarNombre():string{
        return this.nombre;
    }
}