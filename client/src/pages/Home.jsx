// import React, { useEffect, useState } from "react";
// import home from "../css/Home.module.css";
// // import BannerImage from "../assets/hero-1-2.jpg.svg";
// import BannerImage from "../assets/Best Creative Business Banner Flyer - Made with PosterMyWall.jpg";
// import develop from "../assets/Development-Service.svg";
// import market from "../assets/Marketing-services.svg";
// import consult from "../assets/Consulting-service.svg";
// import { useNavigate } from "react-router-dom";
// import hero from "../assets/Heroimg.svg";

// import cloud from "../assets/Cloud-services.svg";
// import UI from "../assets/UI-development.svg";
// import Digital from "../assets/Digital marketing.svg";
// import Web from "../assets/Web development.svg";
// import Software from "../assets/software-services.svg";
// import softwareDevelopment from "../assets/Software-development-Learnings.svg";
// import Consult from "../assets/smallImg.jpeg";
// import lady from "../assets/Lady-Conversation.svg";
// import QuestionCard from "../components/QuestionCard";
// import emailjs from "@emailjs/browser";
// import connectingImg from "../assets/connecting people.svg";
// import { FaSquareWhatsapp } from "react-icons/fa6";
// import Typewriter from "typewriter-effect";

// const questionsAndAnswers = [
//   {
//     id: 1,
//     question: "What is aws certification?",
//     answer:
//       "AWS certification is a level of Amazon Web Services cloud expertise that an IT professional obtains after passing one or more exams the public cloud provider offers",
//   },
//   {
//     id: 2,

//     question: "What is microsoft certification?",
//     answer:
//       "Microsoft Certification is a program provided by Microsoft to validate an individual's expertise in various Microsoft technologies and products. These certifications are designed for IT professionals, developers, and business users to demonstrate their skills and knowledge in specific areas.",
//   },
//   {
//     id: 3,
//     question: "What is CompTia certification?",
//     answer:
//       "CompTIA (Computing Technology Industry Association) Certification is a series of professional certifications for IT professionals offered by CompTIA. These certifications validate an individual's skills and knowledge in various IT domains, ranging from foundational IT skills to advanced cybersecurity and infrastructure roles. CompTIA certifications are widely recognized and respected in the IT industry, providing a benchmark for assessing and verifying technical skills.",
//   },
// ];

// const Home = () => {
//   const [payoload, setPayoload] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     phoneNumber: "",
//     location: "",
//   });

//   const handleSubmit = (e) => {
//     // Your EmailJS serviceIdD and templateId and Public Key
//     const serviceId = "service_pjwgjas";
//     const templateId = "template_eueffas";
//     const publicId = "GmJ24jEVf6swWXgb0";

//     // Create a new object that contains dynamic template params
//     const [name, email, subject, message, phoneNumber, location] =
//       Object.values(payoload);
//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       from_subject: subject,
//       to_name: "Parichay singh Rana",
//       message: Name - ${name}\nEmail - ${email}\nCountry Name - ${location}\nWhatsapp-Number - ${phoneNumber}\nService Required - ${subject}\nMessage - ${message},
//     };
//     e.preventDefault();

//     //send the Email using EmailJS

//     emailjs.send(serviceId, templateId, templateParams, publicId).then(
//       (res) => {
//         alert("Email sent successfully!", res);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//     setPayoload({
//       name: "",
//       email: "",
//       phoneNumber: "",
//       subject: "",
//       message: "",
//       location: "",
//     });
//   };

