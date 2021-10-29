import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

import authReducer from "./auth";

import departmentReducer from "./department";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    department: departmentReducer,
  },
});

export default store;
