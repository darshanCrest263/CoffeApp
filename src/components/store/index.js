import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";
import orderSlice from "./orderSlice";
import authSlice from "./authslice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
