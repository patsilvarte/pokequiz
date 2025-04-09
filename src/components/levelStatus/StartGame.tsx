import { useState } from "react";
import pokemonLogo from "../../assets/pokemon-svgrepo-com.svg";
import { useLevelContext } from "../../context/LevelProvider";
import Button from "../general/Button";
import Card from "../general/Card";
import { PokemonLogoInGame } from "../general/PokemonLogoInGame";
import { LeaderBoard } from "../LeaderBoard";

export const StartGame = () => {
  const { start } = useLevelContext();
  const [checkLeaderboard, setCheckLeaderboard] = useState<boolean>(false);

  return (
    <div className="h-full flex justify-center items-center flex-col">
      {checkLeaderboard ? (
        <PokemonLogoInGame />
      ) : (
        <img
          src={pokemonLogo}
          alt="pokemon logo"
          style={{ width: 370, position: "absolute", top: 0 }}
        />
      )}
      <Card>
        {checkLeaderboard ? (
          <LeaderBoard close={() => setCheckLeaderboard(false)} />
        ) : (
          <>
            <p className="text-4xl">Do you know your Pokemons?</p>
            <p className="text-2xl">
              Drag and drop each Pokemon into the correspondent type
            </p>
            <Button style={{ width: 300, marginTop: 20 }} onClick={start}>
              Start Game
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => setCheckLeaderboard(true)}
            >
              Check LeaderBoard
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};
