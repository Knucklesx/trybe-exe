const fetch = require('node-fetch');

const quemEhEssePokemon = (pokemonName) => {
    const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const poke = pokemon.then((response) => response.json());
    const mon = poke.then((data) => console.log(data.name))
}

quemEhEssePokemon()