//   const handleChange = (e) => {
//     setPayoload({ ...payoload, [e.target.name]: e.target.value });
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const navigate = useNavigate();
//   return (
//     <div className={home.container}>
//       <div className={home.banner}>
//         <div className={home.bannerImg}>
//           <img src={BannerImage} alt="Banner" />
//           {/* <video className={home.vdo} src={vdo} autoPlay loop controls /> */}
//         </div>
//         {/* <div>
//           <form action="submit">
//             <div className={home.officeMail}>
//               <div className={home.whatsapp}>
//                 <h1>Contact Form</h1>
//                 <FaSquareWhatsapp
//                   className={home.whatappicon}
//                   onClick={() =>
//                     (window.location.href = "https://wa.me/+441253928501")
//                   }
//                 />
//               </div>
//               <p>We're Ready To Connect You</p>
//               <div className={home.NameAndEmail}>
//                 <br />
//                 <input
//                   type="text"
//                   name="name"
//                   value={payoload.name}
//                   className={home.inputbox}
//                   placeholder="Your Name"
//                   required
//                   onChange={handleChange}
//                 />
//                 <br />
//                 <input
//                   type="email"
//                   name="email"
//                   value={payoload.email}
//                   className={home.inputbox}
//                   placeholder="Your Email"
//                   required
//                   onChange={handleChange}
//                 />
//                 <br />
//               </div>
//               <input
//                 type="text"
//                 name="location"
//                 value={payoload.location}
//                 className={home.inputbox}
//                 placeholder="Country Name"
//                 required
//                 onChange={handleChange}
//               />
//               <input
//                 type="number"
//                 name="phoneNumber"
//                 value={payoload.phoneNumber}
//                 className={home.inputbox}
//                 placeholder="Whatsapp Number"
//                 required
//                 onChange={handleChange}
//               />
//               <select
//                 name="subject"
//                 id={home.select}
//                 required
//                 onChange={handleChange}
//               >
//                 <option value="select course">Select Service</option>
//                 <option value="Cloud Computing">Cloud Computing</option>
//                 <option value="Cyber Security">Cyber Security</option>
//                 <option value="Project Management">Project Management</option>
//               </select>
//               <br />
//               <br />
//               <div className={home.textareadiv}>
//                 <textarea
//                   name="message"
//                   className={home.textarea}
//                   cols="30"
//                   rows="10"
//                   placeholder="Your Message"
//                   onChange={handleChange}
//                 ></textarea>
//                 <button className={home.contactBtn} onClick={handleSubmit}>
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div> */}
//         <div
//           className={home.bannerText}
//           data-aos="zoom-in-up"
//           data-aos-offset="200"
//           data-aos-duration="2000"
//         >
//           <h1>TOP IT</h1>
//           <h1>SUPPORT & MANAGEMENT</h1>
//           <div>
//             <Typewriter
//               options={{
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//                 strings: [
//                   " Discover top-tier IT support and management services designed to streamline your technology operations. our expert team is dedicated to providing efficient and effective solutions for your IT needs. ",
//                 ],
//               }}
//             />
//           </div>
//           <button onClick={() => navigate("/about-us")}>ABOUT US</button>
//         </div>
//       </div>
//       <div className={home.bannerImageDown} data-aos="fade-in">
//         <div
//           className={home.servicediv}
//           data-aos="zoom-in-up"
//           data-aos-offset="200"
//           data-aos-duration="2000"
//           data-aos-easing="ease-in-out"
//         >
//           <div className={home.imagediv}>
//             <img src={develop} alt="Development Services" />
//           </div>
//           <h1>Cloud Computing</h1>
//           <p>
//             Cloud computing is a model for delivering computing services over
//             the internet, allowing users to access and utilize resources such as
//             servers, storage, databases, networking, software, analytics, and
//             intelligence on-demand.
//           </p>
//           <button
//             className={home.readbtn}
//             onClick={() => navigate("/Courses-details")}
//           >
//             Read More
//           </button>
//         </div>
//         <div
//           className={home.servicediv}
//           data-aos="zoom-in-up"
//           data-aos-offset="200"
//           data-aos-duration="2000"
//           data-aos-easing="ease-in-out"
//         >
//           <div className={home.imagediv}>
//             <img src={market} alt="Marketing Services" />
//           </div>
//           <h1>Cyber Security</h1>
//           <p>
//             Cybersecurity is the practice of protecting systems, networks, and
//             data from digital attacks. It involves measures to prevent, detect,
//             and respond to threats such as malware, hacking, and data breaches.
//           </p>
//           <button
//             className={home.readbtn}
//             onClick={() => navigate("/Courses-details")}
//           >
//             Read More
//           </button>
//         </div>
//         <div
//           className={home.servicediv}
//           data-aos="zoom-in-up"
//           data-aos-offset="200"
//           data-aos-duration="2000"
//           data-aos-easing="ease-in-out"
//         >
//           <div className={home.imagediv}>
//             <img src={consult} alt="Consulting Services" />
//           </div>
//           <h1>Project Management</h1>
//           <p>
//             Project management is the process of leading the work of a team to
//             achieve all project goals within the given constraints. It involves
//             planning, executing, tracking, and completing projects with the help
//             of a project team.
//           </p>
//           <button
//             className={home.readbtn}
//             onClick={() => navigate("/Courses-details")}
//           >
//             Read More
//           </button>
//         </div>
//       </div>
//       <div
//         className={home.hero}
//         data-aos="zoom-in-up"
//         data-aos-offset="200"
//         data-aos-duration="2000"
//       >
//         <div className={home.heroImg}>
//           {/* <img src={hero} alt="Hero Image" /> */}
//           <iframe
//             className={home.vdo}
//             src="https://www.youtube.com/embed/cZjkxmzo1Xg?autoplay=1&loop=1&playlist=cZjkxmzo1Xg&controls=1&mute=1"
//             allow="autoplay; encrypted-media"
//             allowFullScreen

