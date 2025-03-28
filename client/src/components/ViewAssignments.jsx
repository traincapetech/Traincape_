import React, { useState, useEffect } from "react";
import axios from "axios";


const ViewAssignments = () => {
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const courseSubTopics = {
    AWS: [
      { name: "AWS Certified Security", value: "AWSCertifiedSecurity" },
      { name: "AWS Certified SysOps Administrator", value: "AWSCertifiedSysOpsAdministrator" },
      { name: "AWS Certified Developer", value: "AWSCertifiedDeveloper" },
      { name: "AWS Certified DevOps", value: "AWSCertifiedDevOps" },
      { name: "AWS Certified Machine Learning", value: "AWSCertifiedMachineLearning" },
      { name: "AWS Certified Data Analytics", value: "AWSCertifiedDataAnalytics" },
      { name: "AWS Certified cloud practitioner", value: "AWSCertifiedcloudpractitioner" },
      { name: "AWS Certified Solutions Architect", value: "AWSCertifiedSolutionsArchitect" },
      { name: "AWS Certified Advanced Networking", value: "AWSCertifiedAdvancedNetworking" },
    ],
    Microsoft: [
      {
        name: "Microsoft Azure Administrator",
        value: "MicrosoftAzureAdministrator",
      },
      {
        name: "Microsoft Azure AI Fundamentals",
        value: "MicrosoftAzureAIFundamentals",
      },
      {
        name: "Microsoft Azure Developer Associate",
        value: "MicrosoftAzureDeveloperAssociate",
      },
      {
        name: "Microsoft Azure Fundamentals",
        value: "MicrosoftAzureFundamentals",
      },
      {
        name: "Microsoft Dynamics 365",
        value: "MicrosoftDynamics365",
      },
      {
        name: "Microsoft Azure",
        value: "MicrosoftAzure",
      },
      {
        name: "Microsoft 365",
        value: "Microsoft365",
      },
      {
        name: "Microsoft 365 Fundamentals",
        value: "Microsoft365Fundamentals",
      },
      {
        name: "Microsoft security, compliance and Identity",
        value: "MicrosoftsecurityComplianceandIdentity",
      },
      {
        name: "Microsoft Power Platform",
        value: "MicrosoftPowerPlatform",
      },

      {
        name: "Microsoft Azure Data Fundamentals",
        value: "MicrosoftAzureDataFundamentals",
      },
      {
        name: "Microsoft 365 certified teams administrator associate",
        value: "Microsoft365certifiedteamsadministratorassociate",
      },
      {
        name: "Microsoft Power bi",
        value: "MicrosoftPowerbi",
      },
      {
        name: "Microsoft Azure Cosmos DB Developer Specialty",
        value: "MicrosoftAzureCosmosDBDeveloperSpecialty",
      },
      {
        name: "Microsoft Azure for SAP workloads Specialty",
        value: "MicrosoftAzureforSAPworkloadsSpecialty",
      },

      {
        name: "Microsoft Azure Solutions Architect Expert",
        value: "MicrosoftAzureSolutionsArchitectExpert",
      },
      {
        name: "Microsoft Azure Virtual Desktop Specialty",
        value: "MicrosoftAzureVirtualDesktopSpecialty",
      },

      {
        name: "Microsoft Dynamics 365 Sales Functional Consultant Associate",
        value: "MicrosoftDynamics365SalesFunctionalConsultantAssociate",
      },
      {
        name: "Microsoft 365",
        value: "Microsoft365",
      },
      {
        name: "Microsoft Cybersecurity Analyst",
        value: "MicrosoftCybersecurityAnalyst",
      },
      {
        name: "Microsoft Ms-900: Microsoft 365 Fundamentals",
        value: "MicrosoftMs-900:Microsoft365Fundamentals",
      },
      {
        name: "Microsoft Pl-300 Microsoft Power Bi Certification Training",
        value: "MicrosoftPl-300MicrosoftPowerBiCertificationTraining",
      },

    ],
    PECB: [
      {
        name: "PECB Computer Forensics",
        value: "PECBComputerForensics"
      },
      {
        name: "PECBCybersecurity Audit Training",
        value: "PECBCybersecurityAuditTraining"
      },
      {
        name: "PECB ISO 9001 Lead Implementer",
        value: "PECBISO9001LeadImplementer"
      },
      {
        name: "PECB ISO 9001",
        value: "PECBISO9001"
      },
      {
        name: "PECB ISO 22301",
        value: "PECBISO22301"
      },
      {
        name: "PECB ISO 31000 Risk Manager",
        value: "PECBISO31000RiskManager",
      },
      {
        name: "PECB ISO 37001",
        value: "PECBISO37001"
      },
      {
        name: "PECB ISO 45001",
        value: "PECBISO45001"
      },
      {
        name: "PECB ISO IEC 27001 Lead Implementer",
        value: "PECBISOIEC27001LeadImplementer"
      },
      {
        name: "PECB ISO IEC 27001",
        value: "PECBISOIEC27001"
      },
      {
        name: "PECB ISO IEC 27005 Risk Manager",
        value: "PECBISOIEC27005RiskManager"
      },
      {
        name: "PECB ISO IEC 27032 Cyber Security",
        value: "PECBISOIEC27032CyberSecurity"
      },
      {
        name: "PECB Certified ISO 27001 Foundation",
        value: "PECBCertifiedISO27001Foundation"
      },
      {
        name: "SCADA Security Manager",
        value: "SCADASecurityManager"
      },
      {
        name: "Go4 Whatsup",
        value: "Go4Whatsup"
      }
    ],
    comptia: [
      { name: "CompTIA A+", value: "CompTIAA+" }, //Name of the subtpic is the value and name is displyed on the frontend.
      { name: "CompTIA Network+ N10-008", value: "CompTIANetwork+N10-008" },
      { name: "CompTIA Network+ N10-007", value: "CompTIANetwork+N10-007" },
      { name: "CompTIA Security+ SY0-701", value: "CompTIASecurity+701" },
      { name: "CompTIA Advanced Security", value: "CompTIAAdvancedSecurity" },
      { name: "CompTIA Cybersecurity Analyst", value: "CompTIACybersecurityAnalyst" },
      { name: "CompTIA Cloud Essentials+", value: "CompTIACloudEssentials+" },
      { name: "CompTIA Data+", value: "CompTIAData+" },
      { name: "CompTIA Server+", value: "CompTIAServer+" },
      { name: "CompTIA Cloud+", value: "CompTIACloud+" },
      { name: "CompTIA PenTest+", value: "CompTIAPenTest" },
      { name: "CompTIA Project+ PK0-004", value: "CompTIAProject+004" },
      { name: "CompTIA Project+ PK0-005", value: "CompTIAProject+005" },
      { name: "CompTIA Linux+", value: "CompTIALinux+" },
      { name: "CompTIA Security+ SY0-601", value: "CompTIASecurity+601" },
    ],
    Cisco: [
      {
        name: "Cisco Certified Support Technician (CCST)",
        value: "CiscoCertifiedSupportTechnician(CCST)",
      },
      {
        name: "CCST Cybersecurity",
        value: "CCSTCybersecurity",
      },
      {
        name: "CCST Networking",
        value: "CCSTNetworking",
      },
      {
        name: "Cisco Certified Technician (CCT)",
        value: "CiscoCertifiedTechnician(CCT)",
      },
      {
        name: "CCT Routing & Switching (Exam: 100-490 RSTECH)",
        value: "CCTRouting&Switching(Exam: 100-490 RSTECH)",
      },
      {
        name: "CCT Data Center (Exam: 010-151 DCTECH)",
        value: "CCTDataCenter(Exam: 010-151 DCTECH)",
      },
      {
        name: "Cisco Certified Network Associate (CCNA)",
        value: "CiscoCertifiedNetworkAssociate(CCNA)",
      },
      {
        name: "Cisco Certified CyberOps Associate",
        value: "CiscoCertifiedCyberOpsAssociate",
      },
      {
        name: "CCNP Enterprise",
        value: "CCNPEnterprise",
      },
      {
        name: "CCNP Security",
        value: "CCNPSecurity",
      },
      {
        name: "CCNP Data Center",
        value: "CCNPDataCenter",
      },
      {
        name: "CCNP Service Provider",
        value: "CCNPServiceProvider",
      },
      {
        name: "CCNP Collaboration",
        value: "CCNPCollaboration",
      },
      {
        name: "CCNP DevNet (Developer)",
        value: "CCNPDevNet(Developer)",
      },
      {
        name: "CCIE Enterprise Infrastructure",
        value: "CCIEEnterpriseInfrastructure",
      },
      {
        name: "CCIE Enterprise Wireless",
        value: "CCIEEnterpriseWireless",
      },
      {
        name: "CCIE Security",
        value: "CCIESecurity",
      },
      {
        name: "CCIE Data Center",
        value: "CCIEDataCenter",
      },
      {
        name: "CCIE Service Provider",
        value: "CCIEServiceProvider",
      },
      {
        name: "CCIE Collaboration",
        value: "CCIECollaboration",
      },
    ],
   
  };

  // Fetch questions based on course, level, and sub-topic
  const fetchQuestions = async () => {
    if (!course || !level || !subTopic) return;
    setLoading(true);
    setError(null);

    try {
      const encodedSubTopic = encodeURIComponent(subTopic); // URL encode sub-topic
      const response = await axios.get(
        `https://traincape-backend-1.onrender.com/questions/getQuestions?course=${course}&subTopic=${encodedSubTopic}&level=${level}`
      );
      setQuestions(response.data);
      console.log(response);

    } catch (error) {
      setError("Failed to load questions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [course, level, subTopic]);

  // Handlers for form fields
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
    setSubTopic(""); // Reset sub-topic when course changes
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleSubTopicChange = (e) => {
    setSubTopic(e.target.value);
  };

  const handleEdit = (question) => {
    setEditingQuestion(question._id);
    setQuestionText(question.questionText);
    setOptions(question.options);
    setCorrectAnswer(question.correctAnswer);
  };

  const handleSave = async () => {
    if (!questionText || options.some(option => option.trim() === "") || !correctAnswer) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedQuestion = { questionText, options, correctAnswer };

    try {
      const response = await axios.put(
        `https://traincape-backend-1.onrender.com/questions/updateQuestion/${editingQuestion}`,
        updatedQuestion
      );
      console.log('Response:', response);  // Log the response
      fetchQuestions(); // Refresh the question list
      setEditingQuestion(null); // Reset editing state
      setQuestionText("");
      setOptions([]);
      setCorrectAnswer("");

    } catch (error) {
      console.error('Error response:', error.response); // Log the error response
      setError("Failed to update question.");
    }
  };


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await axios.delete(`https://traincape-backend-1.onrender.com/questions/deleteQuestion/${id}`);
        fetchQuestions(); // Refresh the question list after deletion
      } catch (error) {
        setError("Failed to delete question.");
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">View and Manage Questions</h1>

      {/* Course, Level, and Sub-topic Filters */}
      <div className="flex gap-6 mb-6">
        <div>
          <label className="block text-lg font-medium mb-2">Select Course</label>
          <select
            className="w-full p-2 border rounded-md"
            value={course}
            onChange={handleCourseChange}
            required
          >
            <option value="">Select a Course</option>
            <option value="AWS">AWS</option>
            <option value="Cisco">CISCO</option>
            <option value="comptia">CompTIA</option>
            <option value="Microsoft">Microsoft</option>
            <option value="PECB">PECB</option>
          </select>
        </div>

        {course && (
          <div>
            <label className="block text-lg font-medium mb-2">Select Sub-Topic</label>
            <select
              className="w-full p-2 border rounded-md"
              value={subTopic}
              onChange={handleSubTopicChange}
              required
            >
              <option value="">Select Sub-Topic</option>
              {courseSubTopics[course]?.map((sub, index) => (
                <option key={index} value={sub.value}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-lg font-medium mb-2">Select Difficulty Level</label>
          <select
            className="w-full p-2 border rounded-md"
            value={level}
            onChange={handleLevelChange}
            required
          >
            <option value="">Select Difficulty Level</option>
            <option value="easy">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Loading or error state */}
      {loading && <div className="text-center text-xl">Loading questions...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Display all questions */}
      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question._id} className="border p-4 rounded-md space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{question.questionText}</h3>
              <div>
                <p className="text-xl font-medium mb-2">Options:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  {question.options.map((option, index) => (
                    <li key={index} className="text-lg">{option}</li>
                  ))}
                </ol>
              </div>
              <p className="bg-green-500 text-slate-800 px-2 py-1.5 rounded-md w-fit">
                Correct Answer: {question.correctAnswer}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => handleEdit(question)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() => handleDelete(question._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Question Form */}
      {editingQuestion && (
        <div className="mt-6 border p-4 rounded-md space-y-4">
          <h2 className="text-2xl font-semibold">Edit Question</h2>
          <div>
            <label className="block text-lg font-medium mb-2">Question Text</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Enter question text"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Options</label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-1/2 p-2 border rounded-md"
                  value={option}
                  onChange={(e) =>
                    setOptions((prevOptions) =>
                      prevOptions.map((opt, i) => (i === index ? e.target.value : opt))
                    )
                  }
                  placeholder={`Option ${index + 1}`}
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Correct Answer</label>
            <select
              className="w-full p-2 border rounded-md"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              required
            >
              <option value="">Select Correct Answer</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              className="bg-green-500 px-4 py-2 text-white rounded-md"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAssignments;
