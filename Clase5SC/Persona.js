var Persona = /** @class */ (function () {
    //Funcion Constructora:
    function Persona(nombre, dni) {
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
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    /*public getGenero(): string {
        return this.genero;
    }*/
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.caminar = function () {
        return "Caminando";
    };
    Persona.prototype.hablar = function () {
        return "Hablando";
    };
    Persona.prototype.dormir = function () {
        return "Durmiendo";
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Persona;
}());
var persona1 = new Persona("Antonela", 33681920);
console.log("El nombre de la persona es " + persona1.getNombre() + " y su DNI es " + persona1.getDni());
persona1.setNombre("Carla");
console.log("Se modifico el nombre de la persona y ahora es: " + persona1.getNombre());
