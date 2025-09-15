import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { courseId } = useParams(); // ✅ extract courseId from URL
  const [subcourses, setSubcourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcourses = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/subcourses/${courseId}`
        );
        setSubcourses(res.data);
      } catch (error) {
        console.error("❌ Failed to fetch subcourses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourses();
  }, [courseId]);

  if (loading) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Available Subcourses</h1>
      {subcourses.length === 0 ? (
        <p>No subcourses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subcourses.map((subcourse) => (
            <Link
              key={subcourse._id}
              to={`/Courses-details/${subcourse.courseId}/${subcourse.slug}`}
              className="block border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{subcourse.title}</h2>
              <p className="text-gray-700">{subcourse.description}</p>
              <p className="text-green-600 font-bold mt-2">
                ₹ {subcourse.price}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
