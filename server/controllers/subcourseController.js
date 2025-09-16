import Subcourse from "../model/Subcourse.js";
import slugify from "slugify";

// ✅ Get all subcourses for a specific course
export const getSubcoursesByCourse = async (req, res) => {
  try {
    const subcourses = await Subcourse.find({ courseId: req.params.courseId });
    res.status(200).json(subcourses);
  } catch (error) {
    console.error("❌ Error fetching subcourses:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Create a new subcourse
export const createSubcourse = async (req, res) => {
   try {
    console.log("📩 Incoming subcourse data:", req.body); // ✅ Debug log

    const { title, description, price, image, courseId, uiComponent } = req.body;
    console.log("🎯 uiComponent received:", uiComponent); // ✅ Debug log

    // Validate request fields
    if (!title || !description || !price || !courseId) {
      return res.status(400).json({
        message:
          "Missing required fields: title, description, price, and courseId are required",
      });
    }

    // Generate slug
    const slug = slugify(title, { lower: true });

    // Check for duplicate slug
    const existing = await Subcourse.findOne({ slug });
    if (existing) {
      return res.status(409).json({
        message: "Subcourse with this title already exists",
      });
    }

    const newSubcourse = await Subcourse.create({
      title,
      description,
      price,
      image: image || "",
      courseId,
      slug,
      uiComponent,
    });

    res.status(201).json(newSubcourse);
  } catch (error) {
    console.error("❌ Subcourse creation failed:", error);
    res.status(400).json({
      message: "Failed to create subcourse",
      error: error.message,
    });
  }
};

// ✅ Get single subcourse by slug
export const getSubcourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    console.log("🔎 Fetching subcourse for slug:", slug);

    if (!slug) {
      return res.status(400).json({ message: "Slug is required" });
    }

    // ✅ Use correct model name here
    const subcourse = await Subcourse.findOne({ slug });

    if (!subcourse) {
      console.log("❌ Subcourse not found in DB for slug:", slug);
      return res.status(404).json({ message: "Subcourse not found" });
    }

    console.log("✅ Subcourse found:", subcourse.title);
    res.status(200).json(subcourse);
  } catch (error) {
    console.error("🚨 Error fetching subcourse by slug:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
