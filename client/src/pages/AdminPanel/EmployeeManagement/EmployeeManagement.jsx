import React, { useState } from "react";
import axios from "axios";
import {
  Plus,
  Search,
  Edit,
  Trash,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect } from "react";
import EditEmployee from "./EditEmployee";
import { useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isEditingEmployee, setIsEditingEmployee] = useState(false);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [activeSection, setActiveSection] = useState("personal");
  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    linkedinUrl: "",
    currentAddress: "",
    permanentAddress: "",
    photo: null,
    collegeName: "",
    role: "",
    department: "",
    joiningDate: "",
    internshipDuration: "",
    status: "Active",
    isWhatsAppSameAsPhone: false,
    // These fields would store file objects in a real app
    tenthMarksheet: null,
    twelfthMarksheet: null,
    bachelorsCertificate: null,
    pgCertificate: null,
    aadharCard: null,
    panCard: null,
    policeClearance: null,
    resume: null,
    offerLetter: null,
  });

  // Department options
  const departments = ["Tech", "Sales", "Marketing", "HR"];

  // Role options
  const roles = [
    "Intern",
    "Full-time Employee",
    "Part-time Employee",
    "Freelancer",
  ];

  // Status options
  const statusOptions = ["Active", "Completed", "Resigned", "Terminated"];

  // Function to fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await axios.get(
        "http://localhost:8080/employees/getEmployees"
      );
      console.log(response.data.employees);
      setEmployees(response.data.employees);
      setErrorMessage(null);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setErrorMessage("Failed to fetch employees. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmployee = async () => {
    if (!newEmployee.fullName) {
      setErrorMessage("Full Name is required.");
      return;
    } else if (!newEmployee.email) {
      setErrorMessage("Email is required.");
      return;
    } else if (!newEmployee.phoneNumber) {
      setErrorMessage("Phone Number is required.");
      return;
    } else if (!newEmployee.currentAddress) {
      setErrorMessage("Current Address is required.");
      return;
    } else if (!newEmployee.photo) {
      setErrorMessage("Photo is required.");
      return;
    } else if (!newEmployee.collegeName) {
      setErrorMessage("College Name is required.");
      return;
    } else if (!newEmployee.tenthMarksheet) {
      setErrorMessage("10th Marksheet is required.");
      return;
    } else if (!newEmployee.twelfthMarksheet) {
      setErrorMessage("12th Marksheet is required.");
      return;
    } else if (!newEmployee.aadharCard) {
      setErrorMessage("Aadhar Card is required.");
      return;
    } else if (!newEmployee.panCard) {
      setErrorMessage("PAN Card is required.");
      return;
    } else if (!newEmployee.resume) {
      setErrorMessage("Resume is required.");
      return;
    } else if (!newEmployee.role) {
      setErrorMessage("Role is required.");
      return;
    } else if (!newEmployee.department) {
      setErrorMessage("Department is required.");
      return;
    } else if (!newEmployee.joiningDate) {
      setErrorMessage("Joining Date is required.");
      return;
    } else if (!newEmployee.status) {
      setErrorMessage("Status is required.");
      return;
    } else {
      if (
        (newEmployee.role == "Full-time Employee" ||
          newEmployee.role == "Part-time Employee") &&
        !newEmployee.policeClearance
      ) {
        setErrorMessage(
          "Police Clearance Certificate is required for employees"
        );
        return;
      }
      if (newEmployee.role == "Intern" && !newEmployee.internshipDuration) {
        setErrorMessage("Internship Duration is required for interns");
        return;
      }
      try {
        const formData = new FormData();

        // Append text fields
        formData.append("fullName", newEmployee.fullName);
        formData.append("email", newEmployee.email);
        formData.append("phoneNumber", newEmployee.phoneNumber);
        formData.append("whatsappNumber", newEmployee.whatsappNumber);
        formData.append("linkedinUrl", newEmployee.linkedinUrl);
        formData.append("currentAddress", newEmployee.currentAddress);
        formData.append("permanentAddress", newEmployee.permanentAddress);
        formData.append("collegeName", newEmployee.collegeName);
        formData.append("role", newEmployee.role);
        formData.append("department", newEmployee.department);
        formData.append("joiningDate", newEmployee.joiningDate);
        formData.append("internshipDuration", newEmployee.internshipDuration);
        formData.append("status", newEmployee.status);

        // Append boolean field as string
        formData.append(
          "isWhatsAppSameAsPhone",
          String(newEmployee.isWhatsAppSameAsPhone)
        );

        // Append file fields (only if not null)
        if (newEmployee.photo) formData.append("photo", newEmployee.photo);
        if (newEmployee.tenthMarksheet)
          formData.append("tenthMarksheet", newEmployee.tenthMarksheet);
        if (newEmployee.twelfthMarksheet)
          formData.append("twelfthMarksheet", newEmployee.twelfthMarksheet);
        if (newEmployee.bachelorsCertificate)
          formData.append(
            "bachelorsCertificate",
            newEmployee.bachelorsCertificate
          );
        if (newEmployee.pgCertificate)
          formData.append("pgCertificate", newEmployee.pgCertificate);
        if (newEmployee.aadharCard)
          formData.append("aadharCard", newEmployee.aadharCard);
        if (newEmployee.panCard)
          formData.append("panCard", newEmployee.panCard);
        if (newEmployee.policeClearance)
          formData.append("policeClearance", newEmployee.policeClearance);
        if (newEmployee.resume) formData.append("resume", newEmployee.resume);
        if (newEmployee.offerLetter)
          formData.append("offerLetter", newEmployee.offerLetter);
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }
        // Post the data to the backend
        await axios.post(
          "http://localhost:8080/employees/addEmployee",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        fetchEmployees();
        alert("Employee added successfully");
      } catch (e) {
        console.error("Error adding Employee:", e);
        setErrorMessage(`Error adding Employee.${e.error}`);
      }
      // Reset form
      // setNewEmployee({
      //   fullName: "",
      //   email: "",
      //   phoneNumber: "",
      //   whatsappNumber: "",
      //   linkedinUrl: "",
      //   currentAddress: "",
      //   permanentAddress: "",
      //   photo: null,
      //   collegeName: "",
      //   role: "",
      //   department: "",
      //   joiningDate: "",
      //   internshipDuration: "",
      //   status: "Active",
      //   tenthMarksheet: null,
      //   twelfthMarksheet: null,
      //   bachelorsCertificate: null,
      //   pgCertificate: null,
      //   aadharCard: null,
      //   panCard: null,
      //   policeClearance: null,
      //   resume: null,
      //   offerLetter: null,
      //   isWhatsAppSameAsPhone: false,
      // });

      setIsAddingEmployee(false);
      setActiveSection("personal");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setNewEmployee({
        ...newEmployee,
        [name]: files[0],
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await axios.delete(
        `http://localhost:8080/employees/deleteEmployee/${id}`
      );
      alert("Employee deleted successfully");
      fetchEmployees();
      setErrorMessage(null);
    } catch (err) {
      console.error("Error deleting employee:", err);
      setErrorMessage("Failed to delete employee. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const filteredEmployees =
    employees.length > 0
      ? employees.filter(
          (emp) =>
            emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.role?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  // Fetch employees when component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow">
      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Employee Management
            </h1>
            <button
              onClick={() => setIsAddingEmployee(!isAddingEmployee)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={18} className="mr-2" />
              Add Employee
            </button>
          </div>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search employees by name, email, department or role..."
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {isAddingEmployee && (
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>

              {/* Personal Information Section */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
                  onClick={() => toggleSection("personal")}
                >
                  <span>1. Personal Information</span>
                  {activeSection === "personal" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {activeSection === "personal" && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="phoneNumber"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number (optional if same as phone)
                      </label>
                      <input
                        type="number"
                        name="whatsappNumber"
                        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                        value={
                          newEmployee.isWhatsAppSameAsPhone
                            ? newEmployee.phoneNumber
                            : newEmployee.whatsappNumber
                        }
                        onChange={handleInputChange}
                        disabled={newEmployee.isWhatsAppSameAsPhone}
                      />

                      <div className="flex items-center gap-2 mt-1">
                        <input
                          type="checkbox"
                          id="sameAsPhone"
                          checked={newEmployee.isWhatsAppSameAsPhone}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setNewEmployee((prev) => ({
                              ...prev,
                              isWhatsAppSameAsPhone: checked,
                              whatsappNumber: checked ? prev.phoneNumber : "", // set whatsapp = phone if checked
                            }));
                          }}
                        />
                        <label
                          htmlFor="sameAsPhone"
                          className="text-sm text-gray-700"
                        >
                          Same as Phone Number
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile URL (optional)
                      </label>
                      <input
                        type="url"
                        name="linkedinUrl"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.linkedinUrl}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="currentAddress"
                        rows="2"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.currentAddress}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Permanent Address (optional)
                      </label>
                      <textarea
                        name="permanentAddress"
                        rows="2"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.permanentAddress}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Photograph (passport size){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Educational Details Section */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
                  onClick={() => toggleSection("education")}
                >
                  <span>2. Educational Details</span>
                  {activeSection === "education" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {activeSection === "education" && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College/University Name (required for interns/freshers)
                      </label>
                      <input
                        type="text"
                        name="collegeName"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.collegeName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        10th Standard Marksheet{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="tenthMarksheet"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        12th Standard Marksheet{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="twelfthMarksheet"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bachelor's Degree Certificate (if applicable)
                      </label>
                      <input
                        type="file"
                        name="bachelorsCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postgraduate Degree Certificate (if applicable)
                      </label>
                      <input
                        type="file"
                        name="pgCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Identity & Verification Documents Section */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
                  onClick={() => toggleSection("identity")}
                >
                  <span>3. Identity & Verification Documents</span>
                  {activeSection === "identity" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {activeSection === "identity" && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Aadhar Card <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="aadharCard"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        PAN Card <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="panCard"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Police Clearance Certificate (PCC) (required for
                        employees)
                      </label>
                      <input
                        type="file"
                        name="policeClearance"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Employment Specific Fields Section */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-3 bg-gray-100 text-left font-medium"
                  onClick={() => toggleSection("employment")}
                >
                  <span>4. Employment Specific Fields</span>
                  {activeSection === "employment" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {activeSection === "employment" && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role / Designation{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="role"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.role}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="department"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.department}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Joining Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="joiningDate"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.joiningDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {newEmployee.role === "Intern" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Internship Duration (Months){" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="12"
                          name="internshipDuration"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          value={newEmployee.internshipDuration}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="status"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={newEmployee.status}
                        onChange={handleInputChange}
                        required
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Offer Letter Copy (if applicable)
                      </label>
                      <input
                        type="file"
                        name="offerLetter"
                        accept=".pdf,.doc,.docx"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end space-x-2">
                <button
                  onClick={() => {
                    setIsAddingEmployee(false);
                    setErrorMessage(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddEmployee}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Employee
                </button>
              </div>
            </div>
          )}
          {errorMessage && (
            <p className="text-center my-5 text-red-500">{errorMessage}</p>
          )}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joining Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                            {employee.photo ? (
                              <img
                                src="/api/placeholder/40/40"
                                alt={employee.fullName}
                                className="h-10 w-10 rounded-full"
                              />
                            ) : (
                              <User size={20} className="text-gray-500" />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {employee.fullName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {employee.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.phoneNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.joiningDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : employee.status === "Completed"
                          ? "bg-blue-100 text-blue-800"
                          : employee.status === "Resigned"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            onClick={() => {
                              setIsEditingEmployee(true);
                              setEditingEmployeeId(employee._id);
                            }}
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleDelete(employee._id)}
                          >
                            <Trash size={18} />
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/admin-panel/${employee._id}`)
                            }
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <User size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {isEditingEmployee && (
            <div>
              <EditEmployee
                employeeId={editingEmployeeId}
                onClose={() => {
                  setIsEditingEmployee(false);
                  setEditingEmployeeId(null);
                  fetchEmployees();
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;
