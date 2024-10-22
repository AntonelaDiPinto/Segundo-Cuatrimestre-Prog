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
exports.Televesion = void 0;
var DispositivoElectronico_1 = require("./DispositivoElectronico");
var Televesion = /** @class */ (function (_super) {
    __extends(Televesion, _super);
    function Televesion(nombre, estado, canal) {
        var _this = _super.call(this, nombre, estado) || this;
        _this.canal = canal;
        return _this;
    }
    Televesion.prototype.getCanal = function () {
        return this.canal;
    };
    Televesion.prototype.setCanal = function (canal) {
        this.canal = canal;
    };
    Televesion.prototype.funcionalidadEspecial = function () {
        console.log("El ".concat(this.getNombre(), " que estaba en el canal ").concat(this.canal, " est\u00E1 cambiando de canal."));
    };
    return Televesion;
}(DispositivoElectronico_1.DispositivoElectronico));
exports.Televesion = Televesion;
