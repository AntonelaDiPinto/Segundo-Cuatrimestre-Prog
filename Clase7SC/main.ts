import {Libro} from "./libro";

import { GestorLibros } from "./gestorLibro";

let MartinFierro: Libro = new Libro("Martin Fierro", "Jose Hernandez", "Atlanta");

let GestorLibro1: GestorLibros = new GestorLibros("Gestoria Olavarria");

GestorLibro1.agregarLibro("Martin Fierro", "Jose Hernandez", "Atlanta");
GestorLibro1.agregarLibro("Martin Fierro", "Jose Hernandez", "Planeta");

console.log(GestorLibro1.getlistaLibros());
GestorLibro1.eliminarLibro(MartinFierro);
console.log(GestorLibro1.getlistaLibros());