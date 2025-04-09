import { ReactComponent as PokeballIcon } from "../../assets/pokeball-pokemon-svgrepo-com.svg";
import { useLevelContext } from "../../context/LevelProvider";

export const CurrentLevel = () => {
  const { currentLevel } = useLevelContext();

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
  );
};
