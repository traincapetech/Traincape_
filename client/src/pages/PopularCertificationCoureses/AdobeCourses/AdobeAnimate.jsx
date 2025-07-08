import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const AdobeAnimate = () => {
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
              Adobe Certified Professional – Animate
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Create engaging interactive animations for web, games, and mobile.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
                Animation & Interactivity
              </span>
              <span className="bg-white text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
                Beginner to Intermediate
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={require('../../../assets/adobe5.webp')}
              alt="Adobe Animate Logo"
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
                The Adobe Certified Professional – Animate certification course teaches you how
                to create dynamic vector animations and interactive content for the web, games,
                apps, and video platforms. It covers core animation principles and scripting
                fundamentals.
              </p>
              <p className="text-gray-700 mb-4">
                This course is ideal for aspiring animators, game designers, and digital content
                creators looking to establish a strong foundation in motion design and animation logic.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Animate interface & timeline",
                  "Vector drawing tools",
                  "Frame-by-frame & tweened animation",
                  "Symbols and instances",
                  "Using audio in animations",
                  "Basic interactivity with ActionScript/JavaScript",
                  "Publishing HTML5 animations",
                  "Designing for games & web",
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
                Adobe Animate is widely used in interactive design, mobile app development,
                education, and entertainment. Certification boosts your credibility for
                entry-level animation and design roles.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Animator</span>
                    <span className="font-medium">₹3–6.5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Multimedia Designer</span>
                    <span className="font-medium">₹3–5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Game UI Animator</span>
                    <span className="font-medium">₹4–7 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">E-learning Developer</span>
                    <span className="font-medium">₹2.5–5 LPA</span>
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
                      <li>Format: MCQs, scenario-based tasks, simulations</li>
                      <li>Duration: 50 minutes</li>
                      <li>Questions: 30–50</li>
                      <li>Passing Score: 700/1000</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Focus Areas</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Animation techniques</li>
                      <li>• Interactivity scripting basics</li>
                      <li>• Publishing formats</li>
                      <li>• Design principles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              {[
                {
                  q: "Do I need coding knowledge to learn Animate?",
                  a: "Not much. Some basic scripting is introduced, but most animation tasks require visual tools.",
                },
                {
                  q: "Is Animate good for game development?",
                  a: "Yes. It's commonly used to create UI, character, and interactive assets in 2D games.",
                },
                {
                  q: "Will I get hands-on animation projects?",
                  a: "Yes, you’ll build multiple mini-animations and export them in different formats.",
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
                  <li>✔ Full Animate training</li>
                  <li>✔ Downloadable assets</li>
                  <li>✔ Animation projects</li>
                  <li>✔ Certification practice test</li>
                  <li>✔ Support from experts</li>
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

export default AdobeAnimate;
