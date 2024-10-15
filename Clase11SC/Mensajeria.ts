abstract class Notificacion {
    protected destinatario: string;

    constructor(destinatario: string) {
        this.destinatario = destinatario;
    }
    
    abstract enviar(mensaje:string): void;
}

class Email extends Notificacion {
    private direccionCorreo: string;
    private asunto: string;

    constructor(direccionCorreo: string, destinatario: string, asunto: string){
        super(destinatario);
        this.direccionCorreo = direccionCorreo;
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

    constructor(numeroTelefono: number, destinatario: string) {
        super(destinatario);
        this.numeroTelefono = numeroTelefono;
    }
  
    enviar(mensaje: string): void {
        console.log(`SMS: \n
                     Número de teléfono del destinatario: ${this.numeroTelefono} \n 
                     Destinatario: ${this.destinatario} \n 
                     Mensaje: ${mensaje}`);
    }
}

class PushNotificacion extends Notificacion {
    private aplicacion: string;

    constructor(aplicacion: string, destinatario: string){
        super(destinatario);
        this.aplicacion = aplicacion;
    }

    enviar(mensaje: string): void {
       console.log(`PUSH NOTIFICACIÓN:\n
                   ${this.aplicacion}: Hola ${this.destinatario} ${mensaje}`)
    }
}

let notificacionEmail = new Email("dipinto-antonella@hotmail.com", "Di Pinto Antonela", "Consulta Cronograma de Clases" );
notificacionEmail.enviar("Buenas tardes. Mi nombre es Ayelen Gómez y quisiera consultar sobre el cronograma de clases \n de la asignatura Diagnóstico por Imagénes del segundo cuatrimestre de la carrera de Medicina.");

let notificacionSMS = new SMS(2284593503, "Rosana Benitez");
notificacionSMS.enviar("Hola Rosana ¿cómo estás?. Te escribo para avisarte que hoy no se dicta la clase de yoga por cuestiones personales. Nos vemos el viernes. Saludos.")

let pushNotificacion = new PushNotificacion("Pedidos YA", "Facundo Arouxet");
pushNotificacion.enviar("Promociones en toda la APP. Aprovecha desde YA a comprar lo necesario para disfrutar con promociones en todas las categorias.");