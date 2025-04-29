import { Calendar, User, Tag } from "lucide-react"
import React from "react"
const News = () => {
  const newsItems = [
    {
      title: "HYGO Introduces New Advanced Cardiac Care Center",
      excerpt:
        "Our new state-of-the-art cardiac care center offers the latest in heart disease diagnosis and treatment.",
      content:
        "HYGO Healthcare is proud to announce the opening of our new Advanced Cardiac Care Center, featuring the latest diagnostic and treatment technologies for heart disease. The center includes a cardiac catheterization lab, advanced imaging capabilities, and a specialized team of cardiologists and cardiac surgeons. This expansion allows us to provide comprehensive cardiac care, from preventive services to complex interventions, all in one location.",
      date: "April 15, 2023",
      author: "Dr. Haard Vasavada",
      image: "/placeholder.svg?height=300&width=600",
      category: "Facility Updates",
    },
    {
      title: "Dr. Haard Vasavada Recognized for Excellence in Neurosurgery",
      excerpt:
        "Our leading neurosurgeon receives prestigious award for pioneering work in minimally invasive procedures.",
      content:
        "We are pleased to announce that Dr. Haard Vasavada has been recognized with the National Award for Excellence in Neurosurgery for his pioneering work in minimally invasive neurosurgical procedures. Dr. Vasavada's innovative techniques have significantly reduced recovery times and improved outcomes for patients with complex neurological conditions. This recognition highlights HYGO's commitment to advancing medical science and providing cutting-edge care.",
      date: "March 28, 2023",
      author: "HYGO Communications Team",
      image: "/placeholder.svg?height=300&width=600",
      category: "Staff Recognition",
    },
    {
      title: "New Research Study on Diabetes Management Shows Promising Results",
      excerpt: "HYGO researchers demonstrate significant improvements in long-term diabetes control with new approach.",
      content:
        "A research team led by HYGO endocrinologists has published promising results from a two-year study on comprehensive diabetes management. The study, which involved 250 patients with type 2 diabetes, demonstrated that an integrated approach combining medication management, nutrition counseling, regular monitoring, and lifestyle coaching led to significantly better glycemic control and reduced complications compared to standard care. The findings have been published in the Journal of Diabetes Care and highlight the importance of multidisciplinary approaches to chronic disease management.",
      date: "February 12, 2023",
      author: "Dr. Priyank Vasavada",
      image: "/placeholder.svg?height=300&width=600",
      category: "Research",
    },
    {
      title: "HYGO Launches Community Health Initiative",
      excerpt:
        "New program aims to improve health outcomes in underserved communities through education and preventive care.",
      content:
        "HYGO Healthcare has launched a new Community Health Initiative aimed at improving health outcomes in underserved areas. The program includes free health screenings, educational workshops, and preventive care services delivered through mobile clinics and community partnerships. By addressing barriers to healthcare access and promoting health literacy, the initiative seeks to reduce health disparities and empower community members to take control of their health.",
      date: "January 20, 2023",
      author: "HYGO Community Outreach Team",
      image: "/placeholder.svg?height=300&width=600",
      category: "Community Outreach",
    },
    {
      title: "HYGO Implements Advanced Electronic Health Record System",
      excerpt: "New digital platform enhances patient care coordination and improves access to medical information.",
      content:
        "HYGO Healthcare has successfully implemented a state-of-the-art Electronic Health Record (EHR) system across all departments. The new platform enhances care coordination between specialists, provides secure access to medical records for patients, and incorporates advanced clinical decision support tools. This digital transformation represents a significant investment in technology that will improve efficiency, reduce medical errors, and enhance the overall patient experience.",
      date: "December 5, 2022",
      author: "HYGO IT Department",
      image: "/placeholder.svg?height=300&width=600",
      category: "Technology",
    },
    {
      title: "Annual Health Fair Scheduled for Next Month",
      excerpt:
        "Join us for free health screenings, educational sessions, and family activities at our annual community event.",
      content:
        "HYGO Healthcare will host its annual Health Fair on June 15th from 10:00 AM to 4:00 PM at our main campus. The event will feature free health screenings, educational sessions on common health concerns, demonstrations of healthy cooking, fitness activities, and special programs for children. Healthcare professionals from various specialties will be available to answer questions and provide guidance on health-related topics. This community event is open to all and aims to promote health awareness and preventive care.",
      date: "November 18, 2022",
      author: "HYGO Events Team",
      image: "/placeholder.svg?height=300&width=600",
      category: "Events",
    },
  ]

  const categories = [
    "All",
    "Facility Updates",
    "Staff Recognition",
    "Research",
    "Community Outreach",
    "Technology",
    "Events",
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#2A5082] mb-4">News & Updates</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stay informed about the latest developments, research breakthroughs, and events at HYGO Healthcare.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0
                ? "bg-[#1E88E5] text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-[#E3F2FD] text-[#1E88E5] text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#2A5082] mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {item.author}
                </div>
              </div>
              <button className="text-[#1E88E5] font-medium hover:underline flex items-center">
                Read full article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#1E88E5] border border-[#1E88E5]">1</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#E3F2FD] to-[#E8F5E9] p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-[#2A5082] mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Stay updated with the latest news, health tips, and upcoming events from HYGO Healthcare. Our newsletter
              is delivered monthly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              />
              <button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-6 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg p-4">
              <svg className="w-24 h-24 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
