import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, Building2, User } from "lucide-react";

export default function FooterNav(){

  const navItems = [
    { name: "Home", path: "/home", icon: <HomeIcon size={20} /> },
    { name: "Properties", path: "/properties", icon: <Building2 size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

    return(
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center text-sm ${
              location.pathname === item.path ? "text-blue-600" : "text-gray-500"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
        </div>
    )
}