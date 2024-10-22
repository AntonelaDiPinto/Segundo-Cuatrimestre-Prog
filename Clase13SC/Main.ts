import { Circulo } from "./Circulo";
import { Rectangulo } from "./Rectangulo";
import { Triangulo } from "./Triangulo";
import { Figura2D } from "./Figura2D";

let CirculoGrande: Circulo = new Circulo(2, "Circulo Grande");

let Rectangulo1: Rectangulo = new Rectangulo(5, 3, "Primer Rectángulo");

let TrianguloEquilatero: Triangulo = new Triangulo(3, 3, "Triángulo Equilatero");

console.log(`El Área de la Figura cuyo nombre es: ${CirculoGrande.getNombre()} es: ${CirculoGrande.getArea()}`);

let figura1: Figura2D;
let figura2: Figura2D;

figura1 = new Triangulo(3, 6, "Nuevo Triángulo");
figura2 = new Circulo(5, "Nuevo Círculo");

console.log(figura1.getNombre());
figura2.setNombre("Circulo más grande");
console.log(figura2.getNombre());

console.log(((figura2) as Circulo).getRadio());
