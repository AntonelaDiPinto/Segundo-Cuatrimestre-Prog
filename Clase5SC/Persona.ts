class Persona {
    //Atributos:
    //private altura: number;
    //private peso: number;
    private nombre: string;
    //private genero: string;
    private dni: number;

    //Funcion Constructora:

    constructor(nombre: string, dni: number) {
        this.nombre = nombre;
        this.dni = dni;
    }

    //Metodos:

    /*public getAltura(): number {
        return this.altura;
    }

    public getPeso(): number {
        return this.peso;
    }*/

    public getNombre(): string {
        return this.nombre;
    }

    /*public getGenero(): string {
        return this.genero;
    }*/

    public getDni(): number {
        return this.dni;
    }

    public caminar(): string {
        return "Caminando";
    }

    public hablar(): string {
        return "Hablando";
    }

    public dormir(): string {
        return "Durmiendo";
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

}

const persona1 = new Persona("Antonela", 33681920);

console.log("El nombre de la persona es " + persona1.getNombre() + " y su DNI es " + persona1.getDni());
persona1.setNombre("Carla");
console.log("Se modifico el nombre de la persona y ahora es: " + persona1.getNombre());
