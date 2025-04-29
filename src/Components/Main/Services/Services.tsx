
"use client"
import React from "react"
import { ServicesData } from "@/Components/Shared/Consts"
import Service from "./Service"
import { useState } from "react"
import { SelectedService } from "@/Components/Shared/Types"
import ListItem from "./ListItem"

import Banner1 from "./Banner1"
import Banner3 from "./Banner3"
import SectionWrapper from "../SectionWrapper"

const Services = () => {
  const [SelectService, setSelectService] = useState<SelectedService>(SelectedService.Cardiology)

  const selectedServiceData = ServicesData.find((service) => service.id === SelectService)

  return (
    <SectionWrapper id="services">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#4A44BE]">Services</h2>

      {/* Services Grid */}
      <div className="flex flex-col justify-between lg:flex-row gap-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
          {ServicesData?.map((service, index) => (
            <Service key={index} service={service} SelectService={SelectService} setSelectService={setSelectService} />
          ))}
        </div>

        {/* Service Details */}
        <div className="lg:min-w-[345px] bg-white p-6 rounded-2xl shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-[#4A44BE]">{selectedServiceData?.heading}</h3>
          <ul className="grid gap-4 animate-fadeIn">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
        </div>
      </div>

      {/* Banners Layout */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16">
        <div className="w-full max-w-md">
          <Banner1 />
        </div>
        <div className="w-full max-w-md">
          <Banner3 />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Services
