import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const MicrosoftPowerPlatformFundamentals = () => {
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
      id: "microsoft-power-platform-fundamentals",
      title: "Microsoft Power Platform Fundamentals (PL-900)",
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
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-100 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <img
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="Microsoft Power Platform Fundamentals Logo"
            className="h-28 w-28 mx-auto md:mx-0 xl:pl-20 transition-all duration-500 hover:scale-105"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Microsoft Power Platform Fundamentals <br />
            <span className="text-purple-600">(PL-900) Certification</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Learn the business value of Power Platform and the foundational components: Power Apps, Power Automate, Power BI, and Power Virtual Agents.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Fundamentals Certification</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-36 h-20 object-contain"
              src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
              alt="Microsoft Power Platform Fundamentals Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-purple-700 mb-4 text-center md:text-left">
            Microsoft Power Platform Fundamentals (PL-900)
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,499</h5>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">High Demand</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Microsoft Power Platform Fundamentals (PL-900)
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹2,499</p>
          <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded">40% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 3 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full exam preparation
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Practice tests included
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Hands-on Power Platform labs
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-purple-600 border border-purple-600 py-3 px-4 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="absolute -top-12 left-0 right-0 mx-auto w-full bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center text-sm font-medium">
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
                className="inline-block p-4 text-purple-600 border-b-2 border-purple-600 active"
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
                  Microsoft Power Platform Fundamentals (PL-900) is designed for candidates looking to build solutions for their organizations using Microsoft Power Platform. This certification validates that candidates understand the capabilities, limits, and business value of Microsoft Power Platform components: Power Apps, Power Automate, Power BI, and Power Virtual Agents.
                </p>
                <p className="text-gray-700 mb-4">
                  With Microsoft Power Platform, you can create powerful business solutions by connecting with your existing data sources and building applications without writing code. This fundamentals certification is a great starting point for anyone looking to harness the potential of low-code/no-code solutions for business process automation, data analysis, and more.
                </p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-purple-700">
                        <strong>Industry Insight:</strong> With the growing need for business process automation and the shortage of traditional developers, low-code development platforms are becoming increasingly popular in India. According to industry reports, low-code platform adoption is growing at approximately 25% annually in India. Organizations across industries are leveraging these tools to digitize processes, improve operational efficiency, and empower non-technical business users to create solutions. The PL-900 certification validates your understanding of Microsoft's low-code/no-code tools, opening opportunities in businesses undergoing digital transformation. Power Platform professionals in India can earn between ₹5-10 LPA depending on experience and skill level, with most roles available in IT services, banking, retail, healthcare, and manufacturing sectors that are embracing digital transformation.
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
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Power Platform components and business value</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating Power Apps canvas apps and model-driven apps</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Building automated workflows with Power Automate</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating business insights with Power BI</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Building chatbots with Power Virtual Agents</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Data sources and connectors in Power Platform</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  The PL-900 certification is an excellent starting point for these roles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Business Analyst</strong> (₹4,50,000-8,00,000 per year)</li>
                  <li><strong>Power Platform Developer</strong> (₹5,00,000-10,00,000 per year)</li>
                  <li><strong>Business Process Consultant</strong> (₹6,00,000-12,00,000 per year)</li>
                  <li><strong>Citizen Developer</strong> (varies by primary role)</li>
                </ul>
                <p className="text-gray-700">
                  The PL-900 certification provides a foundation for more advanced Power Platform certifications and related roles. As organizations continue to embrace low-code solutions for digital transformation, professionals with Power Platform skills are in high demand across various industries in India.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Path</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended next certifications:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft Certified: Power Platform App Maker Associate (PL-100)</p>
                        <p className="text-sm text-gray-600">For those who design, develop, secure, and troubleshoot Power Apps</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft Certified: Power Platform Developer Associate (PL-400)</p>
                        <p className="text-sm text-gray-600">For those who design, develop, secure, and troubleshoot Power Platform solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-800">Microsoft Certified: Power BI Data Analyst Associate (PL-300)</p>
                        <p className="text-sm text-gray-600">For those who enable businesses to maximize the value of their data assets using Power BI</p>
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
                      <span className="font-medium text-gray-800">Do I need programming experience for Power Platform certification?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        No, the PL-900 certification is specifically designed for individuals with no programming background. Microsoft Power Platform is built as a low-code/no-code solution, meaning you can create applications, automate processes, analyze data, and build chatbots with minimal to no coding. The certification focuses on understanding the capabilities and business value of Power Platform components rather than deep technical implementation. While some basic understanding of data concepts and business processes is helpful, no formal programming experience is required. This makes the certification accessible to business users, analysts, and others who want to solve business problems using technology but don't have traditional development skills.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">How can Power Platform skills benefit my career in India?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        In India's rapidly evolving digital landscape, Power Platform skills offer several career advantages. First, with the government's Digital India initiative and businesses of all sizes undergoing digital transformation, there's growing demand for professionals who can quickly develop business applications without extensive coding. This has created a skills gap that Power Platform certified professionals can fill. Second, Power Platform skills make you versatile across industries - from IT services companies implementing solutions for clients to enterprises looking to empower their business teams. Third, these skills can complement your existing role whether you're in business analysis, project management, or IT support, making you more valuable to employers. Many Indian companies are adopting Microsoft's business tools, and having employees who can leverage Power Platform to improve processes, analyze data, and build solutions creates significant business value. As an example, TCS, Infosys, and other major IT companies have dedicated Microsoft practice units that regularly seek Power Platform skills.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">What are the practical applications of Power Platform in businesses?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Microsoft Power Platform offers numerous practical applications that Indian businesses are leveraging to improve operations and customer experiences. Some common examples include: 1) Custom approval workflows for leave requests, expense claims, and document approvals, replacing manual paper-based processes in many organizations. 2) Field service mobile apps for technicians to collect data, capture signatures, and submit reports while on-site with customers. 3) Customer feedback collection and analysis systems that integrate with existing CRM systems. 4) HR onboarding applications that automate document collection, training assignments, and progress tracking. 5) Inventory management solutions that track stock levels and trigger reorder notifications. 6) Executive dashboards that visualize key performance indicators from multiple data sources. 7) Customer service chatbots that handle common queries and requests. These solutions can be built much faster and at lower cost than traditional custom development, allowing organizations to quickly adapt to changing business needs and marketplace conditions.
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
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 font-bold mr-3">VP</div>
                      <div>
                        <h4 className="font-semibold">Vikram Patel</h4>
                        <p className="text-sm text-gray-500">Business Analyst, Bangalore</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "As a business analyst without a technical background, I was often dependent on our IT team to create solutions for data collection and analysis. After getting PL-900 certified, I can now create my own apps and workflows using Power Platform. In just three months, I've built five applications that have significantly improved our field data collection processes. My organization has recognized this value, and I received a 15% salary increase during my last review specifically citing my Power Platform skills as a key factor."
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 font-bold mr-3">NS</div>
                      <div>
                        <h4 className="font-semibold">Neha Sharma</h4>
                        <p className="text-sm text-gray-500">HR Specialist, Mumbai</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Our HR department was struggling with managing employee onboarding, which involved multiple systems and manual processes. After completing the PL-900 certification, I was able to build a comprehensive employee onboarding solution using Power Apps and Power Automate. The solution automates document collection, approval workflows, and training assignments, reducing our onboarding time from two weeks to just three days. The certification not only helped me solve a critical business problem but also opened up new career opportunities. I've since been promoted to lead our HR digitization initiatives and frequently showcase our solutions to other departments."
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

export default MicrosoftPowerPlatformFundamentals; 