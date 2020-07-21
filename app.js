import { pokemonData } from './pokemon.js';
import { getRandomPokemon } from './pokemon-utils.js';
import { findById } from './pokemon-utils.js';

// initialize state
let picks = 0;
let pokemonPicks = [];


const labels = document.querySelectorAll('label');
const nextButton = document.getElementById('next');
const h2span = document.querySelectorAll('current-results');
function setPage(){

    const randomPokemon1 = getRandomPokemon(pokemonData);
    let randomPokemon2 = getRandomPokemon(pokemonData);
    let randomPokemon3 = getRandomPokemon(pokemonData);

    while (randomPokemon1.id === randomPokemon2.id || randomPokemon2.id === randomPokemon3.id || randomPokemon3.id === randomPokemon1.id){

        randomPokemon2 = getRandomPokemon(pokemonData);
        randomPokemon3 = getRandomPokemon(pokemonData);
    } 

    console.log(randomPokemon1.id, randomPokemon2.id, randomPokemon3.id);


    

    const firstLabel = labels[0];

    const input1 = firstLabel.children[0];
    input1.addEventListener('click', eventHandler);
    const image1 = firstLabel.children[1];
    const span1 = firstLabel.children[2];

    input1.value = randomPokemon1.id;
    image1.src = randomPokemon1.url_image;
    span1.textContent = randomPokemon1.pokemon;
    console.log(randomPokemon1.pokemon);

    const secondLabel = labels[1];


    const input2 = secondLabel.children[0];
    input2.addEventListener('click', eventHandler);
    const image2 = secondLabel.children[1];
    const span2 = firstLabel.children[2];

    input2.value = randomPokemon2.id;
    image2.src = randomPokemon2.url_image;
    span2.textContent = randomPokemon1.pokemon;
    console.log(randomPokemon2.pokemon);



    const thirdLabel = labels[2];

    const input3 = thirdLabel.children[0];
    input3.addEventListener('click', eventHandler);
    const image3 = thirdLabel.children[1];
    const span3 = firstLabel.children[2];

    input3.value = randomPokemon3.id;
    image3.src = randomPokemon3.url_image;
    span3.textContent = randomPokemon1.pokemon;
    console.log(randomPokemon3.pokemon);

    input1.disabled = false;
    input2.disabled = false;
    input3.disabled = false;
    const choiceDiv = document.getElementById('choice-container');
    choiceDiv.classList.remove('disabled');
    nextButton.classList.add('hidden');



    



}

function eventHandler(e){
    const clickedPokemon = document.querySelector('input:checked');
    picks++;
    
    const pickedPokemon = clickedPokemon.value;
    console.log(pickedPokemon);
    
    const pokemonTarget = findById(pokemonData, pickedPokemon);
    console.log(pokemonTarget.pokemon);
     

        
    
    
   
  
   
    
    h2span.textContent = 'You chose ' + pokemonTarget.pokemon;
    console.log('you chose ' + pokemonTarget.pokemon);
    
    console.log(picks);

    pokemonPicks.push(pokemonTarget.pokemon);
    console.log(pokemonPicks);
   

    const choiceDiv = document.getElementById('choice-container');
    choiceDiv.classList.add('disabled');
    nextButton.classList.remove('hidden');
    
}
if (picks < 5){
    nextButton.addEventListener('click', setPage);
    setPage();
} else {
    h2span.textContent = 'game over bruh';
    nextButton.disabled;
}
