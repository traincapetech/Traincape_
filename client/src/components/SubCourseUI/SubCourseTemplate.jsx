// src/components/CourseTemplate.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseTemplate = ({ data }) => {
  const { courseId, slug } = useParams();
  const [subcourse, setSubcourse] = useState(data || null);
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    if (data) return; // already have data

    const fetchSubcourse = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/subcourses/${courseId}/${slug}`);
        setSubcourse(res.data);
      } catch (error) {
        console.error("❌ Error fetching subcourse:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcourse();
  }, [courseId, slug, data]);

  if (loading) return <p>Loading...</p>;
  if (!subcourse) return <p>Course not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h1 className="text-3xl font-bold">{subcourse.title}</h1>
          <p className="mt-2 text-gray-600">{subcourse.description}</p>
        </div>

        {/* Right Card */}
        <div className="shadow-lg p-4 rounded-2xl border w-80">
          <img
            src={subcourse.image || "/placeholder.png"}
            alt={subcourse.title}
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold">{subcourse.title}</h2>
          <p className="text-gray-700 mt-2">₹{subcourse.price}</p>

          <div className="flex gap-2 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Add To Cart
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <div className="flex gap-6 border-b pb-2">
          <button className="font-semibold text-blue-600">Description</button>
          <button className="text-gray-600">Benefits</button>
          <button className="text-gray-600">Exam Details</button>
          <button className="text-gray-600">FAQ's</button>
        </div>

        <div className="mt-4">
          <p>{subcourse.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTemplate;
