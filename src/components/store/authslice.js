import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    uid: "",
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      const { uid, token } = action.payload;
      state.uid = uid;
      state.token = token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.uid = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;

export const authActions = authSlice.actions;
