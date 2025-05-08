import { useState, useEffect } from "react";
import { X, Save, CheckCircle } from "lucide-react";
import axios from "axios";

export default function EditEmployee({ employeeId, onClose }) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
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
    tenthMarksheet: null,
    twelfthMarksheet: null,
    bachelorsCertificate: null,
    pgCertificate: null,
    aadharCard: null,
    panCard: null,
    policeClearance: null,
    resume: null,
    offerLetter: null,
    isWhatsAppSameAsPhone: false,
  });

  // Simulate fetching employee data
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // Simulate API call delay
      const response = await axios.get(
        `http://localhost:8080/employees/getEmployee/${employeeId}`
      );
      console.log("Data from backend is--->", response.data);
      setFormData(response.data.data);
      setLoading(false);
    };

    fetchData();
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => {
      if (type === "file") {
        return {
          ...prev,
          [name]: files[0] || null,
        };
      }

      if (type === "checkbox") {
        if (name === "isWhatsAppSameAsPhone") {
          return {
            ...prev,
            [name]: checked,
            whatsappNumber: checked ? prev.phoneNumber : prev.whatsappNumber,
          };
        } else {
          return {
            ...prev,
            [name]: checked,
          };
        }
      }

      if (name === "phoneNumber") {
        return {
          ...prev,
          [name]: value,
          whatsappNumber: prev.isWhatsAppSameAsPhone
            ? value
            : prev.whatsappNumber,
        };
      }

      // ✅ Allow whatsappNumber to be updated if it's being edited directly
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    console.log("Saving employee data:", formData);
    return;
    try {
      const response = await axios.put(
        `http://localhost:8080/employees/updateEmployee/${employeeId}`,
        formData // Missing data parameter for what needs to be updated
      );

      onClose();
    } catch (error) {
      console.error("Error saving employee data:", error);
      setSaving(false);
    }
  };

  // Helper function to create file input fields
  const FileInput = ({ id, name, label }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="file"
        id={id}
        name={name}
        onChange={handleChange}
        className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-medium
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100"
      />
      {formData[name] && (
        <div className="mt-1 flex items-center text-sm text-green-600">
          <CheckCircle size={16} className="mr-1" />
          File selected
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Edit Employee</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="py-8 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }
  console.log("Formadata is", formData);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg my-8">
        <div className="flex justify-between items-center mt-10 mb-2">
          <h2 className="text-xl font-bold">Edit Employee</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto max-h-screen pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information Section */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Personal Information
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="whatsappNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  WhatsApp Number
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isWhatsAppSameAsPhone"
                    name="isWhatsAppSameAsPhone"
                    checked={formData.isWhatsAppSameAsPhone}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="isWhatsAppSameAsPhone"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Same as phone
                  </label>
                </div>
              </div>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                disabled={formData.isWhatsAppSameAsPhone}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:text-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="linkedinUrl"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn URL
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleChange}
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
              {formData.photo && (
                <div>
                  <div className="mt-1 flex items-center text-sm text-green-600">
                    <CheckCircle size={16} className="mr-1" />
                    Photo selected
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="currentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Current Address
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                rows={2}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Permanent Address
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                rows={2}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Employment Information */}
            <div className="md:col-span-2 mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Employment Information
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
            </div>

            <div>
              <label
                htmlFor="collegeName"
                className="block text-sm font-medium text-gray-700"
              >
                College Name
              </label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Role</option>
                <option value="Intern">Intern</option>
                <option value="Full-time Employee">Full-time Employee</option>
                <option value="Part-time Employee">Part-time Employee</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Department</option>
                <option value="Tech">Tech</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="joiningDate"
                className="block text-sm font-medium text-gray-700"
              >
                Joining Date
              </label>
              <input
                type="date"
                id="joiningDate"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {formData.role === "Intern" && (
              <div>
                <label
                  htmlFor="internshipDuration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Internship Duration
                </label>
                <input
                  type="text"
                  id="internshipDuration"
                  name="internshipDuration"
                  value={formData.internshipDuration}
                  onChange={handleChange}
                  placeholder="e.g. 3 months"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Completed</option>
                <option value="On Leave">Resigned</option>
                <option value="Terminated">Terminated</option>
              </select>
            </div>

            {/* Documents Section */}
            <div className="md:col-span-2 mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Documents
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
            </div>

            <FileInput
              id="tenthMarksheet"
              name="tenthMarksheet"
              label="10th Marksheet"
            />
            <FileInput
              id="twelfthMarksheet"
              name="twelfthMarksheet"
              label="12th Marksheet"
            />
            <FileInput
              id="bachelorsCertificate"
              name="bachelorsCertificate"
              label="Bachelor's Certificate"
            />
            <FileInput
              id="pgCertificate"
              name="pgCertificate"
              label="PG Certificate"
            />
            <FileInput id="aadharCard" name="aadharCard" label="Aadhar Card" />
            <FileInput id="panCard" name="panCard" label="PAN Card" />
            <FileInput
              id="policeClearance"
              name="policeClearance"
              label="Police Clearance"
            />
            <FileInput id="resume" name="resume" label="Resume" />
            <FileInput
              id="offerLetter"
              name="offerLetter"
              label="Offer Letter"
            />
          </div>

          <div className="mt-8 flex justify-end">
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
