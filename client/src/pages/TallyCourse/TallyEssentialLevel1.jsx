import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import tallyLogo from "../../assets/tally2.png";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const TallyEssentialLevel1 = () => {
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
      id: "tally-essential-level1",
      title: "Tally Essential Level 1",
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
            <span className="text-teal-600">Level 1 Certification</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Learn essential accounting fundamentals with Tally's official certification program.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Beginner Level Course</h1>
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
            Foundation Accounting Skills
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
                  The Tally Essential Level 1 certification is designed for beginners looking to master the fundamentals of accounting using Tally. This certification is the first step towards becoming proficient in computerized accounting with Tally solutions.
                </p>
                <p className="text-gray-700 mb-4">
                  This course will introduce you to the basics of Tally software, helping you understand the core concepts of accounting and how to navigate through Tally's interface. You'll learn to create company profiles, manage ledgers, and execute basic accounting operations.
                </p>
                <p className="text-gray-700">
                  Upon completion, you'll receive an industry-recognized certification from Tally Solutions, enhancing your credentials for roles in accounting, bookkeeping, and financial management.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-700">4-6 weeks (Self-paced)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Skill Level</h3>
                    <p className="text-gray-700">Beginner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Job Relevance</h3>
                    <p className="text-gray-700">Accounting, Bookkeeping</p>
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
                    <p className="text-gray-700">Introduction to Tally interface and navigation</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating and configuring company profiles</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Basic accounting concepts in Tally</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating and managing ledger accounts</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Recording basic financial transactions</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Generating basic financial reports</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Understanding financial statements in Tally</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Data backup and restoration procedures</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  Tally Essential Level 1 certification prepares you for entry-level positions in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Accounts Assistant</strong> (₹10,000-15,000 per month)</li>
                  <li><strong>Bookkeeper</strong> (₹12,000-18,000 per month)</li>
                  <li><strong>Data Entry Operator - Accounts</strong> (₹10,000-16,000 per month)</li>
                  <li><strong>Billing Assistant</strong> (₹12,000-17,000 per month)</li>
                  <li><strong>Entry-level Accountant</strong> (₹15,000-22,000 per month)</li>
                </ul>
                <p className="text-gray-700">
                  This certification is particularly valuable for freshers and those looking to enter the accounting field without prior experience. It serves as a foundation for further Tally certifications that can lead to more advanced roles and higher pay scales.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Certification</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Official certification from Tally Solutions, recognized across industries in India and abroad.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Practical Knowledge</h3>
                    <p className="text-gray-600">Hands-on training that prepares you for real-world accounting scenarios.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Gateway Qualification</h3>
                    <p className="text-gray-600">Stepping stone to advanced Tally certifications and better career opportunities.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Self-Paced Learning</h3>
                    <p className="text-gray-600">Flexible study schedule that accommodates working professionals and students.</p>
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
                      <span className="font-medium text-gray-800">Do I need prior accounting knowledge for this course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        No, this course is designed for absolute beginners. While basic understanding of accounting concepts would be helpful, it's not mandatory. The course covers fundamental accounting principles as they apply to Tally software, making it accessible for those without prior accounting knowledge.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">What is the certification exam like?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        The certification exam consists of multiple-choice questions and practical assignments that test your understanding of Tally basics and your ability to perform fundamental accounting operations. The exam duration is typically 60 minutes, and you need to score at least 70% to pass. The exam can be taken online from the comfort of your home or at designated test centers.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">How do I progress after completing this certification?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        After completing Tally Essential Level 1, you can progress to Tally Essential Level 2 and Level 3, followed by Tally Professional certification. This learning path will give you comprehensive knowledge of Tally software and advanced accounting skills. Each level builds upon the previous one, gradually introducing more complex features and accounting practices.
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
                        <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Rajesh Kumar</h3>
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
                      "As a commerce graduate with no practical experience, Tally Essential Level 1 certification opened doors for me. I secured a job as an accounts assistant within weeks of completing the course. The step-by-step approach made learning easy."
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <img className="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Priya Sharma</h3>
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
                      "The course content was excellent for beginners. I had zero knowledge of accounting software before starting, but the instructor explained everything clearly. Now I assist in managing accounts for my family business with confidence."
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

export default TallyEssentialLevel1; 