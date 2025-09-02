import React, { useState } from "react";

export default function MaintenanceTab({ role = "tenant" }) {
  const [requests, setRequests] = useState([
    {
      id: 1,
      room: "101",
      tenant: "Ravi Kumar",
      issue: "Water leakage in bathroom",
      status: "Pending",
      date: "2025-09-01",
    },
    {
      id: 2,
      room: "202",
      tenant: "Priya Sharma",
      issue: "Fan not working",
      status: "In Progress",
      date: "2025-08-28",
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    room: "",
    tenant: "",
    issue: "",
  });

  // Add new maintenance request (tenant side)
  const handleAddRequest = () => {
    if (!newRequest.room || !newRequest.tenant || !newRequest.issue) return;

    const request = {
      id: Date.now(),
      ...newRequest,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setRequests([...requests, request]);
    setNewRequest({ room: "", tenant: "", issue: "" });
  };

  // Update status (owner side)
  const handleStatusChange = (id, newStatus) => {
    setRequests(
      requests.map((r) =>
        r.id === id ? { ...r, status: newStatus } : r
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Maintenance</h2>

      {/* Tenant View → Add Request */}
      {role === "tenant" && (
        <div className="mb-6 border p-4 rounded-xl shadow">
          <h3 className="font-bold mb-2">Raise a Request</h3>
          <input
            type="text"
            placeholder="Room No."
            value={newRequest.room}
            onChange={(e) =>
              setNewRequest({ ...newRequest, room: e.target.value })
            }
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Your Name"
            value={newRequest.tenant}
            onChange={(e) =>
              setNewRequest({ ...newRequest, tenant: e.target.value })
            }
            className="w-full border p-2 mb-2 rounded"
          />
          <textarea
            placeholder="Describe Issue"
            value={newRequest.issue}
            onChange={(e) =>
              setNewRequest({ ...newRequest, issue: e.target.value })
            }
            className="w-full border p-2 mb-2 rounded"
          />
          <button
            onClick={handleAddRequest}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Submit Request
          </button>
        </div>
      )}

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="p-4 border rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <p className="font-bold">Room {req.room} - {req.tenant}</p>
              <p className="text-gray-600">{req.issue}</p>
              <p className="text-sm text-gray-500">📅 {req.date}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  req.status === "Pending"
                    ? "bg-red-100 text-red-600"
                    : req.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {req.status}
              </span>

              {/* Owner can change status */}
              {role === "owner" && (
                <select
                  value={req.status}
                  onChange={(e) => handleStatusChange(req.id, e.target.value)}
                  className="ml-3 border rounded p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
