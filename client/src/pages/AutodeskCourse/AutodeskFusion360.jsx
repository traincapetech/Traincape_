import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const AutodeskFusion360 = () => {
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
      id: 'autodesk-fusion360',
      title: 'Autodesk Certified User - Fusion 360',
      price: 1999,
      image: "https://damassets.autodesk.net/content/dam/autodesk/www/products/fusion-360/fy22/fusion-360-badge-64x64.png",
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
      <div className="bg-gradient-to-r from-orange-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://damassets.autodesk.net/content/dam/autodesk/www/products/fusion-360/fy22/fusion-360-badge-64x64.png" 
              alt="Fusion 360 Logo" 
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Autodesk Certified User - Fusion 360</h1>
            <p className="text-xl">Master CAD/CAM Design for Engineering and Manufacturing</p>
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
              <p className="text-sm text-yellow-600 mt-1">Limited time offer: 7 days left at this price!</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <AddToCartButton onClick={handleAddToCart} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md" text="Add to Cart" />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md">
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
            <button className="px-6 py-3 text-orange-500 border-b-2 border-orange-500 font-medium">Overview</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Curriculum</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Career Paths</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">FAQ</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Reviews</button>
          </div>

          {/* Course Overview */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              The Autodesk Certified User (ACU) in Fusion 360 validates your skills in 3D design, engineering, and manufacturing. This certification demonstrates your proficiency in parametric modeling, generative design, simulation, rendering, and computer-aided manufacturing (CAM). You'll learn how to use Fusion 360's integrated cloud-based platform to take products from concept to production, collaborating across disciplines and bringing innovative designs to reality.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
              <p className="text-gray-700">
                Fusion 360 skills are highly in demand across multiple industries including product design, manufacturing, engineering, and industrial design. With India's growing manufacturing sector and focus on innovation, professionals with Fusion 360 certification have excellent career prospects. This certification serves as proof of your ability to design and engineer products using industry-standard tools, opening doors to opportunities with manufacturing companies, design firms, engineering consultancies, and product development teams.
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
                <p className="text-gray-600">Product Designer, CAD Engineer, CNC Programmer</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Autodesk Certified User in Fusion 360</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Navigate the Fusion 360 interface and workflow</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Create parametric 3D models using solid modeling</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Assemble components with constraints and joints</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Generate engineering drawings from 3D models</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Perform simulations and analysis on designs</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Create CAM toolpaths for CNC machining</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Apply rendering techniques for photorealistic imagery</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                      <span>Utilize cloud collaboration features for team projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">With Fusion 360 certification, you can pursue these high-demand careers:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-orange-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Product Designer</strong>
                    <span className="text-gray-600"> - ₹4,00,000 - ₹8,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-orange-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">CAD Engineer</strong>
                    <span className="text-gray-600"> - ₹3,50,000 - ₹7,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-orange-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">CNC Programmer</strong>
                    <span className="text-gray-600"> - ₹3,00,000 - ₹6,50,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-orange-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Manufacturing Engineer</strong>
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
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                  <span>Industry-recognized Autodesk certification</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                  <span>Hands-on projects based on real engineering challenges</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                  <span>Learn industry-standard CAD/CAM techniques</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                  <span>Preparation for the official ACU Fusion 360 exam</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mt-1 mr-2" />
                  <span>Portfolio-ready engineering projects to showcase your skills</span>
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
                    <h3 className="font-medium text-gray-800">Do I need engineering knowledge to learn Fusion 360?</h3>
                    <span className="text-xl font-bold text-orange-500">{selectedQuestion === 1 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        While having a basic understanding of engineering principles can be helpful, it's not a strict requirement for learning Fusion 360. The course is designed to gradually introduce technical concepts alongside the software tools. If you're new to engineering and design, you may need to spend some additional time understanding certain concepts like material properties, manufacturing constraints, or mechanical principles. However, the course provides all the necessary background information and contextual knowledge needed to successfully complete the projects and pass the certification exam.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(2)}
                  >
                    <h3 className="font-medium text-gray-800">How is Fusion 360 different from other CAD software?</h3>
                    <span className="text-xl font-bold text-orange-500">{selectedQuestion === 2 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        Fusion 360 stands out from other CAD software due to its all-in-one approach. Unlike traditional CAD programs that might focus solely on design, Fusion 360 integrates design, engineering, simulation, and manufacturing in a single platform. It's cloud-based, which enables seamless collaboration and access from any computer. It uses a hybrid parametric and direct modeling approach, giving users flexibility in how they create designs. Fusion 360 also includes generative design capabilities, which use AI to suggest design alternatives based on constraints you specify. Additionally, it offers a subscription model with a free tier for students, startups, and hobbyists, making it more accessible than many traditional CAD systems.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(3)}
                  >
                    <h3 className="font-medium text-gray-800">What kinds of projects will I complete during this course?</h3>
                    <span className="text-xl font-bold text-orange-500">{selectedQuestion === 3 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        Throughout the course, you'll work on a variety of practical projects that showcase different aspects of Fusion 360's capabilities. These include designing mechanical components like brackets, gears, and housings; creating assemblies with moving parts; designing consumer products with organic shapes; setting up simulations to test structural integrity and thermal performance; preparing models for manufacturing with CNC toolpaths; and exploring generative design for lightweight, high-performance parts. Each project builds on the skills from previous lessons, culminating in a final capstone project that integrates multiple aspects of the design and manufacturing process. All projects are designed to be portfolio-worthy examples of your work with Fusion 360.
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
                    "The Fusion 360 certification course was exactly what I needed to transition from traditional mechanical drafting to modern CAD/CAM design. The curriculum covered everything from basic modeling to advanced manufacturing techniques. I was able to use the projects in my portfolio, which helped me secure a position with an automotive parts manufacturer."
                  </p>
                  <h4 className="font-medium text-gray-800">- Suresh P., CAD Designer</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "As an entrepreneur starting a product design business, learning Fusion 360 was critical for my success. This course taught me not just the software but the entire product development workflow from concept to manufacturing. The simulation and generative design modules were particularly valuable for optimizing my designs before prototyping, saving time and materials."
                  </p>
                  <h4 className="font-medium text-gray-800">- Anjali R., Product Design Entrepreneur</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutodeskFusion360; 