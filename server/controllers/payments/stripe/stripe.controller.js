import Stripe from "stripe";
import PurchaseModel from "../../../model/Purchase.js";
import SubcourseModel from "../../../model/Subcourse.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-04-30.basil",
});

// =============================
// Create Checkout Session
// =============================
export const StripePayment = async (req, res) => {
  try {
    const { subcourseId } = req.body;
    const userId = req.user?.userId;
    const email = req.user?.email; // comes from token

    if (!subcourseId || !userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const subcourse = await SubcourseModel.findById(subcourseId);
    if (!subcourse) {
      return res.status(404).json({ error: "Subcourse not found" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: subcourse.title },
            unit_amount: subcourse.price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success-cart-payment?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel-stripe-payment`,
      metadata: {
        subcourseId: subcourse._id.toString(),
        userId: userId.toString(),
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ StripePayment error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// =============================
// Success Endpoint
// =============================
export const StripePaymentSuccess = async (req, res) => {
  try {
    const { session_id } = req.query;
    console.log("📡 Success route hit. Session ID:", session_id);

    if (!session_id) {
      return res.status(400).json({ error: "Missing session_id" });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    res.json({
      success: true,
      sessionId: session.id,
      customer_email: session.customer_email,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      subcourseId: session.metadata?.subcourseId || null,
      userId: session.metadata?.userId || null,
    });
  } catch (error) {
    console.error("❌ Error in success route:", error.message);
    res.status(400).json({ error: "Invalid session" });
  }
};

// =============================
// Webhook
// =============================
export const StripeWebhook = async (req, res) => {
  console.log("⚡ Stripe Webhook hit!");
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log("✅ Webhook signature verified:", event.type);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const session = event.data?.object;

  if (event.type === "checkout.session.completed") {
    console.log("⚡ checkout.session.completed fired!");
    try {
      const purchase = await PurchaseModel.create({
        email: session.customer_email,
        subcourseId: session.metadata?.subcourseId || null,
        userId: session.metadata?.userId || null,
        amount: session.amount_total / 100,
        status: session.payment_status === "paid" ? "completed" : "pending",
        completedAt: new Date(),
        stripeSessionId: session.id,
        stripePaymentIntent: session.payment_intent,
      });

      console.log("✅ Purchase saved in MongoDB:", purchase);
    } catch (err) {
      console.error("❌ Failed to save purchase:", err.message);
    }
  }

  res.json({ received: true });
};
