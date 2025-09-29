import Subcourse from "../model/Subcourse.js";
import slugify from "slugify";
import { uploadToDrive } from "../utils/googleDrive.js";

// Replace with your Drive folder ID ("Course images" folder)
const DRIVE_FOLDER_ID = "YOUR_FOLDER_ID_HERE";

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

// ✅ Create a new subcourse (with optional image upload)
export const createSubcourse = async (req, res) => {
  try {
    const { title, description, price, courseId, uiComponent, category, tagline } = req.body;

    if (!title || !description || !price || !courseId || !category) {
      return res.status(400).json({
        message:
          "Missing required fields: title, description, price, courseId, and category are required",
      });
    }

    const slug = slugify(title, { lower: true });

    const existing = await Subcourse.findOne({ slug });
    if (existing) {
      return res.status(409).json({
        message: "Subcourse with this title already exists",
      });
    }

    let imageUrl = "";
    if (req.file) {
      // Upload to Drive
      imageUrl = await uploadToDrive(
        req.file.path,
        req.file.originalname,
        DRIVE_FOLDER_ID,
        req.file.mimetype
      );
    }

    const newSubcourse = await Subcourse.create({
      title,
      description,
      price,
      image: imageUrl,
      courseId,
      slug,
      uiComponent,
      category,
      tagline,
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

    if (!slug) {
      return res.status(400).json({ message: "Slug is required" });
    }

    const subcourse = await Subcourse.findOne({ slug });

    if (!subcourse) {
      return res.status(404).json({ message: "Subcourse not found" });
    }

    res.status(200).json(subcourse);
  } catch (error) {
    console.error("🚨 Error fetching subcourse by slug:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
