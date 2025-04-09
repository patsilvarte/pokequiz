import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FC, ReactNode } from "react";
import itemRight from "../../assets/item_right.png";
import itemWrong from "../../assets/item_wrong.png";

interface DraggableProps {
  children?: ReactNode;
  id: string | number;
  isPlacedRight?: boolean;
  insideBin?: boolean;
  img: string;
}

const Draggable: FC<DraggableProps> = ({
  id,
  children,
  isPlacedRight,
  insideBin = false,
  img,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const styleButton = transform
    ? { transform: CSS.Translate.toString(transform), zIndex: 3 }
    : {
        margin: insideBin ? "2px" : "20px",
        maxWidth: insideBin ? "100px" : "",
      };

  const styleItem = {
    borderColor:
      transform || !insideBin ? "black" : isPlacedRight ? "green" : "red",
    color: transform || !insideBin ? "black" : isPlacedRight ? "green" : "red",
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    height: insideBin ? "60px" : "80px",
    width: insideBin ? "60px" : "80px",
  };

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={styleButton}
      className="flex justify-center items-center flex-col m-4"
    >
      <div
        style={styleItem}
        className="border-2 rounded rounded-full flex justify-center items-center"
      >
        {!transform &&
          insideBin &&
          (isPlacedRight ? (
            <img src={itemRight} alt="right" className="w-3/4" />
          ) : (
            <img src={itemWrong} alt="wrong" className="w-3/4" />
          ))}
      </div>
      <p className="text-base">{children}</p>
    </button>
  );
};
export default Draggable;
