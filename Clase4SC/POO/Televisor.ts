class Televisor {

    //Atributos:

    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    //Funcion Constructora:

    constructor(volumenActual: number, canalActual: number) {
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }

    //Metodos:

    prenderApagar(): void {
        if(this.estaPrendido) {
            this.estaPrendido = false
        } else {
        this.estaPrendido = true;
        }
    }
    subirVolumen(): void {
    this.volumenActual = this.volumenActual + 1;
    }    

    bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1;
    }

    subirCanal(): void {
        this.canalActual = this.canalActual + 1;
    }

    bajarCanal(): void {
        this.canalActual = this.canalActual - 1;
    }

}

// Instancias:

let primerTelevisor = new Televisor(10, 25);

let segundoTelevisor = new Televisor(50, 20);

primerTelevisor.prenderApagar();

