import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK); // ✅ FIXED

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  console.log("🔍 Checkout received course:", course);

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
        const token = localStorage.getItem("token");

        if (token) {
          try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            userEmail = payload?.email || null;
          } catch (e) {
            console.error("JWT decode failed", e);
          }
        }

        if (!userEmail) userEmail = localStorage.getItem("userEmail");

        if (!userEmail) {
          console.warn("⚠️ No user email found. Redirecting to login.");
          navigate("/login", {
            state: { from: "/checkout", message: "Please login to continue your purchase." },
          });
          return;
        }

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

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/payments/stripe`, payload);

        console.log("📥 Backend response:", response.data);

        if (response.data?.sessionId) {
          console.log("✅ Stripe session created:", response.data.sessionId);

          // 🔑 Option 1: Stripe.js redirect (if key works)
          const stripe = await stripePromise;
          if (stripe) {
            await stripe.redirectToCheckout({ sessionId: response.data.sessionId });
          } else {
            console.warn("⚠️ Stripe.js not initialized, using direct redirect.");
            window.location.href = response.data.url; // 🔑 Option 2: Direct URL
          }
        } else {
          console.error("❌ No sessionId from backend.");
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
