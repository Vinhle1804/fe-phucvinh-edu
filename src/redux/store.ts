// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slide/cartSlide";
import wishlistReducer from "./slide/wishListSlide";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
       wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
