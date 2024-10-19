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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(velocidad, estaPrendido, capacidadCombustible) {
        this.velocidad = velocidad;
        this.estaPrendido = estaPrendido;
        this.capacidadCombustible = capacidadCombustible;
    }
    Vehiculo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Vehiculo.prototype.getCapacidadCombustible = function () {
        return this.capacidadCombustible;
    };
    return Vehiculo;
}());
var AutoDeCiudad = /** @class */ (function (_super) {
    __extends(AutoDeCiudad, _super);
    function AutoDeCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeCiudad.prototype.acelerar = function () {
        this.velocidad += 20;
        console.log(this.velocidad);
    };
    AutoDeCiudad.prototype.cargarCombustible = function (litros) {
        if (this.capacidadCombustible < 65) {
            this.capacidadCombustible += litros;
            console.log(this.capacidadCombustible);
        }
        else {
            console.log("El tanque está lleno.");
        }
    };
    return AutoDeCiudad;
}(Vehiculo));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidad += 80;
    };
    AutoDeportivo.prototype.cargarCombustible = function () {
        if (this.capacidadCombustible < 100) {
            this.capacidadCombustible += 1;
        }
        else {
            console.log("El tanque está lleno.");
        }
    };
    return AutoDeportivo;
}(Vehiculo));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidad += 60;
    };
    Camioneta.prototype.cargarCombustible = function () {
        if (this.capacidadCombustible < 80) {
            this.capacidadCombustible += 1;
        }
        else {
            console.log("El tanque está lleno.");
        }
    };
    return Camioneta;
}(Vehiculo));
var AutoDeCiudad1 = new AutoDeCiudad(20, true, 25);
AutoDeCiudad1.acelerar();
AutoDeCiudad1.cargarCombustible(50);
AutoDeCiudad1.cargarCombustible(30);
