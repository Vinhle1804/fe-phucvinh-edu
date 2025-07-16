// src/redux/slide/wishlistSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/data/products";

interface WishlistState {
  wishlist: IProduct[];
}

// Hàm load wishlist từ localStorage
const loadWishlist = (): IProduct[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
  }
  return [];
};

const initialState: WishlistState = {
  wishlist: loadWishlist(),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<IProduct>) => {
      const exist = state.wishlist.find(item => item.id === action.payload.id);
      if (exist) {
        state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
