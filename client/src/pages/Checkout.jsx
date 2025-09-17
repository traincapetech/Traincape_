import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  console.log("🔍 Checkout received course:", course);
console.log("🔍 location.state:", location.state);


  useEffect(() => {
    const createSession = async () => {
      try {
        if (!course) {
          console.warn("⚠️ No course data provided.");
          navigate("/courses");
          return;
        }

        // ✅ Get logged-in user email
        let userEmail = null;

        // 1️⃣ First, try to decode from token
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            userEmail = payload?.email || null;
          } catch (e) {
            console.error("JWT decode failed", e);
          }
        }

        // 2️⃣ Fallback to saved email (from Login.jsx)
        if (!userEmail) {
          userEmail = localStorage.getItem("userEmail");
        }

        if (!userEmail) {
          console.warn("⚠️ No user email found. Redirecting to login.");
          navigate("/login", {
            state: {
              from: "/checkout",
              message: "Please login to continue your purchase.",
            },
          });
          return;
        }

        // ✅ Build Stripe payload
        const payload = {
          email: userEmail,
          productIds: [course.id],
          lineItems: [
            {
              price_data: {
                currency: "usd",
                product_data: { name: course.title },
                unit_amount: course.price * 100,
              },
              quantity: 1,
            },
          ],
          success_url: `${window.location.origin}/success-cart-payment`,
          cancel_url: `${window.location.origin}/cancel-stripe-payment`,
        };

        console.log("📤 Sending to backend:", payload);

        const response = await axios.post(
      "https://traincape-backend-1.onrender.com/payments/stripe",

          payload
        );

        if (response.data?.url) {
          window.location.href = response.data.url;
        } else {
          console.error("❌ Backend did not return a URL.");
          navigate("/cart");
        }
      } catch (error) {
        console.error("🔥 Error creating Stripe session:", error);
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
