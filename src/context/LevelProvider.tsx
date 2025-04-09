import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { POKEMONS_PER_LEVEL } from "../data/consts";
import { getRandomPokemons } from "../data/getRandomPokemons";
import { Pokemon } from "../data/types";
import { getOneTypePerPokemon } from "../utils/getOneTypePerPokemon";

type LevelContextType = {
  currentLevel: number;
  pokemonList: Pokemon[];
  loading: boolean;
  typeBins: string[];
  restart: () => void;
  next: () => void;
  end: () => void;
  start: () => void;
  timeOut: boolean;
  startTime: number | undefined;
  error: string;
};

export const LevelContext = createContext<LevelContextType | undefined>(
  undefined
);

export const LevelProvider = ({ children }: PropsWithChildren) => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState<number>();
  const [timeOut, setTimeOut] = useState(false);
  const [error, setError] = useState("");

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getRandomPokemons();
      setPokemonList(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch Pokémon:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentLevel !== 0) {
      fetchPokemons();
    }
  }, [currentLevel]);

  useEffect(() => {
    if (pokemonList.length < POKEMONS_PER_LEVEL && startTime) {
      setError(
        "There was aa problem fetching the list of pokemons, try again later"
      );
      restart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonList]);

  const typeBins = useMemo(
    () => getOneTypePerPokemon(pokemonList),
    [pokemonList]
  );

  const start = () => {
    setCurrentLevel(1);
    setStartTime(Date.now());
    setTimeOut(false);
  };
  const restart = () => {
    setCurrentLevel(0);
    setStartTime(undefined);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const next = () => setCurrentLevel((prev) => prev + 1);
  const end = () => setTimeOut(true);

  const value: LevelContextType = useMemo(() => {
    return {
      currentLevel,
      pokemonList,
      loading,
      typeBins,
      restart,
      next,
      start,
      end,
      timeOut,
      startTime,
      error,
    };
  }, [currentLevel, error, loading, pokemonList, startTime, timeOut, typeBins]);

  return (
    <LevelContext.Provider value={value}>{children}</LevelContext.Provider>
  );
};

export const useLevelContext = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error("useLevelContext must be used within a LevelProvider");
  }
  return context;
};
