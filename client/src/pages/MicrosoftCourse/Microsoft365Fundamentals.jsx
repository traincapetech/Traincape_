import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";

const Microsoft365Fundamentals = () => {
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
      id: "microsoft-365-fundamentals",
      name: "Microsoft 365 Fundamentals (MS-900)",
      price: 1499,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Microsoft 365 Fundamentals (MS-900)
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Learn the essentials of Microsoft 365 cloud productivity services
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
              alt="Microsoft 365 Logo"
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
                Microsoft 365 Fundamentals (MS-900) is a foundational certification course designed for individuals who want to understand the key components of Microsoft 365 cloud services. This course provides an overview of Microsoft 365 cloud productivity and security services, licensing options, and benefits of adopting cloud services.
              </p>
              <p className="text-gray-700 mb-4">
                Ideal for business users, IT professionals, and students who want to learn about Microsoft 365 capabilities, this certification serves as a starting point for exploring Microsoft's productivity and collaboration tools in a business environment.
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Microsoft 365 core services and concepts</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Security, compliance, privacy, and trust</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Microsoft 365 pricing and support options</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Office 365, Windows 10, and Enterprise Mobility</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Microsoft Teams, SharePoint, and Exchange</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Cloud computing concepts and benefits</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Microsoft 365 administration and deployment</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 mt-1"></div>
                  <p className="ml-3 text-gray-700">Microsoft Intune and Azure AD capabilities</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">
                The MS-900 certification validates your knowledge of Microsoft 365 services and is beneficial for various roles in organizations that use Microsoft 365. Understanding these productivity tools is increasingly valuable as more businesses adopt cloud-based collaboration solutions.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Microsoft 365 Administrator (Entry Level)</span>
                    <span className="font-medium">₹4-6 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">IT Support Specialist</span>
                    <span className="font-medium">₹3.5-5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Office 365 Support Engineer</span>
                    <span className="font-medium">₹4-7 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Productivity Solutions Consultant</span>
                    <span className="font-medium">₹5-8 LPA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certification Path */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Certification Path</h2>
              <p className="text-gray-700 mb-4">
                After completing the MS-900 certification, you can pursue specialized role-based certifications in the Microsoft 365 ecosystem:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Microsoft 365 Modern Desktop Administrator (MD-100 & MD-101)</h3>
                  <p className="text-gray-700">Deploy, configure, secure, manage, and monitor devices and client applications in a Microsoft 365 environment.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Microsoft 365 Security Administrator (MS-500)</h3>
                  <p className="text-gray-700">Implement, manage, and monitor security and compliance solutions for Microsoft 365 and hybrid environments.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Microsoft 365 Teams Administrator (MS-700)</h3>
                  <p className="text-gray-700">Configure, deploy, and manage Microsoft Teams workloads for collaboration and communication in organizations.</p>
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
                        <span className="text-gray-700">60 minutes</span>
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
                        <span className="text-gray-700">• Microsoft 365 services (30-35%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• Security, compliance, privacy (30-35%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700">• Microsoft 365 pricing and support (25-30%)</span>
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
                  <h3 className="font-semibold text-lg mb-2">Industry-Recognized Skills</h3>
                  <p className="text-gray-700">
                    Gain foundational knowledge of Microsoft 365 services that organizations worldwide rely on for productivity and collaboration.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Workplace Relevance</h3>
                  <p className="text-gray-700">
                    Learn about tools and services that are used daily in modern workplaces, making your skills immediately applicable.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Career Advancement</h3>
                  <p className="text-gray-700">
                    Build a foundation for more advanced Microsoft 365 certifications and specialized roles in IT administration.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Business Perspective</h3>
                  <p className="text-gray-700">
                    Understand the business value and benefits of Microsoft 365, which helps in strategic decision-making for organizations.
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
                      Is the MS-900 certification suitable for beginners?
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
                        Yes, MS-900 is specifically designed as a foundational certification for beginners with no prior experience in Microsoft 365. It provides a comprehensive overview of Microsoft's productivity and collaboration services, making it accessible for those new to the platform.
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
                      Do I need to have experience with Microsoft Office applications?
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
                        While basic familiarity with Microsoft Office applications (Word, Excel, PowerPoint) is helpful, it's not a prerequisite for the MS-900 certification. The course focuses on Microsoft 365 cloud services rather than detailed application usage.
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
                      How does this certification benefit business professionals?
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
                        For business professionals, this certification provides valuable insights into how Microsoft 365 services can enhance productivity, streamline communication, and secure business data. Understanding these capabilities can help you leverage Microsoft 365 more effectively in your organization and contribute to digital transformation initiatives.
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
                      Will I learn practical skills or just theoretical concepts?
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
                        Our course balances theoretical concepts with practical demonstrations. While the MS-900 exam focuses on conceptual knowledge, our curriculum includes hands-on exercises with Microsoft 365 services to help you understand how these tools work in real-world scenarios. This practical experience reinforces your learning and makes the concepts more tangible.
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
                      How often is the MS-900 exam content updated?
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
                        Microsoft updates certification exams periodically to reflect changes in the services and technologies. Our course content is regularly revised to align with the latest exam objectives, ensuring you're prepared for the current version of the MS-900 exam. We provide update notifications to all enrolled students when significant changes occur.
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
                    "This course provided an excellent overview of Microsoft 365 services. The instructors explained complex concepts in simple terms, and the practice exams were very helpful for my preparation. I passed the exam with confidence!"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      AM
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Amit Malhotra</p>
                      <p className="text-sm text-gray-500">Office Administrator</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    "As someone transitioning to an IT role, this certification gave me the foundation I needed to understand Microsoft 365. The course content was well-structured and the hands-on demonstrations helped me see how these services work in practice."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      SG
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Shalini Gupta</p>
                      <p className="text-sm text-gray-500">Business Analyst</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Note */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-12">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> Microsoft 365 is used by over 1 million companies in India, making proficiency in these tools highly valuable in the job market. According to industry reports, professionals with Microsoft certifications earn up to 15% more than their non-certified peers. The MS-900 certification is your first step toward demonstrating your expertise in Microsoft's cloud productivity solutions.
              </p>
            </div>
          </div>

          {/* Pricing Panel (Fixed) */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-2xl font-bold">₹1,499</p>
                  <p className="text-gray-500 line-through">₹1,999</p>
                </div>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  25% OFF
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Limited time offer! Sale ends in 5 days
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
                      Comprehensive MS-900 exam preparation
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
                      Hands-on demonstrations with Microsoft 365
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
                      Practice quizzes and mock exams
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
                      Certification preparation guide
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

export default Microsoft365Fundamentals;