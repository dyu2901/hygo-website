"use client"

import React from "react"
import Logo from "@/assets/Images/Logo.png"
import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react"

const Header = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState<{
    about: boolean;
    services: boolean;
    doctors: boolean;
    consult: boolean;
  }>({
    about: false,
    services: false,
    doctors: false,
    consult: false,
  })
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

  const toggleMobileSubmenu = (menu: keyof typeof mobileExpandedMenus) => {
    setMobileExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
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
  
  // Focus the search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])
  
  // Handle clicks outside of search to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isSearchOpen && !target.closest('.search-container')) {
        setIsSearchOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSearchOpen])
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Implement your search functionality here
      // For example: navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
    }
  }

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
      <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 max-w-md search-container">
        <Search className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for services, doctors..."
          className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="text-gray-400 hover:text-[#2A5082]"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <button 
          type="submit"
          className={`ml-2 ${searchQuery ? 'text-[#1E88E5]' : 'text-gray-400'}`}
        >
          Search
        </button>
      </form>

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
        <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-md md:hidden transition-all duration-300 ease-in-out z-50 search-container">
          <form onSubmit={handleSearch}>
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, doctors..."
                className="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400"
              />
              {searchQuery ? (
                <button 
                  type="button"
                  className="ml-2 text-gray-400 hover:text-[#2A5082]"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-5 w-5" />
                </button>
              ) : (
                <button 
                  type="button"
                  className="ml-2 text-gray-400 hover:text-[#2A5082]"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <div className="text-xs text-gray-500">
                Try searching for "specialist", "appointment", "cardiology"...
              </div>
              <button 
                type="submit"
                className={`px-4 py-1 rounded-full text-sm ${searchQuery ? 'bg-[#1E88E5] text-white' : 'bg-gray-200 text-gray-500'}`}
                disabled={!searchQuery}
              >
                Search
              </button>
            </div>
          </form>
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
                onClick={() => navigate("/founding-team")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              > Founding Team </button>
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
            Our Services <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              {/* Nested group starts here */}
              <div className="relative group/consult">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                  Consult a Doctor <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Submenu shown only when hovering Consult a Doctor */}
                <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/consult:opacity-100 group-hover/consult:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button
                      onClick={() => navigate("/general-consultation")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      General Consultation
                    </button>
                    <button
                      onClick={() => navigate("/specialist-consultation")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Specialist Consultation
                    </button>
                  </div>
                </div>
              </div>

              {/* Other menu items */}
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
          Subscriptions
        </button>

        <button onClick={() => navigate("/news")} className="text-[#2A5082] hover:text-[#1E88E5] transition-colors">
          Contact Us
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
            {/* About Menu */}
            <div className="border-b pb-2">
              <button
                onClick={() => toggleMobileSubmenu("about")}
                className="flex w-full justify-between items-center py-2 text-[#2A5082]"
              >
                <span>About</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedMenus.about ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileExpandedMenus.about && (
                <div className="pl-4 mt-2 space-y-2">
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
                      navigate("/founding-team")
                    }}
                    className="block w-full text-left py-2 text-[#2A5082]"
                  >
                    Founding Team
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
              )}
            </div>

            {/* Services Menu */}
            <div className="border-b pb-2">
              <button
                onClick={() => toggleMobileSubmenu("services")}
                className="flex w-full justify-between items-center py-2 text-[#2A5082]"
              >
                <span>Our Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedMenus.services ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileExpandedMenus.services && (
                <div className="pl-4 mt-2 space-y-2">
                  <button
                    onClick={() => toggleMobileSubmenu("consult")}
                    className="flex w-full justify-between items-center py-2 text-[#2A5082]"
                  >
                    <span>Consult a Doctor</span>
                    <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedMenus.consult ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {mobileExpandedMenus.consult && (
                    <div className="pl-4 mt-2 space-y-2">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false)
                          navigate("/general-consultation")
                        }}
                        className="block w-full text-left py-2 text-[#2A5082]"
                      >
                        General Consultation
                      </button>
                      <button
                        onClick={() => {
                          setIsMenuOpen(false)
                          navigate("/specialist-consultation")
                        }}
                        className="block w-full text-left py-2 text-[#2A5082]"
                      >
                        Specialist Consultation
                      </button>
                    </div>
                  )}
                  
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      navigate("/departments")
                    }}
                    className="block w-full text-left py-2 text-[#2A5082]"
                  >
                    Our Services
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
              )}
            </div>

            {/* Doctors Menu */}
            <div className="border-b pb-2">
              <button
                onClick={() => toggleMobileSubmenu("doctors")}
                className="flex w-full justify-between items-center py-2 text-[#2A5082]"
              >
                <span>Doctors</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedMenus.doctors ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileExpandedMenus.doctors && (
                <div className="pl-4 mt-2 space-y-2">
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
              )}
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false)
                navigate("/patient-resources")
              }}
              className="block w-full text-left py-2 text-[#2A5082] border-b pb-2"
            >
              Subscriptions
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false)
                navigate("/news")
              }}
              className="block w-full text-left py-2 text-[#2A5082] border-b pb-2"
            >
              Contact Us
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