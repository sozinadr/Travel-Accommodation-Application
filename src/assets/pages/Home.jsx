import React, { useState } from "react";
import img from "/public/herosection.jpg";

const Home = () => {
  let [isLoggedIn, setLogIn] = useState(true);

  return (
    <div
      className="h-full bg-blue-50 text-blue-900 font-sans"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <header
        className="p-4 shadow-lg bg-white text-black rounded-lg sticky top-0 z-50"
        style={{ zIndex: 1000 }} // Ensuring the navbar stays on top of other elements
      >
        <nav className="container mx-auto flex justify-between items-center rounded-lg">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-8 rounded-lg hover:custom-shadow transition-shadow duration-300">
              Booking
            </h1>
            <ul className="flex space-x-4 text-sm">
              <li>
                <a
                  href="#home"
                  className="no-underline hover:custom-shadow transition-shadow duration-300 rounded-lg px-2 py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#map"
                  className="no-underline hover:custom-shadow transition-shadow duration-300 rounded-lg px-2 py-1"
                >
                  Map
                </a>
              </li>
              <li>
                <a
                  href="#accommodations"
                  className="no-underline hover:custom-shadow transition-shadow duration-300 rounded-lg px-2 py-1"
                >
                  Accommodations
                </a>
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

      <div className="h-[60vh] flex justify-center items-center">
        <div className="container relative w-full h-[45vh] flex flex-col justify-center items-center rounded-3xl mx-14  ">
          <img
            src={img}
            alt="Scenic View"
            className="my-image w-full h-full object-cover rounded-3xl bg-bottom" // Added custom class for styling
          />{" "}
          {/* <button
            className="absolute top-0 right-0 bg-white p-2 rounded"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Hover me
          </button> */}
          <div className=" absolute bottom-4 bg-white rounded-full p-3 flex  ">
            <ul className="flex justify-center text-black container  ">
              <li className="flex flex-col w-[250px] items-center">
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
              <div className="overlay w-full ">
                <span id="span"> Welcome to jurasic park</span>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl font-bold">
          {isLoggedIn ? "Welcome, User" : "Login"}
        </h1>
      </div>
    </div>
  );
};

export default Home;
