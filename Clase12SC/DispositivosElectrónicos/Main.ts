import { DispositivoElectronico } from "./DispositivoElectronico";
import { Televesion } from "./Television";
import { Radio } from "./Radio";

//Instancias de Televisión:

let televisorCocina: Televesion = new Televesion("Televisor de la Cocina", false, 13);
let televisorDormitorio: Televesion = new Televesion("Televisor del Dormitorio", false, 9);

//Instancias de Radio:

let radioDisney: Radio = new Radio("Disney", false, "FM", 94.3);
let radioLaRed: Radio = new Radio("La Red", false, "AM", 910);

console.log(televisorCocina.getEstado());
televisorCocina.encender();
console.log(televisorCocina.getEstado());
televisorCocina.funcionalidadEspecial();
televisorCocina.apagar();
televisorCocina.funcionalidadEspecial();

console.log(radioDisney.getEstado());
radioDisney.encender();
console.log(radioDisney.getEstado());
radioDisney.funcionalidadEspecial();
radioDisney.apagar();
console.log(radioDisney.getEstado());
radioDisney.funcionalidadEspecial();