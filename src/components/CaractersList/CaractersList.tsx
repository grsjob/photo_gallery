import React from "react";
import { StyledCharactersList } from "./charactersListStyles";
import CharactersItem from "../CharactersItem/CharactersItem";
import { useStore } from "../../state/storeHooks";

const CaractersList = () => {
  const { characters } = useStore(({ characters }) => characters);
  return (
    <StyledCharactersList>
      {characters.map((character) => (
        <CharactersItem
          key={character.char_id}
          name={character.name}
          src={character.img}
        />
      ))}
    </StyledCharactersList>
  );
};

export default CaractersList;
