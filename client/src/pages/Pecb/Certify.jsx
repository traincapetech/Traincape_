import React from 'react';
import PECB_Overview from '../../assets/PECB1.png';
import { FaBook, FaPencil, FaCertificate, FaCircleCheck, FaClock, FaUsers, FaGlobe, FaShield } from 'react-icons/fa6';
import { PiCertificateFill, PiTarget, PiTrendUp } from "react-icons/pi";
import { useEffect } from 'react';

const Certify = ({ title }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const certificationBenefits = [
    {
      icon: <FaShield className="w-8 h-8 text-blue-600" />,
      title: "Industry Recognition",
      description: "Globally recognized certification that validates your expertise in international standards"
    },
    {
      icon: <PiTrendUp className="w-8 h-8 text-green-600" />,
      title: "Career Advancement",
      description: "Open doors to senior positions and higher salary opportunities"
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-purple-600" />,
      title: "Global Opportunities",
      description: "Work with international organizations and multinational companies"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-orange-600" />,
      title: "Professional Network",
      description: "Join a community of certified professionals worldwide"
    }
  ];

  const examDetails = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Exam Duration",
      value: "3 hours"
    },
    {
      icon: <FaPencil className="w-6 h-6" />,
      title: "Question Format",
      value: "Multiple Choice"
    },
    {
      icon: <PiTarget className="w-6 h-6" />,
      title: "Passing Score",
      value: "70%"
    },
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "Validity",
      value: "3 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title} Certification
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Validate your expertise and advance your career with the globally recognized {title} certification
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
                About {title} Certification
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The {title} certification by PECB provides a structured pathway to validate your expertise and skills in compliance, governance, and management systems. This program is meticulously designed to meet the needs of professionals who aim to align with international standards and industry best practices.
              </p>
              <p className="text-lg text-gray-700">
                Achieving the {title} certification highlights your commitment to professional growth and your ability to implement and maintain high-quality management systems. It ensures that you are well-equipped to address modern organizational challenges and enhance operational efficiency while adhering to globally recognized benchmarks.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={PECB_Overview} alt={`${title} Certification`} className="max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Get {title} Certified?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Details Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Exam Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-blue-600">{detail.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{detail.title}</h3>
                  <p className="text-gray-600">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice & Preparation Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Practice & Preparation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBook className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Materials</h3>
              <p className="text-blue-100">
                Access comprehensive study guides, practice questions, and reference materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaPencil className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
              <p className="text-blue-100">
                Take mock exams to assess your readiness and identify areas for improvement
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PiCertificateFill className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-blue-100">
                Schedule your exam and earn your globally recognized certification
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Start Your Certification Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certify;
