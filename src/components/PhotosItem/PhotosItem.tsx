import React from "react";
import {
  StyledPhotoDescription,
  StyledPhoto,
  StyledPhotosItem,
} from "./photosItemStyles";

interface CharactersItemProps {
  src: string;
  author: string;
}

const PhotosItem = ({ src, author }: CharactersItemProps) => {
  return (
    <>
      <StyledPhotosItem>
        <StyledPhoto src={src} alt={`Фотография от автора ${author}`} />
        <StyledPhotoDescription>{author}</StyledPhotoDescription>
      </StyledPhotosItem>
    </>
  );
};

export default PhotosItem;
