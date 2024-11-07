"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carpeta = void 0;
// Clase Carpeta clase compuesta, puede contener archivos y otras carpetas)
var Carpeta = /** @class */ (function () {
    function Carpeta(nombre) {
        this.contenidos = [];
        this.nombre = nombre;
    }
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
    Carpeta.prototype.mostrarContenido = function () {
        console.log("Carpeta: ".concat(this.nombre));
        this.contenidos.forEach(function (contenido) { return contenido.mostrarContenido(); });
    };
    return Carpeta;
}());
exports.Carpeta = Carpeta;
