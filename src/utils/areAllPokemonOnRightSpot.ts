import { LocationsSet, Pokemon } from "../data/types";

export const areAllPokemonOnRightSpot = (
  locations: LocationsSet,
  pokemons: Pokemon[]
) => {
  if (locations.empty.length !== 0) {
    return false;
  }
  pokemons.every((pokemon) => {
    const pokemonTypes = pokemon.types;
    const isOnRightBin = pokemonTypes.some((type) =>
      locations[type]?.includes(pokemon.id)
    );
    return isOnRightBin;
  });

  return true;
};
