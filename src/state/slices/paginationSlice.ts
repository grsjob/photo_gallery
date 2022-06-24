import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhotos } from "../../types/photosList";

interface PaginationState {
  pagesNumbers: number[];
  currentPage: number;
  currentPhotosAfterPagination: IPhotos[];
}

const initialState: PaginationState = {
  pagesNumbers: [],
  currentPage: 1,
  currentPhotosAfterPagination: [],
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload: num }: PayloadAction<number>) => {
      state.currentPage = num;
    },
    setPageNumbers: (state, { payload: arr }: PayloadAction<number[]>) => {
      state.pagesNumbers = arr;
    },
    setCurrentPhotosAfterPagination: (
      state,
      { payload: photoList }: PayloadAction<IPhotos[]>,
    ) => {
      state.currentPhotosAfterPagination = photoList;
    },
  },
});

export const {
  setCurrentPage,
  setPageNumbers,
  setCurrentPhotosAfterPagination,
} = slice.actions;

export default slice.reducer;
