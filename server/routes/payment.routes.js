import express from "express";
import {
  StripePayment,
  StripePaymentSuccess,
  StripeWebhook,
} from "../controllers/payments/stripe/stripe.controller.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const paymentRouter = express.Router();

// ✅ Create Stripe Checkout Session
paymentRouter.post("/stripe", StripePayment);

// ✅ Fetch Session Details for Success Page
paymentRouter.get("/stripe/session/:id", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id, {
      expand: ["line_items.data.price.product"], // Expand product info
    });

    res.json({
      course: {
        title: session.line_items?.data[0]?.price?.product?.name || "Unknown Course",
      },
      amount_total: session.amount_total,
      customer_email: session.customer_details?.email,
      payment_status: session.payment_status,
    });
  } catch (err) {
    console.error("❌ Error fetching Stripe session:", err);
    res.status(400).json({ error: "Failed to fetch session" });
  }
});

// ✅ Webhook (Raw body required)
paymentRouter.post(
  "/stripe/webhook",
  express.raw({ type: "application/json" }),
  StripeWebhook
);

export { paymentRouter };
