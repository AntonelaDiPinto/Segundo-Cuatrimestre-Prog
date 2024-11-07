import { Cancion } from "./Cancion";
import { EstrategiaGusto } from "./estrategias/EstrategiaGusto";
export class Usuario {
    private nombre: string;
    private estrategiaGusto: EstrategiaGusto;//gusta por X autor 
  
    constructor(nombre: string, estrategiaGusto: EstrategiaGusto) {
      this.nombre = nombre;
      this.estrategiaGusto = estrategiaGusto;
    }
  
    leGustaCancion(cancion: Cancion): boolean {
      return this.estrategiaGusto.leGusta(cancion);
    }


    public setEstrategia(nuevaEstrategia: EstrategiaGusto){
        this.estrategiaGusto=nuevaEstrategia;
    }
    
  }

//   let usuario:Usuario=new Usuario("pepe",estrategia);

//   usuario.leGustaCancion("una cancion");