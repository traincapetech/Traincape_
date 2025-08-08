import React, { useState, useEffect } from "react";

const VoucherManager = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubcourse, setSelectedSubcourse] = useState("");
  const [voucherIds, setVoucherIds] = useState("");
  const [subcourses, setSubcourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Static course data extracted from allRoute.jsx
  const coursesData = [
    {
      name: "CompTIA",
      subcourses: [
        "CompTIA Security+",
        "CompTIA Linux+",
        "CompTIA Project+",
        "CompTIA Project+ 004",
        "CompTIA PenTest+",
        "CompTIA A+",
        "CompTIA Network+",
        "CompTIA Cloud+",
        "CompTIA Server+",
        "CompTIA Data+",
        "CompTIA Cloud CLO",
        "CompTIA Security+ 601",
        "CompTIA Cybersecurity Analyst",
        "CompTIA Advanced Security Practitioner",
        "CompTIA Network+ 007"
      ]
    },
    {
      name: "Microsoft",
      subcourses: [
        "Microsoft Azure Administrator",
        "Microsoft AI",
        "Microsoft Developer",
        "Microsoft Fundamentals",
        "Microsoft Dynamic 365",
        "Microsoft Azure",
        "Microsoft 365",
        "Microsoft 365 Fundamentals",
        "Microsoft Security",
        "Microsoft Power Platform",
        "Microsoft Azure Data",
        "Microsoft 365 Associate",
        "Microsoft Power BI",
        "Microsoft Azure Cosmos",
        "Microsoft Azure SAP",
        "Microsoft Azure Solutions",
        "Microsoft Azure Virtual",
        "Microsoft Dynamic Function",
        "Microsoft 365 Certification",
        "Microsoft Cyber Analyst",
        "Microsoft MS-900",
        "Microsoft PL-300",
        "Microsoft Security Fundamentals",
        "Microsoft Excel Expert",
        "Microsoft Word Associate",
        "Microsoft Word Expert",
        "Microsoft PowerPoint Associate",
        "Microsoft Excel Associate",
        "Microsoft Dynamics 365 ERP",
        "Microsoft Azure Data Fundamentals",
        "Microsoft Dynamics CRM Fundamentals",
        "Microsoft Power Platform Fundamentals"
      ]
    },
    {
      name: "Cisco",
      subcourses: [
        "CCST Support Technician",
        "CCST Cybersecurity",
        "CCST Networking",
        "CCT Technician",
        "CCT Routing & Switching",
        "CCT Data Center",
        "CCNA",
        "CCCA",
        "CCNP Enterprise",
        "CCNP Security",
        "CCNP Data Center",
        "CCNP Service Provider",
        "CCNP Collaboration",
        "CCNP DevNet",
        "CCIE Infrastructure",
        "CCIE Wireless",
        "CCIE Security",
        "CCIE Data Center",
        "CCIE Service Provider",
        "CCIE Collaboration"
      ]
    },
    {
      name: "AWS",
      subcourses: [
        "AWS Overview",
        "AWS Certified Networking",
        "AWS Certified Solutions Architect",
        "AWS Certified Cloud Practitioner",
        "AWS Certified Data Analytics",
        "AWS Certified Machine Learning",
        "AWS Certified DevOps Engineer",
        "AWS Certified Developer",
        "AWS Certified SysOps Administrator",
        "AWS Certified Security"
      ]
    },
    {
      name: "IBM",
      subcourses: [
        "IBM Agile Methodologies",
        "Web Development HTML",
        "Web Development C",
        "IBM SQL",
        "IBM Software Foundation",
        "IBM Scala",
        "IBM REST API",
        "IBM RDBMS",
        "IBM Python",
        "IBM Node.js",
        "IBM NoSQL",
        "IBM Methodology",
        "IBM Machine Learning",
        "IBM Kubernetes",
        "IBM JavaScript",
        "IBM DevOps Fundamentals",
        "IBM Deep Learning",
        "IBM Data Analysis",
        "IBM Cloud Fundamental",
        "IBM Big Data"
      ]
    },
    {
      name: "META",
      subcourses: [
        "Meta Digital Marketing",
        "Meta Front End Developer",
        "Meta Back End Developer",
        "Meta Android Developer",
        "Meta iOS Developer"
      ]
    },
    {
      name: "PECB",
      subcourses: [
        "Computer Forensics",
        "Cybersecurity Audit Trainings",
        "ISO 9001 Lead Implementer",
        "ISO 9001",
        "ISO 22301",
        "ISO 31000 Risk Manager",
        "ISO 37001",
        "ISO 45001",
        "ISO/IEC 27001 Lead Implementer",
        "ISO/IEC 27001",
        "ISO/IEC 27005 Risk Manager",
        "ISO/IEC 27032 Cyber Security",
        "PECB Certified ISO 27001 Foundation",
        "SCADA Security Manager"
      ]
    },
    {
      name: "PMI",
      subcourses: [
        "PMI Project Management"
      ]
    },
    {
      name: "IT Specialist",
      subcourses: [
        "IT Specialist Python",
        "IT Specialist JavaScript",
        "IT Specialist HTML",
        "IT Specialist Networking"
      ]
    },
    {
      name: "Swift Development",
      subcourses: [
        "Swift Development Basics",
        "Swift Development Advanced"
      ]
    },
    {
      name: "Tally",
      subcourses: [
        "Tally Essential Level 1",
        "Tally Essential Level 2",
        "Tally Essential Level 3",
        "Tally Professional",
        "Tally Essential Comprehensive",
        "Tally Prime"
      ]
    },
    {
      name: "Autodesk",
      subcourses: [
        "Autodesk AutoCAD",
        "Autodesk Revit",
        "Autodesk 3ds Max",
        "Autodesk Fusion 360",
        "Autodesk Maya"
      ]
    },
    {
      name: "Adobe",
      subcourses: [
        "Adobe Photoshop",
        "Adobe InDesign",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
        "Adobe Animate",
        "Adobe After Effects"
      ]
    },
    {
      name: "Unity",
      subcourses: [
        "Unity Artist Courseware",
        "Unity Developer Courseware",
        "Unity Programmer"
      ]
    }
  ];

  // Update subcourses when course changes
  useEffect(() => {
    const courseObj = coursesData.find((c) => c.name === selectedCourse);
    setSubcourses(courseObj ? courseObj.subcourses : []);
    setSelectedSubcourse(""); // Reset subcourse when main course changes
  }, [selectedCourse]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const vouchers = voucherIds
      .split(/[\n,]+/)
      .map((v) => v.trim())
      .filter(Boolean); // Split by comma or newline, trim whitespace, remove empty strings

    if (!selectedCourse || !selectedSubcourse || vouchers.length === 0) {
      setError("Please select a course and subcourse, and enter voucher IDs.");
      setLoading(false);
      return;
    }

    try {
      // API endpoint for saving vouchers
      const response = await fetch("/api/vouchers/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseName: selectedCourse,
          subcourseName: selectedSubcourse,
          vouchers: vouchers,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setSuccess(responseData.message || "Vouchers saved successfully!");
        setVoucherIds(""); // Clear the textarea on success
        setSelectedCourse(""); // Reset selected course
        setSelectedSubcourse(""); // Reset selected subcourse
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Error saving vouchers.");
      }
    } catch (err) {
      setError("Network error: " + err.message);
      console.error("Submit vouchers error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", background: "#fff", padding: 24, borderRadius: 8, boxShadow: "0 2px 8px #0001" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Voucher Management</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="mainCourse" style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>Main Course:</label>
          <select
            id="mainCourse"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          >
            <option value="">Select Course</option>
            {coursesData.map((course) => (
              <option key={course.name} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="subcourse" style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>Subcourse:</label>
          <select
            id="subcourse"
            value={selectedSubcourse}
            onChange={(e) => setSelectedSubcourse(e.target.value)}
            required
            disabled={!selectedCourse || subcourses.length === 0}
            style={{ 
              width: "100%", 
              padding: 8, 
              borderRadius: 4, 
              border: "1px solid #ccc", 
              backgroundColor: !selectedCourse || subcourses.length === 0 ? "#f0f0f0" : "#fff" 
            }}
          >
            <option value="">Select Subcourse</option>
            {subcourses.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
        
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="voucherIds" style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>
            Voucher IDs (comma or newline separated):
          </label>
          <textarea
            id="voucherIds"
            value={voucherIds}
            onChange={(e) => setVoucherIds(e.target.value)}
            rows={4}
            placeholder="e.g. ABC123, DEF456 or one per line"
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc", resize: "vertical" }}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !selectedCourse || !selectedSubcourse || !voucherIds.trim()}
          style={{ 
            marginTop: 8, 
            padding: "10px 24px", 
            background: "#2563eb", 
            color: "#fff", 
            border: "none", 
            borderRadius: 4, 
            fontWeight: 600, 
            cursor: loading ? "not-allowed" : "pointer", 
            opacity: (loading || !selectedCourse || !selectedSubcourse || !voucherIds.trim()) ? 0.6 : 1,
            width: "100%"
          }}
        >
          {loading ? "Saving..." : "Save Vouchers"}
        </button>
        
        {success && (
          <div style={{ 
            color: "green", 
            marginTop: 12, 
            padding: "8px", 
            border: "1px solid green", 
            borderRadius: "4px",
            backgroundColor: "#f0f8f0"
          }}>
            {success}
          </div>
        )}
        
        {error && (
          <div style={{ 
            color: "red", 
            marginTop: 12, 
            padding: "8px", 
            border: "1px solid red", 
            borderRadius: "4px",
            backgroundColor: "#fef0f0"
          }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default VoucherManager;
