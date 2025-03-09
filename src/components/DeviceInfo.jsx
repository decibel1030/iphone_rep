import React from 'react'

function DeviceInfo() {
  return (
<div className="max-w-2xl mx-auto p-6 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Specifications</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <tbody>
            {[
              ["Display", "6.1-inch Super Retina XDR"],
              ["Chip", "A17 Pro"],
              ["Camera", "48 MP main, Ultra Wide, Telephoto"],
              ["Battery", "Up to 23 hours video playback"],
              ["Material", "Titanium frame"],
              ["Weight", "187 grams"],
              ["OS", "iOS 17"],
            ].map(([feature, value], index) => (
              <tr key={feature} className={index % 2 === 0 ? "bg-black" : "bg-zinc"}>
                <td className="p-3 font-medium border border-gray-300">{feature}</td>
                <td className="p-3 border border-gray-300">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeviceInfo