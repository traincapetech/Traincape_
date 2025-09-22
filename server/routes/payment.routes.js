// routes/payment.routes.js
import express from "express";
import {
  StripePayment,
  StripePaymentSuccess,
  StripeWebhook,
} from "../controllers/payments/stripe/stripe.controller.js";
import PurchaseModel from "../model/Purchase.js";
import authMiddleware from "../middleware/auth.middleware.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const paymentRouter = express.Router();

//
// ✅ Create Stripe Checkout Session
//
paymentRouter.post("/stripe", StripePayment);

//
// ✅ Fetch Session Details (for frontend success page)
//
paymentRouter.get("/stripe/session/:id", async (req, res) => {
  console.log("📡 Received request for session:", req.params.id);

  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id, {
      expand: ["line_items.data.price.product"],
    });

    if (!session) {
      console.log("❌ Session not found:", req.params.id);
      return res.status(404).json({ error: "Session not found" });
    }

    console.log("✅ Session retrieved:", session.id);

    res.json({
      course: {
        title:
          session.line_items?.data[0]?.price?.product?.name || "Unknown Course",
      },
      amount_total: session.amount_total,
      customer_email: session.customer_details?.email,
      payment_status: session.payment_status,
    });
  } catch (err) {
    console.error("❌ Error fetching Stripe session:", err.message);
    res.status(400).json({ error: "Failed to fetch session" });
  }
});

//
// ✅ Success route (optional, backend-only check)
//
paymentRouter.get("/stripe/success", StripePaymentSuccess);

//
// ✅ Purchase History (protected route)
//
paymentRouter.get("/history", authMiddleware, async (req, res) => {
  try {
    const userEmail = req.user?.email;
    if (!userEmail) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const purchases = await PurchaseModel.find({ email: userEmail }).populate(
      "courseId"
    );

    console.log(`📦 Found ${purchases.length} purchases for ${userEmail}`);

    res.json(
      purchases.map((p) => ({
        id: p.courseId?._id,
        title: p.courseId?.title,
        price: p.courseId?.price,
        payment_status: p.status,
        purchased_at: p.completedAt,
      }))
    );
  } catch (error) {
    console.error("❌ Error fetching purchase history:", error);
    res.status(500).json({ error: "Failed to fetch purchase history" });
  }
});

export { paymentRouter };
