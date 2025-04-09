import table from "../../assets/table.jpg";

import { FC } from "react";
import { Background } from "./Background";

interface StreetProps {
  children: JSX.Element;
}

export const Table: FC<StreetProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-screen h-1/2 relative">
      <Background
        className="absolute bottom-0 h-2/5 w-full "
        style={{ backgroundImage: `url(${table})` }}
      />

      {children}
    </div>
  );
};
