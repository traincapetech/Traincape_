import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Courses-details/${course._id}`}
            className="p-4 bg-white shadow rounded-xl hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
