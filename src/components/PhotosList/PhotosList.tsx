import React from "react";
import { StyledPhotosList } from "./photosListStyles";
import CharactersItem from "../PhotosItem/PhotosItem";
import { useStore } from "../../state/storeHooks";

const photosList = () => {
  const { photosList } = useStore(({ photosList }) => photosList);
  return (
    <StyledPhotosList>
      {photosList.map((photo) => (
        <CharactersItem
          key={photo.id}
          author={photo.author}
          src={photo.download_url}
        />
      ))}
    </StyledPhotosList>
  );
};

export default photosList;
