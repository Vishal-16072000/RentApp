import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterNav from "../components/FooterNav";

export default function Properties() {
  const user = useSelector((state) => state.auth.user);
  const [tab, setTab] = useState("browse");

  // Dummy data
  const availableRooms = [
    {
      id: 1,
      title: "1BHK near IT Park",
      location: "Pune",
      rent: 8000,
      images: [
        "https://rook.gumlet.io/uploads/center/cover_photo/5cb4099066a2f614185cbb41/jpeg_optimizer_23__9_.jpg?compress=true&format=auto&quality=75&dpr=auto&ar=1.5",
        "https://rook.gumlet.io/uploads/center_caption_photo/photo/668f7a255c34cb0001b9d83c/jpeg_optimizer_15__57_.jpg?compress=true&format=auto&quality=75&dpr=auto&ar=1.5",
        "https://rook.gumlet.io/uploads/center_caption_photo/photo/668f7a255c34cb0001b9d83c/jpeg_optimizer_15__57_.jpg?compress=true&format=auto&quality=75&dpr=auto&ar=1.5"
      ],
      status : "Available"
    },
    {
      id: 2,
      title: "2BHK with Balcony",
      location: "Delhi",
      rent: 12000,
      images: [
        "https://property-img.s3.ap-south-1.amazonaws.com/thumb_17373746690.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk16TWwWI7HIk6arslV3HSfD1gbghchPErL0S6cplqOPM0Ek12Kt-TssuEr3lf5FKJnF4&usqp=CAU",
        "https://housing-images.n7net.in/01c16c28/487543bbf83acb064a7f5c4c846c1ee5/v0/medium/2_bhk_apartment-for-rent-perumbakkam-Chennai-bedroom.jpg",
      ],
      status : "Available"
    },
  ];

  const upcomingRooms = [
    {
      id: 3,
      title: "PG near Baner",
      location: "Pune",
      rent: 6000,
      availableIn: "5 days",
      images: [
        "https://cupliv.com/images/bangalore/Hyphen-Club-Lush/1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28QWrewYy6LOG0KTmqZEAr3NTLnVLvIs6ZEqd16v1U6EgbdWhaDxEfKPdc1qFl2WmPaA&usqp=CAU",
        "https://img.squareyards.com/secondaryPortal/IN_638767176088090155-040325084008408.jpg?aio=w-360;h-150;crop;",
      ],
    },
  ];



  // Tenant View
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
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">₹ Rent</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">Room Type</button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">Amenities</button>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableRooms.map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 cursor-pointer"
          >
            <div className="w-full mb-2 overflow-x-auto">
              <div
                className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {item.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Property ${idx + 1}`}
                    className="rounded-lg min-w-full max-w-full h-48 object-cover snap-center"
                    style={{ flex: "0 0 100%" }}
                  />
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.rent+300}/month • {item.location}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-green-600">{item.status}</span>
              <button className="text-indigo-600 font-medium">View Details</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Upcoming Section */}
      <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Upcoming (within 7-8 days)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcomingRooms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 cursor-pointer"
          >
            <div className="w-full mb-2 overflow-x-auto">
              <div
                className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {item.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Property ${idx + 1}`}
                    className="rounded-lg min-w-full max-w-full h-48 object-cover snap-center"
                    style={{ flex: "0 0 100%" }}
                  />
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mt-2">{item.title}</h3>
            <p className="text-sm text-gray-500">
              ₹{item.rent}/month • {item.location}
            </p>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-yellow-600">Available in {item.availableIn}</span>
              <button className="text-indigo-600 font-medium">View Details</button>
            </div>
          </div>
        ))}
        </div>
    </div>
    </div>
    <FooterNav/>
    </>
  );

  // Owner View (as before)
  const OwnerView = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Properties</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700">
          + Add Property
        </button>
      </div>

      {/* Owner Properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2].map((p) => (
          <div
            key={p}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Property"
              className="rounded-lg mb-2"
            />
            <h3 className="font-semibold text-gray-800">PG Rooms at Baner</h3>
            <p className="text-sm text-gray-500">10 rooms • 7 occupied</p>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-green-600">Active</span>
              <button className="text-indigo-600 font-medium">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-[93vh] bg-gray-50 overflow-y-auto">
      {user?.role === "owner" ? <OwnerView /> : <TenantView />}
    </div>
  );
}
