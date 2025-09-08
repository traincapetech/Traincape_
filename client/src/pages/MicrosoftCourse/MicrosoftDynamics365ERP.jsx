import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useCartContext } from "../../components/CartContext";
import AddToCartButton from "../../components/AddToCartButton";
import Practice from "./Practice";
import microsoft from "../../assets/microsoft.jpg";
import CourseAccordion from "../../components/CourseAccordion";
import heroImage from "../../assets/ibmbanner.jpg";

const MicrosoftDynamics365ERP = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  
  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    const product = {
      id: "microsoft-dynamics-365-erp",
      name: "Microsoft Dynamics 365 Fundamentals Finance and Operations Apps (ERP) – MB-920",
      price: 2199,
      image: microsoft,
      amount: 1,
    };
    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  const tabsData = {
    Overview: (
      <div className="course-overview">
        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
        <p className="mb-4">
          This course prepares you for the Microsoft Dynamics 365 Fundamentals Finance and Operations Apps (MB-920) exam, which validates your foundational understanding of Microsoft Dynamics 365 finance and operations apps including finance, manufacturing, and supply chain management.
        </p>
        <p className="mb-4">
          Establish your foundation in ERP concepts and learn how Dynamics 365 finance and operations apps enable businesses to manage their financial and operational processes efficiently.
        </p>
        
        <div className="sales-note bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-6">
          <p>
            This certification is ideal for business professionals, IT managers, and students who want to understand the core functionality of Microsoft Dynamics 365 Finance and Operations. According to recent industry reports, Microsoft Dynamics 365 has become increasingly popular in India, with a growth rate of over 30% annually. The demand for certified Dynamics 365 professionals far exceeds supply, making this a valuable certification for career advancement.
          </p>
        </div>
        
        <div className="course-details-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="detail-item bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Duration</h3>
            <p>4 weeks, self-paced</p>
          </div>
          <div className="detail-item bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Skill Level</h3>
            <p>Beginner to Intermediate</p>
          </div>
          <div className="detail-item bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Prerequisites</h3>
            <p>Basic understanding of business processes</p>
          </div>
          <div className="detail-item bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Certification</h3>
            <p>Microsoft Certified: Dynamics 365 Fundamentals (ERP)</p>
          </div>
        </div>

        <div className="learning-outcomes mb-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <div className="outcomes-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="outcome-column">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Understand core finance and operations concepts in Dynamics 365</span>
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Master the fundamentals of supply chain management modules</span>
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Explore financial management capabilities</span>
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Learn manufacturing processes and production management</span>
                </li>
              </ul>
            </div>
            <div className="outcome-column">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Understand project management and accounting functionality</span>
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Perform basic configurations and end-user personalization</span>
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Integrate with other Microsoft products and services</span>
                </li>
                <li className="flex items-start">
                  <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Prepare for the MB-920 certification exam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="career-opportunities mb-8">
          <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
          <p className="mb-4">
            The Microsoft Dynamics 365 Finance and Operations Fundamentals certification opens doors to various career paths:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="font-medium">Dynamics 365 ERP Functional Consultant (Entry Level)</span>
              <span className="ml-auto">₹6,00,000 - ₹10,00,000 per year</span>
            </li>
            <li className="flex items-start">
              <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="font-medium">Business Process Analyst</span>
              <span className="ml-auto">₹5,00,000 - ₹8,00,000 per year</span>
            </li>
            <li className="flex items-start">
              <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="font-medium">ERP Implementation Team Member</span>
              <span className="ml-auto">₹4,50,000 - ₹7,50,000 per year</span>
            </li>
            <li className="flex items-start">
              <FaArrowRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="font-medium">Finance Operations Specialist</span>
              <span className="ml-auto">₹5,50,000 - ₹9,00,000 per year</span>
            </li>
          </ul>
          <p className="mt-4">
            This certification serves as a stepping stone to more advanced Dynamics 365 finance and operations certifications.
          </p>
        </div>

        <div className="why-choose mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose This Course?</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Comprehensive curriculum covering all MB-920 exam objectives</span>
            </li>
            <li className="flex items-start">
              <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Hands-on labs with real-world business scenarios</span>
            </li>
            <li className="flex items-start">
              <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Expert instructors with industry experience</span>
            </li>
            <li className="flex items-start">
              <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Practice tests and exam preparation materials</span>
            </li>
            <li className="flex items-start">
              <FaCircleCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span>Learn at your own pace with lifetime access</span>
            </li>
          </ul>
        </div>
      </div>
    ),
    Curriculum: (
      <div className="space-y-4">
        <CourseAccordion
          title="Module 1: Introduction to Dynamics 365 Finance and Operations"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Overview of Dynamics 365 Finance and Operations Apps</li>
              <li>Core capabilities and business value</li>
              <li>Navigating the interface and working with common elements</li>
              <li>Integration with Microsoft 365 and other services</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 2: Financial Management Fundamentals"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>General ledger setup and functionality</li>
              <li>Chart of accounts and financial dimensions</li>
              <li>Accounts payable and receivable processes</li>
              <li>Financial reporting and analysis</li>
              <li>Budget control and planning</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 3: Supply Chain Management Basics"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Product information management</li>
              <li>Inventory management processes</li>
              <li>Procurement and sourcing</li>
              <li>Sales and marketing operations</li>
              <li>Warehouse management essentials</li>
              <li>Transportation management</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 4: Manufacturing Fundamentals"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Production control concepts</li>
              <li>Bills of materials and routes</li>
              <li>Discrete, process, and lean manufacturing</li>
              <li>Production scheduling and planning</li>
              <li>Shop floor control</li>
              <li>Quality management</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 5: Project Management and Accounting"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Project types and structure</li>
              <li>Project budgeting and forecasting</li>
              <li>Resource management</li>
              <li>Project invoicing and revenue recognition</li>
              <li>Project reporting and analytics</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 6: Integration and Data Management"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Common Data Service integration</li>
              <li>Data entities and migration</li>
              <li>Office integration features</li>
              <li>Power Platform integration capabilities</li>
              <li>Business intelligence and reporting</li>
            </ul>
          }
        />
        <CourseAccordion
          title="Module 7: MB-920 Certification Preparation"
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
    Practice: <Practice course={"Microsoft"} subTopic={"MicrosoftDynamics365ERP"} />,
    FAQ: (
      <div className="faq-section">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="faq-container space-y-4">
          <div className="faq-item border-b pb-4">
            <div
              className="faq-question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(0)}
            >
              <h3 className="text-lg font-semibold">
                What is the MB-920 certification?
              </h3>
              {selectedQuestion === 0 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {selectedQuestion === 0 && (
              <div className="faq-answer mt-2 text-gray-700">
                The Microsoft Dynamics 365 Fundamentals Finance and Operations Apps (MB-920) certification validates your understanding of Dynamics 365 finance and operations apps, business value, deployment options, and basic functionality. It's an entry-level certification focused on ERP concepts within the Dynamics 365 ecosystem.
              </div>
            )}
          </div>

          <div className="faq-item border-b pb-4">
            <div
              className="faq-question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(1)}
            >
              <h3 className="text-lg font-semibold">
                Do I need prior experience with ERP systems to take this course?
              </h3>
              {selectedQuestion === 1 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {selectedQuestion === 1 && (
              <div className="faq-answer mt-2 text-gray-700">
                No prior experience with ERP systems is required. This is a fundamentals-level course designed for beginners who want to learn about Dynamics 365 finance and operations apps. However, basic knowledge of business processes and familiarity with Microsoft products is helpful.
              </div>
            )}
          </div>

          <div className="faq-item border-b pb-4">
            <div
              className="faq-question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(2)}
            >
              <h3 className="text-lg font-semibold">
                What's the difference between MB-920 and other Dynamics 365 certifications?
              </h3>
              {selectedQuestion === 2 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {selectedQuestion === 2 && (
              <div className="faq-answer mt-2 text-gray-700">
                MB-920 is a fundamentals certification focused on finance and operations apps (the ERP components of Dynamics 365). It serves as an entry point before moving to role-based certifications like Functional Consultant or Developer certifications, which are more specialized and require deeper knowledge in specific areas.
              </div>
            )}
          </div>

          <div className="faq-item border-b pb-4">
            <div
              className="faq-question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(3)}
            >
              <h3 className="text-lg font-semibold">
                How long does it take to prepare for the MB-920 exam?
              </h3>
              {selectedQuestion === 3 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {selectedQuestion === 3 && (
              <div className="faq-answer mt-2 text-gray-700">
                The preparation time varies depending on your background, but most students can prepare for the MB-920 exam in 4-6 weeks with dedicated study. Our course is structured to be completed in 30-40 hours of learning time, which you can spread according to your schedule.
              </div>
            )}
          </div>

          <div className="faq-item border-b pb-4">
            <div
              className="faq-question flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(4)}
            >
              <h3 className="text-lg font-semibold">
                Does this certification expire?
              </h3>
              {selectedQuestion === 4 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {selectedQuestion === 4 && (
              <div className="faq-answer mt-2 text-gray-700">
                Microsoft fundamentals certifications, including MB-920, do not expire. However, as Dynamics 365 applications evolve, it's recommended to stay updated with the latest features and functionalities through continuous learning.
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    Reviews: (
      <div className="testimonials">
        <h2 className="text-2xl font-bold mb-4">Student Testimonials</h2>
        <div className="testimonial-container space-y-6">
          <div className="testimonial bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                S
              </div>
              <div>
                <h4 className="font-bold">Shruti Verma</h4>
                <div className="flex text-yellow-400">
                  ★★★★★ <span className="text-gray-600 ml-1">5/5</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "As a business analyst transitioning to ERP consulting, this course provided an excellent foundation. The financial management modules were particularly helpful, and I passed the MB-920 exam on my first attempt!"
            </p>
          </div>

          <div className="testimonial bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                A
              </div>
              <div>
                <h4 className="font-bold">Aditya Kapoor</h4>
                <div className="flex text-yellow-400">
                  ★★★★★ <span className="text-gray-600 ml-1">5/5</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "Comprehensive course with excellent hands-on labs. The manufacturing and supply chain modules gave me practical knowledge I could apply immediately in my role. Worth every rupee!"
            </p>
          </div>

          <div className="testimonial bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                R
              </div>
              <div>
                <h4 className="font-bold">Rahul Sharma</h4>
                <div className="flex text-yellow-400">
                  ★★★★<span className="text-gray-400">★</span>{" "}
                  <span className="text-gray-600 ml-1">4/5</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "The practice exams were incredibly helpful for my certification preparation. Would have liked more real-world case studies, but overall a solid course that helped me advance in my career."
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="course-page bg-gray-100 min-h-screen">
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="confirmation-message fixed top-20 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          Item added to cart successfully!
        </div>
      )}
      
      {/* Hero Section */}
      <div className="hero-section relative bg-cover bg-center h-80" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Microsoft Dynamics 365 <br />
              Finance and Operations Apps (ERP)
            </h1>
            <p className="text-xl text-white mb-8">
              Master Microsoft's ERP solution and earn the MB-920 certification
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="pricing-content container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={microsoft} alt="Microsoft Logo" className="h-12 mr-4" />
            <div>
              <h2 className="text-xl font-bold">
                Microsoft Dynamics 365 ERP Fundamentals
              </h2>
              <p className="text-gray-600">Microsoft Certified: MB-920</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="price flex items-center">
              <p className="text-3xl font-bold text-blue-600">₹2,199</p>
              <p className="original-price text-gray-500 line-through ml-2">₹3,499</p>
            </div>
            <p className="limited-time text-sm text-green-600 font-semibold">
              Limited time offer: 5 days left at this price!
            </p>
            <div className="cta mt-2 flex space-x-2">
              <AddToCartButton onClick={handleAddToCart} />
              <button className="buy-now-btn bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-area container mx-auto px-4 py-8">
        <div className="content-container bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="tabs flex overflow-x-auto border-b">
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab px-6 py-3 text-sm font-medium ${
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

export default MicrosoftDynamics365ERP; 