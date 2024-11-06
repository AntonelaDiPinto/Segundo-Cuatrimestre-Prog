import { Electrodomestico } from "./Electrodomestico";

export class Heladera extends Electrodomestico {
  private capacidad: number;
  private cantidadDePuertas: number;
  private freezer: boolean;
  private nivelDeFrio: number;
  private dispenserAgua: boolean;

  constructor(
    nombre: string,
    marca: string,
    conectividad: boolean,
    capacidad: number,
    cantidadDePuertas: number,
    freezer: boolean,
    dispenserAgua: boolean
  ) {
    super(nombre, marca, conectividad);
    this.capacidad = capacidad;
    this.freezer = freezer;
    this.nivelDeFrio = 0;
    this.dispenserAgua = dispenserAgua;
    this.cantidadDePuertas = cantidadDePuertas;
  }

  public encender(): void {
    this.prendido = true;
    console.log(`Se encendio la heladera ${this.nombre}`);
  }

  public apagar(): void {

    if (this.prendido){
    this.prendido = false;
    console.log(`Se apago la heladera ${this.nombre}`);}
    else {console.log(`la heladera ${this.nombre} ya esta apagada`);}
  }

  public actualizarSoftware(): void {
    if (this.conectividad && this.prendido) {
      console.log(
          "El Sistema se está actualizando y la heladera será mas eficiente pasando a A++ "
        );
    } else if (!this.prendido) {
      console.log("La heladera se encuentra apagada");
    } else if (!this.conectividad) {
      console.log("Esta heladera no tiene conectividad");
    }
  }

  public subirTemperatura(): void {
    if (this.prendido) {
      if (this.nivelDeFrio >= 0 && this.nivelDeFrio < 7) {
        this.nivelDeFrio += 1;
        console.log(`Nivel de frio = ${this.nivelDeFrio}`);

      } else {
        console.log(`Este nivel de frio no lo soporta la heladera`);
      }
    } else {
      console.log(`La heladera esta apagada`);
    }
  }

  public bajarTemperatura(): void {
    if (this.prendido) {
      if (this.nivelDeFrio > 0 && this.nivelDeFrio <= 7) {
        this.nivelDeFrio -= 1;
        console.log(`Nivel de frio = ${this.nivelDeFrio}`);
      } else {
        console.log(`Este nivel de frio no lo soporta la heladera`);
      }
    } else {
      console.log(`La heladera esta apagada`);
    }
  }

  public descongelar(): void {
    if (this.prendido) {
      this.nivelDeFrio = 0;

      console.log(`Se esta descongelando`);
    } else {
      console.log(`La heladera esta apagada`);
    }
  }

  public mostrarElectrodomestico(): string {
    return `La Heladera ${this.nombre} de marca ${this.marca} con capacidad de ${this.capacidad} y cantidad de puertas ${this.cantidadDePuertas} con conectividad ${this.conectividad} y con freezer ${this.freezer} y con dispenser de agua ${this.dispenserAgua} y nivel de frio ${this.nivelDeFrio}`;
  }
}
