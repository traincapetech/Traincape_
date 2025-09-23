import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {}; // subcourse object

  useEffect(() => {
    const createSession = async () => {
      try {
        if (!course) {
          navigate("/courses");
          return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login", {
            state: { from: "/checkout", message: "Please login to continue." },
          });
          return;
        }

        const payload = {
          subcourseId: course.id, // only send ID
        };

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/payments/stripe`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`, // send JWT
            },
          }
        );

        if (response.data?.id) {
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({ sessionId: response.data.id });
        } else {
          navigate("/cart");
        }
      } catch (error) {
        console.error("🔥 Checkout error:", error);
        navigate("/cart");
      }
    };

    createSession();
  }, [course, navigate]);

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <p className="text-lg text-gray-700">Redirecting to secure checkout...</p>
    </div>
  );
};

export default Checkout;
