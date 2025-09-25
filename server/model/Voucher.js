import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    subcourseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcourse",
      required: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    soldTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    soldAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// ✅ This makes sure `code` is unique **per subcourse**
voucherSchema.index({ subcourseId: 1, code: 1 }, { unique: true });

export default mongoose.model("Voucher", voucherSchema);
