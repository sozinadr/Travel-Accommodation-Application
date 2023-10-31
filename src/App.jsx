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

        {/* <Route path="/accomodations" element={<Login />} /> */}

        <Route path="/signup" element={<SignUpAuth />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}

export default App;
