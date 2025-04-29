"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import { Heart, Brain, Stethoscope, Bone, Eye, Microscope, Baby, Pill } from "lucide-react"

const FeaturedDepartments = () => {
  const navigate = useNavigate()

  const departments = [
    {
      name: "Cardiology",
      description: "Comprehensive heart care from prevention to advanced treatments",
      icon: <Heart className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Neurology",
      description: "Expert care for conditions affecting the brain and nervous system",
      icon: <Brain className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Internal Medicine",
      description: "Primary care for adults focusing on prevention and wellness",
      icon: <Stethoscope className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Orthopedics",
      description: "Specialized care for bones, joints, and musculoskeletal conditions",
      icon: <Bone className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Ophthalmology",
      description: "Complete eye care from routine exams to complex surgeries",
      icon: <Eye className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Pathology",
      description: "Advanced diagnostic testing and laboratory services",
      icon: <Microscope className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents",
      icon: <Baby className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Pharmacy",
      description: "Comprehensive medication management and pharmaceutical services",
      icon: <Pill className="w-10 h-10 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5082] mb-4">Our Medical Departments</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          HYGO Healthcare offers specialized care across multiple medical disciplines, ensuring comprehensive treatment
          for all your health needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`${dept.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
            onClick={() => navigate("/departments")}
          >
            <div className="mb-4">{dept.icon}</div>
            <h3 className="text-xl font-semibold text-[#2A5082] mb-2">{dept.name}</h3>
            <p className="text-gray-700 mb-4">{dept.description}</p>
            <button className="text-[#1E88E5] font-medium hover:underline flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/departments")}
          className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-8 py-3 rounded-full transition-colors text-lg font-medium"
        >
          View All Departments
        </button>
      </div>
    </div>
  )
}

export default FeaturedDepartments
