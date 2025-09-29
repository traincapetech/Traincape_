import express from "express";
import multer from "multer";
import {
  getSubcoursesByCourse,
  createSubcourse,
  getSubcourseBySlug,
} from "../controllers/subcourseController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temporary upload folder

// ✅ Order matters
router.get("/slug/:slug", getSubcourseBySlug);
router.get("/:courseId", getSubcoursesByCourse);
router.post("/", upload.single("image"), createSubcourse);

export default router;
