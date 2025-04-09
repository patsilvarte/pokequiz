import Countdown from "react-countdown";
import { ReactComponent as PokeballIcon } from "../../assets/pokeball-pokemon-svgrepo-com.svg";
import { useLeaderBoardContext } from "../../context/LeaderBoardProvider";
import { useLevelContext } from "../../context/LevelProvider";

export const CurrentLevel = () => {
  const { currentLevel, end, startTime } = useLevelContext();
  const { score } = useLeaderBoardContext();

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 40,
        width: "100px",
        height: "100px",
      }}
    >
      {startTime && (
        <Countdown
          date={startTime + 60000}
          onComplete={end}
          renderer={({ minutes, seconds, completed }) =>
            completed ? (
              <span className="text-xl">Time's up!</span>
            ) : (
              <span className="text-xl">
                {minutes}:{seconds.toString().padStart(2, "0")}
              </span>
            )
          }
        />
      )}
      <div className="relative">
        <PokeballIcon className="h-full w-full" />
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 100,
          }}
          className="flex justify-center items-center absolute top-0 right-0 h-full w-full"
        >
          {currentLevel}
        </div>
      </div>
      <span className="text-xl">{score} points</span>
    </div>
  );
};
