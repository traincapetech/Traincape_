import React, { useEffect, useState } from 'react'
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";
import { FaCheck } from "react-icons/fa";

const AdobeLightroom = () => {
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
      id: "adobe-lightroom-certified-professional",
      title: "Adobe Lightroom Certified Professional",
      price: 2499,
      image: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/lightroom.svg",
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
      <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-white w-full h-auto md:h-[24rem] pt-10 px-4 md:px-10 text-left overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full -mr-12 -mt-12 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 opacity-5 rounded-full -ml-12 -mb-12 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start xl:pl-20">
            <img
              src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/lightroom.svg"
              alt="Adobe Lightroom Logo"
              className="h-24 w-36 transition-all duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left xl:pl-20 mt-4">
            Adobe Lightroom <br />
            <span className="text-yellow-600">Certified Professional</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl text-center md:text-left xl:pl-20">
            Master photo editing and organization with Adobe Lightroom. Become a Certified Professional in the industry's leading photo management software.
          </p>
        </div>
        
        <div className="mt-6 md:absolute md:top-10 md:right-10 w-full md:w-80 h-auto md:h-auto flex flex-col items-center md:items-start bg-white shadow-xl p-6 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 z-10">
          {/* Title */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-full py-2 px-4 rounded-lg mb-4">
            <h1 className="text-lg md:text-xl font-bold text-white text-center">Certification Course</h1>
          </div>

          {/* Image */}
          <div className="bg-gray-50 p-4 rounded-lg w-full flex justify-center mb-4">
            <img
              className="w-40 h-20 object-contain"
              src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/lightroom.svg"
              alt="Adobe Lightroom Logo"
            />
          </div>

          {/* Description */}
          <h3 className="text-lg md:text-base font-bold text-yellow-700 mb-4 text-center md:text-left">
            Photo Editing & Management
          </h3>

          {/* Price with badge */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-xl font-bold text-left">₹2,499</h5>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Industry-Leading</span>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-10 md:left-auto md:right-10 lg:right-[1rem] lg:top-[25rem] xl:right-[15rem] xl:top-[30rem] max-w-full md:max-w-xs bg-white p-6 shadow-xl rounded-xl border border-gray-100 z-40 backdrop-blur-sm bg-white/95">
        <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">
          Adobe Lightroom Certified Professional
        </h2>
        
        {/* Price with original price */}
        <div className="flex items-center mb-2">
          <p className="text-2xl font-bold text-gray-900">₹2,499</p>
          <p className="ml-2 text-sm text-gray-500 line-through">₹3,999</p>
          <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">38% off</span>
        </div>

        {/* Course features */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
            <span>Complete Lightroom mastery</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
            <span>Adobe certification exam</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
            <span>Lifetime access</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
            <span>Project-based learning</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {showConfirmation ? "Added to Cart! ✓" : "Add to Cart"}
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-6">
                Adobe Lightroom is the industry-standard software for photo editing, organization, and 
                workflow management. This comprehensive course will take you from beginner to Adobe 
                Certified Professional, covering all essential tools and techniques for professional photography.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Photo organization and cataloging</li>
                    <li>• Color correction and grading</li>
                    <li>• Exposure and contrast adjustment</li>
                    <li>• Local adjustments and masking</li>
                    <li>• Presets and batch processing</li>
                    <li>• Export and print preparation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Career Outcomes</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional Photographer</li>
                    <li>• Photo Editor</li>
                    <li>• Wedding Photographer</li>
                    <li>• Portrait Photographer</li>
                    <li>• Commercial Photographer</li>
                    <li>• Photo Retoucher</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "Do I need prior photography experience?",
                    answer: "No prior experience is required. This course starts from the basics and progresses to advanced techniques."
                  },
                  {
                    question: "What software do I need?",
                    answer: "You'll need Adobe Lightroom (Creative Cloud subscription recommended for the latest features)."
                  },
                  {
                    question: "How long does the certification take?",
                    answer: "The course typically takes 4-6 weeks to complete, depending on your pace and practice time."
                  },
                  {
                    question: "Is the certification recognized?",
                    answer: "Yes, Adobe Certified Professional is globally recognized and highly valued by employers in the photography industry."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full text-left p-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                      onClick={() => toggleAnswer(index)}
                    >
                      {faq.question}
                    </button>
                    {selectedQuestion === index && (
                      <div className="px-4 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Course Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">35+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-semibold">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-semibold">Video + Projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate:</span>
                  <span className="font-semibold">Adobe Certified</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 35+ hours of video content</li>
                  <li>✓ Real-world projects</li>
                  <li>✓ Adobe certification exam</li>
                  <li>✓ Lifetime access</li>
                  <li>✓ Community support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdobeLightroom; 