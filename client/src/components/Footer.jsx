// // import React from "react";
// // import footersection from "../css/Footer.module.css";
// // import { Link,  } from "react-router-dom";
// // import { FaMapLocationDot } from "react-icons/fa6";
// // import { FaWhatsapp } from "react-icons/fa6";
// // // import { TbPhoneCall } from "react-icons/tb";
// // import { FaFacebookF } from "react-icons/fa";
// // import { FaInstagram } from "react-icons/fa";
// // import { IoIosMail } from "react-icons/io";
// // import { FaLinkedinIn } from "react-icons/fa6";

// // // import {Link } from 'react-router-dom'
// // // import Employee from "../pages/Employee"
// // // import Internship from "../pages/Internship";
// // // import WebsiteCounter from "./WebsiteCounter";
// // const Footer = () => {
// //   // const navigate = useNavigate();
// //   return (
// //     <div className={footersection.FooterContainer}>
// //       <div className={footersection.Details}>
// //         <div className={footersection.detailsDiv}>
// //           <div className={footersection.address}>
// //             <div className={footersection.iconDiv}>
// //               <FaMapLocationDot className={footersection.icon} />
// //             </div>
// //             <div className={footersection.addressText}>
// //               <h1>OFFICE ADDRESS</h1>
// //               <p>
// //               Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali, Vaishali Colony, Dashrath Puri, New Delhi, Delhi, 110045
// //               </p>
// //             </div>
// //           </div>
// //           {/* <div className={footersection.address}>
// //             <div className={footersection.iconDiv}>
// //               <LuTimerReset className={footersection.icon} />
// //             </div>
// //              <div>
// //               <h1>WORKING HOURS</h1>
// //               <p>Mon - Sat : 11am - 7pm</p>
// //             </div> 
// //           </div>{" "} */}
// //           <div className={footersection.address}>

// //             <div className={footersection.addressText}>
// //               <h1>CONTACT - US</h1>
// //               <div className={footersection.iconDiv}>
// //                 <IoIosMail className="text-xl md:text-3xl" />

// //                 <Link
// //                   // className={contactus.link}
// //                   to="mailto:sales@traincapetech.info"
// //                   target="_blank"
// //                   className="sm:text-sm"
// //                 >
// //                   sales@traincapetech.info
// //                 </Link>

// //               </div>
// //               <div className={footersection.iconDiv}>
// //                 <FaWhatsapp className="text-xl md:text-3xl" />
// //                 <Link to="https://wa.me/+916280281505" target="_blank"
// //                 // onClick={() =>
// //                 //   (window.location.href = "https://wa.me/+916280281505")
// //                 // }
// //                 >
// //                   +91 6280281505
// //                 </Link>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className={footersection.middleSection}>
// //         <div className={footersection.middle}>
// //           <div className={footersection.footerdiv}>
// //             <h1>ABOUT US</h1>
// //             <p>
// //               Traincape Technology's specific methodologies for measuring and
// //               prioritizing customer satisfaction. <br />
// //               <br />
// //               However, many companies use various methods to gauge and
// //               prioritize customer satisfaction.
// //             </p>
// //             <div className={footersection.social}>
// //               <div
// //                 className={footersection.SocailDiv}
// //                 onClick={() =>
// //                 (window.location.href =
// //                   "https://www.facebook.com/profile.php?id=100083755432171")
// //                 }
// //               >
// //                 <FaFacebookF className={footersection.Socialicon} />
// //               </div>
// //               <div className={footersection.SocailDiv}
// //                 onClick={() =>
// //                   (window.location.href = "https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg==")
// //                 }>
// //                 <FaInstagram className={footersection.Socialicon} />
// //               </div>
// //               <div
// //                 className={footersection.SocailDiv}
// //                 onClick={() => {
// //                   window.location.href =
// //                     "https://in.linkedin.com/company/traincape-technology";
// //                 }}
// //               >
// //                 <FaLinkedinIn className={footersection.Socialicon} />
// //               </div>
// //             </div>
// //           </div>
// //           <div className={footersection.footerdiv}>
// //             <h1>Links</h1>
// //             <Link
// //               to="/frequently-asked-questions"
// //               className={footersection.linksfooter}
// //             >
// //               FAQ
// //             </Link>
// //             <Link to="/contact-us" className={footersection.linksfooter}>
// //               Contact Us
// //             </Link>
// //             {/* <Link
// //               to="/terms-and-conditions"
// //               className={footersection.linksfooter}
// //             >
// //               Terms & Conditions
// //             </Link> */}
// //             <Link to="/Our-Policies" className={footersection.linksfooter}>
// //               Policy
// //             </Link>
// //             <Link to="/Career-details" className={footersection.linksfooter}>
// //               Career
// //             </Link>
// //             {<Link to="/Employee" className={footersection.linksfooter}>Employee</Link>}
// //           </div>
// //           <div className={footersection.footerdiv}>
// //             <h1>Explore</h1>
// //             <Link className={footersection.linksfooter} to={"/about-us"}>
// //               What we do
// //             </Link>
// //             <Link to="/Our-Blogs" className={footersection.linksfooter}>
// //               Resources
// //             </Link>
// //             {/* <Link to="/Our-Blogs" className={footersection.linksfooter}>
// //               Latest Posts
// //             </Link> */}
// //             {<Link to="/Internship" className={footersection.linksfooter}>Internship</Link>}
// //           </div>
// //           <div className={footersection.footerdiv}>
// //             <h1>Office Map</h1>
// //             <div className={footersection.gMap}>

// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7005.482564332026!2d77.081908!3d28.6075373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzI2LjYiTiA3N8KwMDcnNDguNyJF!5e0!3m2!1sen!2sin!4v1737112443686!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.324905682962!2d77.08584820125589!3d28.610166815955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737112758433!5m2!1sen!2sin"
// //                 width="600"
// //                 height="450"
// //                 allowFullScreen=""
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //               ></iframe>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className={footersection.copyRight}>
// //         <h1>Copyright © 2021 Traincape Technology. All Rights Reserved.</h1>
// //       </div>
// //       {/* <WebsiteCounter /> */}
// //     </div>
// //   );
// // };

// // export default Footer;
// // import React from "react";
// // import footersection from "../css/Footer.module.css";
// // import { Link, Navigate, } from "react-router-dom";
// // import { FaMapLocationDot } from "react-icons/fa6";
// // import { FaWhatsapp } from "react-icons/fa6";
// // // import { TbPhoneCall } from "react-icons/tb";
// // import { FaFacebookF } from "react-icons/fa";
// // import { FaInstagram } from "react-icons/fa";
// // import { IoIosMail } from "react-icons/io";
// // import { FaLinkedinIn } from "react-icons/fa6";

// // // import {Link } from 'react-router-dom'
// // // import Employee from "../pages/Employee"
// // // import Internship from "../pages/Internship";
// // // import WebsiteCounter from "./WebsiteCounter";
// // const Footer = () => {
// //   // const navigate = useNavigate();
// //   return (
// //     <div className={footersection.FooterContainer}>
// //       {/* Add the background image here */}
// //       <div className={footersection.Details}>
// //         <div className={footersection.detailsDiv}>
// //           <div className={footersection.address}>
// //             <div className={footersection.iconDiv}>
// //               <FaMapLocationDot className={footersection.icon} />
// //             </div>
// //             <div className={footersection.addressText}>
// //               <h1>OFFICE ADDRESS</h1>
// //               <p>
// //                 Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali, Vaishali Colony, Dashrath Puri, New Delhi, Delhi, 110045
// //                 {/* First Floor, Back Side of Nathu Ram Housing Complex, Dabri, South West Delhi, Delhi, 110045 */}
// //               </p>
// //             </div>
// //           </div>
// //           {/* <div className={footersection.address}>
// //             <div className={footersection.iconDiv}>
// //               <LuTimerReset className={footersection.icon} />
// //             </div>
// //              <div>
// //               <h1>WORKING HOURS</h1>
// //               <p>Mon - Sat : 11am - 7pm</p>
// //             </div> 
// //           </div>{" "} */}

// //           <div className={footersection.address}>

// //             <div className={footersection.addressText}>
// //               <h1>CONTACT - US</h1>
// //               <div className={footersection.iconDiv}>
// //                 <IoIosMail className="text-xl md:text-3xl" />

// //                 <Link
// //                   // className={contactus.link}
// //                   to="mailto:sales@traincapetech.info"
// //                   target="_blank"
// //                   className="sm:text-sm"
// //                 >
// //                   sales@traincapetech.info
// //                 </Link>

