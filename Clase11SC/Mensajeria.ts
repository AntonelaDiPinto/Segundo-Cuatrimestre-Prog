abstract class Notificacion {
    
    abstract enviar(mensaje:string): void;
}

class Email extends Notificacion {
    private direccionCorreo: string;
    private destinatario: string;
    private asunto: string;

    constructor(direccionCorreo: string, destinatario: string, asunto: string){
        super();
        this.direccionCorreo = direccionCorreo;
        this.destinatario = destinatario;
        this.asunto = asunto;

    }
  
    enviar(mensaje: string): void {
        console.log(`EMAIL: \n 
                     Dirección de Correo Electrónico del destinatario: ${this.direccionCorreo} \n
                     Nombre del destinatario: ${this.destinatario} \n 
                     Asunto del Correo Electrónico: ${this.asunto} \n
                     Mensaje: ${mensaje}`);
    }
}

class SMS extends Notificacion {
    private numeroTelefono: number;
    private nombre: string;

    constructor(numeroTelefono: number, nombre: string) {
        super();
        this.numeroTelefono = numeroTelefono;
        this.nombre = nombre;
    }
  
    enviar(mensaje: string): void {
        console.log(`SMS: \n
                     Número de teléfono del destinatario: ${this.numeroTelefono} \n 
                     Destinatario: ${this.nombre} \n 
                     Mensaje: ${mensaje}`);
    }
}

class PushNotificacion extends Notificacion {

    enviar(mensaje: string): void {
       console.log(`${mensaje}`)
    }
}

let notificacionEmail = new Email("dipinto-antonella@hotmail.com", "Di Pinto Antonela", "Consulta Cronograma de Clases" );
notificacionEmail.enviar("Buenas tardes. Mi nombre es Ayelen Gómez y quisiera consultar sobre el cronograma de clases \n de la asignatura Diagnóstico por Imagénes del segundo cuatrimestre de la carrera de Medicina.");

let notificacionSMS = new SMS(2284593503, "Rosana Benitez");
notificacionSMS.enviar("Hola Rosana ¿cómo estás?. Te escribo para avisarte que hoy no se dicta la clase de yoga por cuestiones personales. Nos vemos el viernes. Saludos.")

let pushNotificacion = new PushNotificacion();
pushNotificacion.enviar("Bienvenido a Nuestro Portal");