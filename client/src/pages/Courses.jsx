import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Note: This is a placeholder for filtering.
  // The API response would ideally need to contain a category field.
  const filteredCourses = activeTab === "All"
    ? courses
    : courses.filter(course => course.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-purple-800 tracking-wide">
            Discover Our Certifications
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Build the skills employers need and showcase your ability to excel in high-demand roles.
            Explore industries and uncover the CompTIA certification or learning product that aligns
            with your career aspirations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-300 bg-white shadow-md rounded-t-lg">
          {["All", "AI", "Cloud", "Cyber", "Data", "Digital Skills", "Network", "Tech Support"].map(
            (tab) => (
              <button
                key={tab}
                className={`py-4 px-6 text-lg font-medium transition-colors duration-200 ease-in-out ${
                  activeTab === tab
                    ? "text-purple-700 border-b-4 border-purple-700 font-bold"
                    : "text-gray-600 hover:text-purple-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {filteredCourses.map((course) => (
            <Link
              key={course._id}
              to={`/Courses-details/${course._id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6 text-center">
                {/* Placeholder for the image */}
                {/* You will need to add a course.image property to your API data */}
                <div className="flex justify-center items-center h-40">
                  <img
                    src={course.image || "https://placehold.co/150x150"}
                    alt={`${course.title} logo`}
                    className="h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold mt-4 text-gray-800">
                  {course.title}
                </h2>
                <p className="mt-2 text-md text-gray-600">
                  {course.shortDescription || course.description}
                </p>
                <button className="mt-4 text-purple-600 font-semibold group-hover:text-purple-800 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;