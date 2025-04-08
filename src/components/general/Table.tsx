import table from "../../assets/table.jpg";
import { Garbage, LocationsSet } from "../../data/types";

import { FC } from "react";
import { Background } from "./Background";

interface StreetProps {
  garbage: Garbage[];
  draggableLocation: LocationsSet;
  children: JSX.Element;
}

export const Table: FC<StreetProps> = ({
  garbage,
  draggableLocation,
  children,
}) => {
  return (
    <div className="flex justify-center w-screen relative">
      <Background
        className="absolute bottom-0 h-1/3 w-full "
        style={{ backgroundImage: `url(${table})` }}
      />

      {children}
    </div>
  );
};
