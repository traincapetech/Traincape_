import React from 'react';
import { FaDownload, FaFilePdf, FaEye, FaInfoCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { getPecbBrochurePath, hasPecbBrochure } from '../data/pecbBrochures';

const PecbBrochureSection = ({ courseName, className = "" }) => {
  const brochurePath = getPecbBrochurePath(courseName);
  const hasBrochure = hasPecbBrochure(courseName);

  // Debug logging
  console.log('PecbBrochureSection Debug:', {
    courseName,
    brochurePath,
    hasBrochure
  });

  const handleDownload = () => {
    if (brochurePath) {
      console.log('Downloading:', brochurePath);
      try {
        const link = document.createElement('a');
        link.href = brochurePath;
        link.download = `${courseName}-Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Download failed:', error);
        // Fallback: redirect to PECB website
        window.open('https://pecb.com/en/brochures', '_blank');
      }
    }
  };

  const handleView = () => {
    if (brochurePath) {
      console.log('Viewing:', brochurePath);
      try {
        // Try to encode the URL properly
        const encodedPath = encodeURI(brochurePath);
        console.log('Encoded path:', encodedPath);
        window.open(encodedPath, '_blank');
      } catch (error) {
        console.error('View failed:', error);
        // Fallback: redirect to PECB website
        window.open('https://pecb.com/en/brochures', '_blank');
      }
    }
  };

  const handlePecbWebsite = () => {
    window.open('https://pecb.com/en/brochures', '_blank');
  };

  if (!hasBrochure) {
    return (
      <div className={`bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 ${className}`}>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-400 p-3 rounded-lg">
            <FaInfoCircle className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700">Course Brochure</h3>
            <p className="text-gray-600">Brochure will be available soon</p>
            <p className="text-sm text-gray-500 mt-1">Course: {courseName}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-lg ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-red-500 p-3 rounded-lg">
            <FaFilePdf className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Course Brochure</h3>
            <p className="text-gray-600">Download the official {courseName} brochure</p>
            <p className="text-sm text-gray-500 mt-1">Path: {brochurePath}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleView}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
          >
            <FaEye className="text-sm" />
            <span>View PDF</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
          >
            <FaDownload className="text-sm" />
            <span>Download</span>
          </button>
          <button
            onClick={handlePecbWebsite}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
            title="Visit PECB Brochures Website"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span>PECB Site</span>
          </button>
        </div>
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> If the PDF doesn't open, you can visit the PECB brochures website to download the official brochure for this course.
        </p>
      </div>
    </div>
  );
};

export default PecbBrochureSection;
