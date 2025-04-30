import React from 'react';

const Specialists = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#4A44BE]">Meet Our Specialists</h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
        Experts across multiple disciplines dedicated to your health.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-full h-56 bg-gradient-to-br from-[#655EF9] to-[#4A44BE] rounded-xl mb-6 bg-cover bg-center"></div>
            <h3 className="text-xl font-bold mb-2 text-[#4A44BE]">Dr. Specialist {i}</h3>
            <p className="text-gray-600">Specialty {i}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Specialists
