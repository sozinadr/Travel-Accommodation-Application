import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/components/Login";
import SignUpAuth from "./assets/components/SignUpAuth";
import MapPage from "./assets/pages/MapPage";
import Admin from "./assets/pages/Admin";
import Users from "./assets/pages/Users";
import Clients from "./assets/pages/Clients";
import ContactUs from "./assets/pages/ContactUs";
import FAQ from "./assets/pages/FAQ";
import Accommodations from "./assets/pages/Accommodations";
import HotelDetails from "./assets/pages/HotelDetails";
import CurrencyConverter from "./assets/pages/CurrencyConverter";
import UserProfile from "./assets/pages/UserProfile";
import HotelProfile from "./assets/pages/HotelProfile";
import Chatbot from "./assets/components/Chatbot";
import "./App.css";
import HotelBookingPage from "./assets/pages/HotelBookingPage";
import HotelBooking from "./assets/pages/HotelBooking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users" element={<Users />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/hotelDetails" element={<HotelDetails />} />
        <Route path="/currencyConverter" element={<CurrencyConverter />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/hotelProfile" element={<HotelProfile />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/signup" element={<SignUpAuth />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/hotelBookingPage" element={<HotelBookingPage />} />
        <Route path="/hotel/:id" element={<HotelBooking />} />
      </Routes>
    </>
  );
}

export default App;
