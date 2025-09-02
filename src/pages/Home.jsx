import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PostAndEarnBanner from "../components/PostandEarnBanner";
import { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import FooterNav from "../components/FooterNav";

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?.role === "owner") {
      navigate("/owner-dashboard");
    }
  }, [user, navigate]);

  

  return (
    <>
      <Navbar />
      <div className="p-4 h-[87vh] bg-gray-50">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-semibold">
            Welcome, {user?.name || "Guest"} 🎉
          </h2>
          <p className="text-sm opacity-90">
            Find your next room 🚀
            <br />
            <span className="italic text-yellow-200">
              Unlock comfort, convenience, and community—all in one place.
            </span>
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
            <h3 className="font-semibold text-gray-800">Find Rooms</h3>
            <p className="text-sm text-gray-500">
              Browse nearby available rooms
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
            <h3 className="font-semibold text-gray-800">My Bookings</h3>
            <p className="text-sm text-gray-500">Track and manage your bookings</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition col-span-2">
            <h3 className="font-semibold text-gray-800">Saved Rooms</h3>
            <p className="text-sm text-gray-500">
              Check your favorite saved listings
            </p>
          </div>
        </div>

        {/* Post and Earn Banner */}
        <PostAndEarnBanner />
      </div>

      <div className="md:hidden">
        <FooterNav/>
      </div>
    </>
  );
}
