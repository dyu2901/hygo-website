import React from "react"
import { DoctorsData } from "@/Components/Shared/Consts"
import SectionWrapper from "../SectionWrapper"
import Doctor from "./Doctor"

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <div className="space-y-20">
        <div>
          <h3 className="text-4xl font-bold text-center mb-12 text-[#4A44BE]">{DoctorsData.heading}</h3>

          <div className="flex justify-center items-center gap-8 px-4">
            {DoctorsData.doctors.map((doctor, index) => (
              <div key={index} className="w-[250px] md:w-[280px] lg:w-[300px]">
                <Doctor doc={doctor} />
              </div>
            ))}
          </div>
        </div>

        <div id="specialists" className="scroll-mt-20">
          {/* Specialists component needs to be imported and defined */}
          {/* <Specialists /> */}
        </div>

        <div id="team" className="scroll-mt-20">
          {/* Team component needs to be imported and defined */}
          {/* <Team /> */}
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-8 text-[#4A44BE]">{DoctorsData.heading2}</h2>
          <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-gray-600">{DoctorsData.desc}</p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Doctors
