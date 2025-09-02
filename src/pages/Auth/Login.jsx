import { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { toast } from "react-toastify";



const auth = getAuth(app);

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      toast.success("Otp sent successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      const currentUser = result.user;

      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          name: fullName,
          phone: currentUser.phoneNumber,
          createdAt: new Date(),
        },
        { merge: true }
      );

      dispatch(setUser({ name: fullName, phone: phone, role : "tenant" }));
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Invalid OTP ❌");
    }
  };


  return (
    <>
      {/* Navbar */}

      {/* Background */}
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100">
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white shadow">
        <h1 className="text-xl font-bold">RenterApp</h1>
      </nav>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className=" backdrop-blur-xl p-8 md:min-w-96 w-80 bg-white/40 rounded-2xl">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
                Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
                Enter your details to continue
            </p>
          </div>

          {/* Inputs */}
          {!confirmationResult && (
            <div className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  // Only allow A-Z, a-z, and spaces
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  setFullName(value);
                }}
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
              />

              <input
                type="tel"
                inputMode="numeric"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9+ ]/g, ""))}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
                autoComplete="tel"
              />

              <button
                onClick={sendOtp}
                disabled={
                  !fullName.trim() ||
                  !/^(\+91\s?\d{10})$/.test(phone.trim())
                }
                className={`w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-xl cursor-pointer font-medium transition ${
                  !fullName.trim() || !/^(\+91\s?\d{10})$/.test(phone.trim())
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
              >
                Send OTP
              </button>
            </div>
          )}

          {/* OTP Field */}
          {confirmationResult && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <button
                onClick={verifyOtp}
                className="w-full bg-gradient-to-r from-blue-400 to-emerald-400 text-white py-2 rounded-xl font-medium hover:scale-105 transition"
              >
                Verify OTP
              </button>
            </>
          )}

        </div>
          <div id="recaptcha-container"></div>
      </div>
      </div>
    </>
  );
}