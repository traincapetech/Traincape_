import React, { useEffect, useState } from 'react'
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";
import { GiPathDistance } from "react-icons/gi";
import ContactUs from '../ContactUs';

const UnityProgrammer = () => {
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
      id: "unity-programmer",
      title: "Unity Certified Programmer",
      price: 3499,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png",
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
      <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png"
              alt="Unity Logo"
              className="h-24 w-36 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Unity Certified <br />
            <span className="text-black">Programmer</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master game development with the industry's leading real-time 3D development platform and validate your programming skills with official Unity certification.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-gray-700 to-black w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Certification Course</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-40 h-20 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/1200px-Unity_2021.svg.png"
              alt="Unity Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-gray-700 mb-4 text-center md:text-left">
            C# Development for Real-time 3D
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹3,499</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Game Dev Career</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Unity Certified Programmer
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹3,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹4,999</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">30% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 4 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full lifetime access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Project-based learning
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Exam prep materials
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-gray-700 to-black text-white py-3 px-4 rounded-lg font-medium hover:from-gray-800 hover:to-gray-900 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Add To Cart
          </button>
          <button className="w-full bg-white text-gray-700 border border-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
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
                className="inline-block p-4 text-gray-700 border-b-2 border-gray-700 active"
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
                  The Unity Certified Programmer certification validates your ability to develop robust and efficient applications using C# with the Unity platform. This certification demonstrates your expertise in core programming concepts, optimization techniques, and best practices for game and application development.
                </p>
                <p className="text-gray-700 mb-4">
                  Our comprehensive course prepares you for the Unity Certified Programmer exam, covering all essential topics from basic scripting to advanced programming techniques, performance optimization, and debugging strategies within the Unity environment.
                </p>
                
                <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">
                        <strong>Sales Note:</strong> India's gaming industry is growing at an unprecedented rate, with a market value expected to reach $5 billion by 2025. Unity is the preferred game development platform for 61% of all mobile games in India, creating massive demand for skilled Unity programmers. Companies like Nodding Heads Games, Quicksand, and PlaySimple are actively recruiting Unity developers with starting salaries ranging from ₹5-12 LPA depending on experience. The certification is particularly valuable as 87% of hiring managers prefer certified Unity developers over non-certified counterparts. Our placement data shows that certified Unity programmers receive 35% more interview calls and command 20-25% higher salaries than non-certified developers with similar experience. Additionally, the booming AR/VR sector in India offers lucrative opportunities for Unity developers in fields beyond gaming, including education, healthcare, and real estate visualization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Duration</h3>
                  <p className="text-gray-600">10 weeks (self-paced)</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Intermediate to Advanced</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Prerequisites</h3>
                  <p className="text-gray-600">Basic C# and programming knowledge</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Advanced C# scripting in Unity</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Object-oriented programming principles</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Application architecture and patterns</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Unity's component-based architecture</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Performance optimization techniques</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Memory management and garbage collection</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Asset pipeline optimization</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Debugging and profiling tools</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With a Unity Certified Programmer certification, you'll be qualified for positions such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Unity Developer</strong> (₹5-12 LPA)</li>
                  <li><strong>Game Programmer</strong> (₹6-15 LPA)</li>
                  <li><strong>AR/VR Developer</strong> (₹8-16 LPA)</li>
                  <li><strong>Gameplay Programmer</strong> (₹7-14 LPA)</li>
                  <li><strong>Technical Lead</strong> (₹12-20 LPA)</li>
                  <li><strong>Mobile Game Developer</strong> (₹5-12 LPA)</li>
                </ul>
                <p className="text-gray-700">
                  Unity skills are in high demand not only in game development but also in industries like architecture visualization, automotive, film, healthcare, and education.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2D Platformer Game</h3>
                    <p className="text-gray-600">Develop a complete 2D platformer with physics, animations, and gameplay mechanics.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">3D Mobile Adventure Game</h3>
                    <p className="text-gray-600">Create a 3D adventure game optimized for mobile platforms with touch controls.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Multiplayer Game Framework</h3>
                    <p className="text-gray-600">Build a networked multiplayer game using Unity's networking solutions.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">AR/VR Experience</h3>
                    <p className="text-gray-600">Develop an augmented or virtual reality application for mobile devices.</p>
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
                      <span className="font-medium text-gray-800">Do I need prior programming experience?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Yes, this certification is designed for developers with prior programming experience. You should have a good understanding of C# programming fundamentals and object-oriented concepts. If you're a beginner, we recommend starting with our Unity Essentials or C# Fundamentals courses before attempting this certification.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">Will I need to purchase Unity Pro for this course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        No, Unity Personal edition (which is free) is sufficient for this course. All examples and projects can be completed using Unity Personal. However, if you already have Unity Pro, you can certainly use it for the course.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">How long is the Unity certification valid?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Unity certifications are valid for two years from the date of certification. After this period, recertification is required to maintain your certified status, as Unity frequently updates its platform with new features and capabilities.
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
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">AK</div>
                      <div>
                        <h4 className="font-semibold">Arjun Kumar</h4>
                        <p className="text-sm text-gray-500">Unity Developer at Nazara Games</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"The Unity Certified Programmer course was exactly what I needed to advance my game development career. The curriculum covered advanced programming topics that I use daily in my work now. Within three months of certification, I landed a job at a leading game studio with a 40% salary increase."</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">SM</div>
                      <div>
                        <h4 className="font-semibold">Sanjana Mehta</h4>
                        <p className="text-sm text-gray-500">AR/VR Developer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"I transitioned from web development to AR/VR development through this certification. The hands-on projects helped me build a portfolio that stood out to employers. I now work on exciting AR applications for the real estate industry, and the skills I learned have been invaluable for optimizing performance on mobile devices."</p>
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

export default UnityProgrammer; 