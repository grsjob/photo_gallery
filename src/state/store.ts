import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/charactersSlice";
import app from "./slices/appSlice";

export const store = configureStore({
  reducer: { app, characters },
});

export type State = ReturnType<typeof store.getState>;