//             frameBorder="0"
//           ></iframe>
//         </div>
//         <div className={home.heroText}>
//           <h3>GET BEST IT SOLUTIONS 2022</h3>
//           <h1>
//             <Typewriter
//               options={{
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//                 strings: ["TRUST OUR BEST IT SOLUTIONS FOR YOUR BUSINESS"],
//               }}
//             />
//           </h1>
//           <p>
//             Compellingly mesh cross-platform portals through functional human
//             capital world-class architectures for orthogonal initiatives.
//             Assertively benchmark visionary quality vectors after covalent
//             e-tailers. Intrinsicly enhance 24/7 users and supply process
//           </p>
//           <div className={home.call}>
//             <FaSquareWhatsapp className={home.whatappicon} />
//             <div>
//               <p>24 HOURS SERVICE AVAILABLE</p>
//               <h4
//                 onClick={() =>
//                   (window.location.href = "https://wa.me/+916280281505")
//                 }
//               >
//                 Chat With Us: +91 6280281505
//               </h4>
//             </div>
//           </div>
//           <div className={home.btnDiv}>
//             <button
//               className={home.herobtn}
//               onClick={() => navigate("/about-us")}
//             >
//               ABOUT US
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={home.heroDown}>
//         <p>OUR LATEST SERVICES</p>
//         <h1>
//           WHAT KIND OF SERVICES <br /> WE ARE OFFERING
//         </h1>
//         <div className={home.services}>
//           <div className={home.subSerices}>
//             <div
//               className={home.service}
//               data-aos="zoom-in-up"
//               data-aos-offset="200"
//               data-aos-duration="2000"
//             >
//               <img src={cloud} alt="Cloud services" />
//               <h2>Cloud Services</h2>
//               <p>
//                 Cloud services provide computing resources over the internet,
//                 allowing users to access and use them on-demand without
//                  maintaining the underlying infrastructure. These services offer
//                 benefits such as cost optimization, scalability, accessibility,
//                 reliability, and innovation. The main types are IaaS, PaaS, and
//                 SaaS.
//               </p>
//               <button
//                 className={home.btn}
//                 onClick={() => navigate("/Courses-details")}
//               >
//                 Read More{" "}
//               </button>
//             </div>
//             <div
//               className={home.service}
//               data-aos="zoom-in-up"
//               data-aos-offset="200"
//               data-aos-duration="2000"
//             >
//               <img src={UI} alt="UI development" />
//               <h2>UI Development</h2>
//               <p>
//                 UI development involves designing and developing visual and
//                 interactive components for websites and applications. Key skills
//                 include HTML, CSS, JavaScript, responsive design, and
//                 accessibility. UI developers bridge the presentation and backend
//                 layers, creating intuitive interfaces. The job outlook is
//                 positive, with competitive salaries.
//               </p>
//               <button
//                 className={home.btn}
//                 onClick={() => navigate("/Courses-details")}
//               >
//                 Read More{" "}
//               </button>
//             </div>
//             <div
//               className={home.service}
//               data-aos="zoom-in-up"
//               data-aos-offset="200"
//               data-aos-duration="2000"
//             >
//               <img src={Digital} alt="Digital Marketing" />
//               <h2>Digital Marketing</h2>
//               <p>
//                 Digital marketing uses online strategies and channels to promote
//                 products and services, connecting businesses with customers.
//                 Techniques include SEO, PPC, social media, content marketing,
//                 and leveraging offline media. It offers benefits like
//                 cost-effectiveness, wider reach, measurability, adaptability,
//                 and improved engagement.
//               </p>
//               <button
//                 className={home.btn}
//                 onClick={() => navigate("/Courses-details")}
//               >
//                 Read More{" "}
//               </button>
//             </div>
//             <div
//               className={home.service}
//               data-aos="zoom-in-up"
//               data-aos-offset="200"
//               data-aos-duration="2000"
//             >
//               <img src={Web} alt="Web Development" />
//               <h2>Web Development</h2>
//               <p>
//                 Web development involves creating and maintaining websites and
//                 web applications. It includes frontend development (user
//                 interface), backend development (server-side logic), and
//                 full-stack development (both). Common languages are HTML, CSS,
//                 JavaScript. The process includes analysis, planning, design,
//                 content creation, testing, and maintenance. It is essential for
//                 establishing an online presence effectively.
//               </p>
//               <button
//                 className={home.btn}
//                 onClick={() => navigate("/Courses-details")}
//               >
//                 Read More{" "}
//               </button>
//             </div>
//             <div
//               className={home.service}
//               data-aos="zoom-in-up"
//               data-aos-offset="200"
//               data-aos-duration="2000"
//             >
//               <img src={Software} alt="Software services" />
//               <h2>Software Services</h2>
//               <p>
//                 Software services include custom software development, web
//                 development, mobile app development, cloud computing, quality
//                 assurance, software maintenance, and consulting. These services
//                 help businesses achieve their goals by providing tailored
//                 solutions, ensuring quality, and offering ongoing support.
//               </p>
//               <button
//                 className={home.btn}
//                 onClick={() => navigate("/Courses-details")}
//               >
//                 Read More{" "}
//               </button>
//             </div>
//             <div
//               className={home.service}
//               data-aos="zoom-in-up"
//               data-aos-offset="200"
//               data-aos-duration="2000"
//             >
//               <img
//                 src={softwareDevelopment}
//                 alt="Software Development Learnings"
//               />
//               <h2>Software Development</h2>
//               <p>
//                 Software development is the process of designing, creating,
//                 testing, and maintaining computer programs and applications. It
//                 involves identifying needs, analyzing requirements, designing,
//                 developing, testing, deploying, and maintaining software. This
//                 field is essential for creating custom applications that
//                 automate processes and improve efficiency.
//               </p>
//               <button
//                 className={home.btn}
//                 onClick={() => navigate("/Courses-details")}
//               >
//                 Read More{" "}
//               </button>
//             </div>
//           </div>

