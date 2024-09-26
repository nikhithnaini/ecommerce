// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/index";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
