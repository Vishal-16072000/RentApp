import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { LogOut, Edit, Home, Bookmark, Bell, HelpCircle, CreditCard } from "lucide-react";
import { clearUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterNav from "@/components/FooterNav";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <>
    <Navbar/>
    <div className="p-4 bg-gray-50 min-h-[93vh] flex flex-col">
      {/* Top Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16 text-lg font-bold bg-indigo-500 text-white">
          {user?.name?.[0]?.toUpperCase() || "U"}
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{user?.name || "Guest"}</h2>
          <p className="text-sm text-gray-500">{user?.role || "Tenant"}</p>
          <p className="text-sm text-gray-500">{user?.phone}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
        >
          <Edit size={18} />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <p className="text-lg font-semibold">4</p>
          <p className="text-xs text-gray-500">Bookings</p>
        </div>
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <p className="text-lg font-semibold">2</p>
          <p className="text-xs text-gray-500">Agreements</p>
        </div>
        <div className="bg-white p-3 rounded-xl shadow text-center">
          <p className="text-lg font-semibold">₹12k</p>
          <p className="text-xs text-gray-500">Payments</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-white rounded-2xl shadow divide-y mb-6">
        <MenuItem icon={<Home size={18} />} label="My Properties" />
        <MenuItem icon={<Bookmark size={18} />} label="Saved Rooms" />
        <MenuItem icon={<CreditCard size={18} />} label="Payment History" />
        <MenuItem icon={<Bell size={18} />} label="Notifications" />
        <MenuItem icon={<HelpCircle size={18} />} label="Help & Support" />
      </div>

      {/* Logout Button */}
      <Button
        onClick={handleLogout}
        variant="destructive"
        className="mt-auto flex items-center gap-2"
      >
        <LogOut size={18} />
        Logout
      </Button>
    </div>
    <FooterNav/>
    </>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50">
      <span className="text-gray-600">{icon}</span>
      <p className="ml-3 text-gray-700">{label}</p>
    </div>
  );
}
