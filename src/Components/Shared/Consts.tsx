import React from "react";
import healthcare from "@/assets/Images/Icons/healthcare.png"
import cardiology from "@/assets/Images/Icons/Cardiology.png"
import orthopedics from "@/assets/Images/Icons/Orthopoedics.png"
import surgery from "@/assets/Images/Icons/Surgery.png"
import hygopharmacy from "@/assets/Images/Icons/Hygopharmacy.png"
import dentistry from "@/assets/Images/Icons/Dentistry.png"
import radiology from "@/assets/Images/Icons/Radiology.png"
import medicine from "@/assets/Images/Icons/Medicine.png"
import seeMoreImage from "@/assets/Images/Icons/seeMoreImage.png"
import Pathology from "@/assets/Images/Icons/Pathology.png"

import Banner1 from "@/assets/Images/Banner1.png"
import Banner2 from "@/assets/Images/Banner2.png"
import Banner3 from "@/assets/Images/Banner3.png"

import doc1 from "@/assets/Images/Doctors/doc1.png"
import doc2 from "@/assets/Images/Doctors/doc2.png"
import doc3 from "@/assets/Images/Doctors/doc3.png"
import doc4 from "@/assets/Images/Doctors/doc4.png"

import user1 from "@/assets/Images/users/user1.jpg"
import user2 from "@/assets/Images/users/user2.jpg"
import user3 from "@/assets/Images/users/user3.jpg"

import logo from "@/assets/Images/logo.png"
import Picture1 from "@/assets/Images/Picture1.jpg" // Importing footer image

export const links = ["Home", "About", "Doctors", "Services", "Reviews"]

export const descNums = [
  {
    num: "100+",
    text: "Expert Doctors",
    color: "#0E3293",
  },
  {
    num: "5k+",
    text: "Happy Patients",
    color: "#0E3293",
  },
  {
    num: "24/7",
    text: "Emergency Service",
    color: "#0E3293",
  },
  {
    num: "20+",
    text: "Medical Laboratories",
    color: "#0E3293",
  },
  {
    num: "2k+",
    text: "Home Visits",
    color: "#0E3293",
  },
]

export const ServicesData = [
  {
    img: healthcare,
    title: "Doctor Consultation",
    id: "doctorconsultation",
    heading: "Doctor Consultation Department",
    color: "#0E3293",
    texts: [
      "General Physician",
      "Allergist/Immunologist",
    "Cardiologist (as per availability)",
    "Dentist",
    "Dermatologist",
    "Endocrinologist",
    "ENT Specialist",
    "Gastroenterologist",
    "General Surgeon",
    "Gynecologist",
    "Infectious Disease Specialist",
    "Nephrologist",
    "Oncologist",
    "Ophthalmologist (Eye Specialist)",
    "Orthopedic",
    "Pediatrician",
    "Plastic Surgeon",
    "Psychiatrist",
    "Pulmonologist",
    "Rheumatologist",
    "Urologist",
    "Vascular Surgeon",
    ],
  },
  {
    img: Pathology, // Replace 'Pathology' with an existing variable or import the correct image
    title: "Pathology",
    id: "pathology",
    heading: "Pathology Department",
    texts: [
      "Blood tests (CBC, lipid profile, liver function, etc.)",
      "Urine and stool analysis",
      "Thyroid function tests",
      "Hormonal panels",
      "Infection screenings (e.g., dengue, malaria, COVID)",
      
    ],
  },
  {
    img: orthopedics,
    title: "Physiotherapy",
    id: "physiotherapy",
    heading: "Physiotherapy Department",
    texts: [
      "Pain management (e.g., back, neck, joint pain)",
      "Post-surgery rehab",
      "Neurological physiotherapy (stroke, Parkinson’s)",
      "Pediatric physiotherapy",
      "Sports injury therapyt",
      
    ],
  },
  {
    img: surgery,
    title: "Clinical Nutrition",
    id: "clinicalnutrition",
    heading: "Clinical Nutrition Department",
    texts: [
      "Weight management programs",
      "Diabetes and hypertension diet plans",
      "Nutrition counseling for children, elderly, and pregnancy",
      "PCOD/PCOS nutrition management",
      "Sports nutrition",
      "Personalized meal planning",

    ],
  },
  {
    img: dentistry,
    title: "Home Care",
    id: "homecare",
    heading: "Home Care Department",
    texts: [
      "Doctor/nurse home visits",
      "Physiotherapy at home",
      "Medication administration",
      "Chronic illness monitoring",
      "Elderly care",
    ],
  },
  {
    img: radiology,
    title: "Mental Health & Counseling",
    id: "mentalhealth",
    heading: "Mental Health & Counseling Department",
    texts: [
      "Psychologist consultations",
      "Counseling for stress, anxiety, depression",
      "Family and relationship counseling",
      "Substance abuse support",
     
    ],
  },
  {
    img: hygopharmacy,
    title: "Hygo Pharmacy",
    id: "hygopharmacy",
    heading: "Hygo Pharmacy Department",
    texts: [
      "Prescription dispensings",
      "Over-the-counter medications",
      "Health supplements and vitamins",
      "Medication counseling",
      "Home delivery service (optional)",
    ],
  },
  {
    img: medicine,
    title: "Wellness & Preventive Health",
    id: "wellness",
    heading: "Wellness & Preventive Health Department",
    texts: [
      "Annual health check-up packages",
      "Lifestyle disease management",
      "Smoking cessation program",
      "Corporate wellness programs",

    ],
  },
  {
    img: seeMoreImage,
    title: "See More",
    id: "seemore",
    heading: "Explore Our Services",
    texts: [
      "Explore additional healthcare options",
      "Specialized medical services for all needs",
      "Discover a world of medical solutions",
      "Find the right care for you",
      "Comprehensive healthcare offerings",
      "More than meets the eye",
      "Healthcare beyond expectations",
    ],
  },
]

