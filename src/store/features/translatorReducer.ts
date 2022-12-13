import { createSlice } from "@reduxjs/toolkit";

export interface TranslatorState {
  text: string;
}

const initialState: TranslatorState = {
  text: "",
};

export const translatorSlice = createSlice({
  name: "translator",
  initialState,
  reducers: {
    setText: (
      state,
      action: {
        payload: string;
      }
    ) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = translatorSlice.actions;

export default translatorSlice.reducer;
