export type LocationsSet = Record<string, number[]>;

export type Pokemon = {
  name: string;
  image: string;
  id: number;
  types: string[];
};

export type PokemonType = "fire" | "water";
