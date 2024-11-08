"use strict";
// Clase Carpeta clase compuesta, puede contener archivos y otras carpetas)
// Crear la clase Carpeta (Componente Compuesto)
// La Carpeta es un contenedor que puede contener tanto archivos como otras carpetas. Implementa los métodos agregar y eliminar para gestionar su contenido además del método de la interfaz mostrar Información.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carpeta = void 0;
var Carpeta = /** @class */ (function () {
    function Carpeta(nombre) {
        this.contenidos = [];
        this.nombre = nombre;
    }
    // Getters y Setters
    Carpeta.prototype.getNombre = function () {
        return this.nombre;
    };
    Carpeta.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    // Método para agregar un archivo o carpeta
    Carpeta.prototype.agregar = function (contenido) {
        this.contenidos.push(contenido);
    };
    // Método para eliminar un archivo o carpeta
    Carpeta.prototype.eliminar = function (contenido) {
        var index = this.contenidos.indexOf(contenido);
        if (index > -1) {
            this.contenidos.splice(index, 1);
        }
    };
    // Mostrar detalles de los contenidos de la carpeta
    Carpeta.prototype.mostrarEstructura = function () {
        console.log("Carpeta: ".concat(this.nombre));
        this.contenidos.forEach(function (contenido) { return contenido.mostrarEstructura(); });
    };
    return Carpeta;
}());
exports.Carpeta = Carpeta;
