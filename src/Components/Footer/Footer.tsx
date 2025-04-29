import React from "react"
import { FooterData } from "../Shared/Consts"
import SocialsDiv from "../Socials/SocialsDiv"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#2A5082] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <img width={150} src={FooterData.logo || "/placeholder.svg"} alt="HYGO Healthcare Logo" className="mb-4" />
            <p className="text-gray-300 mb-6">
              HYGO aims to make healthcare hyperlocal, advanced, affordable, and accessible. Our team of specialists is
              dedicated to providing exceptional care with compassion.
            </p>
            <SocialsDiv />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-hygo" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-white transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/patient-resources" className="text-gray-300 hover:text-white transition-colors">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Departments</h3>
            <ul className="space-y-3">
              {FooterData.departments.map((department, index) => (
                <li key={index}>
                  <Link to="/departments" className="text-gray-300 hover:text-white transition-colors">
                    {department}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#4FC3F7] mr-3 mt-1 flex-shrink-0" />
                <span>
                  303, Om Decora, 9 Square 150ft ring road nana mauva
                  <br />
                  Rajkot, Gujarat 360003
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#4FC3F7] mr-3 flex-shrink-0" />
                <a href={`tel:${FooterData.phone}`} className="hover:text-[#4FC3F7] transition-colors">
                  {FooterData.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#4FC3F7] mr-3 flex-shrink-0" />
                <a href="mailto:info@hygohealthcare.com" className="hover:text-[#4FC3F7] transition-colors">
                  info@hygohealthcare.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-[#4FC3F7] mr-3 mt-1 flex-shrink-0" />
                <span>
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#1E3A5F] p-6 rounded-xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">Stay updated with the latest news and health tips from HYGO Healthcare.</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-full bg-[#2A5082] border border-[#4FC3F7] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] min-w-[250px]"
                />
                <button
                  type="submit"
                  className="bg-[#4FC3F7] hover:bg-[#29B6F6] text-[#2A5082] font-medium px-6 py-3 rounded-full transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A6491] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HYGO Healthcare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
