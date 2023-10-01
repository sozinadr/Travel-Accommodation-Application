import React, { useState } from "react";
import Button from "@mui/material/Button";
const Home = () => {
  let [isLoggedIn, setLogIn] = useState(true);

  return (
    <div className="h-full bg-blue-50 text-blue-900">
      <header className="p-4 shadow-lg bg-blue-900 text-white rounded-lg">
        <nav className="container mx-auto flex justify-between items-center rounded-lg">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold mr-8 rounded-lg">Name</h1>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a
                  href="#home"
                  className="hover:underline rounded-lg px-2 py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#map" className="hover:underline rounded-lg px-2 py-1">
                  Map
                </a>
              </li>
              <li>
                <a
                  href="#accommodations"
                  className="hover:underline rounded-lg px-2 py-1"
                >
                  Accommodations
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6 text-lg">
            <button className="text-white hover:text-blue-300 rounded-full p-2">
              <i className="fas fa-search"></i>
            </button>
            <select className="p-2 bg-white text-blue-900 rounded-full border">
              <option>English</option>
              <option>Spanish</option>
            </select>
            {isLoggedIn ? (
              <button
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 border"
                onClick={() => setLogIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 border"
                onClick={() => setLogIn(true)}
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl font-bold">
          {isLoggedIn ? "Welcome,  User" : " Login"}
        </h1>
      </div>
    </div>
  );
};

export default Home;
