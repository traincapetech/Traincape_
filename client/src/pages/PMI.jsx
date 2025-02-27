import React, { useEffect } from "react";
import banner from "../assets/ibmbanner.jpg";
import banner2 from "../assets/PMI.jpg";
import Card1 from "../assets/pmicard1.jpg";
import PMICourses from "../components/PMICourses";

const PMI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pmicourses = [
    {
      image: Card1,
      title: "CERTIFICATION COURSE",
      description: "PMI Project Management- Ready™ Courseware",
      price: "₹1149",
      url: "/IBMcourses",
    },
    //UNWANTED CARDS
    // {
    //   image: c,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Software Foundation Course C Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: foundationc,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM Software Foundation Course C++ Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: rdbms,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM RDBMS - Database Fundamentals Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
    //   image: sql,
    //   title: "CERTIFICATION COURSE",
    //   description: "IBM SQL and Relational Database 101 Certification Course",
    //   price: "₹3000",
    //   url: "/IBMcourses",
    // },
    // {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
            PMI Project Management
            </h1>
            <h5 className="text-sm md:text-lg lg:text-xl mt-4">
            The PMI Project Management Ready® certification is designed to test and validate foundational concepts and knowledge in project management.
            <br />
            This is an entry-level certification that does not require any prior work experience in project management and              <br />
              
              can help candidates take their first step towards preparing to become a Certified Associate in Project Management (CAPM)®.
              
             
            </h5>
          </div>
          <div className="hidden lg:block  mt-5 ">
            <img
              className="w-[28rem] h-64 transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
              src={banner2}
              alt="IBM Banner"
            />
          </div>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {pmicourses.map((course, index) => (
            <PMICourses
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

export default PMI;
