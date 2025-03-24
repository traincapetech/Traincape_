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
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import logo from "../assets/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.png";
import DashboardHeader from "../pages/DashboardHeader";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem("token");

  const accountNumber = "732205000345";
  const bankName = "ICICI Bank";
  const branchName = "Palam Colony";
  const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
  const ifscCode = "ICIC0007322";
  const Email = "sales@traincapetech.info";

  const alertMessage = `Account Details :\nAccount Number: ${accountNumber}\nBank Name: ${bankName}\nBranch Name: ${branchName}\nAccount Holder Name: ${accountHolderName}\nIFSC Code: ${ifscCode}\nEMAIL : ${Email}\n`;

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const handlePayNow = () => {
    // Toggle dropdown visibility when Pay Now is clicked
    setShowDropdown(!showDropdown);
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-teal-300 border-b-2 w-fit border-red-500"
      : "hover:text-teal-400";

  return (
    <nav className="bg-gray-800 lg:h-24 h-28 md:px-0 lg:px-10 px-2 shadow-lg lg:flex">
      <div className="mx-auto flex items-center lg:w-[15%] justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Traincape Technology"
            className="w-[130px] h-[130px]"
          />
        </div>

        {/* md */}
        <div className="hidden md:flex lg:hidden justify-between w-full items-center text-white">
          {/* Navigation Links in the center */}
          <div className="flex md:space-x-3 space-x-6 mx-auto">
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
            <Link
              to="/Courses-details"
              className={`${isActive("/Courses-details")} text-xl`}
            >
              Courses
            </Link>
            <Link
              to="/contact-us"
              className={`${isActive("/contact-us")} text-xl`}
            >
              Contact
            </Link>
            <Link to="/training" className={`${isActive("/training")} text-xl`}>
              Training
            </Link>
            <Link to="/PartnerPage" className={`${isActive("/PartnerPage")} text-xl`}>
              Partners
            </Link>
          </div>

          {/* Pay Now Button and Login/Logout Buttons on the Right */}
          <div className="flex items-center space-x-3 px-2">
            {/* Pay Now Button */}
            <div className="relative">
              <button
                className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
                onClick={handlePayNow}
              >
                Pay Now
              </button>

              {/* Payment Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white z-20 text-black shadow-lg rounded-md w-48">
                  <Link
                    to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
                    className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white "
                  >
                    PayPal
                  </Link>
                  <Link
                    to="https://buy.stripe.com/8wM2az10TaYQgww29d"
                    className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                  >
                    Credit / Debit Card
                  </Link>
                  <button
                    onClick={() => {
                      alert(alertMessage);
                      setShowDropdown(false); // Close the dropdown after clicking Bank Transfer
                    }}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
                  >
                    Bank Transfer
                  </button>
                </div>
              )}
            </div>

            {/* Login / Logout Button */}
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

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <ImCross className="text-white text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-white text-3xl" />
          )}
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 p-4`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <ImCross
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Sidebar Links */}
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
          <Link
            to="/Courses-details"
            className={`${isActive("/Courses-details")} text-lg`}
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </Link>
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
          <Link to="/PartnerPage" className={`${isActive("/PartnerPage")} text-xl`}>
              Partners
            </Link>

          {/* Pay Now Button */}
          <div className="relative">
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
              onClick={handlePayNow}
            >
              Pay Now
            </button>

            {/* Payment Dropdown */}
            {showDropdown && (
              <div className="mt-2 bg-white text-black shadow-lg w-full">
                <Link
                  to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
                  className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                >
                  PayPal
                </Link>
                <Link
                  to="https://buy.stripe.com/8wM2az10TaYQgww29d"
                  className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                >
                  Credit / Debit Card
                </Link>
                <button
                  onClick={() => {
                    alert(alertMessage);
                    setShowDropdown(false); // Close the dropdown after clicking Bank Transfer
                  }}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
                >
                  Bank Transfer
                </button>
              </div>
            )}
          </div>

          {/* Login / Logout Button */}
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

      {/* Main Navbar Links (Visible on Medium and Large Screens) */}
      <div className="hidden lg:flex justify-between w-full items-center text-white">
        {/* Navigation Links in the center */}
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
          <Link
            to="/Courses-details"
            className={`${isActive("/Courses-details")} text-xl`}
          >
            Courses
          </Link>
          <Link
            to="/contact-us"
            className={`${isActive("/contact-us")} text-xl`}
          >
            Contact
          </Link>
          <Link to="/training" className={`${isActive("/training")} text-xl`}>
            Training
          </Link>
          <Link to="/PartnerPage" className={`${isActive("/PartnerPage")} text-xl`}>
              Partners
            </Link>
        </div>

        {/* Pay Now Button and Login/Logout Buttons on the Right */}
        <div className="flex items-center space-x-6">
          {/* Pay Now Button */}
          <div className="relative">
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md focus:outline-none"
              onClick={handlePayNow}
            >
              Pay Now
            </button>

            {/* Payment Dropdown */}
            {showDropdown && (
              <div
                onClick={() => setShowDropdown(false)} // Close the dropdown after clicking Bank Transfer
                className="absolute right-0 mt-2 bg-white z-20 text-black shadow-lg w-48"
              >
                <Link
                  to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
                  className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                >
                  PayPal
                </Link>
                <Link
                  to="https://buy.stripe.com/8wM2az10TaYQgww29d"
                  className="block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white"
                >
                  Credit / Debit Card
                </Link>
                <button
                  onClick={() => {
                    alert(alertMessage);
                    setShowDropdown(false); // Close the dropdown after clicking Bank Transfer
                  }}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-blue-400 hover:text-white"
                >
                  Bank Transfer
                </button>
              </div>
            )}
          </div>
          {/* Login / Logout Button */}{" "}
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

      {/* Overlay for Sidebar (when it's open) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;