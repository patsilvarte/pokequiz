import pokemonLogo from "../../assets/pokemon-svgrepo-com.svg";

export const PokemonLogoInGame = () => {
  return (
    <img
      src={pokemonLogo}
      alt="pokemon logo"
      style={{ width: 150, position: "absolute", top: 0, left: 30 }}
    />
  );
};
