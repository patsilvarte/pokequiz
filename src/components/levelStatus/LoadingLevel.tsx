import { PokemonLogoInGame } from "../general/PokemonLogoInGame";
import { Spinner } from "../general/Spinner";
import { CurrentLevel } from "./CurrentLevel";

export const LoadingLevel = () => {
  return (
    <div className="h-full w-full flex justify-center flex-col">
      <PokemonLogoInGame />
      <CurrentLevel />
      <Spinner />
      <p style={{ marginTop: 20 }}>Loading Level...</p>
    </div>
  );
};
