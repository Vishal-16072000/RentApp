import React, { useState } from "react";
import Overview from "./Overview";
import MyPropertyTab from "./Tabs/MyPropertyTab";
import AgreementTab from "./Tabs/Agreementtab";
import PayoutTab from "./Tabs/PayoutTab";
import MaintenanceTab from "./Tabs/MaintenanceTab";

const tenants = [
  { room: "101", name: "Rahul Sharma", people: 2, rentPaid: true },
  { room: "102", name: "Neha Verma", people: 1, rentPaid: false },
  { room: "103", name: "Amit Kumar", people: 3, rentPaid: true },
];

const recentActivities = [
  "💰 Rent received from Rahul Sharma",
  "🛠 Maintenance request from Room 102",
  "📄 Agreement uploaded for Room 103",
];

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 md:p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4 sm:mb-6 bg-green-200 p-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700">Owner Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage your properties & tenants effortlessly
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 sm:space-x-4 mb-6 overflow-x-auto px-2 py-1">
        {[
          { id: "overview", label: "Dashboard Overview" },
          { id: "properties", label: "My Properties" },
          { id: "agreements", label: "Agreements" },
          { id: "payouts", label: "Payouts" },
          { id: "maintenance", label: "Maintenance" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-green-400 text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
       <Overview tenants={tenants} recentActivities={recentActivities}/>
      )}

        {activeTab === "properties" && (
        <MyPropertyTab/>
        )}

        {activeTab === "agreements" && (
        <AgreementTab/>
        )}

        {activeTab === "payouts" && (
        <PayoutTab/>
        )}

        {activeTab === "maintenance" && (
            <MaintenanceTab/>
        )}
    </div>
  );
}
