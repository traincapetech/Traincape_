import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const AdobeInDesign = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="bg-[#F9F9F9] overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Adobe Certified Professional – InDesign
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Design and publish beautiful documents for print and digital media.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
                Beginner Friendly
              </span>
              <span className="bg-white text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
                Layout & Publishing Focused
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={require('../../../assets/adobe2.webp')}
              alt="Adobe InDesign Logo"
              className="w-full h-auto bg-white p-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Link to="/Adobe">
              <button className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition duration-300">
                <IoMdArrowRoundBack className="mr-2" />
                Back to Adobe Courses
              </button>
            </Link>

            <div className="mb-8 border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className="border-b-2 border-indigo-600 text-indigo-600 pb-4 font-medium">
                  Overview
                </button>
                <button className="text-gray-500 pb-4 font-medium">Curriculum</button>
                <button className="text-gray-500 pb-4 font-medium">Career Paths</button>
                <button className="text-gray-500 pb-4 font-medium">FAQ</button>
                <button className="text-gray-500 pb-4 font-medium">Reviews</button>
              </nav>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-4">
                The Adobe Certified Professional – InDesign certification prepares you to master
                page layout and design for print and digital publishing. Learn to design professional
                brochures, books, magazines, and digital documents that are clean, readable, and attractive.
              </p>
              <p className="text-gray-700 mb-4">
                This course is ideal for students, designers, publishers, and content creators who
                want to create impactful editorial designs and marketing collateral.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "InDesign interface and workspace",
                  "Text formatting and typography",
                  "Working with master pages",
                  "Using styles for consistency",
                  "Layouts for print and digital",
                  "Importing images and graphics",
                  "Creating tables and lists",
                  "Exporting PDFs and eBooks",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-600 mt-1"></div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">
                InDesign is widely used in publishing, advertising, and corporate communications.
                This certification opens doors to entry-level roles in editorial design,
                publication layout, and content marketing.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Desktop Publisher</span>
                    <span className="font-medium">₹2.5–5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Layout Designer</span>
                    <span className="font-medium">₹3–6 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Content Designer</span>
                    <span className="font-medium">₹3–6.5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Publication Assistant</span>
                    <span className="font-medium">₹2–4.5 LPA</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Exam Details</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Exam Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Format: Multiple choice, drag and drop, simulations</li>
                      <li>Duration: 50 minutes</li>
                      <li>Questions: 30–50 questions</li>
                      <li>Passing Score: 700/1000</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Focus Areas</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Document setup & layout</li>
                      <li>• Typography & styling</li>
                      <li>• Visual hierarchy & formatting</li>
                      <li>• Print & digital publishing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              {[
                {
                  q: "Is this course suitable for beginners?",
                  a: "Yes, it is beginner-friendly and covers InDesign from the ground up.",
                },
                {
                  q: "Will I learn how to design brochures or magazines?",
                  a: "Absolutely. You will work on real-world projects like brochures, newsletters, and eBooks.",
                },
                {
                  q: "Is the certification valid internationally?",
                  a: "Yes. Adobe Certified Professional is globally accepted by design agencies and publishers.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAnswer(i)}
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-medium">{q}</span>
                    {selectedQuestion === i ? (
                      <IoIosArrowUp className="text-indigo-600" />
                    ) : (
                      <IoIosArrowDown className="text-indigo-600" />
                    )}
                  </button>
                  {selectedQuestion === i && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

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
                Enroll now – limited-time offer!
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">This course includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✔ Complete InDesign training</li>
                  <li>✔ Downloadable templates</li>
                  <li>✔ Project-based learning</li>
                  <li>✔ Certification preparation</li>
                  <li>✔ Expert Q&A support</li>
                  <li>✔ Lifetime access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdobeInDesign;
