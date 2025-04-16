import React, { useEffect, useState, useContext } from 'react';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import tallyLogo from "../../assets/tally2.png";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const TallyEssentialComprehensive = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };

  const handleAddToCart = () => {
    const product = {
      id: "tally-essential-comprehensive",
      title: "Tally Essential Comprehensive",
      price: 2999,
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
    <div className="pb-12 bg-gray-50">
      {/* Confirmation Message */}
      {showConfirmation && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out">
          Item added to cart successfully!
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img src={tallyLogo} alt="Tally Logo" className="w-48 h-48 object-contain bg-white p-4 rounded-full shadow-lg" />
          </div>
          <div className="md:w-2/3 text-center md:text-left text-white">
            <h1 className="text-4xl font-bold mb-4">Tally Essential Comprehensive</h1>
            <p className="text-xl mb-6">Complete Tally Mastery Program - From Basics to Advanced Applications</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-white text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">80+ Hours of Training</span>
              <span className="bg-white text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">Complete Course Package</span>
              <span className="bg-white text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">Industry Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - Fixed on Scroll */}
      <div className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800">Tally Essential Comprehensive</h2>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold text-teal-600">₹2,999</span>
                <span className="ml-2 text-gray-500 line-through">₹4,999</span>
                <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">40% OFF</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Limited time offer - 3 days left</p>
            </div>
            <div>
              <AddToCartButton onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex overflow-x-auto space-x-4">
            <button className="px-4 py-2 border-b-2 border-teal-600 text-teal-600 font-semibold whitespace-nowrap">Overview</button>
            <button className="px-4 py-2 text-gray-500 whitespace-nowrap">Curriculum</button>
            <button className="px-4 py-2 text-gray-500 whitespace-nowrap">Career Paths</button>
            <button className="px-4 py-2 text-gray-500 whitespace-nowrap">FAQ</button>
            <button className="px-4 py-2 text-gray-500 whitespace-nowrap">Reviews</button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Overview Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-4">
                  The Tally Essential Comprehensive certification is the ultimate all-in-one package for mastering Tally Prime. This comprehensive program combines the content from all three Essential levels (1, 2, and 3) into a single integrated course, providing you with complete knowledge of Tally from basic to advanced features.
                </p>
                <p className="text-gray-700 mb-4">
                  This certification is ideal for individuals who want to become Tally experts without going through the levels separately. You'll learn everything from basic accounting entries to advanced financial management, inventory control, taxation, payroll, and reporting systems.
                </p>
                <p className="text-gray-700">
                  Directly certified by Tally Solutions, this comprehensive program offers the most complete Tally education available for accounting professionals, business owners, and aspiring finance experts.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Complete company setup and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Chart of accounts and ledger management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Voucher entry and transaction management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Bank reconciliation and cheque management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Advanced inventory management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Multi-currency accounting</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">GST configuration and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">TDS management and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Payroll processing and statutory compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Financial statements customization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Branch accounting and consolidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1"><FaCheck /></span>
                      <span className="text-gray-700">Basic Tally customization and tools</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  The Tally Essential Comprehensive certification prepares you for various roles across the accounting hierarchy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Accounts Executive</strong> (₹15,000-25,000 per month)</li>
                  <li><strong>Accountant</strong> (₹20,000-35,000 per month)</li>
                  <li><strong>Finance Executive</strong> (₹25,000-40,000 per month)</li>
                  <li><strong>Accounts Manager</strong> (₹35,000-60,000 per month)</li>
                  <li><strong>Financial Analyst</strong> (₹30,000-50,000 per month)</li>
                </ul>
                <p className="text-gray-700">
                  This comprehensive certification provides you with the complete skill set needed for a wide range of accounting positions, from entry-level to management. The integrated nature of this course makes you versatile and adaptable to various industries and company sizes.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-bold text-teal-700 mb-2">Complete Package</h3>
                    <p className="text-gray-700">All Tally essential levels combined in one comprehensive course</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-bold text-teal-700 mb-2">Time Efficient</h3>
                    <p className="text-gray-700">Streamlined curriculum without repetition across levels</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-bold text-teal-700 mb-2">Cost Effective</h3>
                    <p className="text-gray-700">More affordable than purchasing individual levels separately</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="font-bold text-teal-700 mb-2">Official Certification</h3>
                    <p className="text-gray-700">Recognized Tally credential with industry-wide acceptance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => toggleAnswer(1)}
                  >
                    <span className="font-medium">Is this course suitable for beginners with no accounting background?</span>
                    <span>{selectedQuestion === 1 ? '-' : '+'}</span>
                  </button>
                  {selectedQuestion === 1 && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">
                        Yes, the Comprehensive package starts from the very basics, so even those with minimal accounting knowledge can follow along. The course progressively builds up from fundamental concepts to advanced applications, making it accessible for complete beginners while still valuable for those with some prior experience.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => toggleAnswer(2)}
                  >
                    <span className="font-medium">How long does it take to complete this comprehensive course?</span>
                    <span>{selectedQuestion === 2 ? '-' : '+'}</span>
                  </button>
                  {selectedQuestion === 2 && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">
                        The comprehensive course includes over 80 hours of training material. Most students complete it in 2-3 months with regular study (10-15 hours per week). However, you have lifetime access to the course materials, so you can progress at your own pace. The certification exam can be taken whenever you feel ready.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => toggleAnswer(3)}
                  >
                    <span className="font-medium">How does this package compare to the Tally Professional certification?</span>
                    <span>{selectedQuestion === 3 ? '-' : '+'}</span>
                  </button>
                  {selectedQuestion === 3 && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">
                        The Tally Essential Comprehensive package covers all aspects of using Tally for accounting, inventory, taxation, and business management. The Tally Professional certification goes beyond usage to include customization, implementation, and system integration aspects that are more relevant for consultants and Tally implementation specialists. If your goal is to master Tally for accounting and business management purposes, this comprehensive package is ideal. If you aim to become a Tally consultant or implementation specialist, you might consider the Professional certification after completing this package.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => toggleAnswer(4)}
                  >
                    <span className="font-medium">Does this certification include practical assignments and case studies?</span>
                    <span>{selectedQuestion === 4 ? '-' : '+'}</span>
                  </button>
                  {selectedQuestion === 4 && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">
                        Yes, the course includes numerous practical assignments, case studies, and real-world scenarios. You'll work with sample companies, complete month-end processes, create financial reports, and solve business challenges using Tally. These hands-on exercises ensure you develop practical skills alongside theoretical knowledge.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our Students Say</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 italic mb-4">"The comprehensive course was exactly what I needed to fast-track my accounting career. I went from knowing nothing about Tally to managing the accounts department of a medium-sized firm. The structured approach and thorough coverage of all features made learning easy."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mr-3">RS</div>
                    <div>
                      <h4 className="font-semibold">Rahul Sharma</h4>
                      <p className="text-sm text-gray-500">Accounts Manager, Delhi</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 italic mb-4">"As a business owner, I wanted to understand our accounting system better. This course gave me comprehensive knowledge of Tally without having to take multiple courses. Now I can make informed financial decisions and better supervise my accounting staff."</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mr-3">AP</div>
                    <div>
                      <h4 className="font-semibold">Ananya Patel</h4>
                      <p className="text-sm text-gray-500">Business Owner, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallyEssentialComprehensive; 