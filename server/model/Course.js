import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    price: String,
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
