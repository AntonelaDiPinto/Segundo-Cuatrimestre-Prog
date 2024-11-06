import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";
import { Standard } from "./Standard";
import { Suite } from "./Suite";


let habit1 : Standard = new Standard (1, 10000, 4);
let habit2 : Suite = new Suite (4, 10000, 3, 5000);
//habit1.serviciosGratis();
//habit2.serviciosGratis();

let servInt : Servicio = new Servicio ("Internet", 2000, true);
//let servDesp : Servicio = new Servicio ("Despertador", 1000, true);
//let servSpa : Servicio = new Servicio ("Spa", 5000, true);

console.log ("SE MUESTRA LA INFO DE LA VARIABLE HABIT");
habit1.mostrarInformacion();

console.log ("ACA SE RESERVO");
habit1.reservar();

habit1.mostrarServicios();

console.log ("SE AGREGO EL SERVICIO");
habit1.agregarServicio(servInt);


console.log ("CALCULAMOS EL PRECIO");
habit1.calcularPrecio();

console.log ("MUESTRO SERVICIOS");
habit1.mostrarServicios();

console.log ("SE LIBERO HABITACION");
habit1.liberar();

console.log ("MUESTRO SERVICIOS DE NUEVO");
habit1.mostrarServicios();

console.log ("SE MUESTRA LA INFO DE LA VARIABLE HABIT");
habit1.mostrarInformacion();

console.log ("-----------------------------------------------");

habit2.mostrarInformacion();
habit2.reservar();
habit2.calcularPrecio();
habit2.mostrarServicios();
habit2.liberar();