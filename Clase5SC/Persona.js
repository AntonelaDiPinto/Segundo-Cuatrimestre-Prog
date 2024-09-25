var Persona = /** @class */ (function () {
    //Funcion Constructora:
    function Persona(nombre, dni, genero) {
        this.nombre = nombre;
        this.dni = dni;
        if (genero == undefined) {
            this.genero = "Sin genero";
        }
        else
            this.genero = genero;
    }
    //Metodos:
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getGenero = function () {
        return this.genero;
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
        if (nombre != "") {
            this.nombre = nombre;
        }
    };
    Persona.prototype.setGenero = function (genero) {
        if (genero != "") {
            this.genero = genero;
        }
    };
    return Persona;
}());
var persona1 = new Persona("Antonela", 33681920); // Se crea una persona de clase Persona y se instancia a esa persona.
console.log("El nombre de la persona es " + persona1.getNombre() + " y su DNI es " + persona1.getDni());
persona1.setNombre("Carla");
console.log("Se modifico el nombre de la persona y ahora es: " + persona1.getNombre());
var persona2 = new Persona("Facundo", 36745322, "Masculino");
var persona3 = new Persona("Rosana", 14906242);
console.log(persona2.getGenero());
console.log(persona3);
