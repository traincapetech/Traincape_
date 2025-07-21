//About.jsx

// import React, { useEffect } from "react";
// // import aboutus from "../css/AboutUS.module.css";
// import aboutus from "../css/AboutUS.module.css";
// import banner from "../assets/about-us-new.jpeg";
// import { SiAmazonsimpleemailservice } from "react-icons/si";
// import { SiEsotericsoftware } from "react-icons/si";
// import { MdCall } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa6";
// import childimg from "../assets/disccuss.jpg";
// import Consult from "../assets/smallImg.jpeg";
// import { useNavigate } from "react-router-dom";
// import traincapeInfo from "../assets/T-certificate-details.png";
// import review from "../assets/Feedback Gif.gif";
// import { Link } from "react-router-dom";
// import Slider from "../components/slider/Slider";

// const AboutUS = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const handlePdf = () => {
//     const pdfUrl =
//       "https://drive.google.com/uc?export=download&id=1NdZDoLk-q9saDgfrWzNQ9mLIgUZHGKg8";
//     window.open(pdfUrl);
//   };
//   return (
//     <div className={aboutus.container}>
//       <div className={aboutus.banner}>
//         <img src={banner} alt="Default image" />
//         <h1>About Us</h1>
//       </div>
//       <div className={aboutus.PdfDiv}>
//         <img src={traincapeInfo} alt="PDF IMAGE" className={aboutus.pdfImg} />
//         <div className={aboutus.pdftext}>
//           <div className={aboutus.textpdf}>
//             <h1>
//               Traincape Technology Pvt Ltd was founded in 2021 by Parichay Singh
//               Rana with a vision to revolutionize the way businesses approach
//               technology. With years of experience in the industry, we
//               recognized the need for a company that could provide tailored,
//               reliable, and cutting-edge tech solutions. Our mission is to
//               empower businesses by leveraging the latest technologies and
//               innovations to drive growth, efficiency, and innovation. Our team
//               of experts has extensive experience in developing and implementing
//               custom software solutions, mobile apps, and web applications that
//               meet the unique needs of our clients. We pride ourselves on our
//               ability to understand our clients' business goals and develop
//               solutions that align with their objectives.
//             </h1>
//             <button className={aboutus.pdfDownloadBtn} onClick={handlePdf}>
//               Download Our Presentation
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={aboutus.parent}>
//         <div className={aboutus.child1}>
//           <h4>Get Best IT Solutiion 2022</h4>
//           <h1>Inspiring Tech Needs For Bussiness</h1>
//           <p>
//             Traincape Technology was founded in 2021 by Parichay Singh Rana with
//             a vision to revolutionize the way businesses approach technology.
//             With years of experience in the industry, we recognized the need for
//             a company that could provide tailored, reliable, and cutting-edge
//             tech solutions.
//           </p>
//           <div className={aboutus.childdiv}>
//             <div className={aboutus.call}>
//               <div className={aboutus.icondiv}>
//                 <FaWhatsapp className={aboutus.icon} />
//               </div>
//               <div style={{ textAlign: "center" }}>
//                 <h2>WhatsApp To Ask Any Query</h2>
//                 <Link
//                   className={aboutus.link}
//                   to="https://wa.me/+916280281505"
//                   target="_blank"
//                 >
//                   +91 6280281505
//                 </Link>
//               </div>
//             </div>
//             <div className={aboutus.border}></div>
//             <div className={aboutus.founder}>
//               <p>Founder & CEO</p>
//               <h3>Parichay</h3>
//             </div>
//           </div>
//         </div>
//         <div className={aboutus.child2}>
//           <img src={childimg} alt="Child Image" />
//         </div>
//       </div>

