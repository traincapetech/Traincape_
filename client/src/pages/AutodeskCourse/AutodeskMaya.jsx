import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const AutodeskMaya = () => {
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
      id: 'autodesk-maya',
      title: 'Autodesk Certified User - Maya',
      price: 2499,
      image: "https://upload.wikimedia.org/wikipedia/en/7/77/Autodesk_Maya_logo.svg",
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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/7/77/Autodesk_Maya_logo.svg" 
              alt="Maya Logo" 
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Autodesk Certified User - Maya</h1>
            <p className="text-xl">Master 3D Animation, Modeling, and Visual Effects with Industry-Standard Software</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">₹2,499</h2>
              <div className="flex items-center">
                <p className="text-gray-500 line-through mr-2">₹3,499</p>
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">28% off</span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">Limited time offer: 5 days left at this price!</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <AddToCartButton onClick={handleAddToCart} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md" text="Add to Cart" />
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
              The Autodesk Certified User (ACU) in Maya certification validates your expertise in 3D modeling, animation, visual effects, and rendering using Autodesk Maya. This industry-recognized certification demonstrates your proficiency in creating high-quality 3D content for films, television, games, and visualizations. You'll learn the core features and workflows of Maya to bring your creative visions to life with professional-grade tools used by studios worldwide.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
              <p className="text-gray-700">
                Maya skills are highly sought after in India's booming animation and VFX industry, which is projected to grow significantly in the coming years. With major studios and production houses looking for certified professionals, an Autodesk Maya certification can be your gateway to exciting opportunities in film production, game development, architectural visualization, and advertising. This certification serves as tangible proof of your ability to create compelling 3D content using industry-standard software.
              </p>
            </div>

            {/* Course Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                <p className="text-gray-600">12 weeks, self-paced</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Skill Level</h3>
                <p className="text-gray-600">Beginner to Intermediate</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Job Relevance</h3>
                <p className="text-gray-600">3D Animator, Character Modeler, VFX Artist</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Autodesk Certified User in Maya</p>
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
                      <span>Navigate the Maya interface and customize workspaces</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Create 3D models using polygonal and NURBS modeling</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Rig characters and create skeletal animation systems</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Apply textures and materials to 3D objects</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Create keyframe animation and motion paths</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Use dynamics and simulations for realistic effects</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Set up lighting and cameras for scene rendering</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-500 mt-1 mr-2" />
                      <span>Create visual effects using particles and nParticles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">With Maya certification, you can pursue these high-demand careers in India's growing animation and VFX industry:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">3D Animator</strong>
                    <span className="text-gray-600"> - ₹4,50,000 - ₹9,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Character Modeler</strong>
                    <span className="text-gray-600"> - ₹4,00,000 - ₹8,50,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">VFX Artist</strong>
                    <span className="text-gray-600"> - ₹5,00,000 - ₹12,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-indigo-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Technical Director</strong>
                    <span className="text-gray-600"> - ₹6,00,000 - ₹15,00,000 per year</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose This Course</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Industry Recognition</h3>
                  <p className="text-gray-700">Earn a globally recognized certification from Autodesk that validates your skills to employers worldwide.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Practical Projects</h3>
                  <p className="text-gray-700">Build a professional portfolio with hands-on projects that demonstrate your Maya expertise to potential employers.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Expert Instruction</h3>
                  <p className="text-gray-700">Learn from instructors with industry experience in animation studios and VFX production houses.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Exam Preparation</h3>
                  <p className="text-gray-700">Comprehensive preparation for the official Autodesk Certified User exam with practice tests and study materials.</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(1)}
                  >
                    <span className="font-medium text-gray-800">Do I need any prior experience with 3D software?</span>
                    <span className="text-indigo-500">{selectedQuestion === 1 ? '−' : '+'}</span>
                  </button>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        No prior experience is necessary. The course starts with the basics and gradually introduces more advanced concepts. However, some background in art, design, or computer graphics can be helpful.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(2)}
                  >
                    <span className="font-medium text-gray-800">What computer specifications do I need for Maya?</span>
                    <span className="text-indigo-500">{selectedQuestion === 2 ? '−' : '+'}</span>
                  </button>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        For optimal performance, we recommend a computer with at least 16GB RAM, a multi-core processor, a dedicated graphics card with at least 4GB VRAM, and 20GB+ free disk space. Both Windows and Mac are supported.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(3)}
                  >
                    <span className="font-medium text-gray-800">How long is the certification valid?</span>
                    <span className="text-indigo-500">{selectedQuestion === 3 ? '−' : '+'}</span>
                  </button>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        The Autodesk Certified User certification does not expire. However, you may want to keep your skills updated with newer versions of Maya as they are released to stay relevant in the industry.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    "The Autodesk Maya course provided me with the skills I needed to land my first job at an animation studio in Bangalore. The instructors were knowledgeable and the curriculum covered everything from basics to advanced techniques."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-3">
                      RS
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Rahul Singh</p>
                      <p className="text-gray-600 text-sm">Junior Animator at Xilam Animation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    "As someone with no background in animation, this course was perfect for me. The step-by-step approach made learning Maya accessible, and I'm now freelancing as a 3D modeler for clients across India and abroad."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-3">
                      PK
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Priya Kapoor</p>
                      <p className="text-gray-600 text-sm">Freelance 3D Artist</p>
                    </div>
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

export default AutodeskMaya;