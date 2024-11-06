import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class Standard extends Habitacion {
    private tipo: string = "Standard";

    constructor (numero: number, precioBase: number, capacidad: number) {
        super(numero, precioBase, capacidad);
    }
    
    public calcularPrecio(): number {
        let precioServicios:number = 0;
        let precioCompleto : number = 0;
        for (let i = 0; i < this.servicios.length; i++) {
            precioServicios += this.servicios[i].getMostrarPrecio();            
        }
        precioCompleto = this.precioBase + precioServicios;
        console.log ("El precio total de la habitacion con los servicios es: $" + precioCompleto);
        return precioCompleto;
    }

    public mostrarInformacion(): string {
        console.log ("Habitación tipo: " + this.tipo + ", Número: " + this.numero + ", Disponibilidad: " + this.disponible + ", Precio Base: $" + this.precioBase + ", Capacidad: " + this.capacidad);
        return "";
    }

}