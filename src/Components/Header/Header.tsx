"use client"

import React from "react"
import Logo from "@/assets/Images/Logo.png"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Search, Menu, X, ChevronDown } from "lucide-react"

const Header = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: sectionId } })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      // Clean up the state
      window.history.replaceState({}, document.title)
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = location.pathname === "/"

  return (
    <div
      className={`flex justify-between items-center ${
        isTopOfPage && isHomePage ? "bg-transparent" : "bg-white shadow-md"
      } transition-all duration-300 fixed top-0 z-50 w-full p-4 md:px-20`}
    >
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img className="w-24 md:w-32" src={Logo || "/placeholder.svg"} alt="HYGO Healthcare Logo" />
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 max-w-md">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for services, doctors..."
          className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Mobile Search Toggle */}
      <button className="md:hidden text-[#2A5082]" onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <Search className="w-6 h-6" />
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-[#2A5082] ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-md md:hidden">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for services, doctors..."
              className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-6">
        <div className="relative group">
          <button className="flex items-center text-[#2A5082] hover:text-[#1E88E5] transition-colors">
            About <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <button
                onClick={() => navigate("/about-hygo")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                About HYGO
              </button>
              <button
                onClick={() => navigate("/our-mission")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Mission
              </button>
              <button
                onClick={() => navigate("/our-vision")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Vision
              </button>
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex items-center text-[#2A5082] hover:text-[#1E88E5] transition-colors">
            Departments <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <button
                onClick={() => navigate("/departments")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                All Departments
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Services
              </button>
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex items-center text-[#2A5082] hover:text-[#1E88E5] transition-colors">
            Doctors <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <button
                onClick={() => navigate("/specialists")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Specialists
              </button>
              <button
                onClick={() => navigate("/team")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Team
              </button>
              <button
                onClick={() => navigate("/schedules")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Doctor Schedules
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/patient-resources")}
          className="text-[#2A5082] hover:text-[#1E88E5] transition-colors"
        >
          Patient Resources
        </button>

        <button onClick={() => navigate("/news")} className="text-[#2A5082] hover:text-[#1E88E5] transition-colors">
          News
        </button>

        <button
          onClick={() => navigate("/appointment")}
          className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-4 py-2 rounded-full transition-colors"
        >
          Book Appointment
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <div className="border-b pb-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/about-hygo")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                About HYGO
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/our-mission")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Our Mission
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/our-vision")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Our Vision
              </button>
            </div>

            <div className="border-b pb-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/departments")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Departments
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToSection("services")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Services
              </button>
            </div>

            <div className="border-b pb-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/specialists")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Our Specialists
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/team")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Our Team
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  navigate("/schedules")
                }}
                className="block w-full text-left py-2 text-[#2A5082]"
              >
                Doctor Schedules
              </button>
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false)
                navigate("/patient-resources")
              }}
              className="block w-full text-left py-2 text-[#2A5082] border-b pb-2"
            >
              Patient Resources
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false)
                navigate("/news")
              }}
              className="block w-full text-left py-2 text-[#2A5082] border-b pb-2"
            >
              News
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false)
                navigate("/appointment")
              }}
              className="bg-[#1E88E5] hover:bg-[#1976D2] text-white px-4 py-2 rounded-full transition-colors text-center"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
