// DocumentsSection.js
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
const DocumentsSection = ({ employee }) => {
  const [selectedDocKey, setSelectedDocKey] = useState(null);
  const [selectedDocLabel, setSelectedDocLabel] = useState("");

  const documents = {
    personal: [
      { key: "photo", label: "Profile Photo" },
      { key: "resume", label: "Resume" },
      { key: "aadharCard", label: "Aadhar Card" },
      { key: "panCard", label: "PAN Card" },
      { key: "policeClearance", label: "Police Clearance" },
    ],
    educational: [
      { key: "tenthMarksheet", label: "10th Marksheet" },
      { key: "twelfthMarksheet", label: "12th Marksheet" },
      { key: "bachelorsCertificate", label: "Bachelor's Certificate" },
      { key: "pgCertificate", label: "PG Certificate" },
    ],
    employment: [{ key: "offerLetter", label: "Offer Letter" }],
  };

  const handleDocumentClick = (key, label) => {
    setSelectedDocKey(key);
    setSelectedDocLabel(label);
  };

  const renderDocumentLinks = (docs) =>
    docs.map(({ key, label }) => (
      <div key={key}>
        <h4
          onClick={() => handleDocumentClick(key, label)}
          className="text-md font-medium mb-2 cursor-pointer hover:underline text-blue-600"
        >
          {label}
        </h4>
      </div>
    ));

  return (
    <div className="space-y-4">
      {/* Document Sections */}
      {Object.entries(documents).map(([section, docs]) => (
        <div key={section} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4 capitalize">
            {section} Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderDocumentLinks(docs)}
          </div>
        </div>
      ))}

      {/* Preview Section */}
      {selectedDocKey &&
        (employee[selectedDocKey] ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">
              {selectedDocLabel}
              {console.log(employee[selectedDocKey])}
            </h3>
            {(() => {
              const doc = employee[selectedDocKey];
              console.log("doc", doc);
              if (!doc.data)
                return (
                  <p className="text-red-500 text-center">No document found</p>
                );
              if (doc.contentType === "application/pdf") {
                return (
                  <iframe
                    src={`data:application/pdf;base64,${doc.data}`}
                    width="100%"
                    height="500px"
                    title="pdf-document"
                  />
                );
              } else if (doc.contentType === "image/jpeg") {
                return (
                  <img
                    src={`data:${doc.contentType};base64,${doc.data}`}
                    alt={doc.filename}
                    className="max-w-full h-auto rounded"
                  />
                );
              } else {
                return (
                  <p className="text-red-500 text-center">
                    Unsupported file type.
                  </p>
                );
              }
            })()}
          </div>
        ) : (
          <p className="text-red-500 text-center">No document found</p>
        ))}
    </div>
  );
};

export default DocumentsSection;
