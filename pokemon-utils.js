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


export function encounteredPokemon(pokemonEncountered, id) {
    let encountered = findById(pokemonEncountered, id);
 
    if (encountered) {
        encountered.encounters++;
            
    } else {
        const newEncounter = {
            id: id,
            encounters : 1,
            caught: 0
        };
        pokemonEncountered.push(newEncounter);
    }
        
}
export function chosenPokemon(caughtPokemon, id){
    let caught = findById(caughtPokemon, id);
    if (caught){
        caught.caught++;


    } else {
        const newCaught = {
            id: id,
            encounters: 1,
            caught: 1
        };
        pokemonEncountered.push(newCaught);
    }
}
   


