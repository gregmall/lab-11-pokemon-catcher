import pokemon from './pokemon.js';

export function getRandomPokemon(pokemonArray) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemon.length);
    return pokemonArray[randomPokemonIndex];
}