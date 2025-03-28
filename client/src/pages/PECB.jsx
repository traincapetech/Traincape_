import React from 'react';
import Lottie from 'lottie-react';
import comptia from '../assets/comptia.json';
import ComptiaCourse from '../components/ComptiaCourse';
// import Advance from '../assets/AWS/advance.png';
// import cloud from '../assets/AWS/cloud.png';
// import data from '../assets/AWS/data.png';
// import developer from '../assets/AWS/developer.png';
// import deveops from '../assets/AWS/Devops.png';
// import machine from '../assets/AWS/machine.png';
// import security from '../assets/AWS/security.png';
// import solution from '../assets/AWS/solution.png';
// import sysops from '../assets/AWS/sysops.png';
import PECB_Overview from '../assets/PECB1.png';
import { useEffect } from 'react';
import AddToCartButton from '../components/AddToCartButton';
const PECB = () => {

    const courseData = [
        {
            image: PECB_Overview,
            title: "Computer Forensics",
            url: "/Computerforensics"
        },

        {
            image: PECB_Overview,
            title: "Cybersecurity Audit Training",
            url: "/CybersecurityAuditTrainings"

        },
        {
            image: PECB_Overview,
            title: "ISO 9001 Lead Implementer",
            url: "/ISO9001LeadImplementer"

        },
        {
            image: PECB_Overview,
            title: "ISO 9001",
            url: "/ISO9001"

        },
        {
            image: PECB_Overview,
            title: "ISO 22301",
            url: "/ISO22301"

        },
        {
            image: PECB_Overview,
            title: "ISO 31000 Risk Manager",
            description: "Master the art of cloud-based technology and services.",
            url: "/ISO31000RiskManager"
        },
        {
            image: PECB_Overview,
            title: "ISO 37001",
            url: "/ISO37001"

        },
        {
            image: PECB_Overview,
            title: "ISO 45001",
            url: "/ISO45001"
        },
        {
            image: PECB_Overview,
            title: "ISO IEC 27001 Lead Implementer",
            url: "/ISOIEC27001LeadImplementer"

        },
        {
            image: PECB_Overview,
            title: "ISO IEC 27001",
            url: "/ISOIEC27001"
        },
        {
            image: PECB_Overview,
            title: "ISO IEC 27005 Risk Manager",
            url: "/ISOIEC27005RiskManager"
        },
        {
            image: PECB_Overview,
            title: "ISO IEC 27032 Cyber Security",
            url: "/ISOIEC27032CyberSecurity"
        },
        {
            image: PECB_Overview,
            title: "Pecb Certified ISO 27001 Foundation",
            url: "/PecbCertifiedISO27001Foundation"
        },
        {
            image: PECB_Overview,
            title: "SCADA Security Manager",
            url: "/SCADASecurityManager"
        },

    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
                          <AddToCartButton />
        
            {/* Hero Section */}
            <div className="course-detail text-center bg-blue-100 py-10">
                <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
                    <Lottie animationData={comptia} className="w-full md:w-1/2" />
                    <div className="text w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">PECB</h2>
                        <p className="text-base md:text-lg text-gray-700">
                            PECB (Professional Evaluation and Certification Board) is a globally recognized certification body that empowers professionals and organizations to excel through its robust training, certification, and credentialing solutions. Specializing in standards such as ISO, PECB offers a wide range of services, including training, audits, and certification in fields like cybersecurity, data protection, quality management, and environmental sustainability. With a commitment to excellence, credibility, and global reach, PECB is the trusted partner for individuals and businesses striving for continuous improvement and compliance with international standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 py-10">
                {courseData.map((course, index) => (
                    <ComptiaCourse
                        key={index}
                        image={course.image}
                        title={course.title}
                        url={course.url}
                    />
                ))}
            </div>
        </>

    )
}

export default PECB