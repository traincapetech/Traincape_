import Course from "../model/Course.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// export const createCourse = async (req, res) => {
//   try {
//     const newCourse = await Course.create(req.body);
//     res.status(201).json(newCourse);
//   } catch (error) {
//     res.status(400).json({ message: "Failed to create course", error });
//   }
// };


export const createCourse = async (req, res) => {
  try {
    console.log("📩 Received body:", req.body); // 👈 add this
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: "Failed to create course", error });
  }
};
