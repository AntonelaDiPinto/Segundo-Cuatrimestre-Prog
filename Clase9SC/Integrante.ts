export class Integrante {
    protected nombre: string;
    protected apellido: string;
    protected pasaporte: number;
    protected fechaNacimiento: string;

    constructor(nombre: string, apellido: string, pasaporte: number, fechaNacimiento: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getPasaporte(): number {
        return this.pasaporte;
    }

    public getFechaNacimiento(): string {
        return this.fechaNacimiento;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public setPasaporte(pasaporte: number): void {
        this.pasaporte = pasaporte;
    }

    public setFechaNacimiento(fechaNacimiento: string): void {
        this.fechaNacimiento = fechaNacimiento;
    }
}