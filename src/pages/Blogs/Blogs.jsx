import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blog from "./Blogs.module.css";
const Blogs = () => {
  const [pageOne, setPageOne] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageOne = () => {
    setPageOne(true);
    setPageTwo(false);
    console.log("i am getting clicked");
  };
  const handlePageTwo = () => {
    setPageTwo(true);
    setPageOne(false);
    console.log("i am getting clicked");
  };
  return (
    <div className={blog.blogpage}>
      <div className={blog.blogheader}>
        <h1>Welcome to Our Blog</h1>
        <p>Explore our latest articles and insights on various topics.</p>
      </div>
      <div className={blog.pagination}>
        {" "}
        <button onClick={handlePageOne} disabled={pageOne}>
          1
        </button>
        <button onClick={handlePageTwo} disabled={pageTwo}>
          2
        </button>
      </div>
      {pageOne && (
        <div className={blog.blogcontent}>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2>One of the best Course Ever in Digital Marketing</h2>
            <p>Tarun Aggrawal Advance Digital Marketing Paid Course</p>
            <Link
              className={blog.links}
              to="https://mega.nz/folder/f0cx0SaZ#0bw61jTmJrO35lQpSOHVFQ"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2>WORDPRESS 2023</h2>
            <p>THE COMPLETE WORDPRESS WEBSITE COURSE</p>
            <Link
              className={blog.links}
              to="https://drive.google.com/drive/folders/1tnOqp3maCiEHUV8QrxKj-rzev2cD2993"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2>Perplexity AI </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://www.perplexity.ai/">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Vitalentum </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://vitalentum.net/free-gpt">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> OraChat </h2>
            <p>web-browsing</p>
            <Link
              className={blog.links}
              to="https://ora.ai/chatbot-master/openai-chatgpt-chatbot"
            >
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Vicuna </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://chat.lmsys.org/">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> GPTGO </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://gptgo.ai/">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> AnonChatGPT </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://anonchatgpt.com/">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> NoowAI </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://noowai.com/">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Teach Anything </h2>
            <p>web-browsing</p>
            <Link className={blog.links} to="https://www.teach-anything.com/">
              Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Forefront AI </h2>
            <p>Website hacking course in HINDI </p>
            <Link
              className={blog.links}
              to="https://mega.nz/file/kqxkQKxB#7TjCd2-_YwZZjBx6Hm15VT_E99tF-8-LbWc_kpiOS2I"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> DORKS TUTORIAL </h2>
            <p>HOW TO MAKE HANDWRITTEN DORKS TUTORIAL </p>
            <Link className={blog.links} to="https://pastebin.com/Fs5Y9RnB">
              Course Link{" "}
            </Link>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      )}

      {pageTwo && (
        <div className={blog.blogcontent}>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2>C++</h2>
            <p>C++ full course</p>
            <Link
              className={blog.links}
              to="https://mega.nz/folder/gmZiVbzI#JTNc57Aw4w3wRMva4WBsTQ"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2>Offensive Security Certified Professional </h2>
            <p>
              (Practical Videos)As I promised for the courses. Everything is
              there(Pdf/Videos/Tools)
            </p>
            <Link
              className={blog.links}
              to="https://mega.nz/folder/fDhg0SDJ#ZJDu-6dXEIkKpjYYikjf7w"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2>46GB BIGGEST CRACKING</h2>
            <p>
              {" "}
              Contain Each & Everything For Cracking/Tools/Pdfs/Practical Videos
            </p>
            <Link
              className={blog.links}
              to="https://mega.nz/folder/h5oDmCrZ#JkqcWcQ_Bz1xhTo9QRt_kw"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> The Ultimate Blender 3D </h2>
            <p>The Ultimate Blender 3D Animated AI Course🔰</p>
            <Link
              className={blog.links}
              to="https://drive.google.com/file/d/1KIE28Cls1LK4rDfya7gWiit9h_VPaAKa/view?usp=sharing"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> VPN TOOLS </h2>
            <p>
              VPN TOOLS + PROXY UTILITIES / UNLIMITED PROXIES / SOCKS4 - SOCSK5
              - HTTP'S
            </p>
            <Link
              className={blog.links}
              to="https://www.upload.ee/files/13860427/VPN_TOOLS_PACK.rar.html"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> phishing </h2>
            <p>complete phishing tool 32 templates + 1 customizable</p>
            <Link
              className={blog.links}
              to="https://github.com/thelinuxchoice/blackeye"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> phishing </h2>
            <p> social media phishing with shellphish</p>
            <Link
              className={blog.links}
              to="https://github.com/thelinuxchoice/shellphish"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Phishing </h2>
            <p>Advance Phishing OTP Bypass</p>
            <Link
              className={blog.links}
              to="https://github.com/Ignitetch/AdvPhishing"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Pish web tool </h2>
            <p>Only for learning & Educational Purpose </p>
            <Link className={blog.links} to="https://github.com/Cabdulahi/pish">
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> MITM attack tool </h2>
            <p>Only for learning & Educational Purpose </p>
            <Link
              className={blog.links}
              to="https://github.com/websploit/websploit"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Malware Engineering </h2>
            <p>Zero To Hero Malware Engineering Course </p>
            <Link
              className={blog.links}
              to="https://mega.nz/folder/HeojDIyb#tkYrLenpPZ5za7vMPFbdNg"
            >
              Course Link{" "}
            </Link>
          </div>
          <div className={blog.blogpost}>
            {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
            <h2> Programming Language Convertor </h2>
            <p>Programming Language Convertor </p>
            <Link className={blog.links} to="https://ide.onelang.io/">
              Course Link{" "}
            </Link>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      )}
    </div>
  );
};

export default Blogs;
