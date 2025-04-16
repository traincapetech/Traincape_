import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const AutodeskAutoCAD = () => {
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
      id: 'autodesk-autocad',
      title: 'Autodesk Certified User - AutoCAD',
      price: 1999,
      image: "https://images.ctfassets.net/o39iwwsdb4a6/7FYmKa0oa65GXLp52XsCFv/46b1df6c5fe63b39ba4a7f26ab00aa37/autocad-icon-128.png",
      quantity: 1
    };

    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-md z-50 transition-all duration-300">
          Item added to cart successfully!
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://images.ctfassets.net/o39iwwsdb4a6/7FYmKa0oa65GXLp52XsCFv/46b1df6c5fe63b39ba4a7f26ab00aa37/autocad-icon-128.png" 
              alt="AutoCAD Logo" 
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Autodesk Certified User - AutoCAD</h1>
            <p className="text-xl">Master the Industry-Standard 2D and 3D CAD Software</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">₹1,999</h2>
              <div className="flex items-center">
                <p className="text-gray-500 line-through mr-2">₹2,999</p>
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">33% off</span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">Limited time offer: 4 days left at this price!</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <AddToCartButton onClick={handleAddToCart} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md" text="Add to Cart" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200">
            <button className="px-6 py-3 text-red-600 border-b-2 border-red-600 font-medium">Overview</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Curriculum</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Career Paths</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">FAQ</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Reviews</button>
          </div>

          {/* Course Overview */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              The Autodesk Certified User (ACU) in AutoCAD certification validates your skills in computer-aided design with the industry's leading 2D and 3D design software. This course prepares you for the ACU AutoCAD certification exam, covering the fundamental concepts and skills necessary to create, modify, and document technical designs efficiently. You'll learn how to navigate the AutoCAD interface, work with drawing tools, use precision drawing techniques, apply annotations, and create professional technical documentation.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
              <p className="text-gray-700">
                AutoCAD skills are highly sought after in various industries, including architecture, engineering, construction, manufacturing, and product design. With an ACU certification in AutoCAD, you'll demonstrate your proficiency to employers and stand out in the competitive job market. This certification serves as a solid foundation for career advancement and provides a pathway to more advanced Autodesk certifications.
              </p>
            </div>

            {/* Course Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                <p className="text-gray-600">8-10 weeks, self-paced</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Skill Level</h3>
                <p className="text-gray-600">Beginner to Intermediate</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Job Relevance</h3>
                <p className="text-gray-600">CAD Drafter, Architectural Drafter, Design Engineer</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Autodesk Certified User in AutoCAD</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>AutoCAD interface navigation and customization</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Drawing setup and coordinate systems</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Creating basic and complex 2D objects</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Geometric construction techniques</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Editing and modifying objects</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Layers, properties, and object organization</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Dimensioning and annotation</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                      <span>Layouts, plotting, and publishing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">With AutoCAD certification, you can pursue these high-demand careers:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">CAD Drafter</strong>
                    <span className="text-gray-600"> - ₹2,50,000 - ₹5,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Architectural Drafter</strong>
                    <span className="text-gray-600"> - ₹3,00,000 - ₹6,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Mechanical Designer</strong>
                    <span className="text-gray-600"> - ₹3,50,000 - ₹7,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-red-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Civil Engineering Technician</strong>
                    <span className="text-gray-600"> - ₹3,00,000 - ₹6,50,000 per year</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose This Course</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                  <span>Industry-recognized Autodesk certification</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                  <span>Learn from authorized Autodesk training materials</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                  <span>Hands-on projects simulating real-world design scenarios</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                  <span>Preparation for the official ACU exam</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mt-1 mr-2" />
                  <span>Expert instructors with industry experience</span>
                </li>
              </ul>
            </div>

            {/* Exam Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exam Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Exam Format</h3>
                  <p className="text-gray-600">Performance-based, in-application testing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                  <p className="text-gray-600">50 minutes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Passing Score</h3>
                  <p className="text-gray-600">700 out of 1000 points</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Additional Info</h3>
                  <p className="text-gray-600">Delivered by Certiport, Valid for 3 years</p>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(1)}
                  >
                    <h3 className="font-medium text-gray-800">Do I need prior experience with AutoCAD to take this course?</h3>
                    <span className="text-xl font-bold text-red-500">{selectedQuestion === 1 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        No prior experience with AutoCAD is required. This course is designed for beginners and will introduce you to all the concepts from the ground up. The course progresses in a structured manner, ensuring you build a solid foundation before moving on to more advanced topics. However, basic computer skills and familiarity with Windows operating system are recommended. If you have experience with other CAD software or technical drawing, you may progress more quickly through the early modules. You'll get access to AutoCAD during the course through the Autodesk Education Community.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(2)}
                  >
                    <h3 className="font-medium text-gray-800">How does the Autodesk Certified User certification differ from the Autodesk Certified Professional?</h3>
                    <span className="text-xl font-bold text-red-500">{selectedQuestion === 2 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        The Autodesk Certified User (ACU) certification validates fundamental skills for entry-level positions and focuses on core software functionality. The Autodesk Certified Professional (ACP) certification is more advanced, testing your ability to solve complex challenges and typically requires industry experience. ACU is an excellent starting point and demonstrates that you can successfully use AutoCAD to create and edit 2D drawings with proper dimensions, annotations, and layouts. The Professional certification goes further, requiring you to handle complex design scenarios, optimize workflows, and demonstrate expert-level knowledge. Many professionals start with the ACU certification and then progress to the Professional level after gaining work experience and advanced skills.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(3)}
                  >
                    <h3 className="font-medium text-gray-800">What are the system requirements to run AutoCAD?</h3>
                    <span className="text-xl font-bold text-red-500">{selectedQuestion === 3 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        AutoCAD requires a reasonably powerful computer for optimal performance. The minimum requirements include a 64-bit processor (Intel or AMD) with at least 2.5 GHz (3+ GHz recommended), 8GB RAM (16GB recommended), 6GB of free disk space, and a graphics card with at least 1GB of VRAM that supports DirectX 11. AutoCAD runs on Windows 10 or 11. For Mac users, there is AutoCAD for Mac, but it has slightly different features than the Windows version, and our course focuses on the Windows version. For complex 3D models, you'll benefit from more powerful hardware, especially additional RAM and a better graphics card. The software is continually updated, so it's always good to check the official Autodesk website for the latest requirements.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "The AutoCAD certification course was exactly what I needed to transition into the architecture field. The step-by-step approach made complex concepts easily understandable, and the practical projects helped me build a strong portfolio. Within two months of getting certified, I landed a job as a CAD drafter at an architecture firm in Bangalore."
                  </p>
                  <h4 className="font-medium text-gray-800">- Vikram S., CAD Drafter</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "I was a mechanical engineering student looking to improve my job prospects. The AutoCAD certification not only taught me the software but also industry best practices for technical documentation. The certification gave me a competitive edge, and I'm now working with a manufacturing company where I use AutoCAD daily for product design and manufacturing drawings."
                  </p>
                  <h4 className="font-medium text-gray-800">- Priya M., Design Engineer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutodeskAutoCAD; 