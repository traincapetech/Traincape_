import React, { useState } from 'react';
import PECB_Learn from '../../assets/PECB1.png';
import { FaRoad, FaBullseye, FaCircleCheck, FaClock, FaTrophy, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa6';
import { PiCertificateFill, PiTrendUp, PiLightbulb } from "react-icons/pi";
import { useEffect } from 'react';


const MyPathway = ({ title, image }) => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const pathwaySteps = [
    {
      icon: <FaBullseye className="w-8 h-8 text-blue-600" />,
      title: "Assessment & Planning",
      description: "Evaluate your current skills and create a personalized learning plan",
      duration: "1-2 weeks",
      status: "completed"
    },
    {
      icon: <FaRoad className="w-8 h-8 text-green-600" />,
      title: "Foundation Learning",
      description: "Master core concepts and fundamental principles",
      duration: "4-6 weeks",
      status: "in-progress"
    },
    {
      icon: <PiLightbulb className="w-8 h-8 text-purple-600" />,
      title: "Advanced Training",
      description: "Deep dive into specialized topics and practical applications",
      duration: "6-8 weeks",
      status: "pending"
    },
    {
      icon: <FaCircleCheck className="w-8 h-8 text-orange-600" />,
      title: "Practice & Preparation",
      description: "Mock exams, practice tests, and exam preparation",
      duration: "2-3 weeks",
      status: "pending"
    },
    {
      icon: <PiCertificateFill className="w-8 h-8 text-red-600" />,
      title: "Certification Exam",
      description: "Take the official certification exam",
      duration: "1 day",
      status: "pending"
    }
  ];

  const careerPaths = [
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "Compliance Manager",
      description: "Lead compliance initiatives and ensure organizational adherence to standards",
      salary: "$85,000 - $120,000"
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-green-600" />,
      title: "International Consultant",
      description: "Provide expert guidance on global standards implementation",
      salary: "$90,000 - $140,000"
    },
    {
      icon: <PiTrendUp className="w-8 h-8 text-purple-600" />,
      title: "Risk Management Specialist",
      description: "Develop and implement risk management strategies",
      salary: "$80,000 - $110,000"
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-orange-600" />,
      title: "Quality Assurance Director",
      description: "Oversee quality management systems and processes",
      salary: "$95,000 - $130,000"
    }
  ];

  const pathwayFeatures = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor your learning progress with detailed analytics"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to materials"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Get guidance from certified professionals"
    },
    {
      icon: <PiCertificateFill className="w-6 h-6" />,
      title: "Certification Support",
      description: "Complete assistance throughout your certification journey"
    }
  ];
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My Pathway
        </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Your personalized journey to {title} certification and career advancement
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
                Your {title} Pathway
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                PECB's My Pathway is crafted to support your career aspirations by guiding you through the certifications that validate your expertise in international standards and practices. Whether you're looking to expand your skillset, gain specialized knowledge, or pursue continuous professional development, My Pathway provides you with the tools and resources to advance your career.
              </p>
              <p className="text-lg text-gray-700">
                Accessible through your PECB account, it's your companion in achieving professional excellence and recognition in your field. Our personalized approach ensures that your learning journey is tailored to your specific goals and current skill level.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={PECB_Learn} alt={`${title} Pathway`} className="max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Pathway Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Your Certification Journey
          </h2>
          <div className="space-y-6">
            {pathwaySteps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                  activeStep === index ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-full ${
                    step.status === 'completed' ? 'bg-green-100' : 
                    step.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        step.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {step.status === 'completed' ? 'Completed' : 
                         step.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    <div className="flex items-center mt-3">
                      <FaClock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">Duration: {step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">{path.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{path.description}</p>
                  <div className="bg-green-50 rounded-lg p-2">
                    <span className="text-green-700 font-semibold text-sm">{path.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pathway Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Pathway Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathwayFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-purple-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Benefits */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Benefits of {title} Certification
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Enhanced credibility and professional recognition
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Access to senior-level positions and leadership roles
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Increased earning potential and career advancement
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Global networking opportunities with certified professionals
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Organizational Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Improved organizational compliance and risk management
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Enhanced quality management and operational efficiency
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Better stakeholder confidence and market reputation
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  Competitive advantage in international markets
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mr-4">
            Start Your Pathway
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Download Pathway Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPathway;
