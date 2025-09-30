import React from "react";
import PECB_Learn from "../../assets/PECB1.png";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaCircleCheck,
  FaPlay,
  FaDownload,
  FaCertificate,
} from "react-icons/fa6";
import { PiTarget, PiTrendUp, PiGlobe } from "react-icons/pi";
import { useEffect } from "react";

const Learn = ({ title, url, image }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const learningModules = [
    {
      icon: <FaBook className="w-8 h-8 text-blue-600" />,
      title: "Foundation Concepts",
      description:
        "Master the fundamental principles and concepts of international standards",
      topics: [
        "Basic terminology",
        "Core principles",
        "Framework understanding",
        "Standard requirements",
      ],
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-green-600" />,
      title: "Implementation Strategies",
      description:
        "Learn practical approaches to implementing standards in real-world scenarios",
      topics: [
        "Implementation planning",
        "Risk assessment",
        "Process design",
        "Documentation",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8 text-purple-600" />,
      title: "Leadership & Management",
      description:
        "Develop leadership skills for managing compliance and governance programs",
      topics: [
        "Team leadership",
        "Stakeholder management",
        "Change management",
        "Performance monitoring",
      ],
    },
    {
      icon: <FaCertificate className="w-8 h-8 text-orange-600" />,
      title: "Audit & Certification",
      description:
        "Understand the audit process and certification requirements",
      topics: [
        "Audit preparation",
        "Internal audits",
        "External audits",
        "Certification process",
      ],
    },
  ];

  const learningResources = [
    {
      icon: <FaPlay className="w-6 h-6" />,
      title: "Video Lectures",
      description:
        "Comprehensive video content covering all certification topics",
    },
    {
      icon: <FaBook className="w-6 h-6" />,
      title: "Study Guides",
      description: "Detailed study materials and reference documents",
    },
    {
      icon: <FaDownload className="w-6 h-6" />,
      title: "Practice Tests",
      description:
        "Mock exams and practice questions with detailed explanations",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expert Support",
      description: "Access to certified professionals for guidance and support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn {title}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
              Comprehensive learning pathway designed to prepare you for the{" "}
              {title} certification
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Learning Pathway for {title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive learning program is designed to equip you with
                the knowledge, skills, and practical experience needed to excel
                in the {title} certification. The curriculum is developed by
                industry experts and follows international best practices.
              </p>
              <p className="text-lg text-gray-700">
                Through a combination of theoretical learning, practical
                exercises, and real-world case studies, you'll gain the
                confidence and competence to implement international standards
                effectively in any organization.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={PECB_Learn}
                alt={`${title} Learning`}
                className="max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Learning Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {learningModules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{module.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <FaCircleCheck className="w-4 h-4 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((resource, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Features */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Course Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Self-Paced Learning
              </h3>
              <p className="text-green-100">
                Study at your own pace with 24/7 access to all learning
                materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PiGlobe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Recognition</h3>
              <p className="text-green-100">
                Learn from internationally recognized standards and best
                practices
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PiTrendUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-green-100">
                Enhance your professional skills and advance your career
                opportunities
              </p>
            </div>
          </div>
        </div>

        {/* PECB Educate Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            PECB Educate Platform
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comprehensive Learning Experience
              </h3>
              <p className="text-gray-700 mb-6">
                PECB Learn is PECB's global initiative to provide training
                resources on international standards to educators and students.
                Through PECB Learn, you'll gain access to industry-leading
                curriculum and practical exercises, helping you master essential
                concepts needed for certifications like the {title}.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  Comprehensive, self-paced training on international standards
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  Practical exercises to apply theoretical knowledge in
                  real-world scenarios
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  Resources tailored to certifications like ISO 27001, ISO 9001,
                  and more
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  Focus on core topics such as risk management, compliance, and
                  data protection
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Learning Outcomes
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PiTarget className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    Understand international standards and frameworks
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUsers className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">
                    Develop leadership and management skills
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCertificate className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">
                    Prepare for certification exams
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PiTrendUp className="w-6 h-6 text-orange-600" />
                  <span className="text-gray-700">
                    Advance your career opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mr-4">
                        Start Learning Now
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                        Download Course Syllabus
                    </button>
                </div> */}
      </div>
    </div>
  );
};

export default Learn;
