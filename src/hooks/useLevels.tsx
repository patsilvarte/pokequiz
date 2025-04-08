import { useMemo, useState } from "react";
import { level1, level2, level3, level4, level5 } from "../data/levels";
import { Level } from "../data/types";

const useLevels = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const levels: Level[] = [level1, level2, level3, level4, level5];

  const hasNext = useMemo(() => {
    const nextLevel = currentLevel + 1;
    return nextLevel < levels.length;
  }, [currentLevel, levels.length]);

  const next = () => {
    if (hasNext) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const restart = () => {
    setCurrentLevel(0);
  };

  return {
    level: currentLevel + 1,
    hasNext,
    bins: levels[currentLevel].bins,
    garbage: levels[currentLevel].garbage,
    next,
    restart,
  };
};

export default useLevels;
