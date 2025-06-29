import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer, 
     movies: movieReducer,   // ← top‐level key is your slice name
  },
});

export default appStore;
