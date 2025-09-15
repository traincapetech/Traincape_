import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    price: { type: Number, default: 0 }, // ✅ make price numeric
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
