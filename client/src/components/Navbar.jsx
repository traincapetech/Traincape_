<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCopy, FaCheck, FaChevronDown, FaBriefcase, FaGoogle, FaProjectDiagram, FaLaptopCode, FaApple, FaCalculator, FaMicrosoft, FaDraftingCompass, FaPaintBrush, FaGamepad, FaNetworkWired } from "react-icons/fa";
=======
//Original code
// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../slices/userSlice";
// import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const token = localStorage.getItem("token");

//   const accountNumber = "732205000345";
//   const bankName = "ICICI Bank";
//   const branchName = "Palam Colony";
//   const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
//   const ifscCode = "ICIC0007322";
//   const Email = "sales@traincapetech.info";

//   const alertMessage = `Account Details :\nAccount Number: ${accountNumber}\nBank Name: ${bankName}\nBranch Name: ${branchName}\nAccount Holder Name: ${accountHolderName}\nIFSC Code: ${ifscCode}\nEMAIL : ${Email}\n`;

//   const handleLogin = () => {
//     navigate("/login");
//     setMenuOpen(false);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     window.location.href = "/login";
//     navigate("/login");
//   };

//   const handlePayNow = () => {
//     // Toggle dropdown visibility when Pay Now is clicked
//     setShowDropdown(!showDropdown);
//   };

//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-teal-300 border-b-2 w-fit border-red-500"
//       : "hover:text-teal-400";

//   return (
//     <nav className="bg-gray-800 lg:h-24 h-28 md:px-0 lg:px-10 px-2 shadow-lg lg:flex">
//       <div className=" mx-auto flex items-center lg:w-[15%] justify-between">
//         {/* Logo */}
//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <img
//             src={logo}
//             alt="Traincape Technology"
//             className="w-[130px] h-[130px]"
//           />
//         </div>

//         {/* md */}

//         <div className="hidden md:flex lg:hidden justify-between w-full items-center text-white">
//           {/* Navigation Links in the center */}
//           <div className="flex md:space-x-3 space-x-6 mx-auto">
//             <Link to="/" className={`${isActive("/")} text-xl`}>
//               Home
//             </Link>
//             <Link to="/about-us" className={`${isActive("/about-us")} text-xl`}>
//               About
//             </Link>
//             <Link
//               to="/our-services"
//               className={`${isActive("/our-services")} text-xl`}
//             >
//               Services
//             </Link>
//             <Link
//               to="/review-page"
//               className={`${isActive("/review-page")} text-xl`}
//             >
//               Reviews
//             </Link>
//             <Link
//               to="/Courses-details"
//               className={`${isActive("/Courses-details")} text-xl`}
//             >
//               Courses
//             </Link>

//             <Link
//               to="/contact-us"
//               className={`${isActive("/contact-us")} text-xl`}
//             >
//               Contact
//             </Link>
//             <Link to="/training" className={`$isActive("/training") text-xl`}>
//               Training
//             </Link>
//           </div>

//           {/* Pay Now Button and Login/Logout Buttons on the Right */}
//           <div className="flex items-center space-x-3 px-2">
//             {/* Pay Now Button */}
//             <div className="relative">
//               <button
//                 className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
//                 onClick={handlePayNow}
//               >
//                 Pay Now
//               </button>

