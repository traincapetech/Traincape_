import Course from "../model/course.js";

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};

// Add new course
export const addCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "Error adding course", error });
  }
};

// Add sub-course to an existing course
export const addSubCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, description, price } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.subCourses.push({ name, description, price });
    await course.save();

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error adding sub-course", error });
  }
};
