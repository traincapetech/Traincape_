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

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import banner from "../assets/banner.jpeg";
import Owner from "../assets/ParichaySir.jpeg";
import image1 from "../assets/about-gallery/Traincape Technology Deck_page-0002.jpg";
import image3 from "../assets/about-gallery/Traincape Technology Deck_page-0003.jpg";
import image6 from "../assets/about-gallery/Traincape Technology Deck_page-0008.jpg";
import vision from "../assets/vision.jpeg";
import values from "../assets/values.jpeg";
import mission from "../assets/mission.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCertificate,
  FaUsers,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

// Import CSS with styled components or CSS modules
import styles from "../css/AboutUS.module.css";
import { useNavigate } from "react-router-dom";

const AboutUS = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // Settings for the testimonial slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  // Service data
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Website Development",
      description:
        "Custom-built, responsive websites designed to drive business growth and enhance your digital presence.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "App Development",
      description:
        "Innovative mobile applications for iOS and Android platforms that provide seamless user experiences.",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Certification Vouchers",
      description:
        "Discounted vouchers for CompTIA, PECB, Microsoft, and other industry-recognized certifications.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Internship Programs",
      description:
        "Hands-on training opportunities for students and professionals looking to enhance their skills.",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Professional Training",
      description:
        "Expert-led training programs in cybersecurity, cloud computing, project management, and more.",
    },
    {
      icon: <FaAward size={40} />,
      title: "Free Assessments",
      description:
        "Online assessments to test your knowledge and earn certificates validating your expertise.",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>
          About Traincape Technology | IT Training & Certification Experts
        </title>
        <meta
          name="description"
          content="Traincape Technology provides professional IT training, certification vouchers for CompTIA, PECB, Microsoft, and custom software development services. Learn more about our mission to empower professionals with globally recognized certifications."
        />
        <meta
          name="keywords"
          content="Traincape Technology, IT Training, CompTIA certification, PECB certification, Microsoft certification, website development, app development, cybersecurity training, IT internship"
        />
        <meta
          property="og:title"
          content="About Traincape Technology | IT Training & Certification Experts"
        />
        <meta
          property="og:description"
          content="Traincape Technology provides professional IT training, certification vouchers for CompTIA, PECB, Microsoft, and custom software development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://traincapetech.in/about-us" />
        <meta property="og:image" content={banner} />

        {/* Schema.org markup for better SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Traincape Technology",
              "url": "https://traincapetech.in",
              "logo": "https://traincapetech.in/logo.png",
              "foundingDate": "2021",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Parichay Singh Rana"
                }
              ],
              "description": "Traincape Technology provides IT training, certification vouchers, and software development services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+916280281505",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/traincapetech",
                "https://www.linkedin.com/company/traincapetech",
                "https://twitter.com/traincapetech"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <img
            src={banner}
            alt="Traincape Technology - IT Training and Certification"
            className={styles.bannerimg}
          />
          <div className={styles.heroContent}>
            <h1>About Traincape Technology</h1>
            <p>
              Empowering professionals with globally recognized certifications
              and cutting-edge technology solutions
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
          </div>
          <div className={styles.founderProfile}>
            <div className={styles.founderImageContainer}>
              <img
                src={Owner}
                alt="Parichay Singh Rana - Founder of Traincape Technology"
                className={styles.founderImage}
              />
              <h3 className={styles.founderName}>Mr. Parichay Singh Rana</h3>
              <p className={styles.founderTitle}>Founder & Chairman</p>
            </div>

            <div className={styles.founderStory}>
              <p>
                Founded in 2021 by <strong>Parichay Singh Rana</strong>,
                Traincape Technology emerged with a vision to redefine how
                businesses harness the power of technology. Built on a
                foundation of expertise and innovation, our mission is to
                provide bespoke, reliable, and forward-thinking tech solutions.
              </p>
              <p>
                As an authorized partner of CompTIA and PECB, we are committed
                to delivering high-quality training programs that help
                professionals advance their careers with globally recognized
                certifications.
              </p>
              <p>
                We believe in empowering businesses to unlock their true
                potential by delivering tools and strategies that drive success.
                At Traincape, we don't just adapt to technological advancements;
                we anticipate them, ensuring our clients stay ahead in an
                ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className={styles.vmvSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Our Vision, Mission & Values</h2>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.vmvGrid}>
            <div className={styles.vmvCard}>
              <div className={styles.vmvIconContainer}>
                <img
                  src={vision}
                  alt="Traincape Technology Vision"
                  className={styles.vmvIcon}
                />
              </div>
              <h3>Vision</h3>
              <p>
                At Traincape Technology, our vision is to be a global leader in
                IT training and solutions, empowering individuals and businesses
                to achieve excellence through innovation, expertise, and
                cutting-edge technology.
              </p>
            </div>

            <div className={styles.vmvCard}>
              <div className={styles.vmvIconContainer}>
                <img
                  src={mission}
                  alt="Traincape Technology Mission"
                  className={styles.vmvIcon}
                />
              </div>
              <h3>Mission</h3>
              <p>
                As an authorized partner of CompTIA and PECB, our mission is to
                deliver industry-leading training programs that empower
                professionals with globally recognized certifications. We strive
                to bridge the gap between theoretical knowledge and practical
                skills through immersive learning experiences.
              </p>
            </div>

            <div className={styles.vmvCard}>
              <div className={styles.vmvIconContainer}>
                <img
                  src={values}
                  alt="Traincape Technology Values"
                  className={styles.vmvIcon}
                />
              </div>
              <h3>Values</h3>
              <p>
                We uphold innovation, integrity, customer-centricity, and a
                steadfast commitment to delivering quality in every service we
                provide. We believe in continuous learning, ethical practices,
                and building lasting relationships based on trust and mutual
                growth.
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
              Comprehensive IT solutions to drive your success
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Why Choose Traincape Technology</h2>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.sliderContainer}>
            <Slider {...settings}>
              <div className={styles.slideItem}>
                <img
                  src={image1}
                  alt="Traincape Technology Excellence"
                  className={styles.slideImage}
                />
                <div className={styles.slideCaption}>
                  <h3>Excellence in Training</h3>
                  <p>
                    Our expert-led training programs ensure high success rates
                    in certification exams.
                  </p>
                </div>
              </div>
              <div className={styles.slideItem}>
                <img
                  src={image6}
                  alt="Traincape Technology Partnerships"
                  className={styles.slideImage}
                />
                <div className={styles.slideCaption}>
                  <h3>Strategic Partnerships</h3>
                  <p>
                    Official partners with leading certification bodies like
                    CompTIA and PECB.
                  </p>
                </div>
              </div>
              <div className={styles.slideItem}>
                <img
                  src={image3}
                  alt="Traincape Technology Development"
                  className={styles.slideImage}
                />
                <div className={styles.slideCaption}>
                  <h3>Custom Development Solutions</h3>
                  <p>
                    Tailored web and mobile applications designed to meet your
                    unique business needs.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Certification Partnerships</h2>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.certificationGrid}>
            <div className={styles.certificationCard}>
              <h3>CompTIA</h3>
              <p>
                Official partners offering certification vouchers for A+,
                Network+, Security+, and more.
              </p>
              <a href="/training-comptia" className={styles.certLink}>
                Learn More
              </a>
            </div>

            <div className={styles.certificationCard}>
              <h3>PECB</h3>
              <p>
                Certified training provider for ISO, cybersecurity, and risk
                management certifications.
              </p>
              <a href="/PECB" className={styles.certLink}>
                Learn More
              </a>
            </div>

            <div className={styles.certificationCard}>
              <h3>Microsoft</h3>
              <p>
                Authorized training partner offering certification vouchers for
                various Microsoft technologies.
              </p>
              <a href="/microsoft" className={styles.certLink}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to advance your career or business?</h2>
          <p>
            Get in touch with our team to discuss your training needs or
            development projects.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact-us" className={styles.primaryButton}>
              Contact Us
            </a>
            <a href="/Courses-details" className={styles.secondaryButton}>
              Explore Courses
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;
