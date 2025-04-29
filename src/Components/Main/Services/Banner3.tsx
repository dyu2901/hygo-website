import { Banner3Data } from "@/Components/Shared/Consts"
import ListItem from "./ListItem"
import React from "react"
const Banner3 = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-br from-[#fff7e6] to-[#fffbf0] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Banner Image */}
      <div className=" shadow-xl rounded-2xl p-6 w-full max-w-sm h-[280px] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
        <img src={Banner3Data.img} alt="Banner3" className="w-full h-auto object-contain drop-shadow-lg" />
      </div>

      {/* Banner Details */}
      <div className="mt-8 text-center flex-1 w-full">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-6 text-amber-800 bg-clip-text">
          {Banner3Data.heading}
        </h3>
        <ul className="text-sm md:text-base lg:text-lg text-left flex flex-col gap-4 max-w-md mx-auto">
          {Banner3Data.texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Banner3
