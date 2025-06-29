import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { setUser, clearUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

 
  return null; // It just sets auth, nothing to render
};

export default Body;
