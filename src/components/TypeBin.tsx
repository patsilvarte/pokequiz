import { FC } from "react";
import { Pokemon } from "../data/types";
import { getTypeImage } from "../utils/getTypeImage";
import Draggable from "./dragAndDrop/Draggable";
import Droppable from "./dragAndDrop/Droppable";

interface TypeBinProps {
  type: string;
  items: Pokemon[];
}

const TypeBin: FC<TypeBinProps> = ({ type, items }) => {
  return (
    <div className="relative w-1/3 h-96">
      <img
        src={getTypeImage(type)}
        alt={`${type} bin`}
        className="absolute w-full h-full object-contain"
      />
      <Droppable key={type} id={type}>
        {items.map(({ id, name, types, image }) => (
          <Draggable
            id={id}
            key={id}
            isPlacedRight={types.includes(type)}
            insideBin
            img={image}
          >
            {name}
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
};

export default TypeBin;
