"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeleccionFutbol = void 0;
var Futbolista_1 = require("./Futbolista");
var SeleccionFutbol = /** @class */ (function () {
    function SeleccionFutbol(entrenador, futbolistas, masajista) {
        this.entrenador = entrenador;
        this.futbolistas = futbolistas;
        this.masajista = masajista;
    }
    SeleccionFutbol.prototype.getNombre = function () {
        return this.nombre;
    };
    SeleccionFutbol.prototype.getEntrenador = function () {
        return this.entrenador;
    };
    SeleccionFutbol.prototype.getFutbolista = function () {
        return this.futbolistas;
    };
    SeleccionFutbol.prototype.getMasajista = function () {
        return this.masajista;
    };
    SeleccionFutbol.prototype.setEntrenador = function (entrenador) {
        this.entrenador = entrenador;
    };
    SeleccionFutbol.prototype.setMasajista = function (masajista) {
        this.masajista = masajista;
    };
    /*public incorporarFutbolista(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string, numeroCamiseta: number, posicion: string): void {
        let nuevoFutbolista: Futbolista = new Futbolista(nombre, apellido, pasaporte, fechaNacimiento, numeroCamiseta, posicion);
            this.futbolistas.push(nuevoFutbolista);
    }*/
    SeleccionFutbol.prototype.darBajaFutbolista = function (pasaporte) {
        this.futbolistas.splice(pasaporte);
    };
    return SeleccionFutbol;
}());
exports.SeleccionFutbol = SeleccionFutbol;
// Crear Futbolistas
var futbolistas = [new Futbolista_1.Futbolista("Genaro", "Arouxet", 36895621, "19-06-1992", 8, "Delantero"),
    new Futbolista_1.Futbolista("Valentino", "Emiliozzi", 36740365, "03-08-1992", 5, "Central"),
    new Futbolista_1.Futbolista("Agustin", "Otero", 35215896, "25-09-1995", 1, "Arquero")
];
console.log(futbolistas);
// Crear Seleccion de Futbol
