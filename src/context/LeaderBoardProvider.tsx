import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LeaderboardEntry } from "../data/types";
import { useLevelContext } from "./LevelProvider";

type LeaderBoardContextType = {
  score: number;
  saveScore: (username: string) => void;
  registWrongAttempt: () => void;
  registRightAnswer: () => void;
  getLeaderboard: () => LeaderboardEntry[];
};

export const LeaderBoardContext = createContext<
  LeaderBoardContextType | undefined
>(undefined);

export const LeaderBoardProvider = ({ children }: PropsWithChildren) => {
  const storageName = "pokequiz-leaderboard";
  const [wrongAttempts, setWrongAttempts] = useState<number>(0);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const { timeOut, startTime } = useLevelContext();

  const score = useMemo(() => {
    const result = rightAnswers * 50 - wrongAttempts * 3;
    return result < 0 ? 0 : result;
  }, [rightAnswers, wrongAttempts]);

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

  const registRightAnswer = useCallback(() => {
    if (timeOut) return;
    setRightAnswers(rightAnswers + 1);
  }, [rightAnswers, timeOut]);

  useEffect(() => {
    // reset attampts when game starts
    if (startTime) {
      setWrongAttempts(0);
      setRightAnswers(0);
    }
  }, [startTime]);

  const value: LeaderBoardContextType = useMemo(() => {
    return {
      saveScore,
      registWrongAttempt,
      score,
      getLeaderboard,
      registRightAnswer,
    };
  }, [saveScore, registWrongAttempt, score, getLeaderboard, registRightAnswer]);

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
