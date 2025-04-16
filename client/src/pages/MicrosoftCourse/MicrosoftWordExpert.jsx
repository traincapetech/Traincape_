import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const MicrosoftWordExpert = () => {
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
      id: 'microsoft-word-expert',
      name: 'Microsoft Word Expert Certification',
      price: 1499,
      image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg" 
              alt="Microsoft Logo" 
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Microsoft Word Expert Certification</h1>
            <p className="text-xl">Advanced Document Production and Management with Microsoft Word</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">₹1,499</h2>
              <div className="flex items-center">
                <p className="text-gray-500 line-through mr-2">₹1,999</p>
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">25% off</span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">Limited time offer: 5 days left at this price!</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <AddToCartButton onClick={handleAddToCart} />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md">
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
            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">Overview</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Curriculum</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Career Paths</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">FAQ</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Reviews</button>
          </div>

          {/* Course Overview */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              The Microsoft Word Expert Certification validates advanced skills in document creation and management. This certification demonstrates your expertise in complex document formatting, collaboration, security features, and advanced content management. Microsoft Word Expert certification is designed for professionals who need to create sophisticated documents, automate document production, and utilize advanced features for enterprise-level document management.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-gray-700">
                The demand for Microsoft Word Experts continues to grow as organizations require more sophisticated document solutions. With this certification, you'll stand out as a document specialist who can handle complex documentation needs, develop templates, automate processes, and implement document management best practices. Employers value Word Expert certification as proof of advanced abilities that can improve productivity and document quality.
              </p>
            </div>

            {/* Course Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                <p className="text-gray-600">4-6 weeks, self-paced</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Skill Level</h3>
                <p className="text-gray-600">Advanced</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Job Relevance</h3>
                <p className="text-gray-600">Executive Assistant, Technical Writer, Documentation Specialist</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Microsoft Office Specialist: Word Expert (Word and Word 2019)</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Advanced document formatting and layout</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Styles and themes management</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Advanced mail merge operations</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Form creation and management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Macros and automation</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Document collaboration and protection</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Advanced content controls</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Custom building blocks and templates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">With Microsoft Word Expert certification, you can pursue various career paths:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Executive Assistant</strong>
                    <span className="text-gray-600"> - ₹4,00,000 - ₹7,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Technical Writer</strong>
                    <span className="text-gray-600"> - ₹5,00,000 - ₹9,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Documentation Specialist</strong>
                    <span className="text-gray-600"> - ₹4,50,000 - ₹8,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Office Manager</strong>
                    <span className="text-gray-600"> - ₹5,00,000 - ₹8,00,000 per year</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose This Course</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Industry-recognized Microsoft certification</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Learn advanced document automation techniques</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Master professional document production</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Develop skills in document security and collaboration</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Enhance your productivity with Word templates and building blocks</span>
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
                  <p className="text-gray-600">Delivered by Certiport, Valid for life</p>
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
                    <h3 className="font-medium text-gray-800">What are the prerequisites for taking the Microsoft Word Expert exam?</h3>
                    <span className="text-xl font-bold text-blue-500">{selectedQuestion === 1 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        While there are no mandatory prerequisites for the Word Expert exam, it is recommended that you have at least six months of experience with Microsoft Word, a basic understanding of the Word interface and features, and some experience with Word Associate-level functions. This course will prepare you for the exam, but prior experience with Microsoft Word will be beneficial.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(2)}
                  >
                    <h3 className="font-medium text-gray-800">How is the Microsoft Word Expert exam different from the Word Associate exam?</h3>
                    <span className="text-xl font-bold text-blue-500">{selectedQuestion === 2 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        The Word Expert exam focuses on advanced Word features that go beyond the basics covered in the Associate level. The Expert exam tests skills in advanced formatting, document collaboration, form creation, document automation, and security features. It requires a deeper understanding of Word's capabilities and how to implement complex document solutions.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(3)}
                  >
                    <h3 className="font-medium text-gray-800">Does this certification expire?</h3>
                    <span className="text-xl font-bold text-blue-500">{selectedQuestion === 3 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        No, the Microsoft Word Expert certification does not expire. However, as new versions of Microsoft Word are released, you may want to update your certification to demonstrate proficiency with the latest features and capabilities.
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
                    "The Microsoft Word Expert certification completely transformed my document creation abilities. I can now automate most of my repetitive tasks, which has improved my productivity tremendously. My employer was so impressed with my new skills that I received a promotion!"
                  </p>
                  <h4 className="font-medium text-gray-800">- Priya S., Executive Assistant</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "As a technical writer, mastering advanced Word features has been invaluable. The templates and content controls I learned have standardized our documentation process. This certification was one of the best investments in my career development."
                  </p>
                  <h4 className="font-medium text-gray-800">- Vikram R., Technical Documentation Specialist</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftWordExpert; 