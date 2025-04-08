import { FC } from "react";
import { Garbage } from "../data/types";
import Draggable from "./dragAndDrop/Draggable";

interface NotSortedGarbageProps {
  items: Garbage[];
  level: number;
}

const NotSortedGarbage: FC<NotSortedGarbageProps> = ({ items, level }) => {
  return (
    <>
      <p className="text-4xl">Do you know your Pokemons?</p>
      <p className="text-4xl">Sort them by type</p>
      <p className="text-4xl">Level {level}</p>
      <div className="flex justify-center items-center flex-wrap">
        {items.map(({ id, displaynName, img }) => (
          <Draggable id={id} img={img}>
            {displaynName}
          </Draggable>
        ))}
      </div>
    </>
  );
};
export default NotSortedGarbage;
