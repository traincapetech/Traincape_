import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../components/CartContext";
import metalogo from "../../assets/metalogo2.png";
import digitalMarketingImg from "../../assets/METAcard1.png";
import AddToCartButton from "../../components/AddToCartButton";

const MetaDigitalMarketing = () => {
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
      id: "meta1",
      title: "Meta Certified Digital Marketing Associate",
      price: 1699,
      image: digitalMarketingImg,
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

      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
        <img
          src={metalogo}
          alt="Meta Logo"
            className="h-40 w-32 mx-auto md:mx-0 xl:pl-20 xl:w-auto transition-all duration-500 hover:scale-105"
        />
          <h1 className="text-2xl md:text-xl lg:text-4xl font-bold text-indigo-900 text-center md:text-left xl:pl-20 mt-4">
          Meta Certified Digital Marketing <br />
            <span className="text-blue-600">Associate</span>
        </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master the fundamentals of digital marketing and learn to create effective campaigns across Meta platforms.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Certification Course</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
          <img
              className="w-36 h-20 object-contain"
            src={digitalMarketingImg}
            alt="Digital Marketing Logo"
          />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-indigo-700 mb-4 text-center md:text-left">
            Meta Certified Digital Marketing Associate
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,699</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Bestseller</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Meta Certified Digital Marketing Associate
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,699</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹2,499</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">32% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 2 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full lifetime access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Certificate of completion
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            24/7 support
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-indigo-600 border border-indigo-600 py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Confirmation Message */}
        {showConfirmation && (
          <div className="absolute -top-12 left-0 right-0 mx-auto w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-center text-sm font-medium">
            Item Added to Cart! 🎉
          </div>
        )}
      </div>

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
            The Meta Certified Digital Marketing Associate certification is designed for entry-level marketing professionals, advertising and marketing students, interns, and career professionals looking to expand their skillset or switch roles. This certification validates your understanding of fundamental digital marketing concepts and the value of advertising on Meta technologies.
                </p>
                <p className="text-gray-700 mb-4">
                  In today's digital landscape, marketing professionals with expertise in Meta's platforms are in high demand. This certification is your first step toward a rewarding career in digital marketing, equipping you with practical skills and knowledge that employers value.
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
                        <strong>Sales Note:</strong> This course appeals to beginners and career-switchers looking to enter digital marketing. Highlight the industry recognition of Meta certifications and the immediate applicability to real-world job roles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-indigo-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600">10-12 weeks (self-paced)</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-indigo-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner to Intermediate</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-indigo-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Job Relevance</h3>
                  <p className="text-gray-600">Digital Marketing, Social Media</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Fundamentals of digital marketing strategy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Meta advertising platforms and formats</span>
            </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Campaign setup and optimization</span>
            </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Social media marketing best practices</span>
            </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Audience targeting and segmentation</span>
            </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Metrics and analytics for campaign performance</span>
            </li>
          </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With the Meta Certified Digital Marketing Associate certification, you'll be qualified for roles such as:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Social Media Specialist</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹3.5-5.5 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Digital Marketing Coordinator</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹4-6 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Marketing Assistant</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹3-4.5 LPA</p>
                  </div>
                </div>
              </div>
              
              {/* Benefits Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm border p-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Industry Recognition</h3>
                        <p className="mt-2 text-gray-600">Earn a globally recognized credential that demonstrates your digital marketing expertise and sets you apart in the competitive job market.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border p-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Career Advancement</h3>
                        <p className="mt-2 text-gray-600">Position yourself for roles in digital marketing, social media management, and online advertising.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border p-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Practical Skills</h3>
                        <p className="mt-2 text-gray-600">Gain hands-on knowledge of Meta's advertising platforms, including Facebook, Instagram, Messenger, and WhatsApp.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border p-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Competitive Advantage</h3>
                        <p className="mt-2 text-gray-600">Stand out to employers by demonstrating specialized knowledge of Meta's advertising ecosystem.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Exam Details Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Details</h2>
                <div className="bg-white shadow-sm rounded-lg border overflow-hidden">
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-700 mb-2">Format & Structure</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span><strong>Exam Format:</strong> 50 multiple-choice questions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span><strong>Duration:</strong> 75 minutes</span>
            </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span><strong>Passing Score:</strong> 700 out of 1000 points (70%)</span>
            </li>
                      </ul>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-700 mb-2">Additional Information</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span><strong>Languages:</strong> English only</span>
            </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span><strong>Delivery Method:</strong> Online proctored exam</span>
            </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span><strong>Validity:</strong> 1 year (requires renewal)</span>
            </li>
          </ul>
                    </div>
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
                What are the prerequisites for this certification?
              </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
            </div>
            {selectedQuestion === 0 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                There are no formal prerequisites for taking the Meta Certified Digital Marketing Associate exam. However, it's recommended that candidates have basic knowledge of digital marketing concepts and familiarity with Meta platforms (Facebook, Instagram, etc.).
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
                How can I prepare for the certification exam?
              </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
            </div>
            {selectedQuestion === 1 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                Our Meta certification course provides comprehensive study materials, practice tests, and hands-on exercises to help you prepare. Meta also offers free resources through Meta Blueprint that cover all exam topics.
              </p>
                      </div>
            )}
                  </div>

            {/* FAQ Question 3 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(2)}
            >
              <p className="font-semibold">
                How long is the certification valid?
              </p>
            </div>
            {selectedQuestion === 2 && (
              <p className="mt-2 text-gray-700">
                The Meta Certified Digital Marketing Associate certification is valid for one year from the date of passing the exam. After that, you'll need to recertify to maintain your certification status.
              </p>
            )}

            {/* FAQ Question 4 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(3)}
            >
              <p className="font-semibold">
                What job roles is this certification suitable for?
              </p>
            </div>
            {selectedQuestion === 3 && (
              <p className="mt-2 text-gray-700">
                This certification is ideal for social media specialists, digital marketing coordinators, marketing assistants, junior marketing roles, and students or professionals looking to enter the digital marketing field.
              </p>
            )}

            {/* FAQ Question 5 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(4)}
            >
              <p className="font-semibold">
                How will this certification help my career?
              </p>
            </div>
            {selectedQuestion === 4 && (
              <p className="mt-2 text-gray-700">
                This certification can help you qualify for entry-level marketing positions, demonstrate your commitment to professional development, and provide you with practical skills valued by employers across industries.
              </p>
            )}

            {/* FAQ Question 6 */}
            <div
              className="mt-2 bg-gray-100 p-3 rounded-md cursor-pointer"
              onClick={() => toggleAnswer(5)}
            >
              <p className="font-semibold">
                Can I display this certification on my resume and LinkedIn profile?
              </p>
            </div>
            {selectedQuestion === 5 && (
              <p className="mt-2 text-gray-700">
                Absolutely! Once certified, you'll receive a digital badge that you can showcase on your LinkedIn profile, resume, and other professional platforms to highlight your achievement and verified skills.
              </p>
            )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaDigitalMarketing; 