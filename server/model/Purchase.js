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
      enum: ["pending", "completed", "failed"], // we map "paid" -> "completed"
      default: "pending",
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
  },
  { timestamps: true }
);

const PurchaseModel = mongoose.model("Purchase", purchaseSchema);
export default PurchaseModel;
