"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circulo_1 = require("./Circulo");
var Rectangulo_1 = require("./Rectangulo");
var Triangulo_1 = require("./Triangulo");
var Cilindro_1 = require("./Cilindro");
var CirculoGrande = new Circulo_1.Circulo(2, "Circulo Grande");
var Rectangulo1 = new Rectangulo_1.Rectangulo(5, 3, "Primer Rectángulo");
var TrianguloEquilatero = new Triangulo_1.Triangulo(3, 3, "Triángulo Equilatero");
/*console.log(`El Área de la Figura cuyo nombre es: ${CirculoGrande.getNombre()} es: ${CirculoGrande.getArea()}`);*/
var figura1;
var figura2;
figura1 = new Triangulo_1.Triangulo(3, 6, "Nuevo Triángulo");
figura2 = new Circulo_1.Circulo(5, "Nuevo Círculo");
/*console.log(figura1.getNombre());
figura2.setNombre("Circulo más grande");
console.log(figura2.getNombre());

console.log(((figura2) as Circulo).getRadio());*/
var cilindro1 = new Cilindro_1.Cilindro("Cilindro Prueba", CirculoGrande, 10);
console.log(cilindro1.getVolumen());
