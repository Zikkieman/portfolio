import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  menu: number;
}

const initialState: InitialStateType = {
  menu: 1,
};

const toggleSlices = createSlice({
  name: "togglers",
  initialState,
  reducers: {
    changeMenuToggler: (state, action: PayloadAction<number>) => {
      state.menu = action.payload;
    },
  },
});

export const { changeMenuToggler } = toggleSlices.actions;
export default toggleSlices.reducer;
