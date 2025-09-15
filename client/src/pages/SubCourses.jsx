import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCourses } from "../utils/apiHelpers";

const SubCourseDetails = () => {
  const { courseName, subCourseName } = useParams();
  const navigate = useNavigate();

  const [subCourse, setSubCourse] = useState(null);

  useEffect(() => {
    console.log("📢 Fetching courses for subcourse...");
    fetchCourses()
      .then((data) => {
        const decodedCourse = decodeURIComponent(courseName).trim().toLowerCase();
        const decodedSubCourse = decodeURIComponent(subCourseName).trim().toLowerCase();

        const parentCourse = data.find(
          (course) => course.name.trim().toLowerCase() === decodedCourse
        );

        if (!parentCourse) {
          console.warn("⚠ No matching parent course:", decodedCourse);
          setSubCourse(null);
          return;
        }

        const foundSub = parentCourse.subCourses.find(
          (s) => s.name.trim().toLowerCase() === decodedSubCourse
        );

        if (foundSub) {
          console.log("🎯 Found sub-course:", foundSub);
          setSubCourse(foundSub);
        } else {
          console.warn("⚠ No matching subcourse:", decodedSubCourse);
          setSubCourse(null);
        }
      })
      .catch((err) => console.error("❌ Error fetching courses:", err));
  }, [courseName, subCourseName]);

  if (!subCourse) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600">
          ⚠ Sub-course Not Found!
        </h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => navigate(`/courses/${courseName}`)}
        >
          Back to Course
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">{subCourse.name}</h1>
      <p className="text-gray-700">{subCourse.description}</p>
      <p className="mt-3 font-bold text-xl">${subCourse.price}</p>

      {subCourse.children?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-3">Modules</h3>
          <ul className="space-y-2">
            {subCourse.children.map((child, idx) => (
              <li key={idx} className="bg-white border rounded p-3 shadow-sm">
                <h4 className="font-semibold">{child.name}</h4>
                <p className="text-gray-600">{child.description}</p>
                <p className="text-sm font-bold">${child.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
        onClick={() => navigate(`/checkout/${encodeURIComponent(subCourse.name)}`)}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default SubCourseDetails;
