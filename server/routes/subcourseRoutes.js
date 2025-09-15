import express from "express";
import { getSubcoursesByCourse, createSubcourse } from "../controllers/subcourseController.js";

const router = express.Router();

router.get("/:courseId", getSubcoursesByCourse);
router.post("/", createSubcourse);

export default router;
