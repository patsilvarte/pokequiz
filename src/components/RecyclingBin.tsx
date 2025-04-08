import { FC } from "react";
import { Garbage, RecyclingBinName } from "../data/types";
import Draggable from "./dragAndDrop/Draggable";
import Droppable from "./dragAndDrop/Droppable";

interface RecyclingBinProps {
  id: string;
  name: RecyclingBinName;
  items: Garbage[];
  img: string;
}

const RecyclingBin: FC<RecyclingBinProps> = ({ id, name, items, img }) => {
  return (
    <div className="relative w-1/3 h-96">
      <img
        src={img}
        alt={`${name} bin`}
        className="absolute w-full h-full object-contain"
      />
      <Droppable key={id} id={id}>
        {items.map(({ id: itemId, displaynName, rightBin, img }) => (
          <Draggable
            id={itemId}
            isPlacedRight={rightBin === id}
            insideBin
            img={img}
          >
            {displaynName}
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
};

export default RecyclingBin;
