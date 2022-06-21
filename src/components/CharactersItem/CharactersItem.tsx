import React from "react";
import {
  StyledCharacterDescription,
  StyledCharacterImage,
  StyledCharacterItem,
} from "./charactersItemStyles";

interface CharactersItemProps {
  src: string;
  name: string;
}

const CharactersItem = ({ src, name }: CharactersItemProps) => {
  return (
    <>
      <StyledCharacterItem>
        <StyledCharacterImage src={src} alt={name} />
        <StyledCharacterDescription>{name}</StyledCharacterDescription>
      </StyledCharacterItem>
    </>
  );
};

export default CharactersItem;
