import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import Specialists from "./Components/Main/Doctors/Specialists"
import Team from "./Components/Main/Doctors/Team"
import Schedules from "./Components/Main/Doctors/Schedules"
import Services from "./Components/Main/Services/Services"
import Reviews from "./Components/Main/Review/Reviews"
import Doctors from "./Components/Main/Doctors/Doctors"
import About from "./Components/Main/About/about"
import OurMission from "./Components/Main/About/OurMission"
import OurVision from "./Components/Main/About/OurVision"
import AboutHYGO from "./Components/Main/About/AboutHYGO"
import Departments from "./Components/Main/Departments/Departments"
import PatientResources from "./Components/Main/PatientResources/PatientResources"
import News from "./Components/Main/News/News"
import AppointmentBooking from "./Components/Main/Appointment/AppointmentBooking"
import React from "react"

function App() {
  return (
    <Router>
      <div className="app bg-white text-[#2A5082] min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-hygo" element={<AboutHYGO />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/patient-resources" element={<PatientResources />} />
            <Route path="/news" element={<News />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
