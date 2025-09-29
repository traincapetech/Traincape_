import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched courses:", data); // ✅ Debug API response
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            Discover Our Certifications
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Build in-demand skills and showcase your expertise with certifications
            designed for real-world careers.
          </p>
        </div>

        {/* Skeleton Loader */}
        {loading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Course Grid */}
        {!loading && courses.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => {
              console.log("Rendering course:", course); // ✅ Debug log

              return (
                <Link
                  key={course._id}
                  to={`/Courses-details/${course._id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="h-48 flex items-center justify-center bg-gray-50 relative">
                   <img
  src={
    course.image
      ? `http://localhost:8080/proxy/image/${course.image}`
      : "https://placehold.co/200x200"
  }
  alt={course.title}
  className="h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
  onError={(e) => {
    console.error("Image failed to load:", course.image);
    e.target.src = "https://placehold.co/200x200";
  }}
/>

                    {/* Category Badge (if available) */}
                    {course.category && (
                      <span className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h2>

                    <button className="mt-5 w-full inline-block px-5 py-3 text-sm font-semibold text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && courses.length === 0 && (
          <div className="text-center mt-20">
            <img
              src="https://illustrations.popsy.co/gray/web-search.svg"
              alt="No courses"
              className="w-48 mx-auto mb-6"
            />
            <h2 className="text-xl font-semibold text-gray-700">
              No courses available right now
            </h2>
            <p className="mt-2 text-gray-500">
              Check back later as we’re adding new certifications soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
