import { FC } from "react";

import { Pokemon } from "../data/types";
import Draggable from "./dragAndDrop/Draggable";

interface NotSortedAreaProps {
  items: Pokemon[];
}

const NotSortedArea: FC<NotSortedAreaProps> = ({ items }) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {items.map(({ id, name, image }) => (
        <Draggable id={id} img={image} key={id}>
          {name}
        </Draggable>
      ))}
    </div>
  );
};
export default NotSortedArea;
