import mongoose from "mongoose";

const subcourseSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    title: { type: String, required: true },
    duration: String,
    price: String,
    details: String, // Long description if needed
  },
  { timestamps: true }
);

const Subcourse = mongoose.model("Subcourse", subcourseSchema);
export default Subcourse;
