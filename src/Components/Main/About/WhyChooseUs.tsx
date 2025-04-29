import React from "react"
import { CheckCircle2 } from "lucide-react"

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Medical Team",
      description:
        "Our team of specialists brings decades of experience and the latest medical knowledge to your care.",
    },
    {
      title: "Advanced Technology",
      description: "We utilize cutting-edge medical technology and innovative treatments for better outcomes.",
    },
    {
      title: "Patient-Centered Care",
      description: "Your unique needs and preferences are at the center of everything we do.",
    },
    {
      title: "Comprehensive Services",
      description: "From preventive care to specialized treatments, we offer a full spectrum of healthcare services.",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5082] mb-4">Why Choose HYGO Healthcare</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At HYGO, we're committed to providing exceptional healthcare with compassion and innovation. Our approach
          combines medical expertise with a deep understanding of patient needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#1E88E5]"
          >
            <div className="flex items-start mb-4">
              <CheckCircle2 className="text-[#1E88E5] w-6 h-6 mr-2 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-[#2A5082]">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#E3F2FD] to-[#E8F5E9] p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-[#2A5082] mb-4">Our Commitment to Excellence</h3>
            <p className="text-gray-700 mb-4">
              HYGO aims to make healthcare hyperlocal, advanced, affordable, and accessible. We believe that everyone
              deserves access to high-quality healthcare services delivered with compassion and respect.
            </p>
            <p className="text-gray-700">
              Our team of dedicated professionals works tirelessly to ensure that each patient receives personalized
              care that addresses their unique health needs and improves their quality of life.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-[#1E88E5] rounded-full flex items-center justify-center text-white text-center p-4">
              <div>
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence in Healthcare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
