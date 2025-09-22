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
      required: true, // always store email
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: false, // allow purchases that may not be tied yet
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    stripeSessionId: {
      type: String,
      required: true,
      unique: true, // prevent duplicate entries
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
