import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useLevelContext } from "./LevelProvider";

type LeaderBoardContextType = {
  saveScore: (username: string) => void;
};

export const LeaderBoardContext = createContext<
  LeaderBoardContextType | undefined
>(undefined);

export const LeaderBoardProvider = ({ children }: PropsWithChildren) => {
  const storageName = "pokequiz-leaderboard";
  const { currentLevel } = useLevelContext();

  const score = useMemo(() => {
    return currentLevel * 3 * 50;
  }, [currentLevel]);

  const saveScore = useCallback(
    (username: string) => {
      const existing = JSON.parse(localStorage.getItem(storageName) || "[]");
      const updated = [...existing, { username, score }];
      localStorage.setItem(storageName, JSON.stringify(updated));
    },
    [score]
  );

  const value: LeaderBoardContextType = useMemo(() => {
    return { saveScore };
  }, [saveScore]);

  return (
    <LeaderBoardContext.Provider value={value}>
      {children}
    </LeaderBoardContext.Provider>
  );
};

export const useLeaderBoardContext = () => {
  const context = useContext(LeaderBoardContext);
  if (!context) {
    throw new Error(
      "useLeaderBoardContext must be used within a LeaderBoardProvider"
    );
  }
  return context;
};
