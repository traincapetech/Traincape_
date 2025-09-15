import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCourses, createOrder } from "../utils/apiHelpers";

export default function Checkout() {
  const { subCourseId } = useParams();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedSubCourse, setSelectedSubCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses().then((courses) => {
      const found = courses
        .flatMap((c) => c.subCourses || [])
        .find((s) => s._id === subCourseId);
      setSelectedSubCourse(found);
    });
  }, [subCourseId]);

  const handlePurchase = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setLoading(true);
    try {
      const data = await createOrder(subCourseId, email);
      navigate("/success", { state: { voucher: data.voucher } });
    } catch (err) {
      alert(err.response?.data?.message || "Purchase failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {selectedSubCourse ? (
        <div className="mb-4 p-4 border rounded bg-gray-50">
          <h2 className="font-bold text-lg">{selectedSubCourse.name}</h2>
          <p className="text-gray-600">{selectedSubCourse.description}</p>
          <p className="text-lg font-semibold mt-2">${selectedSubCourse.price}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading course details...</p>
      )}

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <button
        onClick={handlePurchase}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
      >
        {loading ? "Processing..." : "Complete Purchase"}
      </button>
    </div>
  );
}
