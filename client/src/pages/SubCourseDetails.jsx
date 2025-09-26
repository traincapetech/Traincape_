// src/pages/SubCourseDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// ✅ Import all possible UI components you want to support
import AIPromptingEssentials from "../components/SubCourseUI/AIPromptingEssentials";
// import AnotherUI from "../components/SubCourseUI/AnotherUI"; // add more if needed

// ✅ Mapping table (backend uiComponent string -> React component)
const UIComponents = {
  AIPromptingEssentials,
  // AnotherUI,
};

const SubCourseDetails = () => {
  const { courseId, slug } = useParams(); // <-- matches route /Courses-details/:courseId/:slug
  const [subcourse, setSubcourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcourse = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await axios.get(
          `http://localhost:8080/api/subcourses/${courseId}/${slug}`
        );

        console.log("✅ Subcourse fetched:", data);
        setSubcourse(data);
      } catch (err) {
        console.error("❌ Error fetching subcourse:", err);
        setError("Failed to fetch subcourse");
      } finally {
        setLoading(false);
      }
    };

    if (courseId && slug) {
      fetchSubcourse();
    }
  }, [courseId, slug]);

  if (loading) return <div className="p-6 text-center">⏳ Loading...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;
  if (!subcourse) return <div className="p-6 text-center">❌ Subcourse not found</div>;

  // ✅ Pick UI component based on backend `uiComponent` field
  const Component = UIComponents[subcourse.uiComponent];

  if (!Component) {
    return (
      <div className="p-6 text-center text-red-600">
        UI Component not found: {subcourse.uiComponent}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <Component subcourse={subcourse} />
    </div>
  );
};

export default SubCourseDetails;
