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
// Order matters — keep /slug first so it doesn't clash with :courseId
// router.get("/slug/:slug", getSubcourseBySlug);
router.post("/", createSubcourse);
router.get("/:courseId", getSubcoursesByCourse);
router.get("/:courseId/:slug", getSubcourseBySlug);

export default router;
