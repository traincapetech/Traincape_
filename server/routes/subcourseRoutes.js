import express from "express";
import {
  getSubcoursesByCourse,
  createSubcourse,
  getSubcourseBySlug,
} from "../controllers/subcourseController.js";

const router = express.Router();

// Order matters — keep /slug first so it doesn't clash with :courseId
router.get("/slug/:slug", getSubcourseBySlug);
router.get("/slug/:slug", getSubcourseBySlug);
router.get("/:courseId", getSubcoursesByCourse);
router.post("/", createSubcourse);
router.get("/:courseId", getSubcoursesByCourse);
router.post("/", createSubcourse);
router.get("/:courseId/:slug", getSubcourseBySlug);

export default router;
