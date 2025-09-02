import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import Profile from "./pages/Profile"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import OwnerWelcome from "./components/Owner/OwnerWelcome"
import OwnerDashboard from "./components/Owner/OwnerDashboard"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <Router>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/owner-welcome" element={<OwnerWelcome />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
