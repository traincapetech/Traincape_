import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const mockSubcourseDetails = {
  "1a": {
    title: "CompTIA A+ Core 1",
    description: "Learn hardware, troubleshooting, and basic IT skills.",
    overview: [
      { icon: "🖧", title: "Networking Fundamentals", text: "Learn how to configure devices, manage connectivity, and explore LANs (wired & wireless)." },
      { icon: "📄", title: "Network Operations", text: "Explore key practices like documentation, monitoring, and disaster recovery." },
      { icon: "🔒", title: "Network Security", text: "Understand risks, vulnerabilities, and security protocols." },
    ],
    price: "$199",
    duration: "20 hours",
  },
  "2a": {
    title: "AWS Cloud Practitioner Exam Prep",
    description: "Get certified with foundational AWS knowledge for cloud beginners.",
    overview: [
      { icon: "☁️", title: "AWS Basics", text: "Understand AWS services, regions, and pricing." },
      { icon: "🛠", title: "Hands-On Labs", text: "Practice using real AWS resources." },
    ],
    price: "$149",
    duration: "15 hours",
  },
};

const tabs = ["Overview", "Buy Now", "Career Path", "Resources"];

const SubCourseDetails = () => {
  const { subId } = useParams();
  const course = mockSubcourseDetails[subId];

  const [activeTab, setActiveTab] = useState("Overview");

  if (!course) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold text-gray-700">Subcourse Not Found</h1>
        <Link to="/courses" className="mt-4 inline-block text-red-600 hover:underline">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:text-red-600">Home</Link> &gt;{" "}
        <Link to="/courses" className="hover:text-red-600">Courses</Link> &gt;{" "}
        <span className="text-gray-800 font-semibold">{course.title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
      <p className="text-gray-600 mt-2 text-lg">{course.description}</p>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mt-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-lg font-medium transition ${
              activeTab === tab
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Overview" && (
        <div className="space-y-6">
          {course.overview.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg">
                <strong>{item.title}:</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Buy Now" && (
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enroll Now</h2>
          <p className="text-gray-700 text-lg mb-6">
            Price: <span className="text-red-600 font-bold">{course.price}</span> • Duration: {course.duration}
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition">
            Buy Now
          </button>
        </div>
      )}

      {activeTab === "Career Path" && (
        <p className="text-gray-700">🚀 This course can lead to jobs like IT Support Specialist, Help Desk Technician, and Junior Network Administrator.</p>
      )}

      {activeTab === "Resources" && (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>PDF Study Guide</li>
          <li>Practice Exams</li>
          <li>Recommended Books</li>
        </ul>
      )}
    </div>
  );
};

export default SubCourseDetails;
