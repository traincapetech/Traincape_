import express from "express";

import {
  addEmployee,
  getEmployees,
  deleteEmployee,
  getDatabyEmployeeId,
  updateEmployee,
} from "../controllers/Employee.controller.js";
import uploadFiles  from "../middleware/multer.middleware.js";

const employeeRouter = express.Router();

// Route definitions
employeeRouter.get("/getEmployees", getEmployees);

employeeRouter.post(
  "/addEmployee",
  //  uploadFiles,
  addEmployee
);

employeeRouter.delete("/deleteEmployee/:employeeId", deleteEmployee);
employeeRouter.put("/updateEmployee/:employeeId", updateEmployee);
employeeRouter.get("/getEmployee/:employeeId", getDatabyEmployeeId);

export { employeeRouter };
