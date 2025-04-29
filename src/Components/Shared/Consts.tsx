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
    color: "#4A44BE",
  },
  {
    num: "5k+",
    text: "Happy Patients",
    color: "#4A44BE",
  },
  {
    num: "24/7",
    text: "Emergency Service",
    color: "#4A44BE",
  },
  {
    num: "20+",
    text: "Medical Laboratories",
    color: "#4A44BE",
  },
  {
    num: "2k+",
    text: "Home Visits",
    color: "#4A44BE",
  },
]

export const ServicesData = [
  {
    img: healthcare,
    title: "Healthcare",
    id: "healthcare",
    heading: "Healthcare Department",
    color: "#4A44BE",
    texts: [
      "Primary care and family medicine",
      "Preventive health and wellness",
      "Chronic disease management",
      "Vaccinations and immunizations",
      "Health screenings and check-ups",
      "Home health and hospice care",
      "Health education and lifestyle advice",
    ],
  },
  {
    img: cardiology,
    title: "Cardiology",
    id: "cardiology",
    heading: "Cardiology Department",
    texts: [
      "Electrocardiogram (ECG)",
      "Echocardiogram",
      "Color Doppler Echo",
      "Dobutamine Stress Echo (DSE)",
      "Transesophageal Echo (TEE)",
      "Exercise Tolerance Test (ETT/TMT)",
      "Halter monitor",
      "24 Hour Ambulatory BP monitor",
      "Tilt Test/Tilt Table Test",
    ],
  },
  {
    img: orthopedics,
    title: "Orthopedics",
    id: "orthopedics",
    heading: "Orthopedics Department",
    texts: [
      "Orthopedic surgery and joint replacements",
      "Sports injury and trauma care",
      "Physical therapy and rehabilitation",
      "Spine and back pain solutions",
      "Arthritis and joint disorder treatment",
      "Orthopedic consultations",
      "Customized orthopedic care plans",
    ],
  },
  {
    img: surgery,
    title: "Surgery",
    id: "surgery",
    heading: "Surgery Department",
    texts: [
      "Minimally invasive and laparoscopic surgery",
      "Gastrointestinal surgery and endoscopy",
      "Plastic and reconstructive surgery",
      "Cancer and tumor resection",
      "Post-operative care and recovery",
      "Surgical consultations",
      "Emergency surgical interventions",
    ],
  },
  {
    img: dentistry,
    title: "Dentistry",
    id: "dentistry",
    heading: "Dentistry Department",
    texts: [
      "Routine dental check-ups and cleanings",
      "Cosmetic dentistry and teeth whitening",
      "Oral surgery and extractions",
      "Dental implants and restorations",
      "Pediatric and family dentistry",
      "Gum disease treatment",
      "Orthodontic and braces options",
    ],
  },
  {
    img: radiology,
    title: "Radiology",
    id: "radiology",
    heading: "Radiology Department",
    texts: [
      "Advanced diagnostic imaging services",
      "Mammography and breast health screening",
      "Interventional radiology procedures",
      "Virtual colonoscopy and body scans",
      "Radiology consultations",
      "Fast and accurate imaging results",
      "State-of-the-art radiology technology",
    ],
  },
  {
    img: hygopharmacy,
    title: "Hygo Pharmacy",
    id: "hygopharmacy",
    heading: "Hygo Pharmacy Department",
    texts: [
      "Prescription and over-the-counter medications",
      "Vaccinations and immunizations",
      "Health and wellness products",
      "Pharmaceutical consultations",
      "Medication management and reviews",
      "Home delivery and convenient pickup",
      "Personalized health advice",
    ],
  },
  {
    img: medicine,
    title: "Medicine",
    id: "medicine",
    heading: "Medicine Department",
    texts: [
      "Primary care and internal medicine",
      "Chronic disease management and prevention",
      "Immunizations and wellness checks",
      "Holistic and integrative medicine",
      "Geriatric and pediatric medicine",
      "Health education and lifestyle coaching",
      "Individualized medical treatment plans",
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
  color: "#4A44BE",
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
  color: "#4A44BE",
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
  heading: "Meet Our Specialists",
  color: "#4A44BE",
  doctors: [
    {
      img: doc1,
      name: "Dr. Haard Vasavada",
      job: "MS, MCH (Neuro), WFNS Fellow Consultant Neurosurgeon",
      color: "#4A44BE",
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
  heading2: <h2 className="text-3xl sm:text-4xl font-bold text-[#4A44BE] mb-4 animate-slide-in">Who We Are?</h2>,
  color2: "#4A44BE",
  desc: (
    <div className="bg-white py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="text-xs text-gray-600 mb-2">Our impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">Building a healthier world</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            We think big and act boldly to improve the health of communities and accelerate equality and diversity in
            health care...
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Improving health equity</strong>
            <br />
            We partner with community organizations to{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800 transition">
              end health disparities
            </a>{" "}
            ...
          </p>
          <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 text-sm">
            Explore our community engagement
          </button>
        </div>
        <div className="flex-1">
          <img
            src={Banner2}
            alt="Healthcare partnership"
            className="rounded-xl shadow-md w-full max-w-sm mx-auto object-cover"
          />
        </div>
      </div>
    </div>
  ),
}

export const FeedbackData = {
  heading: "Patient Feedback",
  color: "#4A44BE",
  feedbacks: [
    {
      img: user1,
      name: "Ralph Edwards",
      job: "Businessman",
      desc: "My experience with this hospital...",
      color: "#4A44BE",
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
