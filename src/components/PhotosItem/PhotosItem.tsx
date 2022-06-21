import React from "react";
import { StyledPhotoDescription, StyledPhotosItem } from "./photosItemStyles";
import LazyImg from "../LazyImg/LazyImg";

interface CharactersItemProps {
  src: string;
  author: string;
  id: string;
}

const PhotosItem = ({ src, author, id }: CharactersItemProps) => {
  return (
    <>
      <StyledPhotosItem>
        <LazyImg src={src} author={author} id={id} />
        <StyledPhotoDescription>{author}</StyledPhotoDescription>
      </StyledPhotosItem>
    </>
  );
};

export default PhotosItem;
