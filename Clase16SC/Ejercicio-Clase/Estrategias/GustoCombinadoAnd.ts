import { Cancion } from "../Cancion";
import { Usuario } from "../Usuario";
import { EstrategiaGusto } from "./EstrategiaGusto";
import { GustoPorAutor } from "./GustoPorAutor";
import { GustoPorNombre } from "./GustoPorNombre";


export class GustoCombinadoAnd extends EstrategiaGusto{
    private gusto1:EstrategiaGusto;
    private gusto2:EstrategiaGusto;
    constructor(gustoUno:EstrategiaGusto,gustoDos:EstrategiaGusto){
        super("Gusto combinado and");
        this.gusto1=gustoUno;
        this.gusto2=gustoDos;   
    }
    leGusta( cancion: Cancion): boolean {
        return this.gusto1.leGusta(cancion)&&this.gusto2.leGusta(cancion);
    }
}


let estrategi1:EstrategiaGusto=new GustoPorAutor("luis perales");
let estrategi2:EstrategiaGusto=new GustoPorNombre("dfsd");

let estrategia:EstrategiaGusto=new GustoCombinadoAnd(estrategi1,estrategi2);

let usuario1:Usuario=new Usuario("pepe",estrategi1);
usuario1.setEstrategia(estrategi2);