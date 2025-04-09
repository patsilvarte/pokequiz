import shuffle from "just-shuffle";
import { Pokemon } from "../data/types";

const getRandomType = (types: string[]) =>
  types[Math.floor(Math.random() * types.length)];

export const getOneTypePerPokemon = (pokemonList: Pokemon[]) => {
  const uniqueRandomTypes = Array.from(
    new Set(pokemonList.map((p) => getRandomType(p.types)))
  );
  const shuffledTypes = shuffle(uniqueRandomTypes);
  return shuffledTypes;
};
