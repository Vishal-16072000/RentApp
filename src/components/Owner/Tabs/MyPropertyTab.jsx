import React, { useState } from "react";

export default function MyPropertyTab() {
  const [properties, setProperties] = useState([
    { id: 1, name: "Green Villa", rooms: ["101", "102", "103"] },
    { id: 2, name: "Skyline Apartments", rooms: ["201", "202", "203"] },
  ]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProperty, setNewProperty] = useState({ name: "", rooms: "" });

  // Dummy tenants data room-wise
  const roomData = {
    "101": { tenants: [{ name: "Ravi Kumar", photo: "/avatar1.png", aadhar: "XXXX-1234", phone: "9876543210", profession: "Engineer" }], rentPaid: true },
    "102": { tenants: [{ name: "Priya Sharma", photo: "/avatar3.png", aadhar: "XXXX-8765", phone: "9988776655", profession: "Teacher" }], rentPaid: false },
    "103": { tenants: [{ name: "Neha Gupta", photo: "/avatar5.png", aadhar: "XXXX-9876", phone: "9988001122", profession: "Designer" }], rentPaid: true },
    "201": { tenants: [{ name: "Suresh Yadav", photo: "/avatar4.png", aadhar: "XXXX-4321", phone: "9876501234", profession: "Student" }], rentPaid: true },
  };

  // Filter rooms based on search query
  const filteredRooms = selectedProperty
    ? selectedProperty.rooms.filter((room) => room.includes(searchQuery))
    : [];

  // Add property handler
  const handleAddProperty = () => {
    if (!newProperty.name || !newProperty.rooms) return;

    const roomsArray = newProperty.rooms.split(",").map((r) => r.trim());
    const newId = properties.length + 1;

    setProperties([
      ...properties,
      { id: newId, name: newProperty.name, rooms: roomsArray },
    ]);

    setNewProperty({ name: "", rooms: "" });
    setShowAddForm(false);
  };

  return (
    <div>
      {/* Property List */}
      {!selectedProperty && !selectedRoom && (
        <div className="px-2">
          <h2 className="text-xl font-semibold mb-4">My Properties</h2>
          <div className="space-y-4">
            {properties.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProperty(p)}
                className="p-4 border rounded-xl shadow hover:shadow-lg cursor-pointer transition flex justify-between items-center"
              >
                <p className="font-bold">{p.name}</p>
                <p className="text-gray-500">{p.rooms.length} Rooms</p>
              </div>
            ))}
          </div>

          {/* Add Property Button */}
          <button
            onClick={() => setShowAddForm(true)}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            + Add Property
          </button>

          {/* Add Property Form */}
          {showAddForm && (
            <div className="mt-4 p-4 border rounded-xl shadow bg-gray-50">
              <h3 className="font-semibold mb-2">Add New Property</h3>
              <input
                type="text"
                placeholder="Property Name"
                value={newProperty.name}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, name: e.target.value })
                }
                className="w-full border p-2 rounded mb-2"
              />
              <input
                type="text"
                placeholder="Rooms (comma separated, e.g. 301,302,303)"
                value={newProperty.rooms}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, rooms: e.target.value })
                }
                className="w-full border p-2 rounded mb-2"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleAddProperty}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Selected Property → Room-wise Cards */}
      {selectedProperty && !selectedRoom && (
        <div className="px-2">
          <button
            onClick={() => setSelectedProperty(null)}
            className="mb-4 text-indigo-600 hover:underline"
          >
            ← Back to Properties
          </button>
          <h2 className="text-xl font-semibold mb-4">
            {selectedProperty.name} - Rooms
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search Room..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-6 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Room Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRooms.map((room) => (
              <div
                key={room}
                onClick={() => setSelectedRoom(room)}
                className="p-4 border rounded-xl shadow hover:shadow-lg transition flex flex-col cursor-pointer"
              >
                <p className="font-bold text-lg mb-2">Room {room}</p>
                <p>Tenants: {roomData[room]?.tenants?.length || 0}</p>
                <p
                  className={`font-semibold ${
                    roomData[room]?.rentPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Rent: {roomData[room]?.rentPaid ? "Paid" : "Pending"}
                </p>
              </div>
            ))}
            {filteredRooms.length === 0 && (
              <p className="text-gray-500 col-span-full">No rooms found.</p>
            )}
          </div>
        </div>
      )}

      {/* Room Details */}
      {selectedRoom && (
        <div>
          <button
            onClick={() => setSelectedRoom(null)}
            className="mb-4 text-indigo-600 hover:underline"
          >
            ← Back to Rooms
          </button>
          <h2 className="text-xl font-semibold mb-4">
            Room {selectedRoom} - Details
          </h2>

          <div className="space-y-4">
            {roomData[selectedRoom]?.tenants?.map((tenant, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl shadow flex items-center space-x-4"
              >
                <img
                  src={tenant.photo}
                  alt={tenant.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{tenant.name}</p>
                  <p>📞 {tenant.phone}</p>
                  <p>🆔 Aadhar: {tenant.aadhar}</p>
                  <p>💼 {tenant.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
