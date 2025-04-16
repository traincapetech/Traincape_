import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const MicrosoftSecurityFundamentals = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCartContext();

  const toggleAnswer = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    const product = {
      id: "microsoft-security-fundamentals",
      title: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
      price: 1499,
      image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      quantity: 1,
    };
    addToCart(product);
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <>
      <AddToCartButton />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 via-pink-100 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <img
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="Microsoft Security Fundamentals Logo"
            className="h-28 w-28 mx-auto md:mx-0 xl:pl-20 transition-all duration-500 hover:scale-105"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Microsoft Security Fundamentals <br />
            <span className="text-red-600">(SC-900) Certification</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Build foundational knowledge of security, compliance, and identity concepts with Microsoft's cloud-based solutions and related Microsoft services.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Fundamentals Certification</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-36 h-20 object-contain"
              src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
              alt="Microsoft Security Fundamentals Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-red-700 mb-4 text-center md:text-left">
            Microsoft Security, Compliance & Identity Fundamentals (SC-900)
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,499</h5>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">High Demand</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Microsoft Security Fundamentals (SC-900)
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹2,499</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">40% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 3 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full exam preparation
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Practice tests included
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Hands-on security lab exercises
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-red-600 border border-red-600 py-3 px-4 rounded-lg font-medium hover:bg-red-50 transition-all duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="absolute -top-12 left-0 right-0 mx-auto w-full bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center text-sm font-medium">
            Item Added to Cart! 🎉
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="h-full px-4 md:px-[3rem] lg:px-[6rem] py-10">
        <div className="max-w-6xl mx-auto mt-6 bg-white p-0 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="bg-gray-50 border-b">
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500">
              <button 
                className="inline-block p-4 text-red-600 border-b-2 border-red-600 active"
                aria-current="page"
              >
                Overview
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                Curriculum
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                Career Paths
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                FAQ
              </button>
              <button className="inline-block p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-4">
                  The Microsoft Security, Compliance, and Identity Fundamentals (SC-900) certification is designed for those who wish to demonstrate foundational knowledge of security, compliance, and identity across cloud-based and related Microsoft services. This entry-level certification validates your understanding of the fundamental concepts in security, compliance, and identity.
                </p>
                <p className="text-gray-700 mb-4">
                  This certification course familiarizes you with security, compliance, and identity concepts and related Microsoft cloud-based solutions. It's ideal for IT professionals, business stakeholders, students, or anyone who wants to gain a basic understanding of security, compliance, and identity solutions in Microsoft Azure and Microsoft 365 environments.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Sales Note:</strong> Cybersecurity skills are in critical demand across India, with the country experiencing a significant cybersecurity workforce gap of over 500,000 professionals. The SC-900 certification is particularly valuable in the Indian context, where organizations are increasingly investing in security solutions amidst rising cyber threats. Recent reports indicate that security professionals in India earn 25-35% higher salaries than their non-certified peers, with starting salaries for certified security professionals ranging from ₹5-8 LPA. Major Indian IT service providers like TCS, Infosys, and Wipro, as well as banks, financial institutions, and government agencies are actively seeking security-certified professionals. This certification provides an excellent foundation for those looking to enter the rapidly growing cybersecurity sector in India, which is experiencing annual growth of approximately 15-20% in job opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Duration</h3>
                  <p className="text-gray-600">4-6 weeks (self-paced)</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner (No prerequisites)</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Exam Format</h3>
                  <p className="text-gray-600">40-60 questions, 60 minutes</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Security, compliance, and identity concepts</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft identity and access management solutions</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft security solutions</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft compliance solutions</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft Defender, Sentinel, and Purview</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Azure Active Directory and Azure AD Identity Protection</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  The SC-900 certification is an excellent starting point for these roles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Junior Security Analyst</strong> (₹4,00,000-7,00,000 per year)</li>
                  <li><strong>IT Security Support Specialist</strong> (₹3,50,000-6,50,000 per year)</li>
                  <li><strong>Security Operations Analyst</strong> (₹5,00,000-9,00,000 per year)</li>
                  <li><strong>Compliance Administrator</strong> (₹4,50,000-8,00,000 per year)</li>
                </ul>
                <p className="text-gray-700">
                  While SC-900 is an entry-level certification, it provides a solid foundation for pursuing more advanced Microsoft security certifications like Microsoft Certified: Security Operations Analyst Associate (SC-200) or Microsoft Certified: Identity and Access Administrator Associate (SC-300), which can lead to higher-paying roles in security and identity management.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Path</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended next certifications:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft Certified: Security Operations Analyst Associate (SC-200)</p>
                        <p className="text-sm text-gray-600">For those who work with Microsoft Defender and Microsoft Sentinel to manage security operations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft Certified: Identity and Access Administrator Associate (SC-300)</p>
                        <p className="text-sm text-gray-600">For those who implement and manage Microsoft identity and access management solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft Certified: Information Protection Administrator Associate (SC-400)</p>
                        <p className="text-sm text-gray-600">For those who implement information protection, data governance, and compliance solutions</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Format</h3>
                    <p className="text-gray-600">Multiple choice and multi-select questions</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Duration</h3>
                    <p className="text-gray-600">60 minutes (40-60 questions)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Passing Score</h3>
                    <p className="text-gray-600">700 out of 1000 points (70%)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Languages</h3>
                    <p className="text-gray-600">English, Japanese, Chinese, Korean, and more</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(0)}
                    >
                      <span className="font-medium text-gray-800">Is the SC-900 certification suitable for beginners in cybersecurity?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Yes, the SC-900 certification is specifically designed for beginners with no prior cybersecurity experience. It introduces fundamental concepts related to security, compliance, and identity in a clear, accessible manner. The certification covers basic terminology, principles, and Microsoft's security, compliance, and identity solutions without requiring deep technical knowledge. It's an excellent starting point for those looking to enter the cybersecurity field or for professionals in adjacent IT areas who want to understand security concepts. The exam focuses on conceptual knowledge rather than hands-on implementation skills, making it accessible to newcomers.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">How does the SC-900 certification benefit IT professionals in India?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        In India's rapidly evolving IT landscape, the SC-900 certification provides several distinct benefits. First, with the implementation of data protection regulations and increased cybersecurity concerns, organizations across India are investing heavily in security solutions, creating a high demand for professionals with security knowledge. The certification helps IT professionals transition into security roles, which typically offer 20-30% higher compensation than general IT positions. Additionally, many Indian IT service companies that provide security services to global clients specifically look for candidates with Microsoft security certifications. The SC-900 also serves as an entry point to more advanced security certifications, creating a clear career advancement path in the cybersecurity domain, which is experiencing significant growth in India due to the digital transformation initiatives across public and private sectors.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">How frequently does the SC-900 exam content get updated?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Microsoft typically updates the SC-900 exam content approximately once or twice a year to reflect changes in Microsoft's security, compliance, and identity solutions, as well as evolving cybersecurity trends. The updates can include new features, services, or changes to best practices. While the core concepts remain relatively stable, the specific technologies and solutions covered may change as Microsoft introduces new capabilities. When preparing for the exam, it's important to use the most current study materials and review the latest exam outline on Microsoft's official certification page. The exam's objective domain list will indicate when the exam was last updated or when updates are scheduled. Unlike some role-based certifications, the SC-900 certification itself does not expire once earned, though keeping your knowledge current is always recommended.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold mr-3">RK</div>
                      <div>
                        <h4 className="font-semibold">Rahul Kumar</h4>
                        <p className="text-sm text-gray-500">Security Analyst, Delhi</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Coming from a general IT background with no security experience, I was hesitant about entering the cybersecurity field. The SC-900 certification provided the perfect entry point. The course structured complex security concepts in an accessible way, and within three months of certification, I transitioned from a general IT role to a junior security analyst position at a financial institution in Delhi. The certification helped me demonstrate my commitment to security and gave me the vocabulary to confidently discuss security issues in my interviews."
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold mr-3">AM</div>
                      <div>
                        <h4 className="font-semibold">Ananya Mehta</h4>
                        <p className="text-sm text-gray-500">Compliance Officer, Mumbai</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "As a compliance professional in the banking sector, I needed to understand how Microsoft's compliance solutions could help our organization meet regulatory requirements. The SC-900 certification gave me insights into Microsoft's compliance tools and how they integrate with security measures. This knowledge was invaluable when our organization migrated to Microsoft 365. Being certified helped bridge the gap between our legal, compliance, and IT departments, improving our overall security posture. I recommend this certification to anyone working in regulated industries who needs to understand the technical aspects of compliance."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicrosoftSecurityFundamentals; 