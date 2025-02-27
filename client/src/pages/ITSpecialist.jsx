import React, { useEffect } from "react";
import banner from "../assets/ibmbanner.jpg";
import banner2 from "../assets/itbanner.jpg";
import Card1 from "../assets/itcour1.png";
import Card2 from "../assets/itcour2.png";
import Card3 from "../assets/itcour3.png";
import Card4 from "../assets/itcour4.png";
import Card5 from "../assets/itcour5.png";
import ITCourses from "../components/ITCourses";

const ITSpeacialist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ITcourses = [
    {
      image: Card1,
      title: "CERTIFICATION COURSE",
      description: "HTML5 Application Development LearnKey",
      price: "₹1149",
      url: "/IBMcourses",
    },
   
    {
      image: Card2,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – HTML and CSS LearnKey",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card3,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – Device Configuration and Management LearnKey",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card4,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – Databases LearnKey",
      price: "₹1149",
      url: "/IBMcourses",
    },
    {
      image: Card5,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – Cybersecurity LearnKey",
      price: "₹1149",
      url: "/IBMcourses",
    },
    //{
    //   image: tensorlow,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Deep Learning with TensorFlow Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: datasci,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Data Science Methodology Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: pydatasci,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Python for Data Science Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: Api,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Rest API Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: scala101,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Scala 101 Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: aglie,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Agile Methodologies Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: devops,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM DevOps Fundamentals Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: pydataanalis,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Data Analysis with Python Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: cloudfunda,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Cloud Fundamental Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: container,
    //   title: "CERTIFICATION COURSE",
    //   description:
    //     "IBM Introduction to Containers, Kubernetes and OpenShift V2 Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: bigdata,
    //   title: "CERTIFICATION COURSE",
    //   description:
    //     "IBM Introduction to Big Data, Hadoop and the Ecosystems Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: nodejs,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Node JS Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: mangodb,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM NoSQL – MongoDB Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: Machine,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Machine Learning with Python Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: js,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM JavaScript Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
  ];

  return (
    <>
      <div
        className="bg-gray-100 w-full relative contrast-75 h-[55vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold font-serif">
            Information Technology Specialist
            </h1>
            <h5 className="text-sm md:text-xl lg:text-xl mt-4">
            Etrainindia provides a full pathway solution that educators can use to prepare students for the Adobe Certified Professional certification.
            <br />
            From tailored learning materials and practice tests to Adobe endorsed certification exams, Etrainindia provides assistance every step of the way.              <br />
              
             
            </h5>
          </div>
          <div className="hidden lg:block  mt-5 p-5">
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
          {ITcourses.map((course, index) => (
            <ITCourses
              key={index}
              title={course.title}
              image={course.image}
              price={course.price}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
      </div>
      <></>
    </>
  );
};

export default ITSpeacialist;
