import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";
import { useLevelContext } from "../context/LevelProvider";
import { LocationsSet } from "../data/types";
import { areAllPokemonOnRightSpot } from "../utils/areAllPokemonOnRightSpot";
import { getItemsPerSection } from "../utils/getItemsPerSection";
import { PokemonLogoInGame } from "./general/PokemonLogoInGame";
import { Table } from "./general/Table";
import ChallangeCompleted from "./levelStatus/ChallangeCompleted";
import { CurrentLevel } from "./levelStatus/CurrentLevel";
import { LoadingLevel } from "./levelStatus/LoadingLevel";
import NextLevel from "./levelStatus/NextLevel";
import { StartGame } from "./levelStatus/StartGame";
import NotSortedArea from "./NotSortedArea";
import TypeBin from "./TypeBin";

const getBaseLocations = () =>
  ({
    empty: [],
  } as LocationsSet);

const LabArea = () => {
  const { pokemonList, typeBins, currentLevel, loading, timeOut } =
    useLevelContext();
  // state for current location of each draggable
  const [draggableLocation, setDraggableLocation] = useState<LocationsSet>(
    getBaseLocations()
  );

  // add type bins for selected pokemons to location list
  useEffect(() => {
    const locations = getBaseLocations();
    pokemonList.forEach((pokemon) => {
      locations.empty.push(pokemon.id);
    });
    setDraggableLocation(locations);
  }, [pokemonList, typeBins]);

  // update location of pokemons on frag and drop action
  const handleDragEnd = (event: DragEndEvent) => {
    const bins = ["empty", ...typeBins];
    const { over, active } = event;
    const target = active.id as number;
    const newLocations: LocationsSet = {};

    // remove from previous section
    bins.forEach((bin) => {
      newLocations[bin] = draggableLocation[bin]?.filter(
        (item) => item !== target
      );
    });

    // add to new position
    if (over) {
      const section = over.id as string;
      if (newLocations[section]) {
        newLocations[section].push(target);
      } else {
        newLocations[section] = [target];
      }
    } else {
      newLocations.empty.push(target);
    }
    setDraggableLocation(newLocations);
  };

  const levelCompleted = useMemo(
    () => areAllPokemonOnRightSpot(draggableLocation, pokemonList),
    [draggableLocation, pokemonList]
  );

  if (currentLevel === 0) return <StartGame />;
  if (loading) return <LoadingLevel />;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex justify-center grow flex-col">
        <PokemonLogoInGame />
        <CurrentLevel />
        <div className="flex justify-center items-center flex-col grow">
          {timeOut && <ChallangeCompleted />}
          {levelCompleted && !timeOut && <NextLevel />}
          {!levelCompleted && !timeOut && (
            <NotSortedArea
              items={getItemsPerSection(pokemonList, draggableLocation.empty)}
            />
          )}
        </div>
        <Table>
          <div className="w-4/5 flex justify-around gap-4 items-center">
            {typeBins.map((type) => (
              <TypeBin
                key={type}
                type={type}
                items={getItemsPerSection(pokemonList, draggableLocation[type])}
              />
            ))}
          </div>
        </Table>
      </div>
    </DndContext>
  );
};

export default LabArea;
