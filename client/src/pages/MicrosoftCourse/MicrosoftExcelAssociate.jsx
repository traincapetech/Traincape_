import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../components/CartContext';
import AddToCartButton from '../../components/AddToCartButton';

const MicrosoftExcelAssociate = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAnswer = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const handleAddToCart = () => {
    const product = {
      id: 'microsoft-excel-associate',
      name: 'Microsoft Excel Associate Certification',
      price: 1299,
      image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    };

    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-md z-50 transition-all duration-300">
          Item added to cart successfully!
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" 
              alt="Microsoft Excel Logo" 
              className="h-48 w-48 object-contain bg-white p-4 rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-4">Microsoft Excel Associate Certification</h1>
            <p className="text-xl">Master Essential Spreadsheet Skills for Business and Data Analysis</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">₹1,299</h2>
              <div className="flex items-center">
                <p className="text-gray-500 line-through mr-2">₹1,799</p>
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">28% off</span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">Limited time offer: 3 days left at this price!</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <AddToCartButton onClick={handleAddToCart} />
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200">
            <button className="px-6 py-3 text-green-600 border-b-2 border-green-600 font-medium">Overview</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Curriculum</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Career Paths</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">FAQ</button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium">Reviews</button>
          </div>

          {/* Course Overview */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              The Microsoft Excel Associate Certification validates your fundamental skills in using Excel to create and edit professional-grade spreadsheets. This certification demonstrates your ability to work with data, formulas, functions, charts, and tables—essential skills for today's data-driven workplace. As an Excel Associate, you'll have the foundation needed to analyze data, create visualizations, and develop business-critical spreadsheets.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
              <p className="text-gray-700">
                Excel proficiency is consistently ranked among the most in-demand skills by employers across all industries. Whether you're working in finance, marketing, operations, or administration, Excel skills are essential for data analysis, reporting, and decision-making. This certification serves as official validation of your Excel skills and gives you a competitive edge in the job market.
              </p>
            </div>

            {/* Course Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                <p className="text-gray-600">3-5 weeks, self-paced</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Skill Level</h3>
                <p className="text-gray-600">Beginner to Intermediate</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Job Relevance</h3>
                <p className="text-gray-600">Data Analyst, Office Administrator, Business Analyst</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Microsoft Office Specialist: Excel Associate (Excel and Excel 2019)</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Create and manage worksheets and workbooks</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Manage data cells and ranges</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Create tables and manage table data</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Apply formulas and functions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Create and format charts</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Perform data analysis and business intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Work with PivotTables and PivotCharts</span>
                    </li>
                    <li className="flex items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                      <span>Collaborate and share workbooks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Opportunities</h2>
              <p className="text-gray-700 mb-4">With Microsoft Excel Associate certification, you can enhance your career in these roles:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-green-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Data Analyst</strong>
                    <span className="text-gray-600"> - ₹3,50,000 - ₹6,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-green-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Office Administrator</strong>
                    <span className="text-gray-600"> - ₹2,80,000 - ₹4,50,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-green-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Business Analyst</strong>
                    <span className="text-gray-600"> - ₹4,00,000 - ₹7,00,000 per year</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faArrowRight} className="text-green-500 mt-1 mr-2" />
                  <div>
                    <strong className="text-gray-800">Financial Analyst</strong>
                    <span className="text-gray-600"> - ₹4,50,000 - ₹8,00,000 per year</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose This Course */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose This Course</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Industry-recognized Microsoft certification</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Hands-on practice with real-world business scenarios</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Learn essential data analysis and visualization skills</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Increase your productivity and efficiency with spreadsheets</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2" />
                  <span>Foundation for advancing to Excel Expert certification</span>
                </li>
              </ul>
            </div>

            {/* Exam Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exam Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Exam Format</h3>
                  <p className="text-gray-600">Performance-based, in-application testing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                  <p className="text-gray-600">45 minutes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Passing Score</h3>
                  <p className="text-gray-600">700 out of 1000 points</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Additional Info</h3>
                  <p className="text-gray-600">Delivered by Certiport, Valid for life</p>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(1)}
                  >
                    <h3 className="font-medium text-gray-800">Do I need prior experience with Excel to take this course?</h3>
                    <span className="text-xl font-bold text-green-500">{selectedQuestion === 1 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 1 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        While basic familiarity with Excel is helpful, this course is designed to start with the fundamentals and gradually build your skills. Complete beginners can succeed, but you'll need to be comfortable with basic computer operations. If you've used Excel casually before, you'll likely pick up the concepts more quickly.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(2)}
                  >
                    <h3 className="font-medium text-gray-800">What's the difference between Excel Associate and Excel Expert certifications?</h3>
                    <span className="text-xl font-bold text-green-500">{selectedQuestion === 2 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 2 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        The Excel Associate certification focuses on fundamental skills needed for creating and editing basic spreadsheets, working with common formulas and functions, and creating standard charts. The Excel Expert certification covers advanced topics like complex data analysis, PivotTables, advanced formulas, macros, and data validation. Many professionals start with the Associate certification and later pursue the Expert level as they advance in their careers.
                      </p>
                    </div>
                  )}
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    onClick={() => toggleAnswer(3)}
                  >
                    <h3 className="font-medium text-gray-800">Will I get access to practice files and sample exams?</h3>
                    <span className="text-xl font-bold text-green-500">{selectedQuestion === 3 ? '−' : '+'}</span>
                  </div>
                  {selectedQuestion === 3 && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">
                        Yes, this course includes comprehensive practice files that simulate real-world business scenarios, allowing you to apply what you've learned. You'll also receive sample exams that mirror the format and difficulty of the actual certification exam, helping you build confidence and identify areas where you might need additional practice before taking the official exam.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Student Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "The Excel Associate certification transformed how I work with data. I'm now saving hours each week with the formulas and techniques I learned. My manager was impressed when I automated our monthly reports, and I received a promotion within 6 months of completing the course!"
                  </p>
                  <h4 className="font-medium text-gray-800">- Amit R., Business Analyst</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-4 italic">
                    "As a recent graduate, I was looking for ways to stand out to employers. Adding the Excel Associate certification to my resume definitely got me more interviews, and I'm now working as a data analyst. The skills I learned are used every day in my job, and I'm already planning to get the Expert certification next."
                  </p>
                  <h4 className="font-medium text-gray-800">- Sanya P., Data Analyst</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftExcelAssociate; 