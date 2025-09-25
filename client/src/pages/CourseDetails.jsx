import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null); 
  const [subcourses, setSubcourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Fetch all courses 
        const courseRes = await axios.get("http://localhost:8080/api/courses");
        const foundCourse = courseRes.data.find(
          (c) => c._id === courseId // match the id from params
        );

        setCourse(foundCourse || null);

        // ✅ Fetch subcourses for this course
        const subcoursesRes = await axios.get(
          `http://localhost:8080/api/subcourses/${courseId}`
        );
        setSubcourses(subcoursesRes.data);
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
      <h2 className="text-center text-gray-500 text-2xl mt-10">
        Loading course details...
      </h2>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* ✅ Show course info if available */}
        {course ? (
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold text-purple-800 tracking-wide">
              {course.title}
            </h1>
            <p className="mt-4 text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
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

        {/* ✅ Subcourses section */}
        {subcourses.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600">
              No subcourses found for this course.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {subcourses.map((subcourse) => (
              <Link
                key={subcourse._id}
                to={`/Courses-details/${subcourse.courseId}/${subcourse.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6 text-center">
                  <div className="flex justify-center items-center h-40">
                    <img
                      src={subcourse.image || "/path/to/placeholder-image.png"}
                      alt={`${subcourse.title} logo`}
                      className="h-full object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-bold mt-4 text-gray-800">
                    {subcourse.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 font-semibold">
                    {subcourse.tagline || "Help Desk Support Specialist"}
                  </p>
                  <button className="mt-4 text-purple-600 font-semibold group-hover:text-purple-800 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
