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

import React, { useEffect, useState } from "react";
import BannerImage from "../assets/about-us-Bg.jpg";
import {
  FaStar,
  FaChalkboardTeacher,
  FaHandshake,
  FaTools,
  FaLaptopCode,
  FaMobileAlt,
  FaCertificate,
} from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { AiOutlineCheck } from "react-icons/ai";
import styles from "../css/AboutUS.module.css";
import { Link, useNavigate } from "react-router-dom";
import founderImage from "../assets/Parichay-Sir.jpeg";

const AboutUS = () => {
  // Add useEffect for smooth scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // State for responsive handling
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Traincape Technology - IT Training and Services</title>
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
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
    </>
  );
};

export default AboutUS;
