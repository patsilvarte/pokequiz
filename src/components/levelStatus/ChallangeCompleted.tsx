import { FC } from "react";
import Confetti from "react-confetti";
import { getStarConfettis } from "../../utils/confettisEffects";
import Button from "../general/Button";
interface ChallangeCompletedProps {
  restart: () => void;
}

const ChallangeCompleted: FC<ChallangeCompletedProps> = ({ restart }) => {
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
