import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // allow guest checkout
    },
    email: {
      type: String,
      required: true,
    },
    subcourseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcourse",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
      set: (val) => {
        // 🔄 Map Stripe "paid" → "completed"
        if (val === "paid") return "completed";
        if (val === "unpaid") return "failed"; // optional safeguard
        return val || "pending";
      },
    },
    stripeSessionId: {
      type: String,
      required: true,
      unique: true,
    },
    stripePaymentIntent: {
      type: String,
    },
    completedAt: {
      type: Date,
    },
    voucherCode: {
      type: String, // assigned voucher code
    },
  },
  { timestamps: true }
);

const PurchaseModel = mongoose.model("Purchase", purchaseSchema);
export default PurchaseModel;
