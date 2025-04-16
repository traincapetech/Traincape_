import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";
import Practice from "./Practice";
import microsoft from "../../assets/microsoft.jpg";
import CourseAccordion from "../../components/CourseAccordion";
import heroImage from "../../assets/ibmbanner.jpg";

const MicrosoftDynamicsCRMFundamentals = () => {
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
      id: "microsoft-dynamics-365-crm",
      title: "Microsoft Dynamics 365 Fundamentals Customer Engagement Apps (CRM) – MB-910",
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
            Microsoft Dynamics 365 Fundamentals Customer Engagement Apps (CRM) – MB-910
          </h3>
          <p className="text-gray-700">
            This course prepares you for the Microsoft Dynamics 365 Fundamentals Customer Engagement Apps (MB-910) exam, which validates your understanding of Microsoft Dynamics 365 customer engagement apps including Sales, Customer Service, Marketing, and Field Service.
          </p>
          <p className="text-gray-700 mt-4">
            Establish your foundation in CRM concepts and learn how Dynamics 365 customer engagement apps enable businesses to manage customer relationships, deliver exceptional service, and drive sales growth.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand core customer engagement concepts in Dynamics 365</li>
            <li>Master the fundamentals of Dynamics 365 Sales and the sales process</li>
            <li>Explore customer service capabilities including case management</li>
            <li>Learn field service management and scheduling</li>
            <li>Understand marketing automation and campaign management</li>
            <li>Perform basic configurations and end-user personalization</li>
            <li>Integrate with other Microsoft products such as Power Platform and Office 365</li>
            <li>Prepare for the MB-910 certification exam</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
          <p className="text-gray-700 mb-4">
            The Microsoft Dynamics 365 Customer Engagement Fundamentals certification opens doors to various career paths:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dynamics 365 CRM Functional Consultant (Entry Level)</li>
            <li>Sales Operations Specialist</li>
            <li>Customer Service Representative</li>
            <li>Marketing Coordinator</li>
            <li>Business Process Analyst</li>
            <li>CRM Administrator</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This certification serves as a stepping stone to more advanced Dynamics 365 customer engagement certifications.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Why Choose This Course?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive curriculum covering all MB-910 exam objectives</li>
            <li>Hands-on labs with real-world business scenarios</li>
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
          title="Module 1: Introduction to Dynamics 365 Customer Engagement"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Overview of Dynamics 365 Customer Engagement Apps</li>
              <li>Core capabilities and business value</li>
              <li>Navigating the interface and common elements</li>
              <li>Integration with Microsoft 365 and Power Platform</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 2: Dynamics 365 Sales Fundamentals"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Understanding the sales process</li>
              <li>Managing leads, opportunities, and customers</li>
              <li>Sales forecasting and pipeline management</li>
              <li>Product catalog and price lists</li>
              <li>Creating and managing quotes, orders, and invoices</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 3: Dynamics 365 Customer Service Basics"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Case management essentials</li>
              <li>Knowledge base and self-service portals</li>
              <li>Service level agreements and entitlements</li>
              <li>Queue management and routing</li>
              <li>Omnichannel engagement</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 4: Dynamics 365 Marketing Essentials"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Marketing segmentation and customer journeys</li>
              <li>Email marketing and landing pages</li>
              <li>Event management</li>
              <li>Lead scoring and qualification</li>
              <li>Marketing analytics and performance tracking</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 5: Dynamics 365 Field Service Overview"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Work order management</li>
              <li>Resource scheduling and dispatch</li>
              <li>Inventory and asset management</li>
              <li>Mobile app capabilities</li>
              <li>Field service agreements</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 6: Integration and Customization"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Common Data Service integration</li>
              <li>Power Apps and Power Automate integration</li>
              <li>Office 365 integration features</li>
              <li>Basic customizations and configurations</li>
              <li>Business intelligence and reporting</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 7: MB-910 Certification Preparation"
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
    Practice: <Practice course={"Microsoft"} subTopic={"MicrosoftDynamics365CRM"} />,
    FAQ: (
      <div className="space-y-6">
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(0)}
          >
            <h3 className="text-lg font-semibold">
              What is the MB-910 certification?
            </h3>
            {selectedQuestion === 0 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 0 && (
            <div className="mt-2 text-gray-700">
              The Microsoft Dynamics 365 Fundamentals Customer Engagement Apps (MB-910) certification validates your understanding of Dynamics 365 customer engagement applications, business value, deployment options, and basic functionality. It's an entry-level certification focused on CRM concepts within the Dynamics 365 ecosystem.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(1)}
          >
            <h3 className="text-lg font-semibold">
              Do I need prior experience with CRM systems to take this course?
            </h3>
            {selectedQuestion === 1 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 1 && (
            <div className="mt-2 text-gray-700">
              No prior experience with CRM systems is required. This is a fundamentals-level course designed for beginners who want to learn about Dynamics 365 customer engagement apps. However, basic knowledge of business processes and familiarity with Microsoft products is helpful.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(2)}
          >
            <h3 className="text-lg font-semibold">
              What's the difference between MB-910 and other Dynamics 365 certifications?
            </h3>
            {selectedQuestion === 2 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 2 && (
            <div className="mt-2 text-gray-700">
              MB-910 is a fundamentals certification focused on customer engagement apps (the CRM components of Dynamics 365). It serves as an entry point before moving to role-based certifications like Functional Consultant or Developer certifications, which are more specialized and require deeper knowledge in specific areas.
            </div>
          )}
        </div>

        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(3)}
          >
            <h3 className="text-lg font-semibold">
              How long does it take to prepare for the MB-910 exam?
            </h3>
            {selectedQuestion === 3 ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {selectedQuestion === 3 && (
            <div className="mt-2 text-gray-700">
              The preparation time varies depending on your background, but most students can prepare for the MB-910 exam in 4-6 weeks with dedicated study. Our course is structured to be completed in 30-40 hours of learning time, which you can spread according to your schedule.
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
              Microsoft fundamentals certifications, including MB-910, do not expire. However, as Dynamics 365 applications evolve, it's recommended to stay updated with the latest features and functionalities through continuous learning.
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
              A
            </div>
            <div>
              <h4 className="font-bold">Ananya Patel</h4>
              <div className="flex text-yellow-400">
                ★★★★★ <span className="text-gray-600 ml-1">5/5</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "As someone new to CRM systems, this course provided an excellent foundation. The sales module was particularly helpful for my role, and I passed the MB-910 exam on my first attempt!"
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              K
            </div>
            <div>
              <h4 className="font-bold">Karthik Menon</h4>
              <div className="flex text-yellow-400">
                ★★★★★ <span className="text-gray-600 ml-1">5/5</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "Comprehensive course with excellent hands-on labs. The customer service and field service modules gave me practical knowledge I could apply immediately in my support role. Worth every rupee!"
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              S
            </div>
            <div>
              <h4 className="font-bold">Sanjay Kumar</h4>
              <div className="flex text-yellow-400">
                ★★★★<span className="text-gray-400">★</span>{" "}
                <span className="text-gray-600 ml-1">4/5</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            "The practice exams were incredibly helpful for my certification preparation. Would have liked more content on marketing automation, but overall a solid course that helped me advance in my career."
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
              Microsoft Dynamics 365 <br />
              Customer Engagement Apps (CRM)
            </h1>
            <p className="text-xl text-white mb-8">
              Master Microsoft's CRM solution and earn the MB-910 certification
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
                Microsoft Dynamics 365 CRM Fundamentals
              </h2>
              <p className="text-gray-600">Microsoft Certified: MB-910</p>
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

export default MicrosoftDynamicsCRMFundamentals; 