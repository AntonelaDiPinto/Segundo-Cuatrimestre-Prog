"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Television_1 = require("./Television");
var Radio_1 = require("./Radio");
//Instancias de Televisión:
var televisorCocina = new Television_1.Televesion("Televisor de la Cocina", false, 13);
var televisorDormitorio = new Television_1.Televesion("Televisor del Dormitorio", false, 9);
//Instancias de Radio:
var radioDisney = new Radio_1.Radio("Radio Disney", false, "FM", 94.3);
var radioLaRed = new Radio_1.Radio("Radio La Red", false, "AM", 910);
/*console.log(televisorCocina.getEstado());
televisorCocina.encender();
console.log(televisorCocina.getEstado());
televisorCocina.funcionalidadEspecial();
televisorCocina.apagar();
televisorCocina.funcionalidadEspecial();*/
console.log(radioDisney.getEstado());
radioDisney.encender();
console.log(radioDisney.getEstado());
radioDisney.funcionalidadEspecial();
radioDisney.apagar();
console.log(radioDisney.getEstado());
radioDisney.funcionalidadEspecial();
