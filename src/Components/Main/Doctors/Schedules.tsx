import React from 'react';

const Schedules = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-10 py-2 text-[#0E3293] hover:text-[#655EF9] font-medium transition-colors flex items-center"
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
      <h2 className="text-4xl font-bold mb-6 text-center text-[#0E3293]">Doctor Schedules</h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
        Find available slots and plan your visit.
      </p>
      <div className="overflow-x-auto px-8">
        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
          <thead className="bg-[#0e3293] text-white">
            <tr>
              <th className="p-4 text-left">Doctor</th>
              <th className="p-4 text-left">Day</th>
              <th className="p-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4">Dr. Arjun</td>
              <td className="p-4">Monday</td>
              <td className="p-4">10:00 AM - 2:00 PM</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4">Dr. Meera</td>
              <td className="p-4">Wednesday</td>
              <td className="p-4">4:00 PM - 8:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Schedules
