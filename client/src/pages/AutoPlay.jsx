import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Img1 from "../assets/AboutUsCourse.webp";
import Img2 from "../assets/img2Course.webp";
import Img3 from "../assets/img3Course.webp";
import Img4 from "../assets/img4Course.webp";
import Img5 from "../assets/img5Course.webp";
import Img6 from "../assets/img6Course.webp";

function AutoPlay() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
        <div className="bg-gray-50 h-full">
            <Slider {...settings}>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img
                        src={getImage(Img1, Img1)}
                        alt="Course Image 1"
                        className="w-full h-auto object-contain max-w-full max-h-full"
                    />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img2, Img2)} alt="Course Image 2" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img3, Img3)} alt="Course Image 3" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img4, Img4)} alt="Course Banner" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img5, Img5)} alt="Course Image 4" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img6, Img6)} alt="Course Image 5" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
            </Slider>
        </div>
    );
}

export default AutoPlay;