//               {/* Payment Dropdown */}
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 bg-white z-20 text-black shadow-lg rounded-md w-48">
//                   <Link
//                     to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
//                     className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white "
//                   >
//                     PayPal
//                   </Link>
//                   <Link
//                     to="https://buy.stripe.com/8wM2az10TaYQgww29d"
//                     className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                   >
//                     Credit / Debit Card
//                   </Link>
//                   <button
//                     onClick={() => alert(alertMessage)}
//                     className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
//                   >
//                     Bank Transfer
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Login / Logout Button */}
//             {token ? (
//               <button
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             ) : (
//               <button
//                 className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
//                 onClick={handleLogin}
//               >
//                 Login
//               </button>
//             )}
//           </div>

//         </div>

//         {/* Hamburger Icon for Small Screens */}
//         <div className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? (
//             <ImCross className="text-white text-3xl" />
//           ) : (
//             <GiHamburgerMenu className="text-white text-3xl" />
//           )}
//         </div>
//       </div>

//       {/* Sidebar for Small Screens */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } z-50 p-4`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end">
//           <ImCross
//             className="text-white text-3xl cursor-pointer"
//             onClick={() => setMenuOpen(false)}
//           />
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex flex-col space-y-4">
//           <Link
//             to="/"
//             className={`${isActive("/")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about-us"
//             className={`${isActive("/about-us")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/our-services"
//             className={`${isActive("/our-services")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Services
//           </Link>
//           <Link
//             to="/review-page"
//             className={`${isActive("/review-page")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Reviews
//           </Link>
//           <Link
//             to="/Courses-details"
//             className={`${isActive("/Courses-details")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Courses
//           </Link>
//           <Link
//             to="/contact-us"
//             className={`${isActive("/contact-us")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact
//           </Link>

//           <Link
//             to="/training"
//             className={`${isActive("/training")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Training
//           </Link>

//           {/* Pay Now Button */}
//           <div className="relative">
//             <button
//               className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
//               onClick={handlePayNow}
//             >
//               Pay Now
//             </button>

//             {/* Payment Dropdown */}
//             {showDropdown && (
//               <div className="mt-2 bg-white text-black shadow-lg   w-full">
//                 <Link
//                   to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   PayPal
//                 </Link>
//                 <Link
//                   to="https://buy.stripe.com/8wM2az10TaYQgww29d"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   Credit / Debit Card
//                 </Link>
//                 <button
//                   onClick={() => alert(alertMessage)}
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
//                 >
//                   Bank Transfer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Login / Logout Button */}
//           {token ? (
//             <button
//               className="bg-red-600 hover:bg-red-700 w-fit rounded-md text-white  px-4 py-2 "
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               className="bg-blue-600 hover:bg-blue-700 w-fit rounded-md text-white px-7 py-2 "
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Main Navbar Links (Visible on Medium and Large Screens) */}
//       <div className="hidden lg:flex justify-between w-full items-center text-white">
//         {/* Navigation Links in the center */}
//         <div className="flex space-x-6 mx-auto">
//           <Link to="/" className={`${isActive("/")} text-xl`}>
//             Home
//           </Link>
//           <Link to="/about-us" className={`${isActive("/about-us")} text-xl`}>
//             About
//           </Link>
//           <Link
//             to="/our-services"
//             className={`${isActive("/our-services")} text-xl`}
//           >
//             Services
//           </Link>
//           <Link
//             to="/review-page"
//             className={`${isActive("/review-page")} text-xl`}
//           >
//             Reviews
//           </Link>
//           <Link
//             to="/Courses-details"
//             className={`${isActive("/Courses-details")} text-xl`}
//           >
//             Courses
//           </Link>
//           <Link
//             to="/contact-us"
//             className={`${isActive("/contact-us")} text-xl`}
//           >
//             Contact
//           </Link>
//           <Link
//             to="/training"
//             className={`${isActive("/training")} text-xl`}
//           >
//             Training
//           </Link>
//         </div>

//         {/* Pay Now Button and Login/Logout Buttons on the Right */}
//         <div className="flex items-center space-x-6">
//           {/* Pay Now Button */}
//           <div className="relative">
//             <button
//               className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
//               onClick={handlePayNow}
//             >
//               Pay Now
//             </button>

