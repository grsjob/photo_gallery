import React from "react";
import { StyledCharactersList } from "./charactersListStyles";
import CharactersItem from "../CharactersItem/CharactersItem";

const CaractersList = () => {
  return (
    <StyledCharactersList>
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
      <CharactersItem />
    </StyledCharactersList>
  );
};

export default CaractersList;
