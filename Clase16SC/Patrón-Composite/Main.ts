import { Carpeta } from "./Carpeta";
import {Archivo } from "./Archivo";


// Ejemplo de uso:

// Crear archivos
const archivo1 = new Archivo("Archivo1.txt", 150);
const archivo2 = new Archivo('Archivo2.pdf', 200);

// Crear directorios
const carpeta1 = new Carpeta("Carpeta1");
const carpeta2 = new Carpeta('Carpeta2');

// Agregar archivos a directorios
carpeta1.agregar(archivo1);
carpeta2.agregar(archivo2);


// Crear un directorio principal
const carpetaPrincipal = new Carpeta("Carpeta Principal");

// Agregar subdirectorios al directorio raíz
carpetaPrincipal.agregar(carpeta1);
carpetaPrincipal.agregar(carpeta2);

// Mostrar estructura del sistema de archivos
carpeta1.mostrarEstructura();