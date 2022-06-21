import { IPhotos } from "../../types/photosList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface photosListSlice {
  photosList: IPhotos[];
}

const initialState: photosListSlice = {
  photosList: [],
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
  },
});

export const { addPhotosList } = slice.actions;

export default slice.reducer;
