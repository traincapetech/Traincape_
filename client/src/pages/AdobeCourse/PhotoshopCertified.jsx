import React, { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const PhotoshopCertified = () => {
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
      id: "photoshop-certified-professional",
      title: "Adobe Photoshop Certified Professional",
      price: 2499,
      image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
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
      <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              alt="Adobe Photoshop Logo"
              className="h-24 w-24 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Adobe Photoshop <br />
            <span className="text-indigo-600">Certified Professional</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master the industry-standard image editing software and validate your skills with Adobe's professional certification.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Certification Course</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-24 h-24 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              alt="Adobe Photoshop Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-indigo-700 mb-4 text-center md:text-left">
            Adobe Certified Professional
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹2,499</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">In-demand</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Adobe Photoshop Certified Professional
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹2,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹3,999</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">37% off</span>
        </div>
        
        {/* Limited time offer */}
        <p className="text-xs text-gray-500 mb-3">Limited time offer ends in 4 days</p>
        
        {/* Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Full lifetime access
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Practice projects
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Exam prep materials
          </li>
        </ul>
        
        <div className="mt-2 space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
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

      {/* Main Content */}
      <div className="h-full px-4 md:px-[3rem] lg:px-[6rem] py-10">
        <div className="max-w-6xl mx-auto mt-6 bg-white p-0 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="bg-gray-50 border-b">
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500">
              <button 
                className="inline-block p-4 text-indigo-600 border-b-2 border-indigo-600 active"
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
                  The Adobe Photoshop Certified Professional certification validates your skills in the world's most powerful image editing software. This certification demonstrates your proficiency in creating and enhancing digital images, graphics, and designs to industry standards.
                </p>
                <p className="text-gray-700 mb-4">
                  Our comprehensive course prepares you for the Adobe Certified Professional exam in Photoshop, covering all the essential skills needed to pass the certification and excel in the field of digital imaging and design.
                </p>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded my-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-indigo-700">
                        <strong>Sales Note:</strong> In India's rapidly growing creative industry, Adobe Photoshop skills are highly sought after by employers. With over 40,000 creative agencies and design studios in India, Photoshop proficiency is often a basic requirement for roles in graphic design, digital marketing, and UI/UX design. According to industry reports, certified Photoshop professionals in India earn 15-25% more than their non-certified peers. The e-commerce boom has created thousands of new opportunities for photo editors and digital artists, with companies hiring teams dedicated to product photography enhancement. Our placement data shows that 80% of our Photoshop certified students find relevant employment within 2-3 months, with an average starting salary of ₹4-6 LPA for freshers with this certification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Duration</h3>
                  <p className="text-gray-600">8 weeks (self-paced)</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Level</h3>
                  <p className="text-gray-600">Beginner to Intermediate</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Exam Details</h3>
                  <p className="text-gray-600">50 questions, 50 minutes, 700/1000 to pass</p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Project setup and interface navigation</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Organizing and managing image assets</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating and manipulating selections</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Working with layers and masks</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Transforming, retouching, and color correcting</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Creating typography and using vector tools</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Applying filters and effects</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-gray-700">Preparing and exporting assets for various media</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-gray-700 mb-4">
                  With Adobe Photoshop certification, you'll be qualified for positions such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li><strong>Graphic Designer</strong> (₹3-7 LPA)</li>
                  <li><strong>Photo Editor/Retoucher</strong> (₹2.5-5 LPA)</li>
                  <li><strong>Digital Artist</strong> (₹3-6 LPA)</li>
                  <li><strong>UI/UX Designer</strong> (₹4-8 LPA)</li>
                  <li><strong>Social Media Specialist</strong> (₹3-5 LPA)</li>
                  <li><strong>Web Designer</strong> (₹3-6 LPA)</li>
                </ul>
                <p className="text-gray-700">
                  Adobe Photoshop certification serves as a foundation for more advanced creative certifications and specializations within the Adobe Creative Cloud ecosystem.
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Photo Retouching Portfolio</h3>
                    <p className="text-gray-600">Create a portfolio of retouched portraits demonstrating skin retouching, color correction, and enhancement techniques.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Media Graphics Kit</h3>
                    <p className="text-gray-600">Design a set of templates for various social media platforms, including posts, stories, and banners.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Advertisement</h3>
                    <p className="text-gray-600">Create a professional product advertisement with composite imagery, text, and special effects.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Digital Art Creation</h3>
                    <p className="text-gray-600">Develop a digital artwork using advanced Photoshop techniques such as digital painting, masking, and layer effects.</p>
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
                      <span className="font-medium text-gray-800">Do I need any prior experience with Photoshop?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 0 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 0 && (
                      <div className="p-4 pt-0 text-gray-700">
                        No prior experience is required. Our course starts with the basics and progressively builds to advanced techniques. However, having some familiarity with digital imaging concepts or design principles can be helpful but is not necessary.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(1)}
                    >
                      <span className="font-medium text-gray-800">Will I need to purchase Adobe Photoshop for this course?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 1 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 1 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Yes, you will need access to Adobe Photoshop to complete the course projects and practice exercises. We recommend the Adobe Creative Cloud Photography plan, which includes Photoshop. Students can get special discounted rates from Adobe. We also provide a 7-day trial access for students to evaluate the course before committing to purchase the software.
                      </div>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg">
                    <button 
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAnswer(2)}
                    >
                      <span className="font-medium text-gray-800">How long is the Adobe Photoshop certification valid?</span>
                      <svg className={`w-5 h-5 text-gray-500 transform ${selectedQuestion === 2 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {selectedQuestion === 2 && (
                      <div className="p-4 pt-0 text-gray-700">
                        Adobe Certified Professional certifications are valid for three years from the date you pass the exam. After that period, you would need to recertify with the current version of the certification exam to maintain your certified status.
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
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold mr-3">RS</div>
                      <div>
                        <h4 className="font-semibold">Rohit Sharma</h4>
                        <p className="text-sm text-gray-500">Graphic Designer at Ogilvy</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"The Photoshop certification course was exactly what I needed to take my design career to the next level. The hands-on projects helped me build a solid portfolio that impressed recruiters. Within a month of certification, I landed a job at a top advertising agency with a 30% salary increase from my previous role."</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold mr-3">NK</div>
                      <div>
                        <h4 className="font-semibold">Neha Kumar</h4>
                        <p className="text-sm text-gray-500">Freelance Photo Retoucher</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"I took this course to transition from photography to photo retouching. The advanced techniques taught were eye-opening, and the certification gave me credibility in a competitive market. I now run a successful freelance retouching business with clients across India and internationally, charging premium rates for my certified expertise."</p>
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

export default PhotoshopCertified; 