"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var DispositivoElectronico_1 = require("./DispositivoElectronico");
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(nombre, estado, frecuencia, emisora) {
        var _this = _super.call(this, nombre, estado) || this;
        _this.frecuencia = frecuencia;
        _this.emisora = emisora;
        return _this;
    }
    Radio.prototype.getFrecuecia = function () {
        return this.frecuencia;
    };
    Radio.prototype.getEmisora = function () {
        return this.emisora;
    };
    Radio.prototype.setFrecuencia = function (frecuencia) {
        this.frecuencia = frecuencia;
    };
    Radio.prototype.setEmisora = function (emisora) {
        this.emisora = emisora;
    };
    Radio.prototype.funcionalidadEspecial = function () {
        if (this.estado) {
            console.log("La radio en la que se estaba escuchando radio ".concat(this.getNombre(), " ").concat(this.frecuencia, " ").concat(this.emisora, " est\u00E1 cambiando de emisora."));
        }
        else {
            console.log("No se puede cambiar de emisora, la radio está apagada.");
        }
    };
    return Radio;
}(DispositivoElectronico_1.DispositivoElectronico));
exports.Radio = Radio;
