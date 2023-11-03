import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapBox from "../components/MapBox";
import IMAGES from "../../Images/Images";

const MapPage = () => {
  const [isLoggedIn, setLogIn] = useState(true);
  const [theme, setTheme] = useState("light");
  const [isLight, setLight] = useState(true);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data here and set it to state
    // For now, it's mocked data
    const mockWeather = {
      temperature: 25,
      weather_descriptions: ["Sunny"],
      weather_icons: [IMAGES.Image24], // replace with a real weather icon URL
    };
    setWeather(mockWeather);
  }, []);

  const toggleTheme = () => {
    setLight(!isLight);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`w-full min-h-screen font-sans ${
        theme === "light" ? "bg-white text-blue-900" : "bg-gray-900 text-white"
      } p-4`}
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <header className="shadow-lg bg-white text-black rounded-lg sticky top-0 z-50 p-4">
        <nav className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <h1 className="text-2xl lg:text-4xl font-bold">Booking</h1>
            <ul className="flex space-x-4 text-sm lg:text-base">
              {/* Changed classes to style React Router Links */}
              <li>
                <Link to="/" className="text-blue-900 hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-blue-900 hover:text-blue-700">
                  Map
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodations"
                  className="text-blue-900 hover:text-blue-700"
                >
                  Accommodations
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="text-blue-900 hover:text-blue-300 p-2"
              aria-label="Search"
            >
              <i className="fas fa-search"></i>
            </button>
            <select className="p-2 bg-white text-blue-900 rounded border hover:shadow-lg">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <button
              onClick={toggleTheme}
              className="text-blue-900 hover:text-blue-300 p-2"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <i className={`fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
            </button>
            {isLoggedIn ? (
              <button
                onClick={() => setLogIn(false)}
                className="bg-white text-blue-900 p-2 rounded hover:bg-blue-100 border hover:shadow-lg"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setLogIn(true)}
                className="bg-white text-blue-900 p-2 rounded hover:bg-blue-100 border hover:shadow-lg"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>

      {weather && (
        <div className="p-4 bg-white rounded-lg shadow-lg mt-4">
          <h2 className="text-lg font-semibold">Weather in New York</h2>
          <p className="text-sm">Temperature: {weather.temperature}°C</p>
          <p className="text-sm">
            Weather Descriptions: {weather.weather_descriptions[0]}
          </p>
          <img src={IMAGES.Image24} alt="Weather icon" className="w-12 h-12" />
        </div>
      )}
      <div className="h-[100vh] w-full">
        <MapBox />
      </div>
    </div>
  );
};

export default MapPage;
