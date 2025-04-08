export type RecyclingBinName = "Amarelo" | "Azul" | "Verde";
export type BinIds = "empty" | "yellow" | "blue" | "green";

export type Bin = {
  name: RecyclingBinName;
  id: BinIds;
  img: string;
};
export type LocationsSet = Record<BinIds, string[]>;
export type Garbage = {
  id: string;
  displaynName: string;
  rightBin: BinIds;
  img: string;
};
export type Item = {
  id: string;
  item: JSX.Element;
};

export type Level = {
  bins: Bin[];
  garbage: Garbage[];
};
