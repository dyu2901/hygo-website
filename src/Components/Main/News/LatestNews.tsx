"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import { Calendar } from "lucide-react"

const LatestNews = () => {
  const navigate = useNavigate()

  const newsItems = [
    {
      title: "HYGO Introduces New Advanced Cardiac Care Center",
      excerpt:
        "Our new state-of-the-art cardiac care center offers the latest in heart disease diagnosis and treatment.",
      date: "April 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      category: "Facility Updates",
    },
    {
      title: "Dr. Haard Vasavada Recognized for Excellence in Neurosurgery",
      excerpt:
        "Our leading neurosurgeon receives prestigious award for pioneering work in minimally invasive procedures.",
      date: "March 28, 2023",
      image: "/placeholder.svg?height=200&width=400",
      category: "Staff Recognition",
    },
    {
      title: "New Research Study on Diabetes Management Shows Promising Results",
      excerpt: "HYGO researchers demonstrate significant improvements in long-term diabetes control with new approach.",
      date: "February 12, 2023",
      image: "/placeholder.svg?height=200&width=400",
      category: "Research",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A5082] mb-4">Latest News & Updates</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stay informed about the latest developments, research breakthroughs, and events at HYGO Healthcare.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate("/news")}
          >
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-[#E3F2FD] text-[#1E88E5] text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm ml-auto">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2A5082] mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <button className="text-[#1E88E5] font-medium hover:underline flex items-center">
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/news")}
          className="bg-white border border-[#1E88E5] text-[#1E88E5] hover:bg-[#E3F2FD] px-8 py-3 rounded-full transition-colors text-lg font-medium"
        >
          View All News
        </button>
      </div>
    </div>
  )
}

export default LatestNews
