import {Libro} from "./libro";

import { GestorLibros } from "./gestorLibro";

let MartinFierro: Libro = new Libro("Martín Fierro", "José Hernández", "Alianza Editorial");
let Yerma: Libro = new Libro("Yerma", "Federico García Lorca", "Bureau Editor");
let HabitosAtomicos: Libro = new Libro("Hábitos Atómicos", "James Clear", "Diana");

let GestorLibroTandil: GestorLibros = new GestorLibros("Gestoria Olavarria");

GestorLibroTandil.agregarLibro("Martín Fierro", "José Hernández", "Alianza Editorial");
GestorLibroTandil.agregarLibro("Yerma", "Federico García Lorca", "Bureau Editor");
GestorLibroTandil.agregarLibro("Hábitos Atómicos", "James Clear", "Diana");

console.log(GestorLibroTandil.getlistaLibros());

GestorLibroTandil.eliminarLibro(Yerma);

console.log(GestorLibroTandil.getlistaLibros());

