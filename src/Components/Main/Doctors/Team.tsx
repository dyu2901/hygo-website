import React from 'react';

const Team = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl">
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-10 py-2 text-[#0e3293] hover:text-[#655EF9] font-medium transition-colors flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <h2 className="text-4xl font-bold mb-6 text-center text-[#0e3293]">Our Team</h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
        Meet the compassionate professionals who make HYGO exceptional.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#655EF9] to-[#0e3293] rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold mb-2 text-[#4A44BE]">Dr. Name {i}</h3>
            <p className="text-gray-600">Position {i}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
