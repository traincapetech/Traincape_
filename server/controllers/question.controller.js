import mongoose from 'mongoose';
import { QuestionModel } from '../model/question.model.js';

// Get all courses and subtopics
const getAllCoursesAndSubtopics = async (req, res) => {
  try {
    const allCourses = await QuestionModel.find();
    const result = allCourses.map(course => ({
      name: course.name,
      subTopics: course.subTopics.map(sub => sub.name)
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching courses and subtopics:", error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

// Add a new question
const addQuestion = async (req, res) => {
  try {
    const { questionText, course, subTopic, level, options, correctAnswer } = req.body;

    let foundCourse = await QuestionModel.findOne({ name: course });
    if (!foundCourse) {
      foundCourse = new QuestionModel({ name: course, subTopics: [] });
    }

    let foundSubTopic = foundCourse.subTopics.find(sub => sub.name === subTopic);
    if (!foundSubTopic) {
      foundSubTopic = {
        name: subTopic,
        levels: { easy: [], intermediate: [], advanced: [] }
      };
      foundCourse.subTopics.push(foundSubTopic);
    }

    const newQuestion = {
      questionText,
      options,
      correctAnswer,
      _id: new mongoose.Types.ObjectId()
    };

    if (["easy", "intermediate", "advanced"].includes(level)) {
      foundSubTopic.levels[level].push(newQuestion);
    } else {
      return res.status(400).json({
        error: "Invalid level. Valid levels are easy, intermediate, and advanced."
      });
    }

    await foundCourse.save();
    res.status(201).json({ message: "Question added successfully", newQuestion });
  } catch (err) {
    console.error("Error adding question:", err);
    res.status(500).json({ error: "Error saving question", message: err.message });
  }
};

// Get questions by course, subtopic, and level
const getQuestions = async (req, res) => {
  try {
    const { course, subTopic, level } = req.query;

    if (!course || !subTopic) {
      return res.status(400).json({
        message: "course and subTopic are required query parameters."
      });
    }

    const questions = await QuestionModel.find({ name: course });

    const matchingSubTopics = [];

    questions.forEach(question => {
      const matched = question.subTopics
        .filter(sub => sub.name === subTopic)
        .flatMap(sub => sub.levels[level] || []);
      matchingSubTopics.push(...matched);
    });

    res.status(200).json(matchingSubTopics);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).send({ error: error.message });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  const { questionId } = req.params;
  try {
    const objectId = new mongoose.Types.ObjectId(questionId);

    const course = await QuestionModel.findOne({
      $or: [
        { "subTopics.levels.easy._id": objectId },
        { "subTopics.levels.intermediate._id": objectId },
        { "subTopics.levels.advanced._id": objectId }
      ]
    });

    if (!course) {
      return res.status(404).json({ error: "Question not found" });
    }

    const result = await QuestionModel.updateOne(
      { _id: course._id },
      {
        $pull: {
          "subTopics.$[].levels.easy": { _id: objectId },
          "subTopics.$[].levels.intermediate": { _id: objectId },
          "subTopics.$[].levels.advanced": { _id: objectId }
        }
      }
    );

    if (result.nModified === 0) {
      return res.status(404).json({ error: "Question not found or already deleted" });
    }

    res.status(200).json({ message: "Question deleted successfully" });
  } catch (err) {
    console.error("Error deleting question:", err);
    res.status(500).json({ error: "Error deleting question", message: err.message });
  }
};

// Update a question
const updateQuestion = async (req, res) => {
  const { questionId } = req.params;
  const { questionText, options, correctAnswer } = req.body;

  try {
    const courseDoc = await QuestionModel.findOne({
      $or: [
        { "subTopics.levels.easy._id": questionId },
        { "subTopics.levels.intermediate._id": questionId },
        { "subTopics.levels.advanced._id": questionId }
      ]
    });

    if (!courseDoc) {
      return res.status(404).json({ error: "Question not found" });
    }

    let updated = false;

    for (const subtopic of courseDoc.subTopics) {
      for (const difficulty of ["easy", "intermediate", "advanced"]) {
        const questionIndex = subtopic.levels[difficulty].findIndex(
          question => question._id.toString() === questionId
        );

        if (questionIndex !== -1) {
          subtopic.levels[difficulty][questionIndex].questionText = questionText;
          subtopic.levels[difficulty][questionIndex].options = options;
          subtopic.levels[difficulty][questionIndex].correctAnswer = correctAnswer;
          updated = true;
          break;
        }
      }
      if (updated) break;
    }

    if (!updated) {
      return res.status(404).json({ error: "Question not found in any level" });
    }

    await courseDoc.save();
    return res.status(200).json({ success: true, message: "Question updated successfully" });
  } catch (err) {
    console.error("Error updating question:", err);
    res.status(500).json({ error: "Error updating question", message: err.message });
  }
};

// Exporting all controllers
export {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
  getAllCoursesAndSubtopics
};
