import React, { useEffect } from "react";
import aboutus from "../css/AboutUS.module.css";
import banner from "../assets/about-us-new.jpeg";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SiEsotericsoftware } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import childimg from "../assets/disccuss.jpg";
import memberImg from "../assets/workingboy.jpg";
import RokeySir from "../assets/RokeySir.jpeg";
import Consult from "../assets/smallImg.jpeg";
import { useNavigate } from "react-router-dom";
import jasveer from "../assets/jasveergill.png";
import traincapeInfo from "../assets/T-certificate-details.png";
import review from "../assets/Feedback Gif.gif";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import Slider from "../components/slider/Slider";

const AboutUS = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePdf = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=1NdZDoLk-q9saDgfrWzNQ9mLIgUZHGKg8";
    window.open(pdfUrl);
  };
  return (
    <div className={aboutus.container}>
      <div className={aboutus.banner}>
        <img src={banner} alt="Default image" />
        <h1>About Us</h1>
      </div>
      <div className={aboutus.PdfDiv}>
        <img src={traincapeInfo} alt="PDF IMAGE" className={aboutus.pdfImg} />
        <div className={aboutus.pdftext}>
          <div className={aboutus.textpdf}>
            <h1>
              Traincape Technology Pvt Ltd was founded in 2021 by Parichay Singh
              Rana with a vision to revolutionize the way businesses approach
              technology. With years of experience in the industry, we
              recognized the need for a company that could provide tailored,
              reliable, and cutting-edge tech solutions. Our mission is to
              empower businesses by leveraging the latest technologies and
              innovations to drive growth, efficiency, and innovation. Our team
              of experts has extensive experience in developing and implementing
              custom software solutions, mobile apps, and web applications that
              meet the unique needs of our clients. We pride ourselves on our
              ability to understand our clients' business goals and develop
              solutions that align with their objectives.
            </h1>
            <button className={aboutus.pdfDownloadBtn} onClick={handlePdf}>
              Download Our Presentation
            </button>
          </div>
        </div>
      </div>
      <div className={aboutus.parent}>
        <div className={aboutus.child1}>
          <h4>Get Best IT Solutiion 2022</h4>
          <h1>Inspiring Tech Needs For Bussiness</h1>
          <p>
            Traincape Technology was founded in 2021 by Parichay Singh Rana with
            a vision to revolutionize the way businesses approach technology.
            With years of experience in the industry, we recognized the need for
            a company that could provide tailored, reliable, and cutting-edge
            tech solutions.
          </p>
          <div className={aboutus.childdiv}>
            <div className={aboutus.call}>
              <div className={aboutus.icondiv}>
                <FaWhatsapp className={aboutus.icon} />
              </div>
              <div style={{ textAlign: "center" }}>
                <h2>WhatsApp To Ask Any Query</h2>
                <Link
                  className={aboutus.link}
                  to="https://wa.me/+441253928501"
                  target="_blank"
                >
                  +44 1253 928501
                </Link>
              </div>
            </div>
            <div className={aboutus.border}></div>
            <div className={aboutus.founder}>
              <p>Founder & CEO</p>
              <h3>Parichay</h3>
            </div>
          </div>
        </div>
        <div className={aboutus.child2}>
          <img src={childimg} alt="Child Image" />
        </div>
      </div>

      {/* <div className={aboutus.Review}>
        <div className={aboutus.ReviewDiv}>
          <div className={aboutus.Quote}>
            <p>OUR BEST REVIEWS</p>
            <h1>Inspiring Tech Needs For Business</h1>
          </div>
          <div className={aboutus.vdobtn}>
          </div>
        </div>
        <div className={aboutus.ReviewPersonDiv}>
          <div className={aboutus.Reviewdiv1}>
            <div className={aboutus.ReviewPerson}>
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocI9VN6rcL2ZiH4q_UjppPI_CwuPobfiO3NOzKzXTVx0GDydug=w75-h75-p-rp-mo-br100"
                alt="review data"
              />
              <p>
                These guys are awesome 🤩. Whatever you wanna do just tell them.
                They offer comprehensive training programs for all level I.T
                programs.
              </p>
            </div>
            <h1>DA BRO's</h1>
            <h2>IT Customer</h2>
          </div>
          <div className={aboutus.Reviewdiv1}>
            <div className={aboutus.ReviewPerson}>
              <img src={jasveer} alt="review 1" />
              <p>
                I did my azure training and certification from Traincape
                technology is just smooth experience. Going work on more goals
                in near future. Thanks Parichay and team.
              </p>
            </div>
            <h1>Jasvir Gill</h1>
            <h2>Azure Training</h2>
          </div>
        </div>
      </div> */}
      <Slider height="300px" />

      <div className={aboutus.Postreview}>
        <div className={aboutus.PostReviewText}>
          <h1>
            Traincape technology Pvt Ltd would love your feedback. Post a review
            to our profile.{" "}
          </h1>
          <button
            className={aboutus.reviewBTN}
            onClick={() =>
              window.open("https://g.page/r/CWi1cqy8-xl0EBE/review")
            }
          >
            Post A Review
          </button>
        </div>
        <div className={aboutus.reviewGif}>
          <img src={review} alt="Feedback GIF" />
        </div>
      </div>

      <div className={aboutus.consult}>
        <img
          src={Consult}
          className={aboutus.img}
          alt="Consult Image"
          style={{ backgroundSize: "cover" }}
        />
        <div className={aboutus.consultdiv}>
          <div className={aboutus.consultText}>
            <p>We are here to answer your questions 24/7</p>
            <h1>Need A Consultation?</h1>
          </div>
          <div className={aboutus.consultbtn}>
            <button
              className={aboutus.btn2}
              onClick={() => navigate("/contact-us")}
            >
              GET A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
