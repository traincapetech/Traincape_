// src/pages/CourseDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [subcourses, setSubcourses] = useState([]);
  const [categories, setCategories] = useState(["All"]); // ✅ dynamic categories
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  // ✅ Capitalize first word of course title
  const formatTitle = (title) => {
    if (!title) return "";
    const words = title.split(" ");
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    return words.join(" ");
  };

  // ✅ Fetch course + subcourses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, subcoursesRes] = await Promise.all([
          axios.get("http://localhost:8080/api/courses"),
          axios.get(`http://localhost:8080/api/subcourses/${courseId}`),
        ]);

        const foundCourse = courseRes.data.find((c) => c._id === courseId);
        setCourse(foundCourse || null);

        const subcoursesData = subcoursesRes.data || [];
        setSubcourses(subcoursesData);

        // ✅ Extract unique categories from DB
        const uniqueCategories = [
          "All",
          ...new Set(
            subcoursesData
              .map((sc) => sc.category)
              .filter((cat) => cat && cat.trim() !== "")
          ),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("❌ Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId]);

  if (loading) {
    return (
      <h2 className="text-center text-gray-500 text-2xl mt-10 animate-pulse">
        Loading course details...
      </h2>
    );
  }

  // ✅ Filter subcourses by active tab
  const filteredSubcourses =
    activeTab === "All"
      ? subcourses
      : subcourses.filter(
          (sc) =>
            sc.category &&
            sc.category.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-6 py-10">
        {/* ✅ Course Info */}
        {course ? (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
              {formatTitle(course.title)}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {course.description}
            </p>
          </div>
        ) : (
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="text-lg text-gray-600">
              Sorry, we couldn’t find details for this course.
            </p>
          </div>
        )}

        {/* ✅ Dynamic Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 bg-white shadow-sm rounded-t-lg overflow-x-auto">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`py-3 px-6 text-md md:text-lg font-medium transition-colors duration-200 ease-in-out whitespace-nowrap ${
                activeTab === tab
                  ? "text-purple-700 border-b-4 border-purple-700 font-bold"
                  : "text-gray-600 hover:text-purple-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ Subcourses */}
        {filteredSubcourses.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              No subcourses found for this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {filteredSubcourses.map((subcourse) => (
              <div
                key={subcourse._id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
              >
                {/* Image */}
                <div className="h-44 flex items-center justify-center bg-gray-50">
                  <img
                    src={subcourse.image || "https://placehold.co/200x200"}
                    alt={subcourse.title}
                    className="h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {subcourse.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 italic">
                    {subcourse.tagline || "Specialized Training"}
                  </p>

                  {/* Explore Button */}
                  <div className="mt-auto">
                    <Link
                      to={`/Courses-details/${subcourse.courseId}/${subcourse.slug}`}
                    >
                      <button className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-purple-700 rounded-xl shadow-md hover:bg-purple-800 transition-all duration-300">
                        Explore More →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
