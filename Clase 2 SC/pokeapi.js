let contenedor = document.getElementById("contenedor");

fetch("https://pokeapi.co/api/v2")
    .then(resp => resp.json())
    .then(data =>
        data.results.forEach(pokemon => {
            contenedor.innerHTML += ` <div class="card">
                                            <div class="contenido">
                                            <div class="pokemon-imagen">
                                            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                                            </div>
                                            <h2> ${pokemon.name} </h2>
                                            <p class="pokemon-id">#${pokemon.Id}</p>
                                            </div>
                                            <div class="pokemon-tipos">
                                            ${tipos}
                                            </div>
                                            <div class="pokemon-stats">
                                                    <p class="stat">${pokemon.height}m</p>
                                                    <p class="stat">${pokemon.weight}kg</p>
                                            </div>
                                            </div>`

        })
    )
    .catch(err => console.log(err))