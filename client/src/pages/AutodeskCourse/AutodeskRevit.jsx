import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const AutodeskRevit = () => {
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
      id: 'autodesk-revit',
      title: 'Autodesk Certified User - Revit Architecture',
      price: 2499,
      image: "https://upload.wikimedia.org/wikipedia/en/7/76/Autodesk_Revit_logo.png",
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
      <div className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/76/Autodesk_Revit_logo.png"
              alt="Revit Logo"
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">
              Autodesk Certified User - Revit Architecture
            </h1>
            <p className="text-xl">
              Master Building Information Modeling (BIM) with Industry-Leading
              Software
            </p>
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
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                  28% off
                </span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">
                Limited time offer: 4 days left at this price!
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <AddToCartButton onClick={handleAddToCart} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md" text="Add to Cart" />
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md">
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
            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">
              Overview
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">
              Curriculum
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">
              Career Paths
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">
              FAQ
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">
              Reviews
            </button>
          </div>

          {/* Course Overview */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Course Overview
            </h2>
            <p className="text-gray-700 mb-6">
              The Autodesk Certified User (ACU) in Revit Architecture validates
              your skills in Building Information Modeling (BIM) and
              architectural design. This certification demonstrates your
              proficiency in creating and modifying building components, working
              with project information, and producing construction documentation
              using Revit. You'll learn how to develop architectural models,
              create families, manage views, and collaborate effectively on
              construction projects.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-gray-700">
                Revit skills are highly sought after in the architecture,
                engineering, and construction (AEC) industries. As BIM adoption
                continues to increase globally, professionals with Revit
                certification have a significant advantage in the job market.
                This certification serves as tangible proof of your ability to
                use Revit effectively in a professional environment and can lead
                to career opportunities with architectural firms, construction
                companies, and engineering consultancies.
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
                <p className="text-gray-600">
                  BIM Modeler, Architectural Drafter, Revit Technician
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">
                  Autodesk Certified User in Revit Architecture
                </p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>
                        Navigate the Revit user interface and project
                        environment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>
                        Create building elements (walls, doors, windows, floors)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>Manage levels, grids, and reference planes</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>Create and modify component families</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>
                        Generate building schedules and material takeoffs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>
                        Create and customize presentation views and sheets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>
                        Develop detailed documentation for construction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-500 mt-1 mr-2"
                      />
                      <span>
                        Collaborate with project stakeholders using BIM
                        workflows
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Career Opportunities
              </h2>
              <p className="text-gray-700 mb-4">
                With Revit Architecture certification, you can pursue these
                high-demand careers:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <div>
                    <strong className="text-gray-800">BIM Modeler</strong>
                    <span className="text-gray-600">
                      {" "}
                      - ₹3,00,000 - ₹6,00,000 per year
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <div>
                    <strong className="text-gray-800">
                      Architectural Drafter
                    </strong>
                    <span className="text-gray-600">
                      {" "}
                      - ₹3,50,000 - ₹6,50,000 per year
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <div>
                    <strong className="text-gray-800">Revit Technician</strong>
                    <span className="text-gray-600">
                      {" "}
                      - ₹4,00,000 - ₹7,00,000 per year
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <div>
                    <strong className="text-gray-800">Junior Architect</strong>
                    <span className="text-gray-600">
                      {" "}
                      - ₹4,50,000 - ₹8,00,000 per year
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose This Course
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <span>Industry-recognized Autodesk certification</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <span>
                    Hands-on projects based on real architectural scenarios
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <span>Learn BIM best practices and workflows</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <span>Preparation for the official ACU Revit exam</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-blue-500 mt-1 mr-2"
                  />
                  <span>
                    Portfolio-ready projects to showcase your skills to
                    employers
                  </span>
                </li>
              </ul>
            </div>

            {/* Exam Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Exam Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Exam Format</h3>
                  <p className="text-gray-600">
                    Performance-based, in-application testing
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                  <p className="text-gray-600">50 minutes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">
                    Passing Score
                  </h3>
                  <p className="text-gray-600">700 out of 1000 points</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">
                    Additional Info
                  </h3>
                  <p className="text-gray-600">
                    Delivered by Certiport, Valid for 3 years
                  </p>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(1)}
                  >
                    <h3 className="font-medium text-gray-800">
                      Is this course suitable for complete beginners to
                      architectural design?
                    </h3>
                    <span className="text-xl font-bold text-blue-500">
                      {selectedQuestion === 1 ? "−" : "+"}
                    </span>
                  </div>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        Yes, this course is designed to accommodate beginners to
                        both Revit and architectural design. We start with the
                        fundamentals and gradually progress to more advanced
                        topics. However, having some basic understanding of
                        architectural concepts and principles will be helpful.
                        If you're completely new to the field, you might need to
                        spend some additional time familiarizing yourself with
                        architectural terminology and conventions.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(2)}
                  >
                    <h3 className="font-medium text-gray-800">
                      Do I need to have Revit software to take this course?
                    </h3>
                    <span className="text-xl font-bold text-blue-500">
                      {selectedQuestion === 2 ? "−" : "+"}
                    </span>
                  </div>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        Yes, you will need access to Revit software to complete
                        the course exercises and projects. As a student, you can
                        get free educational access to Autodesk software through
                        the Autodesk Education Community. We provide detailed
                        instructions on how to download and install Revit using
                        your educational license. The course is compatible with
                        Revit 2019 and newer versions.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(3)}
                  >
                    <h3 className="font-medium text-gray-800">
                      What kinds of projects will I work on during this course?
                    </h3>
                    <span className="text-xl font-bold text-blue-500">
                      {selectedQuestion === 3 ? "−" : "+"}
                    </span>
                  </div>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        Throughout the course, you'll work on a variety of
                        projects that simulate real-world architectural
                        scenarios. These include modeling a residential building
                        from foundation to roof, creating custom families for
                        specialized architectural elements, generating detailed
                        construction documentation, and developing presentation
                        materials. By the end of the course, you'll have
                        completed a full architectural project that can be
                        included in your professional portfolio.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Student Testimonials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "Learning Revit through this course completely transformed
                    my career path. I went from struggling to find work to
                    securing a position at a respected architectural firm within
                    two months of getting certified. The hands-on approach and
                    realistic projects prepared me perfectly for the workplace."
                  </p>
                  <h4 className="font-medium text-gray-800">
                    - Arun K., BIM Modeler
                  </h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "As an interior designer looking to expand my skill set,
                    this Revit course was exactly what I needed. The
                    certification has allowed me to take on more complex
                    projects and collaborate more effectively with architects.
                    The course was challenging but extremely rewarding."
                  </p>
                  <h4 className="font-medium text-gray-800">
                    - Meera P., Interior Designer
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutodeskRevit;
