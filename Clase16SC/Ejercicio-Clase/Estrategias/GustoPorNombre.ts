import { Cancion } from "../Cancion";
import { EstrategiaGusto } from "./EstrategiaGusto";


export class GustoPorNombre extends EstrategiaGusto{
    private nombreCancion:string;
    constructor(n:string){
        super("Gusto por nombre");
        this.nombreCancion=n;
    }
    leGusta( cancion: Cancion): boolean {
        return cancion.getNombre()==this.nombreCancion;
    }
}