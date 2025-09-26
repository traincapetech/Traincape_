import mongoose from "mongoose";

const subcourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    image: {
      type: String,
      default: "",
      trim: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "courseId is required"],
    },
    uiComponent: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      required: true,  // ✅ now every subcourse must have a category
      trim: true,
    },
  },
  { timestamps: true }
);

const Subcourse = mongoose.model("Subcourse", subcourseSchema);
export default Subcourse;
