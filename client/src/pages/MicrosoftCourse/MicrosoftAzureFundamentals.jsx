// import React, { useEffect, useState } from "react";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useCartContext } from "../../components/CartContext";
// import AddToCartButton from "../../components/AddToCartButton";
// import VoucherButton from "../../components/VoucherButton";
// import Practice from "./Practice";

// const MicrosoftAzureFundamentals = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState(null);
//   const [confirmationMessage, setConfirmationMessage] = useState(false);
//   const [activeTab, setActiveTab] = useState("Overview");
//   const { addToCart } = useCartContext();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const toggleAnswer = (id) => {
//     if (selectedQuestion === id) {
//       setSelectedQuestion(null);
//     } else {
//       setSelectedQuestion(id);
//     }
//   };

//   const handleAddToCart = () => {
//     const product = {
//       id: "microsoft-azure-fundamentals",
//       name: "Microsoft Azure Fundamentals (AZ-900)",
//       price: 1599,
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
//       amount: 1,
//     };
//     addToCart(product);
//     setConfirmationMessage(true);
//     setTimeout(() => {
//       setConfirmationMessage(false);
//     }, 2000);
//   };

//   const tabsData = {
//     Overview: (
//       <div className="space-y-4">
//         <div className="mb-8">
//           <h3 className="text-xl font-bold mb-4">
//             Microsoft Azure Fundamentals (AZ-900)
//           </h3>
//           <p className="text-gray-700">
//             Microsoft Azure Fundamentals (AZ-900) is designed for anyone who wants to understand cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.
//           </p>
//           <p className="text-gray-700 mt-4">
//             This course provides an excellent introduction to cloud computing and specifically the Microsoft Azure implementation. There are no prerequisites for this course, making it perfect for individuals who are new to the cloud or those looking to validate their foundational knowledge of cloud services.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Cloud computing concepts and models</li>
//             <li>Azure core services and solutions</li>
//             <li>Azure management tools and features</li>
//             <li>Security, privacy, compliance, and trust</li>
//             <li>Azure pricing, service level agreements, and lifecycles</li>
//             <li>IaaS, PaaS, and SaaS cloud service models</li>
//             <li>Azure subscriptions and resource groups</li>
//             <li>Azure portal navigation and key features</li>
//           </ul>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
//           <p className="text-gray-700 mb-4">
//             The AZ-900 certification validates your basic understanding of cloud services and how those services are provided with Azure. As organizations increasingly move to the cloud, professionals with cloud knowledge are in high demand across various roles.
//           </p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Cloud Support Associate (Entry Level) - ₹4-6 LPA</li>
//             <li>Junior Cloud Administrator - ₹5-8 LPA</li>
//             <li>Cloud Solutions Specialist - ₹6-10 LPA</li>
//             <li>IT Support Specialist - ₹4-7 LPA</li>
//             <li>Sales Engineer (Cloud) - ₹8-12 LPA</li>
//             <li>Business Analyst (Cloud) - ₹6-9 LPA</li>
//           </ul>
//         </div>
//       </div>
//     ),
//     Practice: <Practice course={"Microsoft"} subTopic={"MicrosoftAzureFundamentals"} />,
//     FAQ: (
//       <div className="space-y-6">
//         <div className="border-b pb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleAnswer(0)}
//           >
//             <h3 className="text-lg font-semibold">
//               Do I need programming experience for the AZ-900 certification?
//             </h3>
//             {selectedQuestion === 0 ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </div>
//           {selectedQuestion === 0 && (
//             <div className="mt-2 text-gray-700">
//               No, the AZ-900 certification doesn't require any programming experience. It focuses on fundamental cloud concepts and Azure services rather than coding or development. It's designed to be accessible to beginners with basic IT knowledge.
//             </div>
//           )}
//         </div>

//         <div className="border-b pb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleAnswer(1)}
//           >
//             <h3 className="text-lg font-semibold">
//               How long does it take to prepare for the AZ-900 exam?
//             </h3>
//             {selectedQuestion === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </div>
//           {selectedQuestion === 1 && (
//             <div className="mt-2 text-gray-700">
//               Most students can prepare for and pass the AZ-900 exam within 2-4 weeks of dedicated study. The preparation time depends on your prior knowledge of cloud computing concepts and your familiarity with IT terminology. Our structured course content is designed to be completed in 20-25 hours of learning time.
//             </div>
//           )}
//         </div>

//         <div className="border-b pb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleAnswer(2)}
//           >
//             <h3 className="text-lg font-semibold">
//               Is the AZ-900 certification valuable for non-IT professionals?
//             </h3>
//             {selectedQuestion === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </div>
//           {selectedQuestion === 2 && (
//             <div className="mt-2 text-gray-700">
//               Absolutely! The AZ-900 certification is valuable for many non-IT roles, including sales professionals, business analysts, project managers, and executives who need to understand cloud concepts to make informed decisions about technology investments and vendor relationships.
//             </div>
//           )}
//         </div>

//         <div className="border-b pb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleAnswer(3)}
//           >
//             <h3 className="text-lg font-semibold">
//               Does the AZ-900 certification expire?
//             </h3>
//             {selectedQuestion === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </div>
//           {selectedQuestion === 3 && (
//             <div className="mt-2 text-gray-700">
//               No, the AZ-900 certification does not expire. However, as Azure services evolve, it's recommended to stay updated with the latest features and functionalities through continuous learning and potentially pursuing more advanced certifications.
//             </div>
//           )}
//         </div>

