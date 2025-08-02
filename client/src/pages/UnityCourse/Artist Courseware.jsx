
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const ArtistCourseware = () => {
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
              Unity Certified Artist Courseware
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Master 3D modeling, animation, and lighting to create compelling visual content in Unity.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                3D Art & Animation
              </span>
              <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                Beginner to Intermediate
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={require("../../assets/unity4.webp")}
              alt="Unity Artist"
              className="w-full h-auto bg-white p-6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Link to="/Courses-details">
              <button className="flex items-center text-gray-700 mb-6 hover:text-black transition duration-300">
                <IoMdArrowRoundBack className="mr-2" />
                Back to Course Details
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
                The Unity Certified Artist Courseware is designed for visual creators who want to bring 3D art to life in Unity. You'll learn how to prepare, import, and integrate artistic assets into interactive experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Ideal for 3D artists, animators, and multimedia students aiming to join the real-time 3D development industry.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "3D modeling fundamentals",
                  "Texturing and UV mapping",
                  "Lighting techniques in Unity",
                  "Material creation and shaders",
                  "Character rigging and animation",
                  "Scene composition and storytelling",
                  "Optimizing art assets for performance",
                  "Importing assets from external tools",
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
                This certification opens doors to jobs in gaming, animation, AR/VR, and multimedia industries where Unity is widely adopted.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">3D Artist</span>
                    <span className="font-medium">₹3–6 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Animator</span>
                    <span className="font-medium">₹2.5–5.5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Technical Artist</span>
                    <span className="font-medium">₹4–7 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Environment Artist</span>
                    <span className="font-medium">₹3.5–6.5 LPA</span>
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
                      <li>Format: Multiple choice + interactive tasks</li>
                      <li>Duration: 60 minutes</li>
                      <li>Questions: 40–50</li>
                      <li>Passing Score: 70%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Focus Areas</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Asset creation & import</li>
                      <li>• Lighting & rendering</li>
                      <li>• Character animation</li>
                      <li>• Scene optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              {[
                {
                  q: "Do I need to know 3D modeling before this course?",
                  a: "Basic knowledge helps, but the course provides guidance on integrating assets into Unity.",
                },
                {
                  q: "Will I get access to sample models and files?",
                  a: "Yes, downloadable resources are included for practice.",
                },
                {
                  q: "Can I pursue animation or visual effects roles after this?",
                  a: "Yes, this certification is relevant in gaming, film, and AR/VR industries.",
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
                  <p className="text-2xl font-bold">₹1,699</p>
                  <p className="text-gray-500 line-through">₹2,199</p>
                </div>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  23% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Start your journey as a Unity 3D artist today!
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">This course includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✔ Unity art fundamentals</li>
                  <li>✔ 3D asset creation workflows</li>
                  <li>✔ Scene lighting & VFX</li>
                  <li>✔ Exam preparation resources</li>
                  <li>✔ Downloadable project files</li>
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

export default ArtistCourseware;