//             {/* Payment Dropdown */}
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 bg-white z-20 text-black shadow-lg  w-48">
//                 <Link
//                   to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   PayPal
//                 </Link>
//                 <Link
//                   to="https://buy.stripe.com/8wM2az10TaYQgww29d"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   Credit / Debit Card
//                 </Link>
//                 <button
//                   onClick={() => alert(alertMessage)}
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
//                 >
//                   Bank Transfer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Login / Logout Button */}
//           {token ? (
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Overlay for Sidebar (when it's open) */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// //Udated code by saurav
// import React, { useState } from "react";
// import nav from "../css/Navbar.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../slices/userSlice";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     window.location.href = "/login";
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = () => {
//     if (window.innerWidth <= 768) {
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className={nav.container}>
//       <div className={nav.navbar}>
//         <div className={nav.logo} onClick={() => navigate("/")}>
//           <img src={logo} alt="Traincape Technology" />
//         </div>
//         <div className={nav.hamburgerSymbol} onClick={toggleMenu}>
//           {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
//         </div>
//         <div className={`${nav.navlinks}`}>
//           <Link className={nav.links} to="/ebook-page" onClick={handleLinkClick}>E-Book</Link>
//           <Link className={nav.links} to="/about-us" onClick={handleLinkClick}>About</Link>
//           <Link className={nav.links} to="/our-services" onClick={handleLinkClick}>Services</Link>
//           <Link className={nav.links} to="/review-page" onClick={handleLinkClick}>Reviews</Link>
//           <Link className={nav.links} to="/Courses-details" onClick={handleLinkClick}>Courses / Sources</Link>
//           <Link className={nav.links} to="/contact-us" onClick={handleLinkClick}>Contact</Link>
//         </div>

//         <div className={`${nav.hamburgerSection} ${isMenuOpen ? nav.showHamburgerSection : ""}`}>
//           <div className={nav.hamburgerOverlay} onClick={toggleMenu}></div>
//           <div className={`${nav.hamburgerMenu} ${isMenuOpen ? nav.showHamburgerMenu : ""}`}>
//             <div style={{ display: "flex", justifyContent: "center", padding: "10px 10px 0 0", marginBottom: "20px" }}>
//               <ImCross onClick={toggleMenu} style={{ color: "black", width: "20px", height: "20px", alignItems: "right", mb: "10px" }} />
//             </div>
//             <div className={nav.hamburgerLinksActive}>
//               <Link className={nav.links} to="/ebook-page" onClick={handleLinkClick}>E-Book</Link>
//               <Link className={nav.links} to="/about-us" onClick={toggleMenu}>About</Link>
//               <Link className={nav.links} to="/our-services" onClick={toggleMenu}>Services</Link>
//               <Link className={nav.links} to="/contact-us" onClick={toggleMenu}>Contact</Link>
//               <Link className={nav.links} to="/Courses-details" onClick={toggleMenu}>Courses</Link>
//               <Link className={nav.links} to="/review-page" onClick={handleLinkClick}>Reviews</Link>
//               <Link to="/Career-details" className={nav.links} onClick={toggleMenu}>Career</Link>
//               <Link to="/Our-Blogs" className={nav.links} onClick={toggleMenu}>Blogs</Link>
//               <Link to="/frequently-asked-questions" className={nav.links} onClick={toggleMenu}>FAQ</Link>
//             </div>
//           </div>
//         </div>

//         <div className={nav.buttons}>
//           {token && <button className={nav.btn}>Pay Now</button>}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Update code by Ritik Singh
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
// import DashboardHeader from "../pages/DashboardHeader";

// const Navbar = () => {
//   // const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const token = localStorage.getItem("token");

//   const dropdownRef = useRef(null);

//   const accountNumber = "732205000345";
//   const bankName = "ICICI Bank";
//   const branchName = "Palam Colony";
//   const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
//   const ifscCode = "ICIC0007322";
//   const Email = "sales@traincapetech.info";

//   const alertMessage = `Account Details :\nAccount Number: ${accountNumber}\nBank Name: ${bankName}\nBranch Name: ${branchName}\nAccount Holder Name: ${accountHolderName}\nIFSC Code: ${ifscCode}\nEMAIL : ${Email}\n`;

//   const handleLogin = () => {
//     navigate("/login");
//     setMenuOpen(false);
//   };

//   // const handleLogout = () => {
//   //   dispatch(logoutUser());
//   //   window.location.href = "/login";
//   //   navigate("/login");
//   // };

//   const handlePayNow = () => {
//     // Toggle dropdown visibility when Pay Now is clicked
//     setShowDropdown(!showDropdown);
//   };

//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-teal-300 border-b-2 w-fit border-red-500"
//       : "hover:text-teal-400";

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-gray-800 lg:h-24 h-28 md:px-0 lg:px-10 pr-5 shadow-lg lg:flex">
//       <div className=" mx-auto flex items-center lg:w-[15%] justify-between">
//         {/* Logo */}
//         <div
//           className="flex items-center cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <img
//             src={logo}
//             alt="Traincape Technology"
//             className="w-[130px] h-[130px]"
//           />
//         </div>

//         {/* md */}

//         <div className="hidden md:flex lg:hidden justify-between w-full items-center text-white">
//           {/* Navigation Links in the center */}
//           <div className="flex md:space-x-3 space-x-6 mx-auto">
//             <Link to="/" className={`${isActive("/")} text-xl`}>
//               Home
//             </Link>
//             <Link to="/about-us" className={`${isActive("/about-us")} text-xl`}>
//               About
//             </Link>
//             <Link
//               to="/our-services"
//               className={`${isActive("/our-services")} text-xl`}
//             >
//               Services
//             </Link>
//             <Link
//               to="/review-page"
//               className={`${isActive("/review-page")} text-xl`}
//             >
//               Reviews
//             </Link>
//             <Link
//               to="/Courses-details"
//               className={`${isActive("/Courses-details")} text-xl`}
//             >
//               Courses
//             </Link>
//             <Link
//               to="/contact-us"
//               className={`${isActive("/contact-us")} text-xl`}
//             >
//               Contact
//             </Link>
//             <Link to="/training" className={`${isActive("/training")} text-xl`}>
//               Training
//             </Link>
//           </div>

//           {/* Pay Now Button and Login/Logout Buttons on the Right */}
//           <div className="flex items-center space-x-3 px-2">
//             {/* Pay Now Button */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
//                 onClick={handlePayNow}
//               >
//                 Pay Now
//               </button>

//               {/* Payment Dropdown */}
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 bg-white z-20 text-black shadow-lg rounded-md w-48">
//                   <Link
//                     to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
//                     className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white "
//                   >
//                     PayPal
//                   </Link>
//                   <Link
//                     to="https://buy.stripe.com/8wM2az10TaYQgww29d"
//                     className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                   >
//                     Credit / Debit Card
//                   </Link>
//                   <button
//                     onClick={() => alert(alertMessage)}
//                     className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
//                   >
//                     Bank Transfer
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Login / Logout Button */}
//             {token ? (
//               <div
//                 className=""
//                 // onClick={handleLogout}
//               >
//                 <DashboardHeader />
//               </div>
//             ) : (
//               <button
//                 className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
//                 onClick={handleLogin}
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Hamburger Icon for Small Screens */}
//         <div className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? (
//             <ImCross className="text-white text-3xl" />
//           ) : (
//             <GiHamburgerMenu className="text-white text-3xl" />
//           )}
//         </div>
//       </div>

