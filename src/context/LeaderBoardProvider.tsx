import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { LeaderboardEntry } from "../data/types";
import { useLevelContext } from "./LevelProvider";

type LeaderBoardContextType = {
  score: number;
  saveScore: (username: string) => void;
  registWrongAttempt: () => void;
  getLeaderboard: () => LeaderboardEntry[];
};

export const LeaderBoardContext = createContext<
  LeaderBoardContextType | undefined
>(undefined);

export const LeaderBoardProvider = ({ children }: PropsWithChildren) => {
  const storageName = "pokequiz-leaderboard";
  const [wrongAttempts, setWrongAttempts] = useState<number>(0);
  const { currentLevel, timeOut } = useLevelContext();

  const score = useMemo(() => {
    if (currentLevel === 1) return 0;
    return currentLevel * 3 * 50 - wrongAttempts * 3;
  }, [currentLevel, wrongAttempts]);

  const getStorage = useCallback(() => {
    const stored = localStorage.getItem(storageName);
    const existing: LeaderboardEntry[] = stored ? JSON.parse(stored) : [];
    return existing;
  }, []);

  const saveScore = useCallback(
    (username: string) => {
      const existing = getStorage();
      const updated = [...existing, { username, score } as LeaderboardEntry];
      localStorage.setItem(storageName, JSON.stringify(updated));
    },
    [score, getStorage]
  );

  const getLeaderboard = useCallback(() => {
    const existing = getStorage();
    const sorted = existing.sort((a, b) => b.score - a.score);
    return sorted;
  }, [getStorage]);

  const registWrongAttempt = useCallback(() => {
    if (timeOut) return;
    setWrongAttempts(wrongAttempts + 1);
  }, [wrongAttempts, timeOut]);

  const value: LeaderBoardContextType = useMemo(() => {
    return { saveScore, registWrongAttempt, score, getLeaderboard };
  }, [saveScore, registWrongAttempt, score, getLeaderboard]);

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
