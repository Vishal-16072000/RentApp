import { useState } from "react";

export default function PostAndEarnBanner() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="mt-2 text-center">
      {/* Blinking Banner */}
      <div
        onClick={() => setShowForm(true)}
        className="cursor-pointer bg-yellow-200 p-4 rounded-lg shadow-lg animate-pulse"
      >
        <h2 className="text-xl font-bold">🚀 Post and Earn</h2>
        <p className="text-sm">Earn guaranteed upto ₹1000 🎉</p>
      </div>

      {/* Form Modal */}
      {showForm && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
    <div className="bg-white w-[420px] p-6 rounded-2xl shadow-2xl border border-gray-100">
      {submitted ? (
        <div className="text-center space-y-3">
          <p className="text-green-600 font-bold text-lg">
            ✅ Your post has been sent for verification!
          </p>
          <button
            onClick={() => setShowForm(false)}
            className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:scale-105 transition"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
            Post Your Room 🏠
          </h3>
            <p className="text-xs text-gray-500 text-center mb-3">
                Please make sure your room is well organized before uploading photos, 
                to increase your chances of verification
            </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Owner Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Owner Contact Number"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full border border-gray-300 p-3 rounded-lg cursor-pointer focus:ring-2 focus:ring-green-400 outline-none"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:scale-105 transition"
            >
              Submit 🚀
            </button>
          </div>
        </form>
      )}
    </div>
  </div>
)}

    </div>
  );
}
