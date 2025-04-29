"use client"

import React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"

const AppointmentBooking = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    visitType: "in-person",
    reason: "",
    insurance: "",
    policyNumber: "",
    isNewPatient: "yes",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  const doctors = {
    cardiology: ["Dr. Haard Vasavada", "Dr. Priyank Vasavada"],
    neurology: ["Dr. Nishchit Hegde", "Dr. Shrut Vasavada"],
    orthopedics: ["Dr. Shrut Vasavada"],
    pediatrics: ["Dr. Priyank Vasavada"],
    ophthalmology: ["Dr. Haard Vasavada"],
    "internal-medicine": ["Dr. Nishchit Hegde"],
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#4CAF50]" />
          </div>
          <h1 className="text-3xl font-bold text-[#2A5082] mb-4">Appointment Request Submitted</h1>
          <p className="text-gray-600 mb-8">
            Thank you for requesting an appointment with HYGO Healthcare. We have received your request and will contact
            you within 24 hours to confirm your appointment details.
          </p>
          <div className="bg-[#E3F2FD] p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-[#2A5082] mb-4">Appointment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-500">Name</p>
                <p className="font-medium">{formData.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Department</p>
                <p className="font-medium">{formData.department}</p>
              </div>
              <div>
                <p className="text-gray-500">Doctor</p>
                <p className="font-medium">{formData.doctor}</p>
              </div>
              <div>
                <p className="text-gray-500">Preferred Date</p>
                <p className="font-medium">{formData.date}</p>
              </div>
              <div>
                <p className="text-gray-500">Preferred Time</p>
                <p className="font-medium">{formData.time}</p>
              </div>
              <div>
                <p className="text-gray-500">Visit Type</p>
                <p className="font-medium">
                  {formData.visitType === "in-person" ? "In-Person Visit" : "Video Consultation"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-8 py-3 rounded-full transition-colors"
            >
              Return to Home
            </button>
            <button
              onClick={() => {
                setSubmitted(false)
                setStep(1)
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  department: "",
                  doctor: "",
                  date: "",
                  time: "",
                  visitType: "in-person",
                  reason: "",
                  insurance: "",
                  policyNumber: "",
                  isNewPatient: "yes",
                })
              }}
              className="bg-white border border-[#1E88E5] text-[#1E88E5] hover:bg-[#E3F2FD] px-8 py-3 rounded-full transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2A5082] mb-4">Book an Appointment</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Schedule your visit with our healthcare professionals. We're committed to providing you with exceptional care.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#2A5082] p-6">
          <div className="flex justify-between items-center">
            <div className={`flex items-center ${step >= 1 ? "text-white" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${step >= 1 ? "bg-[#1E88E5]" : "bg-gray-600"}`}
              >
                <User className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline">Personal Information</span>
            </div>
            <div className="flex-1 mx-4 h-1 bg-gray-600">
              <div className={`h-full bg-[#1E88E5] transition-all duration-300 ${step >= 2 ? "w-full" : "w-0"}`}></div>
            </div>
            <div className={`flex items-center ${step >= 2 ? "text-white" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${step >= 2 ? "bg-[#1E88E5]" : "bg-gray-600"}`}
              >
                <Calendar className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline">Appointment Details</span>
            </div>
            <div className="flex-1 mx-4 h-1 bg-gray-600">
              <div className={`h-full bg-[#1E88E5] transition-all duration-300 ${step >= 3 ? "w-full" : "w-0"}`}></div>
            </div>
            <div className={`flex items-center ${step >= 3 ? "text-white" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${step >= 3 ? "bg-[#1E88E5]" : "bg-gray-600"}`}
              >
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline">Confirmation</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#2A5082] mb-6">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
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
                    Phone Number *
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
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Are you a new patient? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="isNewPatient"
                        value="yes"
                        checked={formData.isNewPatient === "yes"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="isNewPatient"
                        value="no"
                        checked={formData.isNewPatient === "no"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="insurance" className="block text-gray-700 mb-2">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  id="insurance"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                  placeholder="Insurance Company Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="policyNumber" className="block text-gray-700 mb-2">
                  Policy Number
                </label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                  placeholder="Policy Number"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#1E88E5] hover:bg-[#1976D2] text-white py-3 px-8 rounded-lg transition-colors font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#2A5082] mb-6">Appointment Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="department" className="block text-gray-700 mb-2">
                    Department *
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
                  <label htmlFor="doctor" className="block text-gray-700 mb-2">
                    Doctor *
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                    required
                    disabled={!formData.department}
                  >
                    <option value="">Select Doctor</option>
                    {formData.department &&
                      doctors[formData.department as keyof typeof doctors]?.map((doctor, index) => (
                        <option key={index} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Preferred Date *
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
                    Preferred Time *
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
                <label className="block text-gray-700 mb-2">Visit Type *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visitType"
                      value="in-person"
                      checked={formData.visitType === "in-person"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    In-Person Visit
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visitType"
                      value="video"
                      checked={formData.visitType === "video"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Video Consultation
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="reason" className="block text-gray-700 mb-2">
                  Reason for Visit *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    className="pl-10 w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                    placeholder="Please describe your symptoms or reason for the appointment..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-white border border-[#1E88E5] text-[#1E88E5] hover:bg-[#E3F2FD] py-3 px-8 rounded-lg transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#1E88E5] hover:bg-[#1976D2] text-white py-3 px-8 rounded-lg transition-colors font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#2A5082] mb-6">Review and Confirm</h2>

              <div className="bg-[#F5F5F5] p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-[#2A5082] mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Name</p>
                    <p className="font-medium">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">New Patient</p>
                    <p className="font-medium">{formData.isNewPatient === "yes" ? "Yes" : "No"}</p>
                  </div>
                  {formData.insurance && (
                    <div>
                      <p className="text-gray-500">Insurance</p>
                      <p className="font-medium">{formData.insurance}</p>
                    </div>
                  )}
                  {formData.policyNumber && (
                    <div>
                      <p className="text-gray-500">Policy Number</p>
                      <p className="font-medium">{formData.policyNumber}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-[#2A5082] mb-4">Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Department</p>
                    <p className="font-medium">{formData.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Doctor</p>
                    <p className="font-medium">{formData.doctor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium">{formData.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium">{formData.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Visit Type</p>
                    <p className="font-medium">
                      {formData.visitType === "in-person" ? "In-Person Visit" : "Video Consultation"}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">Reason for Visit</p>
                  <p className="font-medium">{formData.reason}</p>
                </div>
              </div>

              <div className="mb-8">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className="text-sm text-gray-600">
                    I confirm that the information provided is accurate and complete. I understand that this is a
                    request for an appointment and that I will be contacted to confirm the appointment details.
                  </span>
                </label>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-white border border-[#1E88E5] text-[#1E88E5] hover:bg-[#E3F2FD] py-3 px-8 rounded-lg transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#1E88E5] hover:bg-[#1976D2] text-white py-3 px-8 rounded-lg transition-colors font-medium"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default AppointmentBooking
