import React, { useEffect, useState } from "react";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { loginUser } from "../slices/userSlice";
import banner from "../assets/loginbanner.jpeg";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";
// import SolarSystem from "./SolarSystem";
import Lottie from "lottie-react";
import signup from "../assets/signup.json";

const Login = () => {
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  // Password visibility toggle
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(
        loginUser({ email: payload.email, password: payload.password })
      );
      console.log({ loginResult: result });

      if (loginUser.fulfilled.match(result)) {
        // Login successful, navigate to home page
        window.location.href = "/"; // or navigate('/')
      } else if (loginUser.rejected.match(result)) {
        // Login failed, handle the error
        console.error("Login failed:", result);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Google Login Success and Error Handlers
  // const handleGoogleSuccess = (credentialResponse) => {
  //   console.log("Google Login Success:", credentialResponse);
  //   const { credential } = credentialResponse;
  //   const user = JSON.parse(atob(credential.split(".")[1])); // Decode user info from the JWT token
  //   console.log("Google User Info:", user);
  // };

  // const handleGoogleError = () => {
  //   console.log("Google Login Failed");
  // };

  // Facebook Login Response Handler
  // const handleFacebookResponse = (response) => {
  //   console.log("Facebook Login Response:", response);
  //   if (response.status !== "unknown") {
  //     console.log("Login successful:", response);
  //   } else {
  //     console.log("Login failed");
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    // <div
    //   className="w-full md:h-[85vh] h-screen bg-cover bg-center relative"
    //   style={{ backgroundImage: `url(${banner})` }}
    // >
    //   <div className="absolute inset-0 bg-black opacity-50"></div>

    //   <div className="absolute inset-0 flex justify-center w items-center">
    //     <div className="w-full p-10">
    //       <div className="flex flex-col-reverse md:flex-row mx-auto  w-fit">
    //         {" "}
    //         {/* Flexbox with reverse stacking on small screens */}
    //         {/* Left Sidebar */}
    //         <div className="md:flex flex-col justify-center bg-[#152B54] text-white px-10 md:w-fit sm:w-full p-6">
    //           <h2 className="text-3xl font-bold mb-8">Welcome Back</h2>
    //           <div className="flex flex-col gap-4 w-full">
    //             {/* Google OAuth */}
    //             <GoogleOAuthProvider clientId="96713337307-up5h6qpgnc1cimgsreq3q9j6dkgi5mu0.apps.googleusercontent.com">
    //               <GoogleLogin
    //                 onSuccess={handleGoogleSuccess}
    //                 onError={handleGoogleError}
    //                 className="w-full bg-white text-[#152B54] rounded-md p-2 px-4" // Added classes for consistent styling
    //               />
    //             </GoogleOAuthProvider>

    //             {/* Facebook Login */}
    //             <div className="w-full">
    //               <FacebookLogin
    //                 appId="1764441564095598" // Replace with your Facebook App ID
    //                 autoLoad={false}
    //                 fields="name,email,picture"
    //                 callback={handleFacebookResponse}
    //                 icon="fa-facebook"
    //                 cssClass="w-fit bg-white text-[#152B54] rounded-md py-2 px-4" // Same styling as Google button
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         {/* Right Login Form */}
    // <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px]">
    //   <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">
    //     Login
    //   </h1>
    //   {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="email"
    //         className="block text-sm font-medium text-gray-700"
    //       >
    //         Email
    //       </label>
    //       <input
    //         type="text"
    //         id="email"
    //         name="email"
    //         required
    //         onChange={handleChange}
    //         className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    //       />
    //     </div>

    //     <div className="mb-4 relative">
    //       <label
    //         htmlFor="password"
    //         className="block text-sm font-medium text-gray-700"
    //       >
    //         Password
    //       </label>
    //       <input
    //         type={passwordVisible ? "text" : "password"}
    //         id="password"
    //         name="password"
    //         required
    //         onChange={handleChange}
    //         className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    //       />
    //       {passwordVisible ? (
    //         <FaEye
    //           onClick={togglePasswordVisibility}
    //           className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer"
    //         />
    //       ) : (
    //         <FaRegEyeSlash
    //           onClick={togglePasswordVisibility}
    //           className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer"
    //         />
    //       )}
    //     </div>

    //     <div className="flex items-center justify-between mb-6">
    //       <div className="flex items-center">
    //         <input type="checkbox" id="remember" className="mr-2" />
    //         <label htmlFor="remember" className="text-sm text-gray-700">
    //           Remember me
    //         </label>
    //       </div>
    //       <a
    //         href="#"
    //         className="text-sm text-[#152B54] hover:underline"
    //       >
    //         Forgot password?
    //       </a>
    //     </div>

    //     <button
    //       type="submit"
    //       className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
    //     >
    //       {loading ? "Loading..." : "Login"}
    //     </button>

    //     <div className="mt-4 text-center">
    //       <p className="text-sm text-gray-700">
    //         Don't have an account?{" "}
    //         <a
    //           href="/signup"
    //           className="text-[#152B54] hover:underline"
    //         >
    //           Register here
    //         </a>
    //       </p>
    //     </div>
    //   </form>
    // </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <SolarSystem /> */}
    // </div>
    <div
      className="w-full md:h-[85vh] h-[120vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid-cols-1 md:flex m-auto p-4 ">
          <div className="bg-[#152B54] w-fit md:w-[30%]  ml-auto">
            <div className="relative">
              <img
                src={logo}
                alt="Traincape Technology"
                className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] absolute top-0"
              />
            </div>
            <Lottie
              animationData={signup}
              loop={true}
              className=" w-full h-full my-auto"
            />
          </div>
          {/* Right Signup Form */}
          <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">
            {/* <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px]"> */}
            <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">
              Login
            </h1>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {passwordVisible ? (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer"
                  />
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <p onClick={()=>{navigate("/forgot-password")}} className="hover:cursor-pointer text-sm text-[#152B54] hover:underline">
                  Forgot password?
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
              >
                {loading ? "Loading..." : "Login"}
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-[#152B54] hover:underline">
                    Register here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
