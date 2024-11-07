/*
si tengo una clase  cancion, un usuario y una empresa que vende canciones. 
Y quiero saber cuando a un usuario le gusta una cancion, 
y tengo usuarios que les gusta una cancion si el autor es "luis perales" 
y otras que les gusta si la cancion dura menos de 3 minutos y otro si la 
discografica es tal.  algunos usuarios cambian de gustos intespestivamente */
//strategy

export class Cancion{
    private nombre:string;
    private duracion:number;
    private autor:string;
   
    constructor(autor: string, duracion: number, nombre:string) {
        this.autor = autor;
        this.duracion = duracion;
        this.nombre = nombre;
      }


      public getNombre(): string {
        return this.nombre;
      }
      public getDuracion(): number {
        return this.duracion;
      }
      public getAutor(): string {
        return this.autor;
      } 
      
    }
