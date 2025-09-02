import React from "react";
import OwnerDashboard from "./OwnerDashboard";


export default function Overview({ tenants, recentActivities }) {
    
    return(
            <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 px-2">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <span className="text-indigo-600 text-2xl sm:text-3xl">💰</span>
                <p className="mt-1 text-gray-500 text-sm">Total Rent Collected</p>
                <p className="mt-1 font-bold text-lg sm:text-xl">₹1,20,000</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <span className="text-green-500 text-2xl sm:text-3xl">✅</span>
                <p className="mt-1 text-gray-500 text-sm">Payments Completed</p>
                <p className="mt-1 font-bold text-lg sm:text-xl">2/3 Rooms</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <span className="text-blue-500 text-2xl sm:text-3xl">👥</span>
                <p className="mt-1 text-gray-500 text-sm">Total Tenants</p>
                <p className="mt-1 font-bold text-lg sm:text-xl">6 People</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <span className="text-red-500 text-2xl sm:text-3xl">🛏</span>
                <p className="mt-1 text-gray-500 text-sm">Occupied Rooms</p>
                <p className="mt-1 font-bold text-lg sm:text-xl">3/3 Rooms</p>
            </div>
            </div>

            {/* Tenant Table (Responsive) */}
            <div className="bg-white shadow rounded-xl p-4 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">Tenant Overview</h2>
            <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-200">
                    <th className="py-2 px-4 text-gray-500">Room</th>
                    <th className="py-2 px-4 text-gray-500">Tenant</th>
                    <th className="py-2 px-4 text-gray-500">People</th>
                    <th className="py-2 px-4 text-gray-500">Rent Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tenants.map((t, idx) => (
                    <tr
                        key={idx}
                        className="border-b border-gray-100 hover:bg-indigo-50 transition"
                    >
                        <td className="py-2 px-4 font-medium">{t.room}</td>
                        <td className="py-2 px-4">{t.name}</td>
                        <td className="py-2 px-4">{t.people}</td>
                        <td
                        className={`py-2 px-4 font-semibold ${
                            t.rentPaid ? "text-green-500" : "text-red-500"
                        }`}
                        >
                        {t.rentPaid ? "Paid" : "Pending"}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Mobile Tenant Cards */}
            <div className="sm:hidden space-y-3">
                {tenants.map((t, idx) => (
                <div
                    key={idx}
                    className="border rounded-lg p-3 shadow-sm flex justify-between items-center"
                >
                    <div>
                    <p className="font-semibold text-gray-700">
                        Room {t.room} - {t.name}
                    </p>
                    <p className="text-sm text-gray-500">People: {t.people}</p>
                    </div>
                    <span
                    className={`text-sm font-semibold ${
                        t.rentPaid ? "text-green-600" : "text-red-600"
                    }`}
                    >
                    {t.rentPaid ? "Paid" : "Pending"}
                    </span>
                </div>
                ))}
            </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                Recent Activity
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                {recentActivities.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>
            </div>
            </>
        )
    }