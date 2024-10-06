
let contenedor = document.getElementById("contenedor");

async function pokemonDetails(url) {
    const response = await fetch(url);
    return response.json();
}
fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
        const details = data.results.map(pokemon => pokemonDetails(pokemon.url));
        return Promise.all(details);
    })
       .then(pokemons => {
        pokemons.forEach(pokemon => {
            contenedor.innerHTML += ` <div class="card">
                                            <div class="contenido">
                                            <div class="pokemon-imagen">
                                            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                                            </div>
                                            <h2> ${pokemon.name} </h2>
                                            <p class="pokemon-id">#${pokemon.id}</p>
                                            </div>
                                            <div class="pokemon-tipos">
                                            ${pokemon.order}
                                            </div>
                                            <div class="pokemon-stats">
                                                    <p class="stat">${pokemon.height}m</p>
                                                    <p class="stat">${pokemon.weight}kg</p>
                                            </div>
                                            </div>`
        });
    })
    .catch(err => console.log(err))