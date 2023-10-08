import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  let [isLoggedIn, setLogIn] = useState(true);
  let [theme, setTheme] = useState("light"); // Added state for theme management
  let [isLight, setLight] = useState(true);
  // const [weather, setWeather] = useState(null); // State to hold weather data

  useEffect(() => {
    const logIn = () => setLogIn(true); // Added separate function for login
    const logOut = () => setLogIn(false); // Added separate function for logout
    const toggleTheme = () => {
      setLight(!isLight); // Toggle light state
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }; // Added function to toggle theme
  }, []);
  return (
    <div
      className={`h-full font-sans ${
        theme === "light" ? "bg-white text-blue-900" : "bg-gray-900 text-white"
      }`} // Added dynamic classes based on theme
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <header
        className="p-4 shadow-lg bg-white text-black rounded-lg sticky top-0 z-50"
        style={{ zIndex: 1000 }}
      >
        <nav className="container mx-auto flex justify-between items-center rounded-lg">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-8 rounded-lg hover:custom-shadow transition-shadow duration-300">
              Booking
            </h1>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="no-underline hover:custom-shadow transition-shadow duration-300 rounded-lg px-2 py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/map"
                  className="no-underline hover:custom-shadow transition-shadow duration-300 rounded-lg px-2 py-1"
                >
                  Map
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodations"
                  className="no-underline hover:custom-shadow transition-shadow duration-300 rounded-lg px-2 py-1"
                >
                  Accommodations
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <button className="text-blue-900 hover:text-blue-300 hover:custom-shadow transition-shadow duration-300 rounded-full p-2">
              <i className="fas fa-search"></i>
            </button>
            <select className="p-2 bg-white text-blue-900 rounded-full border hover:custom-shadow transition-shadow duration-300">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <button
              // CHANGED: Added onClick event to toggle theme and added tooltip
              className="text-blue-900 hover:text-blue-300 hover:custom-shadow transition-shadow duration-300 rounded-full p-2"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {/* CHANGED: Icon changes based on theme */}
              <img
                className="w-10 h-10"
                src={isLight ? IMAGES.Image24 : IMAGES.Image25}
              />
              <i className={`fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
            </button>
            {isLoggedIn ? (
              <button
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 border hover:custom-shadow transition-shadow duration-300"
                onClick={() => setLogIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 border hover:custom-shadow transition-shadow duration-300"
                onClick={() => setLogIn(true)}
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
