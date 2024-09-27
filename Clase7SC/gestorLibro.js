"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLibros = void 0;
var libro_1 = require("./libro");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(nombre) {
        this.nombre = nombre;
        this.listaLibros = [];
    }
    GestorLibros.prototype.getNombre = function () {
        return this.nombre;
    };
    GestorLibros.prototype.getlistaLibros = function () {
        var copiaLibros = this.listaLibros.map(function (ejemplar) { return (__assign({}, ejemplar)); });
        return this.listaLibros;
    };
    GestorLibros.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    GestorLibros.prototype.setlistaLibros = function (listaLibros) {
        this.listaLibros = listaLibros;
    };
    /*public eliminarLibro(libroEliminado: Libro): void {
        if(libroEliminado != undefined && this.listaLibros.includes(libroEliminado)) { // El error parece estar en el includes
            const posicionLibro: number = this.listaLibros.indexOf(libroEliminado);
            this.listaLibros.splice(posicionLibro, 1); // Corregir el error
        }
    }

    public eliminarLibro(libroEliminado: Libro): void {
        const posicionLibro: number = this.listaLibros.indexOf(libroEliminado);
        this.listaLibros.splice(posicionLibro, 1);
    }*/
    GestorLibros.prototype.eliminarLibro = function (libroEliminado) {
        this.listaLibros.indexOf(libroEliminado);
        this.listaLibros.splice(1);
    };
    GestorLibros.prototype.agregarLibro = function (titulo, autor, editorial) {
        var nuevoLibro = new libro_1.Libro(titulo, autor, editorial); // Controlar Indefinidos.
        if (!this.listaLibros.some(function (ejemplar) {
            return ejemplar.getTitulo() == titulo &&
                ejemplar.getAutor() == autor &&
                ejemplar.getEditorial() == editorial;
        }))
            this.listaLibros.push(nuevoLibro);
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
