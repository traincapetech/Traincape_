import React from 'react';
import LearnImg from '../../assets/AWS-Learning.png';
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
                <img className="w-full h-auto" src={LearnImg} alt={`${title} Learning`} />
            </div>

            {/* Introduction Section */}
            <h4 className="text-base sm:text-lg md:text-xl text-gray-700 my-9 text-center">
                Preparing your students for the {title} – Specialty certification is an important step in equipping them with the skills needed to secure cloud environments. Let Certiport help streamline this process with targeted course materials and practice tests designed to ensure effective learning and certification success.
            </h4>

            {/* Preparation Tools Section */}
            <div className="bg-sky-100 rounded-2xl py-4 px-6 sm:px-8 md:px-12 mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
                    Help Your Students Prepare for the {`title`} – Specialty Exam
                </h2>
                <h4 className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
                    AWS offers a variety of learning tools and resources that complement leading educational programs for the {title} – Specialty certification. These resources, developed in partnership with trusted providers, help students gain practical experience in securing AWS cloud infrastructure and applying security best practices.
                    Currently, AWS offers learning materials in collaboration with AWS Educate, A Cloud Guru, and Pluralsight, with more options coming soon. These tools are designed to provide a comprehensive learning experience for your students and help them achieve success on the {title} – Specialty exam. Be sure to check back for new learning products or contact our AWS Representative for more details.
                </h4>
            </div>

            {/* AWS Educate Section */}
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">{`AWS Educate`}</h2>
            <h4 className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-6">
                AWS Educate is Amazon’s global initiative to provide cloud computing resources to educators and students. Through AWS Educate, your students will gain access to industry-leading curriculum and hands-on labs, helping them learn the core security concepts needed for the {title} – Specialty exam.
            </h4>

            {/* AWS Educate Features List */}
            <ul className="list-disc px-7 space-y-3 sm:px-8 md:px-12 text-gray-700 text-sm sm:text-base">
                <li>Comprehensive, self-paced cloud security training</li>
                <li>Hands-on labs to practice security skills in real AWS environments</li>
                <li>Free cloud computing credits to practice skills at no cost</li>
                <li>Learn essential topics such as identity and access management, data protection, and infrastructure security</li>
                <li>Tools and resources designed for educators to guide students through cloud security learning paths</li>
            </ul>
        </>
    );
};

export default Learn;