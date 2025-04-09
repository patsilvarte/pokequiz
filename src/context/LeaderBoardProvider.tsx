import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLevelContext } from "./LevelProvider";

type LeaderBoardContextType = {
  saveScore: (username: string) => void;
  registWrongAttempt: () => void;
};

export const LeaderBoardContext = createContext<
  LeaderBoardContextType | undefined
>(undefined);

export const LeaderBoardProvider = ({ children }: PropsWithChildren) => {
  const storageName = "pokequiz-leaderboard";
  const [wrongAttempts, setWrongAttempts] = useState<number>(0);
  const { currentLevel } = useLevelContext();

  const score = useMemo(() => {
    if (currentLevel === 1) return 0;
    return currentLevel * 3 * 50 - wrongAttempts * 3;
  }, [currentLevel, wrongAttempts]);

  const saveScore = useCallback(
    (username: string) => {
      const existing = JSON.parse(localStorage.getItem(storageName) || "[]");
      const updated = [...existing, { username, score }];
      localStorage.setItem(storageName, JSON.stringify(updated));
    },
    [score]
  );

  const registWrongAttempt = useCallback(() => {
    setWrongAttempts(wrongAttempts + 1);
  }, [wrongAttempts]);

  const value: LeaderBoardContextType = useMemo(() => {
    return { saveScore, registWrongAttempt };
  }, [saveScore, registWrongAttempt]);

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
