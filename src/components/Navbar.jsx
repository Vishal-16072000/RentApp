import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin, Gift, Home, Phone, Settings, LogOut } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white shadow">
      {/* Left side: Logo */}
      <div className="flex items-center gap-26">
        <h1 className="text-xl font-bold">RenterApp</h1>
        <div className="flex gap-1 cursor-pointer min-w-9">
            <MapPin size={22}/>
            <div className="h-6 overflow-hidden">Noida, Sec-62</div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 font-medium">
        <Link to="/home">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/refer">Refer & Earn</Link>
        <Link to="/owners-">Owner's Planet</Link>
        <Link to="/contact">Contact Us</Link>
        <button className="hover:underline">Logout</button>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu size={28} />
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col p-4 text-gray-800 space-y-4">
          <Link to="/refer" className="flex items-center gap-3 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            <Gift size={20} /> Refer & Earn
          </Link>
          <Link to="/owner-welcome" className="flex items-center gap-3 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            <Home size={20} /> Owner's Planet
          </Link>
          <Link to="/contact" className="flex items-center gap-3 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            <Phone size={20} /> Contact Us / Help
          </Link>
          <Link to="/settings" className="flex items-center gap-3 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            <Settings size={20} /> Settings
          </Link>
          <button className="flex items-center gap-3 hover:text-red-600" onClick={() => setIsOpen(false)}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Backdrop (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
