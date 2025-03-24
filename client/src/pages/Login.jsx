import React, { useEffect, useState } from "react";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/userSlice";
import banner from "../assets/loginbanner.jpeg";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import Lottie from "lottie-react";
import signup from "../assets/signup.json";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    // Clear error when user types
    if (errorMessage) {
      setErrorMessage("");
    }
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const validateForm = () => {
    if (!payload.email && !payload.password) {
      setErrorMessage("Email and password are required");
      return false;
    }
    
    if (!payload.email) {
      setErrorMessage("Email is required");
      return false;
    }
    
    if (!payload.password) {
      setErrorMessage("Password is required");
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrorMessage("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const result = await dispatch(
        loginUser({ 
          email: payload.email, 
          password: payload.password,
          rememberMe: rememberMe
        })
      );

      if (loginUser.fulfilled.match(result)) {
        // Login successful, navigate to home page
        navigate("/");
      } else {
        // Handle error from the rejected action
        const errorPayload = result.payload || result.error?.message;
        setErrorMessage(
          typeof errorPayload === 'string' 
            ? errorPayload 
            : "Invalid email or password. Please try again."
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If user is already logged in, redirect to home
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="bg-[#152B54] w-full md:w-1/2 p-4 relative mb-6 md:mb-0">
          <div className="relative">
            <img
              src={logo}
              alt="Traincape Technology"
              className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] absolute top-0 left-0 z-10"
            />
          </div>
          <Lottie
            animationData={signup}
            loop={true}
            className="w-full h-[300px] md:h-[400px]"
          />
        </div>
        
        <div className="bg-white bg-opacity-90 p-6 md:p-8 shadow-lg w-full md:w-1/2 max-w-[450px]">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#152B54] mb-6">
            Login
          </h1>
          
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={payload.email}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#152B54]"
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
                value={payload.password}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#152B54]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? <FaEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  className="mr-2" 
                />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-[#152B54] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200 disabled:opacity-70"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-700">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-[#152B54] hover:underline"
                >
                  Register here
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;