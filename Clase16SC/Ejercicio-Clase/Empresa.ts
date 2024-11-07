import { Cancion } from "./Cancion";
import { Usuario } from "./Usuario";

export class Empresa {
  private nombre: string;
  private usuarios: Usuario[] = [];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  public agregarUsuario(usuario: Usuario) {
    if (!this.usuarios.includes(usuario)) {
      this.usuarios.push(usuario);
    }
  }

  public leGusta(usuario: Usuario, cancion: Cancion): boolean {//este metodo
    return usuario.leGustaCancion(cancion);//esta a modo de ejemplo, no es necesario
  }                                     //podria usarse para encontrar a todos los usuarios
}                                       //que les guste una cancion, pero hay que modificarlo
                                      //para recorrer todos los usuarios