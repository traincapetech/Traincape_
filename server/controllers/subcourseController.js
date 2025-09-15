import Subcourse from "../model/Subcourse.js";
import slugify from "slugify";

// ✅ Get all subcourses for a specific course
export const getSubcoursesByCourse = async (req, res) => {
  try {
    const subcourses = await Subcourse.find({ courseId: req.params.courseId });
    res.json(subcourses);
  } catch (error) {
    console.error("❌ Error fetching subcourses:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Create a new subcourse
export const createSubcourse = async (req, res) => {
  try {
    const { title, description, price, image, courseId } = req.body;

    // Validate request
    if (!title || !description || !price || !courseId) {
      return res.status(400).json({
        message: "Missing required fields: title, description, price, courseId are required",
      });
    }

    const newSubcourse = new Subcourse({
      title,
      description,
      price,
      image: image || "",
      courseId,
      slug: slugify(title, { lower: true }),
    });

    await newSubcourse.save();
    res.status(201).json(newSubcourse);
  } catch (error) {
    console.error("❌ Subcourse creation failed:", error);
    res.status(400).json({ message: "Failed to create subcourse", error: error.message });
  }
};

// ✅ Get single subcourse by slug
export const getSubcourseBySlug = async (req, res) => {
  try {
    const subcourse = await Subcourse.findOne({ slug: req.params.slug });
    if (!subcourse) {
      return res.status(404).json({ message: "Subcourse not found" });
    }
    res.json(subcourse);
  } catch (error) {
    console.error("❌ Error fetching subcourse:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
