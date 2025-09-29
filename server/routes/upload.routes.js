import express from "express";
import multer from "multer";
import { uploadToDrive } from "../utils/googleDrive.js";
import Subcourse from "../models/Subcourse.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temp storage

// POST /api/upload/:subcourseId
router.post("/:subcourseId", upload.single("image"), async (req, res) => {
  try {
    const { subcourseId } = req.params;
    const file = req.file;

    // Upload to Google Drive
    const driveFile = await uploadToDrive(
      file.path,
      file.originalname,
      file.mimetype
    );

    // Save link in MongoDB
    const subcourse = await Subcourse.findByIdAndUpdate(
      subcourseId,
      { image: driveFile.link },
      { new: true }
    );

    res.json({ success: true, subcourse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
});

export default router;
