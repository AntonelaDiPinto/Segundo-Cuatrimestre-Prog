import { Heladera } from "./heladera";
import { Microondas } from "./microondas";
import { Lavarropas } from "./Lavarropas";


/* let microondas: Microondas = new Microondas("model 1","BHG",false,25,false,1400);

microondas.calentar();
microondas.descongelar();
microondas.iniciarGrill();
microondas.actualizarSoftware();
console.log("**********************************");
console.log(microondas.mostrarElectrodomestico());
microondas.encender(); */

/* let heladera: Heladera = new Heladera ("Heladera 2", "Phillips",false,300,2,true,false);

heladera.apagar();
heladera.actualizarSoftware();
heladera.encender();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.subirTemperatura();
heladera.descongelar();
heladera.subirTemperatura();
console.log(heladera.mostrarElectrodomestico());
heladera.apagar(); */

let lavarropas: Lavarropas = new Lavarropas ("model 1","whirpool",false,5,1,"superior",800);

lavarropas.apagar();
lavarropas.encender();
lavarropas.iniciar();
lavarropas.elegirPrograma("Eco");
lavarropas.pausar();
lavarropas.actualizarSoftware();