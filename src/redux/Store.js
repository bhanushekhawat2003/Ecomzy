import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { ModeSlice } from "./Slices/ModeSlice";


export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    mode:ModeSlice.reducer,
  
  },
});