//       {/* <div className={aboutus.Review}>
//         <div className={aboutus.ReviewDiv}>
//           <div className={aboutus.Quote}>
//             <p>OUR BEST REVIEWS</p>
//             <h1>Inspiring Tech Needs For Business</h1>
//           </div>
//           <div className={aboutus.vdobtn}>
//           </div>
//         </div>
//         <div className={aboutus.ReviewPersonDiv}>
//           <div className={aboutus.Reviewdiv1}>
//             <div className={aboutus.ReviewPerson}>
//               <img
//                 src="https://lh3.googleusercontent.com/a/ACg8ocI9VN6rcL2ZiH4q_UjppPI_CwuPobfiO3NOzKzXTVx0GDydug=w75-h75-p-rp-mo-br100"
//                 alt="review data"
//               />
//               <p>
//                 These guys are awesome 🤩. Whatever you wanna do just tell them.
//                 They offer comprehensive training programs for all level I.T
//                 programs.
//               </p>
//             </div>
//             <h1>DA BRO's</h1>
//             <h2>IT Customer</h2>
//           </div>
//           <div className={aboutus.Reviewdiv1}>
//             <div className={aboutus.ReviewPerson}>
//               <img src={jasveer} alt="review 1" />
//               <p>
//                 I did my azure training and certification from Traincape
//                 technology is just smooth experience. Going work on more goals
//                 in near future. Thanks Parichay and team.
//               </p>
//             </div>
//             <h1>Jasvir Gill</h1>
//             <h2>Azure Training</h2>
//           </div>
//         </div>
//       </div> */}
//       <Slider height="300px" />

//       <div className={aboutus.Postreview}>
//         <div className={aboutus.PostReviewText}>
//           <h1>
//             Traincape technology Pvt Ltd would love your feedback. Post a review
//             to our profile.{" "}
//           </h1>
//           <button
//             className={aboutus.reviewBTN}
//             onClick={() =>
//               window.open("https://g.page/r/CWi1cqy8-xl0EBE/review")
//             }
//           >
//             Post A Review
//           </button>
//         </div>
//         <div className={aboutus.reviewGif}>
//           <img src={review} alt="Feedback GIF" />
//         </div>
//       </div>

//       <div className={aboutus.consult}>
//         <img
//           src={Consult}
//           className={aboutus.img}
//           alt="Consult Image"
//           style={{ backgroundSize: "cover" }}
//         />
//         <div className={aboutus.consultdiv}>
//           <div className={aboutus.consultText}>
//             <p>We are here to answer your questions 24/7</p>
//             <h1>Need A Consultation?</h1>
//           </div>
//           <div className={aboutus.consultbtn}>
//             <button
//               className={aboutus.btn2}
//               onClick={() => navigate("/contact-us")}
//             >
//               GET A CONSULTATION
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUS;

<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import aboutUsVideo from "../assets/aboutus.mp4";
import founderImage from "../assets/Parichay-Sir.jpeg";
import business from "../assets/businessman.jpg";

import {
  FaMapMarkerAlt,
  FaRocket,
  FaBriefcase,
  FaUniversity,
  FaWrench,
  FaChartLine,
  FaLightbulb,
  FaBullseye,
  FaHeart,
=======
import React, { useEffect, useState } from "react";
import BannerImage from "../assets/about-us-Bg.jpg";
import {
  FaStar,
  FaChalkboardTeacher,
  FaHandshake,
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  FaTools,
  FaLaptopCode,
  FaMobileAlt,
  FaCertificate,
} from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: " A Vision Takes Root",
    date: "2021",
    description:
      "In 2021, Traincape Technology began as a spark—an idea fueled by the belief that quality education and access to real-world skills shouldn't be reserved for a few. With a single branch, a small team, and a big dream, we set out to redefine tech learning in India and beyond.",
    icon: <FaMapMarkerAlt className="text-white text-xl" />,
  },
  {
    title: "Laying the Foundation",
    date: " ",
    description:
      "We focused on bridging the gap between learning and doing. With a curriculum built by experts and a learner-first approach, we launched our first set of certification programs—carefully tailored for the needs of modern tech professionals.",
    icon: <FaRocket className="text-white text-xl" />,
  },
  {
    title: " Growth Through Trust",
    date: " ",
    description:
      "As our impact grew, so did our family. Over 8,000 users joined us in their career journeys. Word spread. A second branch was established to meet growing demand. What started as a humble initiative began to evolve into a trusted name in tech education.",
    icon: <FaBriefcase className="text-white text-xl" />,
  },
  {
    title: "A Platform for Everyone",
    date: " ",
    description:
      "With 500+ certification courses now available, we cater to students, working professionals, and enterprises alike. Our courses are designed not just to teach—but to upskill, reskill, and empower individuals to lead in their domains.",
    icon: <FaUniversity className="text-white text-xl" />,
  },
  {
    title: " Milestones That Matter",
    date: " ",
    description:
      "We've proudly crossed 300,000+ happy learners and 100,000+ successful sales—but numbers are just part of the story. Behind every figure is a student who cracked an interview, a professional who earned a promotion, a dream that found direction.",
    icon: <FaWrench className="text-white text-xl" />,
  },
  {
    title: "Why Students Choose Traincape",
    date: " ",
    description:
      "We're not just an edtech company. We're a community. A movement. A support system. Whether it's our industry-aligned training, dedicated support, or constant evolution, over 50,000+ satisfied students have found a reason to stay and grow with us.",
    icon: <FaChartLine className="text-white text-xl" />,
  },
];

