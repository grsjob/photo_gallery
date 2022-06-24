import React, { useEffect, useState } from "react";
import { StyledPhotosList } from "./photosListStyles";
import CharactersItem from "../PhotosItem/PhotosItem";
import { useStore } from "../../state/storeHooks";
import { store } from "../../state/store";
import { toggleForFilterLikes } from "../../state/slices/photosListSlice";
import { Switch } from "antd";

const photosList = () => {
  const { currentPhotosList, photosList, photosWithLike } = useStore(
    ({ photosList }) => photosList,
  );
  const [isFilterForLikesActive, setFilterForLikesActive] = useState(false);
  useEffect(() => {
    if (isFilterForLikesActive) {
      store.dispatch(toggleForFilterLikes(photosWithLike));
    } else {
      store.dispatch(toggleForFilterLikes(photosList));
    }
  }, [photosList, currentPhotosList, photosWithLike, isFilterForLikesActive]);

  return (
    <StyledPhotosList>
      <Switch
        checkedChildren="remove sorting by likes"
        unCheckedChildren="select liked photos"
        aria-lable="Switch for likes filter"
        onChange={() => setFilterForLikesActive(!isFilterForLikesActive)}
      />
      {currentPhotosList.map((photo) => (
        <CharactersItem
          key={photo.id}
          id={photo.id}
          author={photo.author}
          src={photo.download_url}
        />
      ))}
    </StyledPhotosList>
  );
};

export default photosList;
