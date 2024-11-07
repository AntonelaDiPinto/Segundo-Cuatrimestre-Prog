import { Cancion } from "../Cancion";
import { EstrategiaGusto } from "./EstrategiaGusto";


export class GustoPorAutor extends EstrategiaGusto{
    private autor:string;
    constructor(autor:string){
        super("Gusto por autor");
        this.autor=autor;
    }
    leGusta( cancion: Cancion): boolean {
        return cancion.getAutor()==this.autor;
    }


    public setAutor(nuevoAutor:string){//si al usuario le gusta otro autor
        this.autor=nuevoAutor;//cambia el autor con este metodo, no necesito crear
        //un nuevo estrategia porque el usuario ya tiene una
    }
}


//let estrategia:EstrategiaGusto=new GustoPorAutor("luis perales");
//cuando creo el gusto pongo el nombre del autor que le gusta al usuario
//en este caso luis perales