import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const Microsoft365FundamentalsCourse = () => {
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
      id: "microsoft-365-fundamentals",
      title: "Microsoft 365 Fundamentals (MS-900)",
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
      <div className="relative bg-gradient-to-br from-teal-50 via-cyan-100 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <img
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="Microsoft 365 Fundamentals Logo"
            className="h-28 w-28 mx-auto md:mx-0 xl:pl-20 transition-all duration-500 hover:scale-105"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Microsoft 365 Fundamentals <br />
            <span className="text-teal-600">(MS-900) Certification</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Learn the essentials of Microsoft 365 cloud services, concepts of SaaS, and Microsoft 365 business value with this entry-level certification.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Fundamentals Certification</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-36 h-20 object-contain"
              src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
              alt="Microsoft 365 Fundamentals Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-teal-700 mb-4 text-center md:text-left">
            Microsoft 365 Fundamentals (MS-900)
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,499</h5>
            <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Entry Level</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Microsoft 365 Fundamentals (MS-900)
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹2,499</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">40% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 5 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-teal-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full exam preparation
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-teal-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Practice tests included
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-teal-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Hands-on Microsoft 365 exercises
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-teal-600 border border-teal-600 py-3 px-4 rounded-lg font-medium hover:bg-teal-50 transition-all duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="absolute -top-12 left-0 right-0 mx-auto w-full bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center text-sm font-medium">
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
                className="inline-block p-4 text-teal-600 border-b-2 border-teal-600 active"
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
                  Microsoft 365 Fundamentals (MS-900) is a foundational certification that validates your basic understanding of cloud services, specifically Microsoft 365 cloud service offerings. This entry-level certification is ideal for anyone wanting to demonstrate foundational knowledge of the productivity and collaboration tools provided by Microsoft 365.
                </p>
                <p className="text-gray-700 mb-4">
                  This certification course covers Microsoft 365 offerings and benefits, security, compliance, privacy, and pricing aspects. It's perfect for IT professionals, business owners, decision-makers, and anyone interested in learning how Microsoft 365 services can improve productivity and collaboration in their organization.
                </p>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-teal-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-teal-700">
                        <strong>Sales Note:</strong> In today's digital transformation era, Microsoft 365 proficiency is highly valued in Indian organizations of all sizes. Companies across sectors are adopting Microsoft 365 for productivity and collaboration, creating a strong demand for professionals who understand these tools. The MS-900 certification is particularly beneficial for IT support roles, business analysts, and sales professionals in India's corporate environment. According to industry reports, professionals with Microsoft certifications earn 15-20% higher salaries in IT support and administration roles. As Indian companies increasingly move from on-premises solutions to cloud-based services, this certification provides an excellent foundation for career advancement and specialized cloud service roles, especially in major IT hubs like Bangalore, Hyderabad, and Pune.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Duration</h3>
                  <p className="text-gray-600">3-5 weeks (self-paced)</p>
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
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft 365 cloud service offerings and concepts</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft 365 productivity apps and cloud services</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Security, compliance, privacy, and trust in Microsoft 365</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft 365 subscriptions, support, and pricing</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Microsoft Teams, SharePoint, Exchange, and OneDrive</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Cloud computing and deployment models (SaaS, IaaS, PaaS)</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  The MS-900 certification is an excellent starting point for these roles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Microsoft 365 Support Specialist</strong> (₹3,50,000-6,00,000 per year)</li>
                  <li><strong>Microsoft Product Specialist</strong> (₹4,00,000-7,00,000 per year)</li>
                  <li><strong>IT Help Desk Specialist</strong> (₹3,00,000-5,00,000 per year)</li>
                  <li><strong>Microsoft 365 Sales Consultant</strong> (₹4,50,000-8,00,000 per year)</li>
                </ul>
                <p className="text-gray-700">
                  While MS-900 is an entry-level certification, it provides a solid foundation for pursuing more advanced Microsoft certifications like Microsoft 365 Certified: Modern Desktop Administrator Associate or Microsoft 365 Certified: Enterprise Administrator Expert, which can lead to higher-paying roles in IT administration and management.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Path</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended next certifications:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft 365 Certified: Modern Desktop Administrator Associate</p>
                        <p className="text-sm text-gray-600">For those who deploy, configure, secure, manage, and monitor devices and client applications in an enterprise environment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft 365 Certified: Security Administrator Associate</p>
                        <p className="text-sm text-gray-600">For those who protect information in Microsoft 365 and on-premises environments</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft 365 Certified: Teams Administrator Associate</p>
                        <p className="text-sm text-gray-600">For those who configure, deploy, and manage Microsoft Teams workloads</p>
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
                      <span className="font-medium text-gray-800">Is technical experience required for the MS-900 certification?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        No, the MS-900 certification is designed for beginners and does not require prior technical experience with Microsoft 365. The certification covers foundational concepts and is accessible to non-technical professionals, business users, and those new to cloud services. It's ideal for individuals who want to gain a basic understanding of Microsoft 365 capabilities, regardless of their technical background. The exam focuses on concepts and basic knowledge rather than advanced technical skills or hands-on experience with the products.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">How long is the MS-900 certification valid?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        The Microsoft 365 Fundamentals (MS-900) certification does not expire. Once you earn it, you hold the certification indefinitely. This is different from many of Microsoft's role-based certifications, which typically require renewal every 1-2 years. However, as Microsoft 365 services and features evolve rapidly, it's recommended to keep your knowledge current through continuing education and staying informed about updates to Microsoft 365 products and services, even though the certification itself doesn't expire.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">How will MS-900 benefit me in an Indian workplace context?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        In Indian workplaces, Microsoft 365 is widely adopted across small, medium, and large enterprises, making the MS-900 certification particularly valuable. Many Indian companies are in the process of digital transformation, migrating from traditional office setups to cloud-based collaboration tools. Microsoft 365 skills are in high demand as organizations seek to improve efficiency and remote work capabilities. The certification can differentiate you in India's competitive job market, especially in IT support roles, business analysis positions, and administration jobs. Many Indian IT service companies that provide Microsoft 365 implementation and support services to global clients specifically look for candidates with Microsoft certifications. Additionally, with the growing focus on cybersecurity in Indian organizations, understanding the security aspects of Microsoft 365 covered in the MS-900 curriculum provides a valuable skill set in the local job market.
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
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 font-bold mr-3">AD</div>
                      <div>
                        <h4 className="font-semibold">Amit Desai</h4>
                        <p className="text-sm text-gray-500">IT Support Specialist, Mumbai</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "As someone working in IT support for a finance company in Mumbai, getting MS-900 certified significantly improved my value to the organization. Our company had just migrated to Microsoft 365, and the certification gave me the knowledge to effectively support users during the transition. Within months of earning the certification, I was promoted to team lead and received a 25% salary increase, as I became the go-to person for Microsoft 365 related issues."
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 font-bold mr-3">SJ</div>
                      <div>
                        <h4 className="font-semibold">Sneha Joshi</h4>
                        <p className="text-sm text-gray-500">Business Analyst, Bangalore</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Even though I work in a non-technical role as a business analyst, the MS-900 certification has been invaluable. It helped me understand the capabilities of Microsoft 365 tools, allowing me to better define requirements for our digital transformation projects. This knowledge has made me more effective in my role and opened doors to participate in technology implementation projects that were previously handled only by IT staff. The certification helped me bridge the gap between business needs and technological solutions."
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

export default Microsoft365FundamentalsCourse; 