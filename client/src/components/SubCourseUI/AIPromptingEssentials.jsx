// src/components/SubCourseUI/AIPromptingEssentials.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AIPromptingEssentials = () => {
  const { courseId, slug } = useParams(); // get both params
  const [subcourse, setSubcourse] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcourse = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/subcourses/${courseId}/${slug}`);
        setSubcourse(res.data);
      } catch (error) {
        console.error("❌ Error fetching subcourse:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourse();
  }, [slug]);

  if (loading) {
    return (
      <h2 className="text-center text-gray-500 text-2xl mt-10 animate-pulse">
        Loading subcourse details...
      </h2>
    );
  }

  if (!subcourse) {
    return (
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold text-red-600">Subcourse Not Found</h1>
        <p className="text-gray-600 mt-4">
          We couldn’t find details for this subcourse.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        {/* ✅ Image */}
        <div className="h-60 bg-gray-100 flex items-center justify-center">
          <img
            src={subcourse.image || "https://placehold.co/400x200"}
            alt={subcourse.title}
            className="h-full object-contain p-6"
          />
        </div>

        {/* ✅ Content */}
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 text-center">
            {subcourse.title}
          </h1>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            {subcourse.description}
          </p>

          {/* ✅ Category */}
          <div className="mt-6 text-center">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
              {subcourse.category}
            </span>
          </div>

          {/* ✅ Price */}
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-green-600">
              Price: ${subcourse.price}
            </p>
          </div>

          {/* ✅ CTA */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-purple-700 rounded-xl shadow-md hover:bg-purple-800 transition-all duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPromptingEssentials;
