import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const AdobeIllustrator = () => {
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
              Adobe Certified Professional – Illustrator
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Learn to create professional vector graphics and illustrations.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
                Beginner to Intermediate
              </span>
              <span className="bg-white text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
                No Prior Experience Needed
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={require('../../../assets/adobe3.webp')}
              alt="Adobe Illustrator Logo"
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
                The Adobe Certified Professional – Illustrator certification is designed
                for creatives who want to master vector design and illustration.
                This course will help you build logos, icons, drawings, typography,
                and complex illustrations for any medium.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you’re aiming to be a graphic designer, illustrator, or branding
                expert, this certification helps validate your Illustrator skills.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Illustrator interface and tools",
                  "Creating shapes and paths",
                  "Typography and text formatting",
                  "Color theory and gradients",
                  "Logos and icon design",
                  "Layer management and grouping",
                  "Brushes, symbols, and patterns",
                  "Exporting vector assets",
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
                Illustrator is the leading vector design software used in branding,
                publishing, and product packaging. Certified professionals can pursue
                roles in graphic design, UI design, and illustration.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Graphic Designer</span>
                    <span className="font-medium">₹3–6 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Illustrator</span>
                    <span className="font-medium">₹3–5.5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Visual Branding Specialist</span>
                    <span className="font-medium">₹4–8 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Layout Designer</span>
                    <span className="font-medium">₹3–6 LPA</span>
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
                      <li>• Vector graphic creation</li>
                      <li>• Typography and layout</li>
                      <li>• Design principles</li>
                      <li>• File preparation and export</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              {[
                {
                  q: "Do I need to be good at drawing?",
                  a: "Not necessarily. Illustrator is vector-based and helps with shape building even without freehand skills.",
                },
                {
                  q: "Can I use Illustrator for logo design?",
                  a: "Absolutely. Illustrator is the industry standard for logo and brand identity design.",
                },
                {
                  q: "Is the certification recognized globally?",
                  a: "Yes, Adobe Certified Professional is internationally accepted by employers and clients.",
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
                  <li>✔ Full Illustrator training</li>
                  <li>✔ Practice projects and assignments</li>
                  <li>✔ Downloadable resources</li>
                  <li>✔ Exam preparation materials</li>
                  <li>✔ Support and mentorship</li>
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

export default AdobeIllustrator;
