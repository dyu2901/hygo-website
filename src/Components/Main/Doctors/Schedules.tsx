import React from 'react';

const Schedules = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#4A44BE]">Doctor Schedules</h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
        Find available slots and plan your visit.
      </p>
      <div className="overflow-x-auto px-8">
        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
          <thead className="bg-[#4A44BE] text-white">
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
