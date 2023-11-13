import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Website Name</div>

        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button onClick={toggleDarkMode} className="px-4 py-2 rounded">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
