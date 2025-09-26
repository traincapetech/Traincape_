// src/pages/Microsoft.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // or "next/router" if using Next.js
import CourseTemplate from "../../components/SubCourseUI/SubCourseTemplate";

const Microsoft = () => {
  const { courseId, slug } = useParams(); // get params from URL
  const [subcourse, setSubcourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId || !slug) return;

    const fetchSubcourse = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/subcourses/${courseId}/${slug}`    
        // `http://localhost:8080/api/subcourses/68d5171bf2d9e4de03376e48/microsoft-office-specialist-excel-expert-certification`
        );
        if (!res.ok) throw new Error("Failed to fetch subcourse");
        const data = await res.json();
        setSubcourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourse();
  }, [courseId, slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <CourseTemplate data={subcourse} />;
};

export default Microsoft;