//       {/* Sidebar for Small Screens */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } z-50 p-4`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end">
//           <ImCross
//             className="text-white text-3xl cursor-pointer"
//             onClick={() => setMenuOpen(false)}
//           />
//         </div>

//         {/* Sidebar Links */}
//         <div className="flex flex-col space-y-4">
//           <Link
//             to="/"
//             className={`${isActive("/")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about-us"
//             className={`${isActive("/about-us")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/our-services"
//             className={`${isActive("/our-services")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Services
//           </Link>
//           <Link
//             to="/review-page"
//             className={`${isActive("/review-page")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Reviews
//           </Link>
//           <Link
//             to="/Courses-details"
//             className={`${isActive("/Courses-details")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Courses
//           </Link>
//           <Link
//             to="/contact-us"
//             className={`${isActive("/contact-us")} text-lg`}
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact
//           </Link>
//           <Link to="/training" className={`${isActive("/training")} text-xl`}>
//             Training
//           </Link>

//           {/* Pay Now Button */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
//               onClick={handlePayNow}
//             >
//               Pay Now
//             </button>

//             {/* Payment Dropdown */}
//             {showDropdown && (
//               <div className="mt-2 bg-white text-black shadow-lg   w-full">
//                 <Link
//                   to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   PayPal
//                 </Link>
//                 <Link
//                   to="https://buy.stripe.com/8wM2az10TaYQgww29d"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   Credit / Debit Card
//                 </Link>
//                 <button
//                   onClick={() => alert(alertMessage)}
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
//                 >
//                   Bank Transfer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Login / Logout Button */}
//           {token ? (
//             <div
//               className="w-fit "
//               // onClick={handleLogout}
//             >
//               <DashboardHeader />
//             </div>
//           ) : (
//             <button
//               className="bg-blue-600 hover:bg-blue-700 w-fit rounded-md text-white px-7 py-2 "
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Main Navbar Links (Visible on Medium and Large Screens) */}
//       <div className="hidden lg:flex justify-between w-full items-center text-white">
//         {/* Navigation Links in the center */}
//         <div className="flex space-x-6 mx-auto">
//           <Link to="/" className={`${isActive("/")} text-xl`}>
//             Home
//           </Link>
//           <Link to="/about-us" className={`${isActive("/about-us")} text-xl`}>
//             About
//           </Link>
//           <Link
//             to="/our-services"
//             className={`${isActive("/our-services")} text-xl`}
//           >
//             Services
//           </Link>
//           <Link
//             to="/review-page"
//             className={`${isActive("/review-page")} text-xl`}
//           >
//             Reviews
//           </Link>
//           <Link
//             to="/Courses-details"
//             className={`${isActive("/Courses-details")} text-xl`}
//           >
//             Courses
//           </Link>
//           <Link
//             to="/contact-us"
//             className={`${isActive("/contact-us")} text-xl`}
//           >
//             Contact
//           </Link>
//           <Link to="/training" className={`${isActive("/training")} text-xl`}>
//             Training
//           </Link>
//         </div>

//         {/* Pay Now Button and Login/Logout Buttons on the Right */}
//         <div className="flex items-center space-x-6">
//           {/* Pay Now Button */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
//               onClick={handlePayNow}
//             >
//               Pay Now
//             </button>

//             {/* Payment Dropdown */}
//             {showDropdown && (
//               <div className="absolute right-0 mt-2 bg-white z-20 text-black shadow-lg  w-48">
//                 <Link
//                   to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   PayPal
//                 </Link>
//                 <Link
//                   to="https://buy.stripe.com/8wM2az10TaYQgww29d"
//                   className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
//                 >
//                   Credit / Debit Card
//                 </Link>
//                 <button
//                   onClick={() => alert(alertMessage)}
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
//                 >
//                   Bank Transfer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Login / Logout Button */}
//           {token ? (
//             <div
//               className=""
//               // onClick={handleLogout}
//             >
//               <DashboardHeader />
//             </div>
//           ) : (
//             <button
//               className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Overlay for Sidebar (when it's open) */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


//Updated code by Sumit Jain
import React, { useState, useEffect, useRef, createRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCopy, FaCheck } from "react-icons/fa";
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import DashboardHeader from "../pages/DashboardHeader";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { 
  SiIbm, 
  SiDigitalocean, 
  SiInformationtechnology,
  SiSwift,
  SiTally,
  SiMicrosoftoffice,
  SiAutodesk,
  SiMicrosoft,
  SiAdobe,
  SiUnity,
  SiCisco
} from "react-icons/si";
import scannerImg from "../assets/123.jpg";
=======
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [copied, setCopied] = useState(false);
<<<<<<< HEAD
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
=======
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const token = localStorage.getItem("token");
  const dropdownRef = useRef(null);
  const payNowButtonRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobilePayNowButtonRef = useRef(null);
<<<<<<< HEAD
  const coursesDropdownRef = useRef(null);
  const coursesButtonRef = useRef(null);

  const courses = [
    {
      name: "IBM Certifications",
      description: "Professional certification programs from IBM",
      icon: <FaBriefcase className="text-blue-600 text-xl" />,
      path: "/IBM"
    },
    {
      name: "Digital Marketing Certification",
      description: "Comprehensive digital marketing training",
      icon: <FaGoogle className="text-pink-500 text-xl" />,
      path: "/META"
    },
    {
      name: "PMI Project Management",
      description: "Project Management Institute certifications",
      icon: <FaProjectDiagram className="text-orange-500 text-xl" />,
      path: "/PMI"
    },
    {
      name: "Information Technology Specialist",
      description: "IT professional certification programs",
      icon: <FaLaptopCode className="text-teal-600 text-xl" />,
      path: "/ITSpeacialist"
    },
    {
      name: "App Development with Swift",
      description: "iOS app development certification",
      icon: <FaApple className="text-gray-800 text-xl" />,
      path: "/SwiftDevelopment"
    },
    {
      name: "Tally Certifications",
      description: "Accounting and business software training",
      icon: <FaCalculator className="text-green-700 text-xl" />,
      path: "/Tally"
    },
    {
      name: "Microsoft Office Specialist",
      description: "Microsoft Office suite certification",
      icon: <FaMicrosoft className="text-blue-800 text-xl" />,
      path: "/Microsoftoffice"
    },
    {
      name: "Autodesk Certified User",
      description: "CAD and design software certification",
      icon: <FaDraftingCompass className="text-green-500 text-xl" />,
      path: "/Autodesk"
    },
    {
      name: "Microsoft Certified Fundamentals",
      description: "Entry-level Microsoft certifications",
      icon: <FaMicrosoft className="text-blue-500 text-xl" />,
      path: "/MicrosoftCertified"
    },
    {
      name: "Adobe Certified Professional",
      description: "Adobe creative suite certification",
      icon: <FaPaintBrush className="text-red-600 text-xl" />,
      path: "/Adobe"
    },
    {
      name: "Unity Certified User",
      description: "Game development certification",
      icon: <FaGamepad className="text-purple-700 text-xl" />,
      path: "/unity"
    },
    {
      name: "Cisco Certified",
      description: "Networking and security certifications",
      icon: <FaNetworkWired className="text-blue-500 text-xl" />,
      path: "/ciscocard"
    }
  ];
=======
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

  const accountNumber = "732205000345";
  const bankName = "ICICI Bank";
  const branchName = "Palam Colony";
  const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
  const ifscCode = "ICIC0007322";
  const Email = "sales@traincapetech.info";

  const bankDetails = {
    "Account Number": accountNumber,
    "Bank Name": bankName,
    "Branch Name": branchName,
    "Account Holder Name": accountHolderName,
    "IFSC Code": ifscCode,
    "EMAIL": Email
  };

<<<<<<< HEAD
=======
  // Calculate and set dropdown position based on button position
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  const updateDropdownPosition = () => {
    if (payNowButtonRef.current) {
      const rect = payNowButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  };
<<<<<<< HEAD
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coursesButtonRef.current && coursesButtonRef.current.contains(event.target)) {
        return;
      }
      
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
        setShowCoursesDropdown(false);
      }

