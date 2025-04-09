import pokemonLogo from "../../assets/pokemon-svgrepo-com.svg";
import { useLevelContext } from "../../context/LevelProvider";
import Button from "../general/Button";
import Card from "../general/Card";

export const StartGame = () => {
  const { next } = useLevelContext();
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <img
        src={pokemonLogo}
        alt="pokemon logo"
        style={{ width: 370, position: "absolute", top: 0 }}
      />
      <Card>
        <p className="text-4xl">Do you know your Pokemons?</p>
        <p className="text-2xl">
          Drag and drop each Pokemon into the correspondent type
        </p>
        <Button style={{ width: 300, marginTop: 20 }} onClick={next}>
          Start Game
        </Button>
      </Card>
    </div>
  );
};
