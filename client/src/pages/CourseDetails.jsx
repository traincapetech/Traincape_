import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [subcourses, setSubcourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcourses = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/subcourses/${courseId}`
        );
        // It's good practice to log the data to make sure it's coming through
        console.log("Fetched subcourses:", res.data);
        setSubcourses(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch subcourses:", error);
        // Handle the error state if the fetch fails
      } finally {
        // Set loading to false whether the fetch succeeds or fails
        setLoading(false);
      }
    };

    fetchSubcourses();
  }, [courseId]);

  // Conditional Rendering based on the 'loading' state
  if (loading) {
    return <h2 className="text-center text-gray-500 text-2xl mt-10">Loading subcourses...</h2>;
  }

  // Conditional Rendering if no subcourses are found after loading
  if (subcourses.length === 0) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Available Subcourses</h1>
        <p className="text-lg text-gray-600">No subcourses found for this course.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-purple-800 tracking-wide">
            A+
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            CompTIA A+ is the industry standard for starting your IT career and appears in more tech support job listings than any other IT credential. It requires two exams: Core 1 focuses on hardware and networking, and Core 2 covers operating systems and security. You can take either exam first or prepare for both together. V15, the new version, offers the latest material, while V14, the retiring version, is best for those already studying and is available until September 25, 2025.
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default CourseDetails;