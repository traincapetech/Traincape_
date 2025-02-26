import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Img1Mobile from "../assets/Cisco/CISCO.jpg";
import Img2Mobile from "../assets/AWS.jpg";
import Img3Mobile from "../assets/AWSCertificationtrainingTraincapetech.jpg";
import Img4Mobile from "../assets/Cisco/Cyber security.jpg";
import Img5Mobile from "../assets/Cisco/PMI.jpg";
import Img6Mobile from "../assets/Microsoft Banner.jpg";
import Img7Mobile from "../assets/CompTIAtraincapetech.jpg";
import Img1 from "../assets/banner01.jpeg"
import Img2 from "../assets/banner01.jpg"
import Img3 from "../assets/banner01.jpeg"
// import Img4 from "../assets/CoursesSlider2.webp"
import Img4 from "../assets/banner01.jpg"
import Img5 from "../assets/background.jpg"
import Img6 from "../assets/banner01.jpeg"
// import Img7 from  "../assets/Cisco/Cisco-ccst.png"


function AutoPlay() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Adjust image based on window width
    const getImage = (imgMobile, imgDesktop) => {
        return windowWidth < 768 ? imgMobile : imgDesktop;
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        ltr: true,
    };

    return (
        <div className=" bg-gray-50 h-full">
            <Slider {...settings}>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img1Mobile, Img1)} alt="Course Image 1" className="w-full h-64 object-contain" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img2Mobile, Img2)} alt="Course Image 2" className="w-full h-64 object-contain" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img3Mobile, Img3)} alt="Course Image 3" className="w-full h-64 object-contain" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img4Mobile, Img4)} alt="Course Banner" className="w-full h-64 object-contain" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img5Mobile, Img5)} alt="Course Image 4" className="w-full h-64 object-contain" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img6Mobile, Img6)} alt="Course Image 5" className="w-full h-64 object-contain" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3">
                    <img src={getImage(Img7Mobile, Img1)} alt="Course Image 6" className="w-full h-64 object-contain" />
                </div>
            </Slider>

        </div>
    );
}

export default AutoPlay;