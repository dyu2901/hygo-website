import React from "react"
import { DoctorsData } from "@/Components/Shared/Consts"
import SectionWrapper from "../SectionWrapper"
import Doctor from "./Doctor"

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <div className="space-y-20">
        {/* Heading Section */}
        <div>
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#0E3293]">{DoctorsData.heading}</h3>

          {/* Doctor Cards Section */}
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {DoctorsData.doctors.map((doctor, index) => (
              <div key={index} className="w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px]">
                <Doctor doc={doctor} />
              </div>
            ))}
          </div>
        </div>

        {/* Section for Specialists and Team (add later) */}
        <div id="specialists" className="scroll-mt-20">
          {/* Specialists component needs to be imported and defined */}
          {/* <Specialists /> */}
        </div>

        <div id="team" className="scroll-mt-20">
          {/* Team component needs to be imported and defined */}
          {/* <Team /> */}
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#0E3293]">{DoctorsData.heading2}</h2>
          <p className="text-center text-base sm:text-lg max-w-2xl mx-auto mb-12 text-gray-600">{DoctorsData.desc}</p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Doctors
