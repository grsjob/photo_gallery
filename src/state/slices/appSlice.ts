import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  loading: boolean;
}

const initialState: AppState = {
  loading: true,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    loadingStart: (state) => {
      state.loading = true;
    },
    loadingEnd: (state) => {
      state.loading = false;
    },
  },
});

export const { loadingStart, loadingEnd } = slice.actions;
export default slice.reducer;
