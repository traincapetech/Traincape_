import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';
import tallyLogo from '../../assets/tally2.png';

const TallyProfessional = () => {
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
      id: 'tally-professional',
      name: 'Tally Professional',
      price: 1999,
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
            Tally Professional <br />
            <span className="text-blue-600">Enterprise Solutions Expert</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Complete Tally Prime Mastery for Enterprise Applications
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Professional Certification</h1>
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
            Enterprise Implementation Specialist
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,999</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">33% Off</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Tally Professional Certification
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,999</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹2,999</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">33% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 4 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            TDL programming & customization
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Enterprise integration capabilities
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Industry-specific implementations
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
                  The Tally Professional course is our most comprehensive and advanced Tally Prime certification program. This intensive course covers every aspect of Tally Prime's enterprise capabilities, from customized solutions to advanced integrations and industry-specific implementations. Designed for professionals who want to become Tally specialists and consultants, this course builds upon the essential levels and adds specialized knowledge required for implementing complex enterprise solutions.
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
                        Tally Professional certification is recognized as the gold standard for Tally expertise in the industry. With this certification, you'll position yourself as a Tally consultant capable of handling complex enterprise implementations, customizations, and integrations. The demand for Tally Professionals remains exceptionally high, especially among medium to large businesses that require tailored Tally solutions for their unique business processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Duration</h3>
                  <p className="text-gray-600">8-10 weeks, self-paced</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Advanced to Expert</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Relevance</h3>
                  <p className="text-gray-600">Tally Consultant, ERP Specialist</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Certification</h3>
                  <p className="text-gray-600">Tally Professional Certification</p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Tally customization and TDL programming</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Enterprise data management and synchronization</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Multi-company consolidation and reporting</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Advanced manufacturing and job costing</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Integration with third-party applications</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Customized MIS reporting solutions</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Industry-specific implementations</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">Tally server deployment and management</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With Tally Professional certification, you can pursue these high-demand careers:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Tally Consultant</span>
                    <span className="ml-auto">₹8,00,000 - ₹15,00,000 per year</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">ERP Implementation Specialist</span>
                    <span className="ml-auto">₹10,00,000 - ₹18,00,000 per year</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Financial Systems Manager</span>
                    <span className="ml-auto">₹12,00,000 - ₹20,00,000 per year</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="font-medium">Freelance Tally Expert</span>
                    <span className="ml-auto">₹1,000 - ₹2,500 per hour</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Course?</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Highest level of Tally certification available</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Learn to create customized solutions for businesses</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Specialized modules for manufacturing, services, and trading businesses</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Hands-on experience with real enterprise implementations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Exclusive access to Tally professional network and resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Curriculum Preview</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Module 1: Advanced Financial Management</h3>
                    <p className="text-gray-600">Multi-company consolidation, inter-company transactions, advanced budgeting</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Module 2: TDL Programming Fundamentals</h3>
                    <p className="text-gray-600">Creating customized forms, reports, and menus in Tally</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Module 3: Enterprise Integration</h3>
                    <p className="text-gray-600">Integrating Tally with other business applications and databases</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Module 4: Manufacturing Excellence</h3>
                    <p className="text-gray-600">Bill of materials, work orders, job costing, and production analysis</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Module 5: MIS and Business Intelligence</h3>
                    <p className="text-gray-600">Creating advanced reports and analytics for management decision-making</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">What are the prerequisites for this course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        It's recommended to have completed Tally Essential Level 3 or have equivalent experience. You should have strong understanding of accounting principles and be familiar with basic Tally Prime features. Some programming knowledge is helpful but not mandatory as TDL programming will be taught from the ground up.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">Can I become a Tally consultant after this certification?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Yes, this certification is designed to prepare you for a career as a Tally consultant. You'll gain the advanced skills needed to implement, customize, and troubleshoot Tally for businesses across various industries. The course includes modules on client management, requirement analysis, and implementation methodologies that are essential for consulting work.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(3)}
                    >
                      <span className="font-medium text-gray-800">What is TDL programming and why is it important?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 3 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 3 && (
                      <div className="p-4 pt-0 text-gray-700">
                        TDL (Tally Definition Language) is Tally's proprietary programming language that allows you to customize and extend Tally's functionality. It's important because it enables you to create custom reports, forms, and business logic tailored to specific business requirements. TDL programming skills are highly valued in the job market, as they allow you to transform Tally from an off-the-shelf solution to a customized business management system that precisely meets an organization's needs.
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

export default TallyProfessional; 