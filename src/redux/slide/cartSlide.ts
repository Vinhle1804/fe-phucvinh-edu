// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1 item
export interface CartItem {
  id: number;         // Chính là product.id
  quantity: number;   // Số lượng
}

// State
interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") || "[]")
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[index].quantity += action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    resetCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
