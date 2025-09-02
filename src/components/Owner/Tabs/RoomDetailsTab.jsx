import React, { useState } from "react";

export default function RoomDetailsTab({ room, goBack }) {
  // Sample tenants data for this room
  const tenants = [
    { name: "Rahul Sharma", number: "9876543210", aadhar: "XXXX-XXXX-1234", profession: "Software Engineer" },
    { name: "Neha Verma", number: "9123456780", aadhar: "XXXX-XXXX-5678", profession: "Designer" },
  ];

  const [agreementSigned, setAgreementSigned] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Side → Tenants Info */}
      <div className="flex-1 bg-white rounded-2xl shadow p-6">
        <button onClick={goBack} className="mb-4 text-indigo-600 hover:underline">
          ← Back to Rooms
        </button>
        <h2 className="text-xl font-bold mb-4">Room {room} - Tenants</h2>

        {tenants.map((t, idx) => (
          <div
            key={idx}
            className="p-4 mb-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <p className="font-semibold text-lg">{t.name}</p>
            <p>📞 {t.number}</p>
            <p>🆔 Aadhar: {t.aadhar}</p>
            <p>💼 Profession: {t.profession}</p>
          </div>
        ))}
      </div>

      {/* Right Side → Agreement Info */}
      <div className="w-full lg:w-64 bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-2 font-semibold">Agreement Status</p>
        {agreementSigned ? (
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-6xl mb-2">✅</span>
            <p className="font-semibold text-green-700">Signed</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-6xl mb-2">❌</span>
            <p className="font-semibold text-red-700">Not Signed</p>
            <button
              onClick={() => setAgreementSigned(true)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Send Reminder
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
