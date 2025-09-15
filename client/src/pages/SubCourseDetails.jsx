import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubCourseDetails = () => {
  const { courseId, subcourseSlug } = useParams(); // ✅ Get params from URL
  const [subcourse, setSubcourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcourse = async () => {
      try {
        if (!subcourseSlug) {
          setError("No slug provided in URL");
          setLoading(false);
          return;
        }

        console.log(`🔎 Fetching subcourse: ${subcourseSlug}`);

        const res = await fetch(
          `http://localhost:8080/api/subcourses/slug/${subcourseSlug}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch subcourse: ${res.statusText}`);
        }

        const data = await res.json();
        setSubcourse(data);
      } catch (err) {
        console.error("❌ Error fetching subcourse:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourse();
  }, [subcourseSlug]);

  if (loading) return <p>Loading subcourse details...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  if (!subcourse) return <p>No subcourse found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{subcourse.title}</h1>
      <img
        src={subcourse.image || "https://via.placeholder.com/600x300"}
        alt={subcourse.title}
        className="rounded-xl shadow-md mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">{subcourse.description}</p>

      <div className="p-4 border rounded-lg shadow-md bg-gray-50">
        <p className="text-xl font-semibold text-green-600">
          ₹ {subcourse.price}
        </p>
        <p className="text-sm text-gray-500">
          Course ID: {subcourse.courseId}
        </p>
      </div>
    </div>
  );
};

export default SubCourseDetails;
