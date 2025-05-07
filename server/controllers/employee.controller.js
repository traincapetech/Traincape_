// question.controller.js
import EmployeeModel from "../model/employee.model.js";
import mongoose from "mongoose";
import { uploadToDrive } from "../utils/googleDriveService.js";

export const addEmployee = async (req, res) => {
  console.log("REQUESTED BODY IS--->", req.body);
  console.log("REQUESTED FILES IS--->", req.files);
  try {
    const {
      email,
      fullName,
      phoneNumber,
      whatsappNumber,
      linkedinUrl,
      currentAddress,
      permanentAddress,
      collegeName,
      role,
      joiningDate,
      department,
      status,
      internshipDuration,
    } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Full name and email are required fields",
      });
    }

    const driveFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!driveFolderId) {
      throw new Error(
        "Google Drive folder ID not configured in environment variables"
      );
    }

    console.log(`Using Google Drive folder ID: ${driveFolderId}`);

    // Your files are stored in an array of objects, each with a fieldname property
    // Upload files to Google Drive and store URLs
    const fileUrls = {};
    const uploadPromises = [];

    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      console.log(`Processing ${req.files.length} files from request`);

      // Process each file in the array
      for (const file of req.files) {
        const fieldname = file.fieldname;
        console.log(
          `Processing file for ${fieldname}: ${file.originalname} (${file.size} bytes)`
        );

        try {
          // Create a promise for each upload
          const uploadPromise = uploadToDrive(file, driveFolderId)
            .then((url) => {
              console.log(
                `✅ Successfully uploaded ${fieldname} to Drive, URL: ${url}`
              );
              fileUrls[fieldname] = url;

              // Clean up the temporary file after upload
              return fs.promises.unlink(file.path).catch((err) => {
                console.warn(
                  `Failed to delete temporary file ${file.path}:`,
                  err
                );
              });
            })
            .catch((error) => {
              console.error(`❌ Error uploading ${fieldname} to Drive:`, error);
              return null;
            });

          uploadPromises.push(uploadPromise);
        } catch (error) {
          console.error(`Failed to process ${fieldname} file:`, error);
        }
      }
    } else {
      console.log("No files found in the request");
    }

    // Wait for all uploads to complete
    if (uploadPromises.length > 0) {
      console.log(
        `Waiting for ${uploadPromises.length} file uploads to complete...`
      );
      const results = await Promise.allSettled(uploadPromises);
      console.log(
        `Upload results: ${
          results.filter((r) => r.status === "fulfilled").length
        } succeeded, ${
          results.filter((r) => r.status === "rejected").length
        } failed`
      );
      console.log("Successfully uploaded file URLs:", Object.keys(fileUrls));
    } else {
      console.log("No files to upload");
    }

    // Create a new employee in the database
    const employeeData = {
      fullName,
      email,
      phoneNumber: phoneNumber || "",
      whatsappNumber: whatsappNumber || "",
      linkedinUrl: linkedinUrl || "",
      currentAddress: currentAddress || "",
      permanentAddress: permanentAddress || "",
      collegeName: collegeName || "",
      role: role || "Intern",
      joiningDate: joiningDate || new Date().toISOString(),
      department: department || "",
      status: status || "Active",
      internshipDuration: internshipDuration || "",
    };

    // Add file URLs to employee data
    for (const field in fileUrls) {
      if (fileUrls[field]) {
        employeeData[field] = fileUrls[field];
      }
    }

    console.log(
      "Creating employee with data:",
      JSON.stringify(employeeData, null, 2)
    );

    const newEmployee = new EmployeeModel(employeeData);

    // Save the employee to the database
    const savedEmployee = await newEmployee.save();
    console.log("Employee saved successfully with ID:", savedEmployee._id);

    res.status(201).json({
      success: true,
      message: "Employee added successfully",
      data: savedEmployee,
    });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add employee",
      error: error.message,
    });
  }
};

export const getEmployees = async (req, res) => {
  try {
    // If using Mongoose with MongoDB
    const employees = await EmployeeModel.find({})
      .sort({ createdAt: -1 }) // Sort by newest first
      .select("-__v"); // Exclude the version field

    // Return the employees as JSON
    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    console.error("Error fetching Employees:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
export const getDatabyEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;
    console.log(employeeId);
    // If using Mongoose with MongoDB
    const employee = await EmployeeModel.findById(employeeId).select("-__v"); // Exclude the version field

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    console.error("Error fetching Employee:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  const { employeeId } = req.params;

  try {
    console.log("Employee Id is-----:>", employeeId);

    // Find the employee and delete it
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(employeeId);

    // Check if employee exists
    if (!deletedEmployee) {
      return res.status(404).json({
        success: false,
        error: "Employee not found",
      });
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
      data: deletedEmployee,
    });
  } catch (err) {
    console.error("Error deleting employee:", err);
    res.status(500).json({
      success: false,
      error: "Error deleting employee",
      message: err.message,
    });
  }
};

export const updateEmployee = async (req, res) => {
  // console.log("REQESTED BODY IS--->", req.body);
  console.log("REQESTED PARAM IS--->", req.params);

  const { employeeId } = req.params;
  let employeeData = { ...req.body };

  // Remove fields that shouldn't be updated
  delete employeeData._id;
  delete employeeData.createdAt;
  delete employeeData.updatedAt;

  console.log("employee data after deleting is->", employeeData);
  try {
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      employeeId, // ID to find
      { $set: employeeData }, // Fields to update
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
    });
  } catch (err) {
    console.error("Error updating employee:", err);
    return res.status(500).json({
      success: false,
      message: "Error updating employee",
      error: err.message,
    });
  }
};
