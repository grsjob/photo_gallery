import React from "react";
import {
  StyledCharacterDescription,
  StyledCharacterImage,
  StyledCharacterItem,
} from "./charactersItemStyles";

interface CharactersItemProps {
  src: string;
}

const CharactersItem = ({ src }: CharactersItemProps) => {
  return (
    <>
      <StyledCharacterItem>
        <StyledCharacterImage src={src} />
        <StyledCharacterDescription></StyledCharacterDescription>
      </StyledCharacterItem>
    </>
  );
};

export default CharactersItem;
