import { FC } from "react";
import Confetti from "react-confetti";
import { useLevelContext } from "../../context/LevelProvider";
import Button from "../general/Button";

const NextLevel: FC = () => {
  const { next } = useLevelContext();

  return (
    <div>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Button onClick={next}>Next Level</Button>
    </div>
  );
};

export default NextLevel;
