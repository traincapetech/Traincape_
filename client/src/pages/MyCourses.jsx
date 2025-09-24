import { useEffect, useState } from "react";
import axios from "axios";

const MyCourses = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("🪪 Token from localStorage:", token);

        if (!token) {
          console.warn("⚠️ User not logged in, no token found");
          setLoading(false);
          return;
        }

        const apiUrl = `${process.env.REACT_APP_API_URL}/payments/history`;
        console.log("🌍 Hitting API:", apiUrl);

        const res = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("✅ Purchase history response:", res.data);
        setPurchases(res.data);
      } catch (err) {
        console.error(
          "🔥 Error fetching purchase history:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-lg text-gray-700">Loading your courses...</p>
      </div>
    );
  }

  if (purchases.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <h1 className="text-2xl font-bold text-gray-700 mb-3">No Courses Found</h1>
        <p className="text-gray-500">You haven’t purchased any courses yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📚 My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchases.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
          >
            {/* Course Info */}
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {course.description || "No description available"}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> ${course.price}
            </p>

            {/* Transaction Info */}
            <div className="mt-4 border-t pt-3 text-sm text-gray-700">
              <p>
                <strong>Payment Status:</strong>{" "}
                <span
                  className={
                    course.payment_status === "completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {course.payment_status}
                </span>
              </p>
              <p>
                <strong>Transaction ID:</strong> {course.transaction_id}
              </p>
              <p>
                <strong>Email:</strong> {course.email}
              </p>
              <p>
                <strong>Purchased At:</strong>{" "}
                {new Date(course.purchased_at).toLocaleString()}
              </p>
            </div>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              Go to Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
