import { Electrodomestico } from "./Electrodomestico";

export class Microondas extends Electrodomestico {
  private capacidad: number;
  private potencia: number;
  private grill: boolean;

  constructor(
    nombre: string,
    marca: string,
    conectividad: boolean,
    capacidad: number,
    grill: boolean,
    potencia: number
  ) {
    super(nombre, marca, conectividad);
    this.capacidad = capacidad;
    this.grill = grill;
    this.potencia = potencia;
  }

  public encender(): void {
    this.prendido = true;
    console.log(`Se encendio el microondas ${this.nombre}`);
  }

  public apagar(): void {

    if (this.prendido){
        this.prendido = false;
        console.log(`Se apago el microondas ${this.nombre}`);}
        else {console.log(`el microondas ${this.nombre} ya esta apagado`);}
    
  }

  public actualizarSoftware(): void {
    if (this.conectividad && this.prendido) {
      console.log("El Sistema se está actualizando ");
    } else if (!this.conectividad) {
      console.log("Este microondas no tiene conectividad");
    } else if (!this.prendido) {
      console.log("El microondas se encuentra apagado");
    }
  }

  public descongelar(): void {
    if (this.prendido) {
      console.log(`Ya estoy descongelando`);
    } else {
      console.log("El microondas esta apagado");
    }
  }

  public calentar(): void {
    if (this.prendido) {
      console.log(`Ya estoy calentando`);
    } else {
      console.log("El microondas esta apagado");
    }
  }

  public iniciarGrill(): void {
    if (this.prendido) {
      if (this.grill) {
        console.log(`Ya encendi el grill`);
      } else {
        console.log("El microondas no posee grill");
      }
    } else {
      console.log("El microondas esta apagado");
    }
  }

  public mostrarElectrodomestico(): string {
    return `El microondas ${this.nombre} de marca ${this.marca} con capacidad de ${this.capacidad}, con conectividad ${this.conectividad}, con funcion de grill ${this.grill} y con potencia ${this.potencia} watts`;
  }
}
  