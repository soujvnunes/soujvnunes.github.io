import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Snackbar = React.PropsWithChildren<{
  title?: string;
}>;
interface _Snackbar extends Snackbar {
  id: string;
}

const initialState: _Snackbar[] = [];

export default createSlice({
  name: "snackbars",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<_Snackbar>) => {
      state.push(action.payload);
    },
    hide: (state, action: PayloadAction<_Snackbar["id"]>) => {
      return state.filter(({ id }) => action.payload !== id);
    },
  },
});
