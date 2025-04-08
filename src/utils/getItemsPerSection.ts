import { Pokemon } from "../data/types";

export const getItemsPerSection = (
  allItems: Pokemon[],
  itemsSection: number[]
) => {
  return allItems.filter((item) => itemsSection?.includes(item.id));
};
