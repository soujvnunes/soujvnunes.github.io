import { configureStore } from "@reduxjs/toolkit";
import snackbars from "stores/snackbars";

const store = configureStore({
  reducer: {
    snackbars: snackbars.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
