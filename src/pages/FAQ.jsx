import React, { useEffect, useState } from "react";
import style from "../css/FAQ.module.css";

const FAQ = () => {
  const [show, setShow] = useState(false);
  const HandleShow = () => {
    setShow(!show);
    console.log("clicked");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.faq}>
        <h1>Frequently Asked Questions</h1>
        <div className={style.underline}></div>
        <p>
          A lot of people don't appreciate the moment until it's passed. I'm not
          trying my hardest, and I'm not trying to do
        </p>
      </div>
      <div className={style.questions}>
        <div className={style.ques}>
          <h1>Are these courses free or paid?</h1>

          <div className={style.btn}>
            {" "}
            {show === false ? (
              <button onClick={HandleShow}>+</button>
            ) : (
              <button onClick={HandleShow}>-</button>
            )}
          </div>
        </div>
        {!show && <div className={style.under}></div>}
        {show && (
          <div>
            <p>
              We offer paid training for over 150+ IT and Non-IT courses.
              <br />
              Some of the courses include:
              <br />
              1. PMP Project Manager Professional
              <br />
              2. ITIL V4 Information Technology Infrastructure
              <br />
              3. Prince-2
              <br />
              4. Microsoft Azure (AZ)
              <br />
              5. All Microsoft Certifications
              <br />
              6. AWS Certified Developer Engineer
              <br />
              7. AWS Certified SysOps Administrator
              <br />
              8. AWS Certified Solution Architect Professional
              <br />
              9. CCNA (CISCO Certified Network Associate)
              <br />
              10. CCNP (CISCO Certified Network Professional)
              <br />
              11. CBAP (Certified Bussiness Analyst Professional)
              <br />
              12. CKA (Certified Kubernetes Administrator)
              <br />
              13. CCIE (Cisco Certified Internetwork Expert)
              <br />
              14. CEH (Certified Ethical Hacker Certification)
              <br />
              15. CISM (Certified Information Security Manager)
              <br />
              16. CISCO (Computer Information Security Company)
              <br />
              17. CompTIA Security+
              <br />
              18. Network+
              <br />
              19. SQL & More
            </p>

            <div className={style.under}></div>
          </div>
        )}
        <div className={style.ques}>
          <h1>What will be the cost of a particular course?</h1>

          <div className={style.btn}>
            {" "}
            {show === false ? (
              <button onClick={HandleShow}>+</button>
            ) : (
              <button onClick={HandleShow}>-</button>
            )}
          </div>
        </div>
        {!show && <div className={style.under}></div>}
        {show && (
          <div>
            <p>
              With 150+ IT and non-IT courses available, each course has its own
              unique fee structure and duration. The cost of a course can vary
              widely based on factors such as the complexity of the subject
              matter, the level of expertise it offers, the duration of the
              course (whether it's short-term or long-term), and the institution
              or platform offering the course.
              <br />
              For example, IT courses might include programming languages like
              Python, Java, or C++, cybersecurity training, data science and
              machine learning, web development, cloud computing, and more.
              <br />
              Non-IT courses could range from business management and finance to
              creative arts, languages, health sciences, and many others. To
              determine the cost of a specific course, it's essential to look at
              the details provided by the course provider.
              <br />
              This information typically includes the course syllabus, duration
              (in weeks or months), whether it's self-paced or instructor-led,
              any certifications offered upon completion, and of course, the fee
              structure. Some courses may offer installment plans or discounts
              for early registration, while others might include additional
              resources or support services in their pricing. For accurate and
              detailed cost information, I recommend checking the official
              website or contacting the institution or platform offering the
              course directly.
            </p>

            <div className={style.under}></div>
          </div>
        )}
        <div className={style.ques}>
          <h1>Traincape Technology customer support hours?</h1>

          <div className={style.btn}>
            {" "}
            {show === false ? (
              <button onClick={HandleShow}>+</button>
            ) : (
              <button onClick={HandleShow}>-</button>
            )}
          </div>
        </div>
        {!show && <div className={style.under}></div>}
        {show && (
          <div>
            <p>
              Traincape Technology offers customer support services from Monday
              to Sunday, from 11 am to 7 pm.
              <br />
              <br />
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Customer Support Hours{" "}
              </span>
              <br />
              <br />
              * - Traincape Technology provides customer support 7 days a week,
              from Monday to Sunday.
              <br />
              * - The support hours are from 11 am to 7 pm each day. <br />
              * - This ensures that customers can reach out for assistance
              during a wide range of hours, including weekends.
              <br />
              <br />
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Availability and Accessibility{" "}
              </span>
              <br />
              <br />
              * - With support available 8 hours per day, 7 days a week,
              Traincape Technology demonstrates a strong commitment to serving
              its customers.
              <br />
              * - The extended hours, including weekends, make it convenient for
              customers to contact support at their preferred time.
              <br />
              * - This level of accessibility helps address customer inquiries
              and resolve issues in a timely manner.
              <br />
              <br />
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                {" "}
                Dedicated Support Team
              </span>
              <br />
              <br />
              * - To provide support during these hours, Traincape Technology
              likely has a dedicated team of customer service representatives.
              <br />
              * - The team is trained to handle a variety of customer queries
              and concerns efficiently.
              <br />
              * - With a focus on customer satisfaction, the support team aims
              to provide prompt and effective solutions to customers.
              <br />
              <br />
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                {" "}
                Importance of Customer Support
              </span>
              <br />
              <br />
              * - Offering comprehensive customer support is crucial for any
              business to maintain strong relationships with its customers.
              <br />
              * - Traincape Technology's extended support hours showcase their
              dedication to providing excellent customer service.
              <br />
              * - By being available to customers during these hours, the
              company can address concerns, provide guidance, and ensure
              customer satisfaction.
              <br />
              <br />
              In conclusion, Traincape Technology's customer support hours from
              Monday to Sunday, 11 am to 7 pm, demonstrate their commitment to
              serving their customers effectively. The extended availability and
              accessibility of their support team contribute to the overall
              positive customer experience.
            </p>

            <div className={style.under}></div>
          </div>
        )}
        <div className={style.ques}>
          <h1>What will be the time duration of a particular course?</h1>

          <div className={style.btn}>
            {" "}
            {show === false ? (
              <button onClick={HandleShow}>+</button>
            ) : (
              <button onClick={HandleShow}>-</button>
            )}
          </div>
        </div>
        {!show && <div className={style.under}></div>}
        {show && (
          <div>
            <p>
              With 150+ IT and non-IT courses available, each course has its own
              unique fee structure and duration. The cost of a course can vary
              widely based on factors such as the complexity of the subject
              matter, the level of expertise it offers, the duration of the
              course (whether it's short-term or long-term), and the institution
              or platform offering the course.
              <br />
              For example, IT courses might include programming languages like
              Python, Java, or C++, cybersecurity training, data science and
              machine learning, web development, cloud computing, and more.
              <br />
              Non-IT courses could range from business management and finance to
              creative arts, languages, health sciences, and many others. To
              determine the cost of a specific course, it's essential to look at
              the details provided by the course provider.
              <br />
              This information typically includes the course syllabus, duration
              (in weeks or months), whether it's self-paced or instructor-led,
              any certifications offered upon completion, and of course, the fee
              structure. Some courses may offer installment plans or discounts
              for early registration, while others might include additional
              resources or support services in their pricing. For accurate and
              detailed cost information, I recommend checking the official
              website or contacting the institution or platform offering the
              course directly.
            </p>

            <div className={style.under}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
