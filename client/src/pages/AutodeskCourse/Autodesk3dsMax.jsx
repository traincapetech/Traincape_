import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const Autodesk3dsMax = () => {
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
      id: 'autodesk-3dsmax',
      title: 'Autodesk Certified User - 3ds Max',
      price: 1999,
      image: "https://damassets.autodesk.net/content/dam/autodesk/www/products/3ds-max/fy22/3ds-max-lockup-1200x1200.png",
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
      <div className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://damassets.autodesk.net/content/dam/autodesk/www/products/3ds-max/fy22/3ds-max-lockup-1200x1200.png" 
              alt="3ds Max Logo" 
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Autodesk Certified User - 3ds Max</h1>
            <p className="text-xl">Master 3D Modeling, Animation, and Rendering for Visual Effects</p>
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
            <AddToCartButton onClick={handleAddToCart} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md" text="Add to Cart" />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md">
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
            <button className="px-6 py-3 text-indigo-600 border-b-2 border-indigo-600 font-medium">Overview</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Curriculum</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Career Paths</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">FAQ</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Reviews</button>
          </div>

          {/* Course Overview */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              The Autodesk Certified User (ACU) in 3ds Max validates your skills in 3D modeling, animation, and rendering. This certification demonstrates your proficiency in creating detailed 3D models, applying materials and textures, setting up lighting, animating objects, and rendering high-quality images and videos. You'll learn how to work with the powerful tools in 3ds Max to create stunning visual content for games, films, television, architecture visualization, and design.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
              <p className="text-gray-700">
                3ds Max skills are highly sought after in the entertainment, architecture, and design industries. With the growing demand for 3D content across gaming, animation, visual effects, and architectural visualization, professionals with 3ds Max certification have excellent career opportunities. This certification serves as tangible proof of your ability to create professional-quality 3D assets and can lead to opportunities in game studios, animation companies, architectural firms, and design agencies.
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
                <p className="text-gray-600">3D Modeler, Animator, Visualization Artist</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Autodesk Certified User in 3ds Max</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Navigate the 3ds Max interface and user workflow</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Create and modify 3D models using polygon modeling</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Apply materials, textures, and UV mapping</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Set up lighting and camera systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Create keyframe animation and rigging</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Use particle systems and dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Render scenes for different output formats</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Integrate with other Autodesk software for production pipelines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">With 3ds Max certification, you can pursue these high-demand careers:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">3D Modeler</strong>
                    <span className="text-gray-600"> - ₹3,50,000 - ₹7,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">3D Animator</strong>
                    <span className="text-gray-600"> - ₹4,00,000 - ₹8,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Architectural Visualization Artist</strong>
                    <span className="text-gray-600"> - ₹3,80,000 - ₹7,50,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Game Environment Artist</strong>
                    <span className="text-gray-600"> - ₹4,50,000 - ₹9,00,000 per year</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose This Course</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                  <span>Industry-recognized Autodesk certification</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                  <span>Hands-on projects based on real production scenarios</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                  <span>Learn industry-standard 3D modeling and animation techniques</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                  <span>Preparation for the official ACU 3ds Max exam</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                  <span>Portfolio-ready 3D projects to showcase your skills to employers</span>
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
                    <h3 className="font-medium text-gray-800">Do I need artistic skills to learn 3ds Max?</h3>
                    <span className="text-xl font-bold text-indigo-500">{selectedQuestion === 1 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        While having artistic skills can be beneficial, it's not a strict requirement for learning 3ds Max. The software is technical in nature, and many aspects of 3D modeling, texturing, and animation can be learned through practice and understanding the tools. This course focuses on building both technical proficiency with the software and developing your artistic eye. We provide reference materials and guided exercises that help you develop the visual skills needed for 3D modeling and design alongside the technical knowledge.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(2)}
                  >
                    <h3 className="font-medium text-gray-800">What are the system requirements for running 3ds Max?</h3>
                    <span className="text-xl font-bold text-indigo-500">{selectedQuestion === 2 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        3ds Max requires a relatively powerful computer to run smoothly. The recommended specifications include a 64-bit processor (Intel or AMD) with at least 4 cores, 16GB+ RAM (32GB recommended for complex scenes), a professional graphics card with at least 4GB VRAM (NVIDIA or AMD), and 9GB of free disk space for installation. Windows 10 or 11 is required. The software cannot run on macOS natively. If you're using a Mac, you would need to set up Windows via Boot Camp or use virtualization software, though performance may be affected. We recommend checking the official Autodesk site for the most current system requirements.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(3)}
                  >
                    <h3 className="font-medium text-gray-800">What industries use 3ds Max beyond gaming and film?</h3>
                    <span className="text-xl font-bold text-indigo-500">{selectedQuestion === 3 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        While 3ds Max is widely used in gaming and film, it's also extensively used in many other industries. Architectural visualization firms use it to create realistic renderings and walkthroughs of buildings before they're constructed. Product design companies use it for prototyping and marketing renders. The advertising industry employs 3ds Max for creating commercial visuals. Medical visualization uses it for educational and training purposes. Virtual reality experiences, simulation training for various industries, and even forensic reconstruction all utilize 3ds Max's powerful modeling and visualization capabilities. The skills you learn in this course can be applied across this diverse range of fields.
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
                    "Learning 3ds Max through this course was a game-changer for my career. I went from being a 2D graphic designer to creating 3D visualizations for architectural firms. The structured learning approach helped me master complex concepts, and I was able to build an impressive portfolio that got me hired within weeks of certification."
                  </p>
                  <h4 className="font-medium text-gray-800">- Rahul K., Visualization Artist</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "As someone who wanted to break into the gaming industry, this 3ds Max certification gave me the skills I needed to land my first job as an environment artist. The course projects were practical and industry-relevant, which meant I could show potential employers exactly what I could do. I'm now working at a mobile game studio in Pune and loving it!"
                  </p>
                  <h4 className="font-medium text-gray-800">- Divya S., Environment Artist</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autodesk3dsMax; 