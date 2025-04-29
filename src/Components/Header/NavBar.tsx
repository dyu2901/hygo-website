"use client"

import React from "react"
import { XMarkIcon } from "@heroicons/react/20/solid"
import type { SelectedPage } from "@/Components/Shared/Types"
import { useState } from "react"

import useMediaQuery from "@/Hooks/useMediaQuery"
import Links from "./Links"
import { Link } from "react-router-dom"

type Props = {
  flexBetween: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const NavBar = ({ flexBetween, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const [isDoctorMenuOpen, setIsDoctorMenuOpen] = useState<boolean>(false)
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)")

  return (
    <nav className="h-16">
      {/* Desktop Navigation */}
      {isAboveMediumScreens && (
        <div className={`${flexBetween} lg:gap-16 gap-12 py-2`}>
          <div className={`${flexBetween} gap-12`}>
            <Links selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

            {/* Doctor Dropdown */}
            <div className="relative group text-[#4A44BE] cursor-pointer">
              <span className="hover:text-[#4A44BE] font-semibold">Doctor</span>
              <div className="absolute top-[90%] mt-1 bg-white text-[#4A44BE] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 min-w-[170px]">
                <div className="py-2">
                  <Link to="/specialists" className="block px-4 py-2 hover:bg-gray-100">
                    Our Specialists
                  </Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group text-[#4A44BE] cursor-pointer">
              <span className="hover:text-[#4A44BE] font-semibold">About</span>
              <div className="absolute top-[90%] mt-1 bg-white text-[#4A44BE] rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 min-w-[170px]">
                <div className="py-2">
                  <Link to="/about-hygo" className="block px-4 py-2 hover:bg-gray-100">
                    About HYGO
                  </Link>
                  <Link to="/our-mission" className="block px-4 py-2 hover:bg-gray-100">
                    Our Mission
                  </Link>
                  <Link to="/our-vision" className="block px-4 py-2 hover:bg-gray-100">
                    Our Vision
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-screen w-[175px] md:w-[300px] bg-[#000055] text-white drop-shadow-2xl">
          {/* Close Button */}
          <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-10 w-10" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[20%] flex flex-col items-start gap-5 text-lg">
            <Links selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

            {/* Doctor Dropdown (toggle) */}
            <div className="mt-4">
              <button
                onClick={() => setIsDoctorMenuOpen((prev) => !prev)}
                className="font-semibold hover:text-[#4A44BE]"
              >
                Doctor
              </button>
              {isDoctorMenuOpen && (
                <div className="flex flex-col gap-2 mt-2 text-sm pl-2">
                  <Link to="/specialists" className="hover:text-[#4A44BE]">
                    Our Specialists
                  </Link>
                  <Link to="/team" className="hover:text-[#4A44BE]">
                    Our Team
                  </Link>
                  <Link to="/schedules" className="hover:text-[#4A44BE]">
                    Schedules
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown (toggle) */}
            <div className="mt-4">
              <button
                onClick={() => setIsAboutMenuOpen((prev) => !prev)}
                className="font-semibold hover:text-[#4A44BE]"
              >
                About
              </button>
              {isAboutMenuOpen && (
                <div className="flex flex-col gap-2 mt-2 text-sm pl-2">
                  <Link to="/about" className="hover:text-[#4A44BE]" onClick={() => setIsMenuToggled(false)}>
                    About Overview
                  </Link>
                  <Link to="/aboutHYGO" className="hover:text-[#4A44BE]" onClick={() => setIsMenuToggled(false)}>
                    About HYGO
                  </Link>
                  <Link to="/our-mission" className="hover:text-[#4A44BE]" onClick={() => setIsMenuToggled(false)}>
                    Our Mission
                  </Link>
                  <Link to="/our-vision" className="hover:text-[#4A44BE]" onClick={() => setIsMenuToggled(false)}>
                    Our Vision
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
