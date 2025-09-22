// controllers/payments/stripe/stripe.controller.js
import Stripe from "stripe";
import PurchaseModel from "../../../model/Purchase.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//
// Create Checkout Session
//
export const StripePayment = async (req, res) => {
  try {
    const { email, courseId, userId } = req.body;

    console.log("📩 Creating Stripe checkout session for:", req.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Course Purchase",
            },
            unit_amount: 5000, // $50 (example)
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success-cart-payment?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: { courseId, userId },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ Error creating checkout session:", error.message);
    res.status(500).json({ error: error.message });
  }
};

//
// Success Endpoint (optional)
//
export const StripePaymentSuccess = async (req, res) => {
  try {
    const { session_id } = req.query;

    const session = await stripe.checkout.sessions.retrieve(session_id);

    res.json({ success: true, session });
  } catch (error) {
    console.error("❌ Error in success route:", error.message);
    res.status(400).json({ error: "Invalid session" });
  }
};

//
// Webhook (for Stripe events)
//
export const StripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("⚡ Stripe webhook event:", event.type);

  // Handle event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    await PurchaseModel.create({
      email: session.customer_email,
      courseId: session.metadata.courseId,
      userId: session.metadata.userId,
      status: "paid",
      completedAt: new Date(),
    });

    console.log("✅ Payment recorded for", session.customer_email);
  }

  res.json({ received: true });
};
