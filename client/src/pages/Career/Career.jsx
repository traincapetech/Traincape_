import React, { useEffect, useState } from "react";
import career from "./Career.module.css";
import banner from "../../assets/CareerBannerIMG.svg";
import { AiOutlineTeam } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import hand from '../../assets/hand.jpg';

const Career = () => {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
    resumeLink: "",
  });

  const handleSubmit = (e) => {
    const serviceId = "service_pjwgjas";
    const templateId = "template_oihg6cs";
    const publicId = "GmJ24jEVf6swWXgb0";

    const [name, email, subject, message, phoneNumber, resumeLink] =
      Object.values(payoload);
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: "Parichay Singh Rana",
      message: `Name - ${name}\nEmail - ${email}\nWhatsapp-Number - ${phoneNumber}\nSelect Role - ${subject}\nMessage - ${message} \nResume Link - ${resumeLink}`,
    };
    e.preventDefault();

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (res) => {
        alert("Email sent successfully!", res);
      },
      (err) => {
        console.log(err);
      }
    );
    setPayoload({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      resumeLink: "",
    });
  };

  const handleChange = (e) => {
    setPayoload({ ...payoload, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={career.container}>
      <div className={career.banner}>
        <div className={career.bannerIMG}>
          <img src={banner} alt="Career Banner" className={career.bannerimg} />
        </div>
       
      </div>

      <div className={career.benefits}>
        <div className={career.banefitText}>
          <h3>PERKS & CULTURE</h3>
          <h1>Why Work With Us</h1>
          <p>
            Discover the values, environment, and growth-driven mindset that define who we are. We’re more than a company — we’re a team where talent is nurtured and careers thrive.
          </p>
        </div>
        <div className={career.banefit}>
          <div>
            <i><AiOutlineTeam className={career.icon} /></i>
            <h1>Collaborative Culture</h1>
            <p>
              We believe great ideas come from great teams. Our culture encourages open communication, mutual respect, and creative collaboration to achieve shared goals.
            </p>
          </div>
          <div>
            <i><SiFsecure className={career.icon} /></i>
            <h1>Secure Environment</h1>
            <p>
              Your safety and data security are top priorities. We invest in secure systems and transparent practices to ensure peace of mind at every level.
            </p>
          </div>
          <div>
            <i><GiSkills className={career.icon} /></i>
            <h1>Skill Development</h1>
            <p>
              We offer ongoing learning through mentorship, workshops, and real-world challenges — so you’re constantly evolving with your role and the industry.
            </p>
          </div>
          <div>
            <i><GiUpgrade className={career.icon} /></i>
            <h1>Career Growth</h1>
            <p>
              Join a place where ambition is rewarded. We support your career roadmap with opportunities for internal mobility, leadership roles, and project ownership.
            </p>
          </div>
        </div>
      </div>

      <div className={career.contact}>
        <div className={career.officeMail}>
          <h1>Excited to Join?</h1>
          <p>Submit your details and we’ll get in touch soon!</p>
          <div className={career.NameAndEmail}>
            <br />
            <input
              type="text"
              name="name"
              value={payoload.name}
              className={career.inputbox}
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              value={payoload.email}
              className={career.inputbox}
              placeholder="Email Address"
              required
              onChange={handleChange}
            />
            <br />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={payoload.phoneNumber}
            className={career.inputbox}
            placeholder="Phone / WhatsApp Number"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="resumeLink"
            value={payoload.resumeLink}
            className={career.inputbox}
            placeholder="Google Drive Link to Your Resume"
            required
            onChange={handleChange}
          />
          <select
            name="subject"
            id={career.select}
            required
            onChange={handleChange}
          >
            <option value="">Select Position</option>
            <option value="lead-person">Team Lead</option>
            <option value="sale-person">Sales Executive</option>
          </select>
          <br />
          <br />
          <textarea
            name="message"
            className={career.textarea}
            cols="30"
            rows="10"
            placeholder="Tell us why you'd be a great fit"
            onChange={handleChange}
          ></textarea>
          <button className={career.contactBtn} onClick={handleSubmit}>
            Submit Application
          </button>
        </div>
        <div className={career.contactImg}>
          <img src={hand} alt="Join Us" />
        </div>
      </div>
    </div>
  );
};

export default Career;
