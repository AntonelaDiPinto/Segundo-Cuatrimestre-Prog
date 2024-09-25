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
var Motor = /** @class */ (function () {
    function Motor(tipo) {
        this.tipo = tipo;
    }
    return Motor;
}());
var Rueda = /** @class */ (function () {
    function Rueda(tamanio) {
        this.tamanio = tamanio;
    }
    return Rueda;
}());
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, motor, ruedas) {
        this.marca = marca;
        this.modelo = marca;
        this.motor = motor;
        if (ruedas == undefined) {
            this.ruedas = [];
        }
        else
            this.ruedas = ruedas;
    }
    return Auto;
}());
var motor = new Motor("Nafta");
var ruedas = [
    new Rueda(16),
    new Rueda(16),
    new Rueda(16),
    new Rueda(16)
];
var primerAuto = new Auto("Fiat", "Palio", motor);
console.log(primerAuto);
var segundoAuto = new Auto("Renault", "Clio", motor, ruedas);
console.log(segundoAuto);
