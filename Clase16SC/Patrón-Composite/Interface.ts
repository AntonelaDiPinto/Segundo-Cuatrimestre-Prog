// Crear la interface
// Esta interfaz define las operaciones que pueden realizar tanto los archivos como las carpetas. El método clave es mostrar Estructura (para mostrar la estructura).

export interface Contenido {
    getNombre(): string;
    setNombre(nombre: string): void;
    agregar(contenido: Contenido): void;
    eliminar(contenido: Contenido): void;
    mostrarEstructura(): void;

}
