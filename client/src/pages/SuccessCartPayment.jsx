import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SuccessCartPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      try {
        const query = new URLSearchParams(location.search);
        const sessionId = query.get("session_id");

        if (!sessionId) {
          navigate("/courses");
          return;
        }

        let attempts = 0;
        let purchaseData = null;
        let res = null;

        // Retry logic to wait for voucher assignment
        while (attempts < 5 && !purchaseData) {
          res = await axios.get(
            `${process.env.REACT_APP_API_URL}/payments/stripe/session/${sessionId}`
          );

          if (res.data?.voucher) {
            purchaseData = res.data;
          } else {
            attempts++;
            await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2s before retry
          }
        }

        setSessionData(purchaseData || res.data);
      } catch (err) {
        console.error("🔥 Error fetching session details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [location.search, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-lg text-gray-700">Fetching your payment details...</p>
      </div>
    );
  }

  if (!sessionData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <h1 className="text-2xl font-bold text-red-600 mb-3">Payment not found</h1>
        <button
          onClick={() => navigate("/courses")}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const {
    course,
    amount_total,
    subcourseId,
    userId,
    customer_email,
    payment_status,
    voucher,
  } = sessionData;

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Payment Successful!
        </h1>

        <div className="text-left space-y-3 mb-6">
          <p>
            <span className="font-semibold">Course:</span>{" "}
            {course?.title || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Price:</span> $
            {(amount_total / 100).toFixed(2)}
          </p>
          <p>
            <span className="font-semibold">Voucher:</span>{" "}
            {voucher || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Payment Status:</span>{" "}
            {payment_status}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {customer_email}
          </p>
          <p>
            <span className="font-semibold">Subcourse ID:</span>{" "}
            {subcourseId}
          </p>
          <p>
            <span className="font-semibold">User ID:</span> {userId}
          </p>
        </div>

        <button
          onClick={() => navigate("/courses")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Courses
        </button>
      </div>
    </div>
  );
};

export default SuccessCartPayment;
