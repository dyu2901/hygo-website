import React from "react"
import Home from "./Home/Home";
import Services from "./Services/Services"
import Doctors from "./Doctors/Doctors"
import Reviews from "./Review/Reviews"
import FeaturedDepartments from "./Departments/FeaturedDepartments"
import LatestNews from "./News/LatestNews"
import WhyChooseUs from "./About/WhyChooseUs"
import QuickAppointment from "./Appointment/QuickAppointment"

const Main = () => {
  return (
    <div className="m-auto">
      <section id="home" className="scroll-mt-16">
        <Home />
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-16 md:pt-32">
        <section id="why-choose-us" className="scroll-mt-16 py-16">
          <WhyChooseUs />
        </section>

        <section id="departments" className="scroll-mt-16 py-16">
          <FeaturedDepartments />
        </section>

        <section id="doctors" className="scroll-mt-16 py-16">
          <Doctors />
        </section>

        <section id="services" className="scroll-mt-16 py-16">
          <Services />
        </section>

        <section id="appointment" className="scroll-mt-16 py-16">
          <QuickAppointment />
        </section>

        <section id="news" className="scroll-mt-16 py-16">
          <LatestNews />
        </section>

        <section id="reviews" className="scroll-mt-16 py-16">
          <Reviews />
        </section>
      </div>
    </div>
  )
}

export default Main
