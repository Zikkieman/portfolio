import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import toggleReducer from "../redux/features/toggleSlice";
import themeReducer from "./features/themeSlice";




export const store = configureStore({
  reducer: {
    toggler: toggleReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
