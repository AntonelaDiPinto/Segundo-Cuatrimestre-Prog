// Try Catch

/*function dividir(a: number, b: number): number | void  {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir entre Cero");
        }
        return a/b;
    }catch (error) {
        console.error((error as Error).message);
    }
}

dividir(6,0);*/

async function obtenerDatos(url: string): Promise<any | void> {
    try {
        const respuesta = await fetch(url);
        if(!respuesta.ok) {
            throw new Error(`Error en la solicitud ${respuesta.status}`);
        }
        const data = await respuesta.json();
        return data;
    } catch (error) {
        throw error;
    }  
}

obtenerDatos("https://jsonplaceholder.typicode.com/posts/1")
.then(data => console.log(data))
.catch(error => console.error(error));

obtenerDatos("https://jsonplaceholder.typicode.com/posts/404")
.then(data => console.log(data))
.catch(error => console.error((error as Error).message));




