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
// ✅ Create Stripe Checkout Session (protected by auth)
//
paymentRouter.post("/stripe", authMiddleware, StripePayment);

// ✅ Fetch Session Details (for frontend success page)
//
// paymentRouter.get("/stripe/session/:id", async (req, res) => {
//   console.log("📡 Received request for session:", req.params.id);

//   try {
//     const session = await stripe.checkout.sessions.retrieve(req.params.id, {
//       expand: ["line_items.data.price.product"],
//     });

//     if (!session) {
//       console.log("❌ Session not found:", req.params.id);
//       return res.status(404).json({ error: "Session not found" });
//     }

//     console.log("✅ Session retrieved:", session.id);

//     res.json({
//       course: {
//         title:
//           session.line_items?.data[0]?.price?.product?.name || "Unknown Course",
//       },
//       amount_total: session.amount_total,
//       customer_email: session.customer_details?.email,
//       payment_status: session.payment_status,
//     });
//   } catch (err) {
//     console.error("❌ Error fetching Stripe session:", err.message);
//     res.status(400).json({ error: "Failed to fetch session" });
//   }
// });

paymentRouter.get("/history", async (req, res) => {
  try {
    const userId = req.user?.userId; // comes from auth middleware

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Fetch purchases with subcourse populated
    const purchases = await PurchaseModel.find({ userId })
      .populate("subcourseId", "title description price") // only needed fields
      .sort({ createdAt: -1 });

    // Map DB -> frontend format
    const formatted = purchases.map((p) => ({
      id: p._id,
      title: p.subcourseId?.title || "Unknown Course",
      description: p.subcourseId?.description || "",
      price: p.subcourseId?.price || p.amount,
      payment_status: p.status, // mapped from schema
      transaction_id: p.stripePaymentIntent || p.stripeSessionId,
      email: p.email,
      purchased_at: p.completedAt || p.createdAt,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("🔥 Error fetching purchase history:", err);
    res.status(500).json({ error: "Failed to fetch purchase history" });
  }
});

paymentRouter.get("/stripe/session/:id", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id, {
      expand: ["line_items.data.price.product"],
    });

    if (!session) return res.status(404).json({ error: "Session not found" });

    res.json({
      course: {
        title: session.line_items?.data[0]?.price?.product?.name || "Unknown Course",
      },
      amount_total: session.amount_total,
      customer_email: session.customer_details?.email,
      payment_status: session.payment_status,
      subcourseId: session.metadata?.subcourseId || null, // ✅ add this
      userId: session.metadata?.userId || null,           // ✅ add this
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
// ✅ Stripe Webhook (⚠️ must NOT use authMiddleware)
//


export { paymentRouter };
