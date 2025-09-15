import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SubCourseDetails = () => {
  const { subcourseName } = useParams();
  const [subcourse, setSubcourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/subcourses/by-slug/${subcourseName}`)
      .then((res) => res.json())
      .then((data) => setSubcourse(data));
  }, [subcourseName]);

  if (!subcourse) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{subcourse.title}</h1>
      <p className="mb-4">{subcourse.description}</p>
      <p className="font-bold text-lg">Price: ₹{subcourse.price}</p>
    </div>
  );
};

export default SubCourseDetails;
