import pokemonData from './pokemon.js';

export function getRandomPokemon(pokemonArray) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonArray[randomPokemonIndex];
}
export function findById(itemsArray, itemId){
    let matchItem = null;
    const itemNumber = Number(itemId);
    
    for (let i = 0; i < itemsArray.length; i++){
        
        if (itemNumber === itemsArray[i].id){
    
            matchItem = itemsArray[i];
        }
    }
    
    return matchItem;
}