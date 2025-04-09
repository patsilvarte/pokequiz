import { FC } from "react";
import { useLevelContext } from "../context/LevelProvider";
import { Pokemon } from "../data/types";
import Draggable from "./dragAndDrop/Draggable";

interface NotSortedAreaProps {
  items: Pokemon[];
}

const NotSortedArea: FC<NotSortedAreaProps> = ({ items }) => {
  const { currentLevel } = useLevelContext();

  return (
    <>
      <p className="text-4xl">Do you know your Pokemons?</p>
      <p className="text-md">Sort them by type</p>
      <p className="text-4xl">Level {currentLevel}</p>
      <div className="flex justify-center items-center flex-wrap">
        {items.map(({ id, name, image }) => (
          <Draggable id={id} img={image} key={id}>
            {name}
          </Draggable>
        ))}
      </div>
    </>
  );
};
export default NotSortedArea;
