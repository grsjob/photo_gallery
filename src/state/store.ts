import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/characters";

export const store = configureStore({
  reducer: { characters },
});

export type State = ReturnType<typeof store.getState>;
