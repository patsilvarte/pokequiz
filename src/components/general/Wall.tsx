import { FC } from "react";
import wallBackground from "../../assets/wall.jpg";
import { Background } from "./Background";

interface SkyProps {
  children: JSX.Element;
}

export const Wall: FC<SkyProps> = ({ children }) => {
  return (
    <Background
      className="flex w-screen h-screen flex-col"
      style={{ backgroundImage: `url(${wallBackground})` }}
    >
      {/* <img
        src={labShelf}
        alt={"lab shelf"}
        style={{ width: 300, left: 30, top: 30 }}
        className="absolute object-contain"
      /> */}
      {children}
    </Background>
  );
};
