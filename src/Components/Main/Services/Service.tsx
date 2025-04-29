import React from "react"
"use client"

import type { SelectedService } from "@/Components/Shared/Types"

type Props = {
  SelectService: string
  setSelectService: (value: SelectedService) => void
  service: {
    img: string
    title: string
  }
}

const Service = ({ SelectService, setSelectService, service }: Props) => {
  const lowerCaseService = service.title.toLowerCase().replace(/\s+/g, "") as SelectedService
  return (
    <div
      onClick={() => setSelectService(lowerCaseService)}
      className={`${
        SelectService === lowerCaseService
          ? "bg-[#4A44BE] text-white scale-105 rounded-3xl"
          : "bg-white hover:bg-[#e6f9ff] hover:scale-105"
      } cursor-pointer transition-all duration-300 rounded-2xl flex flex-col items-center gap-4 p-4 lg:p-8 shadow-lg hover:shadow-xl`}
    >
      <img
        className={`max-w-[40px] md:max-w-[60px] lg:max-w-[70px] transition-transform duration-300 ${
          SelectService === lowerCaseService ? "filter brightness-0 invert" : ""
        }`}
        src={service.img}
        alt={service.title}
      />
      <p className="text-sm font-bold sm:text-base lg:text-lg text-center">{service.title}</p>
    </div>
  )
}

export default Service
