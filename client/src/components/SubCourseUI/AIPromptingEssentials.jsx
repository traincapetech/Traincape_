// src/components/SubCourseUI/AIPromptingEssentials.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AIPromptingEssentials = ({ courseId, slug, setSubcourse }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/subcourses/${courseId}/${slug}`
        );
        setSubcourse(res.data); // ⬅️ give data back to template
      } catch (error) {
        console.error("❌ Error fetching subcourse:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourse();
  }, [courseId, slug, setSubcourse]);

  if (loading) {
    return (
      <p className="text-gray-500 text-center animate-pulse">
        Loading AIPromptingEssentials content...
      </p>
    );
  }

  return (
    <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
      <h3 className="text-xl font-bold text-purple-700 mb-2">
        Special Module: AI Prompting Essentials
      </h3>
      <p className="text-gray-700">
        This section contains unique content only for this subcourse.
      </p>
    </div>
  );
};

export default AIPromptingEssentials;
