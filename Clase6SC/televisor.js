var Televisor = /** @class */ (function () {
    // Funcion Constructora
    function Televisor(volumenActual, canalActual) {
        //Estados o Variables o Atributos
        this.estaPrendido = true;
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }
    //Metodos
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    return Televisor;
}());
//Instancias
var primerTelevisor = new Televisor(10, 25);
var segundoTelevisor = new Televisor(50, 20);
primerTelevisor.prenderApagar();
console.log(primerTelevisor);
