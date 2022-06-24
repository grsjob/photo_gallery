import React from "react";
import {
  StyledAthorTitle,
  StyledPhotoDescription,
  StyledPhotosItem,
} from "./photosItemStyles";
import LazyImg from "../LazyImg/LazyImg";
import { removePhoto, toggleForLike } from "../../state/slices/photosListSlice";
import { store } from "../../state/store";

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
        <StyledPhotoDescription>
          <StyledAthorTitle>ِАвтор фото - {author}</StyledAthorTitle>
          <button onClick={() => store.dispatch(removePhoto(id))}>
            Удалить
          </button>
          <button onClick={() => store.dispatch(toggleForLike(id))}>
            Like
          </button>
        </StyledPhotoDescription>
      </StyledPhotosItem>
    </>
  );
};

export default PhotosItem;
