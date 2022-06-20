import { ICharacters } from "../../types/characters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Characters {
  characters: ICharacters[];
}

const initialState: Characters = {
  characters: [],
};

const slice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacters: (
      state,
      { payload: characters }: PayloadAction<ICharacters[]>,
    ) => {
      state.characters = characters;
    },
  },
});

export const { addCharacters } = slice.actions;

export default slice.reducer;
