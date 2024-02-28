import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  theme: string;
}

const initialState: InitialStateType = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themeChangers",
  initialState,
  reducers: {
    lightTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    darkTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { lightTheme, darkTheme } = themeSlice.actions;

export default themeSlice.reducer;
