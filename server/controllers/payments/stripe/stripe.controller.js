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
      mode: "payment",
      customer_email: email,
      payment_method_types: ["card"],
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

    console.log("🛒 Stripe checkout session created:", session.id);

    res.json({ id: session.id });
  } catch (error) {
    console.error("❌ StripePayment error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// =============================
// Success Route
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
  console.log("⚡ Stripe Webhook handler called!");

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // ✅ IMPORTANT: use raw body middleware for stripe
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log("📦 Event received:", event.type);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      console.log("✅ Checkout session completed:", session.id);
      console.log("👤 Customer:", session.customer_email);
      console.log("🎯 Metadata:", session.metadata);
      console.log("💳 Payment Status from Stripe:", session.payment_status);

      try {
        const mappedStatus =
          session.payment_status === "paid" ? "completed" : session.payment_status;

        const purchaseData = {
          userId: session.metadata.userId,
          subcourseId: session.metadata.subcourseId,
          email: session.customer_email,
          amount: session.amount_total / 100,
          status: mappedStatus,
          stripeSessionId: session.id,
          stripePaymentIntent: session.payment_intent,
          completedAt: mappedStatus === "completed" ? new Date() : null,
        };

        console.log("📝 Purchase data being saved:", purchaseData);

        // ✅ Idempotent save (insert once, update if retried)
        const purchase = await PurchaseModel.findOneAndUpdate(
          { stripeSessionId: session.id }, // match unique session
          { $set: purchaseData },
          { new: true, upsert: true }
        );

        console.log("💾 Purchase saved/updated successfully:", purchase._id);
      } catch (dbErr) {
        console.error("❌ Failed to save purchase:", dbErr);
      }
      break;
    }

    case "payment_intent.succeeded": {
      const pi = event.data.object;
      console.log("💰 PaymentIntent succeeded:", pi.id);
      break;
    }

    default:
      console.log(`ℹ️ Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
};
