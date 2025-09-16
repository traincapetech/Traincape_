import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubCourseDetails = () => {
  const { subcourseSlug } = useParams();
  const [subcourse, setSubcourse] = useState(null);
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/subcourses/slug/${subcourseSlug}`
        );
        const data = res.data;
        setSubcourse(data);

        // Dynamically import UI component
        if (data.uiComponent) {
          const module = await import(
            `../components/SubCourseUI/${data.uiComponent}.jsx`
          );
          setComponent(() => module.default);
        }
      } catch (err) {
        console.error("❌ Error fetching subcourse:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourse();
  }, [subcourseSlug]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!subcourse) return <div className="p-6 text-center">Subcourse not found</div>;
  if (!Component) return <div className="p-6 text-center">No UI available for this subcourse</div>;

  return <Component subcourse={subcourse} />;
};

export default SubCourseDetails;
