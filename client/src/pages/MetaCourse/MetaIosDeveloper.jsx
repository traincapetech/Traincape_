import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const MetaIosDeveloper = () => {
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
      id: "meta4",
      title: "Meta iOS Developer Professional Certificate",
      price: 1999,
      image: "https://img.icons8.com/color/480/null/meta--v1.png", // Using an external icon to avoid missing assets
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
      <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <img
            src="https://img.icons8.com/color/480/null/meta--v1.png"
            alt="Meta Logo"
            className="h-28 w-28 mx-auto md:mx-0 xl:pl-20 transition-all duration-500 hover:scale-105"
          />
          <h1 className="text-2xl md:text-xl lg:text-4xl font-bold text-blue-800 text-center md:text-left xl:pl-20 mt-4">
            Meta iOS Developer <br />
            <span className="text-indigo-600">Professional Certificate</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master iOS development with Swift and join the exclusive ecosystem of Apple developers creating innovative apps for millions of users worldwide.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-500 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Professional Certificate</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-36 h-20 object-contain"
              src="https://img.icons8.com/color/480/null/meta--v1.png"
              alt="Meta Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-blue-800 mb-4 text-center md:text-left">
            Meta iOS Developer Professional Certificate
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,999</h5>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Premium</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Meta iOS Developer Professional Certificate
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,999</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹3,599</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">44% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 7 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full lifetime access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Certificate of completion
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            24/7 support
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="absolute -top-12 left-0 right-0 mx-auto w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center text-sm font-medium">
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
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 active"
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
                  The Meta iOS Developer Professional Certificate is a comprehensive program designed to prepare you for a career in iOS app development. Crafted by industry experts at Meta, this program covers every aspect of iOS development with Swift.
                </p>
                <p className="text-gray-700 mb-4">
                  Throughout this program, you'll gain hands-on experience building sophisticated iOS applications for iPhone and iPad. You'll master Swift programming, UIKit and SwiftUI frameworks, Core Data for persistence, and best practices for publishing to the App Store.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        <strong>Sales Note:</strong> While Android dominates in market share, iOS development offers premium compensation and project opportunities in India. Companies developing applications for global markets, multinational corporations, startups targeting higher-income demographics, and agencies serving overseas clients all prioritize iOS expertise. iOS developers typically command 10-20% higher salaries than their Android counterparts, with compensation ranging from ₹5-14 LPA for entry and mid-level positions. Major cities like Bangalore, Mumbai, Pune, and Gurgaon have the highest demand for iOS talent, particularly for fintech, luxury retail, and enterprise applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600">6-8 months, self-paced</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner to Intermediate</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Job Relevance</h3>
                  <p className="text-gray-600">iOS Development, Mobile Apps</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Swift programming language</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>UIKit and SwiftUI</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>iOS app architecture</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Core Data and persistence</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Network requests and APIs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>App Store submission process</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With a Meta iOS Developer Professional Certificate, you'll be prepared for roles such as:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">iOS Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹5-14 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Swift Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹6-15 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Mobile App Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹5.5-16 LPA</p>
                  </div>
                </div>
              </div>
              
              {/* Certification Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of this Certification</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Industry Recognition</h3>
                    <p className="text-gray-700">
                      A Meta Professional Certificate is highly regarded by employers in the mobile development industry, particularly for iOS roles. This credential validates your skills in Swift programming and iOS development, demonstrating your ability to create high-quality applications for Apple's ecosystem.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Premium Job Opportunities</h3>
                    <p className="text-gray-700">
                      iOS developers typically command higher salaries compared to many other developer roles. With this certification, you'll be well-positioned for premium opportunities in enterprise mobile development, fintech applications, e-commerce platforms, and more. iOS expertise is particularly valued for projects targeting global markets and higher-end demographics.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {/* FAQ Question 1 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAnswer(0)}
                    >
                      <p className="font-semibold text-gray-900">
                        Do I need a Mac to complete this certification?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 0 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          Yes, a Mac computer is required for iOS development. Apple's development tools, including Xcode (the integrated development environment for iOS apps), are only available for macOS. You'll need a Mac running a recent version of macOS to complete the practical exercises and build iOS applications. If you don't currently own a Mac, you might consider options like Mac mini, which is relatively more affordable, or explore cloud-based Mac services for development.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* FAQ Question 2 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAnswer(1)}
                    >
                      <p className="font-semibold text-gray-900">
                        What kind of iOS apps will I build during this program?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 1 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          Throughout this program, you'll build several real-world iOS applications that showcase different aspects of iOS development. Projects include a task management app with Core Data for persistence, a social networking app that integrates with REST APIs, a media player that utilizes AVFoundation, and an e-commerce application with user authentication and in-app purchases. Each project progressively builds your skills, incorporating new iOS frameworks and design patterns. By the end of the certification, you'll have a diverse portfolio of iOS applications that demonstrate your ability to create professional-quality apps for iPhone and iPad.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* FAQ Question 3 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAnswer(2)}
                    >
                      <p className="font-semibold text-gray-900">
                        Is iOS development in demand in India?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 2 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          Yes, iOS development is in high demand in India despite Android's larger market share. Many factors contribute to this demand: 1) Companies developing products for global markets require iOS expertise; 2) Multinational corporations with offices in India often need iOS developers for their mobile teams; 3) Premium and luxury brands targeting higher-income demographics prioritize iOS apps; 4) Indian startups seeking global venture capital often develop for iOS first or simultaneously with Android; 5) Many outsourcing and services companies in India develop iOS applications for overseas clients; 6) The financial sector, especially fintech companies and banks, strongly invests in iOS development. While there are fewer iOS developer positions compared to Android, they often offer higher compensation and more specialized career paths with less competition.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Testimonials */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border p-5 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-lg mr-3">S</div>
                      <div>
                        <h4 className="font-semibold">Suresh K.</h4>
                        <p className="text-sm text-gray-500">Web Developer to iOS Developer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "I was working as a React developer but wanted to transition to iOS development to expand my career options. The Meta iOS Developer certification provided a structured path to gain the skills I needed. The Swift programming sections were excellent, and I appreciated the hands-on approach throughout the course. Within three months of completing the certification, I landed a position at a multinational company in Bangalore as an iOS developer with a 40% higher salary than my previous role."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border p-5 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-lg mr-3">P</div>
                      <div>
                        <h4 className="font-semibold">Priya M.</h4>
                        <p className="text-sm text-gray-500">Computer Science Graduate</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "As a recent graduate, I was looking for ways to specialize my skills beyond what I learned in my degree program. The Meta iOS Developer certification gave me the perfect opportunity to focus on a high-demand skill. The projects I built during the course became the highlight of my portfolio. I received interview calls from multiple companies in Mumbai and Pune, and ultimately accepted an offer from a fintech startup where I'm now developing an iOS app used by thousands of users for financial planning and investments."
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

export default MetaIosDeveloper; 