import axios from "axios";
import { POKEAPI_BASE_URL, POKEMONS_PER_LEVEL } from "./consts";
import { Pokemon } from "./types";

const maxPokemon = 1025;
const maxAttempts = 10; // total fetch attempts before giving up

const fetchPokemon = async (id: number): Promise<Pokemon | null> => {
  try {
    const res = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return {
      name: res.data.name,
      image: res.data.sprites.front_default,
      id: res.data.id,
      types: res.data.types.map(
        ({ type }: { type: { name: string } }) => type.name
      ),
    };
  } catch {
    return null;
  }
};

const getRandomId = () => Math.floor(Math.random() * maxPokemon) + 1;

export const getRandomPokemons = async (): Promise<Pokemon[]> => {
  const results: Pokemon[] = [];
  const usedIds = new Set<number>();
  let attempt = 0;

  while (results.length < POKEMONS_PER_LEVEL && attempt < maxAttempts) {
    const needed = POKEMONS_PER_LEVEL - results.length;
    const ids: number[] = [];
    attempt++;

    // Generate unique IDs
    while (ids.length < needed) {
      const id = getRandomId();
      if (!usedIds.has(id)) {
        ids.push(id);
        usedIds.add(id);
      }
    }

    // Fetch in parallel
    const batch = await Promise.allSettled(ids.map(fetchPokemon));

    // Collect only fulfilled + non-null
    batch.forEach((result) => {
      if (result.status === "fulfilled" && result.value) {
        results.push(result.value);
      }
    });
  }

  if (results.length < POKEMONS_PER_LEVEL) {
    console.warn(
      `Only got ${results.length} Pokémon after ${maxAttempts} attempts.`
    );
  }

  return results;
};
