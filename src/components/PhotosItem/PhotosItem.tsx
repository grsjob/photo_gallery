import React, { useState } from "react";
import {
  StyledAthorTitle,
  StyledButtonGroup,
  StyledDeleteButton,
  StyledLikesButton,
  StyledPhotoDescription,
  StyledPhotosItem,
} from "./photosItemStyles";
import LazyImg from "../LazyImg/LazyImg";
import { removePhoto, toggleForLike } from "../../state/slices/photosListSlice";
import { store } from "../../state/store";
import { DeleteOutlined, HeartFilled } from "@ant-design/icons";
import { IPhotos } from "../../types/photosList";

interface CharactersItemProps {
  src: string;
  author: string;
  id: string;
  arrPhotos: IPhotos[];
}

const PhotosItem = ({ src, author, id, arrPhotos }: CharactersItemProps) => {
  return (
    <>
      <StyledPhotosItem>
        <LazyImg src={src} author={author} id={id} />
        <StyledPhotoDescription>
          <StyledAthorTitle>ِАвтор фото - {author}</StyledAthorTitle>
          <StyledButtonGroup>
            <StyledLikesButton
              isLikedPhoto={getStatusCurrentPhoto(id, arrPhotos)}
              onClick={() => {
                store.dispatch(toggleForLike(id));
              }}
            >
              {getLikeIcon(getStatusCurrentPhoto(id, arrPhotos))}
              &nbsp;Like
            </StyledLikesButton>
            <StyledDeleteButton onClick={() => store.dispatch(removePhoto(id))}>
              <DeleteOutlined style={{ fontSize: "20px", color: "red" }} />
            </StyledDeleteButton>
          </StyledButtonGroup>
        </StyledPhotoDescription>
      </StyledPhotosItem>
    </>
  );
};

export default PhotosItem;

function getLikeIcon(isLikedPhoto) {
  if (isLikedPhoto) {
    return <HeartFilled style={{ color: "#fff" }} />;
  } else {
    return <HeartFilled style={{ color: "#5CB85C" }} />;
  }
}

function getStatusCurrentPhoto(id: string, arrPhotos: IPhotos[]) {
  const currentPhoto = arrPhotos.find((photo) => photo.id === id);
  if (currentPhoto.like) {
    return currentPhoto.like;
  }
  return false;
}