export const Banner1Data = {
  heading: "We Are Providing Essential Health Care",
  color: "#0E3293",
  texts: [
    "ESSENTIAL HEALTH CARD",
    "1 Clinical Assessment visits",
    "Bedside Tests",
    "57 Lab tests - Essential",
    "Essential Health report",
    "₹1299/YEAR",
  ],
  img: Banner1,
}

export const Banner3Data = {
  heading: "We Are Providing Comprehensive Health Care",
  color: "#0E3293",
  texts: [
    "COMPREHENSIVE HEALTH CARD",
    "2 Clinical Assessment visits",
    "Bedside Tests",
    "98 Lab tests - Comprehensive",
    "ECG",
    "Comprehensive health care",
    "Nutritionist Consultation",
    "₹2999/YEAR",
  ],
  img: Banner3,
}

export const DoctorsData = {
  heading: "Find Doctor",
  color: "#0E3293",
  doctors: [
    {
      img: doc1,
      name: "Dr. Haard Vasavada",
      job: "MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
      color: "#0E3293",
    },
    {
      img: doc2,
      name: "Dr. Priyank Vasavada",
      job: "MBBS, MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
    },
    {
      img: doc3,
      name: "Dr. Shrut Vasavada",
      job: "MBBS, MS (Orthopedics), FISS, FMISS",
    },
    {
      img: doc4,
      name: "Dr. Nishchit Hegde",
      job: "MBBS, MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
    },
  ],
  heading2: (
    <h2 className="text-3xl sm:text-4xl font-bold text-[#0E3293] mb-8 text-center animate-fade-in">
      Why Choose Us?
    </h2>
  ),
  desc: (
    <div className="w-full min-h-screen bg-[#f9fafb] flex items-center justify-center py-16 px-6 sm:px-12 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
  
        {/* Left: Content Container */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-lg text-[#0E3293] font-semibold uppercase tracking-wide">
            Our Commitment to You
          </p>
          <h3 className="text-4xl font-bold text-gray-800 leading-tight">
            Trusted, Personalized, and Modern Healthcare Services
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            With expert doctors and modern facilities, we ensure you and your family get the care you deserve. Compassionate service meets cutting-edge treatment.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
            <li>Expert medical staff & advanced diagnostics</li>
            <li>Comprehensive in-home care options</li>
            <li>24/7 emergency support and accessibility</li>
            <li>Affordable health packages for all</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-[#0E3293] text-white rounded-full hover:bg-[#09206c] transition duration-300 text-base">
            Learn More About Us
          </button>
        </div>
  
        {/* Right: Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Banner2}
            alt="Healthcare Excellence"
            className="rounded-2xl shadow-2xl w-full max-w-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  ),
  
  
  
}

export const FeedbackData = {
  heading: "Patient Feedback",
  color: "#0E3293",
  feedbacks: [
    {
      img: user1,
      name: "Ralph Edwards",
      job: "Businessman",
      desc: "My experience with this hospital...",
      color: "#0E3293",
    },
    {
      img: user2,
      name: "Josh Smith",
      job: "Engineer",
      desc: "The healthcare professionals were top-notch. They were knowledgeable, attentive...",
    },
    {
      img: user3,
      name: "Eleanor Pena",
      job: "Teacher",
      desc: "One thing that stood out to me was the efficiency of the service...",
    },
  ],
  footerImage: Picture1,
}

export const FooterData = {
  logo: logo,
  size: "w-1/2",
  addresses: ["303, Om Decora, 9 Square 150ft ring road nana mauva", "Rajkot, Gujarat 360003"],
  phone: "+91 8849642442",
  departments: ["Cardiology", "Dentistry", "Neurology", "Orthopedics", "Surgery", "More"],
  links: links,
}

export const NavData = {
  logo: logo,
  links: links,
}
