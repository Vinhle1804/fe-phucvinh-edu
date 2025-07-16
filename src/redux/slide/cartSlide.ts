// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Interface cho 1 sản phẩm trong giỏ
export interface CartItem {
  id: number;         // ID sản phẩm
  name: string;       // Tên sản phẩm
  price: number;      // Giá 1 đơn vị
  image: string;      // Link ảnh
  quantity: number;   // Số lượng
}

// ✅ State giỏ hàng
interface CartState {
  cartItems: CartItem[]; 
  cart: CartItem[];
}

// ✅ Hàm khởi tạo: lấy từ localStorage nếu có
const getInitialCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  }
  return [];
};

// ✅ State ban đầu
const initialState: CartState = {
  cart: getInitialCart(),
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ
    // addToCart: (state, action: PayloadAction<CartItem>) => {
    //   const index = state.cart.findIndex(item => item.id === action.payload.id);
    //   if (index === -1) {
    //     state.cart.push(action.payload);
    //   } else {
    //     state.cart[index].quantity += action.payload.quantity;
    //   }
    //   localStorage.setItem("cart", JSON.stringify(state.cart));
    // },
    addToCart: (state, action: PayloadAction<CartItem>) => {
  const exists = state.cart.find(item => item.id === action.payload.id);

  if (!exists) {
    state.cart.push(action.payload);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }
},

    // Xoá sản phẩm
    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // // Tăng số lượng
    // increaseQuantity: (state, action: PayloadAction<number>) => {
    //   const item = state.cart.find(item => item.id === action.payload);
    //   if (item) {
    //     item.quantity += 1;
    //     localStorage.setItem("cart", JSON.stringify(state.cart));
    //   }
    // },

    // // Giảm số lượng (nếu còn >1 thì giảm, còn 1 thì xoá)
    // decreaseQuantity: (state, action: PayloadAction<number>) => {
    //   const index = state.cart.findIndex(item => item.id === action.payload);
    //   if (index !== -1) {
    //     if (state.cart[index].quantity > 1) {
    //       state.cart[index].quantity -= 1;
    //     } else {
    //       state.cart.splice(index, 1);
    //     }
    //     localStorage.setItem("cart", JSON.stringify(state.cart));
    //   }
    // },

    // // Reset giỏ hàng
    // resetCart: (state) => {
    //   state.cart = [];
    //   localStorage.removeItem("cart");
    // },
  },
});

export const {
  addToCart,
  removeItem,
  // increaseQuantity,
  // decreaseQuantity,
  // resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
