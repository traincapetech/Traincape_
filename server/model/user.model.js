import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    country: { type: String, required: true },
    linkedIn: { type: String },
    interest: { type: String, required: true },

    // Relations (instead of storing transactions inline)
    testHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Result" }],
    purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Purchase" }],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
