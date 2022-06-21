import { configureStore } from "@reduxjs/toolkit";
import photosList from "./slices/photosListSlice";
import app from "./slices/appSlice";

export const store = configureStore({
  reducer: { app, photosList },
});

export type State = ReturnType<typeof store.getState>;
