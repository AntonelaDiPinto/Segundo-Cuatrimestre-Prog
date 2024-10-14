var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Notificacion = /** @class */ (function () {
    function Notificacion() {
    }
    return Notificacion;
}());
var Email = /** @class */ (function (_super) {
    __extends(Email, _super);
    function Email(direccionCorreo, destinatario, asunto) {
        var _this = _super.call(this) || this;
        _this.direccionCorreo = direccionCorreo;
        _this.destinatario = destinatario;
        _this.asunto = asunto;
        return _this;
    }
    Email.prototype.enviar = function (mensaje) {
        console.log("EMAIL: \n \n                     Direcci\u00F3n de Correo Electr\u00F3nico del destinatario: ".concat(this.direccionCorreo, " \n\n                     Nombre del destinatario: ").concat(this.destinatario, " \n \n                     Asunto del Correo Electr\u00F3nico: ").concat(this.asunto, " \n\n                     Mensaje: ").concat(mensaje));
    };
    return Email;
}(Notificacion));
var SMS = /** @class */ (function (_super) {
    __extends(SMS, _super);
    function SMS(numeroTelefono, nombre) {
        var _this = _super.call(this) || this;
        _this.numeroTelefono = numeroTelefono;
        _this.nombre = nombre;
        return _this;
    }
    SMS.prototype.enviar = function (mensaje) {
        console.log("SMS: \n\n                     N\u00FAmero de tel\u00E9fono del destinatario: ".concat(this.numeroTelefono, " \n \n                     Destinatario: ").concat(this.nombre, " \n \n                     Mensaje: ").concat(mensaje));
    };
    return SMS;
}(Notificacion));
var PushNotificacion = /** @class */ (function (_super) {
    __extends(PushNotificacion, _super);
    function PushNotificacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushNotificacion.prototype.enviar = function (mensaje) {
        console.log("".concat(mensaje));
    };
    return PushNotificacion;
}(Notificacion));
var notificacionEmail = new Email("dipinto-antonella@hotmail.com", "Di Pinto Antonela", "Consulta Cronograma de Clases");
//notificacionEmail.enviar("Buenas tardes. Mi nombre es Ayelen Gómez y quisiera consultar sobre el cronograma de clases \n de la asignatura Diagnóstico por Imagénes del segundo cuatrimestre de la carrera de Medicina.");
var notificacionSMS = new SMS(2284593503, "Rosana Benitez");
//notificacionSMS.enviar("Hola Rosana ¿cómo estás?. Te escribo para avisarte que hoy no se dicta la clase de yoga por cuestiones personales. Nos vemos el viernes. Saludos.")
var pushNotificacion = new PushNotificacion();
pushNotificacion.enviar("Bienvenido a Nuestro Portal");
