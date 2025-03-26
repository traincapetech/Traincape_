// import React, { useEffect, useState } from "react";
// import signuppage from "../css/Signup.module.css";
// import { FaCircleUser } from "react-icons/fa6";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { signupUser } from "../slices/userSlice";

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {user,loading,error} = useSelector((state)=> state.user)
//   const [payload, setPayload] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setPayload({ ...payload, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(signupUser({
//       username: payload.username,
//       email: payload.email,
//       password: payload.password
//     })).then(()=>{
//       navigate('/login')
//     })
//     setPayload({ username: "", email: "", password: "" });
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className={signuppage.wrapperSignup}>
//       <div className={signuppage.formBoxLogin}>
//         <form onSubmit={handleSubmit} className={signuppage.singupForm}>
//           <h1>Signup</h1>
//           <div className={signuppage.inputBox}>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               required
//               onChange={handleChange}
//             />
//             <FaCircleUser className={signuppage.icon} />
//           </div>
//           <div className={signuppage.inputBox}>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               required
//               onChange={handleChange}
//             />
//             <MdEmail className={signuppage.icon} />
//           </div>
//           <div className={signuppage.inputBox}>
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               required
//               onChange={handleChange}
//             />
//             <FaRegEyeSlash className={signuppage.icon} />
//           </div>
//           <div className={signuppage.RememberPassword}>
//             <lable>
//               <input type="checkbox" required />
//               <span style={{ position: "relative", top: "-6px" }}>
//                 I agree to terms & conditions{" "}
//               </span>
//             </lable>
//           </div>
//           <button type="submit">Register</button>

//           <div className={signuppage.registerLink}>
//             <p>
//               Already have an account? <a href="/login">Login here</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useEffect, useState } from "react";
// // import signuppage from "../css/Signup.module.css";
// import { FaRegEyeSlash, FaEye } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { signupUser } from "../slices/userSlice";
// import banner from "../../src/assets/loginbanner.jpeg";
// import Lottie from "lottie-react";
// import signup from "../assets/signup.json"

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [payload, setPayload] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [signupError, setSignupError] = useState(null);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleChange = (e) => {
//     setPayload({ ...payload, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSignupError(null);

//     try {
//       const result = await dispatch(
//         signupUser({
//           username: payload.username,
//           email: payload.email,
//           password: payload.password,
//         })
//       );

//       if (result.type === "user/signupUser/fulfilled") {
//         navigate("/login");
//       } else {
//         setSignupError(result.payload?.msg || "Signup failed.");
//       }
//     } catch (error) {
//       setSignupError("An error occurred during signup.");
//     }
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="w-full md:h-[85vh] h-[125vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <div className="absolute inset-0 flex justify-center items-center">
        
//         <div className="grid-cols-1 md:flex m-auto p-4">
//           <div className="bg-[#152B54] w-fit md:w-[30%]  ml-auto">
//           <Lottie  animationData={signup} loop={true} className=' w-full h-full my-auto'/>
//           </div>
//           {/* Right Signup Form */}
//           <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">  
//             <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">Sign Up</h1>
//             {signupError && <p className="text-red-500 text-sm mb-4">{signupError}</p>}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div className="mb-4 relative">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//                 {passwordVisible ? (
//                   <FaEye onClick={togglePasswordVisibility} className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer" />
//                 ) : (
//                   <FaRegEyeSlash onClick={togglePasswordVisibility} className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer" />
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950- transition duration-200"
//               >
//                 Register
//               </button>

//               <div className="mt-4 text-center">
//                 <p className="text-sm text-gray-700">
//                   Already have an account?{" "}
//                   <a href="/login" className="text-[#152B54] hover:underline">Login here</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

//Updated by Ritik
import React, { useEffect, useState } from "react";
import { FaRegEyeSlash, FaEye } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../slices/userSlice";
import banner from "../../src/assets/loginbanner.jpeg";
import Lottie from "lottie-react";
import signup from "../assets/signup.json";import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    pinCode: "",
    country: "",
    linkedIn: "",
    interest: "" 
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signupError, setSignupError] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the payload data to the console for debugging purposes
    // console.log(payload);

    setSignupError(null);

    try {
      const result = await dispatch(
        signupUser({
          username: payload.username,
          email: payload.email,
          password: payload.password,
          phoneNumber: payload.phoneNumber,
          address: payload.address,
          pinCode: payload.pinCode,
          country: payload.country,
          linkedIn: payload.linkedIn,
          interest: payload.interest
        })
      );

      if (signupUser.fulfilled.match(result)) {
        // Show success message and navigate to login
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else if (signupUser.rejected.match(result)) {
        setSignupError(result.payload?.msg || "Signup failed.");
      }
    } catch (error) {
      setSignupError("An error occurred during signup.");
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-[205vh] md:h-[150vh] bg-cover bg-center relative" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid-cols-1 md:flex m-auto p-4">
          <div className="bg-[#152B54] w-fit md:w-[30%] ml-auto">
          <div className="relative">
            <img
              src={logo}
              alt="Traincape Technology"
              className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] absolute top-0"
            />
          </div>
            <Lottie animationData={signup} loop={true} className="w-full h-full my-auto" />
          </div>
          {/* Right Signup Form */}
          <div className="bg-white bg-opacity-90 p-8 shadow-lg w-full sm:w-[400px] mr-auto">
            <h1 className="text-3xl font-semibold text-center text-[#152B54] mb-6">Sign Up</h1>
            {signupError && <p className="text-red-500 text-sm mb-4">{signupError}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {passwordVisible ? (
                  <FaEye onClick={togglePasswordVisibility} className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer" />
                ) : (
                  <FaRegEyeSlash onClick={togglePasswordVisibility} className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-600 cursor-pointer" />
                )}
              </div>

              {/* New Fields */}
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">Pin Code</label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700">LinkedIn <span className="text-slate-500 text-[10px] ">(optional)</span></label>
                <input
                  type="text"
                  id="linkedIn"
                  name="linkedIn"
                  // required 
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Interest Dropdown */}
              <div className="mb-4">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Interest</label>
                <select
                  id="interest"
                  name="interest"
                  onChange={handleChange}
                  value={payload.interest}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Interest</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Project Management Professional">Project Management Professional</option>
                  <option value="PECB">PECB</option>
                  <option value="Microsoft">Microsoft</option>
                  <option value="CyberSecurity">CyberSecurity</option>
                  <option value="Non-IT">Non-IT</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-[#152B54] text-white rounded-lg hover:bg-sky-950- transition duration-200"
              >
                Register
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">
                  Already have an account?{" "}
                  <a href="/login" className="text-[#152B54] hover:underline">Login here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


