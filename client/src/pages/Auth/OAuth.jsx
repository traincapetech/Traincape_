import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
// import { AppContent } from "../../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FaGoogle } from "react-icons/fa";
import { google_auth } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

export default function OAuth({ type }) {
  const dispatch = useDispatch();
  // const { setIsLoggedIn, getUserData, userData, backendURL } = useContext(AppContent)
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      axios.defaults.withCredentials = true;

      const data = await dispatch(
        google_auth({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      console.log("Data", data);
      if (data.payload.success) {
        // Store values in local storage
        localStorage.setItem("token", data.payload.token);
        localStorage.setItem("username",  data.payload.rest.username);
        localStorage.setItem("role", data.payload.rest.role);
        localStorage.setItem("user", JSON.stringify(data.payload.rest));
        navigate("/");
      } else {
        console.error(data.payload.message);
      }
     
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className={`flex justify-center items-center bg-blue-800 border-none hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition duration-200 w-full`}
    >
      <FaGoogle className="mr-2" />
      <span className="break-words">
        {type == "sign-in" ? "Sign In with Google" : "Sign Up with Google "}
      </span>
    </button>
  );
}
