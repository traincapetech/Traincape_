import React, { useEffect, useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';
import mircro from "../../assets/Microsoft-Emblem.jpg";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const MicrosoftPowerPointAssociate = () => {
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
      id: "microsoft-powerpoint-associate",
      name: "Microsoft PowerPoint Associate",
      price: 1499,
      image: mircro,
      amount: 1,
    };
    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="course-page bg-gray-100 min-h-screen">
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="confirmation-message fixed top-20 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          Item added to cart successfully!
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg"
              alt="Microsoft PowerPoint Logo"
              className="h-24 w-36 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Microsoft PowerPoint <br />
            <span className="text-orange-600">Associate Certification</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master the art of creating engaging presentations with professional design and delivery techniques.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Associate Level Certification</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-40 h-20 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg"
              alt="Microsoft PowerPoint Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-orange-700 mb-4 text-center md:text-left">
            Professional Presentation Skills
          </h3>

          {/* Price with badge */}
          <div className="price flex items-center">
            <p className="text-3xl font-bold text-blue-600">₹1,499</p>
            <p className="original-price text-gray-500 line-through ml-2">₹1,999</p>
          </div>
          <p className="limited-time text-sm text-green-600 font-semibold">
            Limited time offer: 5 days left at this price!
          </p>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Microsoft PowerPoint Associate Certification
        </h2>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Globally recognized certification
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Real-world practice projects
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Practice exams included
          </li>
        </ul>
        
        <div className="cta mt-2 flex space-x-2">
          <AddToCartButton onClick={handleAddToCart} />
          <button className="buy-now-btn bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md transition duration-300">
            Buy Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full px-4 md:px-[3rem] lg:px-[6rem] py-10">
        <div className="max-w-6xl mx-auto mt-6 bg-white p-0 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="bg-gray-50 border-b">
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500">
              <button 
                className="inline-block p-4 text-orange-600 border-b-2 border-orange-600 active"
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
                  The Microsoft PowerPoint Associate certification validates your fundamental skills in creating and managing professional presentations. This globally-recognized credential demonstrates your proficiency with PowerPoint 2019 or Microsoft 365.
                </p>
                <p className="text-gray-700 mb-4">
                  With this certification, you'll prove your ability to create engaging, visually appealing presentations for various purposes. You'll learn to design slide content, apply transitions and animations, manage multiple presentations, and prepare slideshows for delivery to different audiences.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-700">
                        <strong>Sales Note:</strong> Presentation skills are highly valued in today's corporate environment, with 70% of Indian employers rating it as an essential skill for leadership roles. In India's growing business sector, the ability to create professional presentations is crucial for sales, marketing, management, training, and consulting roles. This certification opens doors for positions at major corporations like TCS, Wipro, Infosys, and multinationals that value consistent, professional communication. Our graduates report that the PowerPoint certification helped them stand out in job interviews, with many securing roles 10-15% higher in salary than non-certified candidates. The course is particularly valuable for recent graduates entering the corporate world, professionals seeking career advancement, and entrepreneurs needing to pitch ideas effectively. Unlike basic PowerPoint usage, this certification validates your ability to create presentations that truly engage audiences and convey information effectively—a skillset that consistently ranks among the top requirements for career advancement in the Indian corporate sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Duration</h3>
                  <p className="text-gray-600">20 hours (self-paced)</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner to Intermediate</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Prerequisites</h3>
                  <p className="text-gray-600">Basic computer skills</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating and managing presentations</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Inserting and formatting text, shapes, and images</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating and formatting tables</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Working with charts and SmartArt</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Applying transitions and animations</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Managing multiple presentations</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Preparing presentations for delivery</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Collaboration and presentation sharing</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  Microsoft PowerPoint certification enhances your employability for roles such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Marketing Executive</strong> (₹20,000-40,000 per month)</li>
                  <li><strong>Sales Representative</strong> (₹25,000-50,000 per month)</li>
                  <li><strong>Training Specialist</strong> (₹30,000-60,000 per month)</li>
                  <li><strong>Corporate Trainer</strong> (₹35,000-70,000 per month)</li>
                  <li><strong>Presentation Designer</strong> (₹25,000-45,000 per month)</li>
                  <li><strong>Business Analyst</strong> (₹40,000-80,000 per month)</li>
                </ul>
                <p className="text-gray-700">
                  PowerPoint skills are particularly valued in roles that involve client presentations, training, marketing, sales, consulting, and management. This certification gives you a competitive edge in these fields by validating your ability to create presentations that engage audiences and effectively communicate information.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Sales Pitch Deck</h3>
                    <p className="text-gray-600">Create a professional sales presentation with charts, company branding, and engaging visuals.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Corporate Training</h3>
                    <p className="text-gray-600">Design an interactive training presentation with quizzes, animations, and instructional content.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Marketing Campaign</h3>
                    <p className="text-gray-600">Develop a visually engaging presentation to showcase a product or service launch.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Report</h3>
                    <p className="text-gray-600">Create a data-driven presentation with charts, tables, and summary slides.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Format</h3>
                    <p className="text-gray-600">Performance-based exam using live PowerPoint application</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Duration</h3>
                    <p className="text-gray-600">50 minutes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Passing Score</h3>
                    <p className="text-gray-600">700 out of 1000 points (70%)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Validity</h3>
                    <p className="text-gray-600">No expiration, but tied to the specific PowerPoint version (2019/365)</p>
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
                      <span className="font-medium text-gray-800">Does this certification include presentation delivery skills?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        While the Microsoft PowerPoint Associate certification primarily focuses on technical skills for creating professional presentations, our course includes additional modules on effective presentation delivery techniques. You'll learn about slide design principles that enhance audience engagement, how to structure presentations for maximum impact, and tips for using PowerPoint features during live presentations. We also cover best practices for preparing speaker notes, handling Q&A sessions, and adapting presentations for different delivery methods (in-person, virtual, recorded). These supplementary skills complement the technical aspects of the certification and provide you with a comprehensive presentation skill set that employers highly value.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">How does this differ from just learning PowerPoint online?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Unlike free online tutorials that often cover basics in a fragmented way, our certification course provides a structured, comprehensive curriculum that follows Microsoft's official standards. We focus on both the "how" and the "why" of PowerPoint features, teaching you not just which buttons to click, but the design principles and best practices that make presentations truly effective. The certification validates your skills through a standardized performance-based exam, giving you a credential that employers recognize and trust. Additionally, our course includes real-world business projects, personalized feedback, and practice exams that simulate the actual certification test—resources rarely available in free online learning. The result is not just knowledge of PowerPoint, but professional-level presentation skills that meet industry standards.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">Can I create professional-quality presentations after this course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Absolutely! This course is specifically designed to transform ordinary PowerPoint users into presentation design experts. You'll learn professional design principles including color theory, typography, layout strategies, and visual hierarchy that elevate your presentations from basic to impressive. We provide templates and design assets that you can use in your own projects, plus guidance on creating custom themes and master slides for consistent branding. The course covers advanced techniques for working with charts, images, and multimedia elements to create compelling visual stories. By the end of the course, you'll be able to create presentations that look professionally designed, effectively communicate information, and maintain audience engagement—skills that set you apart in any workplace. Many of our graduates report that colleagues often ask them to share their presentation design secrets after seeing their work!
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
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold mr-3">RK</div>
                      <div>
                        <h4 className="font-semibold">Rahul Kapoor</h4>
                        <p className="text-sm text-gray-500">Marketing Manager at Myntra</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"The PowerPoint Associate certification completely changed how I create presentations for client pitches. Before this course, my slides were basic and often failed to capture attention. Now, I consistently create professional, visually engaging presentations that showcase our products effectively. My clients frequently comment on the quality of my presentations, and I've closed 30% more deals since applying the techniques I learned. The certification also played a key role in my recent promotion to Marketing Manager."</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold mr-3">NS</div>
                      <div>
                        <h4 className="font-semibold">Neha Sharma</h4>
                        <p className="text-sm text-gray-500">Corporate Trainer at TCS</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"As a corporate trainer, effective presentations are essential to my job. This certification helped me transform my training materials from text-heavy slides to engaging visual content that maintains participant interest. I've learned how to use animations strategically to explain complex concepts, create interactive elements that increase engagement, and design consistent, branded presentations that look professional. My training effectiveness scores have improved by 40% since implementing these techniques, and I've been asked to lead our company's presentation standards initiative based on my new skills."</p>
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

export default MicrosoftPowerPointAssociate; 