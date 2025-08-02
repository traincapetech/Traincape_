import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const ITSpecialistJavaScript = () => {
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
      id: "itjavascript",
      title: "IT Specialist JavaScript",
      price: 1599,
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
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
      <div className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JavaScript Logo"
              className="h-20 w-20 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            IT Specialist <br />
            <span className="text-amber-600">JavaScript</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master modern JavaScript to create dynamic, interactive web applications and advance your career in front-end development.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">IT Specialist Certificate</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-20 h-20 object-contain"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JavaScript Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-gray-800 mb-4 text-center md:text-left">
            IT Specialist JavaScript Certificate
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,599</h5>
            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">High Demand</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          IT Specialist JavaScript Certificate
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,599</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹3,199</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">50% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 6 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full lifetime access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Certificate of completion
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            24/7 support
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-3 px-4 rounded-lg font-medium hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-amber-600 border border-amber-600 py-3 px-4 rounded-lg font-medium hover:bg-amber-50 transition-all duration-300">
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
                className="inline-block p-4 text-amber-600 border-b-2 border-amber-600 active"
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
                  The IT Specialist JavaScript certification provides comprehensive training in JavaScript programming, focusing on both foundational concepts and modern practices. This course is designed to equip you with the skills needed to develop dynamic web applications, manipulate the DOM, handle events, and implement modern JavaScript features.
                </p>
                <p className="text-gray-700 mb-4">
                  You'll learn essential JavaScript concepts including variables, data types, functions, objects, arrays, DOM manipulation, and asynchronous programming with Promises and async/await. The course combines theoretical knowledge with practical coding exercises to ensure you can apply JavaScript in real-world projects.
                </p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-amber-700">
                        <strong>Sales Note:</strong> JavaScript continues to be one of the most in-demand programming skills across India's tech industry. With the exponential growth of web applications, progressive web apps (PWAs), and Node.js backend development, JavaScript developers are highly sought after by employers nationwide. According to industry reports, JavaScript is used by 97.8% of all websites, making it the most ubiquitous programming language for web development. In India's major tech hubs like Bangalore, Hyderabad, and Pune, JavaScript developers command salaries 30-40% higher than those specializing in traditional programming languages. This certification is particularly valuable as companies increasingly adopt modern JavaScript frameworks like React, Vue, and Angular—all built on a solid JavaScript foundation. The versatility of JavaScript extends beyond frontend development to backend services (Node.js), mobile app development (React Native), and even desktop applications (Electron), creating multiple career paths for certified JavaScript developers. According to NASSCOM, the demand for JavaScript developers in India is projected to grow by 25% annually through 2025, far outpacing the available talent pool and creating exceptional job security for those with certified skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600">10-12 weeks, self-paced</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner to Intermediate</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Job Relevance</h3>
                  <p className="text-gray-600">Front-End Development, Web Development, Full-Stack Development</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>JavaScript fundamentals and syntax</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>DOM manipulation and event handling</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Object-oriented programming in JavaScript</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Asynchronous JavaScript (Promises, async/await)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Modern JavaScript features (ES6+)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Fetch API and working with JSON data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With an IT Specialist JavaScript Certificate, you'll be prepared for roles such as:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Front-End Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹4.5-10 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">JavaScript Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹5-12 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">UI Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹4-9 LPA</p>
                  </div>
                </div>
              </div>
              
              {/* Certification Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of this Certification</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Universal Web Skill</h3>
                    <p className="text-gray-700">
                      JavaScript is the only programming language natively supported by all web browsers, making it an essential skill for anyone working in web development. According to the Stack Overflow Developer Survey, JavaScript has consistently been the most commonly used programming language for nine years running, with 65% of professional developers using it regularly. This certification provides you with a versatile skill set that applies across front-end development, back-end development (with Node.js), and even mobile app development (with frameworks like React Native). The fundamentals you'll learn remain relevant regardless of which JavaScript frameworks or libraries become popular, as they all build upon core JavaScript concepts. This certification is particularly valuable in India's tech ecosystem, where international companies are increasingly outsourcing JavaScript development projects to take advantage of the country's technical talent pool. Unlike more specialized programming languages, JavaScript skills are applicable across virtually every industry that has a digital presence—from e-commerce and finance to healthcare and education—creating abundant job opportunities throughout India's major tech hubs and beyond.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Gateway to Framework Specialization</h3>
                    <p className="text-gray-700">
                      This certification provides the essential foundation needed to master popular JavaScript frameworks like React, Angular, and Vue.js—all of which are in high demand across India's tech sector. Industry data shows that job listings requiring JavaScript framework expertise command salaries 20-35% higher than those requiring only vanilla JavaScript. According to a recent NASSCOM report, India's front-end development sector is experiencing acute talent shortages, with the demand for JavaScript developers growing at 24% annually—far outpacing the available talent pool. Major multinational companies with development centers in India, including Accenture, IBM, and Cognizant, actively recruit certified JavaScript professionals to work on global client projects. This certification provides hands-on experience with modern JavaScript features that are directly applicable to real-world development scenarios. Graduates of this program consistently report that the practical coding challenges prepared them well for technical interviews, with many receiving multiple job offers within weeks of certification. The structured curriculum follows industry best practices, ensuring your coding approaches align with what employers expect from professional JavaScript developers. The certification serves as credible proof of your JavaScript competency, helping you stand out in India's competitive job market.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Prerequisites Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                <div className="bg-gray-50 p-5 rounded-lg border">
                  <p className="text-gray-700 mb-3">
                    Before enrolling in the IT Specialist JavaScript course:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Basic understanding of HTML and CSS</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Familiarity with basic programming concepts (variables, loops, conditions)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Access to a text editor (VS Code recommended) and modern web browser</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Exam Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Details</h2>
                <div className="bg-white border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Format
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Multiple choice questions and practical coding exercises
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Duration
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          120 minutes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Passing Score
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          70%
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Languages
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          English
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Delivery Method
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Online proctored
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        Is this certification enough to get a job as a JavaScript developer?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 0 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          This certification provides a solid foundation in JavaScript and can certainly help you secure an entry-level position as a JavaScript developer. However, the job market in India is competitive, and employers typically look for a combination of certifications, practical experience, and portfolio projects. This certification includes hands-on projects that you can add to your portfolio, which significantly increases your employability. Additionally, we recommend building a few personal projects after completing the certification to demonstrate your ability to apply JavaScript in real-world scenarios. Many of our graduates have successfully secured positions by showcasing both their certification and their project work during interviews. For more senior positions, employers may expect additional experience with frameworks like React, Angular, or Vue.js, which build upon the JavaScript fundamentals covered in this certification. That said, the core JavaScript knowledge you'll gain through this program forms the essential foundation for working with any JavaScript framework, positioning you well for further specialization and career growth.
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
                        How does this certification compare to online JavaScript courses?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 1 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          While many online JavaScript courses provide valuable content, this certification offers several distinct advantages. First, it follows a comprehensive, structured curriculum that covers JavaScript fundamentals systematically, ensuring no critical concepts are missed. The certification includes rigorous assessment through both multiple-choice questions and practical coding challenges, providing objective validation of your skills that many online courses lack. Upon passing, you receive an industry-recognized credential that carries weight with employers across India, particularly those who value formal certifications in their hiring processes. Our program includes extensive hands-on exercises and project work designed to build practical skills that directly apply to workplace scenarios. The certification curriculum is regularly updated to reflect the latest JavaScript features and industry best practices, ensuring you learn modern, relevant techniques. Additionally, our certification program includes access to professional instructors who can provide clarification and support when you encounter challenges, unlike many self-paced online courses. Finally, many of our graduates report that having a formal certification makes their resumes more likely to pass initial HR screenings, particularly at larger corporations and IT service companies that use certification requirements as filtering criteria during the hiring process.
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
                        Does this certification cover frameworks like React or Angular?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 2 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          This certification focuses specifically on core JavaScript language features and fundamentals rather than on particular frameworks like React, Angular, or Vue.js. We've designed it this way deliberately, as mastering vanilla JavaScript is essential before specializing in any framework. The concepts you'll learn—including modern ES6+ features, asynchronous programming with Promises and async/await, DOM manipulation, and event handling—form the critical foundation needed to work effectively with any JavaScript framework. Many developers make the mistake of jumping directly into frameworks without fully understanding JavaScript fundamentals, which often leads to confusion and difficulty debugging code. By focusing on pure JavaScript, this certification ensures you'll have the deep understanding necessary to pick up any framework quickly. That said, the final sections of the course do introduce you to concepts like component-based architecture and state management that are central to modern frameworks, preparing you for framework-specific learning. After completing this certification, you'll be well-positioned to pursue specialized training in React, Angular, Vue.js, or any other JavaScript framework, with a solid foundation that will accelerate your learning and make you more effective in those ecosystems.
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
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-bold text-lg mr-3">V</div>
                      <div>
                        <h4 className="font-semibold">Vikram S.</h4>
                        <p className="text-sm text-gray-500">Career Switcher</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "I had tried learning JavaScript through various online tutorials but always felt like I was missing something fundamental. This certification program provided the structure I needed to truly understand JavaScript from the ground up. The curriculum's logical progression from basics to advanced topics helped me build my knowledge methodically. The practical coding exercises were particularly valuable—they forced me to apply concepts immediately rather than just passively consuming information. Within three months of earning this certification, I transitioned from my previous role in customer support to a junior front-end developer position at a startup in Bangalore. During the interview, I was able to confidently solve JavaScript coding challenges that directly reflected what I'd learned in the course. For anyone serious about JavaScript development, this certification provides the comprehensive foundation you need to succeed in the field."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border p-5 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-bold text-lg mr-3">N</div>
                      <div>
                        <h4 className="font-semibold">Neha K.</h4>
                        <p className="text-sm text-gray-500">Computer Science Graduate</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Even though I studied computer science in college, my program didn't focus much on JavaScript or modern web development. This certification filled those gaps perfectly and gave me the practical skills I needed to enter the job market. What I appreciated most was the emphasis on modern JavaScript features like arrow functions, destructuring, and async/await—concepts that are used extensively in today's development environments but weren't covered well in my academic studies. The section on DOM manipulation was particularly helpful, as it connected theoretical knowledge with practical browser interactions. After completing this certification, I received multiple job offers from tech companies in Hyderabad, ultimately accepting a position as a UI developer that increased my expected starting salary by nearly 40%. The certification definitely gave me an edge over other recent graduates who lacked specialized JavaScript training. I recommend this program to anyone looking to build marketable front-end development skills."
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

export default ITSpecialistJavaScript; 