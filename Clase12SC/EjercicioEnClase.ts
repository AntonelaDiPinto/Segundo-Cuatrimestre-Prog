abstract class Vehiculo {
    protected velocidad : number;
    private estaPrendido : boolean;
    protected capacidadCombustible: number;

    constructor(velocidad: number, estaPrendido: boolean, capacidadCombustible: number) {
        this.velocidad = velocidad;
        this.estaPrendido = estaPrendido;
        this.capacidadCombustible = capacidadCombustible;
    }

    public getVelocidad(): number {
        return this.velocidad;
    }

    public getCapacidadCombustible(): number {
        return this.capacidadCombustible;
    }

    abstract acelerar(): void;

    abstract cargarCombustible(litros: number): void;
}

class AutoDeCiudad extends Vehiculo {

    public acelerar(): void {
        this.velocidad += 20;
        console.log(this.velocidad);
    }

    public cargarCombustible(litros: number): void {
        if(this.capacidadCombustible < 65) {
            this.capacidadCombustible += litros;
            console.log(this.capacidadCombustible);
        } else {
            console.log("El tanque está lleno.");
        }
    }
}

class AutoDeportivo extends Vehiculo {

    public acelerar(): void {
        this.velocidad += 80;
    }

    public cargarCombustible(litros: number): void {
        if(this.capacidadCombustible < 100) {
            this.capacidadCombustible += litros;
        } else {
            console.log("El tanque está lleno.");
        }
    }
}

class Camioneta extends Vehiculo {

    public acelerar(): void {
        this.velocidad += 60;
    }

    public cargarCombustible(litros: number): void {
        if(this.capacidadCombustible < 80) {
            this.capacidadCombustible += litros;
        } else {
            console.log("El tanque está lleno.");
        }
    }
}

let AutoDeCiudad1 = new AutoDeCiudad(20, true, 25);

AutoDeCiudad1.acelerar();
AutoDeCiudad1.cargarCombustible(50);
AutoDeCiudad1.cargarCombustible(30);