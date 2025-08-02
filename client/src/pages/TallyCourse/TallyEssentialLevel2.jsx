import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import tallyLogo from "../../assets/tally3.png";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const TallyEssentialLevel2 = () => {
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
      id: "tally-essential-level2",
      title: "Tally Essential Level 2",
      price: 1149,
      image: "https://tallysolutions.com/wp-content/uploads/2021/11/TallyPrime-logo-white-on-teal.png",
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
      <div className="relative bg-gradient-to-br from-teal-50 via-teal-100 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://tallysolutions.com/wp-content/uploads/2021/11/TallyPrime-logo-white-on-teal.png"
              alt="Tally Logo"
              className="h-24 w-36 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Tally Essential <br />
            <span className="text-teal-600">Level 2 Certification</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Advance your accounting skills with intermediate concepts and features in Tally.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Intermediate Level Course</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-40 h-20 object-contain"
              src="https://tallysolutions.com/wp-content/uploads/2021/11/TallyPrime-logo-white-on-teal.png"
              alt="Tally Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-teal-700 mb-4 text-center md:text-left">
            Advanced Accounting & Financial Management
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <div>
              <h5 className="text-xl font-bold text-left">₹1,149</h5>
              <p className="text-sm text-gray-500 line-through">₹1,499</p>
            </div>
            <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">23% off</span>
          </div>
          
          {/* Limited time offer */}
          <p className="text-xs text-gray-500 mt-2">Limited time offer - Ends in 5 days</p>
          
          {/* Features list */}
          <div className="mt-4 space-y-2 w-full">
            <div className="flex items-center">
              <FaCheck className="text-teal-500 mr-2" />
              <p className="text-sm text-gray-700">Full lifetime access</p>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-teal-500 mr-2" />
              <p className="text-sm text-gray-700">Certificate of completion</p>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-teal-500 mr-2" />
              <p className="text-sm text-gray-700">24/7 support</p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="mt-6 flex flex-col w-full gap-2">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-teal-600 border-2 border-teal-600 font-bold py-2 px-4 rounded hover:bg-teal-50 transition-colors"
            >
              Add To Cart
            </button>
            <button 
              className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition-colors"
            >
              Buy Now
            </button>
          </div>
          
          {/* Confirmation message */}
          {showConfirmation && (
            <div className="mt-4 w-full bg-green-100 text-green-800 text-sm font-medium p-2 rounded text-center">
              Item added to cart!
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-4 sm:space-x-8">
            <button className="border-teal-500 text-teal-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
              Overview
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
              Curriculum
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
              Career Paths
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
              FAQ
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm sm:text-base">
              Reviews
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Overview Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-4">
                  Tally Essential Level 2 certification builds upon the foundation established in Level 1, advancing your skills in Tally with more complex accounting concepts and features. This intermediate-level course is designed for those who have completed Level 1 or have equivalent knowledge and wish to enhance their proficiency with Tally software.
                </p>
                <p className="text-gray-700 mb-4">
                  In this certification, you'll delve deeper into Tally's capabilities, focusing on inventory management, tax configurations, and more advanced financial operations. You'll learn to handle multi-currency transactions, manage stock items, and configure various tax settings to comply with local regulations.
                </p>
                <p className="text-gray-700">
                  The certification is directly from Tally Solutions, making it an industry-recognized credential that significantly enhances your employability in accounting and finance roles.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-700">5-7 weeks (Self-paced)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Skill Level</h3>
                    <p className="text-gray-700">Intermediate</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Job Relevance</h3>
                    <p className="text-gray-700">Accounting, Inventory Management</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Advanced voucher entry and management</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Inventory management and stock tracking</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Tax configuration and management (GST, TDS)</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Multi-currency accounting</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Budget creation and expense tracking</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating complex financial reports</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Bank reconciliation procedures</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Data security and advanced management settings</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  Tally Essential Level 2 certification qualifies you for more advanced roles in accounting:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Accountant</strong> (₹18,000-30,000 per month)</li>
                  <li><strong>Accounts Executive</strong> (₹20,000-35,000 per month)</li>
                  <li><strong>Inventory Manager</strong> (₹22,000-38,000 per month)</li>
                  <li><strong>Tax Compliance Officer</strong> (₹25,000-40,000 per month)</li>
                  <li><strong>Accounts Manager (Junior)</strong> (₹28,000-45,000 per month)</li>
                </ul>
                <p className="text-gray-700">
                  This certification is highly valued in small to medium businesses where professionals are expected to handle both accounting and inventory management. It's also a stepping stone to specialized roles in taxation and financial analysis.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Certification</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Skillset</h3>
                    <p className="text-gray-600">Learn both accounting and inventory management skills that are highly sought after in the job market.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Tax Compliance Knowledge</h3>
                    <p className="text-gray-600">Gain valuable expertise in GST and TDS configurations, essential for businesses in India.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Advancement</h3>
                    <p className="text-gray-600">Move beyond entry-level positions into roles with more responsibility and better compensation.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Industry-Relevant Skills</h3>
                    <p className="text-gray-600">Learn practical skills that directly apply to the daily operations of businesses across industries.</p>
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
                      <span className="font-medium text-gray-800">Is Level 1 certification a prerequisite for this course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        While it's highly recommended to complete Tally Essential Level 1 first, it's not strictly mandatory. However, you should have equivalent knowledge of basic Tally operations and accounting fundamentals. If you're already familiar with creating company profiles, ledger accounts, and basic voucher entries in Tally, you may be prepared for Level 2. We offer a diagnostic test to assess your readiness for this level if you haven't completed Level 1.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">How does this certification help with tax compliance?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        A significant portion of this certification focuses on configuring and managing tax settings in Tally, particularly GST and TDS. You'll learn how to set up different tax rates, generate tax-compliant invoices, track tax liabilities, and prepare tax returns using Tally. This knowledge is invaluable for businesses that need to stay compliant with India's tax regulations. The skills you gain will enable you to handle tax filing requirements and ensure accurate tax calculations for businesses.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">Will this certification cover the latest Tally Prime features?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Yes, the certification curriculum is regularly updated to include the latest features of Tally Prime. You'll learn to use the most recent interface and functionality, including enhanced inventory management, improved reporting features, and the latest tax compliance updates. The course materials are directly from Tally Solutions, ensuring that the content reflects the current version of the software that businesses are using.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Student" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Vikram Singh</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "After completing Level 2, I secured a position as an accounts executive with a 40% salary increase. The inventory management skills were particularly valuable as my company deals with thousands of stock items. The GST configuration knowledge helped me streamline our tax filing process."
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/28.jpg" alt="Student" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Ananya Patel</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "The curriculum is well-structured and builds perfectly on Level 1. I especially appreciated the hands-on approach with real-world scenarios. As an accountant for a trading company, the multi-currency features and inventory tracking knowledge have been essential to my daily work."
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

export default TallyEssentialLevel2; 