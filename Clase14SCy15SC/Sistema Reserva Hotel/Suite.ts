import { Habitacion } from "./Habitacion";
import {Servicio} from "./Servicio";

export class Suite extends Habitacion {
    private tipo: string = "Suite";
    private adicionalSuite: number;

    constructor (numero: number, precioBase: number, capacidad: number, adicionalSuite: number) {
        super(numero, precioBase, capacidad);
        this.adicionalSuite = adicionalSuite;
        let servDesp : Servicio = new Servicio ("Despertador", 0, true);
        let servSpa : Servicio = new Servicio ("Spa", 0, true);
        this.servicios.push(servDesp);
        this.servicios.push(servSpa);
    }
    
    public calcularPrecio(): number {
        let precioServicios:number = 0;
        let precioCompleto : number = this.precioBase + this.adicionalSuite;
        for (let i = 0; i < this.servicios.length; i++) {
            precioServicios += this.servicios[i].getMostrarPrecio();            
        }
        precioCompleto += precioServicios;
        console.log ("El precio total de la habitacion con los servicios es: $" + precioCompleto);
        return precioCompleto;
    }

    public mostrarInformacion(): string {
        let precioCompleto : number = this.precioBase + this.adicionalSuite;
        console.log ("Habitación tipo: " + this.tipo + ", Número: " + this.numero + ", Disponibilidad: " + this.disponible + ", Precio Base: $" + precioCompleto + ", Capacidad: " + this.capacidad);
        return "";
    }

}