import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderedItems: [],
  },
  reducers: {
    replaceData(state, action) {
      if (action.payload) state.orderedItems = action.payload;
    },
    clearData(state) {
      state.orderedItems = [];
    },
    addOrdersFromCart(state, action) {
      const order = action.payload;
      state.orderedItems.push({
        id: new Date().toISOString(),
        date: new Date().toISOString(),
        items: order.items,
        totalQuantity: order.totalQuantity,
        totalAmount: order.totalAmount,
      });
    },
  },
});

export default orderSlice;

export const orderActions = orderSlice.actions;