const goalsData = [
  {
    icon: <FaLightbulb className="text-xl" />,
    title: "Mission",
    description:
      "To empower individuals with accessible, industry-aligned IT training and real-world learning that builds job-ready confidence.",
  },
  {
    icon: <FaBullseye className="text-xl" />,
    title: "Vision",
    description:
      "To become a global leader in IT education and certifications, helping learners transition confidently into tech careers.",
  },
  {
    icon: <FaHeart className="text-xl" />,
    title: "Values",
    description:
      "Innovation, integrity, and impact. We build future-ready skills with mentorship, inclusivity, and lifelong learning at our core.",
  },
];

const AboutUS = () => {
  const navigate = useNavigate();
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

=======
import { AiOutlineCheck } from "react-icons/ai";
import styles from "../css/AboutUS.module.css";
import { Link, useNavigate } from "react-router-dom";
import founderImage from "../assets/Parichay-Sir.jpeg";

const AboutUS = () => {
  // Add useEffect for smooth scrolling
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex((prev) => (prev + 1) % timelineData.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fadeInProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  };
=======
  // State for responsive handling
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Traincape Technology - IT Training and Services</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Traincape Technology's mission, values, and services." />
      </Helmet>

      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden mb-20">
        <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
          <button onClick={() => navigate("/")} className="text-gray-600 font-bold py-2 px-4 rounded">
            <span className="hover:text-gray-800">Home</span>
          </button>
          <div className="flex items-center text-gray-500 font-bold">
            <span>{" > "}</span>
            <span className="ml-4">About Us</span>
          </div>
        </div>
        <video
          src={aboutUsVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end justify-start p-8">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-[300] tracking-wider font-sans mb-2">About Us</h1>
            <div className="w-24 h-[2px] bg-orange-400" />
          </div>
        </div>
      </section>

      <motion.section className="px-6 md:px-24 mt-12 mb-24 font-sans " {...fadeInProps}>
        <div className="max-w-5xl mx-auto text-xl md:text-2xl leading-relaxed text-black p-8 rounded-lg shadow-md">
          <p className="mb-6 text-justify relative font-normal">
            <span className="text-7xl text-[#F97316] font-bold float-left mr-2 leading-none font-sans align-baseline" style={{ verticalAlign: "baseline" }}>T</span>
            raincape Technology is on a mission to empower the next generation of professionals through cutting-edge IT education, real-world projects, and a deep commitment to industry relevance.
          </p>
          <ul className="space-y-4 pl-4 font-sans">
            {["Certified training programs tailored to high-demand IT skills.",
              "Real-world internship experiences guided by seasoned mentors.",
              "Partnerships with certifying bodies like CompTIA and Microsoft.",
              "Career services including resume building and job placement support.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-2xl leading-none">✓</span>
                <span className="text-lg md:text-xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section className="px-4 mx-4 md:mx-28 my-16 py-20 bg-[#0C121F] text-white font-sans rounded-xl" {...fadeInProps}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 border-r border-gray-700 pr-0 md:pr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4 md:mb-6">Empowering Innovation</h2>
            <img src={business}  alt="Businessman"
                className="w-70 h-70 border-radius: 0.375rem"/>
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6 font-sans font-semibold">
              At Traincape, we embarked on a journey to reshape IT education and digital innovation. Our initiatives are built around real-world skills, mentorship, and certification pathways that prepare learners to solve industry challenges.
            </p>
            <motion.button
              className="mt-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded shadow transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              
              Connect with Us
            </motion.button>
          </div>
          <div className="flex-1 flex flex-col justify-start md:justify-between text-gray-300 ">
            <p className="text-base md:text-xl leading-relaxed font-sans font-semibold ">
"At our company, we focus on delivering practical and reliable IT solutions along with industry-relevant certification programs. Our aim is to equip individuals with the skills they need to succeed and to support organizations in navigating digital transformation with clarity and confidence.

We recognize that technology is constantly evolving, and we make it a priority to keep our offerings aligned with the real demands of the field. Whether you're a student preparing to enter the tech industry or a business looking to upskill your workforce, our goal is to provide tools and learning that have real impact.

This work is about more than just technology. It's about building capability, solving real problems, and making progress. Thank you for being part of the journey."        </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={founderImage}
                alt="Founder"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white object-cover"
              />
              <div>
                <p className="text-white font-semibold text-sm md:text-base">Parichay Singh Rana</p>
                <p className="text-xs text-gray-400">Founder and CEO</p>
              </div>
=======
        <meta
          name="description"
          content="Learn about Traincape Technology's mission, values, and services. We provide professional IT training, certification programs, and technology solutions."
        />
        <meta
          name="keywords"
          content="Traincape Technology, IT Training, Certification, CompTIA, PECB, Microsoft, Professional Development, IT Services"
        />
        {/* Structured Data for Better SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Traincape Technology",
              "url": "https://traincape.com/about",
              "logo": "https://traincape.com/logo.png",
              "description": "IT Training, Certification, and Technology Services Provider",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fayetteville",
                "addressRegion": "NC",
                "postalCode": "28301",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-910-555-0100",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <img
            src={BannerImage}
            alt="About Traincape Technology"
            className={styles.bannerimg}
          />
          <div className={styles.heroContent}>
            <h1>About Traincape Technology</h1>
            <p>
              Empowering careers through professional IT training and
              certification programs
            </p>
          </div>
        </div>
      </section>
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
          <span className="ml-4">About Us</span>
        </div>
      </div>
      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Our Story</h2>
            <div className={styles.underline}></div>
            <p className={styles.sectionSubtitle}>
              The journey of Traincape Technology started with a vision to
              transform IT education
            </p>
          </div>

          <div className={styles.founderProfile}>
            <div className={styles.founderImageContainer}>
              <img
                src={founderImage}
                alt="Founder of Traincape Technology"
                className={styles.founderImage}
                style={{ objectFit: "cover", objectPosition: "top center" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/250x250?text=Founder";
                }}
              />
              <h3 className={styles.founderName}>Parichay Singh Rana</h3>
              <p className={styles.founderTitle}>Founder & CEO</p>
            </div>
            <div className={styles.founderStory}>
              <p>
                <strong>Traincape Technology</strong> was founded in 2021 by
                Parichay Singh Rana with a vision to revolutionize the way
                businesses approach technology. With years of experience in the
                industry, we recognized the need for a company that could
                provide tailored, reliable, and cutting-edge tech solutions.
              </p>
              <p>
                Our mission is to empower businesses by leveraging the latest
                technologies and innovations to drive growth, efficiency, and
                innovation. Our team of experts has extensive experience in
                developing and implementing custom software solutions, mobile
                apps, and web applications that meet the unique needs of our
                clients.
              </p>
              <p>
                Today, we are proud to have trained numerous professionals who
                have gone on to secure roles with leading tech companies. Our
                partnerships with major certification bodies enable us to offer
                comprehensive training programs that are recognized globally.
              </p>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
            </div>
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
       <motion.section className="w-full bg-[#0C121F] py-12 px-4" {...fadeInProps}>
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-white font-bold">Our Journey</h2>
          <p className="text-white mt-2 text-base max-w-xl mx-auto font-sans text-4xl font-semibold">
            From a spark of inspiration to a thriving learning ecosystem: here's how Unified Mentor came to life.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[3px] bg-orange-400 z-0" />
          <div className="flex flex-col gap-6 relative z-10">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative md:w-[42%] p-4 rounded-lg border transition duration-300 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}
                  ${index === activeTimelineIndex ? 'bg-orange-100 text-[#0C121F] border-orange-300 shadow-lg scale-[1.02]' : 'bg-white text-gray-800 hover:bg-orange-50 hover:scale-[1.02]'}mnp
                `}
              >
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full border-4 border-white transition-all
                  ${index === activeTimelineIndex ? 'bg-orange-500 scale-110 text-white' : 'bg-orange-300 group-hover:bg-orange-500'}`}> 
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mt-6">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
=======
      {/* Vision, Mission, Values */}
      <section className={styles.vmvSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Our Foundation</h2>
            <div className={styles.underline}></div>
            <p className={styles.sectionSubtitle}>
              The principles that guide everything we do at Traincape Technology
            </p>
          </div>

          <div className={styles.vmvGrid}>
            {/* Vision Card */}
            <div className={styles.vmvCard}>
              <div className={styles.vmvIconContainer}>
                <FaStar
                  className={styles.vmvIcon}
                  style={{ color: "#152B54", fontSize: "40px" }}
                />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the premier provider of IT education, recognized for
                excellence in training and producing industry-ready
                professionals who lead technological innovation.
              </p>
            </div>

            {/* Mission Card */}
            <div className={styles.vmvCard}>
              <div className={styles.vmvIconContainer}>
                <FaChalkboardTeacher
                  className={styles.vmvIcon}
                  style={{ color: "#152B54", fontSize: "40px" }}
                />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower individuals through comprehensive IT training
                programs that combine theoretical knowledge with practical
                skills, enabling them to excel in their careers.
              </p>
            </div>

            {/* Values Card */}
            <div className={styles.vmvCard}>
              <div className={styles.vmvIconContainer}>
                <FaHandshake
                  className={styles.vmvIcon}
                  style={{ color: "#152B54", fontSize: "40px" }}
                />
              </div>
              <h3>Our Values</h3>
              <p>
                Excellence in education, integrity in our approach, innovation
                in our methods, and a commitment to the success of every student
                who trusts us with their professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Our Services</h2>
            <div className={styles.underline}></div>
            <p className={styles.sectionSubtitle}>
              Comprehensive IT training and technology solutions to advance your
              career
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Website Development */}
            <div className={styles.serviceCard}>
              <BsGlobe
                className={styles.serviceIcon}
                style={{ fontSize: "40px" }}
              />
              <h3>Website Development</h3>
              <p>
                Custom website solutions tailored to your business needs, from
                simple informational sites to complex e-commerce platforms and
                web applications.
              </p>
            </div>

            {/* Mobile App Development */}
            <div className={styles.serviceCard}>
              <FaMobileAlt
                className={styles.serviceIcon}
                style={{ fontSize: "40px" }}
              />
              <h3>App Development</h3>
              <p>
                Cross-platform mobile applications that provide seamless user
                experiences across iOS and Android devices, built with the
                latest technologies.
              </p>
            </div>

            {/* Certification Vouchers */}
            <div className={styles.serviceCard}>
              <BiCertification
                className={styles.serviceIcon}
                style={{ fontSize: "40px" }}
              />
              <h3>Certification Vouchers</h3>
              <p>
                Discounted exam vouchers for major IT certifications, making the
                path to professional certification more affordable and
                accessible.
              </p>
            </div>

            {/* Internship Programs */}
            <div className={styles.serviceCard}>
              <FaTools
                className={styles.serviceIcon}
                style={{ fontSize: "40px" }}
              />
              <h3>Internship Programs</h3>
              <p>
                Gain practical experience through our structured internship
                programs, working on real-world projects under the guidance of
                experienced professionals.
              </p>
            </div>

            {/* Professional Training */}
            <div className={styles.serviceCard}>
              <FaLaptopCode
                className={styles.serviceIcon}
                style={{ fontSize: "40px" }}
              />
              <h3>Professional Training</h3>
              <p>
                Instructor-led training in various IT domains, including
                networking, cybersecurity, cloud computing, and software
                development.
              </p>
            </div>

            {/* Free Assessment */}
            <div className={styles.serviceCard}>
              <FaCertificate
                className={styles.serviceIcon}
                style={{ fontSize: "40px" }}
              />
              <h3>Free Assessment</h3>
              <p>
                Comprehensive skill assessment to identify strengths and areas
                for improvement, helping you chart the best path for your
                professional development.
              </p>
            </div>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
      <motion.section className="py-20 px-4 bg-white" {...fadeInProps}>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Goals</h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 max-w-7xl mx-auto px-4">
          {goalsData.map((goal, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-lg relative flex-1 bg-white text-gray-800 transition duration-300 hover:-translate-y-1`}
            >
              <div
                className={`absolute -top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-md text-xl bg-[#0C121F] text-white`}
              >
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 mt-6 uppercase">{goal.title}</h3>
              <p className="text-base leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="px-4 py-12 bg-white" {...fadeInProps}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive IT training and technology solutions to advance your career
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-stretch justify-center text-center border-y border-gray-300">
            {[{
              icon: <BsGlobe className="text-[#0C121F] text-4xl mx-auto mb-2" />,
              title: "Website Development",
              desc: "Custom websites tailored to your brand's goals and growth.",
            },
            {
              icon: <FaMobileAlt className="text-[#0C121F] text-4xl mx-auto mb-2" />,
              title: "App Development",
              desc: "Cross-platform apps for seamless user experience.",
            },
            {
              icon: <BiCertification className="text-[#0C121F] text-4xl mx-auto mb-2" />,
              title: "Certification Vouchers",
              desc: "Affordable certification exam vouchers to boost your skills.",
            },
            {
              icon: <FaTools className="text-[#0C121F] text-4xl mx-auto mb-2" />,
              title: "Internship Programs",
              desc: "Gain real-world experience with practical industry projects.",
            },
            {
              icon: <FaLaptopCode className="text-[#0C121F] text-4xl mx-auto mb-2" />,
              title: "Professional Training",
              desc: "Instructor-led programs in IT, cloud, and cybersecurity.",
            },
            {
              icon: <FaCertificate className="text-[#0C121F] text-4xl mx-auto mb-2" />,
              title: "Free Assessment",
              desc: "Evaluate your current skills and identify learning gaps.",
            }].map((service, index, arr) => (
              <div
                key={index}
                className="flex-1 px-4 py-8 relative bg-white"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-base text-gray-600 px-2">{service.desc}</p>
                {index < arr.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
=======
      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Why Choose Traincape Technology</h2>
            <div className={styles.underline}></div>
            <p className={styles.sectionSubtitle}>
              What sets us apart from other providers
            </p>
          </div>

          <div className={styles.whyChooseGrid}>
            {/* Training and Assessment Items */}
            <div className={styles.whyChooseItem}>
              <AiOutlineCheck className={styles.checkIcon} />
              <div>
                <h3>Industry-Experienced Instructors</h3>
                <p>
                  Learn from professionals with real-world experience in their
                  fields
                </p>
              </div>
            </div>

            <div className={styles.whyChooseItem}>
              <AiOutlineCheck className={styles.checkIcon} />
              <div>
                <h3>Hands-On Learning</h3>
                <p>
                  Practice-oriented training with real-world projects and
                  exercises
                </p>
              </div>
            </div>

            <div className={styles.whyChooseItem}>
              <AiOutlineCheck className={styles.checkIcon} />
              <div>
                <h3>Career Support</h3>
                <p>
                  Resume assistance, interview preparation, and job placement
                  support
                </p>
              </div>
            </div>

            {/* Web and App Development Items */}
            <div className={styles.whyChooseItem}>
              <AiOutlineCheck className={styles.checkIcon} />
              <div>
                <h3>Custom Development</h3>
                <p>
                  Tailored web and mobile applications designed to meet your
                  specific business needs
                </p>
              </div>
            </div>

            <div className={styles.whyChooseItem}>
              <AiOutlineCheck className={styles.checkIcon} />
              <div>
                <h3>Modern Technologies</h3>
                <p>
                  Development using the latest frameworks and technologies for
                  optimal performance
                </p>
              </div>
            </div>

            <div className={styles.whyChooseItem}>
              <AiOutlineCheck className={styles.checkIcon} />
              <div>
                <h3>Ongoing Support</h3>
                <p>
                  Continuous maintenance and updates to ensure your applications
                  stay current
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Our Certification Partners</h2>
            <div className={styles.underline}></div>
            <p className={styles.sectionSubtitle}>
              Prepare for globally recognized certifications with our authorized
              training programs
            </p>
          </div>

          <div className={styles.certificationGrid}>
            {/* CompTIA */}
            <div className={styles.certificationCard}>
              <h3>CompTIA</h3>
              <p>
                Prepare for core IT certifications like A+, Network+, Security+,
                and more with our CompTIA authorized training materials and
                experienced instructors.
              </p>
              <Link
                to="/Comptia"
                className={styles.certLink}
              >
                View Courses
              </Link>
            </div>

            {/* PECB */}
            <div className={styles.certificationCard}>
              <h3>PECB</h3>
              <p>
                Get certified in ISO standards, risk management, and information
                security with our PECB-accredited training programs.
              </p>
              <Link
                to="/PECB"
                className={styles.certLink}
              >
                View Courses
              </Link>
            </div>

            {/* Microsoft */}
            <div className={styles.certificationCard}>
              <h3>Microsoft</h3>
              <p>
                Master Microsoft technologies with our training programs for
                Azure, Microsoft 365, and developer certifications.
              </p>
              <Link
                to="/microsoft"
                className={styles.certLink}
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Advance Your IT Career?</h2>
          <p>
            Whether you're looking to get certified, enhance your skills, or
            completely change your career path, we're here to help you succeed.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact-us" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link to="/Courses-details" className={styles.secondaryButton}>
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    </>
  );
};

export default AboutUS;