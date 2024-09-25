class Persona {
    //Atributos:
    private nombre: string;
    private dni: number;
    private genero: string;

    //Funcion Constructora:
    constructor(nombre: string, dni: number, genero?: string) {
        this.nombre = nombre;
        this.dni = dni;
        if(genero == undefined) {
            this.genero = "Sin genero";
        } else this.genero = genero;
    }

    //Metodos:
    public getNombre(): string {
        return this.nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public getGenero(): string {
        return this.genero;
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
        if(nombre !="") {
        this.nombre = nombre;
        }
    }

    public setGenero(genero: string): void {
        if(genero !="") {
        this.genero = genero;
        }
    }

}

const persona1: Persona = new Persona("Antonela", 33681920); // Se crea una persona de clase Persona y se instancia a esa persona.

console.log("El nombre de la persona es " + persona1.getNombre() + " y su DNI es " + persona1.getDni());
persona1.setNombre("Carla");
console.log("Se modifico el nombre de la persona y ahora es: " + persona1.getNombre());

const persona2: Persona = new Persona("Facundo", 36745322, "Masculino");
const persona3: Persona = new Persona("Rosana", 14906242);
console.log(persona2.getGenero());
console.log(persona3);