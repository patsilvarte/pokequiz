import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";
import { BinIds, LocationsSet } from "../data/types";
import { Table } from "./general/Table";
import RecyclingBin from "./RecyclingBin";

import useLevels from "../hooks/useLevels";
import { areAllItemsOnRightSpot } from "../utils/areAllItemsOnRightSpot";
import { getItemsPerSection } from "../utils/getItemsPerSection";
import ChallangeCompleted from "./levelStatus/ChallangeCompleted";
import NextLevel from "./levelStatus/NextLevel";
import NotSortedGarbage from "./NotSortedGarbage";

const initLocation: LocationsSet = {
  empty: [],
  yellow: [],
  blue: [],
  green: [],
};

const RecyclingArea = () => {
  const { bins, garbage, hasNext, next, level, restart } = useLevels();

  // value savers for location and render of draggable items
  const [draggableLocation, setDraggableLocation] =
    useState<LocationsSet>(initLocation);

  useEffect(() => {
    let baseLocations: LocationsSet = {
      empty: [],
      yellow: [],
      blue: [],
      green: [],
    };
    garbage.forEach((item) => {
      baseLocations.empty.push(item.id);
    });
    setDraggableLocation(baseLocations);
  }, [garbage]);

  const levelCompleted = useMemo(
    () => areAllItemsOnRightSpot(draggableLocation, garbage),
    [draggableLocation, garbage]
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const target = active.id as string;

    // copy object to avaid state mutation
    const originalLocation = { ...draggableLocation };
    // remove from previous section
    const newLocations: LocationsSet = {
      empty: originalLocation.empty.filter((item) => item !== target),
      yellow: originalLocation.yellow.filter((item) => item !== target),
      blue: originalLocation.blue.filter((item) => item !== target),
      green: originalLocation.green.filter((item) => item !== target),
    };

    // add to new position
    if (over) {
      const section = over.id as BinIds;
      newLocations[section].push(target);
    } else {
      newLocations.empty.push(target);
    }
    setDraggableLocation(newLocations);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex grow flex-col">
        <div className="flex justify-center flex-col grow">
          {levelCompleted && !hasNext && (
            <ChallangeCompleted restart={restart} />
          )}
          {levelCompleted && hasNext && <NextLevel next={next} />}
          {!levelCompleted && (
            <NotSortedGarbage
              items={getItemsPerSection(garbage, draggableLocation.empty)}
              level={level}
            />
          )}
        </div>
        <Table garbage={garbage} draggableLocation={draggableLocation}>
          <div className="w-4/5 flex justify-around gap-4 items-center">
            {bins.map(({ id, name, img }) => (
              <RecyclingBin
                id={id}
                img={img}
                name={name}
                items={getItemsPerSection(garbage, draggableLocation[id])}
              />
            ))}
          </div>
        </Table>
      </div>
    </DndContext>
  );
};

export default RecyclingArea;
