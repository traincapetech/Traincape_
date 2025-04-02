import React, { useState } from "react";
import banner from "../../assets/loginbanner.jpeg";
import logo from "../../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import Lottie from "lottie-react";
import signup from "../../assets/signup.json";
import { useNavigate } from "react-router-dom";
import { reset_password, sendOTPToEmail, verifyOtp } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loadingPage/Loading";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [error, setError] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    otp: ["", "", "", "", "", ""],
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1)
      inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0)
      inputRefs.current[index - 1].focus();
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };
  const [showOtp, setShowTtp] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
      otp: ["", "", "", "", "", ""],
      newPassword: "",
      confirmPassword: "",
    });
    setShowTtp(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!payload.email.trim()) {
        setError("Email is required");
        setLoading(false);
        return;
      }

      const result = await dispatch(sendOTPToEmail({ email: payload.email }));
      if (result.payload.success) {
        setError(false);
        setShowTtp(true);
        setLoading(false);
        setSuccessMessage("OTP sent successfully");
        setShowEmail(false);
      } else {
        console.log(result)
        setError(result.payload.msg);
        // setError(result.error.message);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Please try again later");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    const otp = otpArray.join("");
    setPayload((prevPayload) => ({ ...prevPayload, otp: otp }));
    if (otp.trim() === "") {
      setError("Please enter the OTP");
      return;
    }
    try {
      setLoading(true);
      console.log(payload.otp);
      const result = await dispatch(verifyOtp({ otp, email: payload.email }));
      console.log("result", result);
      if (result.payload.success) {
        setError(false);
        setShowNewPassword(true);
        setLoading(false);
        setSuccessMessage("Enter the New Password");
      } else {
        setSuccessMessage(false);
        setError(result.payload.message);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Please try again later");
      console.error(error);
    }
  };

  const handleResetPassword = async (e) => {
    setSuccessMessage(false);
    // Add your reset password logic here
    e.preventDefault();
    if (payload.newPassword !== payload.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (payload.newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    try {
      console.log("otp at the time of set new password", payload.otp);
      const result = await dispatch(
        reset_password({
          otp: payload.otp,
          email: payload.email,
          newPassword: payload.newPassword,
        })
      );
      console.log("result", result);
      if (result.payload.success) {
        setError(false);
        navigate("/login");
        setLoading(false);
        alert("Password changed Successfully");
      } else {
        setError(result.payload.msg);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError("Please try again later");
      console.error(error);
    }
  };

  return (
    <div
      className="w-full md:h-[85vh] h-[120vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {loading ? (
        <Loading />
      ) : (
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
            {/* left forgot page */}
            {!showNewPassword ? (
              <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">
                {/* <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px]"> */}
                <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">
                  Forgot Password
                </h1>
                <form>
                  {showEmail && (
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
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
                      >
                        {loading ? "Loading..." : "Send Reset OTP"}
                      </button>
                    </div>
                  )}
                  {/* OTP */}
                  {showOtp && (
                    <div className="mt-4">
                      <h1 className="text-xl font-semibold text-center text-[#152B54] mb-2">
                        Reset Password OTP
                      </h1>
                      <label
                        htmlFor="otp"
                        className="my-3 block text-sm font-medium text-gray-700"
                      >
                        Ener the OTP sent to your email
                      </label>
                      <div
                        onPaste={handlePaste}
                        className="flex justify-between mb-3"
                      >
                        {Array(6)
                          .fill(0)
                          .map((_, index) => (
                            <input
                              type="text"
                              maxLength="1"
                              key={index}
                              required
                              className="w-12 h-12 text-3xl text-center border-2 border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-500"
                              ref={(e) => (inputRefs.current[index] = e)}
                              onInput={(e) => handleInput(e, index)}
                              onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                          ))}
                      </div>
                      <button
                        type="button"
                        onClick={handleOtpSubmit}
                        className="w-full my-3 py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200"
                      >
                        {loading ? "Loading..." : "Reset Password"}
                      </button>
                    </div>
                  )}
                  {error && (
                    <p className="text-center mt-2 text-red-500 text-sm mb-4">
                      {error}
                    </p>
                  )}
                  {successMessage && (
                    <p className="text-center mt-2 text-green-500 text-sm mb-4">
                      {successMessage}
                    </p>
                  )}
                </form>
              </div>
            ) : (
              <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">
                {/* <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px]"> */}
                <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">
                  Reset Password
                </h1>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="newPassword"
                      name="newPassword"
                      required
                      value={payload.newPassword}
                      onChange={(e) =>
                        setPayload({ ...payload, newPassword: e.target.value })
                      }
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
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
                      required
                      value={payload.confirmPassword}
                      onChange={(e) =>
                        setPayload({
                          ...payload,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className={`w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950 transition duration-200 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Loading..." : "Reset Password"}
                  </button>
                  {error && (
                    <p className="text-center mt-2 text-red-500 text-sm mb-4">
                      {error}
                    </p>
                  )}
                  {successMessage && (
                    <p className="text-center mt-2 text-green-500 text-sm mb-4">
                      {successMessage}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
