import axios from "axios";
import { POKEAPI_BASE_URL } from "./consts";
import { Pokemon } from "./types";

export const getRandomPokemons = async (count = 3) => {
  const maxPokemon = 1302; // Total Pokémon in the PokéAPI at moment of this project

  const randomIds = Array.from(
    { length: count },
    () => Math.floor(Math.random() * maxPokemon) + 1
  );

  const requests = randomIds.map((id) =>
    axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`)
  );

  const responses = await Promise.all(requests);
  return responses.map(
    (res) =>
      ({
        name: res.data.name,
        image: res.data.sprites.front_default,
        id: res.data.id,
        types: res.data.types.map(
          ({ type }: { type: { name: string } }) => type.name
        ),
      } as Pokemon)
  );
};
