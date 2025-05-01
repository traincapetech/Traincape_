import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');
  
  // Get employee ID from URL params
  const { employeeId } = useParams();
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        setLoading(true);

        // Replace with your actual API endpoint
        const response = await axios.get(
          `http://localhost:8080/employees/getEmployee/${employeeId}`
        );
        console.log("rESPOSNE IS--->",response)
        setEmployee(response.data.employee);
        setError(null);
      } catch (err) {
        setError(`Failed to fetch employee data: ${err.message}`);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) {
        console.log("EmployeeiD IS--->",employeeId)
      fetchEmployeeData();
    } else {
      setError("Employee ID not found in URL");
      setLoading(false);
    }
  }, [employeeId]);

  // Format date from ISO to readable format
  const formatDate = (isoDate) => {
    if (!isoDate) return 'N/A';
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const renderTabContent = () => {
    if (!employee) return null;
    
    switch(activeTab) {
      case 'personal':
        return (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6 mb-4 md:mb-0">
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Email:</span>
                    <a href={`mailto:${employee.email}`} className="text-blue-600 hover:underline">{employee.email}</a>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Phone:</span>
                    <span>{employee.phoneNumber || 'N/A'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">WhatsApp:</span>
                    <span>{employee.whatsappNumber || 'N/A'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">LinkedIn:</span>
                    {employee.linkedinUrl ? 
                      <a href={employee.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate max-w-xs">
                        {employee.linkedinUrl}
                      </a> : 
                      <span>N/A</span>
                    }
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Address Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600 block mb-1">Current Address:</span>
                    <p className="bg-gray-50 p-2 rounded">{employee.currentAddress || 'N/A'}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-1">Permanent Address:</span>
                    <p className="bg-gray-50 p-2 rounded">{employee.permanentAddress || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold border-b pb-2 mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-gray-600 w-32">College:</span>
                  <span>{employee.collegeName || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'work':
        return (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold border-b pb-2 mb-4">Employment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex">
                  <span className="text-gray-600 w-32">Department:</span>
                  <span className="font-medium">{employee.department || 'N/A'}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Role:</span>
                  <span className="font-medium">{employee.role || 'N/A'}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Status:</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    employee.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    employee.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {employee.status || 'N/A'}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Joining Date:</span>
                  <span>{formatDate(employee.joiningDate)}</span>
                </div>
                {employee.internshipDuration && (
                  <div className="flex">
                    <span className="text-gray-600 w-32">Internship:</span>
                    <span>{employee.internshipDuration} month{employee.internshipDuration !== '1' ? 's' : ''}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold border-b pb-2 mb-4">Record Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex">
                  <span className="text-gray-600 w-32">Created:</span>
                  <span>{formatDate(employee.createdAt)}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Updated:</span>
                  <span>{formatDate(employee.updatedAt)}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">ID:</span>
                  <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{employee._id}</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        ) : employee && (
          <>
            {/* Header with Employee Name and Basic Info */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <h1 className="text-3xl font-bold">{employee.fullName}</h1>
                <div className="flex flex-wrap items-center mt-2">
                  <span className="flex items-center mr-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    {employee.department} / {employee.role}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    employee.status === 'Active' ? 'bg-green-200 text-green-800' : 
                    employee.status === 'Inactive' ? 'bg-red-200 text-red-800' : 
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {employee.status}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button 
                    onClick={() => setActiveTab('personal')}
                    className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                      activeTab === 'personal' 
                        ? 'border-b-2 border-blue-500 text-blue-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Personal Information
                  </button>
                  <button 
                    onClick={() => setActiveTab('work')}
                    className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                      activeTab === 'work' 
                        ? 'border-b-2 border-blue-500 text-blue-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Work Information
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserPage;