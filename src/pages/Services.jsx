import React, { useEffect } from "react";
import servicepage from "../css/Services.module.css";
import banner from "../assets/servicesBanner.svg";
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
import Consult from "../assets/smallImg.jpeg";
import { useNavigate } from "react-router-dom";
import project from "../assets/Project Planning.svg";
import arrow from "../assets/Process arrow.svg";
import Request from "../assets/Meeting-request.svg";
import Building from "../assets/Start Building.svg";

const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = () => {
    navigate("/Courses-details");
  };
  return (
    <div className={servicepage.container}>
      <div className={servicepage.banner}>
        <img src={banner} alt="Banner" />
      </div>
      <div className={servicepage.services}>
        <div className={servicepage.subSerices}>
          <div className={servicepage.service}>
            <img src={cloud} alt="Cloud services" />
            <h1>Cloud Services</h1>
            <p>
              Cloud services provide computing resources over the internet,
              allowing users to access and use them on-demand without
              maintaining the underlying infrastructure. These services offer
              benefits such as cost optimization, scalability, accessibility,
              reliability, and innovation. The main types are IaaS, PaaS, and
              SaaS.
            </p>
            <button className={servicepage.btn} onClick={handleClick}>
              Read More{" "}
            </button>
          </div>
          <div className={servicepage.service}>
            <img src={UI} alt="UI development" />
            <h1>UI Development</h1>
            <p>
              UI development involves designing and developing visual and
              interactive components for websites and applications. Key skills
              include HTML, CSS, JavaScript, responsive design, and
              accessibility. UI developers bridge the presentation and backend
              layers, creating intuitive interfaces. The job outlook is
              positive, with competitive salaries.
            </p>
            <button className={servicepage.btn} onClick={handleClick}>
              Read More{" "}
            </button>
          </div>
          <div className={servicepage.service}>
            <img src={Digital} alt="Digital Marketing" />
            <h1>Digital Marketing</h1>
            <p>
              Digital marketing uses online strategies and channels to promote
              products and services, connecting businesses with customers.
              Techniques include SEO, PPC, social media, content marketing, and
              leveraging offline media. It offers benefits like
              cost-effectiveness, wider reach, measurability, adaptability, and
              improved engagement.
            </p>
            <button className={servicepage.btn} onClick={handleClick}>
              Read More{" "}
            </button>
          </div>
          <div className={servicepage.service}>
            <img src={Web} alt="Web Development" />
            <h1>Web Development</h1>
            <p>
              Web development involves creating and maintaining websites and web
              applications. It includes frontend development (user interface),
              backend development (server-side logic), and full-stack
              development (both). Common languages are HTML, CSS, JavaScript.
              The process includes analysis, planning, design, content creation,
              testing, and maintenance. It is essential for establishing an
              online presence effectively.
            </p>
            <button className={servicepage.btn} onClick={handleClick}>
              Read More{" "}
            </button>
          </div>
          <div className={servicepage.service}>
            <img src={Software} alt="Software services" />
            <h1>Software Services</h1>
            <p>
              Software services include custom software development, web
              development, mobile app development, cloud computing, quality
              assurance, software maintenance, and consulting. These services
              help businesses achieve their goals by providing tailored
              solutions, ensuring quality, and offering ongoing support.
            </p>
            <button className={servicepage.btn} onClick={handleClick}>
              Read More{" "}
            </button>
          </div>
          <div className={servicepage.service}>
            <img
              src={softwareDevelopment}
              alt="Software Development Learnings"
            />
            <h1>Software Development</h1>
            <p>
              Software development is the process of designing, creating,
              testing, and maintaining computer programs and applications. It
              involves identifying needs, analyzing requirements, designing,
              developing, testing, deploying, and maintaining software. This
              field is essential for creating custom applications that automate
              processes and improve efficiency.
            </p>
            <button className={servicepage.btn} onClick={handleClick}>
              Read More{" "}
            </button>
          </div>
        </div>
      </div>
      <div className={servicepage.consult}>
        <img src={Consult} className={servicepage.img} alt="Consult Image" />
        <div className={servicepage.consultdiv}>
          <div className={servicepage.consultText}>
            <p
              style={{
                fontSize: "15px",
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