=======

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicked on the pay now button
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
      if (payNowButtonRef.current && payNowButtonRef.current.contains(event.target)) {
        return;
      }
      
      if (mobilePayNowButtonRef.current && mobilePayNowButtonRef.current.contains(event.target)) {
        return;
      }
      
<<<<<<< HEAD
=======
      // Check if clicked outside of dropdown
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        mobileDropdownRef.current && 
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogout = () => {
<<<<<<< HEAD
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate("/login");
=======
    // First remove the token
    localStorage.removeItem("token");
    // Then dispatch the logout action
    dispatch(logoutUser());
    // Then navigate to login page
    navigate("/login");
    // Close the mobile menu if open
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    setMenuOpen(false);
  };

  const handlePayNow = (event) => {
<<<<<<< HEAD
    event.preventDefault();
    event.stopPropagation();
    updateDropdownPosition();
=======
    // Prevent event from bubbling up
    event.preventDefault();
    event.stopPropagation();
    
    // Update dropdown position before showing it
    updateDropdownPosition();
    
    // Toggle dropdown visibility when Pay Now is clicked
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    setShowDropdown(!showDropdown);
  };

  const handleBankTransfer = (event) => {
<<<<<<< HEAD
    event.preventDefault();
    event.stopPropagation();
    setShowBankDetails(true);
    setShowDropdown(false);
=======
    // Prevent the default action and bubbling
    event.preventDefault();
    event.stopPropagation();
    
    setShowBankDetails(true);
    setShowDropdown(false);
    
    // Also close the mobile menu if open
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  const copyToClipboard = () => {
    const detailsText = Object.entries(bankDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    navigator.clipboard.writeText(detailsText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-teal-300 border-b-2 w-fit border-red-500"
      : "hover:text-teal-400";

<<<<<<< HEAD
  const handleExternalLink = (url, event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowDropdown(false);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

=======
  // Handle external link navigation
  const handleExternalLink = (url, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Close dropdown
    setShowDropdown(false);
    
    // Also close the mobile menu if open
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    
    // Open link in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Render dropdown via portal to avoid z-index issues
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  const renderDropdown = () => {
    if (!showDropdown) return null;
    
    const dropdownContent = (
      <div
        ref={dropdownRef}
        className="fixed bg-white text-black shadow-xl rounded-md w-48 py-1 border border-gray-200"
        style={{
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          width: `${dropdownPosition.width}px`,
          zIndex: 9999
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => handleExternalLink("https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB", e)}
          className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
        >
          PayPal
        </button>
        <button
          onClick={(e) => handleExternalLink("https://buy.stripe.com/8wM2az10TaYQgww29d", e)}
          className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
        >
          Credit / Debit Card
        </button>
        <button
          onClick={handleBankTransfer}
          className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
        >
          Bank Transfer
        </button>
      </div>
    );
    
<<<<<<< HEAD
=======
    // Use portal to render dropdown at the root level
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    return ReactDOM.createPortal(
      dropdownContent,
      document.body
    );
  };

<<<<<<< HEAD
  const renderCoursesDropdown = () => (
    <div
      ref={coursesDropdownRef}
      className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-md w-full max-w-[600px] md:w-[600px] md:max-w-[600px] py-4 z-50 border border-gray-200
        max-h-[70vh] overflow-y-auto
        sm:w-[90vw] sm:max-w-[90vw]
        "
      style={{ minWidth: '220px' }}
      onClick={(e) => e.stopPropagation()}
      role="menu"
      aria-label="Courses Dropdown"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={course.path}
            className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition-all duration-200 group"
            onClick={() => {
              setShowCoursesDropdown(false);
              navigate(course.path);
            }}
            role="menuitem"
            tabIndex={0}
          >
            <div className="mt-1 flex-shrink-0">
              {course.icon}
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                {course.name}
              </div>
              <div className="text-sm text-gray-500">
                {course.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-gray-900 lg:h-24 h-28 md:px-0 lg:px-10 px-2 shadow-lg lg:flex" aria-label="Main Navigation" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="mx-auto flex items-center lg:w-[15%] justify-between">
=======
  return (
    <>
      <nav className="bg-gray-800 lg:h-24 h-28 md:px-0 lg:px-10 px-2 shadow-lg lg:flex" aria-label="Main Navigation">
        <div className="mx-auto flex items-center lg:w-[15%] justify-between">
          {/* Logo */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Traincape Technology"
              className="w-[130px] h-[130px]"
              width="130"
              height="130"
            />
          </div>

<<<<<<< HEAD
          <div className="hidden md:flex lg:hidden justify-between w-full items-center text-white">
=======
          {/* md */}
          <div className="hidden md:flex lg:hidden justify-between w-full items-center text-white">
            {/* Navigation Links in the center */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            <div className="flex md:space-x-3 space-x-6 mx-auto">
              <Link to="/" className={`${isActive("/")} text-xl`} aria-label="Home">
                Home
              </Link>
              <Link to="/about-us" className={`${isActive("/about-us")} text-xl`} aria-label="About Us">
                About
              </Link>
              <Link
                to="/our-services"
                className={`${isActive("/our-services")} text-xl`}
                aria-label="Our Services"
              >
                Services
              </Link>
              <Link
                to="/review-page"
                className={`${isActive("/review-page")} text-xl`}
                aria-label="Reviews"
              >
                Reviews
              </Link>
<<<<<<< HEAD
              <div className="relative">
                <Link
                  to="/Courses-details"
                  className={`${isActive("/Courses-details")} text-xl flex items-center gap-2 text-white relative`}
                  aria-label="Courses Details"
                  ref={coursesButtonRef}
                  onClick={(e) => {
                    if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                      e.preventDefault();
                      setShowCoursesDropdown(!showCoursesDropdown);
                    }
                  }}
                >
                  Courses
                  <FaChevronDown 
                    className="text-sm ml-1 inline cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-teal-300" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowCoursesDropdown(!showCoursesDropdown);
                    }}
                  />
                  {showCoursesDropdown && renderCoursesDropdown()}
                </Link>
              </div>
=======
              <Link
                to="/Courses-details"
                className={`${isActive("/Courses-details")} text-xl`}
                aria-label="Courses Details"
              >
                Courses
              </Link>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              <Link
                to="/contact-us"
                className={`${isActive("/contact-us")} text-xl`}
                aria-label="Contact Us"
              >
                Contact
              </Link>
              <Link to="/training" className={`${isActive("/training")} text-xl`} aria-label="Training">
                Training
              </Link>
            </div>

<<<<<<< HEAD
            <div className="flex items-center space-x-3 px-2">
=======
            {/* Pay Now Button and Login/Logout Buttons on the Right */}
            <div className="flex items-center space-x-3 px-2">
              {/* Pay Now Button */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              <div className="relative">
                <button
                  ref={payNowButtonRef}
                  className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
                  onClick={handlePayNow}
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                >
                  Pay Now
                </button>
              </div>

<<<<<<< HEAD
=======
              {/* Login / Logout Button */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              {token ? (
                <div>
                  <DashboardHeader />
                </div>
              ) : (
                <button
                  className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md"
                  onClick={handleLogin}
                  aria-label="Login"
                >
                  Login
                </button>
              )}
            </div>
          </div>

<<<<<<< HEAD
=======
          {/* Hamburger Icon for Small Screens */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          <div className="md:hidden" onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!isMenuOpen);
          }}>
            <button aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? (
                <ImCross className="text-white text-3xl" />
              ) : (
                <GiHamburgerMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>

<<<<<<< HEAD
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 p-4`}
          aria-hidden={!isMenuOpen}
          onClick={(e) => e.stopPropagation()}
        >
=======
        {/* Sidebar for Small Screens */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 p-4`}
          aria-hidden={!isMenuOpen}
          onClick={(e) => e.stopPropagation()} // Stop event propagation
        >
          {/* Close Button */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          <div className="flex justify-end">
            <button 
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <ImCross className="text-white text-3xl cursor-pointer" />
            </button>
          </div>

<<<<<<< HEAD
=======
          {/* Sidebar Links */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`${isActive("/")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`${isActive("/about-us")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/our-services"
              className={`${isActive("/our-services")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/review-page"
              className={`${isActive("/review-page")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </Link>
<<<<<<< HEAD
            <div className="relative">
              <Link
                to="/Courses-details"
                className={`${isActive("/Courses-details")} text-lg flex items-center gap-1 relative`}
                aria-label="Courses Details"
                ref={coursesButtonRef}
                onClick={(e) => {
                  if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                    e.preventDefault();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }
                }}
              >
                Courses <FaChevronDown 
                  className="text-sm mt-1 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-teal-300" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }}
                />
                {showCoursesDropdown && renderCoursesDropdown()}
              </Link>
            </div>
=======
            <Link
              to="/Courses-details"
              className={`${isActive("/Courses-details")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/training"
              className={`${isActive("/training")} text-lg`}
              onClick={() => setMenuOpen(false)}
            >
              Training
            </Link>

<<<<<<< HEAD
=======
            {/* Pay Now Button */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            <div className="relative">
              <button
                ref={mobilePayNowButtonRef}
                className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none w-full"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
              
<<<<<<< HEAD
=======
              {/* Mobile dropdown renders inline because we have full control of this area */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
              {showDropdown && (
                <div 
                  ref={mobileDropdownRef}
                  className="mt-2 bg-white text-black shadow-lg w-full rounded-md overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => handleExternalLink("https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB", e)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    PayPal
                  </button>
                  <button
                    onClick={(e) => handleExternalLink("https://buy.stripe.com/8wM2az10TaYQgww29d", e)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Credit / Debit Card
                  </button>
                  <button
                    onClick={handleBankTransfer}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Bank Transfer
                  </button>
                </div>
              )}
            </div>

<<<<<<< HEAD
=======
            {/* Login / Logout Button */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            {token ? (
              <div>
                <DashboardHeader />
              </div>
            ) : (
              <button
                className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>

<<<<<<< HEAD
        <div className="hidden lg:flex justify-between w-full items-center text-white">
=======
        {/* Main Navbar Links (Visible on Medium and Large Screens) */}
        <div className="hidden lg:flex justify-between w-full items-center text-white">
          {/* Navigation Links in the center */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          <div className="flex space-x-6 mx-auto">
            <Link to="/" className={`${isActive("/")} text-xl`}>
              Home
            </Link>
            <Link to="/about-us" className={`${isActive("/about-us")} text-xl`}>
              About
            </Link>
            <Link
              to="/our-services"
              className={`${isActive("/our-services")} text-xl`}
            >
              Services
            </Link>
            <Link
              to="/review-page"
              className={`${isActive("/review-page")} text-xl`}
            >
              Reviews
            </Link>
            <div className="relative">
              <Link
                to="/Courses-details"
                className={`${isActive("/Courses-details")} text-xl flex items-center gap-2 text-white relative`}
                aria-label="Courses Details"
                ref={coursesButtonRef}
                onClick={(e) => {
                  if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
                    e.preventDefault();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }
                }}
              >
                Courses
                <FaChevronDown 
                  className="text-sm ml-1 inline cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-teal-300" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowCoursesDropdown(!showCoursesDropdown);
                  }}
                />
                {showCoursesDropdown && renderCoursesDropdown()}
              </Link>
            </div>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-xl`}
            >
              Contact
            </Link>
            <Link to="/training" className={`${isActive("/training")} text-xl`}>
              Training
            </Link>
          </div>

<<<<<<< HEAD
          <div className="flex items-center space-x-6">
=======
          {/* Pay Now Button and Login/Logout Buttons on the Right */}
          <div className="flex items-center space-x-6">
            {/* Pay Now Button */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            <div className="relative">
              <button
                ref={payNowButtonRef}
                className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
                onClick={handlePayNow}
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                Pay Now
              </button>
            </div>

            {token ? (
              <div>
                <DashboardHeader />
              </div>
            ) : (
              <button
                className="text-black font-bold bg-white hover:bg-teal-100 px-4 py-2 rounded-md"
                onClick={handleLogin}
                aria-label="Login"
              >
                Login
              </button>
            )}
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* Overlay for Sidebar (when it's open) */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </nav>
<<<<<<< HEAD

      {renderDropdown()}

=======

      {/* Render dropdown portal */}
      {renderDropdown()}

      {/* Bank Details Modal */}
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
      {showBankDetails && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]"
          onClick={(e) => e.stopPropagation()}
        >
          <div 
<<<<<<< HEAD
            className="bg-white rounded-lg p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Scanner Image */}
              <img
                src={scannerImg}
                alt="Scan to Pay"
                className="w-96 h-96 object-contain rounded-md border border-gray-200 bg-gray-50"
              />
              {/* Details and Copy Button */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Bank Account Details</h2>
                  <button
                    onClick={() => setShowBankDetails(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                  >
                    <ImCross />
                  </button>
                </div>
                <div className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
                  {Object.entries(bankDetails).map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <span className="font-medium">{key}: </span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      copied ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {copied ? (
                      <>
                        <FaCheck className="mr-2" /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy className="mr-2" /> Copy Details
                      </>
                    )}
                  </button>
                </div>
              </div>
=======
            className="bg-white rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Bank Account Details</h2>
              <button
                onClick={() => setShowBankDetails(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <ImCross />
              </button>
            </div>
            <div className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
              {Object.entries(bankDetails).map(([key, value]) => (
                <div key={key} className="mb-2">
                  <span className="font-medium">{key}: </span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={copyToClipboard}
                className={`flex items-center px-4 py-2 rounded-md ${
                  copied ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {copied ? (
                  <>
                    <FaCheck className="mr-2" /> Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="mr-2" /> Copy Details
                  </>
                )}
              </button>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 