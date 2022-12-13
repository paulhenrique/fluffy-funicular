import { createSlice } from "@reduxjs/toolkit";

export interface KeyState {
  keys: {
    [key: string]: string;
  };
}

const initialState: KeyState = {
  keys: {
    keyName: "Text",
    a: "Teste",
  },
};

export const keysSlice = createSlice({
  name: "keys",
  initialState,
  reducers: {
    addKey: (
      state,
      action: {
        payload: {
          key: string;
          value: string;
        };
      }
    ) => {
      state.keys[action.payload.key] = action.payload.value;
    },
  },
});

export const { addKey } = keysSlice.actions;

export default keysSlice.reducer;
