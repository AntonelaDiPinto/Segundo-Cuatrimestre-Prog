import { Cancion } from "../Cancion";

export abstract class  EstrategiaGusto {
    private nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
   abstract leGusta( cancion: Cancion): boolean;
  }