// //               </div>
// //               <div className={footersection.iconDiv}>
// //                 <FaWhatsapp className="text-xl md:text-3xl" />
// //                 <Link to="https://wa.me/+916280281505" target="_blank"
// //                 // onClick={() =>
// //                 //   (window.location.href = "https://wa.me/+916280281505")
// //                 // }
// //                 >
// //                   +91 6280281505
// //                 </Link>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className={footersection.middleSection}>
// //         <div className={footersection.middle}>
// //           <div className={footersection.footerdiv}>
// //             <h1>ABOUT US</h1>
// //             <p>
// //               Traincape Technology's specific methodologies for measuring and
// //               prioritizing customer satisfaction. <br />
// //               <br />
// //               However, many companies use various methods to gauge and
// //               prioritize customer satisfaction.
// //             </p>
// //             <div className={footersection.social}>
// //               <div
// //                 className={footersection.SocailDiv}
// //                 onClick={() =>
// //                 (window.location.href =
// //                   "https://www.facebook.com/profile.php?id=100083755432171")
// //                 }
// //               >
// //                 <FaFacebookF className={footersection.Socialicon} />
// //               </div>
// //               <div className={footersection.SocailDiv}
// //                 onClick={() =>
// //                   (window.location.href = "https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg==")
// //                 }>
// //                 <FaInstagram className={footersection.Socialicon} />
// //               </div>
// //               <div
// //                 className={footersection.SocailDiv}
// //                 onClick={() => {
// //                   window.location.href =
// //                     "https://in.linkedin.com/company/traincape-technology";
// //                 }}
// //               >
// //                 <FaLinkedinIn className={footersection.Socialicon} />
// //               </div>
// //             </div>
// //           </div>
// //           <div className={footersection.footerdiv}>
// //             <h1>Links</h1>
// //             <Link
// //               to="/frequently-asked-questions"
// //               className={footersection.linksfooter}
// //             >
// //               FAQ
// //             </Link>
// //             <Link to="/contact-us" className={footersection.linksfooter}>
// //               Contact Us
// //             </Link>
// //             {/* <Link
// //               to="/terms-and-conditions"
// //               className={footersection.linksfooter}
// //             >
// //               Terms & Conditions
// //             </Link> */}
// //             <Link to="/Our-Policies" className={footersection.linksfooter}>
// //               Policy
// //             </Link>
// //             <Link to="/Career-details" className={footersection.linksfooter}>
// //               Career
// //             </Link>
// //             {<Link to="/Employee" className={footersection.linksfooter}>Employee</Link>}
// //           </div>
// //           <div className={footersection.footerdiv}>
// //             <h1>Explore</h1>
// //             <Link className={footersection.linksfooter} to={"/about-us"}>
// //               What we do
// //             </Link>
// //             <Link to="/Our-Blogs" className={footersection.linksfooter}>
// //               Resources
// //             </Link>
// //             {/* <Link to="/Our-Blogs" className={footersection.linksfooter}>
// //               Latest Posts
// //             </Link> */}
// //             {<Link to="/Internship" className={footersection.linksfooter}>Internship</Link>}
// //             {<Link to="/PartnerPage" className={footersection.linksfooter}>Partners</Link>}
// //           </div>
// //           <div className={footersection.footerdiv}>
// //             <h1>Office Map</h1>
// //             <div className={footersection.gMap}>

// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7005.482564332026!2d77.081908!3d28.6075373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzI2LjYiTiA3N8KwMDcnNDguNyJF!5e0!3m2!1sen!2sin!4v1737112443686!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.324905682962!2d77.08584820125589!3d28.610166815955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737112758433!5m2!1sen!2sin"
// //                 width="600"
// //                 height="450"
// //                 allowFullScreen=""
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //               ></iframe>

// //             </div>
// //           </div>
// //         </div>
// //       </div >

// //       <div className={footersection.copyRight}>
// //         <h1>Copyright © 2021 Traincape Technology(OPC) Private Limited. All Rights Reserved.</h1>
// //       </div>
// //       {/* <WebsiteCounter /> */}

// //     </div >
// //   );
// // };

// // export default Footer;
// import { useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Clock,
// } from "lucide-react";

// export default function Footer() {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <footer className="bg-slate-900 text-white">
//       {/* Top section with contact info */}
//       <div className="mx-auto px-2 md:px-10 lg:px-20 py-8 border-b border-slate-800">
//         <div className="grid  grid-cols-3 md:gap-8">
//           {/* Contact Us */}
//           <div className="flex items-start gap-1 md:gap-4 group">
//             <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
//               <Phone className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">
//                 CONTACT US
//               </h3>
//               <div className="space-y-2 text-slate-300">
//                 <div className="flex  flex-col md:flex-row md:items-center md:gap-3 group/item">
//                   <Mail className="h-4 w-4 text-blue-400" />
//                   <a
//                     href="mailto:sales@traincapetech.info"
//                     className="text-[10px] sm:text-xs md:text-sm group-hover/item:text-blue-300 transition-colors duration-300"
//                   >
//                     sales@traincapetech.info
//                   </a>
//                 </div>
//                 <div className="flex  flex-col md:flex-row md:items-center md:gap-3 group/item">
//                   <Phone className="text-left h-4 w-4 text-blue-400" />
//                   <a
//                     href="https://wa.me/+441253928501"
//                     target="_blank"
//                     className="text-[10px] sm:text-xs md:text-sm group-hover/item:text-blue-300 transition-colors duration-300"
//                   >
//                     +44 1253 928501
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Working Hours */}
//           <div className="flex items-start  gap-1 md:gap-4 group">
//             <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
//               <Clock className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xs md:text-base  mb-2 text-blue-50">
//                 WORKING HOURS
//               </h3>
//               <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-tight">
//                 Mon - Sat: 11AM - 7PM
//               </p>
//               <p className="text-slate-400 text-[10px] sm:text-xs md:text-sm">
//                 Sunday: Closed
//               </p>
//             </div>
//           </div>

//           {/* Office Address */}
//           <div className="flex items-start  gap-1 md:gap-4 group">
//             <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
//               <MapPin className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xs md:text-base  mb-2 text-blue-50">
//                 OFFICE ADDRESS
//               </h3>
//               <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-tight">
//                 Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali, Vaishali
//                 Colony, Dashrath Puri, New Delhi, Delhi, 110045
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle section with about, links, explore, map */}
//       <div className="mx-auto px-2 md:px-10 lg:px-20 py-2">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* About Us */}
//           <div className="space-y-3 ">
//             <h3 className="text-center font-bold text-base pb-2 text-blue-50 border-b border-blue-500/30">
//               ABOUT US
//             </h3>
//             <p className="text-slate-300 text-[10px] sm:text-xs leading-tight">
//               Traincape Technology's specific methodologies for measuring and
//               prioritizing customer satisfaction. Many companies use various
//               methods to gauge and prioritize customer satisfaction.
//             </p>
//           </div>
//           {/*Social Media Icons */}
//           <div className="space-y-3 text-center">
//             <h3 className="font-bold text-base pb-2  text-blue-50 border-b border-blue-500/30">
//               SOCIAL MEDIA LINKS
//             </h3>
//             {/* Social Media Icons */}
//             <div className="flex justify-center gap-3 pt-2">
//               <a
//                 href="https://www.facebook.com/profile.php?id=100083755432171"
//                 target="_blank"
//                 className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1"
//               >
//                 <Facebook className="h-4 w-4" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a
//                 href="https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg=="
//                 target="_blank"
//                 className="bg-slate-800 hover:bg-purple-600 p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1"
//               >
//                 <Instagram className="h-4 w-4" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a
//                 href="https://in.linkedin.com/company/traincape-technology"
//                 target="_blank"
//                 className="bg-slate-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1"
//               >
//                 <Linkedin className="h-4 w-4" />
//                 <span className="sr-only">LinkedIn</span>
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-row justify-around">
//             {/* Links */}
//             <div className="space-y-3">
//               <h3 className=" text-center font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
//                 LINKS
//               </h3>
//               <div className="grid grid-cols-1 gap-1 text-[10px] sm:text-xs">
//                 <button
//                   onClick={() =>
//                     handleNavigation("/frequently-asked-questions")
//                   }
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   FAQ
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/contact-us")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Contact Us
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/Our-Policies")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Policy
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/Career-details")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Career
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/Employee")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Employee
//                 </button>
//               </div>
//             </div>

//             {/* Explore */}
//             <div className="space-y-3">
//               <h3 className=" font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
//                 EXPLORE
//               </h3>
//               <div className="grid grid-cols-1 gap-1 text-xs">
//                 <button
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                   onClick={() => handleNavigation("/about-us")}
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   What we do
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/Our-Blogs")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Resources
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/Internship")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Internship
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/PartnerPage")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Partners
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("/Gallery")}
//                   className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
//                 >
//                   <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
//                   Gallery
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Office Map */}
//           <div className="space-y-3">
//             <h3 className="font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
//               OFFICE MAP
//             </h3>
//             <div className="w-full h-32 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.324905682962!2d77.08584820125589!3d28.610166815955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737112758433!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 allowFullScreen={false}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Traincape Office Location"
//                 className="border-0"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="mx-auto px-4 text-center py-3">
//         <p className="text-slate-400 text-[10px] sm:text-xs font-light">
//           Copyright © {new Date().getFullYear()}{" "}
//           <span className="text-blue-400 font-normal">
//             Traincape Technology
//           </span>
//           . All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../pages/AboutUs/data.js";

