"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integrante = void 0;
var Integrante = /** @class */ (function () {
    function Integrante(nombre, apellido, pasaporte, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
    Integrante.prototype.getNombre = function () {
        return this.nombre;
    };
    Integrante.prototype.getApellido = function () {
        return this.apellido;
    };
    Integrante.prototype.getPasaporte = function () {
        return this.pasaporte;
    };
    Integrante.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    Integrante.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Integrante.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Integrante.prototype.setPasaporte = function (pasaporte) {
        this.pasaporte = pasaporte;
    };
    Integrante.prototype.setFechaNacimiento = function (fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    };
    return Integrante;
}());
exports.Integrante = Integrante;
