import express from "express";
import { getCourses, addCourse, addSubCourse } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses);          // GET /courses
router.post("/", addCourse);          // POST /courses
router.post("/:courseId/subcourses", addSubCourse); // POST /courses/:courseId/subcourses

export default router;
