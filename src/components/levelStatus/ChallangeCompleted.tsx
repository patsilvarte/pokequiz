import { FC } from "react";
import Confetti from "react-confetti";
import { useLevelContext } from "../../context/LevelProvider";
import { getStarConfettis } from "../../utils/confettisEffects";
import Button from "../general/Button";

const ChallangeCompleted: FC = () => {
  const { restart } = useLevelContext();

  return (
    <div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        drawShape={getStarConfettis}
      />
      <p>Great job!</p>
      <p>All your pokemons were well classified.</p>
      <Button onClick={restart}>Restart</Button>
    </div>
  );
};
export default ChallangeCompleted;
