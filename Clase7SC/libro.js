"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    return Libro;
}());
exports.Libro = Libro;
