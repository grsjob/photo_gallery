import { IPhotos } from "../../types/photosList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface photosListSlice {
  photosList: IPhotos[];
  photosWithLike: IPhotos[];
  currentPhotosList: IPhotos[];
}

const initialState: photosListSlice = {
  photosList: [],
  photosWithLike: [],
  currentPhotosList: [],
};

const slice = createSlice({
  name: "photosList",
  initialState,
  reducers: {
    addPhotosList: (
      state,
      { payload: photosList }: PayloadAction<IPhotos[]>,
    ) => {
      state.photosList = photosList;
    },
    removePhoto: (state, { payload: id }: PayloadAction<string>) => {
      state.photosList = state.photosList.filter((photo) => photo.id !== id);
      state.photosWithLike = state.photosWithLike.filter(
        (photo) => photo.id !== id,
      );
      state.currentPhotosList = state.currentPhotosList.filter(
        (photo) => photo.id !== id,
      );
    },
    toggleForLike: (state, { payload: id }: PayloadAction<string>) => {
      state.photosList = state.photosList.map((photo) => {
        if (photo.id === id && photo.like === undefined) {
          photo["like"] = true;

          state.photosWithLike.push(photo);
        } else if (photo.id === id && photo.like === false) {
          photo.like = true;

          state.photosWithLike.push(photo);
        } else if (photo.id === id && photo.like === true) {
          photo.like = false;

          state.photosWithLike = state.photosWithLike.filter(
            (photo) => photo.id !== id,
          );
        }
        return photo;
      });
    },
    toggleForFilterLikes: (
      state,
      { payload: photoList }: PayloadAction<IPhotos[]>,
    ) => {
      state.currentPhotosList = photoList;
    },
  },
});

export const {
  addPhotosList,
  removePhoto,
  toggleForLike,
  toggleForFilterLikes,
} = slice.actions;

export default slice.reducer;
