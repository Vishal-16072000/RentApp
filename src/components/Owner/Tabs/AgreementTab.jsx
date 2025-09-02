import React, { useState } from "react";

export default function AgreementTab() {
  const [selectedAgreement, setSelectedAgreement] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // Dummy Agreement Data
  const agreements = [
    {
      id: 1,
      room: "101",
      tenant: {
        name: "Rahul Sharma",
        phone: "9876543210",
        profession: "Software Engineer",
        aadhar: "XXXX-XXXX-1234",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      status: "signed",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      fileUrl: "#",
    },
    {
      id: 2,
      room: "102",
      tenant: {
        name: "Neha Verma",
        phone: "9876500010",
        profession: "Designer",
        aadhar: "XXXX-XXXX-5678",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      status: "pending",
      startDate: null,
      endDate: null,
      fileUrl: null,
    },
    {
      id: 3,
      room: "103",
      tenant: {
        name: "Amit Kumar",
        phone: "9998877660",
        profession: "Teacher",
        aadhar: "XXXX-XXXX-2222",
        photo: "https://randomuser.me/api/portraits/men/65.jpg",
      },
      status: "signed",
      startDate: "2025-02-15",
      endDate: "2026-02-14",
      fileUrl: "#",
    },
  ];

  // Filter + Search Logic
  const filteredAgreements = agreements.filter((a) => {
    const matchesSearch =
      a.tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.room.includes(searchQuery);
    const matchesFilter =
      filter === "all" || (filter === "signed" ? a.status === "signed" : a.status === "pending");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Tenant Agreements</h2>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by room or tenant..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-lg p-2 w-full sm:w-1/2 focus:ring-2 focus:ring-indigo-400"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg p-2 w-full sm:w-1/4 focus:ring-2 focus:ring-indigo-400"
        >
          <option value="all">All</option>
          <option value="signed">Signed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Room</th>
              <th className="p-3">Tenant</th>
              <th className="p-3">Status</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3">Agreement</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgreements.map((a) => (
              <tr
                key={a.id}
                onClick={() => setSelectedAgreement(a)}
                className="border-t hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-3">{a.room}</td>
                <td className="p-3">{a.tenant.name}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      a.status === "signed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {a.status === "signed" ? "Signed" : "Pending"}
                  </span>
                </td>
                <td className="p-3">{a.startDate || "-"}</td>
                <td className="p-3">{a.endDate || "-"}</td>
                <td className="p-3">
                  {a.fileUrl ? (
                    <a
                      href={a.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
            {filteredAgreements.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No agreements found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedAgreement && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setSelectedAgreement(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4">Agreement Details</h3>

            <div className="flex items-center mb-4">
              <img
                src={selectedAgreement.tenant.photo}
                alt={selectedAgreement.tenant.name}
                className="w-16 h-16 rounded-full mr-3"
              />
              <div>
                <p className="font-bold">{selectedAgreement.tenant.name}</p>
                <p className="text-sm text-gray-600">{selectedAgreement.tenant.profession}</p>
              </div>
            </div>

            <p><strong>Room:</strong> {selectedAgreement.room}</p>
            <p><strong>Phone:</strong> {selectedAgreement.tenant.phone}</p>
            <p><strong>Aadhar:</strong> {selectedAgreement.tenant.aadhar}</p>
            <p><strong>Status:</strong> {selectedAgreement.status}</p>
            <p><strong>Start Date:</strong> {selectedAgreement.startDate || "-"}</p>
            <p><strong>End Date:</strong> {selectedAgreement.endDate || "-"}</p>

            {selectedAgreement.fileUrl ? (
              <a
                href={selectedAgreement.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                View Agreement
              </a>
            ) : (
              <p className="mt-4 text-red-500">No Agreement Uploaded</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
