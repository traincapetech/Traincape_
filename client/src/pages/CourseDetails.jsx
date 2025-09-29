// src/pages/CourseDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const colors = [
  "bg-blue-50 border-blue-200",
  "bg-green-50 border-green-200",
  "bg-purple-50 border-purple-200",
  "bg-pink-50 border-pink-200",
  "bg-yellow-50 border-yellow-200",
  "bg-indigo-50 border-indigo-200",
];

const badgeColors = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-yellow-100 text-yellow-700",
  "bg-indigo-100 text-indigo-700",
];

const buttonColors = [
  "bg-blue-600 hover:bg-blue-700",
  "bg-green-600 hover:bg-green-700",
  "bg-purple-600 hover:bg-purple-700",
  "bg-pink-600 hover:bg-pink-700",
  "bg-yellow-600 hover:bg-yellow-700",
  "bg-indigo-600 hover:bg-indigo-700",
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [subcourses, setSubcourses] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const formatTitle = (title) => {
    if (!title) return "";
    const words = title.split(" ");
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    return words.join(" ");
  };

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
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          {course ? (
            <>
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                {formatTitle(course.title)}
              </h1>
              <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                {course.description}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
              <p className="text-blue-100">
                Sorry, we couldn’t find details for this course.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Categories */}
        <div className="flex justify-center space-x-6 border-b border-gray-200 overflow-x-auto pb-2">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Subcourses */}
        {filteredSubcourses.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-500">
              No subcourses found for this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {filteredSubcourses.map((subcourse, index) => {
              const colorIndex = index % colors.length;
              return (
                <div
                  key={subcourse._id}
                  className={`group rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col w-72 h-[280px] mx-auto ${colors[colorIndex]}`}
                >
                  {/* Image / Badge */}
<div className="h-28 flex items-center justify-center bg-white rounded-t-xl border-b">
  {subcourse.image ? (
    <img
      src={`http://localhost:8080/proxy/image/${subcourse.image}`}
      alt={subcourse.title}
      className="h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
      onError={(e) => {
        console.error("Subcourse image failed to load:", subcourse.image);
        e.target.style.display = "none";
        e.target.parentElement.innerHTML = `
          <div class="flex justify-center items-center w-full h-full">
            <div class="w-20 h-20 rounded-full border-2 border-purple-700 flex flex-col items-center justify-center text-center shadow">
              <div class="text-purple-700 font-bold text-xs">${subcourse.title.split(" ")[0]}</div>
              <div class="text-gray-800 font-semibold text-sm">${subcourse.title.split(" ")[1] || ""}</div>
              <div class="text-gray-500 text-[10px]">Certification</div>
            </div>
          </div>`;
      }}
    />
  ) : (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-20 h-20 rounded-full border-2 border-purple-700 flex flex-col items-center justify-center text-center shadow">
        <div className="text-purple-700 font-bold text-xs">
          {subcourse.title.split(" ")[0]}
        </div>
        <div className="text-gray-800 font-semibold text-sm">
          {subcourse.title.split(" ")[1] || ""}
        </div>
        <div className="text-gray-500 text-[10px]">Certification</div>
      </div>
    </div>
  )}
</div>


                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow text-center">
                    <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
                      {subcourse.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 italic line-clamp-2 leading-snug">
                      {subcourse.tagline || "Specialized Training"}
                    </p>

                    {/* Explore Button */}
                    <div className="mt-auto">
                      <Link
                        to={`/Courses-details/${subcourse.courseId}/${subcourse.slug}`}
                      >
                        <button
                          className={`inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white rounded-full transition-all duration-300 ${buttonColors[colorIndex]}`}
                        >
                          Explore →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
