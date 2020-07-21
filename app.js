import { pokemonData } from './pokemon.js';
import { getRandomPokemon } from './pokemon-utils.js';

// initialize state
let picks = 0;
let pokemonPicks = [];

const randomPokemon1 = getRandomPokemon(pokemonData);
let randomPokemon2 = getRandomPokemon(pokemonData);
let randomPokemon3 = getRandomPokemon(pokemonData);

while (randomPokemon1.id === randomPokemon2.id || randomPokemon2.id === randomPokemon3.id || randomPokemon3.id === randomPokemon1.id){

    randomPokemon2 = getRandomPokemon(pokemonData);
    randomPokemon3 = getRandomPokemon(pokemonData);
}

console.log(randomPokemon1.id, randomPokemon2.id, randomPokemon3.id);
const labels = document.querySelectorAll('label');
console.log(labels);
const firstLabel = labels[0];
const span1 = firstLabel.children[0];
const input1 = firstLabel.children[1];
const image1 = firstLabel.children[2];


input1.value = randomPokemon1.id;
span1.textContent = randomPokemon1.pokemon;
image1.src = randomPokemon1.url_image;


const secondLabel = labels[1];
const span2 = firstLabel.children[0];
const input2 = secondLabel.children[1];
const image2 = secondLabel.children[2];

input2.value = randomPokemon2.id;
span2.textContent = randomPokemon2.pokemon;
image2.src = randomPokemon2.url_image;



const thirdLabel = labels[2];
const span13 = firstLabel.children[0];
const input3 = thirdLabel.children[1];
const image3 = thirdLabel.children[2];

input3.value = randomPokemon3.id;
span13.textContent = randomPokemon3.pokemon;
image3.src = randomPokemon3.url_image;


const clickedPokemon = document.querySelector('input:checked');

console.log(clickedPokemon);

