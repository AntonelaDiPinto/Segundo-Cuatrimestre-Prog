//Clases como Tipos:

/*class Auto {
    private marca: string;
    private modelo: string;
    private anio: number;

    constructor(marca: string, modelo: string, anio?: number) {
        this.marca = marca;
        this.modelo = modelo;

        if(anio == undefined) {
            this.anio = -1;
        } else this.anio = anio;

    }

}

let primerAuto: Auto = new Auto ("Ford", "Fiesta", 2004);
let segundoAuto: Auto = new Auto ("Renault", "Clio");
let tercerAuto: Auto = new Auto ("Peugeot", "307");

let arregloAutos: Auto[] = [primerAuto, segundoAuto, tercerAuto];

console.log(arregloAutos);*/

//Composicion de Clases:

class Motor {
    private tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
}

class Rueda {
    private tamanio: number;

    constructor(tamanio: number) {
        this.tamanio = tamanio;
    }
}

class Auto {
    private marca: string;
    private modelo: string;
    private motor: Motor;
    private ruedas: Rueda[];

    constructor(marca: string, modelo: string, motor: Motor, ruedas?: Rueda[]) {
        this.marca = marca;
        this.modelo = marca;
        this.motor = motor;
        if(ruedas == undefined) {
            this.ruedas = [];
        } else this.ruedas = ruedas;
    }
}

let motor: Motor = new Motor ("Nafta");

let ruedas: Rueda[] = [
    new Rueda (16),
    new Rueda (16),
    new Rueda (16),
    new Rueda (16)
];

let primerAuto: Auto = new Auto ("Fiat", "Palio", motor);
console.log(primerAuto);
let segundoAuto: Auto = new Auto ("Renault", "Clio", motor, ruedas);
console.log(segundoAuto);