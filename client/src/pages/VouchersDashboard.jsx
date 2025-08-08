import React, { useState, useEffect } from "react";
import { BarChart3, Package, Users, TrendingUp, Eye, Download } from 'lucide-react';
// import { BookOpen } from 'react-icons/fe'; // Feather icons


const VouchersDashboard = () => {
  const [voucherSummary, setVoucherSummary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalStats, setTotalStats] = useState({
    totalCourses: 0,
    totalSubcourses: 0,
    totalVouchers: 0,
    usedVouchers: 0
  });

  useEffect(() => {
    fetchVoucherSummary();
  }, []);

  const fetchVoucherSummary = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/vouchers/summary");
      if (response.ok) {
        const data = await response.json();
        setVoucherSummary(data);
        
        // Calculate total stats
        const stats = data.reduce((acc, item) => {
          acc.totalVouchers += item.total;
          acc.usedVouchers += item.issued;
          return acc;
        }, { totalVouchers: 0, usedVouchers: 0 });
        
        const uniqueCourses = [...new Set(data.map(item => item.courseName))];
        stats.totalCourses = uniqueCourses.length;
        stats.totalSubcourses = data.length;
        
        setTotalStats(stats);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to fetch voucher summary");
      }
    } catch (err) {
      setError("Network error: " + err.message);
      console.error("Fetch voucher summary error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getUsagePercentage = (used, total) => {
    return total > 0 ? Math.round((used / total) * 100) : 0;
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 80) return "text-red-600 bg-red-100";
    if (percentage >= 50) return "text-yellow-600 bg-yellow-100";
    return "text-green-600 bg-green-100";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vouchers Dashboard</h1>
          <p className="text-gray-600">Monitor and manage voucher distribution across all courses</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              {/* <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <BookOpen className="h-6 w-6" />
              </div> */}
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.totalCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Package className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Subcourses</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.totalSubcourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Vouchers</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.totalVouchers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Used Vouchers</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.usedVouchers}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Vouchers Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Voucher Overview</h2>
              <button
                onClick={fetchVoucherSummary}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Eye className="h-4 w-4 mr-2" />
                Refresh
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subcourse
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Vouchers
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Used
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remaining
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usage %
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {voucherSummary.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      No voucher data available
                    </td>
                  </tr>
                ) : (
                  voucherSummary.map((item, index) => {
                    const usagePercentage = getUsagePercentage(item.issued, item.total);
                    const statusColor = getStatusColor(usagePercentage);
                    
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.courseName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.subcourseName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.issued}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.remaining}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {usagePercentage}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
                            {usagePercentage >= 80 ? 'Low Stock' : usagePercentage >= 50 ? 'Medium' : 'Good'}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              <Package className="h-4 w-4 mr-2" />
              Add New Vouchers
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              <Users className="h-4 w-4 mr-2" />
              Issue Voucher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VouchersDashboard;
