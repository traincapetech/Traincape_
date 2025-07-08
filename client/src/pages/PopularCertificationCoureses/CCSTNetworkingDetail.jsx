import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const CCSTNetworkingDetail = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="bg-[#F9F9F9] overflow-hidden">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              CCST Networking Certification
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Master the fundamentals of networking and prepare for entry-level roles in IT infrastructure and support.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                Networking
              </span>
              <span className="bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                Beginner Level
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={require("../../assets/Cisco/Overviewimg.jpg")}
              alt="Networking"
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
                This course prepares you for the CompTIA Certified Support Technician (CCST) Networking exam. You'll gain essential knowledge in network infrastructure, protocols, security, and troubleshooting.
              </p>
              <p className="text-gray-700 mb-4">
                Perfect for students and entry-level IT professionals seeking foundational networking skills.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Networking fundamentals & topologies",
                  "TCP/IP, DNS, DHCP protocols",
                  "Switches, routers & firewalls",
                  "Wireless & wired networking",
                  "Network security basics",
                  "Troubleshooting tools (ping, tracert, ipconfig)",
                  "Subnets & IP addressing",
                  "Monitoring & maintaining networks",
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
                Completing this course opens doors to various IT support and networking roles in companies, schools, and data centers.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Job Roles & Average Salaries in India</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Network Support Technician</span>
                    <span className="font-medium">₹2.5–4.5 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">IT Support Specialist</span>
                    <span className="font-medium">₹2–4 LPA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Network Administrator (Junior)</span>
                    <span className="font-medium">₹3–5 LPA</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Exam Details</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Exam Format</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Format: Multiple choice</li>
                      <li>Duration: 90 minutes</li>
                      <li>Questions: 50</li>
                      <li>Passing Score: 700/900</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Skills Measured</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Networking concepts & devices</li>
                      <li>• Troubleshooting procedures</li>
                      <li>• IP addressing & configuration</li>
                      <li>• Basic security protocols</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              {[
                {
                  q: "Is any prior networking experience required?",
                  a: "No, this course is designed for beginners with no prior networking knowledge.",
                },
                {
                  q: "Is this certification globally recognized?",
                  a: "Yes, it's recognized worldwide as a solid foundation for IT networking careers.",
                },
                {
                  q: "Can I pursue CompTIA Network+ after this?",
                  a: "Absolutely. CCST Networking is a stepping stone to advanced certifications like Network+.",
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
                  <p className="text-2xl font-bold">₹1,499</p>
                  <p className="text-gray-500 line-through">₹1,999</p>
                </div>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  25% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Enroll now to launch your networking career!
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">This course includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✔ Full Networking course content</li>
                  <li>✔ Practical lab exercises</li>
                  <li>✔ Certification exam guidance</li>
                  <li>✔ Career support & mentorship</li>
                  <li>✔ Community access</li>
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

export default CCSTNetworkingDetail;
