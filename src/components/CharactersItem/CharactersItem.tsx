import React from "react";
import {
  StyledCharacterDescription,
  StyledCharacterImage,
  StyledCharacterItem,
} from "./charactersItemStyles";

const CharactersItem = () => {
  return (
    <>
      <StyledCharacterItem>
        <StyledCharacterImage />
        <StyledCharacterDescription></StyledCharacterDescription>
      </StyledCharacterItem>
    </>
  );
};

export default CharactersItem;
