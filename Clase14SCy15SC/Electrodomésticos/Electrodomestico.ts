export abstract class Electrodomestico {
    protected nombre: string;
    protected marca: string;
    protected prendido: boolean = false;
    protected conectividad: boolean;

    constructor(nombre:string, marca:string, conectividad:boolean) {
        this.nombre = nombre;
        this.marca = marca;
        this.conectividad = conectividad;
    }

    abstract encender(): void;
    abstract apagar(): void;
    abstract actualizarSoftware():void;   
    abstract mostrarElectrodomestico():string; 
}