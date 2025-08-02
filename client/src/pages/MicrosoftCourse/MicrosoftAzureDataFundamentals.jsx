import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";
import Practice from "./Practice";
import microsoft from "../../assets/microsoft.jpg";
import CourseAccordion from "../../components/CourseAccordion";
import heroImage from "../../assets/ibmbanner.jpg";

const MicrosoftAzureDataFundamentals = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    const product = {
      id: "microsoft-azure-data-fundamentals",
      title: "Microsoft Azure Data Fundamentals Certification (DP-900)",
      price: 2199,
      image: microsoft,
      quantity: 1,
    };
    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  const tabsData = {
    Overview: (
      <div className="space-y-4">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">
            Microsoft Azure Data Fundamentals Certification (DP-900)
          </h3>
          <p className="text-gray-700">
            The Microsoft Azure Data Fundamentals certification is your first step toward a career in data and the cloud. This course teaches you the fundamentals of database concepts in a cloud environment, core data concepts, and how to work with relational and non-relational data on Azure.
          </p>
          <p className="text-gray-700 mt-4">
            Whether you're new to working with data or already have some experience, this course provides essential knowledge for anyone interested in Azure data services and data-related career paths.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Core data concepts including relational, non-relational, big data, and analytics</li>
            <li>Azure data services for relational data like Azure SQL Database and Azure SQL Managed Instance</li>
            <li>Non-relational data solutions including Azure Tables, Azure Cosmos DB, and Azure Storage</li>
            <li>Data warehousing and analytics workloads using Azure Synapse Analytics and Azure Databricks</li>
            <li>Modern data processing technologies like Apache Spark and Hadoop</li>
            <li>Real-time analytics and data visualization techniques</li>
            <li>Essential data governance, privacy, and compliance concepts</li>
            <li>Preparation strategies for the DP-900 certification exam</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
          <p className="text-gray-700 mb-4">
            The Azure Data Fundamentals certification prepares you for various entry-level data roles:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Junior Data Analyst</li>
            <li>Database Administrator Assistant</li>
            <li>Junior Data Engineer</li>
            <li>BI Report Developer</li>
            <li>Cloud Data Specialist</li>
            <li>Business Analyst with data focus</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This certification serves as a stepping stone to more advanced Azure data certifications like Azure Data Engineer Associate or Azure Database Administrator Associate.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Why Choose This Course?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive curriculum covering all DP-900 exam objectives</li>
            <li>Hands-on labs with real Azure data services</li>
            <li>Expert instructors with industry experience</li>
            <li>Practice tests and exam preparation materials</li>
            <li>Learn at your own pace with lifetime access</li>
            <li>Course completion certificate and preparation for Microsoft certification</li>
          </ul>
        </div>
      </div>
    ),
    Curriculum: (
      <div className="space-y-4">
        <CourseAccordion
          title="Module 1: Core Data Concepts"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Understanding data workloads</li>
              <li>Relational data concepts</li>
              <li>Non-relational data concepts</li>
              <li>Analytics workloads and technologies</li>
              <li>Data visualization fundamentals</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 2: Azure Relational Database Services"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Introduction to Azure SQL Database</li>
              <li>Azure SQL Managed Instance</li>
              <li>Azure Database for MySQL and PostgreSQL</li>
              <li>Managing relational data in Azure</li>
              <li>Querying relational data with SQL</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 3: Azure Non-relational Data Services"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Azure Cosmos DB overview</li>
              <li>Azure Blob Storage and File Storage</li>
              <li>Azure Tables and Queue storage</li>
              <li>Working with NoSQL data in Azure</li>
              <li>Choosing the right storage solution</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 4: Azure Analytics Services"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Azure Synapse Analytics overview</li>
              <li>Azure Databricks and Apache Spark</li>
              <li>Azure HDInsight and big data processing</li>
              <li>Azure Data Factory for data integration</li>
              <li>Azure Stream Analytics for real-time processing</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 5: Data Visualization in Azure"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Introduction to Power BI</li>
              <li>Creating reports and dashboards</li>
              <li>Connecting Power BI to Azure data sources</li>
              <li>Data modeling in Power BI</li>
              <li>Sharing and collaborating with data insights</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 6: Data Governance and Security"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Data governance principles</li>
              <li>Data privacy and compliance in Azure</li>
              <li>Basic data security concepts</li>
              <li>Azure role-based access control</li>
              <li>Data encryption and protection</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 7: DP-900 Certification Preparation"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Exam structure and question types</li>
              <li>Sample questions and practice tests</li>
              <li>Test-taking strategies</li>
              <li>Final review and preparation</li>
            </ul>
          }
        />
      </div>
    ),
    Practice: <Practice course={"Microsoft"} subTopic={"MicrosoftAzureDataFundamentals"} />,
    FAQ: (
      <div className="space-y-6">
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(0)}
          >
            <h3 className="text-lg font-semibold">
              Do I need prior experience with databases to take this course?
            </h3>
            {selectedQuestion === 0 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 0 && (
            <div className="mt-2 text-gray-700">
              No prior database experience is required. This is a fundamentals-level course designed for beginners who want to learn about data concepts and Azure data services. Basic computer literacy and some familiarity with cloud concepts would be helpful, but not mandatory.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(1)}
          >
            <h3 className="text-lg font-semibold">
              What's the difference between DP-900 and other Azure data certifications?
            </h3>
            {selectedQuestion === 1 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 1 && (
            <div className="mt-2 text-gray-700">
              DP-900 is a fundamentals certification that provides a broad overview of data concepts and Azure data services. It serves as an entry point before moving to role-based certifications like DP-300 (Azure Database Administrator) or DP-203 (Azure Data Engineer), which are more specialized and require deeper technical knowledge.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(2)}
          >
            <h3 className="text-lg font-semibold">
              Will I get hands-on experience with Azure services?
            </h3>
            {selectedQuestion === 2 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 2 && (
            <div className="mt-2 text-gray-700">
              Yes, our course includes guided hands-on labs where you'll work with actual Azure data services including Azure SQL Database, Cosmos DB, Synapse Analytics, and Power BI. We provide step-by-step instructions to ensure you gain practical experience alongside theoretical knowledge.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(3)}
          >
            <h3 className="text-lg font-semibold">
              How long does it take to prepare for the DP-900 exam?
            </h3>
            {selectedQuestion === 3 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 3 && (
            <div className="mt-2 text-gray-700">
              The preparation time varies depending on your background, but most students can prepare for the DP-900 exam in 3-5 weeks with dedicated study. Our course is structured to be completed in 25-30 hours of learning time, which you can spread according to your schedule.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(4)}
          >
            <h3 className="text-lg font-semibold">
              Does this certification expire?
            </h3>
            {selectedQuestion === 4 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 4 && (
            <div className="mt-2 text-gray-700">
              Microsoft fundamentals certifications, including DP-900, do not expire. However, as Azure data services evolve, it's recommended to stay updated with the latest features and functionalities through continuous learning.
            </div>
          )}
        </div>
      </div>
    ),
    Reviews: (
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              P
            </div>
            <div>
              <h4 className="font-bold">Priya Mehta</h4>
              <div className="flex text-yellow-400">
                ★★★★★ <span className="text-gray-600 ml-1">5/5</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "As someone transitioning from traditional IT to cloud data roles, this course was perfect. The explanations of both relational and non-relational concepts were clear, and the Azure-specific content helped me ace the DP-900 exam!"
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              V
            </div>
            <div>
              <h4 className="font-bold">Vikram Singh</h4>
              <div className="flex text-yellow-400">
                ★★★★★ <span className="text-gray-600 ml-1">5/5</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "The hands-on labs were incredibly helpful for understanding Azure data services. I particularly enjoyed the Cosmos DB and Synapse Analytics modules. This course gave me the confidence to pursue more advanced data engineering roles."
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              N
            </div>
            <div>
              <h4 className="font-bold">Neha Joshi</h4>
              <div className="flex text-yellow-400">
                ★★★★<span className="text-gray-400">★</span>{" "}
                <span className="text-gray-600 ml-1">4/5</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "Great introduction to data concepts in Azure. The practice questions were very similar to the actual exam. I would have liked more content on Power BI, but overall this course prepared me well for the certification."
          </p>
        </div>
      </div>
    ),
  };

  const [activeTab, setActiveTab] = useState(Object.keys(tabsData)[0]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Microsoft Azure Data <br />
              Fundamentals (DP-900)
            </h1>
            <p className="text-xl text-white mb-8">
              Master cloud data concepts and Azure data services
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Pricing Section */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={microsoft} alt="Microsoft Logo" className="h-12 mr-4" />
            <div>
              <h2 className="text-xl font-bold">
                Microsoft Azure Data Fundamentals
              </h2>
              <p className="text-gray-600">Microsoft Certified: DP-900</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <p className="text-3xl font-bold text-blue-600">₹2,199</p>
              <p className="text-gray-500 line-through ml-2">₹3,499</p>
            </div>
            <p className="text-sm text-green-600 font-semibold">
              Limited time offer: 37% off
            </p>
            <AddToCartButton
              onClick={handleAddToCart}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300"
            />
            {showConfirmation && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mt-2">
                Added to cart successfully!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b">
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">{tabsData[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftAzureDataFundamentals; 