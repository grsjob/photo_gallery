import { configureStore } from "@reduxjs/toolkit";
import photosList from "./slices/photosListSlice";
import app from "./slices/appSlice";
import pagination from "./slices/paginationSlice";

export const store = configureStore({
  reducer: { app, photosList, pagination },
});

export type State = ReturnType<typeof store.getState>;
