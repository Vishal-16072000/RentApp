import { useDispatch } from "react-redux";
import { setRole } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function OwnerWelcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCongrats, setShowCongrats] = useState(false);

  const activateOwner = () => {
    dispatch(setRole("owner"));
    setShowCongrats(true); // show popup

    // redirect after 2.5 seconds
    setTimeout(() => {
      navigate("/owner-dashboard");
    }, 2500);
  };

  const facilities = [
    "🏠 Tenant self-connect, no broker ads",
    "💰 Rent auto-paid every month",
    "📊 Full payment info on dashboard",
    "🛏 Room-wise tenant & occupancy details",
    "📄 Agreements & Aadhar stored safely",
    "🛠 Maintenance handled by RentApp",
    "🚀 Insights to boost your revenue",
    "🔔 Smart notifications & alerts",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 relative">
      <div className="bg-white md:rounded-2xl shadow-2xl p-4 md:p-10 max-w-3xl w-full animate-fadeIn">
        <h1 className="text-[21px] font-extrabold text-center text-indigo-700 mb-6">
          🌟 Welcome, Property Owner! 🌟
        </h1>
        <p className="text-gray-700 text-center text-sm">
          Manage your rental properties effortlessly & securely with RentApp
        </p>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 mb-16">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className=" text-sm flex items-center gap-3 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-indigo-800 font-semibold px-5 py-2 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="text-xl">{item.split(" ")[0]}</span>
              <span className="truncate">{item.split(" ").slice(1).join(" ")}</span>
            </div>
          ))}
        </div>

        <button
          onClick={activateOwner}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold py-3 cursor-pointer rounded-2xl shadow-lg transform transition hover:-translate-y-1 hover:scale-105"
        >
          🤝 Activate My Owner Account
        </button>
      </div>

      {/* Congratulation Popup */}
      {/* Smooth animated congrats popup with blurred background */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
          showCongrats
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred background */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-500"></div>
        <div
          className={`relative transition-all duration-500 ${
            showCongrats
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-90 opacity-0 translate-y-8"
          }`}
          style={{ transitionProperty: "opacity, transform, scale" }}
        >
          {/* Animated Confetti */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-64 h-64 animate-spin-slow opacity-70"
              style={{
                position: "absolute",
                left: "-4rem",
                top: "-4rem",
                zIndex: 0,
              }}
              viewBox="0 0 256 256"
              fill="none"
            >
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#a5b4fc"
                strokeWidth="8"
                strokeDasharray="12 24"
              />
              <circle
                cx="128"
                cy="128"
                r="100"
                stroke="#f472b6"
                strokeWidth="6"
                strokeDasharray="8 16"
              />
              <circle
                cx="128"
                cy="128"
                r="80"
                stroke="#facc15"
                strokeWidth="4"
                strokeDasharray="6 12"
              />
            </svg>
          </div>
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center shadow-xl relative z-10 transition-all duration-500">
            {/* Animated Green Tick */}
            <div className="text-green-500 text-6xl mb-4 animate-bounce-slow drop-shadow-lg">
              ✅
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center animate-fadeIn">
              Congratulations!
            </h2>
            <p className="text-gray-600 text-center animate-fadeIn delay-200">
              You are now an Owner. Welcome aboard 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
