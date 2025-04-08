import { Pokemon } from "../data/types";

const getRandomType = (types: string[]) =>
  types[Math.floor(Math.random() * types.length)];

export const getOneTypePerPokemon = (pokemonList: Pokemon[]) => {
  const uniqueRandomTypes = Array.from(
    new Set(pokemonList.map((p) => getRandomType(p.types)))
  );
  return uniqueRandomTypes;
};
