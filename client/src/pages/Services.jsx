import React, { useEffect } from "react";
import servicepage from "../css/Services.module.css";
import banner from "../assets/servicesBanner.webp";
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
// import Consult from "../assets/smallImg.jpeg";
import { useNavigate } from "react-router-dom";
import project from "../assets/Project Planning.svg";
import arrow from "../assets/Process arrow.svg";
import Request from "../assets/Meeting-request.svg";
import Building from "../assets/Start Building.svg";
import CloudImg from "../assets/cloud.jpg";
import UiUx from "../assets/uiux.jpg";
import DigitalImg from "../assets/digital.jpg";
import Saas from "../assets/saas.jpg";
import SoftwareImg from "../assets/software.jpeg";
import webImg from "../assets/web.png";

const servicesData = [
  {
    title: "Cloud Services",
    description:
      "Cloud services provide computing resources over the internet, allowing users to access and use them on-demand without maintaining the underlying infrastructure. These services offer benefits such as cost optimization, scalability, accessibility, reliability, and innovation.",
    image: cloud,
    banner: CloudImg,
  },
  {
    title: "UI Development",
    description:
      "UI development involves designing and developing visual and interactive components for websites and applications. Key skills include HTML, CSS, JavaScript, responsive design, and accessibility.",
    image: UI,
    banner: UiUx,
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing uses online strategies and channels to promote products and services, connecting businesses with customers. Techniques include SEO, PPC, social media, content marketing, and leveraging offline media.",
    image: Digital,
    banner: DigitalImg,
  },
  {
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites and web applications. It includes frontend development, backend development, and full-stack development.",
    image: Web,
    banner: webImg,
  },
  {
    title: "Software Services",
    description:
      "Software services include custom software development, web development, mobile app development, cloud computing, quality assurance, software maintenance, and consulting.",
    image: Software,
    banner: Saas,
  },
  {
    title: "Software Development",
    description:
      "Software development is the process of designing, creating, testing, and maintaining computer programs and applications. It is essential for creating custom applications that automate processes and improve efficiency.",
    image: softwareDevelopment,
    banner: SoftwareImg,
  },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (service) => {
    navigate("/service-detail", { state: { service } }); // Pass service data through state
  };

  return (
    <div className="">
      <div className="relative w-full bg-contain bg-[#152B54]">
        <img
          src={banner}
          alt="Banner"
          className="md:h-[60vh] h-[30vh] w-full opacity-50"
        />
      </div>
      <div className="max-w-7xl text-center mx-auto py-8">
        <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Home</span>
          </button>
          <div className="flex items-center text-gray-500 font-bold">
            <span>{" > "}</span>
            <span className="ml-4">Our Services</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-24 mx-auto object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                onClick={() => handleClick(service)} // Pass the service object
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={servicepage.consult}>
        <img
          src="https://i.pinimg.com/736x/b5/fc/e2/b5fce2660baac71920aa53a7f2bc0265.jpg"
          className={servicepage.img}
          alt="Consult Image"
        />
        <div className={servicepage.consultdiv}>
          <div className={servicepage.consultText}>
            <p
              style={{
                fontSize: "17px",
                fontFamily: "poppins",
                color: "rgb(223, 210, 210)",
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              We are here to answer your questions 24/7
            </p>
            <h1
              style={{
                fontSize: "40px",
                fontFamily: "poppins",
                color: "rgb(223, 210, 210)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Need A Consultation?
            </h1>
          </div>
          <div className={servicepage.consultbtn}>
            <button
              className={servicepage.btn2}
              onClick={() => navigate("/contact-us")}
            >
              GET A CONSULTATION
            </button>
          </div>
        </div>
      </div>
      <div className={servicepage.specializationContainer}>
        <div className={servicepage.specializationDiv}>
          <h3>WHAT WE DO FOR YOU</h3>
          <h2>Our Specialization</h2>
          <div className={servicepage.specialization}>
            <div>
              <img src={project} alt="" />
              <h1>Project Planning</h1>
              <p>
                Project planning involves defining objectives, scope, budget,
                timeline, and deliverables to manage resources and ensure
                project success.
              </p>
            </div>

            <div>
              <img src={arrow} className={servicepage.arrow} alt="" />
            </div>

            <div>
              <img src={Request} alt="" />
              <h1>Request A Meeting </h1>
              <p>
                A meeting request email includes a clear subject, polite
                introduction, meeting details, and flexibility for alternative
                times. Best practices are a compelling subject line,
                introduction, explaining purpose, suggesting times.
              </p>
            </div>
            <div>
              <img src={arrow} className={servicepage.arrow} alt="" />
            </div>

            <div>
              <img src={Building} alt="" />
              <h1>Start Building Project</h1>
              <p>
                To start building a project, have a clear plan, understand
                requirements, break tasks into smaller steps, collaborate with
                team members, and focus on learning through practical projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
