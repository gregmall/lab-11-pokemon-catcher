import { pokemonData } from './pokemon.js';
import { getRandomPokemon } from './pokemon-utils.js';
import { findById } from './pokemon-utils.js';
import { encounteredPokemon } from './pokemon-utils.js';
import { chosenPokemon } from './pokemon-utils.js';


// initialize state
let picks = 0;
let pokemonEncountered = [];
let counter = 0;



const labels = document.querySelectorAll('label');
const nextButton = document.getElementById('next');
const results = document.getElementById('results');

function setPage(){
    
    const randomPokemon1 = getRandomPokemon(pokemonData);
    let randomPokemon2 = getRandomPokemon(pokemonData);
    let randomPokemon3 = getRandomPokemon(pokemonData);

    while (randomPokemon1.pokemon === randomPokemon2.pokemon || randomPokemon2.pokemon === randomPokemon3.pokemon || randomPokemon3.pokemon === randomPokemon1.pokemon){

        randomPokemon2 = getRandomPokemon(pokemonData);
        randomPokemon3 = getRandomPokemon(pokemonData);
    } 

    


    

    const firstLabel = labels[0];

    const input1 = firstLabel.children[0];
    input1.addEventListener('click', eventHandler);
    const image1 = firstLabel.children[1];
    
    
    encounteredPokemon(pokemonEncountered, randomPokemon1.pokemon);
    
      
    input1.value = randomPokemon1.pokemon;
    image1.src = randomPokemon1.url_image;
    
    
    
    
    const secondLabel = labels[1];
    const input2 = secondLabel.children[0];
    input2.addEventListener('click', eventHandler);
    const image2 = secondLabel.children[1];
    
    encounteredPokemon(pokemonEncountered, randomPokemon2.pokemon);

    input2.value = randomPokemon2.pokemon;
    image2.src = randomPokemon2.url_image;
    
    


    const thirdLabel = labels[2];
    const input3 = thirdLabel.children[0];
    input3.addEventListener('click', eventHandler);
    const image3 = thirdLabel.children[1];
    
    
    
    input3.value = randomPokemon3.pokemon;
    image3.src = randomPokemon3.url_image;
    
    
    
    
    
    input1.disabled = false;
    input2.disabled = false;
    input3.disabled = false;
    const choiceDiv = document.getElementById('choice-container');
    choiceDiv.classList.remove('disabled');
    nextButton.classList.add('hidden');



    



}

function eventHandler(){
    const clickedPokemon = document.querySelector('input:checked');
    
    
    const pickedPokemon = clickedPokemon.value;
    const pokemonTarget = findById(pokemonData, pickedPokemon);
    results.textContent = pokemonTarget.pokemon + '! Good choice!';
    
    chosenPokemon(pokemonEncountered, pickedPokemon);
    if (counter < 10){
        const choiceDiv = document.getElementById('choice-container');
        choiceDiv.classList.add('disabled');
        nextButton.classList.remove('hidden');
        counter ++;
        
        
    } else {
        alert('YOU HAVE CAUGHT 10 POKEMON');
      
       
        const results = document.getElementById('results');
        console.log(pokemonEncountered);
        localStorage.setItem('POKEMONENCOUNTERED', JSON.stringify(pokemonEncountered));
        window.location = './results.html';
        
        for (let i = 0; i < pokemonEncountered.length; i ++){
            results.innerHTML = pokemonEncountered[i];
            console.log(pokemonEncountered[i]);

        }

                       
        
        
    
   
    }

}
nextButton.addEventListener('click', setPage);

setPage();



