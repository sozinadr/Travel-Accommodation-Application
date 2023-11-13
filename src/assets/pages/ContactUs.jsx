import React, { useState } from "react";
import IMAGES from "../../Images/Images"; // Ensure you have appropriate illustrations
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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-8">
      {/* Contact Information & Description Card */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-1/3 lg:w-1/4 space-y-6 mr-4 transform hover:scale-105 transition duration-500 ease-in-out">
        <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 inline-block px-3 py-1 rounded">
          Contact Information
        </h2>
        <p>Address: 123 Main St, City, Country 12345</p>
        <p>Email: contact@website.com</p>
        <p>Phone: +123 456 7890</p>
        <p className="text-gray-600">
          Our website is dedicated to helping travelers find the best
          accommodations for their needs. Whether you're on a business trip or a
          vacation, we've got you covered!
        </p>
        <img
          src={IMAGES.Image2}
          alt="Illustration"
          className="w-full h-auto mt-4"
        />{" "}
        {/* Replace with your illustration */}
      </div>

      {/* Contact Form Card */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 space-y-6 ml-4 transform hover:scale-105 transition duration-500 ease-in-out">
        <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 inline-block px-3 py-1 rounded">
          Send us a message
        </h2>
        <form
          action="https://formsubmit.co/sozyarnadir@gmail.com"
          method="POST"
          className="space-y-4"
        >
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