//         <div className="border-b pb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleAnswer(4)}
//           >
//             <h3 className="text-lg font-semibold">
//               What's the difference between AZ-900 and other Azure certifications?
//             </h3>
//             {selectedQuestion === 4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
//           </div>
//           {selectedQuestion === 4 && (
//             <div className="mt-2 text-gray-700">
//               AZ-900 is a fundamentals certification that provides a broad overview of cloud concepts and Azure services. It serves as an entry point before moving to role-based certifications like AZ-104 (Azure Administrator), AZ-204 (Azure Developer), or AZ-303/304 (Azure Solutions Architect), which are more specialized and require deeper technical knowledge.
//             </div>
//           )}
//         </div>
//       </div>
//     ),
//     Reviews: (
//       <div className="space-y-6">
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <div className="flex items-center mb-2">
//             <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
//               R
//             </div>
//             <div>
//               <h4 className="font-semibold">Rahul Sharma</h4>
//               <div className="flex text-yellow-400">
//                 ★★★★★
//               </div>
//             </div>
//           </div>
//           <p className="text-gray-700">
//             "Excellent course for beginners! The content is well-structured and the practice tests really helped me prepare for the AZ-900 exam. I passed on my first attempt!"
//           </p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <div className="flex items-center mb-2">
//             <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
//               P
//             </div>
//             <div>
//               <h4 className="font-semibold">Priya Patel</h4>
//               <div className="flex text-yellow-400">
//                 ★★★★★
//               </div>
//             </div>
//           </div>
//           <p className="text-gray-700">
//             "As someone with no cloud experience, this course was perfect. The instructors explain complex concepts in simple terms and the hands-on labs are very helpful."
//           </p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <div className="flex items-center mb-2">
//             <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
//               A
//             </div>
//             <div>
//               <h4 className="font-semibold">Amit Kumar</h4>
//               <div className="flex text-yellow-400">
//                 ★★★★☆
//               </div>
//             </div>
//           </div>
//           <p className="text-gray-700">
//             "Great foundation course! The practice questions are very similar to the actual exam. Highly recommended for anyone starting their cloud journey."
//           </p>
//         </div>
//       </div>
//     ),
//   };

//   return (
//     <div className="bg-[#F9F9F9] overflow-hidden">
//       <AddToCartButton />
      
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-800 to-cyan-600 py-20 px-4">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2 text-white mb-8 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Microsoft Azure Fundamentals (AZ-900)
//             </h1>
//             <p className="text-xl md:text-2xl mb-6">
//               Learn cloud concepts and Azure services to kickstart your cloud career
//             </p>
//             <div className="flex items-center space-x-4">
//               <span className="bg-white text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
//                 Beginner Level
//               </span>
//               <span className="bg-white text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
//                 No prior experience required
//               </span>
//             </div>
//           </div>
//           <div className="md:w-1/3">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
//               alt="Microsoft Azure Logo"
//               className="w-full h-auto bg-white p-6 rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main Content */}
//           <div className="lg:w-2/3">
//             <Link to="/Microsoft">
//               <button className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition duration-300">
//                 <IoMdArrowRoundBack className="mr-2" />
//                 Back to Microsoft Courses
//               </button>
//             </Link>

//             {/* Tabs */}
//             <div className="mb-8 border-b border-gray-200">
//               <nav className="flex space-x-8">
//                 {Object.keys(tabsData).map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`pb-4 font-medium transition-colors duration-200 ${
//                       activeTab === tab
//                         ? "border-b-2 border-blue-600 text-blue-600"
//                         : "text-gray-500 hover:text-gray-700"
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* Tab Content */}
//             <div className="mb-8">
//               {tabsData[activeTab]}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:w-1/3">
//             <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
//               <h3 className="text-2xl font-bold mb-4">Course Details</h3>
//               <div className="space-y-4 mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Duration:</span>
//                   <span className="font-medium">20-25 hours</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Level:</span>
//                   <span className="font-medium">Beginner</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Format:</span>
//                   <span className="font-medium">Self-paced</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Certificate:</span>
//                   <span className="font-medium">Included</span>
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <h4 className="text-xl font-bold mb-2">₹1,599</h4>
//                 <p className="text-gray-600 text-sm mb-4">One-time payment</p>
//                 <button
//                   onClick={handleAddToCart}
//                   className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300 mb-3"
//                 >
//                   Add to Cart
//                 </button>
//                 {confirmationMessage && (
//                   <p className="text-green-600 text-sm mt-2 text-center mb-3">
//                     Added to cart successfully!
//                   </p>
//                 )}
                
//                 {/* Voucher Purchase Button */}
//                 <VoucherButton 
//                   course="Microsoft" 
//                   subCourse="MicrosoftAzureFundamentals"
//                   className="w-full justify-center"
//                 />
//               </div>

//               <div className="border-t pt-6">
//                 <h4 className="font-semibold mb-3">What's Included:</h4>
//                 <ul className="space-y-2 text-sm text-gray-700">
//                   <li className="flex items-start">
//                     <svg
//                       className="h-4 w-4 text-blue-600 mt-0.5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span>Lifetime access to course materials</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       className="h-4 w-4 text-blue-600 mt-0.5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span>Hands-on labs with Azure services</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       className="h-4 w-4 text-blue-600 mt-0.5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span>5 practice tests with detailed explanations</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       className="h-4 w-4 text-blue-600 mt-0.5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span>Expert instructor support</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       className="h-4 w-4 text-blue-600 mt-0.5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span>Guidance for setting up free Azure account</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MicrosoftAzureFundamentals; 