// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/index";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
