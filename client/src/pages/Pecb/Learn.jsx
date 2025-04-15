import React from 'react';
import PECB_Learn from '../../assets/PECB1.png';
import { useEffect } from 'react';
const Learn = ({ title, url, image }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <>
            {/* Heading Section */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 text-center mb-7 font-bold">
                The Pathway to {title} – Specialty Success
            </h1>

            {/* Image Section */}
            <div className="w-full max-w-full mb-8">
                <img className="w-full h-[45vh]" src={PECB_Learn} alt={`${title} Learning`} />
            </div>

            {/* Introduction Section */}
            <h4 className="text-base sm:text-lg md:text-xl text-gray-700 my-9 text-center">
                Preparing your students for the {title} – Specialty certification is an important step in equipping them with the skills needed to secure cloud environments. Let PECB help streamline this process with targeted course materials and practice tests designed to ensure effective learning and certification success.
            </h4>

            {/* Preparation Tools Section */}
            <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8 md:px-12 mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
                    Help Your Students Prepare for the {`title`} – Specialty Exam
                </h2>
                <h4 className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
                PECB offers a variety of learning tools and resources that complement leading educational programs for the {title} certification. These resources, developed in collaboration with experienced industry experts, help students gain practical knowledge in implementing international standards and applying best practices in their respective fields.
                Currently, PECB provides learning materials through PECB Learn, tailored courses, and hands-on training modules, with more options being introduced regularly. These tools are designed to deliver a holistic learning experience for your students and help them achieve success in obtaining the {title} certification. Stay updated for new training materials or contact a PECB representative for more details.
                </h4>
            </div>

            {/* PECB Educate Section */}
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">{`PECB Educate`}</h2>
            <h4 className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-6">
            PECB Learn is PECB’s global initiative to provide training resources on international standards to educators and students. Through PECB Learn, your students will gain access to industry-leading curriculum and practical exercises, helping them master essential concepts needed for certifications like the {title}.
            </h4>

            {/* PECB Educate Features List */}
            <ul className="list-disc px-7 space-y-3 sm:px-8 md:px-12 text-gray-700 text-sm sm:text-base">
                <li>Comprehensive, self-paced training on international standards</li>
                <li>Practical exercises to apply theoretical knowledge in real-world scenarios</li>
                <li>Resources tailored to certifications like ISO 27001, ISO 9001, and more</li>
                <li>Focus on core topics such as risk management, compliance, and data protection</li>
                <li>Guidance and support for educators to structure effective learning pathways</li>
            </ul>
        </>
    );
};

export default Learn;