//           <div
//             className={home.consult}
//             data-aos="fade-left"
//             data-aos-offset="200"
//             data-aos-duration="2000"
//           >
//             <img src={Consult} className={home.img} alt="Consult Image" />
//             <div className={home.consultdiv}>
//               <div className={home.consultText}>
//                 <p
//                   style={{
//                     fontSize: "15px",
//                     fontFamily: "poppins",
//                     color: "rgb(223, 210, 210)",
//                     fontWeight: "lighter",
//                     textAlign: "center",
//                   }}
//                 >
//                   We are here to answer your questions 24/7
//                 </p>
//                 <h1
//                   style={{
//                     fontSize: "40px",
//                     fontFamily: "poppins",
//                     color: "rgb(223, 210, 210)",
//                     fontWeight: "bold",
//                     textAlign: "center",
//                   }}
//                 >
//                   Need A Consultation?
//                 </h1>
//               </div>
//               <div className={home.consultbtn}>
//                 <button
//                   className={home.btn2}
//                   onClick={() => navigate("/contact-us")}
//                 >
//                   GET A CONSULTATION
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className={home.help}
//         data-aos="fade-right"
//         data-aos-offset="200"
//         data-aos-duration="2000"
//       >
//         <div className={home.ladyIMG}>
//           <img src={lady} alt="Image of lady conversation" />
//         </div>
//         <div className={home.helpText}>
//           <div className={home.helpTextDiv}>
//             <p>TALK ABOUT SOMETHING</p>
//             <h1>HOW CAN WE HELP YOU?</h1>
//             {questionsAndAnswers.map((item) => {
//               return (
//                 <div key={item.id}>
//                   <QuestionCard {...item} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div
//         className={home.connecting}
//         data-aos="flip-up"
//         data-aos-offset="200"
//         data-aos-duration="2000"
//       >
//         <div className={home.ConnectingText}>
//           <h2>THE GREAT COMPANY SKILL</h2>
//           <h1>CONNECTING PEOPLE AND BUILD TECHNOLOGY</h1>
//           <p>
//             Energistically evisculate an expanded array of meta-services after
//             cross-media strategic theme areas. Interactively simplify
//             interactive customer service before fully tested relationship
//             parallel task high standards...
//           </p>
//         </div>
//         <div className={home.connectingImg}>
//           <img src={connectingImg} alt="Connecting Image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

//Updated By Sumit Jain //

