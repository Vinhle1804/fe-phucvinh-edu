// 'use client';

// import { setCart } from "../slide/cartSlide";
// import { AppDispatch, RootState } from "../store";
// import { toast } from "sonner";

// // Helper: Lưu giỏ hàng vào localStorage
// const saveCartToLocalStorage = (cart: { dishId: number; quantity: number }[]) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
// };

// // 🔄 Đồng bộ lại giỏ hàng từ localStorage (khi load trang)
// export const hydrateCartFromLocalStorage = () =>
//   (dispatch: AppDispatch) => {
//     if (typeof window !== "undefined") {
//       const saved = JSON.parse(localStorage.getItem("cart") || "[]");
//       dispatch(setCart(saved));
//     }
//   };

// // ➕ Thêm sản phẩm
// export const addToCart = (dish: { dishId: number; quantity: number }) =>
//   (dispatch: AppDispatch, getState: () => RootState) => {
//     const { cart } = getState().cart;
//     const updatedCart = [...cart];

//     const index = updatedCart.findIndex(item => item.dishId === dish.dishId);
//     if (index === -1) {
//       updatedCart.push({ ...dish });
//     } else {
//       updatedCart[index] = {
//         ...updatedCart[index],
//         quantity: updatedCart[index].quantity + dish.quantity,
//       };
//     }

//     saveCartToLocalStorage(updatedCart);
//     dispatch(setCart(updatedCart));
//     toast.success("✅ Đã thêm vào giỏ hàng!");
//   };

// // 🗑️ Xoá sản phẩm
// export const removeItem = (dishId: number) =>
//   (dispatch: AppDispatch, getState: () => RootState) => {
//     const { cart } = getState().cart;
//     const updatedCart = cart.filter(item => item.dishId !== dishId);

//     saveCartToLocalStorage(updatedCart);
//     dispatch(setCart(updatedCart));
//     toast.info("🗑️ Đã xoá sản phẩm.");
//   };

// // 🔼 Tăng SL
// export const increaseQuantity = (dishId: number) =>
//   (dispatch: AppDispatch, getState: () => RootState) => {
//     const { cart } = getState().cart;
//     const updatedCart = cart.map(item =>
//       item.dishId === dishId ? { ...item, quantity: item.quantity + 1 } : item
//     );

//     saveCartToLocalStorage(updatedCart);
//     dispatch(setCart(updatedCart));
//   };

// // 🔽 Giảm SL (nếu =0 thì xoá)
// export const decreaseQuantity = (dishId: number) =>
//   (dispatch: AppDispatch, getState: () => RootState) => {
//     const { cart } = getState().cart;
//     const updatedCart = cart
//       .map(item =>
//         item.dishId === dishId ? { ...item, quantity: item.quantity - 1 } : item
//       )
//       .filter(item => item.quantity > 0);

//     saveCartToLocalStorage(updatedCart);
//     dispatch(setCart(updatedCart));
//   };

// // ♻️ Xoá toàn bộ giỏ hàng
// export const resetCart = () => (dispatch: AppDispatch) => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("cart");
//   }
//   dispatch(setCart([]));
//   toast.info("🧹 Giỏ hàng đã được làm trống.");
// };
