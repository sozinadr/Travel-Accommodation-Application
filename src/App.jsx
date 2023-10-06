import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Login from "./assets/components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
