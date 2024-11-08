"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carpeta_1 = require("./Carpeta");
var Archivo_1 = require("./Archivo");
// Ejemplo de uso:
// Crear archivos
var archivo1 = new Archivo_1.Archivo("Archivo1.txt", 150);
var archivo2 = new Archivo_1.Archivo('Archivo2.pdf', 200);
// Crear directorios
var carpeta1 = new Carpeta_1.Carpeta("Carpeta1");
var carpeta2 = new Carpeta_1.Carpeta('Carpeta2');
// Agregar archivos a directorios
carpeta1.agregar(archivo1);
carpeta2.agregar(archivo2);
archivo1.agregar(carpeta2);
// Crear un directorio principal
var carpetaPrincipal = new Carpeta_1.Carpeta("Carpeta Principal");
// Agregar subdirectorios al directorio raíz
carpetaPrincipal.agregar(carpeta1);
carpetaPrincipal.agregar(carpeta2);
// Mostrar estructura del sistema de archivos
carpeta1.mostrarEstructura();
