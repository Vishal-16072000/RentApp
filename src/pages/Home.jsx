import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PostAndEarnBanner from "../components/PostandEarnBanner";
import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import FooterNav from "../components/FooterNav";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";


export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const [liked, setLiked] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?.role === "owner") {
      navigate("/owner-dashboard");
    }
  }, [user, navigate]);


  const MostLovedRooms = [
    {
      id: 1,
      title: "Room in Noida",
      price: "₹15,400/month",
      rating: 4.82,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1411615243808363308/original/012b494b-80a6-4d86-96b6-40de654b331e.jpeg?im_w=720",
    },
    {
      id: 2,
      title: "Flat in Greater Noida",
      price: "₹21,700/month",
      rating: 4.93,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1263063191755786170/original/20273d45-d182-4e67-88f4-f0431d4c233a.jpeg?im_w=720",
    },
    {
      id: 3,
      title: "PG near Baner",
      price: "₹18,300/month",
      rating: 4.75,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1462993335741063712/original/d2e02872-b82c-4046-9eaf-1affa05c0520.jpeg?im_w=720",
    },
    {
      id: 4,
      title: "Studio in Gurgaon",
      price: "₹26,500/month",
      rating: 4.88,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1426683331327047735/original/a723fb11-5e85-4f10-8199-e327b17ed64f.jpeg?im_w=720",
    },
    {
      id: 5,
      title: "1BHK in Pune",
      price: "₹14,000/month",
      rating: 4.79,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-32302837/original/0a2a80a6-7fe4-419c-bdf8-bb55ef1c3903.jpeg?im_w=720",
    },
    {
      id: 6,
      title: "Luxury Flat in Delhi",
      price: "₹17,800/month",
      rating: 4.95,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1377639464211037112/original/0f4eb510-81af-4584-8339-9edf851b607c.jpeg?im_w=720",
    },
  ];

  const AvaiableSoonRooms = [
    {
      id: 1,
      title: "Room in Noida",
      price: "₹15,400/month",
      rating: 4.82,
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1462993335741063712/original/d2e02872-b82c-4046-9eaf-1affa05c0520.jpeg?im_w=720",
    },
    {
        id: 2,
        title: "Flat in Greater Noida",
        price: "₹21,700/month",
        rating: 4.93,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1426683331327047735/original/a723fb11-5e85-4f10-8199-e327b17ed64f.jpeg?im_w=720",
    },
    {
        id: 3,
        title: "PG near Baner",
        price: "₹18,300/month",
        rating: 4.75,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1377639464211037112/original/0f4eb510-81af-4584-8339-9edf851b607c.jpeg?im_w=720",
    },
    {
        id: 4,
        title: "Studio in Gurgaon",
        price: "₹26,500/month",
        rating: 4.88,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1263063191755786170/original/20273d45-d182-4e67-88f4-f0431d4c233a.jpeg?im_w=720",
    },
    {
        id: 5,
        title: "1BHK in Pune",
        price: "₹14,000/month",
        rating: 4.79,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-32302837/original/0a2a80a6-7fe4-419c-bdf8-bb55ef1c3903.jpeg?im_w=720",
    },
    {
        id: 6,
        title: "Luxury Flat in Delhi",
        price: "₹17,800/month",
        rating: 4.95,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1411615243808363308/original/012b494b-80a6-4d86-96b6-40de654b331e.jpeg?im_w=720",
    },
  ];
  

  return (
    <>
      <Navbar />
      <div className="p-4 h-auto bg-gray-50 mt-16 mb-12">
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

        {/* Most Loved Rooms Nearby */}
        <div className="mt-5">
            <h1 className="font-bold text-lg mb-3">Most Loved Rooms Nearby 
            <span className="bg-white text-green-500 text-xs font-medium px-2 py-1 rounded-full shadow ml-2">
                Availble
            </span>
            </h1>

  {/* Scrollable container */}

        <div className="flex overflow-x-auto gap-2 scrollbar-hide pb-2 ">
            {MostLovedRooms.map((room) => (
            <div
                key={room.id}
                className=" rounded-2xl  hover:shadow-lg transition relative overflow-hidden flex-shrink-0 w-56"
            >

                {/* Wishlist Heart */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <CiHeart className="text-xl text-gray-600" />
                </button>

                {/* Image */}
                <img
                src={room.image}
                alt={room.title}
                className="w-full h-40 object-cover"
                />

                {/* Details */}
                <div className="p-3">
                
                <h3 className="font-semibold text-gray-800 text-sm">{room.title}</h3>
                <p className="text-sm text-gray-600">{room.price}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    ⭐ <span className="ml-1">{room.rating}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>

            {/* Available in next 5-7 days*/}
        <div className="mt-5">
            <h1 className="font-bold text-lg mb-3">Available in 5-7 days
            <span className="bg-white text-orange-500 text-xs font-medium px-2 py-1 rounded-full shadow ml-2">
                Availble soon
            </span>
            </h1>

        <div className="flex overflow-x-auto gap-2 scrollbar-hide pb-2 ">
            {AvaiableSoonRooms.map((room) => (
            <div
                key={room.id}
                className=" rounded-2xl  hover:shadow-lg transition relative overflow-hidden flex-shrink-0 w-56"
            >

                {/* Wishlist Heart */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <CiHeart className="text-xl text-gray-600" />
                </button>

                {/* Image */}
                <img
                src={room.image}
                alt={room.title}
                className="w-full h-40 object-cover"
                />

                {/* Details */}
                <div className="p-3">
                
                <h3 className="font-semibold text-gray-800 text-sm">{room.title}</h3>
                <p className="text-sm text-gray-600">{room.price}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    ⭐ <span className="ml-1">{room.rating}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
      </div>
      

      <div className="md:hidden">
        <FooterNav/>
      </div>
    </>
  );
}
