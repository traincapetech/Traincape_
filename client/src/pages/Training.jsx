"use client"

import { useEffect } from "react"
import CourseCard from "../components/CourseCard"
import comptia from "../assets/CompTIA-Network.png"
import mircro from "../assets/microsoft-kartikey.png"
import PECB from "../assets/PECB1.png"
import AWS from "../assets/aws-kartikey.png"
import Cisco from "../assets/Cisco/CiscoIcon.png"
import AddToCartButton from "../components/AddToCartButton"
import { useNavigate } from "react-router-dom"
import trainingVideo from "../assets/training-video.mp4"

const Training = () => {
  const courseData = [
    {
      image: AWS,
      title: "AWS",
      description: "AWS is a top cloud platform providing scalable IT solutions.",
      price: "$450",
      url: "/aws",
    },
    {
      image: Cisco,
      title: "CISCO",
      description: "Master the art of cloud-based technology and services.",
      price: "$400",
      url: "/Cisco",
    },
    {
      image: comptia,
      title: "COMPTIA",
      description: "A comprehensive course on network fundamentals.",
      price: "$300",
      url: "/comptia",
    },
    {
      image: mircro,
      title: "Microsoft",
      description: "Learn to secure and protect systems like a pro.",
      price: "$350",
      url: "/microsoft",
    },
    {
      image: PECB,
      title: "PECB",
      description: "Excel in compliance, management systems, and IT security.",
      price: "$400",
      url: "/PECB",
    },
  ]
  const navigate = useNavigate()

  // Initialize AOS if it's not already
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
      })
    }
  }, [])

  return (
    <>
      <AddToCartButton />
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={trainingVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Unlock your tech potential with our free comprehensive IT assessments
          </h1>
        </div>
      </div>
      <div className="bg-white py-10 px-6">
        <h1 className="text-blue-600 text-center text-3xl font-extrabold mb-4">Choose Now</h1>
        <h2 className="text-black text-4xl font-extrabold text-center mb-8">Our Popular Courses</h2>
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          {/* Animation added here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 px-6 rounded-xl">
            {courseData.slice(0, 3).map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                price={course.price}
                title={course.title}
                description={course.description}
                url={course.url}
              />
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {/* Added flex-wrap for better responsiveness */}
            {courseData.slice(3).map((course, index) => (
              <CourseCard
                key={index + 3}
                image={course.image}
                price={course.price}
                title={course.title}
                description={course.description}
                url={course.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Training
