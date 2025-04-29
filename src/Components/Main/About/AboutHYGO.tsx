"use client"
import React from "react"
import { motion } from "framer-motion"
import DoctorImage1 from "@/assets/Images/Doctors/doc1.png"
import DoctorImage2 from "@/assets/Images/Doctors/doc2.png"
import DoctorImage3 from "@/assets/Images/Doctors/doc3.png"
import DoctorImage4 from "@/assets/Images/Doctors/doc4.png"

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const doctors = [
  {
    img: DoctorImage1,
    name: "Dr. Haard Vasavada",
    title: "MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
    description:
      "Dr. Haard Vasavada specializes in advanced neurosurgical procedures, including brain tumor surgeries, spinal surgeries, and minimally invasive techniques. He is known for his patient-centered approach and dedication to improving neurological health.",
  },
  {
    img: DoctorImage2,
    name: "Dr. Priyank Vasavada",
    title: "MBBS, MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
    description:
      "Dr. Priyank Vasavada is an expert in minimally invasive neurosurgery and neurovascular procedures. His focus is on providing cutting-edge treatments for complex neurological disorders with precision and care.",
  },
  {
    img: DoctorImage3,
    name: "Dr. Shrut Vasavada",
    title: "Consultant Spine Surgeon, MBBS, MS (Orthopaedics), FISS, FMISS",
    description:
    "Dr. Shrut Vasavada is a fellowship-trained spine surgeon specializing in minimally invasive and endoscopic spine surgery. He is dedicated to advancing precision in spine care, with a focus on faster recovery and enhanced patient outcomes through cutting-edge techniques."
  },
  {
    img: DoctorImage4,
    name: "Dr. Nishchit Hegde",
    title: "MBBS, MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
    description:
      "Dr. Nishchit Hegde is renowned for his expertise in spinal surgeries and neuro-oncology. He is dedicated to advancing the field of neurosurgery through innovative techniques and compassionate care.",
  },
]

const AboutHYGO = () => (
  <section
    className="font-sans bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 md:px-12 rounded-3xl shadow-sm my-12"
    id="about-hygo"
  >
    <div className="max-w-[1250px] mx-auto">
      <h1 className="text-[2.75rem] font-bold text-[#4A44BE] leading-tight text-center mb-12">Healing starts here</h1>
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${
            index % 2 === 0 ? "" : "md:grid-cols-2 md:flex-row-reverse"
          }`}
        >
          {/* Text Content */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
          >
            <h2 className="text-2xl font-semibold text-gray-900">{doctor.name}</h2>
            <h3 className="text-lg text-gray-600">{doctor.title}</h3>
            <p className="text-gray-600 leading-relaxed">{doctor.description}</p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
              style={{
                maxHeight: "600px",
                objectPosition: "center",
              }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  </section>
)

export default AboutHYGO
