import React from "react"
import {
  Heart,
  Brain,
  Stethoscope,
  Bone,
  Eye,
  Microscope,
  Baby,
  Pill,
  TreesIcon as Lungs,
  BabyIcon as Kidney,
  FlaskRoundIcon as Flask,
  Syringe,
} from "lucide-react"

const Departments = () => {
  const departments = [
    {
      name: "Cardiology",
      description:
        "Comprehensive heart care from prevention to advanced treatments for heart disease, heart failure, and arrhythmias.",
      icon: <Heart className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Neurology",
      description:
        "Expert care for conditions affecting the brain and nervous system, including stroke, epilepsy, and neurodegenerative disorders.",
      icon: <Brain className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Internal Medicine",
      description:
        "Primary care for adults focusing on prevention, diagnosis, and treatment of adult diseases and chronic conditions.",
      icon: <Stethoscope className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Orthopedics",
      description:
        "Specialized care for bones, joints, and musculoskeletal conditions, including joint replacement and sports medicine.",
      icon: <Bone className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Ophthalmology",
      description:
        "Complete eye care from routine exams to complex surgeries, treating cataracts, glaucoma, and retinal disorders.",
      icon: <Eye className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Pathology",
      description:
        "Advanced diagnostic testing and laboratory services for accurate disease diagnosis and treatment monitoring.",
      icon: <Microscope className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents, from preventive care to treatment of childhood illnesses.",
      icon: <Baby className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Pharmacy",
      description:
        "Comprehensive medication management and pharmaceutical services, ensuring safe and effective medication therapy.",
      icon: <Pill className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Pulmonology",
      description: "Diagnosis and treatment of respiratory conditions including asthma, COPD, and sleep disorders.",
      icon: <Lungs className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Nephrology",
      description:
        "Specialized care for kidney diseases, including chronic kidney disease, dialysis, and transplant management.",
      icon: <Kidney className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
    {
      name: "Laboratory Services",
      description:
        "Comprehensive diagnostic testing services supporting all medical departments with accurate and timely results.",
      icon: <Flask className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E3F2FD]",
    },
    {
      name: "Vaccination Center",
      description: "Preventive care through immunizations for all age groups, protecting against infectious diseases.",
      icon: <Syringe className="w-12 h-12 text-[#1E88E5]" />,
      color: "bg-[#E8F5E9]",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#2A5082] mb-4">Our Medical Departments</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          HYGO Healthcare offers specialized care across multiple medical disciplines, ensuring comprehensive treatment
          for all your health needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <div key={index} className={`${dept.color} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}>
            <div className="mb-4">{dept.icon}</div>
            <h3 className="text-2xl font-semibold text-[#2A5082] mb-3">{dept.name}</h3>
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

      <div className="mt-16 bg-gradient-to-r from-[#E3F2FD] to-[#E8F5E9] p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-[#2A5082] mb-4">Need Help Finding the Right Department?</h3>
            <p className="text-gray-700 mb-4">
              Our team is here to help you navigate your healthcare journey. If you're unsure which department is right
              for your needs, please contact us for guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-3 rounded-full transition-colors">
                Contact Us
              </button>
              <button className="bg-white border border-[#1E88E5] text-[#1E88E5] hover:bg-[#E3F2FD] px-6 py-3 rounded-full transition-colors">
                Book an Appointment
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg p-4">
              <img src="/placeholder.svg?height=150&width=150" alt="Healthcare Professional" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments
