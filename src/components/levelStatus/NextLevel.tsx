import { FC } from "react";
import Confetti from "react-confetti";
import Button from "../general/Button";

interface NextLevelProps {
  next: () => void;
}

const NextLevel: FC<NextLevelProps> = ({ next }) => {
  return (
    <div>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Button onClick={next}>Next Level</Button>
    </div>
  );
};

export default NextLevel;
