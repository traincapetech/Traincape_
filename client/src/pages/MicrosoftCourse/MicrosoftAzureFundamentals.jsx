import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import AddToCartButton from "../../components/Button/AddToCartButton";

const MicrosoftAzureFundamentals = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const { addToCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  const handleAddToCart = () => {
    const product = {
      id: "microsoft-azure-fundamentals",
      name: "Microsoft Azure Fundamentals (AZ-900)",
      price: 1599,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      amount: 1,
    };
    addToCart(product);
    setConfirmationMessage(true);
    setTimeout(() => {
      setConfirmationMessage(false);
    }, 2000);
  };

  return (
    <div className="bg-[#F9F9F9] overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Microsoft Azure Fundamentals (AZ-900)
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Learn cloud concepts and Azure services to kickstart your cloud career
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                Beginner Level
              </span>
              <span className="bg-white text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                No prior experience required
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
              alt="Microsoft Azure Logo"
              className="w-full h-auto bg-white p-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Link to="/Microsoft">
              <button className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition duration-300">
                <IoMdArrowRoundBack className="mr-2" />
                Back to Microsoft Courses
              </button>
            </Link>

            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className="border-b-2 border-blue-600 text-blue-600 pb-4 font-medium">
                  Overview
                </button>
                <button className="text-gray-500 pb-4 font-medium">
                  Curriculum
                </button>
                <button className="text-gray-500 pb-4 font-medium">
                  Career Paths
                </button>
                <button className="text-gray-500 pb-4 font-medium">FAQ</button>
                <button className="text-gray-500 pb-4 font-medium">
                  Reviews
                </button>
              </nav>
            </div>

            {/* Course Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-4">
                Microsoft Azure Fundamentals (AZ-900) is designed for anyone who wants to understand cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.
              </p>
              <p className="text-gray-700 mb-4">
                This course provides an excellent introduction to cloud computing and specifically the Microsoft Azure implementation. There are no prerequisites for this course, making it perfect for individuals who are new to the cloud or those looking to validate their foundational knowledge of cloud services.
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Cloud computing concepts and models</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Azure core services and solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Azure management tools and features</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Security, privacy, compliance, and trust</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Azure pricing, service level agreements, and lifecycles</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">IaaS, PaaS, and SaaS cloud service models</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Azure subscriptions and resource groups</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Azure portal navigation and key features</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">
                The AZ-900 certification validates your basic understanding of cloud services and how those services are provided with Azure. As organizations increasingly move to the cloud, professionals with cloud knowledge are in high demand across various roles.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Cloud Support Associate (Entry Level)</span>
                    <span className="font-medium">₹4-6 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Junior Cloud Administrator</span>
                    <span className="font-medium">₹5-8 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Cloud Sales Associate</span>
                    <span className="font-medium">₹6-9 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">IT Support Specialist (Cloud)</span>
                    <span className="font-medium">₹4-7 LPA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certification Path */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Certification Path</h2>
              <p className="text-gray-700 mb-4">
                After completing the AZ-900 certification, you can pursue specialized role-based Azure certifications:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Azure Administrator (AZ-104)</h3>
                  <p className="text-gray-700">Manage Azure subscriptions, secure identities, implement and manage storage, and deploy and manage Azure compute resources.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Azure Developer (AZ-204)</h3>
                  <p className="text-gray-700">Design, build, test, and maintain cloud applications and services on Microsoft Azure.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Azure Solutions Architect (AZ-305)</h3>
                  <p className="text-gray-700">Design and implement solutions that run on Microsoft Azure, including aspects like compute, network, storage, and security.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Azure Data Fundamentals (DP-900)</h3>
                  <p className="text-gray-700">For those interested in the data aspects of Azure, focusing on relational and non-relational data and analytics workloads.</p>
                </div>
              </div>
            </div>

            {/* Exam Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Exam Details</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Exam Information</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Format:</span>
                        <span className="text-gray-700">Multiple choice and multi-select questions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Duration:</span>
                        <span className="text-gray-700">60-85 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Questions:</span>
                        <span className="text-gray-700">40-60 questions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">Passing score:</span>
                        <span className="text-gray-700">700 points (out of 1000)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Exam Focus Areas</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gray-700">• Cloud concepts (20-25%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• Azure core services (15-20%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• Azure core solutions and management tools (10-15%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• General security and network security (10-15%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• Identity, governance, privacy, and compliance (15-20%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• Azure cost management and SLAs (10-15%)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose This Course</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Growing Market Demand</h3>
                  <p className="text-gray-700">
                    Cloud computing is expanding rapidly in India, with Azure being one of the leading cloud platforms adopted by enterprises.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Gateway to Cloud Careers</h3>
                  <p className="text-gray-700">
                    AZ-900 is the perfect starting point for building a career in cloud computing with Microsoft technologies.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">No Technical Prerequisites</h3>
                  <p className="text-gray-700">
                    This certification is accessible to anyone, regardless of technical background or experience.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Practical Knowledge</h3>
                  <p className="text-gray-700">
                    Gain hands-on experience with Azure services that can be immediately applied in real-world scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {/* Question 1 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(1)}
                  >
                    <span className="font-medium">
                      Do I need programming experience for the AZ-900 certification?
                    </span>
                    {selectedQuestion === 1 ? (
                      <IoIosArrowUp className="text-blue-600" />
                    ) : (
                      <IoIosArrowDown className="text-blue-600" />
                    )}
                  </button>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        No, the AZ-900 certification doesn't require any programming experience. It focuses on fundamental cloud concepts and Azure services rather than coding or development. It's designed to be accessible to beginners and non-technical roles who need to understand cloud basics.
                      </p>
                    </div>
                  )}
                </div>

                {/* Question 2 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(2)}
                  >
                    <span className="font-medium">
                      How long does it take to prepare for the AZ-900 exam?
                    </span>
                    {selectedQuestion === 2 ? (
                      <IoIosArrowUp className="text-blue-600" />
                    ) : (
                      <IoIosArrowDown className="text-blue-600" />
                    )}
                  </button>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        Most students can prepare for and pass the AZ-900 exam within 2-4 weeks of dedicated study. The preparation time depends on your prior knowledge of cloud computing concepts and your familiarity with IT terminology. Our structured course content is designed to help you prepare efficiently with focused learning materials and practice tests.
                      </p>
                    </div>
                  )}
                </div>

                {/* Question 3 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(3)}
                  >
                    <span className="font-medium">
                      Will I get hands-on experience with Azure in this course?
                    </span>
                    {selectedQuestion === 3 ? (
                      <IoIosArrowUp className="text-blue-600" />
                    ) : (
                      <IoIosArrowDown className="text-blue-600" />
                    )}
                  </button>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        Yes, our course includes hands-on labs and guided exercises using the Azure portal. You'll create Azure resources, explore the interface, and experience key services firsthand. We'll guide you through setting up a free Azure account, which provides credits and free services for learning purposes. This practical experience reinforces theoretical concepts and builds confidence in using the platform.
                      </p>
                    </div>
                  )}
                </div>

                {/* Question 4 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(4)}
                  >
                    <span className="font-medium">
                      Is the AZ-900 certification valuable for non-IT professionals?
                    </span>
                    {selectedQuestion === 4 ? (
                      <IoIosArrowUp className="text-blue-600" />
                    ) : (
                      <IoIosArrowDown className="text-blue-600" />
                    )}
                  </button>
                  {selectedQuestion === 4 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        Absolutely! The AZ-900 certification is valuable for many non-IT roles, including:
                        <br/><br/>
                        • Business stakeholders who need to understand cloud capabilities and limitations
                        <br/>
                        • Project managers overseeing cloud migrations or implementations
                        <br/>
                        • Sales and marketing professionals selling cloud solutions
                        <br/>
                        • Financial analysts evaluating cloud costs and benefits
                        <br/><br/>
                        The certification helps these professionals communicate more effectively with technical teams and make informed decisions about cloud adoption.
                      </p>
                    </div>
                  )}
                </div>

                {/* Question 5 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAnswer(5)}
                  >
                    <span className="font-medium">
                      How does Azure compare to other cloud platforms like AWS?
                    </span>
                    {selectedQuestion === 5 ? (
                      <IoIosArrowUp className="text-blue-600" />
                    ) : (
                      <IoIosArrowDown className="text-blue-600" />
                    )}
                  </button>
                  {selectedQuestion === 5 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">
                        Azure and AWS are both leading cloud platforms with comparable core services. Azure typically offers better integration with Microsoft products and services, making it a preferred choice for organizations already using Microsoft technologies. According to recent industry reports, Azure has been growing faster in the Indian market, particularly in enterprise segments and government sectors. While AWS remains the global market leader, Azure skills are increasingly in demand in India's job market, especially in organizations with Microsoft-centric environments.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Student Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    "Coming from a non-technical background, I was worried about learning cloud concepts. This course broke down complex ideas into simple terms and the hands-on exercises made Azure feel accessible. I passed the exam on my first attempt!"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      RP
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Rahul Patel</p>
                      <p className="text-sm text-gray-500">Business Analyst</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    "The practice exams were invaluable in preparing for the real thing. I appreciated how the course covered both theoretical concepts and practical applications. The interactive labs really helped solidify my understanding of Azure services."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      NS
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Neha Sharma</p>
                      <p className="text-sm text-gray-500">IT Support Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Note */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-12">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> According to NASSCOM, cloud computing skills are among the most in-demand technology skills in India, with an estimated 20% premium on salaries for professionals with cloud certifications. Microsoft Azure has seen rapid adoption across Indian enterprises, with a projected market growth of 30% annually over the next five years. The AZ-900 certification is your entry point into this growing field, opening doors to career opportunities in cloud computing across various industries.
              </p>
            </div>
          </div>

          {/* Pricing Panel (Fixed) */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-2xl font-bold">₹1,599</p>
                  <p className="text-gray-500 line-through">₹2,199</p>
                </div>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  27% OFF
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Limited time offer! Sale ends in 4 days
              </p>

              <AddToCartButton onClick={handleAddToCart} />
              {confirmationMessage && (
                <div className="mt-3 p-2 bg-green-100 text-green-700 text-sm rounded-lg">
                  Added to cart successfully!
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">This course includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Full AZ-900 exam preparation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Lifetime access to course materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Hands-on labs with Azure services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      5 practice tests with detailed explanations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Expert instructor support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Guidance for setting up free Azure account
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftAzureFundamentals; 