import { Electrodomestico } from "./Electrodomestico";

export class Lavarropas extends Electrodomestico {
  private capacidad: number;
  private tipoCarga: string; //superior o frontal
  private velocidad: number;
  private modelo: number;
  private programas: string [] = [];

  constructor(
    nombre: string,
    marca: string,
    conectividad: boolean,
    capacidad: number,
    modelo: number,
    tipoCarga: string,
    velocidad: number
  ) {
    super(nombre, marca, conectividad);
    this.capacidad = capacidad;
    this.tipoCarga = tipoCarga;
    this.velocidad = velocidad;
    this.modelo = modelo;

    // se admiten solo 2 modelos de lavarropas tipo 1 y tipo 2
    if (this.modelo === 1) {
      this.programas = ["rapido", "eco", "largo"];
    } else if (this.modelo === 2) {
      this.programas = ["rapido", "largo"];
    } else {
      console.log("el programa seleccionado no existe");
    }
  }

  public encender(): void {
    this.prendido = true;
    console.log(`Se encendio el lavarropas ${this.nombre}`);
  }

  public apagar(): void {
    if (this.prendido) {
      this.prendido = false;
      console.log(`Se apago el lavarropas ${this.nombre}`);
    } else {
      console.log(`el lavarropas ${this.nombre} ya esta apagado`);
    }
  }

  public actualizarSoftware(): void {
    if (this.conectividad && this.prendido) {
      console.log("El Sistema se actualizo y se agrego un modo desagote");
    } else if (!this.conectividad) {
      console.log("El Electrodoméstico NO tiene conectividad");
    } else if (!this.prendido) {
      console.log("El Electrodoméstico se encuentra apagado");
    }
  }

  public iniciar(): void {
    if (this.prendido) {
      console.log("El Programa inicio");
    } else {
      console.log("El Electrodoméstico se encuentra apagado");
    }
  }

  public pausar(): void {
    if (this.prendido) {
      console.log("El Programa pauso");
    } else {
      console.log("No se esta ejecutando ningun programa");
    }
  }

  public elegirPrograma(programa: string): void {
    if (this.programas.includes(programa)) {
      if (!this.prendido) {
        console.log("Encienda el lavarropas");
      } else {
        console.log(`Se selecciono el programa ${programa}`);
      }
    } else {
      console.log(`Este lavarropas no soporta el programa ${programa}`);
    }
  }

  public mostrarElectrodomestico(): string {
    return `El lavarropas ${this.nombre} de marca ${this.marca} modelo ${this.modelo} y su capacidad es de ${this.capacidad} tipo de carga ${this.tipoCarga} con conectividad ${this.conectividad} y velocidad ${this.velocidad}`;
  }
}
