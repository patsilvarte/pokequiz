import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getRandomPokemons } from "../data/getRandomPokemons";
import { Pokemon } from "../data/types";
import { getOneTypePerPokemon } from "../utils/getOneTypePerPokemon";

type LevelContextType = {
  levelsCompleted: number;
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
  const [levelsCompleted, setLevelsCompleted] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getRandomPokemons();
        console.log(data);
        setPokemonList(data);
      } catch (err) {
        console.error("Failed to fetch Pokémon:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [levelsCompleted]);

  const typeBins = useMemo(
    () => getOneTypePerPokemon(pokemonList),
    [pokemonList]
  );

  const restart = () => setLevelsCompleted(0);
  const next = useCallback(
    () => setLevelsCompleted(levelsCompleted + 1),
    [levelsCompleted]
  );

  const value: LevelContextType = useMemo(() => {
    return {
      levelsCompleted,
      pokemonList,
      loading,
      typeBins,
      restart,
      next,
    };
  }, [levelsCompleted, loading, next, pokemonList, typeBins]);

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
