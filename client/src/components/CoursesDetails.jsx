import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCourses } from "../utils/apiHelpers";

const CourseDetails = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubCourse, setSelectedSubCourse] = useState(null);

  useEffect(() => {
    fetchCourses()
      .then((data) => {
        setCourses(data);

        const decodedName = decodeURIComponent(courseName);
        const foundCourse = data.find(
          (c) => c.name.toLowerCase() === decodedName.toLowerCase()
        );
        setSelectedCourse(foundCourse);
        setSelectedSubCourse(null); // reset subcourse when course changes
      })
      .catch((err) => console.error("❌ Error fetching:", err));
  }, [courseName]);

  const handleCourseChange = (e) => {
    const selectedName = e.target.value;
    navigate(`/courses/${encodeURIComponent(selectedName)}`);
  };

  if (!selectedCourse) {
    return <p className="text-center mt-10">Loading courses...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Dropdown to choose course */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCourse.name}
          onChange={handleCourseChange}
          className="p-2 border rounded-md shadow"
        >
          {courses.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-3xl font-bold mb-4">{selectedCourse.name}</h1>

      {/* Show subcourses */}
      {selectedCourse.subCourses?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedCourse.subCourses.map((sub) => (
            <div
              key={sub._id || sub.name}
              className={`border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer ${
                selectedSubCourse?.name === sub.name ? "bg-blue-50" : ""
              }`}
              onClick={() => setSelectedSubCourse(sub)}
            >
              <h4 className="text-xl font-semibold">{sub.name}</h4>
              <p className="text-gray-600">{sub.description}</p>
              <p className="font-bold mt-2">${sub.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">⚠ No sub-courses available for this course.</p>
      )}

      {/* Show selected subcourse details */}
      {selectedSubCourse && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">{selectedSubCourse.name}</h2>
          <p className="mt-2 text-gray-700">{selectedSubCourse.description}</p>
          <p className="mt-2 font-semibold">Price: ${selectedSubCourse.price}</p>

          {selectedSubCourse.children?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Modules:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {selectedSubCourse.children.map((child) => (
                  <li key={child.name}>
                    <span className="font-semibold">{child.name}:</span>{" "}
                    {child.description} (${child.price})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
