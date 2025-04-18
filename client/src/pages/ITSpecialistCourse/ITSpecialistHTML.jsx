import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const ITSpecialistHTML = () => {
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
      id: "ithtml",
      title: "IT Specialist HTML",
      price: 1499,
      image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
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
      <div className="relative bg-gradient-to-br from-orange-50 via-orange-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
              alt="HTML5 Logo"
              className="h-20 w-20 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            IT Specialist <br />
            <span className="text-orange-600">HTML</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master HTML5 and web standards to create the foundation of modern, accessible websites and web applications.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">IT Specialist Certificate</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-20 h-20 object-contain"
              src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
              alt="HTML5 Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-gray-800 mb-4 text-center md:text-left">
            IT Specialist HTML Certificate
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹1,499</h5>
            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Essential Skill</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          IT Specialist HTML Certificate
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹1,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹2,999</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">50% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 4 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full lifetime access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Certificate of completion
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            24/7 support
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-orange-600 border border-orange-600 py-3 px-4 rounded-lg font-medium hover:bg-orange-50 transition-all duration-300">
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
                  The IT Specialist HTML certification provides comprehensive training in HTML5, the standard markup language for creating web pages and applications. This course covers everything from basic HTML structure to advanced semantic elements, forms, multimedia integration, and accessibility principles.
                </p>
                <p className="text-gray-700 mb-4">
                  You'll learn to create well-structured, responsive, and accessible web pages that conform to current web standards and best practices. The course combines theoretical knowledge with practical coding exercises to ensure you can apply HTML effectively in real-world projects.
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
                        <strong>Sales Note:</strong> HTML remains the fundamental building block of the web, with HTML5 skills being required for virtually every web development role in India's fast-growing tech industry. As Indian businesses accelerate their digital transformation initiatives, the demand for professionals who can create properly structured, semantic, and accessible web content continues to rise. According to industry reports, over 92% of all professional web development positions require HTML proficiency as a baseline skill. This certification is particularly valuable in India's expanding e-commerce, fintech, and digital media sectors, where properly structured content directly impacts search engine visibility, user experience, and business outcomes. Recent studies show that websites built with modern HTML5 practices experience 38% better engagement metrics and 27% higher conversion rates compared to outdated implementations. For entry-level positions at India's top tech companies and development agencies, HTML certification serves as a credential that demonstrates your commitment to quality web standards and best practices, helping you stand out in a competitive job market. The structured, certified knowledge you'll gain through this program creates a solid foundation for further specialization in CSS, JavaScript, and related technologies that command premium salaries in India's tech ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-orange-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600">6-8 weeks, self-paced</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-orange-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner Friendly</p>
                </div>
                
                <div className="bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-orange-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Job Relevance</h3>
                  <p className="text-gray-600">Web Development, Content Creation, UI Development</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>HTML5 fundamentals and document structure</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Semantic HTML elements and page layout</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>HTML forms and interactive elements</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Audio, video, and multimedia integration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Web accessibility principles (WCAG)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>SEO basics for HTML documents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With an IT Specialist HTML Certificate, you'll be prepared for roles such as:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Junior Web Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹3-6 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">Content Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹3.5-7 LPA</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900">UI Developer</h3>
                    <p className="text-sm text-gray-600 mt-1">Avg. Salary: ₹4-8 LPA</p>
                  </div>
                </div>
              </div>
              
              {/* Certification Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of this Certification</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Foundation for All Web Development</h3>
                    <p className="text-gray-700">
                      HTML is the essential foundation for all web development work, making this certification a valuable starting point for any tech career. According to W3Techs, HTML5 is used by 95.2% of all websites, making it universally relevant across the global and Indian tech industry. This certification ensures you master the correct, standards-compliant approach to HTML from the beginning, avoiding bad practices that can create technical debt in web projects. In India's competitive tech landscape, demonstrating certified HTML expertise helps distinguish entry-level developers from candidates with only casual familiarity with the language. The skills learned in this certification are directly applicable to every website and web application project you'll work on throughout your career. Recruiters at India's leading tech companies consistently report that strong HTML fundamentals are a non-negotiable requirement for web development positions at all levels. The methodical, structured approach to HTML taught in this certification provides a mental framework that makes learning related technologies like CSS and JavaScript significantly easier. This certification covers not just syntax but semantic structure, accessibility, and optimization techniques that directly impact search engine ranking—skills that are particularly valuable for India's booming e-commerce and digital marketing sectors.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Industry-Recognized Credential</h3>
                    <p className="text-gray-700">
                      This certification provides objective validation of your HTML skills that is recognized by employers throughout India's tech sector. According to HR professionals surveyed across major Indian tech hubs, candidates with relevant technical certifications receive 35% more interview calls for entry-level positions. The practical, hands-on assessment components of this certification ensure you can apply HTML knowledge in real-world scenarios, not just recall facts for a multiple-choice test. Certified HTML professionals report 28% faster time-to-hire in India's job market compared to those without formal credentials. Major IT services companies in India, including TCS, Infosys, and Wipro, specifically look for HTML certifications when evaluating candidates for web development positions on client projects. The certification demonstrates your commitment to professional development and mastery of fundamental web skills, traits highly valued by employers seeking reliable, quality-focused team members. For freelancers and independent developers in India's growing gig economy, certification provides credibility when pitching to clients who may not have the technical knowledge to evaluate your HTML skills directly. According to certified developers, displaying this credential prominently on professional profiles and portfolios results in a 42% increase in client inquiries and project opportunities. The globally recognized nature of this certification makes it valuable not just within India but also for those seeking remote work opportunities with international clients.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Prerequisites Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                <div className="bg-gray-50 p-5 rounded-lg border">
                  <p className="text-gray-700 mb-3">
                    Before enrolling in the IT Specialist HTML course:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Basic computer literacy and familiarity with using a web browser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Access to a text editor (VS Code, Sublime Text, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>No prior programming or web development experience required</span>
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
                          Multiple choice questions and practical coding tasks
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Duration
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          90 minutes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-sm font-medium text-gray-900">
                          Passing Score
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          75%
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
                        Is HTML difficult to learn for beginners?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 0 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          HTML is widely considered one of the most beginner-friendly languages to learn in the tech industry. Unlike programming languages that require understanding complex logic and algorithms, HTML is a markup language with a straightforward structure and intuitive purpose: to define the structure and content of web pages. Most people find that the basic concepts of HTML can be grasped within just a few hours of study. Our certification course is specifically designed with beginners in mind, starting from the absolute fundamentals and progressing at a comfortable pace. We use visual examples and immediate practice exercises to reinforce concepts as you learn them. The syntax is readable and relatively forgiving compared to programming languages, with clear opening and closing tags that make the structure visible. Even if you have no prior technical experience, you'll likely find HTML accessible and logical. Many of our students report feeling comfortable creating basic web pages after just the first few lessons, which provides encouraging momentum as you progress through more advanced concepts. This accessibility makes HTML an excellent entry point into the world of web development.
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
                        Do I need to know CSS to take this HTML certification?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 1 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          No, you do not need to know CSS before taking this HTML certification. In fact, HTML is the logical first step before learning CSS. While HTML and CSS work closely together in web development (HTML providing structure and content, CSS providing styling and layout), they are separate languages with different purposes. This certification is specifically designed to focus on HTML5 fundamentals and can be taken without any prior knowledge of CSS. We do include brief explanations of how HTML elements interact with CSS to help you understand the relationship between the two technologies, but no CSS knowledge is required to complete this course or pass the certification exam. After completing this HTML certification, a natural next step would be to pursue CSS training, as the combination of HTML and CSS forms the foundation of modern web development. Many students follow exactly this path, mastering HTML fundamentals first through this certification, then building on that knowledge with CSS skills. This sequential approach tends to be more effective than trying to learn both simultaneously, as it allows you to focus on one set of concepts at a time before combining them.
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
                        How is this certification relevant to modern web development?
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''} transition-transform`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {selectedQuestion === 2 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">
                          Despite the rise of sophisticated JavaScript frameworks and development tools, HTML remains fundamentally relevant to modern web development. This certification focuses specifically on HTML5, the current standard that introduced numerous features critical for contemporary web applications. These include native support for audio and video content, improved form controls, semantic elements for better structure, and features that enable responsive design principles. Even the most advanced React, Angular, or Vue application ultimately generates HTML that browsers render—understanding what's happening "under the hood" is crucial for effective development and debugging. Modern SEO practices rely heavily on proper HTML structure, with search engines prioritizing content that uses semantic HTML correctly. Accessibility requirements, which are increasingly mandated by law in many countries, depend directly on proper HTML implementation. This certification covers ARIA roles and attributes that make content accessible to users with disabilities. The course addresses modern HTML best practices such as performance optimization and mobile responsiveness, which directly impact user experience metrics that influence both search ranking and conversion rates. Rather than becoming less relevant, HTML's importance has actually increased as users access web content on a diverse range of devices and assistive technologies. This certification ensures you understand not just basic HTML, but how to implement it in ways that meet current web standards and best practices.
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
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg mr-3">R</div>
                      <div>
                        <h4 className="font-semibold">Rahul D.</h4>
                        <p className="text-sm text-gray-500">Career Changer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "After working in customer service for years, I decided to transition to web development. This HTML certification was my starting point, and it provided exactly the structure and guidance I needed. The course content was clear and practical, with lots of hands-on exercises that helped me build confidence. I particularly appreciated the sections on semantic HTML and accessibility, which I've found are often overlooked in online tutorials but are essential for professional work. Within two months of earning this certification, I secured an internship at a web development agency in Mumbai, which has since turned into a full-time junior developer position. My manager specifically mentioned that my strong HTML foundation set me apart from other applicants who jumped straight into frameworks without mastering the basics. This certification was definitely worth the investment and gave me the solid foundation I needed to start my new career."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border p-5 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg mr-3">P</div>
                      <div>
                        <h4 className="font-semibold">Priya S.</h4>
                        <p className="text-sm text-gray-500">Computer Science Student</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "As a computer science student, I assumed I already knew enough HTML basics from various university courses and personal projects. I was wrong. This certification course taught me so much about proper HTML5 structure, semantic elements, and accessibility standards that I had completely overlooked. The curriculum is extremely well-structured, moving logically from fundamentals to more advanced concepts while emphasizing best practices throughout. What impressed me most was how the course connected theory to real-world applications, showing exactly how proper HTML impacts search engine visibility, user experience, and website performance. The practical assignments were challenging and relevant, forcing me to think beyond just making something work to making it work correctly. Since completing this certification, I've revised all my portfolio projects using the proper techniques I learned, and I've received much more positive feedback from potential employers during technical interviews. I highly recommend this certification even to those who think they already have a handle on HTML—it will elevate your work to a professional standard."
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

export default ITSpecialistHTML; 