import { Televisor } from "./Herencia";

class smartTv extends Televisor {
    private sistemaOperativo: string;

    constructor(volumenActual: number, canalActual: number, sistemaOperativo: string) {
        super(volumenActual, canalActual);
        this.sistemaOperativo = sistemaOperativo;
    }

    setSistemaOperativo(nuevoSistemaOperativo: string): void {
        this.sistemaOperativo = nuevoSistemaOperativo;
    }

    getCanal(): number {
        return this.canalActual;
    }
}

let tvSmart: smartTv = new smartTv(10, 25, "Android");
console.log(tvSmart);

tvSmart.prenderApagar();

console.log(tvSmart);

tvSmart.setSistemaOperativo("Google TV");
console.log(tvSmart);

console.log(tvSmart.getCanal());