import React, { useEffect } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/Microsoft-Office-Specilaists-600x314.jpg";
import Card1 from "../../assets/excel.png";
import Card2 from "../../assets/word.png";
import Card3 from "../../assets/powerpoint.png";
import Card4 from "../../assets/excelassociate.png";
import Card5 from "../../assets/wordassosiate.png";
import MicrosoftOffCourses from "../../components/MicrosoftOffCourses";

const MicrosoftOffice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const microsoftcourses = [
    {
        image: Card1,
        description: "Microsoft Office Specialist – Excel Expert Certification",
        price: "₹1149",
        url: "/IBMcourses",
      },
    {
      image: Card2,
      description: "Microsoft Office Specialist – Word Expert Certification",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card3,
      description: "Microsoft Office Specialist – PowerPoint Associate Certification ",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card4,
      description: "Microsoft Office Specialist – Excel Associate Certification",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card5,
      description: "Microsoft Office Specialist – Word Associate Certification",
      price: "₹1149",
      url: "/IBMcourses",
    },
  ];

  return (
    <>
      <div
        className="bg-gray-100 w-full relative contrast-75 h-[65vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-3xl  md:text-4xl lg:text-4xl font-bold font-serif ">
            Microsoft Office Specialist
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
            The Microsoft Office Specialist Program provides industry-leading assessments of skills and knowledge through our project-based testing, giving students and professionals real-world exercises to appraise their understanding of Microsoft Office.              <br />
              <br />
              This guarantees that every certified user can prove they have the ability to command the full features and functionality of Microsoft Office, preparing them for future academic or workforce opportunities.              Tally is an accounting software that helps businesses manage their finances and inventory. It's used by small and medium-sized businesses in many countries, including India.  
            </h5>
          </div>
          <div className="hidden lg:block xl:block  mt-5 p-5">
            <img    
              className="w-[28rem] h-64 transition-transform duration-300 ease-in-out hover:scale-110"
              src={banner2}
              alt="IBM Banner"
            />
          </div>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {microsoftcourses.map((course, index) => (
            <MicrosoftOffCourses
              key={index}
              image={course.image}
              price={course.price}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MicrosoftOffice;