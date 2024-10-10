class Universidad {
    private asignaturaQueOfrece: string[] = [];

    ofreceAsignatura(asignatura: string): boolean {
        return this.asignaturaQueOfrece.includes(asignatura);
    }

    esElegible(profesor: Profesor): boolean {
        const asignaturasProfesor = profesor.getAsignaturasQueDicta();
        let i = 0;
        while (asignaturasProfesor.length > i && this.ofreceAsignatura(asignaturasProfesor[i])) {
            i++;
        }
        return i === asignaturasProfesor.length;
    }
}

class Profesor {
    private asignaturasQueDicta: string[];

    constructor() {
        this.asignaturasQueDicta = [];
    }

    dictaAsignatura(asignatura: string): boolean {
        return this.asignaturasQueDicta.includes(asignatura);
    }

    getAsignaturasQueDicta(): string[] {
        return [...this.asignaturasQueDicta];
    }

    elegible(uni: Universidad): boolean {
        for (let i = 0; i < this.asignaturasQueDicta.length; i++) {
            if (!uni.ofreceAsignatura(this.asignaturasQueDicta[i])) {
                return false;
            }
        }
        return true;
    }
}