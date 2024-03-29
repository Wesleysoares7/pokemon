import { featPokemon } from "./fetchPokemon";

const pokemonCard = document.querySelector(".pokemon-card");
const buttonNext = document.querySelector(".proximo");
const buttonPrevious = document.querySelector(".anterior");
const input = document.querySelector("input");
const searchButton = document.querySelector(".pesquisar");
let pokemonId;

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const printPokemon = async (pokemonFetch) => {
  pokemonCard.innerHTML = "";
  const pokemon = await featPokemon(pokemonFetch);
  pokemonId = pokemon.id;
  const pokemonName = document.createElement("p");
  pokemonName.innerText = `${pokemon.id}: ${capitalizeFirstLetter(
    pokemon.name
  )}`;
  pokemonName.classList.add("pokemon-name");
  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.imagemFront;
  pokemonImage.classList.add("pokemon-gif");
  pokemonImage.addEventListener("click", () => {
    if (pokemonImage.src === pokemon.imagemFront) {
      pokemonImage.src = pokemon.imgemBack;
    } else {
      pokemonImage.src = pokemon.imagemFront;
    }
  });
  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonName);
};

const nextPokemon = () => {
  printPokemon(pokemonId + 1);
};

buttonNext.addEventListener("click", nextPokemon);

const previousPokemon = () => {
  if (pokemonId > 1) {
    printPokemon(pokemonId - 1);
  }
};

buttonPrevious.addEventListener("click", previousPokemon);

const keyboardControl = (event) => {
  if (event.key === "ArrowRight") {
    nextPokemon();
  }
  if (event.key === "ArrowLeft") {
    previousPokemon();
  }
};

window.addEventListener("keydown", keyboardControl);

const searchPokemon = () => {
  const pokemon = input.value.trim();
  if (pokemon !== "") {
    printPokemon(pokemon);
  } else {
    alert("Por favor, insira o nome ou número do Pokémon para pesquisar.");
  }
};

searchButton.addEventListener("click", searchPokemon);

printPokemon("1");
