"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoElectronico = void 0;
var DispositivoElectronico = /** @class */ (function () {
    function DispositivoElectronico(nombre, estado) {
        this.nombre = nombre;
        this.estado = false;
    }
    DispositivoElectronico.prototype.getNombre = function () {
        return this.nombre;
    };
    DispositivoElectronico.prototype.getEstado = function () {
        return this.estado;
    };
    DispositivoElectronico.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    DispositivoElectronico.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    DispositivoElectronico.prototype.encender = function () {
        this.estado = true;
        console.log(this.nombre + " está encendido.");
    };
    DispositivoElectronico.prototype.apagar = function () {
        this.estado = false;
        console.log(this.nombre + " está apagado.");
    };
    return DispositivoElectronico;
}());
exports.DispositivoElectronico = DispositivoElectronico;
