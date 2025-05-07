import React from 'react';

type Props = {
  doc: {
    img: string
    name: string
    job: string
  }
}

const Doctor = ({ doc }: Props) => {
  return (
    <div className="group hover:transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-br from-[#0E3293] to-[#0E3293] p-6 sm:p-8 rounded-[40px] overflow-hidden shadow-lg">
        <img
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-3xl transform group-hover:-translate-y-2 transition-transform duration-300"
          src={doc.img}
          alt={doc.name}
        />
      </div>
      <div className="pt-6 text-center">
        <h5 className="text-xl sm:text-2xl font-bold text-[#0E3293] mb-1">{doc.name}</h5>
        <p className="text-sm sm:text-base text-gray-600">{doc.job}</p>
      </div>
    </div>
  )
}

export default Doctor;
