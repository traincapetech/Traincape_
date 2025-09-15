// server/model/course.js
import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
});

const SubCourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  children: [ChildSchema], // ✅ This is the correct way
});

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: String,
  subCourses: [SubCourseSchema],
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;
