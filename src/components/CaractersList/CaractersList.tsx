import React from "react";
import { StyledCharactersList } from "./charactersListStyles";
import CharactersItem from "../CharactersItem/CharactersItem";

const CaractersList = () => {
  return (
    <StyledCharactersList>
      <CharactersItem src="https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441" />
    </StyledCharactersList>
  );
};

export default CaractersList;
