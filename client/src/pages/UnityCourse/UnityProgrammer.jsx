import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const UnityProgrammer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="bg-[#F9F9F9] overflow-hidden">
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unity Certified Programmer
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Learn to build games and interactive content using Unity — the world's leading real-time 3D development platform.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                Game Development
              </span>
              <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                Intermediate Level
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={require("../../assets/unity2.webp")}
              alt="Unity Programmer"
              className="w-full h-auto bg-white p-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Link to="/unity">
              <button className="flex items-center text-gray-700 mb-6 hover:text-black transition duration-300">
                <IoMdArrowRoundBack className="mr-2" />
                Back to Unity Courses
              </button>
            </Link>

            <div className="mb-8 border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className="border-b-2 border-gray-700 text-gray-700 pb-4 font-medium">
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
                The Unity Certified Programmer certification validates your ability to build real-time 3D experiences using Unity. From game development to AR/VR and simulations, this course equips you with project-based Unity skills.
              </p>
              <p className="text-gray-700 mb-4">
                This program is ideal for aspiring game developers, software engineers, and designers looking to build immersive applications.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Unity Editor fundamentals",
                  "Scripting with C# in Unity",
                  "Game mechanics and physics",
                  "Animations and transitions",
                  "UI/UX in Unity",
                  "Lighting and materials",
                  "Publishing to Android/WebGL",
                  "Debugging and performance profiling",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-700 mt-1"></div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">
                Unity powers over 50% of mobile games and many interactive platforms. This certification helps you gain recognition and access jobs in gaming, AR/VR, and simulation industries.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Unity Developer</span>
                    <span className="font-medium">₹4–8 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Game Developer</span>
                    <span className="font-medium">₹3–6 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">AR/VR Engineer</span>
                    <span className="font-medium">₹5–10 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Simulation Developer</span>
                    <span className="font-medium">₹4–7 LPA</span>
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
                      <li>Format: Multiple choice + coding simulations</li>
                      <li>Duration: 90 minutes</li>
                      <li>Questions: 50–60</li>
                      <li>Passing Score: 70%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Core Areas</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Unity scripting & workflows</li>
                      <li>• Game architecture & debugging</li>
                      <li>• Asset management</li>
                      <li>• Project deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              {[
                {
                  q: "Is prior Unity experience required?",
                  a: "Basic programming experience in C# is recommended, but the course covers Unity from scratch.",
                },
                {
                  q: "Can I publish real games after this?",
                  a: "Yes, you will build multiple projects and learn how to deploy them for web and mobile.",
                },
                {
                  q: "Is this certification useful for jobs?",
                  a: "Definitely. It's recognized by top game and interactive media companies globally.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAnswer(i)}
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                  >
                    <span className="font-medium">{q}</span>
                    {selectedQuestion === i ? (
                      <IoIosArrowUp className="text-gray-700" />
                    ) : (
                      <IoIosArrowDown className="text-gray-700" />
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
                  <p className="text-2xl font-bold">₹1,799</p>
                  <p className="text-gray-500 line-through">₹2,299</p>
                </div>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  20% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Limited-time Unity Developer pack offer!
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">This course includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✔ Full Unity development course</li>
                  <li>✔ Game-based projects</li>
                  <li>✔ C# scripting lessons</li>
                  <li>✔ Certification exam support</li>
                  <li>✔ Access to community & Q&A</li>
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

export default UnityProgrammer;