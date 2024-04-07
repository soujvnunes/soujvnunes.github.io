import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

interface Snackbar {
  id: string;
  height: number;
}

const initialState: Snackbar[] = [];

export default createSlice({
  name: "snackbars",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Snackbar>) => [
      action.payload,
      ...state.filter(({ id }) => action.payload.id !== id),
    ],
    remove: (state, action: PayloadAction<Snackbar["id"]>) =>
      state.filter(({ id }) => id !== action.payload),
  },
});
