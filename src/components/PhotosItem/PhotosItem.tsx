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

interface CharactersItemProps {
  src: string;
  author: string;
  id: string;
}

const PhotosItem = ({ src, author, id }: CharactersItemProps) => {
  const [isLikedPhoto, setIsLikedPhoto] = useState(false);

  return (
    <>
      <StyledPhotosItem>
        <LazyImg src={src} author={author} id={id} />
        <StyledPhotoDescription>
          <StyledAthorTitle>ِАвтор фото - {author}</StyledAthorTitle>
          <StyledButtonGroup>
            <StyledLikesButton
              isLikedPhoto={isLikedPhoto}
              onClick={() => {
                store.dispatch(toggleForLike(id));
                setIsLikedPhoto(!isLikedPhoto);
              }}
            >
              {getLikeIcon(isLikedPhoto)}
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
