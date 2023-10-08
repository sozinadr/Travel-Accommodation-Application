import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/components/Login";
import SignUpAuth from "./assets/components/SignUpAuth";
import MapPage from "./assets/pages/MapPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/accomodations" element={<Login />} /> */}

        <Route path="/signup" element={<SignUpAuth />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}

export default App;
