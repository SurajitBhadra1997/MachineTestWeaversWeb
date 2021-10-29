import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  userdata: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userdata = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userdata = {};
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
