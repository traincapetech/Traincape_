import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';
import tallyLogo from '../../assets/tally2.png';

const TallyEssentialLevel3 = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const handleAddToCart = () => {
    const product = {
      id: 'tally-essential-level3',
      name: 'Tally Essential Level 3',
      price: 999,
      image: tallyLogo,
      amount: 1,
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
      
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="fixed top-20 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          Item added to cart successfully!
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src={tallyLogo}
              alt="Tally Logo"
              className="h-24 w-36 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Tally Essential Level 3 <br />
            <span className="text-blue-600">Advanced Financial Management and Reporting</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Advanced Financial Management and Reporting with Tally Prime
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Advanced Certification</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-40 h-20 object-contain"
              src={tallyLogo}
              alt="Tally Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-blue-700 mb-4 text-center md:text-left">
            Advanced Financial Management
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹999</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">33% Off</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Tally Essential Level 3
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹999</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹1,499</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">33% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 3 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            Advanced financial reporting
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            Multi-currency support
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            Tally certified professional
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
          <button className="w-full bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
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
                  Tally Essential Level 3 is an advanced course designed for professionals who want to master complex financial management and reporting capabilities in Tally Prime. This certification builds on the foundations established in Levels 1 and 2, focusing on advanced accounting practices, complex tax configurations, multi-location inventory management, and comprehensive financial reporting.
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
                        This certification is ideal for accounting professionals, finance managers, and business owners who need to handle complex financial operations. With the Tally Essential Level 3 certification, you'll have the expertise to implement sophisticated accounting systems, generate detailed financial reports, and optimize your organization's financial processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Duration</h3>
                  <p className="text-gray-600">4 weeks, self-paced</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Advanced</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Relevance</h3>
                  <p className="text-gray-600">Financial Controller, Senior Accountant</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Certification</h3>
                  <p className="text-gray-600">Tally Certified Professional - Level 3</p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Advanced financial statement customization</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Multi-currency accounting and forex management</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Branch accounting and consolidated reporting</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Advanced tax configurations and compliance</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Automated bank reconciliation</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Budget variance analysis and reporting</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Manufacturing and job costing</p>
                  </div>
                  <div className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Tally Developer tools and customization</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With Tally Essential Level 3 certification, you can pursue advanced roles in finance and accounting:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Financial Controller</span>
                    <span className="ml-auto">₹8,00,000 - ₹15,00,000 per year</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Senior Accountant</span>
                    <span className="ml-auto">₹6,00,000 - ₹10,00,000 per year</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Finance Manager</span>
                    <span className="ml-auto">₹7,00,000 - ₹12,00,000 per year</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Accounts Manager</span>
                    <span className="ml-auto">₹5,50,000 - ₹9,00,000 per year</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Course?</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Industry-recognized Tally certification</span>
                  </li>
                  <li className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Hands-on practice with real-world business scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Learn advanced features not covered in standard Tally training</span>
                  </li>
                  <li className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Master complex financial reporting and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Develop skills to implement enterprise-level financial systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">What prerequisites are needed for Tally Essential Level 3?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Candidates should have completed Tally Essential Level 1 and Level 2 or have equivalent knowledge and experience with Tally Prime basics and intermediate features. A strong understanding of accounting principles is recommended.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">How is this different from Tally Essential Level 2?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        While Level 2 focuses on intermediate features like inventory management and basic tax configurations, Level 3 dives into advanced topics such as multi-currency accounting, branch accounting, manufacturing modules, and specialized reporting. It's designed for those who need to implement and manage complex financial systems.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(3)}
                    >
                      <span className="font-medium text-gray-800">Does this certification include the exam fee?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 3 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 3 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Yes, the course fee includes one attempt at the Tally certification exam. If you need to retake the exam, additional fees may apply.
                      </div>
                    )}
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

export default TallyEssentialLevel3; 