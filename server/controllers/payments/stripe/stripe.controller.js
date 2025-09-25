import Stripe from "stripe";
import PurchaseModel from "../../../model/Purchase.js";
import SubcourseModel from "../../../model/Subcourse.js";
import VoucherModel from "../../../model/Voucher.js";



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

    // First, try to fetch purchase from DB
    let purchase = await PurchaseModel.findOne({ stripeSessionId: session_id })
      .populate("subcourseId", "title"); // get course title

    if (purchase) {
      return res.json({
        success: true,
        course: { title: purchase.subcourseId?.title || "N/A" },
        amount_total: purchase.amount * 100,
        customer_email: purchase.email,
        payment_status: purchase.status,
        subcourseId: purchase.subcourseId?._id || purchase.subcourseId,
        userId: purchase.userId,
        voucher: purchase.voucherCode || null,
      });
    }

    // If not in DB yet, fallback to Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);

    return res.json({
      success: true,
      course: { title: session.metadata?.courseTitle || "N/A" },
      amount_total: session.amount_total,
      customer_email: session.customer_email,
      payment_status: session.payment_status,
      subcourseId: session.metadata?.subcourseId || null,
      userId: session.metadata?.userId || null,
      voucher: null, // will stay null until webhook saves it
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
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // ⚡ use req.body, not req.rawBody
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log("⚡ Stripe Webhook received:", event.type);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("🎯 Checkout session completed:", session.id);

    try {
      const voucher = await VoucherModel.findOneAndUpdate(
        {
          subcourseId: session.metadata.subcourseId,
          sold: false,
        },
        {
          $set: {
            sold: true,
            soldTo: session.metadata.userId,
            soldAt: new Date(),
          },
        },
        { new: true }
      );

      if (!voucher) {
        console.warn("⚠️ No available voucher found for subcourse:", session.metadata.subcourseId);
      } else {
        console.log("🎟 Voucher assigned:", voucher.code);
      }

      const purchase = await PurchaseModel.create({
        stripeSessionId: session.id,
        userId: session.metadata.userId,
        subcourseId: session.metadata.subcourseId,
        email: session.customer_email,
        amount: session.amount_total,
        status: session.payment_status,
        voucherCode: voucher ? voucher.code : null,
      });

      console.log("✅ Purchase stored in DB:", purchase._id);
    } catch (error) {
      console.error("🔥 Error processing webhook:", error.message);
    }
  }

  res.status(200).send();
};


