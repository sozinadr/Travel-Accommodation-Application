import React, { useState } from "react";
import IMAGES from "../../Images/Images";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-gray-100 px-4 py-8">
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
          <img className="m-4 w-10 h-10 p-1" src={IMAGES.Icon6} />
          <h1>F&Q</h1>
        </div>
      </div>

      {/* Contact Information & Description Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <p>Address: 123 Main St, City, Country 12345</p>
        <p>Email: contact@website.com</p>
        <p>Phone: +123 456 7890</p>
        <p className="text-gray-600">
          Our website is dedicated to helping travelers find the best
          accommodations for their needs. Whether you're on a business trip or a
          vacation, we've got you covered!
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 w-full border rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 w-full border rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 w-full border rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="2"
              className="p-2 w-full border rounded"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-2 w-full border rounded"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
