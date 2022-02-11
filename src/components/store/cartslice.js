import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    cancelOneItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    cancelAllOrderItems(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.qty = existingItem.qty + 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
