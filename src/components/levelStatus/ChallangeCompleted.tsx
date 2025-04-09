import { FC, useState } from "react";
import Confetti from "react-confetti";
import { useLeaderBoardContext } from "../../context/LeaderBoardProvider";
import { useLevelContext } from "../../context/LevelProvider";
import { getStarConfettis } from "../../utils/confettisEffects";
import Button from "../general/Button";
import Card from "../general/Card";

const ChallangeCompleted: FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { restart } = useLevelContext();
  const { saveScore, score } = useLeaderBoardContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim()) return;
    saveScore(username.trim());
    setSubmitted(true);
    setShowInput(false);
    setUsername("");
  };

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        drawShape={getStarConfettis}
      />
      <Card>
        <p>Great job!</p>
        <p>You got {score} points.</p>

        {!showInput && (
          <>
            <Button onClick={restart}>Home</Button>
            {!submitted && (
              <Button
                onClick={() => setShowInput(true)}
                style={{ marginLeft: 10 }}
              >
                Register Play
              </Button>
            )}
          </>
        )}
        {showInput && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 max-w-sm mx-auto mt-4"
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded"
              style={{ color: "black" }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit to Leaderboard
            </button>
          </form>
        )}
        {submitted && <p className="text-green-600 mt-2">Submitted!</p>}
      </Card>
    </>
  );
};
export default ChallangeCompleted;
