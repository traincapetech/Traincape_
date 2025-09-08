import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import comptia from "../assets/comptia.json";
import AddToCartButton from "../components/AddToCartButton";
import ComptiaCourse from "../components/ComptiaCourse";
import PECB_Overview from "../assets/PECB1.png";

const PECB = () => {
  // Real PECB courses based on available brochures and PDFs
  const courseData = [
    // Information Security
    {
      image: PECB_Overview,
      title: "PECB Certified ISO 27001 Foundation",
      url: "/PecbCertifiedISO27001Foundation",
      category: "Information Security"
    },
    {
      image: PECB_Overview,
      title: "ISO/IEC 27001 Lead Implementer",
      url: "/ISOIEC27001LeadImplementer",
      category: "Information Security"
    },
    {
      image: PECB_Overview,
      title: "ISO/IEC 27001",
      url: "/ISOIEC27001",
      category: "Information Security"
    },
    {
      image: PECB_Overview,
      title: "ISO/IEC 27005 Risk Manager",
      url: "/ISOIEC27005RiskManager",
      category: "Information Security"
    },
    {
      image: PECB_Overview,
      title: "ISO/IEC 27032 Cyber Security",
      url: "/ISOIEC27032CyberSecurity",
      category: "Cybersecurity Management"
    },

    // Cybersecurity Management
    {
      image: PECB_Overview,
      title: "Computer Forensics",
      url: "/Computerforensics",
      category: "Cybersecurity Management"
    },
    {
      image: PECB_Overview,
      title: "SCADA Security Manager",
      url: "/SCADASecurityManager",
      category: "Cybersecurity Management"
    },
    {
      image: PECB_Overview,
      title: "Cybersecurity Audit Trainings",
      url: "/CybersecurityAuditTrainings",
      category: "Cybersecurity Management"
    },

    // Continuity, Resilience, and Recovery
    {
      image: PECB_Overview,
      title: "ISO 22301",
      url: "/ISO22301",
      category: "Continuity, Resilience, and Recovery"
    },

    // Governance, Risk, and Compliance
    {
      image: PECB_Overview,
      title: "ISO 31000 Risk Manager",
      url: "/ISO31000RiskManager",
      category: "Governance, Risk, and Compliance"
    },
    {
      image: PECB_Overview,
      title: "ISO 37001",
      url: "/ISO37001",
      category: "Governance, Risk, and Compliance"
    },

    // Quality and Management
    {
      image: PECB_Overview,
      title: "ISO 9001",
      url: "/ISO9001",
      category: "Quality and Management"
    },
    {
      image: PECB_Overview,
      title: "ISO 9001 Lead Implementer",
      url: "/ISO9001LeadImplementer",
      category: "Quality and Management"
    },

    // Health and Safety
    {
      image: PECB_Overview,
      title: "ISO 45001",
      url: "/ISO45001",
      category: "Health and Safety"
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AddToCartButton />

      {/* Modern Hero Section */}
      <div className="course-detail text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="info flex flex-col md:flex-row gap-8 items-center px-6 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2">
            <Lottie 
              animationData={comptia} 
              className="w-full h-auto" 
              onError={(error) => {
                console.warn('Lottie animation error:', error);
              }}
            />
          </div>
          <div className="text w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <a
                href="https://pecb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                title="Visit PECB Official Website"
              >
                PECB
              </a>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              PECB (Professional Evaluation and Certification Board) is a
              globally recognized certification body that empowers professionals
              and organizations to excel through its robust training,
              certification, and credentialing solutions. Specializing in
              standards such as ISO, PECB offers a wide range of services,
              including training, audits, and certification in fields like
              cybersecurity, data protection, quality management, and
              environmental sustainability. With a commitment to excellence,
              credibility, and global reach, PECB is the trusted partner for
              individuals and businesses striving for continuous improvement and
              compliance with international standards.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Breadcrumb Navigation */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Home
            </button>
            <span className="text-gray-400">›</span>
            <button
              onClick={() => navigate("/training")}
              className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Training
            </button>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-semibold">PECB</span>
          </div>
        </div>
      </div>

      {/* Modern Courses Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              PECB Certification Courses
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of PECB certification courses with official brochures and PDF resources. Each course is designed to enhance your professional skills and advance your career in various domains.
            </p>
          </div>

          {/* Course Categories */}
          {(() => {
            const categories = [...new Set(courseData.map(course => course.category))];
            return categories.map((category, categoryIndex) => {
              const categoryCourses = courseData.filter(course => course.category === category);
              return (
                <div key={categoryIndex} className="mb-12">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{category}</h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryCourses.map((course, index) => (
                      <ComptiaCourse
                        key={index}
                        image={course.image}
                        title={course.title}
                        url={course.url}
                      />
                    ))}
                  </div>
                </div>
              );
            });
          })()}
          
          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Official PECB Partnership
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                All courses include official PECB brochures and certification materials. 
                Our training programs are designed to meet PECB standards and prepare you for official certification exams. 
                Each course comes with comprehensive PDF resources and study materials.
              </p>
              <div className="mt-6">
                <a
                  href="https://pecb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                >
                  <span className="mr-2">🔗</span>
                  Visit Official PECB Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PECB;
