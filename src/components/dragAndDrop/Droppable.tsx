import React, { FC, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  children?: ReactNode;
  id: string;
}

const Droppable: FC<DroppableProps> = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex justify-center items-center flex-col flex-wrap content-center relative w-full h-full "
    >
      {props.children}
    </div>
  );
};

export default Droppable;
