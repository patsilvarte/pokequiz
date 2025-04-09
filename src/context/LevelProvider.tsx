import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
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
};

export const LevelContext = createContext<LevelContextType | undefined>(
  undefined
);

export const LevelProvider = ({ children }: PropsWithChildren) => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

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

  const typeBins = useMemo(
    () => getOneTypePerPokemon(pokemonList),
    [pokemonList]
  );

  const restart = () => setCurrentLevel(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const next = () => setCurrentLevel((prev) => prev + 1);

  const value: LevelContextType = useMemo(() => {
    return {
      currentLevel,
      pokemonList,
      loading,
      typeBins,
      restart,
      next,
    };
  }, [currentLevel, loading, next, pokemonList, typeBins]);

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
