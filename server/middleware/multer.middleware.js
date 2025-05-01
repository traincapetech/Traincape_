import multer from "multer";
import path from "path";

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Check if the 'uploads' folder exists. If not, log an error and create the folder.
    const fs = require("fs");
    const dir = "uploads/";

    if (!fs.existsSync(dir)) {
      console.log("Uploads folder does not exist. Creating folder...");
      fs.mkdirSync(dir);
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    // Log the file details for debugging
    console.log("File received:", file);

    // Generate a unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Initialize multer with storage options
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit file size to 10MB (adjust as needed)
  },
  fileFilter: function (req, file, cb) {
    // Log the file type for debugging
    console.log("Checking file type:", file.mimetype);

    // Restrict file types (example: allow only images and PDF files)
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Accept file
    } else {
      console.error("Unsupported file type:", file.mimetype);
      cb(new Error("Unsupported file type"), false); // Reject file
    }
  },
});

// Define the file fields (the keys must match the names sent from the frontend)
const uploadFiles = upload.fields([
  { name: "photo" },
  { name: "tenthMarksheet" },
  { name: "twelfthMarksheet" },
  { name: "bachelorsCertificate" },
  { name: "pgCertificate" },
  { name: "aadharCard" },
  { name: "panCard" },
  { name: "policeClearance" },
  { name: "resume" },
  { name: "offerLetter" },
]);

// Middleware for uploading files with error handling
const handleUploadFiles = (req, res, next) => {
  console.log("Incoming request for file upload");

  uploadFiles(req, res, function (err) {
    if (err) {
      // Log the error and return a response to the client
      if (err instanceof multer.MulterError) {
        // Multer-specific errors (e.g., file size exceeded)
        console.error("Multer error:", err.message);
        return res.status(400).json({ success: false, message: err.message });
      } else if (err) {
        // Other errors (e.g., unsupported file type)
        console.error("General error:", err.message);
        return res.status(400).json({ success: false, message: err.message });
      }
    }

    // Continue to the next middleware/controller
    console.log("Files uploaded successfully");
    next();
  });
};

export default handleUploadFiles;
