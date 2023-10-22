import React from "react";
import IMAGES from "../../Images/Images";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <div className="flex w-full h-[100vh]">
        <div className=" w-1/4 mt-4">
          <div className="flex border-1 border-black justify-start ml-2 items-center">
            <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon1} />
            <h1>Dashboard</h1>
          </div>
          <Link
            to="/users"
            className="flex border-1 border-black justify-start ml-2 items-center"
          >
            {" "}
            <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon1} />
            <h1>Users</h1>{" "}
          </Link>
          <div className="flex border-1 border-black justify-start ml-2 items-center">
            <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon4} />
            <h1>Clients</h1>
          </div>
          <div className="flex border-1 border-black justify-start ml-2 items-center">
            <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon3} />
            <h1>Contacts</h1>
          </div>
          <div className="flex border-1 border-black justify-start ml-2 items-center">
            <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon2} />
            <h1>About Us</h1>
          </div>
          <div className="flex border-1 border-black justify-start ml-2 items-center">
            <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon2} />
            <h1>F&Q</h1>
          </div>
        </div>
        <div className="bg-red-500 w-3/4 flex flex-col ">
          <div className="h-[10vh] bg-blue-500">
            <Navbar />
          </div>
          <div className="">{<Dashboard />}</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
