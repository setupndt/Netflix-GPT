import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/Validate"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/Constant";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current?.value;

    const mess = validate(email, password, isSignInForm ? "skip" : name);
    setErrorMessage(mess);
    if (mess) return;

    const dispatchUser = (user) => {
      // extract only plain data
      const { uid, email: userEmail, displayName } = user;
      dispatch(setUser({ uid, email: userEmail, displayName }));
    };

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatchUser(user);
          updateProfile(user, {
  displayName: name, photoURL: USER_AVATAR
}).then(() => {
  navigate("/browser")
}).catch((error) => {
  setErrorMessage(error.message);
});
          navigate("/browser");
        })
        .catch((error) => {
          setErrorMessage(`${error.code} – ${error.message}`);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatchUser(user);
          navigate("/browser");
        })
        .catch((error) => {
          setErrorMessage(`${error.code} – ${error.message}`);
         
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10 w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        {errorMessage && (
          <p className="text-red-500 py-2 font-bold text-lg">
            {errorMessage}
          </p>
        )}

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md hover:bg-red-800 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
