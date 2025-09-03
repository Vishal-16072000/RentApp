import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterNav from "../components/FooterNav";

export default function Properties() {
  const user = useSelector((state) => state.auth.user);
  const [tab, setTab] = useState("browse");

  // 🏷️ Properties categorized
  const propertiesByCategory = {
    rooms: [
      {
        id: 1,
        title: "Single Room near IT Park",
        location: "Pune",
        rent: 5000,
        images: [
          "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
        ],
        status: "Available",
      },
    ],
    flats: [
      {
        id: 2,
        title: "2BHK with Balcony",
        location: "Delhi",
        rent: 12000,
        images: [
          "https://housing-images.n7net.in/01c16c28/487543bbf83acb064a7f5c4c846c1ee5/v0/medium/2_bhk_apartment-for-rent-perumbakkam-Chennai-bedroom.jpg",
        ],
        status: "Available",
      },
    ],
    shops: [
      {
        id: 3,
        title: "Shop in Market Area",
        location: "Mumbai",
        rent: 15000,
        images: [
          "https://5.imimg.com/data5/GL/CP/MY-1884972/retail-shop-interior.jpg",
        ],
        status: "Available",
      },
    ],
    offices: [
      {
        id: 4,
        title: "Office Space at MG Road",
        location: "Bangalore",
        rent: 30000,
        images: [
          "https://www.officespacesny.com/images/office-space.jpg",
        ],
        status: "Available",
      },
    ],
    land: [
      {
        id: 5,
        title: "Open Land near Highway",
        location: "Nagpur",
        rent: 25000,
        images: [
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        ],
        status: "Available",
      },
    ],
  };

  // 🏡 Tenant View
  const TenantView = () => (
    <>
      <Navbar />
      <div className="p-4">
        {/* Search & Filters */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by location, landmark..."
            className="w-full p-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          />
          <div className="flex gap-2 mt-2 flex-wrap">
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">
              ₹ Rent
            </button>
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">
              Property Type
            </button>
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">
              Amenities
            </button>
          </div>
        </div>

        {/* Category-wise Properties */}
        {Object.entries(propertiesByCategory).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-semibold mb-2 capitalize">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 cursor-pointer"
                >
                  <div className="w-full mb-2 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.rent}/month • {item.location}
                  </p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-green-600">{item.status}</span>
                    <button className="text-indigo-600 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <FooterNav />
    </>
  );

  // 👨‍💼 Owner View
  const OwnerView = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Properties</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700">
          + Add Property
        </button>
      </div>

      {Object.entries(propertiesByCategory).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-semibold mb-2 capitalize">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="rounded-lg mb-2 w-full h-48 object-cover"
                />
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.location}</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-green-600">{item.status}</span>
                  <button className="text-indigo-600 font-medium">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-[93vh] bg-gray-50 overflow-y-auto">
      {user?.role === "owner" ? <OwnerView /> : <TenantView />}
    </div>
  );
}
