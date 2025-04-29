"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import hero from "@/assets/Images/hero.jpg"
import Picture2 from "@/assets/Images/Picture2.jpg"
import Picture4 from "@/assets/Images/Picture4.jpg"
import Picture8 from "@/assets/Images/Picture8.jpg"
import Picture10 from "@/assets/Images/Picture10.jpg"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const slides = [
    {
      image: hero,
      title: "Advanced Healthcare for Everyone",
      subtitle: "HYGO - Comprehensive Health Solutions",
      description:
        "Providing exceptional healthcare with compassion and innovation. Our team of specialists is dedicated to your well-being.",
    },
    {
      image: Picture2,
      title: "Expert Medical Care",
      subtitle: "HYGO - Advanced Medical Solutions",
      description:
        "State-of-the-art facilities and cutting-edge treatments delivered by experienced healthcare professionals.",
    },
    {
      image: Picture8,
      title: "Your Health, Our Priority",
      subtitle: "HYGO - Comprehensive Health Care",
      description:
        "Personalized care plans designed to meet your unique health needs and improve your quality of life.",
    },
    {
      image: Picture4,
      title: "Compassionate Care",
      subtitle: "HYGO - Health Care",
      description:
        "We combine medical expertise with empathy to provide care that treats the whole person, not just the condition.",
    },
    {
      image: Picture10,
      title: "Leading Medical Innovation",
      subtitle: "HYGO - Advanced Physician Solutions",
      description: "Pioneering new treatments and technologies to deliver better outcomes for our patients.",
    },
  ]

  return (
    <div className="relative w-full h-[calc(100vh-4rem)]">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000080] via-[#00000040] to-[#00000080]"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-8 md:px-16 lg:px-24 z-10">
                <span className="text-lg sm:text-xl text-[#4FC3F7] font-medium mb-2 animate-fade-in">
                  {slide.subtitle}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white drop-shadow-lg animate-slide-in">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl text-white/90 leading-relaxed drop-shadow-md mb-8 animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                  <button
                    onClick={() => navigate("/appointment")}
                    className="px-8 py-3 bg-[#1E88E5] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#1976D2] transition-all duration-300"
                  >
                    Book an Appointment
                  </button>
                  <button
                    onClick={() => navigate("/services")}
                    className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-medium rounded-full shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Quick Access Cards */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 md:px-16 lg:px-24 z-20 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-[#2A5082] text-xl font-bold mb-2">Find a Doctor</h3>
            <p className="text-gray-600 mb-4">Search our specialists by name, specialty, or condition.</p>
            <button onClick={() => navigate("/doctors")} className="text-[#1E88E5] font-medium hover:underline">
              Search Now →
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-[#2A5082] text-xl font-bold mb-2">Request Appointment</h3>
            <p className="text-gray-600 mb-4">Schedule your visit online quickly and easily.</p>
            <button onClick={() => navigate("/appointment")} className="text-[#1E88E5] font-medium hover:underline">
              Book Now →
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-[#2A5082] text-xl font-bold mb-2">Patient Resources</h3>
            <p className="text-gray-600 mb-4">Access helpful information for your visit.</p>
            <button
              onClick={() => navigate("/patient-resources")}
              className="text-[#1E88E5] font-medium hover:underline"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
