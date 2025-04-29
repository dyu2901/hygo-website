"use client"

import React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react"

const QuickAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
    time: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you! Your appointment request has been submitted. We'll contact you shortly to confirm.")
    setFormData({
      name: "",
      phone: "",
      email: "",
      department: "",
      date: "",
      time: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto">
      <div className="bg-gradient-to-r from-[#E3F2FD] to-[#E8F5E9] rounded-2xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#2A5082] mb-4">Request an Appointment</h2>
            <p className="text-gray-700 mb-8">
              Fill out the form below to request an appointment with our specialists. We'll contact you shortly to
              confirm your appointment time.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                      placeholder="+1 (123) 456-7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="ophthalmology">Ophthalmology</option>
                    <option value="internal-medicine">Internal Medicine</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 5PM)</option>
                      <option value="evening">Evening (6PM - 8PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Additional Information
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                    placeholder="Please share any symptoms or concerns..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white py-3 px-6 rounded-lg transition-colors font-medium text-lg"
              >
                Request Appointment
              </button>
            </form>
          </div>

          <div className="bg-[#2A5082] text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Why Choose HYGO for Your Care</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Expert Specialists</h4>
                  <p className="text-white/80">Our team includes renowned specialists across all medical fields.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Advanced Technology</h4>
                  <p className="text-white/80">
                    We utilize the latest medical technology for accurate diagnosis and treatment.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Personalized Care</h4>
                  <p className="text-white/80">
                    We develop customized treatment plans tailored to your specific needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Convenient Scheduling</h4>
                  <p className="text-white/80">
                    We offer flexible appointment times to accommodate your busy schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-xl font-semibold mb-4">Emergency Contact</h4>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 8849642442</span>
              </div>
              <p className="text-white/80">
                For medical emergencies, please call our 24/7 emergency line or visit our emergency department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickAppointment
