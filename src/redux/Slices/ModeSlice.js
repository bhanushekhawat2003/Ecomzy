import { createSlice } from "@reduxjs/toolkit";

export const ModeSlice = createSlice({
  name: "mode",
  initialState:{light:true},
  reducers: {
    toggle: (state) => {
      state.light= !state.light;
    },
   
  },
});

export const { toggle } = ModeSlice.actions;
export default ModeSlice.reducer;