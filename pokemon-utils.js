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
export function chosenPokemon(pokemonEncountered, id){
    let caught = findById(pokemonEncountered, id);
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
   

export function mungeNames(pokemonArray) {
    const names = [];
    for (let i = 0; i < pokemonArray.length; i++){
        const pokemon = pokemonArray[i];
        names.push(pokemon.pokemon);
    }
    return names;


}

export function mungeCaptured(pokemonArray){
    const captured = [];
   
    for (let i = 0; i < pokemonArray.length; i++){
        const pokemon = pokemonArray[i];
        captured.push.length(pokemon.captured);
    }
    return captured;
}
export function mungeEncountered(pokemonArray){
    const encountered = [];
    for (let i = 0; i < pokemonArray.length; i++){
        const pokemon = pokemonArray[i];
        encountered.push.length(pokemon.captured);
    }
    return encountered;

    

}


    