import React from "react";
import style from "../css/Home.module.css";
import team from "../assets/team.jpeg";
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";
import card3 from "../assets/card3.jpeg";
import card4 from "../assets/card4.jpeg";
import card5 from "../assets/card5.jpeg";
import card6 from "../assets/card6.jpeg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Rotation from "../components/Rotation";
import HomeBanner from "../components/HomeBanner";
import banner from "../assets/banner.json";
import HomeSlider from "../components/HomeSlider";
import Slider from "react-slick";
import Herobg from '../assets/herobg.jpg'


// logo images
import comptia from "../assets/comptia-2.webp";
import pecb from "../assets/PECB1.png";
import certiport from "../assets/certiportlogo.png";
import pearson from "../assets/pearsonlogo.png";
import etraind from "../assets/etrainlogo.png";
// Import Partner Logos
import Logo1 from "../assets/SBS.png";
import Logo2 from "../assets/ThreatMatrix.png";
import Logo3 from "../assets/Digitalearn.webp";
import Logo4 from "../assets/Gruslabs.svg";
import Logo5 from "../assets/MSA.png";
import Logo6 from "../assets/spectre.webp";

const Home = () => {
  const bannerText = {
    title: "Want a Suggestion?",
    type1: "Cloud Computing",
    type2: " Cyber Security",
    type3: "Project Management",
    type4: "Development",
    ctaText: "Get Started",
    ctaLink: "/get-started", // Link to the page you want to navigate to
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const partners = [
    { logo: Logo1, url: "https://sbs-mea.com/" },
    { logo: Logo2, url: "https://threatmatrix.co.uk/" },
    {
      logo: Logo3,
      url: "https://digitalearnsolution.com/",
    },
    { logo: Logo4, url: "https://www.gruslabs.com/" },
    { logo: Logo5, url: "https://msasoftware.in/" },
    { logo: Logo6, url: "https://spectreme.ai/" },
  ];

  return (
    <div>
       <div className="  md:pt-0 lg:pt-0  " 
       style={{ backgroundImage: `url(${Herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <HomeBanner text={bannerText} animationData={banner} />
      </div>

      {/* Logos Section */}
      <div className="my-10">
        <p className="bg-gray-200 text-center font-bold uppercase text-4xl py-10">
          Vendors and Providers
        </p>
        <Slider {...settings}>
          {[comptia, pecb, certiport, pearson, etraind].map((logo, index) => (
            <div key={index} className="flex justify-center p-3">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="object-cover w-full max-w-[200px] mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* <div>
        { Mobile View - Visible only on small screens }
        <div className="block md:hidden">
          <HomeSlider />
        </div>

        Rotation Component - Visible on medium and larger screens
        <div className="hidden md:block">
          <Rotation />
        </div>
      </div> */}

<div className="w-full px-8  md:px-24 items-center sm:h-[10rem] md:h-[35rem]">
  <h1 className="text-center text-3xl md:text-4xl font-semibold">
    About Us
  </h1>
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6">
    {/* Text Section */}
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Empowering Your Business with Seamless IT Solutions
      </h2>
      <p className="mt-4 text-sm md:text-base">
        At our company, we specialize in delivering premier IT support and
        management services tailored to optimize your technology operations. Our
        mission is to empower businesses with innovative, reliable, and scalable
        IT solutions that drive success. With a commitment to excellence, we
        ensure your technology works flawlessly so you can focus on what truly
        matters—growing your business.
      </p>
      <NavLink to="/about-us">
        <button className="bg-blue-500  text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 mt-5 text-sm md:text-base">
          About Us
        </button>
      </NavLink>
    </div>

    {/* Image Section */}
    <div className="flex-1 hidden md:block">
      <img src={team} alt="Team" className="w-full h-[30rem] rounded-lg" />
    </div>
  </div>
</div>

      {/* Services Section */}

      <div className={style.card}>
        <h2>Our Latest Services</h2>
        <div className={style.cards}>
          <div className={style.card1}>
            <img src={card1} alt="" />
            <div className={style.cardtext}>
              <h3>Cloud Services</h3>
              <h6>
                Cloud services provide computing resources over the internet,
                allowing users to access and use them on-demand without
                maintaining the underlying infrastructure
              </h6>
            </div>
          </div>
          <div className={style.card2}>
            <img src={card2} alt="" />
            <div className={style.cardtext}>
              <h3>UI Design</h3>
              <h6>
                UI design involves designing and developing visual and
                interactive components for websites and applications. Key skills
                include HTML, CSS, JavaScript, responsive design, and
                accessibility.
              </h6>
            </div>
          </div>
          <div className={style.card1}>
            <img src={card3} alt="" />
            <div className={style.cardtext}>
              <h3>Digital Marketing</h3>
              <h6>
                Digital marketing uses online strategies and channels to promote
                products and services, connecting businesses with customers.
                Techniques include SEO, PPC, social media, content marketing,
                and leveraging offline media.
              </h6>
            </div>
          </div>

          <div className={style.card2}>
            <img src={card4} alt="" />
            <div className={style.cardtext}>
              <h3>Web Development</h3>
              <h6>
                Web development involves creating and maintaining websites and
                web applications. It includes frontend development (user
                interface), backend development (server-side logic), and
                full-stack development (both). Common languages are HTML, CSS,
                JavaScript.
              </h6>
            </div>
          </div>
          <div className={style.card1}>
            <img src={card5} alt="" />
            <div className={style.cardtext}>
              <h3>Software Services</h3>
              <h6>
                Software services include custom software development, web
                development, mobile app development, cloud computing, quality
                assurance, software maintenance, and consulting.{" "}
              </h6>
            </div>
          </div>
          <div className={style.card2}>
            <img src={card6} alt="" />
            <div className={style.cardtext}>
              <h3>Software Development</h3>
              <h6>
                Software development is the process of designing, creating,
                testing, and maintaining computer programs and applications. It
                involves identifying needs, analyzing requirements, designing,
                developing, testing, deploying, and maintaining software.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with YouTube Video */}
      <div
        className={style.hero}
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-duration="2000"
      >
        <div className={style.heroImg}>
          <iframe
            className={style.vdo}
            src="https://www.youtube.com/embed/cZjkxmzo1Xg?autoplay=1&loop=1&playlist=cZjkxmzo1Xg&controls=1&mute=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
        <div className={style.heroText}>
          <h3>GET BEST IT SOLUTIONS 2022</h3>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["TRUST OUR BEST IT SOLUTIONS FOR YOUR BUSINESS"],
              }}
            />
          </h1>
          <p>
            Compellingly mesh cross-platform portals through functional human
            capital world-class architectures for orthogonal initiatives.
          </p>
          <div className={style.call}>
            <Link to="https://wa.me/+916280281505" target="_blank">
              <FaSquareWhatsapp className={style.whatappicon} />
            </Link>
            <div>
              <p>24 HOURS SERVICE AVAILABLE</p>
              <h4
                onClick={() =>
                  (window.location.href = "https://wa.me/+916280281505")
                }
              >
                Chat With Us: +91 6280281505
              </h4>
            </div>
          </div>
          <div className={style.btnDiv}>
            <button
              className={style.herobtn}
              onClick={() => navigate("/contact-us")}
            >
              Contact US
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-cyan-50 p-10 px-4 lg:px-28">
        <h2 className="text-5xl font-mono font-extrabold text-center mb-10">
          <span className="text-7xl font-serif">W</span>hy Students Are Choosing
          Traincape Technology
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { count: "1,00,000+", label: "Sales" },
            { count: "5,00+", label: "Certification Courses" },
            { count: "8K+", label: "Users" },
            { count: "30,000,000+", label: "Hours" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl font-semibold">{item.count}</span>
              <p className="text-base text-blue-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Partner section */}
      <div className="bg-gray-100 w-full text-center mt-6 sm:mt-8 md:mt-0 p-4 sm:p-6 md:p-10">
        <p className="text-lg sm:text-xl font-medium text-gray-600 mb-6">
          Empowering partnerships and fostering teamwork to achieve unparalleled
          excellence. Our dedicated approach and shared vision create a synergy
          that fuels innovation and drives sustainable success for all.
        </p>

        <div className="flex flex-wrap justify-center  gap-4 sm:gap-6 md:gap-8 mb-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="hover:scale-110 w-40  h-20 sm:h-24 md:h-28 lg:h-32 rounded-full overflow-hidden flex items-center justify-center bg-white"
            >
              <a
                href={partner.url}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[85%] h-[85%] object-contain"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex gap-9">
          <button
            onClick={() => {
              navigate("/contact-us");
            }}
            className="mt-4 bg-black w-60 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Become a partner →
          </button>

          <button
            onClick={() => {
              navigate("/PartnerPage");
            }}
            className="mt-4 bg-gray-400 w-72 text-black border-gray-400 border-2 uppercase px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-all"
          >
            Partners
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;