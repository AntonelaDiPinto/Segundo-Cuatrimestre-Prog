"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archivo = void 0;
//Clase Archivo (clase simple, hoja en la estructura)
var Archivo = /** @class */ (function () {
    function Archivo(nombre, tamanio) {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }
    Archivo.prototype.mostrarContenido = function () {
        console.log("Archivo: ".concat(this.nombre, " | Tama\u00F1o: ").concat(this.tamanio, " KB"));
    };
    return Archivo;
}());
exports.Archivo = Archivo;
