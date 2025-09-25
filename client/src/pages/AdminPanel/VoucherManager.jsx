import React, { useState, useEffect } from "react";
import axios from "axios";

const VoucherManager = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [subcourses, setSubcourses] = useState([]);
  const [selectedSubcourse, setSelectedSubcourse] = useState(null);
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newVoucherCode, setNewVoucherCode] = useState("");

// Fetch all courses
useEffect(() => {
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/courses");

      // ✅ handle both possible response shapes
      const coursesData = Array.isArray(res.data) ? res.data : res.data.courses;
      setCourses(coursesData);
    } catch (err) {
      console.error("❌ Failed to fetch courses:", err);
      setCourses([]); // prevent undefined issues
    }
  };
  fetchCourses();
}, []);


  // Fetch subcourses when course is selected
  const handleCourseClick = async (course) => {
    setSelectedCourse(course);
    setSelectedSubcourse(null);
    setVouchers([]);
    setLoading(true);

    try {
      const res = await axios.get(
        `http://localhost:8080/api/subcourses/${course._id}`
      );
      setSubcourses(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch subcourses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch vouchers when subcourse is selected
  const handleSubcourseClick = async (subcourse) => {
    setSelectedSubcourse(subcourse);
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/admin/vouchers?subcourseId=${subcourse._id}`
      );
      setVouchers(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch vouchers:", err);
    } finally {
      setLoading(false);
    }
  };

  // Add voucher
// Add voucher
const handleAddVoucher = async () => {
  if (!newVoucherCode.trim()) return;
  try {
    const res = await axios.post("http://localhost:8080/api/admin/vouchers", {
      subcourseId: selectedSubcourse._id,
      code: newVoucherCode,
    });

    // ✅ Backend returns voucher directly
    setVouchers([...vouchers, res.data]); 

    setNewVoucherCode("");
  } catch (err) {
    console.error("❌ Failed to add voucher:", err);
    alert(err.response?.data?.message || "Failed to add voucher");
  }
};


  // Delete voucher
  const handleDeleteVoucher = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/vouchers/${id}`);
      setVouchers(vouchers.filter((v) => v._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete voucher:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Voucher Management</h1>

      {/* Step 1: Courses */}
      {!selectedCourse && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 cursor-pointer"
              onClick={() => handleCourseClick(course)}
            >
              <img
                src={course.image || "/placeholder.png"}
                alt={course.title}
                className="h-32 w-full object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Subcourses */}
      {selectedCourse && !selectedSubcourse && (
        <div>
          <button
            onClick={() => setSelectedCourse(null)}
            className="mb-4 px-4 py-2 bg-gray-200 rounded"
          >
            ⬅ Back to Courses
          </button>
          <h2 className="text-xl font-semibold mb-4">
            Subcourses in {selectedCourse.title}
          </h2>

          {loading ? (
            <p>Loading subcourses...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcourses.map((sub) => (
                <div
                  key={sub._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 cursor-pointer"
                  onClick={() => handleSubcourseClick(sub)}
                >
                  <img
                    src={sub.image || "/placeholder.png"}
                    alt={sub.title}
                    className="h-32 w-full object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold">{sub.title}</h3>
                  <p className="text-gray-600 text-sm">{sub.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 3: Vouchers */}
      {selectedSubcourse && (
        <div>
          <button
            onClick={() => setSelectedSubcourse(null)}
            className="mb-4 px-4 py-2 bg-gray-200 rounded"
          >
            ⬅ Back to Subcourses
          </button>
          <h2 className="text-xl font-semibold mb-4">
            Vouchers for {selectedSubcourse.title}
          </h2>

          {/* Add voucher */}
          <div className="flex mb-4">
            <input
              type="text"
              value={newVoucherCode}
              onChange={(e) => setNewVoucherCode(e.target.value)}
              placeholder="Enter voucher code"
              className="border px-3 py-2 flex-1 rounded"
            />
            <button
              onClick={handleAddVoucher}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>

         {/* Voucher list */}
{loading ? (
  <p>Loading vouchers...</p>
) : vouchers.length === 0 ? (
  <p>No vouchers yet for this subcourse.</p>
) : (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-md">
      <thead className="bg-gray-100 text-left text-gray-700 text-sm uppercase tracking-wide">
        <tr>
          <th className="px-4 py-3 border-b">Code</th>
          <th className="px-4 py-3 border-b">Status</th>
          <th className="px-4 py-3 border-b">Assigned To</th>
          <th className="px-4 py-3 border-b">Created At</th>
          <th className="px-4 py-3 border-b text-center">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        {vouchers.map((v) => (
          <tr
            key={v._id}
            className="hover:bg-gray-50 transition text-sm"
          >
            {/* Code */}
            <td className="px-4 py-3 border-b font-mono">{v.code}</td>

            {/* Status */}
            <td className="px-4 py-3 border-b">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  v.sold
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {v.sold ? "SOLD" : "AVAILABLE"}
              </span>
            </td>

            {/* Assigned To */}
            <td className="px-4 py-3 border-b">
              {v.sold && v.assignedTo ? (
                <span className="text-blue-600 font-medium">
                  {v.assignedTo}
                </span>
              ) : (
                <span className="text-gray-400">Not Assigned</span>
              )}
            </td>

            {/* Created At */}
            <td className="px-4 py-3 border-b">
              {v.createdAt
                ? new Date(v.createdAt).toLocaleString()
                : "—"}
            </td>

            {/* Action */}
            <td className="px-4 py-3 border-b text-center">
              <button
                onClick={() => handleDeleteVoucher(v._id)}
                className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

        </div>
      )}
    </div>
  );
};

export default VoucherManager;
