import React from "react";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { setUser,clearUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/Constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Get user from Redux store

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

   useEffect(() => {
    const unsubcribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(setUser({ uid, email, displayName,photoURL }));
        navigate("/browser");
      } else {
        dispatch(clearUser());
        navigate("/");
      }
    });

    return ()=> unsubcribe();  // Cleanup on unmount
  }, [dispatch]);


  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img
        className="w-40"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex items-center">
          <img
            className="w-10 h-10  mr-3"
            alt="user icon"
            src={USER_AVATAR}
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-3 py-1 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
