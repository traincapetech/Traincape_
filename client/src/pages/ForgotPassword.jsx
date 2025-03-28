import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import { FaRegEyeSlash, FaEye,FaArrowLeft } from "react-icons/fa6";

// Assets
import banner from "../assets/loginbanner.jpeg";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import signup from "../assets/signup.json";

// Redux actions
import { reset_password, sendOTPToEmail, verifyOtp } from "../slices/userSlice";

// Components
import Loading from "./loadingPage/Loading";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State management
  const [currentStep, setCurrentStep] = useState("email"); // email, otp, resetPassword
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [payload, setPayload] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const inputRefs = useRef([]);

  // Handle OTP input field focus and navigation
  const handleOtpInput = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      e.target.value = "";
      return;
    }

    if (value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const digits = paste.replace(/\D/g, "").slice(0, 6);

    digits.split("").forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
        if (index < 5 && digit) {
          inputRefs.current[index + 1].focus();
        }
      }
    });
  };

  // Reset form when going back to email step
  const resetForm = () => {
    setPayload({
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: "",
    });
    setError("");
    setSuccessMessage("");
    setCurrentStep("email");

    // Clear OTP input fields if they exist
    if (inputRefs.current.length > 0) {
      inputRefs.current.forEach((input) => {
        if (input) input.value = "";
      });
    }
  };

  // Form handlers
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      if (!payload.email.trim()) {
        setError("Email is required");
        return;
      }

      setLoading(true);
      const result = await dispatch(sendOTPToEmail({ email: payload.email }));

      if (result.payload.success) {
        setSuccessMessage("OTP sent successfully");
        setCurrentStep("otp");
      } else {
        setError(result.payload.msg || "Failed to send OTP");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Send OTP error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      // Collect OTP from all input fields
      const otpArray = inputRefs.current.map((input) => input.value);
      const otp = otpArray.join("");

      if (otp.length !== 6 || !/^\d+$/.test(otp)) {
        setError("Please enter a valid 6-digit OTP");
        return;
      }

      setLoading(true);
      const result = await dispatch(verifyOtp({ otp, email: payload.email }));

      if (result.payload.success) {
        setPayload((prev) => ({ ...prev, otp }));
        setSuccessMessage("OTP verified successfully");
        setCurrentStep("resetPassword");
      } else {
        setError(result.payload.message || "Invalid OTP");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Verify OTP error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const { newPassword, confirmPassword, email, otp } = payload;

      // Validate passwords
      if (!newPassword || !confirmPassword) {
        setError("Both password fields are required");
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (newPassword.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }

      setLoading(true);
      const result = await dispatch(
        reset_password({
          otp,
          email,
          newPassword,
        })
      );

      if (result.payload.success) {
        toast.success("Password changed successfully");
        navigate("/login");
      } else {
        setError(result.payload.msg || "Failed to reset password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Reset password error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Render form based on current step
  const renderFormStep = () => {
    switch (currentStep) {
      case "email":
        return (
          <div>
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
                onChange={(e) =>
                  setPayload({ ...payload, email: e.target.value })
                }
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleEmailSubmit}
              disabled={loading}
              className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Reset OTP"}
            </button>
          </div>
        );

      case "otp":
        return (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-center text-[#152B54] mb-2">
              Enter OTP
            </h2>
            <p className="mb-3 text-sm text-gray-600">
              Enter the 6-digit code sent to {payload.email}
            </p>
            <div className="flex justify-between mb-3" onPaste={handleOtpPaste}>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-3xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ref={(el) => (inputRefs.current[index] = el)}
                    onInput={(e) => handleOtpInput(e, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    required
                  />
                ))}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-[#152B54] rounded-lg hover:bg-gray-100 transition duration-200"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleOtpSubmit}
                disabled={loading}
                className="px-6 py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </div>
        );

      case "resetPassword":
        return (
          <div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={payload.newPassword}
                  onChange={(e) =>
                    setPayload({ ...payload, newPassword: e.target.value })
                  }
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={payload.confirmPassword}
                onChange={(e) =>
                  setPayload({ ...payload, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-[#152B54] rounded-lg hover:bg-gray-100 transition duration-200"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleResetPassword}
                disabled={loading}
                className="px-6 py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return loading?(
  <Loading />
):
  (
    <div
      className="w-full md:h-[85vh] h-[120vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Back Arrow Button */}
      <button
        onClick={() => {
          navigate('/login');
        }}
        className="absolute top-2 left-2 md:top-4 md:left-4 z-20 text-white bg-[#152B54] 
                               p-2 md:p-3 rounded-full hover:bg-sky-950 transition duration-200
                               flex items-center justify-center"
        aria-label="Go back to home"
      >
        <FaArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* {loading && <Loading />} */}

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid-cols-1 md:flex m-auto p-4">
          {/* Left side - animation */}
          <div className="bg-[#152B54] w-fit md:w-[30%] ml-auto relative">
            <div className="absolute top-0 left-0">
              <img
                src={logo}
                alt="Traincape Technology"
                className="w-[90px] h-[90px] md:w-[130px] md:h-[130px]"
              />
            </div>
            <Lottie
              animationData={signup}
              loop={true}
              className="w-full h-full my-auto"
            />
          </div>

          {/* Right side - form */}
          <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">
            <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">
              {currentStep === "resetPassword"
                ? "Reset Password"
                : "Forgot Password"}
            </h1>

            <form onSubmit={(e) => e.preventDefault()}>
              {renderFormStep()}

              {/* Error and success messages */}
              {error && (
                <p className="text-center mt-4 text-red-500 text-sm">{error}</p>
              )}
              {successMessage && (
                <p className="text-center mt-4 text-green-500 text-sm">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
