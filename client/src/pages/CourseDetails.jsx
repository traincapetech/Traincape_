import React from "react";
import { useParams, Link } from "react-router-dom";

const mockSubcourses = {
  1: [
    { id: "1a", title: "CompTIA A+ Core 1", duration: "20h", price: "$199" },
    { id: "1b", title: "CompTIA A+ Core 2", duration: "22h", price: "$199" },
  ],
  2: [
    { id: "2a", title: "AWS Cloud Practitioner Exam Prep", duration: "15h", price: "$149" },
    { id: "2b", title: "AWS Cloud Hands-on Labs", duration: "10h", price: "$99" },
  ],
};

const CourseDetails = () => {
  const { id } = useParams();
  const subcourses = mockSubcourses[id] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:text-red-600">Home</Link> &gt;{" "}
        <Link to="/courses" className="hover:text-red-600">Courses</Link> &gt;{" "}
        <span className="text-gray-800 font-semibold">Course ID: {id}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Course ID: {id}</h1>

      {subcourses.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">No subcourses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcourses.map((sub) => (
            <div key={sub.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{sub.title}</h3>
              <p className="text-gray-600 mt-2">⏱ Duration: {sub.duration}</p>
              <p className="text-gray-800 font-bold mt-2">{sub.price}</p>
              <Link
                to={`/course/${id}/subcourse/${sub.id}`}
                className="block mt-4 text-center bg-red-600 text-white py-2 rounded-xl hover:bg-red-700"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
