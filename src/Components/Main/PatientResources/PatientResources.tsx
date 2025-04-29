import { FileText, Download, Phone, Calendar, CreditCard, HelpCircle } from "lucide-react"
import React from "react"
const PatientResources = () => {
  const resources = [
    {
      title: "Patient Forms",
      description: "Download and complete these forms before your visit to save time.",
      icon: <FileText className="w-10 h-10 text-[#1E88E5]" />,
      action: "Download Forms",
      actionIcon: <Download className="w-4 h-4 ml-2" />,
    },
    {
      title: "Insurance Information",
      description: "Learn about accepted insurance plans and coverage options.",
      icon: <CreditCard className="w-10 h-10 text-[#1E88E5]" />,
      action: "View Insurance Details",
      actionIcon: null,
    },
    {
      title: "Appointment Preparation",
      description: "What to bring and how to prepare for your visit.",
      icon: <Calendar className="w-10 h-10 text-[#1E88E5]" />,
      action: "Read Guidelines",
      actionIcon: null,
    },
    {
      title: "Contact Information",
      description: "How to reach us for appointments, questions, or emergencies.",
      icon: <Phone className="w-10 h-10 text-[#1E88E5]" />,
      action: "Contact Us",
      actionIcon: null,
    },
    {
      title: "Patient Portal",
      description: "Access your medical records, test results, and communicate with your care team.",
      icon: <FileText className="w-10 h-10 text-[#1E88E5]" />,
      action: "Login to Portal",
      actionIcon: null,
    },
    {
      title: "FAQs",
      description: "Find answers to commonly asked questions about our services and procedures.",
      icon: <HelpCircle className="w-10 h-10 text-[#1E88E5]" />,
      action: "View FAQs",
      actionIcon: null,
    },
  ]

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring your ID, insurance card, list of current medications, and any relevant medical records or test results. Arriving 15 minutes early to complete paperwork is recommended.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our office, using our online booking system, or through the patient portal. For new patients, we recommend calling directly to ensure we collect all necessary information.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans including [list major plans]. Please contact our billing department to verify your specific coverage before your appointment.",
    },
    {
      question: "How can I access my medical records?",
      answer:
        "You can access your medical records through our secure patient portal. If you need assistance or haven't registered for the portal, please contact our medical records department.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#2A5082] mb-4">Patient Resources</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We're committed to making your healthcare experience as smooth as possible. Find helpful information and
          resources to prepare for your visit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="mb-4">{resource.icon}</div>
            <h3 className="text-xl font-semibold text-[#2A5082] mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <button className="text-[#1E88E5] font-medium hover:underline flex items-center">
              {resource.action}
              {resource.actionIcon}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#E3F2FD] to-[#E8F5E9] p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold text-[#2A5082] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#2A5082] mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#2A5082] mb-4">Patient Education</h2>
          <p className="text-gray-600 mb-4">
            Access educational materials about common conditions, treatments, and preventive care.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1E88E5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Understanding Diabetes Management</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1E88E5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Heart Health Guidelines</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1E88E5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Preventive Care Recommendations</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#1E88E5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Managing Chronic Pain</span>
            </li>
          </ul>
          <button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-2 rounded-full transition-colors">
            Browse All Resources
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-[#2A5082] mb-4">Contact Information</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold text-[#2A5082]">Main Office</h3>
              <p className="text-gray-600">303, Om Decora, 9 Square 150ft ring road nana mauva</p>
              <p className="text-gray-600">Rajkot, Gujarat 360003</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#2A5082]">Phone Numbers</h3>
              <p className="text-gray-600">Appointments: +91 8849642442</p>
              <p className="text-gray-600">Emergency: +91 8849642442</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#2A5082]">Hours of Operation</h3>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed (Emergency Services Available)</p>
            </div>
          </div>
          <button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-2 rounded-full transition-colors">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientResources
