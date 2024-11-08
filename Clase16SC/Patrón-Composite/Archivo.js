"use strict";
//Clase Archivo (clase simple, hoja en la estructura)
// Crear la clase Archivo (Hoja)
// El Archivo es una clase que implementa la interfaz Información, pero no permite agregar ni eliminar componentes, ya que es una hoja en el patrón Composite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archivo = void 0;
var Archivo = /** @class */ (function () {
    function Archivo(nombre, tamanio) {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }
    // Getters y Setters
    Archivo.prototype.getNombre = function () {
        return this.nombre;
    };
    Archivo.prototype.getTamanio = function () {
        return this.tamanio;
    };
    Archivo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Archivo.prototype.setTamanio = function (tamanio) {
        this.tamanio = tamanio;
    };
    Archivo.prototype.agregar = function (contenido) {
        console.log("Un archivo no puede agregar contenido.");
    };
    Archivo.prototype.eliminar = function (contenido) {
        console.log("Un archivo no puede eliminar contenido.");
    };
    // Mostrar detalles de los archivos
    Archivo.prototype.mostrarEstructura = function () {
        console.log("Archivo: ".concat(this.nombre, " | Tama\u00F1o: ").concat(this.tamanio, " KB"));
    };
    return Archivo;
}());
exports.Archivo = Archivo;
