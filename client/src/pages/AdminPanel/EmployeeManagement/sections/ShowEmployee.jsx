// src/components/EmployeeTable.jsx
import { Edit, Trash, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EmployeeTable = ({
  employees,
  onEdit,
  onDelete,
  filteredEmployees,
  setIsEditingEmployee,
  setEditingEmployeeId,
}) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    setIsEditingEmployee(true);
    setEditingEmployeeId(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Employee",
              "Contact",
              "Role",
              "Department",
              "Joining Date",
              "Status",
              "Actions",
            ].map((title) => (
              <th
                key={title}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {title}
              </th>
            ))}
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
                          src={`data:${
                            employee.photo.contentType
                          };base64,${btoa(
                            Array.from(
                              new Uint8Array(employee.photo.data.data)
                            )
                              .map((byte) => String.fromCharCode(byte))
                              .join("")
                          )}`}
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
                  <div className="text-sm text-gray-900">{employee.email}</div>
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
                      onClick={() => handleEdit(employee._id)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => onDelete(employee._id)}
                    >
                      <Trash size={18} />
                    </button>
                    <button
                      onClick={() => navigate(`/admin-panel/${employee._id}`)}
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
  );
};

