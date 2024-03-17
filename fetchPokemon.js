export const featPokemon = async (pokemonName) => {
  const request = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await request.json();
  const pokemonReturne = {
    id: pokemon.id,
    name: pokemon.name,
    imagemFront: pokemon.sprites.other.showdown.front_default,
    imgemBack: pokemon.sprites.other.showdown.back_default,
    types: pokemon.types,
  };
  return pokemonReturne;
};
