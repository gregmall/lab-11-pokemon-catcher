
import pokemonData from './pokemon.js';


export function getRandomPokemon(pokemonArray) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonArray[randomPokemonIndex];
}
export function findById(itemsArray, pokemon){
    let matchItem = null;
    const itemPokemon = pokemon;
    
    for (let i = 0; i < itemsArray.length; i++){
        
        if (itemPokemon === itemsArray[i].pokemon){
    
            matchItem = itemsArray[i];
        }
    }
    
    return matchItem;
}


export function encounteredPokemon(pokemonEncountered, pokemon) {
    let encountered = findById(pokemonEncountered, pokemon);
 
    if (encountered) {
        encountered.encounters++;
            
    } else {
        const newEncounter = {
            pokemon: pokemon,
            encounters : 1,
            caught: 0
        };
        pokemonEncountered.push(newEncounter);
    }
        
}
export function chosenPokemon(pokemonEncountered, pokemon){
    let caught = findById(pokemonEncountered, pokemon);
    if (caught){
       
        caught.caught++;


    } else {
        const newCaught = {
            pokemon: pokemon,
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
    const caught = [];
   
    for (let i = 0; i < pokemonArray.length; i++){
        const pokemon = pokemonArray[i];
        caught.push(pokemon.caught);
    }
    return caught;
}
export function mungeEncountered(pokemonArray){
    const encounters = [];
    for (let i = 0; i < pokemonArray.length; i++){
        const pokemon = pokemonArray[i];
        encounters.push(pokemon.encounters);
    }
    return encounters;

    

}

export function mungeData(pokemonArray, property){
    const attribute = [];
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = findById(pokemonData, pokemonArray[i].name);
        attribute.push(pokemon[property]);
    }
    return attribute;
}

export function renderPokemonChart(data) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'left';
    nameCell.textContent = data.pokemon;
  
    tr.appendChild(nameCell);

    const caughtCell = document.createElement('td');
    caughtCell.textContent = data.caught;
    tr.appendChild(caughtCell);
    
    const encountersCell = document.createElement('td');
    encountersCell.textContent = data.encounters;
    tr.appendChild(encountersCell);
    
   
    return tr;
}