export default function Footer() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Safe access for translations
  const t = translations?.[language]?.footer || {};

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Top section */}
      <div className="mx-auto px-2 md:px-10 lg:px-20 py-8 border-b border-slate-800">
        <div className="grid grid-cols-3 md:gap-8">
          {/* Contact Us */}
          <div className="flex items-start gap-1 md:gap-4 group">
            <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
              <Phone className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">{t.contactUs}</h3>
              <div className="space-y-2 text-slate-300">
                <div className="flex flex-col md:flex-row md:items-center md:gap-3 group/item">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a
                    href="mailto:sales@traincapetech.info"
                    className="text-[10px] sm:text-xs md:text-sm group-hover/item:text-blue-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                  >
                    sales@traincapetech.info
                  </a>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-3 group/item">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a
                    href="https://wa.me/+916280281505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-xs md:text-sm group-hover/item:text-blue-300 transition-colors duration-300"
                  >
                    +91 6280281505
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-1 md:gap-4 group">
            <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
              <Clock className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">{t.workingHours}</h3>
              <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-tight">
                {t.workingTime}
              </p>
              <p className="text-slate-400 text-[10px] sm:text-xs md:text-sm">{t.sundayClosed}</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-start gap-1 md:gap-4 group">
            <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
              <MapPin className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">{t.officeAddress}</h3>
              <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-tight">
                {t.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle section */}
      <div className="mx-auto px-2 md:px-10 lg:px-20 py-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Us */}
          <div className="space-y-3">
            <h3 className="text-center font-bold text-base pb-2 text-blue-50 border-b border-blue-500/30">
              {t.aboutUs}
            </h3>
            <p className="text-slate-300 text-[10px] sm:text-xs leading-tight">{t.aboutDesc}</p>
          </div>

          {/* Social Media Icons */}
          <div className="space-y-3 text-center">
            <h3 className="font-bold text-base pb-2 text-blue-50 border-b border-blue-500/30">{t.socialMediaLinks}</h3>
            <div className="flex justify-center gap-3 pt-2">
              {[
                { href: "https://www.facebook.com/profile.php?id=100083755432171", Icon: Facebook, color: "hover:bg-blue-600" },
                { href: "https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg==", Icon: Instagram, color: "hover:bg-purple-600" },
                { href: "https://in.linkedin.com/company/traincape-technology", Icon: Linkedin, color: "hover:bg-blue-700" },
              ].map(({ href, Icon, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-slate-800 ${color} p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">Social Icon</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links and Explore */}
          <div className="flex flex-row justify-around">
            <FooterLinks title={t.links} links={[
              { label: t.faq, path: "/frequently-asked-questions" },
              { label: t.contactUs, path: "/contact-us" },
              { label: t.policy, path: "/Our-Policies" },
              { label: t.career, path: "/Career-details" },
              { label: t.employee, path: "/Employee" },
              { label: t.certificate, path: "/CertificateLookup" }

            ]} handleNavigation={handleNavigation} />

            <FooterLinks title={t.explore} links={[
              { label: t.whatWeDo, path: "/about-us" },
              { label: t.resources, path: "/Our-Blogs" },
              { label: t.internship, path: "/Internship" },
              { label: t.partners, path: "/PartnerPage" },
              { label: t.gallery, path: "/Gallery" }
            ]} handleNavigation={handleNavigation} />
          </div>

          {/* Office Map */}
          <div className="space-y-3">
            <h3 className="font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
              {t.officeMap}
            </h3>
            <div className="w-full h-32 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.324905682962!2d77.08584820125589!3d28.610166815955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737112758433!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Traincape Office Location"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto px-4 text-center py-3">
        <p className="text-slate-400 text-[10px] sm:text-xs font-light">
          {t.copyRight} <span className="text-blue-400 font-normal">Traincape Technology</span>. {t.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}

// Reusable Footer Links Component
function FooterLinks({ title, links, handleNavigation }) {
  return (
    <div className="space-y-3">
      <h3 className="text-center font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-1 text-[10px] sm:text-xs">
        {links.map(({ label, path }, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(path)}
            className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
          >
            <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
