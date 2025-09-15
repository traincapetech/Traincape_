import Subcourse from "../models/Subcourse.js";

export const getSubcoursesByCourse = async (req, res) => {
  try {
    const subcourses = await Subcourse.find({ courseId: req.params.courseId });
    res.json(subcourses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const createSubcourse = async (req, res) => {
  try {
    const subcourse = await Subcourse.create(req.body);
    res.status(201).json(subcourse);
  } catch (error) {
    res.status(400).json({ message: "Failed to create subcourse", error });
  }
};
