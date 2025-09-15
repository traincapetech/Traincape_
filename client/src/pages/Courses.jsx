import React from "react";
import { Link } from "react-router-dom";

const mockCourses = [
  { id: "1", title: "CompTIA A+", description: "Learn IT fundamentals", price: "$299" },
  { id: "2", title: "AWS Cloud", description: "Cloud Practitioner training", price: "$249" },
  { id: "3", title: "Security+", description: "Cybersecurity essentials", price: "$349" },
];

const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-lg font-bold mt-2">{course.price}</p>
            <Link
              to={`/course/${course.id}`}
              className="block mt-4 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
