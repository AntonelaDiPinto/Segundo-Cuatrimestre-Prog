import { Servicio } from "./Servicio";

export abstract class Habitacion {
    protected numero: number;
    protected disponible: boolean = true;
    protected precioBase: number;
    protected capacidad: number;
    protected servicios: Servicio[];

    constructor (numero: number, precioBase: number, capacidad: number) {
        this.numero = numero;
        this.precioBase = precioBase;
        this.capacidad = capacidad;
        this.servicios = [];
        let television : Servicio=new Servicio ("Television", 0, true);
        let Aireacond : Servicio=new Servicio ("Aire Acondicionado", 0, true);
        this.servicios.push(television);
        this.servicios.push(Aireacond);
    }

    public reservar (): void {
        this.disponible = false;
        console.log ("La habitacion ha sido reservada!");
    } 

    public liberar (): void {
        this.disponible = true;
        this.servicios = [];

        console.log ("La habitacion se ha desocupado!");
    } 

    abstract calcularPrecio(precioServicios:number): number;
    abstract mostrarInformacion(): string;

    public agregarServicio(nuevoservicio: Servicio): void {
        this.servicios.push(nuevoservicio);
        console.log("Servicio agregado a la habitación "+nuevoservicio.getMostrarNombre()+" Valor: "+nuevoservicio.getMostrarPrecio());                   
    }

    /*
    private serviciosGratis () {
        let television : Servicio=new Servicio ("Television", 0, true);
        let Aireacond : Servicio=new Servicio ("Aire Acondicionado", 0, true);
        this.servicios.push(television);
        this.servicios.push(Aireacond);
    }
    */

    public mostrarServicios () {
            console.log (this.servicios);            
    }
}