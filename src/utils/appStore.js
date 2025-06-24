import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,    // ← top‐level key is your slice name
  },
});

export default appStore;
