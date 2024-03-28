import { Garbage, LocationsSet } from "./types";

export const getItemsPerSection = (
  allItems: Garbage[],
  itemsSection: string[]
) => {
  return allItems.filter((item) => itemsSection.includes(item.id));
};

export const areAllItemsOnRightSpot = (
  locationIds: LocationsSet,
  garbage: Garbage[]
) => {
  if (locationIds.empty.length !== 0) {
    return false;
  }
  for (let i = 0; i < garbage.length; i++) {
    const item = garbage[i];
    const rightBin = item.rightBin;
    const isOnRightBin = locationIds[rightBin].includes(item.id);
    if (!isOnRightBin) return false;
  }
  return true;
};
