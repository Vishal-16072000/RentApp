import React, { useState } from "react";

export default function PayoutTab() {
  const [payments] = useState([
    {
      month: "Aug 2025",
      paymentDate: "15 Aug 2025",
      amount: 15000,
      mode: "UPI",
      details: "vishal@upi",
      refNo: "TXN12345",
      status: "Success",
    },
    {
      month: "Jul 2025",
      paymentDate: "10 Jul 2025",
      amount: 15000,
      mode: "Bank Transfer",
      details: "XXXX-5678",
      refNo: "TXN87654",
      status: "Success",
    },
    {
      month: "Jun 2025",
      paymentDate: "12 Jun 2025",
      amount: 15000,
      mode: "PhonePe",
      details: "+91-9876543210",
      refNo: "TXN34567",
      status: "Success",
    },
  ]);

  const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
  const lastPayment = payments[0]; // Latest entry (Aug)

  return (
    <div className="p-6">
      {/* Summary Section */}
      <h2 className="text-2xl font-semibold mb-6">Payout History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 border rounded-xl shadow bg-white">
          <p className="text-gray-500">Total Paid</p>
          <p className="text-2xl font-bold text-green-600">₹{totalPaid}</p>
        </div>
        <div className="p-4 border rounded-xl shadow bg-white">
          <p className="text-gray-500">Last Payment</p>
          <p className="text-lg font-semibold">{lastPayment.paymentDate}</p>
        </div>
        <div className="p-4 border rounded-xl shadow bg-white">
          <p className="text-gray-500">Pending</p>
          <p className="text-lg font-semibold text-red-500">₹0</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border rounded-xl shadow">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Payment Date</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Mode</th>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-left">Ref No.</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{p.month}</td>
                <td className="p-3">{p.paymentDate}</td>
                <td className="p-3 font-semibold">₹{p.amount}</td>
                <td className="p-3">{p.mode}</td>
                <td className="p-3">{p.details}</td>
                <td className="p-3">{p.refNo}</td>
                <td
                  className={`p-3 font-semibold ${
                    p.status === "Success"
                      ? "text-green-600"
                      : p.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
