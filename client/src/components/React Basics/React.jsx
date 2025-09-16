import React from "react";

const ReactPage = ({ subcourse }) => {
  // Static descriptive text for the React course
  const description =
    "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It's maintained by Meta and a community of individual developers and companies. This course covers everything from basic JSX syntax to advanced state management with Redux.";

  // Hard-coded list of objectives/rules for this course
  const examObjectives = [
    {
      title: "Fundamentals (30%)",
      topics: [
        "Component-based architecture",
        "JSX syntax and elements",
        "Props and state management",
      ],
    },
    {
      title: "Advanced Concepts (40%)",
      topics: [
        "Hooks (useState, useEffect, useContext)",
        "React Router for navigation",
        "API calls with useEffect",
      ],
    },
    {
      title: "Ecosystem (30%)",
      topics: [
        "Introduction to Redux",
        "Testing with Jest and React Testing Library",
        "Deployment strategies",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">
            Discover Our Certifications
          </a>{" "}
          &gt;{" "}
          <span className="text-purple-600">
            {subcourse?.title || "React Basics"}
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="flex-1">
            <h1 className="text-sm font-semibold text-purple-600 mb-2">
              Beginner
            </h1>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {subcourse?.title || "React Basics"}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={subcourse?.image || "https://placehold.co/150x150"}
              alt={`${subcourse?.title || "React Basics"} logo`}
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Tabbed Navigation */}
        <div className="bg-gray-800 text-white rounded-md mt-8 overflow-hidden shadow-xl">
          <div className="flex">
            {["Overview", "Buy Now", "Career Path", "Resources"].map(
              (tab) => (
                <button
                  key={tab}
                  className="flex-1 py-4 text-center font-semibold transition-colors duration-200 ease-in-out hover:bg-gray-700"
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Course objectives summary
            </h3>
            <div className="space-y-8">
              {examObjectives.map((objective, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {objective.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    {objective.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactPage;