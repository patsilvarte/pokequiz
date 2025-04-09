import { useLeaderBoardContext } from "../context/LeaderBoardProvider";
import Button from "./general/Button";

type LeaderBoardProps = {
  close: () => void;
};

export const LeaderBoard = ({ close }: LeaderBoardProps) => {
  const { getLeaderboard } = useLeaderBoardContext();

  const entries = getLeaderboard();

  return (
    <div className="max-w-md mx-auto w-[80vw] max-h-[80vh] flex flex-col">
      <h2 className="text-3xl font-bold mb-8 text-center">🏆 Leaderboard</h2>
      {entries.length === 0 ? (
        <p className="text-center text-xl">No entries yet.</p>
      ) : (
        <ul className="space-y-2 mb-8 overflow-scroll grow">
          {entries.map((entry, index) => (
            <li
              key={`${entry.username}-${index}`}
              className="flex justify-between p-2 rounded border-b"
            >
              <span className="font-medium mr-8">
                {index + 1}. {entry.username}
              </span>
              <span className="text-[#ffcb05] font-bold">{entry.score}</span>
            </li>
          ))}
        </ul>
      )}
      <Button onClick={close}>Home</Button>
    </div>
  );
};
