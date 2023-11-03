import React, { useState, useEffect } from "react";
import img from "/public/herosection.jpg";
import FooterComponent from "../components/FooterComponent";
import Places from "../components/Places";
import Hotels from "../components/Hotels";
import IMAGES from "../../Images/Images";
import MapBox from "../components/MapBox";
import { Link } from "react-router-dom";

const Home = () => {
  let [isLoggedIn, setLogIn] = useState(true);
  let [theme, setTheme] = useState("light"); // Added state for theme management
  let [isLight, setLight] = useState(true);

  if (localStorage.getItem("email")) () => setLogIn(false);
  const logIn = () => setLogIn(true); // Added separate function for login
  const handleLogOut = () => {
    () => setLogIn(false);
    localStorage.clear();
  };
  const toggleTheme = () => {
    setLight(!isLight); // Toggle light state
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }; // Added function to toggle theme

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
            <button className="text-black hover:custom-shadow transition-shadow duration-300 rounded-full p-2">
              <i className="fas fa-search"></i>
            </button>
            <select className="p-2 bg-white text-black rounded-full border hover:custom-shadow transition-shadow duration-300">
              <option>English</option>
              <option>Kurdish</option>
              <option>Arabic</option>
            </select>
            <button
              // CHANGED: Added onClick event to toggle theme and added tooltip
              className="text-black  hover:custom-shadow transition-shadow duration-300 rounded-full p-2"
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
                className="bg-white text-black p-2 rounded-full hover:bg-blue-100 border hover:custom-shadow transition-shadow duration-300"
                onClick={handleLogOut}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-white text-black p-2 rounded-full hover:bg-blue-100 border hover:custom-shadow transition-shadow duration-300"
                onClick={() => setLogIn(true)}
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>

      <div className="h-[60vh]  flex justify-center items-center w-full">
        <div className="container relative w-full h-[45vh] flex flex-col justify-center items-center rounded-3xl mx-14  ">
          <img
            src={img}
            alt="Scenic View"
            className="my-image w-full h-full object-cover rounded-3xl bg-bottom" // Added custom class for styling
          />{" "}
          <div className=" absolute bottom-4 bg-white rounded-full p-3 flex  ">
            <ul className="flex justify-center text-black container  ">
              <li className="flex flex-col w-[250px] items-center border-r-2 border-black">
                Location
                <span className="opacity-60	">Where are you going?</span>
              </li>{" "}
              <li className="flex flex-col w-[250px] items-center ">
                Check in
                <span className="opacity-60	">Add date</span>
              </li>
              <li className="flex flex-col w-[250px] items-center border-x-2 border-black">
                {" "}
                Check out
                <span className="opacity-60	">Add date</span>
              </li>
              <li className="flex flex-col w-[250px] items-center">
                {" "}
                Guest
                <span className="opacity-60	">Number of guests</span>
              </li>
              <div className="overlay w-full overflow-hidden ">
                <span id="span"> Book your Accommodation </span>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <Places />
      <Hotels />

      <div className="w-full my-10 flex justify-center flex-col items-center overflow-hidden ">
        <h1 className="text-4xl font-bold text-center text-black py-4  ">
          Map
        </h1>
        <div className="w-[1050px] my-10 flex justify-center flex-col items-center overflow-hidden h-[50vh] rounded-3xl shadow-sm shadow-black">
          <MapBox />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Home;
