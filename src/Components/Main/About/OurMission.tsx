import React from 'react';

const OurMission = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#4A44BE]">Our Mission</h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
        Our mission is to provide exceptional healthcare services with compassion and dedication.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#655EF9] to-[#4A44BE] rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold mb-2 text-[#4A44BE]">Mission Point {i}</h3>
            <p className="text-gray-600">Description {i}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurMission
